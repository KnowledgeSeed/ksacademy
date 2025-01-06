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
KsAcademyHeadcountGridTable:{
    init: {
        url: (db) => `/api/v1/ExecuteMDX?$expand=Cells($select=Ordinal,FormattedValue,Consolidated;$expand=Members($select=Name, Attributes/UIName, Attributes/UILevel))`,
        type: "POST",
        server: true,
        body: (db) => {
                return {
                    year : v('systemValueSelectedYear')
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
}
};
