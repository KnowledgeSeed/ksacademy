/* global app */
'use strict'
WidgetConfig = {

KsAcademyHeadcount:{
    "id": "KsAcademyHeadcount",
    "type": PageWidget,
    "widgets": [
        {
            "id": "KsAcademyHeadcountGridRow1",
            "type": GridRowWidget,
            "height": "10%",
            "width": "100%",
            "skin": "bottom_border_main3",
            "widgets": [
                {
                    "id": "KsAcademyHeadcountGridRow1Cell1",
                    "type": GridCellWidget,
                    "width": "20%",
                    "alignment": "center-left",
                    "marginLeft": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow1Cell1Button",
                            "type": ButtonWidget,
                            "icon": "icon-arrow-back",
                            "iconFontSize": 20,
                            "iconColor": "#000"
                        },
                        {
                            "id": "KsAcademyHeadcountGridRow1Text",
                            "type": TextWidget,
                            "skin": "menu2",
                            "title": "Headcount",
                            "titleFontSize": 45,
                            "titleFontColor": "#000"
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyHeadcountGridRow2",
            "type": GridRowWidget,
            "widgets": [
                {
                    "id": "KsAcademyHeadcountGridRow2Cell1",
                    "type": GridCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow2Cell1Dropbox",
                            "type": DatePickerWidget,
                            "skin": "monthpicker",
                            "width": 130
                        }
                    ]
                },
                {
                    "id": "KsAcademyHeadcountGridRow2aCell1",
                    "type": GridCellWidget,
                    "marginLeft": 10,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow2aCell1Dropbox",
                            "type": DropBoxWidget,
                            "skin": "edit"
                        }
                    ]
                },
                {
                    "id": "KsAcademyHeadcountGridRow2Cell2",
                    "type": GridCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow2Cell2Segmented",
                            "type": SegmentedControlWidget,
                            "skin": "segmented",
                            "width": 300,
                            "marginLeft": "5%",
                            "widgets": [
                                {
                                    "id": "KsAcademyHeadcountGridRow2Cell2SegmentedItem1",
                                    "type": SegmentedControlItemWidget,
                                    "skin": "segmented-left"
                                },
                                {
                                    "id": "KsAcademyHeadcountGridRow2Cell2SegmentedItem2",
                                    "type": SegmentedControlItemWidget,
                                    "skin": "segmented-right"
                                },
                                {
                                    "id": "KsAcademyHeadcountGridRow2Cell2SegmentedItem3",
                                    "type": SegmentedControlItemWidget,
                                    "skin": "segmented-right"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyHeadcountGridTable",
            "type": GridTableWidget,
            "skin": "list_table",
            "width": "25%",
            "marginTop": 20,
            "visible": false,
            "widgets": [
                {
                    "id": "GridTableHeaderRow",
                    "type": GridTableHeaderRowWidget,
                    "widgets": [
                        {
                            "id": "GridTableHeaderRowCell0",
                            "type": GridTableHeaderCellWidget,
                            "width": "10%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell0Text",
                                    "type": TextWidget,
                                    "title": "Group Name",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        },
                        {
                            "id": "GridTableHeaderRowCell1",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell1Text",
                                    "type": TextWidget,
                                    "title": "Base Salary",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        },
                        {
                            "id": "GridTableHeaderRowCell2",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell2Text",
                                    "type": TextWidget,
                                    "title": "FTE",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        },
                        {
                            "id": "GridTableHeaderRowCell3",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell3Text",
                                    "type": TextWidget,
                                    "title": "Bonus",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "GridTableCell0",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell0Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "GridTableCell1",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell1Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "GridTableCell2",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell2Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "GridTableCell3",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell3Text",
                            "type": TextWidget
                        }
                    ]
                }
            ]
        },
        {
            "id": "BusinessUnitGridTable",
            "type": GridTableWidget,
            "skin": "list_table",
            "widgets": [
                {
                    "id": "BusinessUnitGridTableCell0",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell0Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell1",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell1Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell2",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell2Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell3",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell3Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell4",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell4Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell5",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell5Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell6",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell6Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell7",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell7Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell8",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell8Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell9",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell9Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell10",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell10Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell11",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell11Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell12",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell12Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableCell13",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableCell13Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "BusinessUnitGridTableHeaderRow",
                    "type": GridTableHeaderRowWidget,
                    "widgets": [
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell0",
                            "type": GridTableHeaderCellWidget,
                            "width": "10%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell0Text",
                                    "type": TextWidget
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell1",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell1Text",
                                    "type": TextWidget,
                                    "title": 2024
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell2",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell2Text",
                                    "type": TextWidget,
                                    "title": 202401
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell3",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell3Text",
                                    "type": TextWidget,
                                    "title": 202402
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell4",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell4Text",
                                    "type": TextWidget,
                                    "title": 202403
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell5",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell5Text",
                                    "type": TextWidget,
                                    "title": 202404
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell6",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell6Text",
                                    "type": TextWidget,
                                    "title": 202405
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell7",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell7Text",
                                    "type": TextWidget,
                                    "title": 202406
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell8",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell8Text",
                                    "type": TextWidget,
                                    "title": 202407
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell9",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell9Text",
                                    "type": TextWidget,
                                    "title": 202408
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell10",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell10Text",
                                    "type": TextWidget,
                                    "title": 2024009
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell11",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell11Text",
                                    "type": TextWidget,
                                    "title": 202410
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell12",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell12Text",
                                    "type": TextWidget,
                                    "title": 202411
                                }
                            ]
                        },
                        {
                            "id": "BusinessUnitGridTableHeaderRowCell13",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "widgets": [
                                {
                                    "id": "BusinessUnitGridTableHeaderRowCell13Text",
                                    "type": TextWidget,
                                    "title": 202412
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
},
KsAcademyProductPlanning:{
    "id": "KsAcademyProductPlanning",
    "type": PageWidget,
    "widgets": [
        {
            "id": "KsAcademyProductPlanningRow1",
            "type": GridRowWidget,
            "skin": "bottom_border_main",
            "marginBottom": 20,
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningRow1Cell1",
                    "type": GridCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningRow1Cell1Button",
                            "type": ButtonWidget,
                            "icon": "icon-sidebar-icons-left",
                            "iconFontSize": 60,
                            "iconColor": "#007AFF"
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningRow1Cell2",
                    "type": GridCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningRow1Cell2Text",
                            "type": TextWidget,
                            "title": "Product Planning",
                            "titleFontSize": 36,
                            "skin": "menu2",
                            "titleFontWeight": 900
                        }
                    ]
                }
            ]
        }
    ]
},
KsAcademyMainPage:{
    "id": "KsAcademyMainPage",
    "type": PageWidget,
    "widgets": [
        {
            "id": "KsAcademyMainPageGridRow1",
            "type": GridRowWidget,
            "height": "10%",
            "width": "100%",
            "skin": "bottom_border_main3",
            "widgets": [
                {
                    "id": "KsAcademyMainPageGridRow1Cell1",
                    "type": GridCellWidget,
                    "alignment": "center-left",
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageLogo",
                            "type": ImageWidget,
                            "fileName": "knowledgeseed_stratos_HD.png",
                            "width": 150
                        },
                        {
                            "id": "KsAcademyMainPageGridRow1Text",
                            "type": TextWidget,
                            "skin": "menu2",
                            "title": "KsAcademy",
                            "titleFontSize": 45,
                            "titleFontColor": "#000"
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyMainPageGridRow2",
            "type": GridRowWidget,
            "marginTop": "5%",
            "widgets": [
                {
                    "id": "KsAcademyMainPageGridRow2Cell1",
                    "type": GridCellWidget,
                    "width": "30%",
                    "height": 20
                },
                {
                    "id": "KsAcademyMainPageGridRow2Cell2",
                    "type": GridCellWidget,
                    "width": "12%",
                    "height": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow2Cell2Button",
                            "type": ButtonWidget,
                            "width": 145,
                            "height": 145,
                            "icon": "icon-square-grid-9-square",
                            "skin": "main_blue"
                        }
                    ]
                },
                {
                    "id": "KsAcademyMainPageGridRow2Cell3",
                    "type": GridCellWidget,
                    "width": "12%",
                    "height": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow2Cell3Button",
                            "type": ButtonWidget,
                            "width": 145,
                            "height": 145,
                            "icon": "icon-rectangle-stack",
                            "skin": "main_blue"
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyMainPageGridRow3",
            "type": GridRowWidget,
            "widgets": [
                {
                    "id": "KsAcademyMainPageGridRow3Cell1",
                    "type": GridCellWidget,
                    "width": "30%"
                },
                {
                    "id": "KsAcademyMainPageGridRow3Cell2",
                    "type": GridCellWidget,
                    "width": "12%",
                    "height": "6%",
                    "marginTop": "2%",
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow3Cell2Text",
                            "type": TextWidget,
                            "title": "Headcount",
                            "titleAlignment": "center",
                            "titleFontColor": "#000",
                            "skin": "menu"
                        }
                    ]
                },
                {
                    "id": "KsAcademyMainPageGridRow3Cell3",
                    "type": GridCellWidget,
                    "width": "12%",
                    "height": "6%",
                    "marginTop": "2%",
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow3Cell3Text",
                            "type": TextWidget,
                            "title": "Product Planning",
                            "titleAlignment": "center",
                            "titleFontColor": "#000",
                            "skin": "menu"
                        }
                    ]
                }
            ]
        }
    ]
},

};
