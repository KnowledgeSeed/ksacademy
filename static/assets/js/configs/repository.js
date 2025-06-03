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
