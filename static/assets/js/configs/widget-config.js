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
        },
        {
            "id": "KsAcademyProductPlanningRow2",
            "type": GridRowWidget,
            "paddingBottom": 27,
            "marginTop": 28,
            "widgets": [
                {
                    "id": "KsAcademyProductPlaningFitler1",
                    "type": GridCellWidget,
                    "width": "100%",
                    "alignment": "center-left",
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlaningFitler1Filter",
                            "type": ButtonWidget,
                            "backgroundColor": "#EBECEC",
                            "icon": "icon-globe-americas",
                            "height": "40px",
                            "marginRight": 10,
                            "skin": "userpanelmain_medium",
                            "width": 300,
                            "marginLeft": 20
                        },
                        {
                            "id": "KsAcademyProductPlaningFitler1Filter2",
                            "type": ButtonWidget,
                            "backgroundColor": "#EBECEC",
                            "icon": "icon-arrow-left-arrow-right",
                            "height": "40px",
                            "marginRight": "10px",
                            "skin": "userpanelmain_medium",
                            "width": 300
                        },
                        {
                            "id": "KsAcademyProductPlaningFitler1Filte3",
                            "type": ButtonWidget,
                            "backgroundColor": "#EBECEC",
                            "icon": "icon-list-dash",
                            "height": "40px",
                            "marginRight": "10px",
                            "skin": "userpanelmain_medium",
                            "width": 300
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyProductPlanningRow3",
            "type": GridRowWidget,
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningRow3Cell1",
                    "type": GridCellWidget,
                    "marginLeft": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningRow3Text1",
                            "type": TextWidget,
                            "title": "Filters",
                            "titleFontWeight": 900,
                            "titleFontSize": 13,
                            "marginLeft": 15
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyProductPlanningRow4",
            "type": GridRowWidget,
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningRow4FilterGridTable",
                    "type": GridTableWidget,
                    "width": "740px",
                    "marginLeft": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningRow4FilterGridTableCell0",
                            "type": GridTableCellWidget,
                            "width": "240px",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningRow4FilterGridTableCell0Text",
                                    "type": TextWidget,
                                    "skin": "filter_button_circle"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningRow4FilterGridTableCell1",
                            "type": GridTableCellWidget,
                            "width": "240px",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningRow4FilterGridTableCell1Text",
                                    "type": TextWidget,
                                    "skin": "filter_button_circle"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningRow4FilterGridTableCell2",
                            "type": GridTableCellWidget,
                            "width": "240px",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningRow4FilterGridTableCell2Text",
                                    "type": TextWidget,
                                    "skin": "filter_button_circle"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyProductPlanningGridTableCalendarYear",
            "type": GridTableWidget,
            "width": 1900,
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningGridTableCalendarYearCell0",
                    "type": GridTableCellWidget,
                    "alignment": "center-right",
                    "height": 24,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCalendarYearCell0Text",
                            "type": TextWidget,
                            "marginRight": 16,
                            "titleFontSize": 12,
                            "titleFontColor": "#34C759",
                            "titleFontWeight": 900
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCalendarYearCell1",
                    "type": GridTableCellWidget,
                    "height": 24,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCalendarYearCell1Text",
                            "type": ButtonWidget,
                            "skin": "scroll_header",
                            "backgroundColor": "#34C75933",
                            "height": "100%",
                            "width": "100%",
                            "applyMeasuresToSection": true,
                            "fontSize": 12,
                            "fontBold": true
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCalendarYearCell2",
                    "type": GridTableCellWidget,
                    "height": 24,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCalendarYearCell2Text",
                            "type": ButtonWidget,
                            "skin": "scroll_header",
                            "backgroundColor": "#34C75933",
                            "width": "100%",
                            "height": "100%",
                            "applyMeasuresToSection": true,
                            "fontSize": 12,
                            "fontBold": true
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCalendarYearCell3",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCalendarYearCell3Text",
                            "type": TextWidget
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyProductPlanningGridTableFinancialYear",
            "type": GridTableWidget,
            "width": 1900,
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningGridTableFinancialYearCell0",
                    "type": GridTableCellWidget,
                    "height": 24,
                    "alignment": "center-right",
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableFinancialYearCell0Text",
                            "type": TextWidget,
                            "marginRight": 16,
                            "titleFontSize": 12,
                            "titleFontWeight": 900,
                            "titleFontColor": "#007AFF"
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableFinancialYearCell1",
                    "type": GridTableCellWidget,
                    "height": 24,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableFinancialYearCell1Text",
                            "type": ButtonWidget,
                            "backgroundColor": "#007AFF33",
                            "height": "100%",
                            "width": "100%",
                            "applyMeasuresToSection": true,
                            "fontColor": "#007AFF",
                            "fontBold": true
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableFinancialYearCell3",
                    "type": GridTableCellWidget,
                    "height": 24,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableFinancialYearCell3Text",
                            "type": ButtonWidget,
                            "backgroundColor": "#007AFF33",
                            "height": "100%",
                            "width": "100%",
                            "applyMeasuresToSection": true,
                            "iconColor": "#007AFF",
                            "iconFontSize": 40
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableFinancialYearCell2",
                    "type": GridTableCellWidget,
                    "height": 24,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableFinancialYearCell2Text",
                            "type": ButtonWidget,
                            "backgroundColor": "#007AFF33",
                            "height": "100%",
                            "width": "100%",
                            "applyMeasuresToSection": true,
                            "iconColor": "#007AFF",
                            "iconFontSize": 40
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableFinancialYearCell7",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableFinancialYearCell7Text",
                            "type": TextWidget
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyProductPlanningGridTable",
            "type": GridTableWidget,
            "width": 1900,
            "skin": "assessment",
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningGridTableCell0",
                    "type": GridTableCellWidget,
                    "width": "16%",
                    "alignment": "center-left",
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell0Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell1",
                    "type": GridTableCellWidget,
                    "width": "2%",
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell1Text",
                            "type": ToggleWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell2",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell2Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell3",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell3Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell4",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell4Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell5",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell5Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell6",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell6Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell7",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell7Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell8",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell8Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell9",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell9Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell10",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell10Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell11",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell11Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell12",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell12Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell13",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell13Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell14",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell14Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell15",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell15Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell16",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell16Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell17",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell17Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell18",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell18Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell19",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell19Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell20",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell20Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell21",
                    "type": GridTableCellWidget,
                    "width": "2%",
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell21Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableCell22",
                    "type": GridTableCellWidget,
                    "width": "2%",
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableCell22Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "KsAcademyProductPlanningGridTableHeaderRow",
                    "type": GridTableHeaderRowWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell0",
                            "type": GridTableHeaderCellWidget,
                            "width": "16%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell0Text",
                                    "type": TextWidget
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell1",
                            "type": GridTableHeaderCellWidget,
                            "width": "2%",
                            "cellHeaderSkin": "no_border",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell1Text",
                                    "type": TextWidget
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell2",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell2Text",
                                    "type": TextWidget,
                                    "title": "Jul"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell3",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell3Text",
                                    "type": TextWidget,
                                    "title": "Aug"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell4",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell4Text",
                                    "type": TextWidget,
                                    "title": "Sep"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell5",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell5Text",
                                    "type": TextWidget,
                                    "title": "Oct"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell6",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell6Text",
                                    "type": TextWidget,
                                    "title": "Nov"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell7",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell7Text",
                                    "type": TextWidget,
                                    "title": "Dec"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell8",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell8Text",
                                    "type": TextWidget,
                                    "title": "Jan"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell9",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell9Text",
                                    "type": TextWidget,
                                    "title": "Feb"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell10",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell10Text",
                                    "type": TextWidget,
                                    "title": "Mar"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell11",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell11Text",
                                    "type": TextWidget,
                                    "title": "Apr"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell12",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell12Text",
                                    "type": TextWidget,
                                    "title": "May"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell13",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell13Text",
                                    "type": TextWidget,
                                    "title": "Jun"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell14",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell14Text",
                                    "type": TextWidget,
                                    "title": "FY24 Total"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell15",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell15Text",
                                    "type": TextWidget,
                                    "title": "FY25 Total"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell16",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell16Text",
                                    "type": TextWidget,
                                    "title": "FY26 Total"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell17",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell17Text",
                                    "type": TextWidget,
                                    "title": "FY27 Total"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell18",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell18Text",
                                    "type": TextWidget,
                                    "title": "FY28 Total"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell19",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell19Text",
                                    "type": TextWidget,
                                    "title": "FY29 Total"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell20",
                            "type": GridTableHeaderCellWidget,
                            "width": "4.1%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell20Text",
                                    "type": TextWidget,
                                    "title": "YoY 24/23 ∆ %"
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell21",
                            "type": GridTableHeaderCellWidget,
                            "width": "2%",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell21Text",
                                    "type": TextWidget
                                }
                            ]
                        },
                        {
                            "id": "KsAcademyProductPlanningGridTableHeaderRowCell22",
                            "type": GridTableHeaderCellWidget,
                            "width": "2%",
                            "cellHeaderSkin": "no_border",
                            "widgets": [
                                {
                                    "id": "KsAcademyProductPlanningGridTableHeaderRowCell22Text",
                                    "type": TextWidget
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyProductPlanningFilterPopup",
            "type": ContainerWidget,
            "anchorVisible": false,
            "anchorOnClick": true,
            "backdrop": true,
            "visible": false,
            "width": 190,
            "bgScrollable": true,
            "fixed": true,
            "heightFixed": false,
            "fadingSpeed": 0,
            "positionAndCalculateBestSpace": "bottom",
            "widgets": [
                {
                    "id": "KsAcademyProductPlanningFilterPopupDropbox",
                    "type": DropBoxWidget,
                    "multiSelect": true,
                    "skin": "filter_selector_pricerange"
                }
            ]
        },
        {
            "import": "reusable.reusableGlobalCompanyPopup"
        },
        {
            "import": "reusable.seederMainSideBar"
        },
        {
            "import": "reusable.reusableVersionPopup"
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
reusable: {
reusableGlobalCompanyPopup:{
    "id": "reusableGlobalCompanyPopup",
    "type": ContainerWidget,
    "anchorOnClick": true,
    "anchorVisible": false,
    "backdrop": true,
    "bgColor": "#fff",
    "closeBtn": false,
    "fadingSpeed": 0,
    "heightFixed": false,
    "positionAndCalculateBestSpace": "bottom",
    "width": 270,
    "visible": false,
    "position": "center",
    "offset": 30,
    "widgets": [
        {
            "id": "reusableGlobalCompanyPopupSearch",
            "type": TextBoxWidget,
            "width": 250,
            "skin": "searchbox"
        },
        {
            "id": "reusableGlobalCompanyPopupGridTable",
            "type": GridTableWidget,
            "skin": "memberships",
            "marginTop": 10,
            "widgets": [
                {
                    "id": "reusableGlobalCompanyPopupGridTableCell0",
                    "type": GridTableCellWidget,
                    "alignment": "center-left",
                    "widgets": [
                        {
                            "id": "reusableGlobalCompanyPopupGridTableCell0Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "reusableGlobalCompanyPopupGridTableCell1",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "reusableGlobalCompanyPopupGridTableCell1Text",
                            "type": ToggleWidget
                        }
                    ]
                }
            ]
        }
    ]
},
reusableVersionPopup:{
    "id": "reusableVersionPopup",
    "type": ContainerWidget,
    "anchorOnClick": true,
    "anchorVisible": false,
    "backdrop": true,
    "fadingSpeed": 0,
    "heightFixed": false,
    "fixed": false,
    "positionAndCalculateBestSpace": "bottom",
    "position": "center-center",
    "visible": false,
    "width": 270,
    "widgets": [
        {
            "id": "reusableVersionPopupDropbox",
            "type": DropBoxWidget,
            "skin": "filter_icons"
        }
    ]
},
seederMainSideBar:{
    "id": "seederMainSideBar",
    "type": ContainerWidget,
    "visible": false,
    "backdrop": true,
    "width": "420px",
    "closeBtn": false,
    "height": "100%",
    "behaviour": "popup",
    "position": "left",
    "bgColor": "#fff",
    "widgets": [
        {
            "id": "seederMainSideBarGrid",
            "type": GridWidget,
            "widgets": [
                {
                    "id": "seederMainSideBarGridRow1",
                    "type": GridRowWidget,
                    "skin": "panel_menu_close_row",
                    "widgets": [
                        {
                            "id": "seederMainSideBarGridRow1Icon",
                            "type": TextWidget,
                            "skin": "menu-side-bar",
                            "titleCursor": "pointer",
                            "icon": "icon-sidebar-icons-left"
                        },
                        {
                            "id": "seederMainSideBarGridRow1Title",
                            "type": TextWidget,
                            "skin": "slide_menu",
                            "titleCursor": "pointer",
                            "marginLeft": 10,
                            "marginTop": 10,
                            "title": "Close",
                            "titleFontColor": "#FFFFFF"
                        }
                    ]
                },
                {
                    "id": "seederMainSideBarGridRow2",
                    "type": GridRowWidget,
                    "skin": "panel_menu_row",
                    "widgets": [
                        {
                            "id": "seederMainSideBarGridRow2Icon",
                            "type": TextWidget,
                            "skin": "menu-list",
                            "titleCursor": "pointer",
                            "icon": "icon-square-grid-12-fill"
                        },
                        {
                            "id": "seederMainSideBarGridRow2Title",
                            "type": TextWidget,
                            "marginLeft": "10px",
                            "skin": "slide_menu",
                            "titleCursor": "pointer",
                            "marginTop": "10px",
                            "title": "Main Menu"
                        }
                    ]
                },
                {
                    "id": "seederMainSideBarGridRow3",
                    "type": GridRowWidget,
                    "skin": "panel_menu_row",
                    "widgets": [
                        {
                            "id": "seederMainSideBarGridRow3Icon",
                            "type": TextWidget,
                            "titleCursor": "pointer",
                            "skin": "panel_menu",
                            "icon": "icon-square-grid-9-square"
                        },
                        {
                            "id": "seederMainSideBarGridRow3Title",
                            "type": TextWidget,
                            "marginLeft": "10px",
                            "skin": "slide_menu",
                            "titleCursor": "pointer",
                            "marginTop": 13,
                            "title": "Headcount"
                        }
                    ]
                },
                {
                    "id": "seederMainSideBarGridRow4",
                    "type": GridRowWidget,
                    "skin": "panel_menu_row",
                    "widgets": [
                        {
                            "id": "seederMainSideBarGridRow4Icon",
                            "type": TextWidget,
                            "titleCursor": "pointer",
                            "skin": "panel_menu",
                            "icon": "icon-rectangle-stack"
                        },
                        {
                            "id": "seederMainSideBarGridRow4Title",
                            "type": TextWidget,
                            "marginLeft": "10px",
                            "skin": "slide_menu",
                            "titleCursor": "pointer",
                            "marginTop": 13,
                            "title": "Product Planing"
                        }
                    ]
                }
            ]
        }
    ]
},
},

};
