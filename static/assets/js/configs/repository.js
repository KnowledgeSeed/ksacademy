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
}
};
