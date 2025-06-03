/* global app */
'use strict'
Repository = {

KsAcademyHeadcountGridRow1Cell1Button:{
     launch(){
        Api.openPage('KsAcademyMainPage')
    }
},
KsAcademyHeadcountGridRow2Cell1Dropbox:{
     init() {
            let selectedYear = v("systemValueSelectedYear");
            return {
                datePicked: selectedYear
            };
     },
     pick(){
         Utils.setWidgetValue('systemValueSelectedYear',(v('KsAcademyHeadcountGridRow2Cell1Dropbox').value.split('.')[0]) )
        Api.forceRefresh('BusinessUnitGridTable')
    }
},
KsAcademyHeadcountGridRow2aCell1Dropbox:{
    init: {
        url: (db) => `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue;$expand=Members($select=Name))`,
        type: "POST",
        server: true,
        body: (db) => {
                return {
                    key: 'KsAcademyHeadcountGridRow2aCell1Dropbox_init'
                };
            },
        parsingControl: {
            type: "list",
            query: (r, x) => {
                    let fullUnitName = r.Cells[x].Members[4].Name;
                let fullUnitNameStart= r.Cells[0].Members[4].Name;
                    Utils.setWidgetValue('systemValueSelectedUnit',fullUnitNameStart);

                    let unitNumber = fullUnitNameStart.match(/\d+$/);
                    if (unitNumber) {
                        Utils.setWidgetValue('systemValueSelectedUnitNumber', unitNumber[0]);
                    } else {
                    }

                    return {
                        name: fullUnitName,
                        on: fullUnitName === v('systemValueSelectedUnit')
                    };
                }
        }
    },
     choose() {
            Api.forceRefresh('BusinessUnitGridTable');
            let currentUnit = v('KsAcademyHeadcountGridRow2aCell1Dropbox').value;
            let unitNumber = currentUnit.match(/\d+$/)[0];

            Utils.setWidgetValue('systemValueSelectedUnit', currentUnit);
            Utils.setWidgetValue('systemValueSelectedUnitNumber', unitNumber);
        }
},
KsAcademyHeadcountGridRow2Cell2Segmented:{
    init: {
        execute: (db) => {
                let selectedValue = v("systemValueSelectedValue");
            return [{
                    label: "Base",
                    selected: "Base" == selectedValue,
                    value: "Base"
                },   
                          {
                        label: "Delta",
                        selected: "Delta" == selectedValue,
                        value: "Delta"
                    },
                            {
                        label: "Value",
                        selected: "Value" == selectedValue,
                        value: "Value"
                    }
                    
                ];
            }
    },
    switch: {
        execute: (db) => {
                Utils.setWidgetValue("systemValueSelectedValue", v("KsAcademyHeadcountGridRow2Cell2Segmented").value);
                    Api.updateContent('BusinessUnitGridTable');
                

            }
    }
},
KsAcademyHeadcountGridTable:{
    init: {
        url: (db) => `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue,Consolidated;$expand=Members($select=Name, Attributes/UIName, Attributes/UILevel))`,
        type: "POST",
        server: true,
        body: (db) => {
                return {
                    year : v('systemValueSelectedYear'),
                    value: v('systemValueSelectedValue')
                };
            },
        parsingControl: {
            type: 'script',
            script: (data) => {
                    let result = [],
                        k = 0, c,
                        step = 3,
                        cells = data.Cells,
                        members, row = 0,
                        cell;

                    while (k < cells.length) {
                        cell = cells[k];
                        members = cell.Members;
                        let d = [];

                        c = {
                            title: members[4].Name,
                            widht: '10%',
                            cellWidth: '10%',
                            skin: 'admin_panel',
                            alignment: 'left',
                            paddingLeft: '10px'
                        };

                        d.push(c);

                        
                        for (let i = 0; i < 3; i++) {
                            c = {
                                title: cells[i + k].FormattedValue,
                                alignment: "center-left",
                                paddingLeft: '10px',
                                skin: 'delta_report_data',
                                cellWidth: '4%'
                            };
                            d.push(c);
                        }
                    

                        k = k + step;
                        ++row;
                        result.push(d);
                    }
                    return {
                        content: result
                    };
                }
        }
    }
},
BusinessUnitGridTable:{
    write: {
        url: (db) => `/api/v1/Processes('zSYS Analogic Headcount Input')/tm1.ExecuteWithReturn`,
        type: "POST",
        server: true,
        body: (ctx) => {
                let cell = ctx.getCell();
              return {
                    value: ctx.getEventValues().value,
                  employee: Utils.getGridTableCurrentCell('BusinessUnitGridTable').name,
                  period:Utils.getGridTableCurrentCell('BusinessUnitGridTable').date,
                    unit:v('systemValueSelectedUnit')
                           };
            },
         callback() {
                Api.updateContent("BusinessUnitGridTable");
            }
    },
    init: {
        url: (db) => `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue,Consolidated;$expand=Members($select=Name, Attributes/UIName, Attributes/UILevel))`,
        type: "POST",
        server: true,
        body: (db) => {
                return {  
                    key:  v('systemValueSelectedValue') === 'Delta' ? 'BusinessUnitGridTable_delta_init' : 'BusinessUnitGridTable_init',
                    unit: v('systemValueSelectedUnit'),
                    number: v('systemValueSelectedUnitNumber'),
                    year : v('systemValueSelectedYear'),
                    value: v('systemValueSelectedValue')
                };
            },
        parsingControl: {
            type: 'script',
            script: (data) => {
                    let result = [],
                        k = 0, c,
                        step = 13,
                        cells = data.Cells,
                        members, row = 0,
                        cell;

                    while (k < cells.length) {
                        cell = cells[k];
                        members = cell.Members;
                        let d = [];

                        c = {
                            title: members[4].Name,
                            widht: '10%',
                            cellWidth: '10%',
                            skin: 'admin_panel',
                            alignment: 'left',
                            paddingLeft: '10px'
                        };

                        d.push(c);

                        
                        for (let i = 0; i < 13; i++) {
                            c = {
                                title: cells[i + k].FormattedValue,
                                alignment: "center-left",
                                 editable: v('systemValueSelectedValue') === 'Delta'  && i > 0? true : false,
                                 cellBackgroundColor: v('systemValueSelectedValue') === 'Delta' && i > 0 ? '#FFFFFF' : '#F2F2F2',
                                 name: cells[i + k].Members[4].Name,
                                 date: cells[i + k].Members[5].Name,
                                paddingLeft: '10px',
                                skin: 'delta_report_data',
                                cellWidth: '4%',                            
                            };
                            d.push(c);
                        }
                    

                        k = k + step;
                        ++row;
                        result.push(d);
                    }
                    return {
                        content: result
                    };
                }
        }
    }
},
BusinessUnitGridTableHeaderRowCell1Text:{
     init(){
        return{
            title: v('systemValueSelectedYear')
        }
    }
},
BusinessUnitGridTableHeaderRowCell2Text:{
     init(db,widgetId){
         let index = parseInt(widgetId.split("Cell")[1]) - 1;
        return{
            title: v('systemValueSelectedYear') + index
        }
    }
},
BusinessUnitGridTableHeaderRowCell3Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell4Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell5Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell6Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell7Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell8Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell9Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell10Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell11Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell12Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
BusinessUnitGridTableHeaderRowCell13Text:{
    refernce: "BusinessUnitGridTableHeaderRowCell2Text"
},
KsAcademyProductPlanning:{
     init() {
         Utils.setWidgetValue('systemValueProductPalnningSelectedYear', 2024);
         Utils.setWidgetValue('systemValueDefaultMinimumYear', 2024);
         Utils.setWidgetValue('systemValueDefaultMaximumYear', 2029);
         Utils.setWidgetValue('systemValueproductPriceRangeFilterValues', '');
         Utils.setWidgetValue('systemValueproductSizeFilterValues', '');
         Utils.setWidgetValue('systemValueproductWeightFilterValues', '');
    },
     setYearHelper() {
            let yearHelper = {
                fullYear: v('systemValueSavedYear').fullYear || new Date().getFullYear(),
                year: v('systemValueSavedYear').year || new Date().getFullYear() - 2000,
                currentFullYear: 2025,
                currentYear: 25,
                cellLength: 15,
                increase() {
                    this.fullYear++;
                    this.year++;
                    this.cellLength++;
                },
                decrease() {
                    this.fullYear--;
                    this.year--;
                    this.cellLength--;
                },
                reset() {
                    this.fullYear = 2025;
                    this.year = 25;
                    this.cellLength = 15;
                },
                getLabel() {
                    return 'FY' + this.year;
                },
                getPreviousLabel() {
                    return 'FY' + (this.year - 1);
                },
                getCalendarLabel() {
                    return '20' + this.year;
                },
                getCalendarPreviousLabel() {
                    return '20' + (this.year - 1);
                },
                convert(fyYear) {
                    return Utils.parseNumber(fyYear.replace('FY', '').replace('20', ''));
                },
                isLastYear(fyYear) {
                    return this.convert(fyYear) < this.currentYear && !this.isActualYear(fyYear);
                },
                isFirstYear(fyYear) {
                    return this.convert(fyYear) === 21;
                },
                isActualYear(fyYear) {
                    return this.convert(fyYear) === this.year;
                },
                getBackgroundColor(fyYear) {
                    if (this.isFirstYear(fyYear)) {
                        return {
                            color: '#e9e9e9',
                            skin: 'gray'
                        };
                    }
                    if (!this.isActualYear(fyYear)) {
                        return {
                            color: 'rgba(204,236,248,0.5)',
                            skin: ''
                        };
                    }
                    return false;
                },
                isRewindVisible() {
                    return this.year !== this.currentYear - 2;
                },
                isForwardVisible() {
                    return this.year !== this.currentYear + 5;
                }
            };
            Utils.setWidgetValue('systemValueProductPlanningYearHelper', yearHelper);
            return yearHelper;
        }
},
KsAcademyProductPlanningRow1Cell1Button:{
     launch(ctx){
        Utils.openPopup('seederMainSideBar',ctx)
    }
},
KsAcademyProductPlaningFitler1Filter:{
     launch(ctx) {
        Utils.openPopup('reusableGlobalCompanyPopup', ctx);
    },
     init() {
        return {
            label: v('systemValueGlobalSelectedCountry') ?  `<b style=font-weight:normal>` + 'Country: '+ '</b>'  + v('systemValueGlobalSelectedCountry')  :  `<b style=font-weight:normal>` + 'Country: '+ '</b>'  + 'All',
            iconStyle: {
                margin_left: '-10px'
            },
            labelStyle: {
                padding_right: '5px'
            },
            innerStyle: {
                min_width: '240px',
                display: 'flex'
            },
            visible: true
        }
    }
},
KsAcademyProductPlaningFitler1Filter2:{
     launch(ctx) {
        Utils.openPopup('reusableGlobalCompanyPopup', ctx);
    },
     init() {
        return {
            label: v('systemValueSelectedChannel') ?  `<b style=font-weight:normal>` + 'Channel: '+ '</b>'  + v('systemValueSelectedChannel')  :  `<b style=font-weight:normal>` + 'Channel: '+ '</b>'  + 'Channel Total',
            iconStyle: {
                margin_left: '-10px'
            },
            labelStyle: {
                padding_right: '5px'
            },
            innerStyle: {
                min_width: '240px',
                display: 'flex'
            },
            visible: true
        }
    }
},
KsAcademyProductPlaningFitler1Filte3:{
     launch(ctx) {
        Utils.openPopup('reusableVersionPopup', ctx);
    },
     init() {
        return {
            label: v('systemValueGlobalSelectedVersion') ?  `<b style=font-weight:normal>` + 'Version: '+ '</b>'  + v('systemValueGlobalSelectedVersion')  :  `<b style=font-weight:normal>` + 'Version: '+ '</b>'  + 'Version Total',
            iconStyle: {
                margin_left: '-10px'
            },
            labelStyle: {
                padding_right: '5px'
            },
            innerStyle: {
                min_width: '240px',
                display: 'flex'
            },
            visible: true
        }
    }
},
KsAcademyProductPlanningRow4FilterGridTable:{
     init() {
            let result = [
                    [
                        {
                            title: 'Price Range',
                            icon: 'icon-tag-fill',
                            iconColor: '#007AFF',
                            skin: v('systemValueproductPriceRangeFilterValues') ? 'filter_button' : 'filter_button_circle',
                            filterType: 'productPriceRange'
                        },
                        {
                            title: 'Package Size',
                            icon: 'icon-cube',
                            skin: v('systemValueproductSizeFilterValues') ?  'filter_button' : 'filter_button_circle',
                            iconColor: '#34C759',
                            filterType: 'productSize'
                        },
                        {
                            title: 'Weight',
                            icon: 'icon-weight-fill',
                            skin: v('systemValueproductWeightFilterValues') ? 'filter_button' : 'filter_button_circle',
                            iconColor: '#FF9500',
                            filterType: 'productWeight'
                        }
                    ],
                    [
                        {
                            title: v('systemValueproductPriceRangeFilterValues'),
                            skin: v('systemValueproductPriceRangeFilterValues') ? 'filter_text' : 'filter_text_disabled',
                            icon: '',
                            filterType: 'productPriceRange'
                        },
                        {
                            title: v('systemValueproductSizeFilterValues'),
                            skin: v('systemValueproductSizeFilterValues') ? 'filter_text' : 'filter_text_disabled',
                            icon: '',
                            filterType: 'productSize'
                        },
                        {
                            title: v('systemValueproductWeightFilterValues'),
                            skin: v('systemValueproductWeightFilterValues') ? 'filter_text' : 'filter_text_disabled',
                            icon: '',
                            filterType: 'productWeight'
                        }
                    ]
                ];
                return result;
        },
     text_click(ctx) {
        if (ctx.getRow() === 0) {
            Utils.setWidgetValue('systemValueProductPlanningFilterType', ctx.getCell().filterType);
            Api.forceRefresh('KsAcademyProductPlanningFilterPopupDropbox').then(() => {
                Utils.openPopup("KsAcademyProductPlanningFilterPopup", ctx);
            })
        }
    },
     perform(ctx) {
        if (ctx.getRow() === 1) {
            Utils.setWidgetValue(`systemValue${ctx.getCell().filterType}FilterValues`, '');
            Api.forceRefresh('KsAcademyProductPlanningRow4FilterGridTable');
        }
    }
},
KsAcademyProductPlanningGridTableCalendarYear:{
     init() {
            return [
                [
                    {title: 'Calendar Year', cellWidth: '18%'},
                    {label: (v('systemValueProductPalnningSelectedYear') - 1) + '', cellWidth: '24.6%'},
                    {label: v('systemValueProductPalnningSelectedYear') + '', cellWidth: '24.6%'},
                    {title: '', cellWidth: '32.8%'}
                ]
            ];
     }
},
KsAcademyProductPlanningGridTableFinancialYear:{
     init() {
                return [
                [
                    {title: 'Financial Year', cellWidth: '18%'},
                    {
                        label: 'FY' + (v('systemValueProductPalnningSelectedYear') - 2000),
                        cellWidth: 49.3 + ((v('systemValueProductPalnningSelectedYear') - v('systemValueDefaultMinimumYear')) * 4.1) + '%',
                        skin: 'scroll_header_fin_year_1'
                    },
                    {
                        label: '',
                        cellWidth: '2%',
                        icon: v('systemValueProductPalnningSelectedYear') === v('systemValueDefaultMinimumYear') ? '' : 'icon-backward-fill',
                        skin: 'scroll_header_fin_year_3'
                    },
                    
                    {
                        label: '',
                        cellWidth: '2%',
                        icon: v('systemValueProductPalnningSelectedYear') === v('systemValueDefaultMaximumYear') ? '' : 'icon-forward-fill',
                        skin: 'scroll_header_fin_year_2'
                    },
                    {
                        label: '',
                        cellWidth: 28.7 - ((v('systemValueProductPalnningSelectedYear') - v('systemValueDefaultMinimumYear')) * 4.1) + '%',
                    }
                ]
            ];
        },
     launch(ctx) {
        if (ctx.getColumn() === 2) {
            Utils.setWidgetValue('systemValueProductPalnningSelectedYear', v("systemValueProductPalnningSelectedYear") - 1);
        } else if (ctx.getColumn() === 3) {
            Utils.setWidgetValue('systemValueProductPalnningSelectedYear', v("systemValueProductPalnningSelectedYear") + 1);
        }
    }
},
KsAcademyProductPlanningFilterPopupDropbox:{
     init() {
         let filters = {productSize: [
             {name: 'S', on: v('systemValueproductSizeFilterValues') && v('systemValueproductSizeFilterValues').includes('S')},
             {name: 'M', on: v('systemValueproductSizeFilterValues') && v('systemValueproductSizeFilterValues').includes('M')},
             {name: 'L', on: v('systemValueproductSizeFilterValues') && v('systemValueproductSizeFilterValues').includes('L')},
             {name: 'XL', on: v('systemValueproductSizeFilterValues') && v('systemValueproductSizeFilterValues').includes('XL')}
         ], productPriceRange: [
                {name: '0-10', on: v('systemValueproductPriceRangeFilterValues') && v('systemValueproductPriceRangeFilterValues').includes('0-10')},
                {name: '11-50', on: v('systemValueproductPriceRangeFilterValues') && v('systemValueproductPriceRangeFilterValues').includes('11-50')},
                {name: '50-100', on: v('systemValueproductPriceRangeFilterValues') && v('systemValueproductPriceRangeFilterValues').includes('50-100')},
                {name: '100-200', on: v('systemValueproductPriceRangeFilterValues') && v('systemValueproductPriceRangeFilterValues').includes('100-200')},
            ], productWeight: [
                 {name: '0-0.5', on: v('systemValueproductWeightFilterValues') && v('systemValueproductWeightFilterValues').includes('0-0.5')},
                 {name: '0.51-1', on: v('systemValueproductWeightFilterValues') && v('systemValueproductWeightFilterValues').includes('0.51-1')},
                 {name: '1-1.5', on: v('systemValueproductWeightFilterValues') && v('systemValueproductWeightFilterValues').includes('1-1.5')},
                 {name: '1.51-3', on: v('systemValueproductWeightFilterValues') && v('systemValueproductWeightFilterValues').includes('1.51-3')}
             ]};
        return {
            items: v('systemValueProductPlanningFilterType') ? filters[v('systemValueProductPlanningFilterType')] : []
        }
    },
     choose(ctx) {
        Utils.setWidgetValue(`systemValue${v('systemValueProductPlanningFilterType')}FilterValues`, v('KsAcademyProductPlanningFilterPopupDropbox').value);
         Api.forceRefresh('KsAcademyProductPlanningRow4FilterGridTable');
         /*v('KsAcademyProductPlanningGridTable').updatedFromFilter = true;
         Utils.setWidgetValue('systemValueProductPlanningGridTableFilteredContent', v('KsAcademyProductPlanningGridTable.cellData').filter(e => e[0][v('systemValueProductPlanningFilterType')] === '' || v(`systemValue${v('systemValueProductPlanningFilterType')}FilterValues`).split(',').includes(e[0][v('systemValueProductPlanningFilterType')])));*/
    }
},
KsAcademyMainPageGridRow2Cell2Button:{
     launch(){
        Api.openPage('KsAcademyHeadcount')
         Utils.setWidgetValue('systemValueSelectedYear', '2025')
             Utils.setWidgetValue('systemValueSelectedUnit', 'Business Unit 1')
         Utils.setWidgetValue('systemValueSelectedUnitNumber', '1')
          Utils.setWidgetValue('systemValueSelectedValue', 'Base')
         
         
    }
},
KsAcademyMainPageGridRow2Cell3Button:{
     launch(){
        Api.openPage('KsAcademyProductPlanning') 
    }
},
reusableGlobalCompanyPopupGridTable:{
    init: {
        url: (db) => `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue,Consolidated;$expand=Members($select=Name, Attributes/Country))`,
        type: "POST",
        server: true,
        body: (db) => {
                return {};
            },
        parsingControl: {
            type: 'script',
            script: (data, ctx, object) => {
                    let result = [],
                        k = 0, c,                     
                        cells = data.Cells,
                        members,
                        cell;

                    while (k < cells.length) {
                        cell = cells[k];
                        members = cell.Members;
                        let d = [];

                        c = {
                            title: cell.FormattedValue,
                            skin: 'cell_1_title',
                            cellWidth: '80%',
                            icon: k ? 'icon-badge-fill' : 'icon-globe-americas',
                            principalName: members[0].Name,
                            iconColor: k ? '#5AC8FA' : '#007AFF',
                            paddingLeft: k ? 25 : 10,
                            iconStyle: {
                                display: 'flex'
                            }
                        }
                        d.push(c);
                        c = {
                            icon: k ? '' : 'icon-chevron-down',
                            iconOff: k ? '' : 'icon-chevron-right',
                            cellWidth: '20%',
                            skin: 'hierarchy_expander',
                            cellSkin: 'no_border',
                            paddingLeft: k ? 1 : 0,
                            isGridTableHierarchyExpander: true,
                            value: 1
                        }
                        d.push(c);
                        k++;
                        result.push(d);
                    }
                    return {
                        content: result
                    };
                }
        }
    },
     text_click(ctx) {
        Utils.setWidgetValue('systemValueGlobalSelectedCountry', ctx.getCell().principalName);
        Utils.closePopup('reusableGlobalCompanyPopup', ctx);
        Api.forceRefreshWidgets(['KsAcademyProductPlaningFitler1Filter']);
    }
},
reusableVersionPopupDropbox:{
     choose(ctx) {
         Utils.setWidgetValue('systemValueGlobalSelectedVersion', v('reusableVersionPopupDropbox').value);
         Api.updateContent('KsAcademyProductPlaningFitler1Filte3');
         Utils.closePopup('reusableVersionPopup',ctx)
        },
    init: {
        url: (db) =>
                `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue;$expand=Members($select=Name, Attributes/Caption))`,
        type: "POST",
        server: true,
        body: (db) => {
                return {};
            },
        parsingControl: {
            type: 'script',
            script: (data) => {
                    let items = [];
                    Utils.setWidgetValueIfNotExist('systemValueGlobalSelectedVersion', data.Cells[0].Members[0].Name)
            
                    for (let i = 0; i < data.Cells.length; i++) {
                        items.push({
                            name: data.Cells[i].Members[0].Name,
                            on: data.Cells[i].Members[0].Name === v('systemValueGlobalSelectedVersion')
                        });
                    }
                    return {
                        items: items,
                    };
                }
        }
    },
     initFinished() {
        Api.forceRefreshWidgets(['KsAcademyProductPlaningFitler1Filte3']);
    }
},
seederMainSideBarGridRow2Icon:{
     perform(ctx) {
            Repository.seederMainSideBarGridRow2Icon.getEvent(ctx)
        },
     getEvent(ctx) {
            Utils.closePopup("seederMainSideBar", ctx);
            Api.openPage("KsAcademyMainPage");
        }
},
seederMainSideBarGridRow2Title:{
     text_click(ctx) {
            Repository.seederMainSideBarGridRow2Icon.getEvent(ctx)
        }
},
seederMainSideBarGridRow3Icon:{
     perform(ctx) {
            Repository.seederMainSideBarGridRow3Icon.getEvent(ctx)
        },
     getEvent(ctx) {
            Utils.closePopup("seederMainSideBar", ctx);
            Api.openPage('KsAcademyHeadcount');
        }
},
seederMainSideBarGridRow3Title:{
     text_click(ctx) {
            Repository.seederMainSideBarGridRow3Icon.getEvent(ctx)
        }
},
seederMainSideBarGridRow4Icon:{
     perform(ctx) {
            Repository.seederMainSideBarGridRow4Icon.getEvent(ctx);
        },
     getEvent(ctx) {
            Utils.closePopup("seederMainSideBar", ctx);
			Api.openPage('KsAcademyProductPlanning');
             
        }
},
seederMainSideBarGridRow4Title:{
     text_click(ctx) {
            Repository.seederMainSideBarGridRow4Icon.getEvent(ctx);
        }
}
};
