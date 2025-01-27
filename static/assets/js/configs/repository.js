/* global app */
'use strict'
Repository = {

KsAcademyHeadcountGridRow1Cell1Button:{
     launch(){
        Api.openPage('KsAcademyMainPage')
    }
},
KsAcademyHeadcountGridRow2Cell1Dropbox:{
     init(){
        return{
            items:[
                {name:"2024", on: true},
                {name: "2025"},
                {name: "2026"}
            ]
        }
    },
     choose(){
        Api.forceRefresh('KsAcademyHeadcountGridTable');
        Utils.setWidgetValue('systemValueSelectedYear', v('KsAcademyHeadcountGridRow2Cell1Dropbox').value)
    }
},
KsAcademyHeadcountGridRow2aCell1Dropbox:{
    init: {
        url: (db) =>
           `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue;$expand=Members($select=Name))`,
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
                    Utils.setWidgetValueIfNotExist('systemValueSelectedUnit', r.Cells[0].Members[4].Name);
                    return {
                        name: r.Cells[x].Members[4].Name,
                        on:  r.Cells[x].Members[4].Name === v('systemValueSelectedUnit')
                    };
                }
        }
    },
     choose(){
        Api.forceRefresh('BusinessUnitGridTable');
        Utils.setWidgetValue('systemValueSelectedUnit', v('KsAcademyHeadcountGridRow2aCell1Dropbox').value)
          Utils.setWidgetValue('systemValueSelectedUnitNumber', v('systemValueSelectedUnitNumber'))
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
                    Api.updateContent('KsAcademyHeadcountGridTable');
                

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
KsAcademyMainPageGridRow2Cell2Button:{
     launch(){
        Api.openPage('KsAcademyHeadcount')
         Utils.setWidgetValue('systemValueSelectedYear', '2024')
          Utils.setWidgetValue('systemValueSelectedValue', 'Base')
         
         
    }
}
};
