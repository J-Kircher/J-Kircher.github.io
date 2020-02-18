(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\r\n  <div fxFlex class=\"content-wrapper\">\r\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n      <div fxFlex=\"75%\" [@routeAnimations]=\"prepareRoute(outlet)\">\r\n        <router-outlet #outlet=\"outlet\"></router-outlet>\r\n      </div>\r\n      <div fxFlex=\"25%\">\r\n        <show-scores></show-scores>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/animations */ "./src/app/shared/animations.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(scheduleService, teamService) {
        this.scheduleService = scheduleService;
        this.teamService = teamService;
        this.loading = false;
        this.sport = 'NFL';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Initialize the Full Schedule from the schedule input
        this.scheduleService.buildFullSchedule();
        this.teamService.initTeams();
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        // console.log('[app] prepareRoute() 1:');
        // console.log(outlet.isActivated ? outlet.activatedRoute : '');
        // return outlet.isActivated ? outlet.activatedRoute : '';
        // console.log('[app] prepareRoute() route: ' + (outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']));
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nfl',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appInitializerFn, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitializerFn", function() { return appInitializerFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/navbar.component */ "./src/app/nav/navbar.component.ts");
/* harmony import */ var _teams_team_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teams/team-list.component */ "./src/app/teams/team-list.component.ts");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _teams_team_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teams/team-details.component */ "./src/app/teams/team-details.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _schedule_schedule_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./schedule/schedule-calendar.component */ "./src/app/schedule/schedule-calendar.component.ts");
/* harmony import */ var _schedule_schedule_day_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./schedule/schedule-day.component */ "./src/app/schedule/schedule-day.component.ts");
/* harmony import */ var _schedule_schedule_month_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./schedule/schedule-month.component */ "./src/app/schedule/schedule-month.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _standings_standings_division_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./standings/standings-division.component */ "./src/app/standings/standings-division.component.ts");
/* harmony import */ var _standings_standings_division_expanded_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./standings/standings-division-expanded.component */ "./src/app/standings/standings-division-expanded.component.ts");
/* harmony import */ var _showscores_show_scores_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./showscores/show-scores.component */ "./src/app/showscores/show-scores.component.ts");
/* harmony import */ var _showscores_show_score_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./showscores/show-score.component */ "./src/app/showscores/show-score.component.ts");
/* harmony import */ var _teams_team_schedule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teams/team-schedule.component */ "./src/app/teams/team-schedule.component.ts");
/* harmony import */ var _playoffs_playoffs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./playoffs/playoffs.component */ "./src/app/playoffs/playoffs.component.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _dialog_top_teams_top_teams_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialog/top-teams/top-teams-dialog.component */ "./src/app/dialog/top-teams/top-teams-dialog.component.ts");
/* harmony import */ var _dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialog/matchup/matchup-dialog.component */ "./src/app/dialog/matchup/matchup-dialog.component.ts");
/* harmony import */ var _dialog_simseason_simseason_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialog/simseason/simseason-dialog.component */ "./src/app/dialog/simseason/simseason-dialog.component.ts");
/* harmony import */ var _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dialog/results/results-dialog.component */ "./src/app/dialog/results/results-dialog.component.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _shared_material_elevation_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/material-elevation.directive */ "./src/app/shared/material-elevation.directive.ts");
/* harmony import */ var _service_game_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./service/game.service */ "./src/app/service/game.service.ts");
/* harmony import */ var _shared_spinner_button_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/spinner-button.directive */ "./src/app/shared/spinner-button.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





































// Loads application runtime config
var appInitializerFn = function (appConfig) {
    return function () {
        return appConfig.loadAppConfig();
    };
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["NFLRoutes"])
            ],
            entryComponents: [
                _dialog_top_teams_top_teams_dialog_component__WEBPACK_IMPORTED_MODULE_28__["TopTeamsDialogComponent"],
                _dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_29__["MatchupDialogComponent"],
                _dialog_simseason_simseason_dialog_component__WEBPACK_IMPORTED_MODULE_30__["SimseasonDialogComponent"],
                _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_31__["ResultsDialogComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_36__["MatSpinner"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _teams_team_list_component__WEBPACK_IMPORTED_MODULE_11__["TeamListComponent"],
                _teams_team_details_component__WEBPACK_IMPORTED_MODULE_13__["TeamDetailsComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_14__["ScheduleComponent"],
                _schedule_schedule_calendar_component__WEBPACK_IMPORTED_MODULE_16__["ScheduleCalenderComponent"],
                _schedule_schedule_day_component__WEBPACK_IMPORTED_MODULE_17__["ScheduleDayComponent"],
                _schedule_schedule_month_component__WEBPACK_IMPORTED_MODULE_18__["ScheduleMonthComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_19__["StandingsComponent"],
                _standings_standings_division_component__WEBPACK_IMPORTED_MODULE_20__["StandingsDivisionComponent"],
                _standings_standings_division_expanded_component__WEBPACK_IMPORTED_MODULE_21__["StandingsDivisionExpandedComponent"],
                _showscores_show_scores_component__WEBPACK_IMPORTED_MODULE_22__["ShowScoresComponent"],
                _showscores_show_score_component__WEBPACK_IMPORTED_MODULE_23__["ShowScoreComponent"],
                _teams_team_schedule_component__WEBPACK_IMPORTED_MODULE_24__["TeamScheduleComponent"],
                _playoffs_playoffs_component__WEBPACK_IMPORTED_MODULE_25__["PlayoffsComponent"],
                _dialog_top_teams_top_teams_dialog_component__WEBPACK_IMPORTED_MODULE_28__["TopTeamsDialogComponent"],
                _dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_29__["MatchupDialogComponent"],
                _dialog_simseason_simseason_dialog_component__WEBPACK_IMPORTED_MODULE_30__["SimseasonDialogComponent"],
                _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_31__["ResultsDialogComponent"],
                _shared_material_elevation_directive__WEBPACK_IMPORTED_MODULE_33__["MaterialElevationDirective"],
                _shared_spinner_button_directive__WEBPACK_IMPORTED_MODULE_35__["SpinnerButtonDirective"]
            ],
            providers: [
                _service_team_service__WEBPACK_IMPORTED_MODULE_12__["TeamService"],
                _service_schedule_service__WEBPACK_IMPORTED_MODULE_15__["ScheduleService"],
                _service_playoff_service__WEBPACK_IMPORTED_MODULE_26__["PlayoffService"],
                _service_game_service__WEBPACK_IMPORTED_MODULE_34__["GameService"],
                _service_storage_service__WEBPACK_IMPORTED_MODULE_32__["StorageService"],
                _service_config_service__WEBPACK_IMPORTED_MODULE_27__["ConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: appInitializerFn,
                    multi: true,
                    deps: [_service_config_service__WEBPACK_IMPORTED_MODULE_27__["ConfigService"]]
                }
            ],
            exports: [
                _shared_spinner_button_directive__WEBPACK_IMPORTED_MODULE_35__["SpinnerButtonDirective"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: NFLRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFLRoutes", function() { return NFLRoutes; });
/* harmony import */ var _teams_team_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams/team-list.component */ "./src/app/teams/team-list.component.ts");
/* harmony import */ var _teams_team_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams/team-details.component */ "./src/app/teams/team-details.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _playoffs_playoffs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playoffs/playoffs.component */ "./src/app/playoffs/playoffs.component.ts");





var NFLRoutes = [
    { path: 'teams', component: _teams_team_list_component__WEBPACK_IMPORTED_MODULE_0__["TeamListComponent"], data: { animation: 'TeamsPage' } },
    { path: 'teams/:abbrev', component: _teams_team_details_component__WEBPACK_IMPORTED_MODULE_1__["TeamDetailsComponent"], data: { animation: 'TeamPage' } },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleComponent"], data: { animation: 'SchedulePage' } },
    { path: 'standings', component: _standings_standings_component__WEBPACK_IMPORTED_MODULE_3__["StandingsComponent"], data: { animation: 'StandingsPage' } },
    { path: 'playoffs', component: _playoffs_playoffs_component__WEBPACK_IMPORTED_MODULE_4__["PlayoffsComponent"], data: { animation: 'PlayoffsPage' } },
    { path: '', redirectTo: '/teams', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/common/odds.ts":
/*!********************************!*\
  !*** ./src/app/common/odds.ts ***!
  \********************************/
/*! exports provided: calculateOdds, getOddsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateOdds", function() { return calculateOdds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOddsText", function() { return getOddsText; });
function calculateOdds(t1, t2) {
    // console.log('calculateOdds() ' + t1.name + ' at ' + t2.name);
    var spreadMax = 17;
    var total1 = (t1.qb + t1.rb + t1.wr + t1.ol + t1.dl + t1.lb + t1.db + t1.st + t1.co) || 0;
    var total2 = (t2.qb + t2.rb + t2.wr + t2.ol + t2.dl + t2.lb + t2.db + t2.st + t2.co) || 0;
    // console.log('calculateOdds() total1: ' + total1 + ', total2: ' + total2);
    var games1 = ((t1.wins + t1.losses) > 0) ? (t1.wins + t1.losses) : 1;
    var games2 = ((t2.wins + t2.losses) > 0) ? (t2.wins + t2.losses) : 1;
    // console.log('calculateOdds() games1: ' + games1 + ', games2: ' + games2);
    var avgWin1 = ((t1.pf - t1.pa) || 0) / games1;
    var avgWin2 = ((t2.pf - t2.pa) || 0) / games2;
    // console.log('calculateOdds() avgWin1: ' + avgWin1 + ', avgWin2: ' + avgWin2);
    var spread = (Math.round(((total2 - total1) + (avgWin2 - avgWin1) / 2) * 2)) / 2;
    if (spread > spreadMax) {
        spread = spreadMax;
    }
    if (spread < spreadMax * -1) {
        spread = spreadMax * -1;
    }
    // console.log('calculateOdds() spread: ' + spread);
    return spread;
}
function getOddsText(odds, visit, home) {
    if (odds === 0) {
        return 'Even';
    }
    else {
        if (odds > 0) {
            return home + ' -' + odds;
        }
        else {
            return visit + ' ' + odds;
        }
    }
}


/***/ }),

/***/ "./src/app/common/sort.ts":
/*!********************************!*\
  !*** ./src/app/common/sort.ts ***!
  \********************************/
/*! exports provided: sortDivision, sortDivisionByTotal, sortConference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDivision", function() { return sortDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDivisionByTotal", function() { return sortDivisionByTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortConference", function() { return sortConference; });
function sortDivision(t1, t2) {
    if (t1.pct < t2.pct) {
        return 1;
    }
    else {
        if (t1.pct > t2.pct) {
            return -1;
        }
        else {
            if (t1.wins < t2.wins) {
                return 1;
            }
            else {
                if (t1.wins > t2.wins) {
                    return -1;
                }
                else {
                    if (t1.losses > t2.losses) {
                        return 1;
                    }
                    else {
                        if (t1.losses < t2.losses) {
                            return -1;
                        }
                        else {
                            if (t1.divwins < t2.divwins) {
                                return 1;
                            }
                            else {
                                if (t1.divwins > t2.divwins) {
                                    return -1;
                                }
                                else {
                                    if (t1.divlosses > t2.divlosses) {
                                        return 1;
                                    }
                                    else {
                                        if (t1.divlosses < t2.divlosses) {
                                            return -1;
                                        }
                                        else {
                                            if (t1.confwins < t2.confwins) {
                                                return 1;
                                            }
                                            else {
                                                if (t1.confwins > t2.confwins) {
                                                    return -1;
                                                }
                                                else {
                                                    if (t1.conflosses > t2.conflosses) {
                                                        return 1;
                                                    }
                                                    else {
                                                        if (t1.conflosses < t2.conflosses) {
                                                            return -1;
                                                        }
                                                        else {
                                                            if (t1.pf - t1.pa < t2.pf - t2.pa) {
                                                                return 1;
                                                            }
                                                            else {
                                                                if (t1.pf - t1.pa > t2.pf - t2.pa) {
                                                                    return -1;
                                                                }
                                                                else {
                                                                    if (t1.pf < t2.pf) {
                                                                        return 1;
                                                                    }
                                                                    else {
                                                                        if (t1.pf > t2.pf) {
                                                                            return -1;
                                                                        }
                                                                        else {
                                                                            if (t1.pa > t2.pa) {
                                                                                return 1;
                                                                            }
                                                                            else {
                                                                                if (t1.pa < t2.pa) {
                                                                                    return -1;
                                                                                }
                                                                                else {
                                                                                    return 0;
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function sortDivisionByTotal(t1, t2) {
    if (t1.total < t2.total) {
        return 1;
    }
    else {
        if (t1.total > t2.total) {
            return -1;
        }
        else {
            return 0;
        }
    }
}
function sortConference(t1, t2) {
    if (t1.pct < t2.pct) {
        return 1;
    }
    else {
        if (t1.pct > t2.pct) {
            return -1;
        }
        else {
            if (t1.wins < t2.wins) {
                return 1;
            }
            else {
                if (t1.wins > t2.wins) {
                    return -1;
                }
                else {
                    if (t1.losses > t2.losses) {
                        return 1;
                    }
                    else {
                        if (t1.losses < t2.losses) {
                            return -1;
                        }
                        else {
                            if (t1.confwins < t2.confwins) {
                                return 1;
                            }
                            else {
                                if (t1.confwins > t2.confwins) {
                                    return -1;
                                }
                                else {
                                    if (t1.conflosses > t2.conflosses) {
                                        return 1;
                                    }
                                    else {
                                        if (t1.conflosses < t2.conflosses) {
                                            return -1;
                                        }
                                        else {
                                            if (t1.pf - t1.pa < t2.pf - t2.pa) {
                                                return 1;
                                            }
                                            else {
                                                if (t1.pf - t1.pa > t2.pf - t2.pa) {
                                                    return -1;
                                                }
                                                else {
                                                    if (t1.pf < t2.pf) {
                                                        return 1;
                                                    }
                                                    else {
                                                        if (t1.pf > t2.pf) {
                                                            return -1;
                                                        }
                                                        else {
                                                            if (t1.pa > t2.pa) {
                                                                return 1;
                                                            }
                                                            else {
                                                                if (t1.pa < t2.pa) {
                                                                    return -1;
                                                                }
                                                                else {
                                                                    return 0;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/dialog/matchup/matchup-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialog/matchup/matchup-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-title\" fxLayoutAlign=\"space-between\">\r\n  <div>\r\n    <div class=\"dialog-title-text\">Matchup</div>\r\n    <div class=\"gameday-text\">{{modalGame.gameday}}</div>\r\n  </div>\r\n  <button mat-mini-fab mat-dialog-close><mat-icon>close</mat-icon></button>\r\n</div>\r\n<mat-dialog-content *ngIf=\"!loading\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div class=\"matchup\">\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <span class=\"team-city\">{{teamsArr[modalGame?.visitTeam]?.city}}</span><br>\r\n            <span class=\"team-name\">{{teamsArr[modalGame?.visitTeam]?.name}}</span>\r\n          </div>\r\n          <div fxFlex=\"20\" class=\"center\"><span class=\"normal\"> at </span></div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <span class=\"team-city\">{{teamsArr[modalGame?.homeTeam]?.city}}</span><br>\r\n            <span class=\"team-name\">{{teamsArr[modalGame?.homeTeam]?.name}}</span>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around end\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <span class=\"team-record\">({{teamsArr[modalGame?.visitTeam]?.wins}}-{{teamsArr[modalGame?.visitTeam]?.losses}})</span>\r\n          </div>\r\n          <div fxFlex=\"20\" class=\"center\"><span class=\"spread\">{{ getOdds() }}</span></div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <span class=\"team-record\">({{teamsArr[modalGame?.homeTeam]?.wins}}-{{teamsArr[modalGame?.homeTeam]?.losses}})</span>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"modalGame?.visitTeam || modalGame?.homeTeam\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <img src=\"/assets/images/{{teamsArr[modalGame?.visitTeam]?.abbrev}}-L.png\" [alt]=\"teamsArr[modalGame?.visitTeam]?.name\">\r\n          </div>\r\n          <div fxFlex=\"20\" class=\"center\"></div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <img src=\"/assets/images/{{teamsArr[modalGame?.homeTeam]?.abbrev}}-R.png\" [alt]=\"teamsArr[modalGame?.homeTeam]?.name\">\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.qb/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.qb}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">QB</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.qb/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.qb}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.rb/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.rb}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">RB</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.rb/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.rb}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.wr/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.wr}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">WR</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.wr/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.wr}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.ol/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.ol}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">OL</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.ol/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.ol}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.dl/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.dl}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">DL</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.dl/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.dl}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.lb/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.lb}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">LB</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.lb/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.lb}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.db/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.db}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">DB</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.db/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.db}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.st/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.st}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">ST</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.st/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.st}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"40\" class=\"visit-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.visitTeam]?.co/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.visitTeam]?.darkcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.visitTeam]?.lightcolor,\r\n                'float':'right', 'padding-right':'5px'}\">\r\n              {{teamsArr[modalGame?.visitTeam]?.co}}\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center end\" class=\"position-label\">CO</div>\r\n          <div fxFlex=\"40\" class=\"home-level\">\r\n            <div [style.width.px]=\"teamsArr[modalGame?.homeTeam]?.co/9*200\"\r\n              [ngStyle]=\"{'color':'#'+teamsArr[modalGame?.homeTeam]?.lightcolor,\r\n                'background-color':'#'+teamsArr[modalGame?.homeTeam]?.darkcolor,\r\n                'float':'left', 'padding-left':'5px'}\">\r\n              {{teamsArr[modalGame?.homeTeam]?.co}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/dialog/matchup/matchup-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialog/matchup/matchup-dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\n.dialog-title {\n  margin-bottom: 12px; }\n.dialog-title .dialog-title-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: normal;\n    font-weight: bold; }\n.dialog-title .gameday-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: bold;\n    margin: 6px; }\n.dialog-title button {\n    color: #eeeeee;\n    background-color: rgba(0, 128, 0, 0.5) !important; }\nmat-dialog-content {\n  min-width: 600px; }\nmat-dialog-content mat-card {\n    background-color: #eeeeee; }\nmat-dialog-content mat-card .matchup {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 1em;\n      font-style: italic;\n      font-weight: bold; }\nmat-dialog-content mat-card .matchup .visit-level {\n        margin-top: 5px;\n        text-align: right; }\nmat-dialog-content mat-card .matchup .position-label {\n        text-align: center; }\nmat-dialog-content mat-card .matchup .home-level {\n        margin-top: 5px;\n        text-align: left; }\nmat-dialog-content mat-card .matchup .center {\n        text-align: center; }\nmat-dialog-content mat-card .matchup .team-city, mat-dialog-content mat-card .matchup .team-record {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: normal; }\nmat-dialog-content mat-card .matchup .team-name {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1.125em;\n        font-style: normal;\n        font-weight: bold; }\nmat-dialog-content mat-card .matchup .spread {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: normal; }\nmat-dialog-content mat-card .matchup .normal {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 38px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL21hdGNodXAvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL2RpYWxvZy9tYXRjaHVwL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFxkaWFsb2dcXG1hdGNodXBcXG1hdGNodXAtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsbUJBQW1CLEVBQUE7QUFEckI7SUQ4Q0UsMkZBbEI2RjtJQW1CN0Ysa0JBNUJrQjtJQTZCbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0FDakRuQjtJRHFERSwyRkF6QjZGO0lBMEI3RixjQXBDZTtJQXFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lDaERmLFdBQVcsRUFBQTtBQVJmO0lBV0ksY0ROMEI7SUNPMUIsaURBQXNDLEVBQUE7QUFJMUM7RUFDRSxnQkFBZ0IsRUFBQTtBQURsQjtJQUlJLHlCRGYwQixFQUFBO0FDVzlCO01EcUNFLDJGQXpCNkY7TUEwQjdGLGNBcENlO01BcUNmLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTtBQ3hDbkI7UUFTUSxlQUFlO1FBQ2YsaUJBQWlCLEVBQUE7QUFWekI7UUFhUSxrQkFBa0IsRUFBQTtBQWIxQjtRQWdCUSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7QUFqQnhCO1FBb0JRLGtCQUFrQixFQUFBO0FBcEIxQjtRRHVCRSwyRkFYNkY7UUFZN0YsY0F0QmU7UUF1QmYsa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFBO0FDMUJyQjtRRDhCRSwyRkFsQjZGO1FBbUI3RixrQkE1QmtCO1FBNkJsQixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7QUNqQ25CO1FEdUJFLDJGQVg2RjtRQVk3RixjQXRCZTtRQXVCZixrQkFBa0I7UUFDbEIsbUJBQW1CLEVBQUE7QUMxQnJCO1FEdUJFLDJGQVg2RjtRQVk3RixjQXRCZTtRQXVCZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FDT2IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvbWF0Y2h1cC9tYXRjaHVwLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgLmRpYWxvZy10aXRsZS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICB9XHJcbiAgLmdhbWVkYXktdGV4dCB7XHJcbiAgICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJG1lZEZvbnRTaXplKTtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgY29sb3I6ICROZWFyV2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTkZMQ29sb3IgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5lYXJXaGl0ZTtcclxuXHJcbiAgICAubWF0Y2h1cCB7XHJcbiAgICAgIEBpbmNsdWRlIGJvbGRJdGFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICAudmlzaXQtbGV2ZWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICAucG9zaXRpb24tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaG9tZS1sZXZlbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWFtLWNpdHksIC50ZWFtLXJlY29yZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWFtLW5hbWUge1xyXG4gICAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgICAgfVxyXG4gICAgICAuc3ByZWFkIHtcclxuICAgICAgICBAaW5jbHVkZSBub3JtYWxUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLm5vcm1hbCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialog/matchup/matchup-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog/matchup/matchup-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: MatchupDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchupDialogComponent", function() { return MatchupDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _common_odds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/odds */ "./src/app/common/odds.ts");







var MatchupDialogComponent = /** @class */ (function () {
    function MatchupDialogComponent(dialogRef, teamService, scheduleService, playoffService, data) {
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.scheduleService = scheduleService;
        this.playoffService = playoffService;
        this.data = data;
        this.teamsArr = [];
        this.loading = true;
        this.odds = 0;
    }
    MatchupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('[matchup] data: ' + this.data);
        if (this.data.playoffs) {
            this.modalGame = this.playoffService.getGameById(this.data.id);
        }
        else {
            this.modalGame = this.scheduleService.getGameById(this.data.id);
        }
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            // console.log('[matchup] ngOnInit() getTeams() SUCCESS');
            _this.loading = false;
            _this.odds = Object(_common_odds__WEBPACK_IMPORTED_MODULE_6__["calculateOdds"])(_this.teamsArr[_this.modalGame.visitTeam], _this.teamsArr[_this.modalGame.homeTeam]);
        }, function (err) {
            console.error('[matchup] ngOnInit() getTeams() error: ' + err);
        });
    };
    MatchupDialogComponent.prototype.getOdds = function () {
        var visit = this.teamsArr[this.modalGame.visitTeam] ? this.teamsArr[this.modalGame.visitTeam].abbrev : '';
        var home = this.teamsArr[this.modalGame.homeTeam] ? this.teamsArr[this.modalGame.homeTeam].abbrev : '';
        return Object(_common_odds__WEBPACK_IMPORTED_MODULE_6__["getOddsText"])(this.odds, visit, home);
    };
    MatchupDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    MatchupDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matchup-dialog',
            template: __webpack_require__(/*! ./matchup-dialog.component.html */ "./src/app/dialog/matchup/matchup-dialog.component.html"),
            styles: [__webpack_require__(/*! ./matchup-dialog.component.scss */ "./src/app/dialog/matchup/matchup-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_5__["PlayoffService"], Object])
    ], MatchupDialogComponent);
    return MatchupDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/results/results-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialog/results/results-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-title\" fxLayoutAlign=\"space-between\">\r\n  <div>\r\n    <div class=\"dialog-title-text\">Results</div>\r\n    <div class=\"gameday-text\">{{modalGame.gameday}}</div>\r\n  </div>\r\n  <button mat-mini-fab mat-dialog-close><mat-icon>close</mat-icon></button>\r\n</div>\r\n<mat-dialog-content *ngIf=\"!loading\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div class=\"results\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around end\">\r\n          <div fxFlex=\"40\" class=\"visit\">\r\n            <span class=\"team-city\">{{teamsArr[modalGame?.visitTeam]?.city}}</span><br>\r\n            <span class=\"team-name\">{{teamsArr[modalGame?.visitTeam]?.name}}</span>\r\n          </div>\r\n          <div fxFlex=\"20\" class=\"center\"><span class=\"normal\"> at </span></div>\r\n          <div fxFlex=\"40\" class=\"home\">\r\n            <span class=\"team-city\">{{teamsArr[modalGame?.homeTeam]?.city}}</span><br>\r\n            <span class=\"team-name\">{{teamsArr[modalGame?.homeTeam]?.name}}</span>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around end\">\r\n          <div fxFlex=\"40\" class=\"visit\">\r\n            <span class=\"team-record\">({{modalGame?.visitRecord}})</span>\r\n          </div>\r\n          <div fxFlex=\"20\" class=\"center\"><span class=\"spread\">{{ getOdds() }}</span></div>\r\n          <div fxFlex=\"40\" class=\"home\">\r\n            <span class=\"team-record\">({{modalGame?.homeRecord}})</span>\r\n          </div>\r\n        </div>\r\n        <mat-grid-list cols=\"4\" rowHeight=\"40px\">\r\n          <ng-container *ngFor=\"let result of results; let i = index;\">\r\n            <mat-grid-tile colspan=\"4\" *ngIf=\"i === 0 || results[i].quarter !== results[i-1].quarter\">\r\n              <span class=\"quarter\">{{getQuarter(result.quarter)}}</span>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile colspan=\"1\"><img src=\"/assets/images/{{teamsArr[result.teamScored]?.abbrev}}.png\" class=\"logo\"></mat-grid-tile>\r\n            <mat-grid-tile colspan=\"2\"><span class=\"normal\">{{teamsArr[result.teamScored]?.name}} {{getScoreType(result.points)}}</span></mat-grid-tile>\r\n            <mat-grid-tile colspan=\"1\">\r\n              <span [ngClass]=\"whoScored(i, 'v')\">{{getGameScore(i, 'v')}}</span>\r\n              <span class=\"normal\">-</span>\r\n              <span [ngClass]=\"whoScored(i, 'h')\">{{getGameScore(i, 'h')}}</span>\r\n            </mat-grid-tile>\r\n          </ng-container>\r\n          <mat-grid-tile colspan=\"4\" *ngIf=\"modalGame.quarter === 'F'\">\r\n            <span class=\"quarter\">{{getWinner()}} Win</span>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/dialog/results/results-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialog/results/results-dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\n.dialog-title {\n  margin-bottom: 12px; }\n.dialog-title .dialog-title-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: normal;\n    font-weight: bold; }\n.dialog-title .gameday-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: bold;\n    margin: 6px; }\n.dialog-title button {\n    color: #eeeeee;\n    background-color: rgba(0, 128, 0, 0.5) !important; }\nmat-dialog-content {\n  min-width: 420px; }\nmat-dialog-content mat-card {\n    background-color: #eeeeee; }\nmat-dialog-content mat-card .results {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 1em;\n      font-style: italic;\n      font-weight: bold; }\nmat-dialog-content mat-card .results .visit {\n        text-align: left; }\nmat-dialog-content mat-card .results .home {\n        text-align: right; }\nmat-dialog-content mat-card .results .center {\n        text-align: center; }\nmat-dialog-content mat-card .results .team-city, mat-dialog-content mat-card .results .team-record {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: normal; }\nmat-dialog-content mat-card .results .team-name {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1.125em;\n        font-style: normal;\n        font-weight: bold; }\nmat-dialog-content mat-card .results .spread {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: normal; }\nmat-dialog-content mat-card .results .logo {\n        text-align: left;\n        height: 40px; }\nmat-dialog-content mat-card .results .quarter {\n        height: 25px;\n        width: 100%;\n        background: rgba(0, 128, 0, 0.5);\n        border-radius: 5px;\n        text-align: center;\n        line-height: 25px; }\nmat-dialog-content mat-card .results .normal {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 30px; }\nmat-dialog-content mat-card .results .bold {\n        font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 1em;\n        font-style: normal;\n        font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL3Jlc3VsdHMvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL2RpYWxvZy9yZXN1bHRzL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFxkaWFsb2dcXHJlc3VsdHNcXHJlc3VsdHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsbUJBQW1CLEVBQUE7QUFEckI7SUQ4Q0UsMkZBbEI2RjtJQW1CN0Ysa0JBNUJrQjtJQTZCbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0FDakRuQjtJRHFERSwyRkF6QjZGO0lBMEI3RixjQXBDZTtJQXFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lDaERmLFdBQVcsRUFBQTtBQVJmO0lBV0ksY0ROMEI7SUNPMUIsaURBQXNDLEVBQUE7QUFJMUM7RUFDRSxnQkFBZ0IsRUFBQTtBQURsQjtJQUlJLHlCRGYwQixFQUFBO0FDVzlCO01EcUNFLDJGQXpCNkY7TUEwQjdGLGNBcENlO01BcUNmLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTtBQ3hDbkI7UUFTUSxnQkFBZ0IsRUFBQTtBQVR4QjtRQVlRLGlCQUFpQixFQUFBO0FBWnpCO1FBZVEsa0JBQWtCLEVBQUE7QUFmMUI7UUR1QkUsMkZBWDZGO1FBWTdGLGNBdEJlO1FBdUJmLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBQTtBQzFCckI7UUQ4QkUsMkZBbEI2RjtRQW1CN0Ysa0JBNUJrQjtRQTZCbEIsa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBO0FDakNuQjtRRHVCRSwyRkFYNkY7UUFZN0YsY0F0QmU7UUF1QmYsa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFBO0FDMUJyQjtRQTJCUSxnQkFBZ0I7UUFDaEIsWUFBWSxFQUFBO0FBNUJwQjtRQStCUSxZQUFZO1FBQ1osV0FBVztRQUNYLGdDRC9DdUI7UUNnRHZCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7QUFwQ3pCO1FEdUJFLDJGQVg2RjtRQVk3RixjQXRCZTtRQXVCZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FDY2IsaUJBQWlCLEVBQUE7QUF4Q3pCO1FEOEJFLDJGQWxCNkY7UUFtQjdGLGNBN0JlO1FBOEJmLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9yZXN1bHRzL3Jlc3VsdHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIENvbG9yIGRlZmluaXRpb25zICAgICAqIC8vXHJcblxyXG4vLyAgICBNYWluIGNvbG9yXHJcbiRORkxDb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XHJcbiRORkxUcmFuczogcmdiYSgwLCAxMjgsIDAsIDAuMyk7XHJcbiRORkxMaW5rQ29sb3I6IHJnYigwLCAxMjgsIDApO1xyXG4kTmVhcldoaXRlOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiROZWFyQmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJExpZ2h0R3JleTogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IHNpemUgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc2l6ZXMsIHVzZWQgYnkgaWNvbnMsIGxhYmVscyBhbmQgdG9vbGJhcnNcclxuJHh4eHNGb250U2l6ZTogMC41ZW07XHJcbiR4eHNGb250U2l6ZTogMC42MjVlbTtcclxuJHhzRm9udFNpemU6IDAuNzVlbTsgLy8gMTJweFxyXG4kc21Gb250U2l6ZTogMC44NzVlbTsgLy8gMTRweFxyXG4kbWVkRm9udFNpemU6IDFlbTsgLy8gMTZweFxyXG4kbGdGb250U2l6ZTogMS4xMjVlbTsgLy8gMThweFxyXG4keGxGb250U2l6ZTogMS4yNWVtOyAvLyAyMXB4XHJcbiR4eEZvbnRTaXplOiAxLjVlbTsgLy8gMjZweFxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IGZhbWlseSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzdHlsZXNcclxuJHNhbnNTZXJpZkZvbnQxOiBSb2JvdG8sIEFyaWFsLCBcIkF2ZW5pciBOZXh0XCIsIENhbGlicmksIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDI6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MzogTGF0bywgXCJTZWdvZSBVSVwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2VyaWZGb250MTogQmFza2VydmlsbGUsIEdlb3JnaWEsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgUGFsYXRpbm8sIHNlcmlmO1xyXG4kc2VyaWZGb250MjogRGlkb3QsIFwiQm9vayBBbnRpcXVhXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIHRleHQgc3R5bGVzICAgICAgICogLy9cclxuXHJcbkBtaXhpbiBub3JtYWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJvbGRUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkSXRhbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIG1hdCBpY29uIGFuaW1hdGlvbnMgLy9cclxuXHJcbkBtaXhpbiB0cmFuc0R1cmF0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuNzBzKSB7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxufVxyXG5cclxuQG1peGluIHRyYW5zT3JpZ2luKCR4T3JpZzogY2VudGVyLCAkeU9yaWc6IGNlbnRlciwgJHpPcmlnOiAwKSB7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNSb3RhdGUoJGRlZ3JlZTogMTgwZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zU2NhbGUoJHhTY2FsZTogMS41LCAkeVNjYWxlOiAxLjUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbjogMnMsICRjb3VudDogMSkge1xyXG4gIGFuaW1hdGlvbjogd2lnZ2xlICRkdXJhdGlvbiBlYXNlIDBzICRjb3VudDtcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHNwaW5cclxuQG1peGluIG1hdEljb25TcGluKCRkdXJhdGlvbiwgJGRlZ3JlZSwgJHhPcmlnLCAkeU9yaWcpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAvLyBGaXJlZm94L01vemlsbGEsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1vei1hcHBlYXJhbmNlOiBub25lKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICAvLyBFZGdlLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zUm90YXRlKCRkZWdyZWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gem9vbVxyXG5AbWl4aW4gbWF0SWNvblpvb20oJGR1cmF0aW9uLCAkeFNjYWxlLCAkeVNjYWxlKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1NjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gd2lnZ2xlXHJcbkBtaXhpbiBtYXRJY29uV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KSB7XHJcbiAgLy8gQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbiAqICRjb3VudCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1dpZ2dsZSgkZHVyYXRpb24sICRjb3VudCk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ3NyYy9zY3NzL2NvbW1vbic7XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAuZGlhbG9nLXRpdGxlLXRleHQge1xyXG4gICAgQGluY2x1ZGUgYm9sZFRleHQoJGxnRm9udFNpemUpO1xyXG4gIH1cclxuICAuZ2FtZWRheS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIGJvbGRJdGFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRORkxDb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDQyMHB4O1xyXG5cclxuICBtYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmVhcldoaXRlO1xyXG5cclxuICAgIC5yZXN1bHRzIHtcclxuICAgICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgICAgIC52aXNpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICAuaG9tZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWFtLWNpdHksIC50ZWFtLXJlY29yZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWFtLW5hbWUge1xyXG4gICAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgICAgfVxyXG4gICAgICAuc3ByZWFkIHtcclxuICAgICAgICBAaW5jbHVkZSBub3JtYWxUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5xdWFydGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJE5GTENvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5vcm1hbCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ib2xkIHtcclxuICAgICAgICBAaW5jbHVkZSBib2xkVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialog/results/results-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog/results/results-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ResultsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsDialogComponent", function() { return ResultsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _common_odds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/odds */ "./src/app/common/odds.ts");







var ResultsDialogComponent = /** @class */ (function () {
    function ResultsDialogComponent(dialogRef, teamService, scheduleService, playoffService, data) {
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.scheduleService = scheduleService;
        this.playoffService = playoffService;
        this.data = data;
        this.teamsArr = [];
        this.loading = true;
    }
    ResultsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('[results] data: ' + this.data);
        if (this.data.playoffs) {
            this.modalGame = this.playoffService.getGameById(this.data.id);
        }
        else {
            this.modalGame = this.scheduleService.getGameById(this.data.id);
        }
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            _this.results = _this.modalGame.gameResults;
            _this.loading = false;
        }, function (err) {
            console.error('[results] ngOnInit() getTeams() error: ' + err);
        });
    };
    ResultsDialogComponent.prototype.getOdds = function () {
        // show saved game odds or calculate if there is none
        var visit = this.teamsArr[this.modalGame.visitTeam] ? this.teamsArr[this.modalGame.visitTeam].abbrev : '';
        var home = this.teamsArr[this.modalGame.homeTeam] ? this.teamsArr[this.modalGame.homeTeam].abbrev : '';
        return Object(_common_odds__WEBPACK_IMPORTED_MODULE_6__["getOddsText"])(this.modalGame.spread, visit, home);
    };
    ResultsDialogComponent.prototype.getQuarter = function (quarter) {
        switch (quarter) {
            case '1': return 'First Quarter';
            case '2': return 'Second Quarter';
            case '3': return 'Third Quarter';
            case '4': return 'Fourth Quarter';
            case 'OT': return 'Overtime';
            default: return '?';
        }
    };
    ResultsDialogComponent.prototype.getScoreType = function (score) {
        switch (score) {
            case 3: return 'Field Goal';
            case 6: return 'Touchdown (0pt)';
            case 7: return 'Touchdown';
            case 8: return 'Touchdown (2pt)';
            default: return '?';
        }
    };
    ResultsDialogComponent.prototype.whoScored = function (idx, team) {
        var visitScored = false;
        var homeScored = false;
        var returnClass = 'normal';
        if (this.results[idx].teamScored === this.modalGame.homeTeam) {
            homeScored = true;
        }
        if (this.results[idx].teamScored === this.modalGame.visitTeam) {
            visitScored = true;
        }
        if ((team === 'v' && visitScored) || (team === 'h' && homeScored)) {
            returnClass = 'bold';
        }
        return returnClass;
    };
    ResultsDialogComponent.prototype.getGameScore = function (idx, team) {
        var _this = this;
        var visitScore = 0;
        var homeScore = 0;
        this.results.forEach(function (result, i) {
            if (i <= idx) {
                if (result.teamScored === _this.modalGame.homeTeam) {
                    homeScore += result.points;
                }
                if (result.teamScored === _this.modalGame.visitTeam) {
                    visitScore += result.points;
                }
            }
        });
        return team === 'v' ? visitScore : homeScore;
    };
    ResultsDialogComponent.prototype.getWinner = function () {
        if (this.modalGame.homeScore > this.modalGame.visitScore) {
            return this.teamsArr[this.modalGame.homeTeam].name;
        }
        else {
            return this.teamsArr[this.modalGame.visitTeam].name;
        }
    };
    ResultsDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ResultsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results-dialog',
            template: __webpack_require__(/*! ./results-dialog.component.html */ "./src/app/dialog/results/results-dialog.component.html"),
            styles: [__webpack_require__(/*! ./results-dialog.component.scss */ "./src/app/dialog/results/results-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_5__["PlayoffService"], Object])
    ], ResultsDialogComponent);
    return ResultsDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/simseason/simseason-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialog/simseason/simseason-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-title\" fxLayoutAlign=\"space-between\">\r\n  <div class=\"dialog-title-text\">Sim Season</div>\r\n  <button mat-mini-fab mat-dialog-close><mat-icon>close</mat-icon></button>\r\n</div>\r\n<mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div fxLayout=\"column\">\r\n        <mat-slide-toggle [(ngModel)]=\"result.simSeason\">Sim Season</mat-slide-toggle>\r\n        <mat-slide-toggle [(ngModel)]=\"result.simFast\">Sim Fast</mat-slide-toggle>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</mat-dialog-content>\r\n<mat-dialog-actions fxLayoutAlign=\"space-between\">\r\n  <button id=\"cancel\" mat-flat-button class=\"cancel\" [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button id=\"submit\" mat-flat-button class=\"submit\" (click)=\"submitForm()\">Apply</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/dialog/simseason/simseason-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dialog/simseason/simseason-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\n.dialog-title {\n  margin-bottom: 12px; }\n.dialog-title .dialog-title-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: normal;\n    font-weight: bold; }\n.dialog-title button {\n    color: #eeeeee;\n    background-color: rgba(0, 128, 0, 0.5) !important; }\nmat-dialog-content mat-card {\n  background-color: #eeeeee; }\nmat-dialog-content mat-card mat-slide-toggle {\n    padding: 12px 0px; }\nmat-dialog-actions {\n  padding: 24px 0px; }\nmat-dialog-actions button {\n    color: black;\n    background-color: rgba(0, 128, 0, 0.5) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL3NpbXNlYXNvbi9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXHNjc3NcXF9jb21tb24uc2NzcyIsInNyYy9hcHAvZGlhbG9nL3NpbXNlYXNvbi9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXGFwcFxcZGlhbG9nXFxzaW1zZWFzb25cXHNpbXNlYXNvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFZQSw4QkFBQTtBQWNBLDhCQUFBO0FBV0EsbUNBQUE7QUF5QkEsbUNBQUE7QUM1REE7RUFDRSxtQkFBbUIsRUFBQTtBQURyQjtJRDhDRSwyRkFsQjZGO0lBbUI3RixrQkE1QmtCO0lBNkJsQixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7QUNqRG5CO0lBT0ksY0RGMEI7SUNHMUIsaURBQXNDLEVBQUE7QUFJMUM7RUFFSSx5QkRUMEIsRUFBQTtBQ085QjtJQU9NLGlCQUFpQixFQUFBO0FBS3ZCO0VBQ0UsaUJBQWlCLEVBQUE7QUFEbkI7SUFHSSxZQUFZO0lBQ1osaURBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvc2ltc2Vhc29uL3NpbXNlYXNvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogQ29sb3IgZGVmaW5pdGlvbnMgICAgICogLy9cclxuXHJcbi8vICAgIE1haW4gY29sb3JcclxuJE5GTENvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcclxuJE5GTFRyYW5zOiByZ2JhKDAsIDEyOCwgMCwgMC4zKTtcclxuJE5GTExpbmtDb2xvcjogcmdiKDAsIDEyOCwgMCk7XHJcbiROZWFyV2hpdGU6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuJE5lYXJCbGFjazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kTGlnaHRHcmV5OiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgc2l6ZSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzaXplcywgdXNlZCBieSBpY29ucywgbGFiZWxzIGFuZCB0b29sYmFyc1xyXG4keHh4c0ZvbnRTaXplOiAwLjVlbTtcclxuJHh4c0ZvbnRTaXplOiAwLjYyNWVtO1xyXG4keHNGb250U2l6ZTogMC43NWVtOyAvLyAxMnB4XHJcbiRzbUZvbnRTaXplOiAwLjg3NWVtOyAvLyAxNHB4XHJcbiRtZWRGb250U2l6ZTogMWVtOyAvLyAxNnB4XHJcbiRsZ0ZvbnRTaXplOiAxLjEyNWVtOyAvLyAxOHB4XHJcbiR4bEZvbnRTaXplOiAxLjI1ZW07IC8vIDIxcHhcclxuJHh4Rm9udFNpemU6IDEuNWVtOyAvLyAyNnB4XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgZmFtaWx5IGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHN0eWxlc1xyXG4kc2Fuc1NlcmlmRm9udDE6IFJvYm90bywgQXJpYWwsIFwiQXZlbmlyIE5leHRcIiwgQ2FsaWJyaSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MjogXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQzOiBMYXRvLCBcIlNlZ29lIFVJXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzZXJpZkZvbnQxOiBCYXNrZXJ2aWxsZSwgR2VvcmdpYSwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBQYWxhdGlubywgc2VyaWY7XHJcbiRzZXJpZkZvbnQyOiBEaWRvdCwgXCJCb29rIEFudGlxdWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgdGV4dCBzdHlsZXMgICAgICAgKiAvL1xyXG5cclxuQG1peGluIG5vcm1hbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1peGluIGJvbGRJdGFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgbWF0IGljb24gYW5pbWF0aW9ucyAvL1xyXG5cclxuQG1peGluIHRyYW5zRHVyYXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC43MHMpIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNPcmlnaW4oJHhPcmlnOiBjZW50ZXIsICR5T3JpZzogY2VudGVyLCAkek9yaWc6IDApIHtcclxuICBmaWx0ZXI6IGJsdXIoMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1JvdGF0ZSgkZGVncmVlOiAxODBkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNTY2FsZSgkeFNjYWxlOiAxLjUsICR5U2NhbGU6IDEuNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNXaWdnbGUoJGR1cmF0aW9uOiAycywgJGNvdW50OiAxKSB7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgJGR1cmF0aW9uIGVhc2UgMHMgJGNvdW50O1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gc3BpblxyXG5AbWl4aW4gbWF0SWNvblNwaW4oJGR1cmF0aW9uLCAkZGVncmVlLCAkeE9yaWcsICR5T3JpZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gIC8vIEZpcmVmb3gvTW96aWxsYSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIC8vIEVkZ2UsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNSb3RhdGUoJGRlZ3JlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB6b29tXHJcbkBtaXhpbiBtYXRJY29uWm9vbSgkZHVyYXRpb24sICR4U2NhbGUsICR5U2NhbGUpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zU2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB3aWdnbGVcclxuQG1peGluIG1hdEljb25XaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpIHtcclxuICAvLyBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uICogJGNvdW50KTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3Njc3MvY29tbW9uJztcclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gIC5kaWFsb2ctdGl0bGUtdGV4dCB7XHJcbiAgICBAaW5jbHVkZSBib2xkVGV4dCgkbGdGb250U2l6ZSk7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRORkxDb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmVhcldoaXRlO1xyXG4gICAgLy8gLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIC8vIH1cclxuICAgIG1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMjRweCAwcHg7XHJcbiAgYnV0dG9uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRORkxDb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dialog/simseason/simseason-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialog/simseason/simseason-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: SimseasonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimseasonDialogComponent", function() { return SimseasonDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SimseasonDialogComponent = /** @class */ (function () {
    function SimseasonDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.result = { simSeason: false, simFast: false };
    }
    SimseasonDialogComponent.prototype.ngOnInit = function () {
        // console.log('[simseason] data.simFast: ' + this.data.simFast);
        if (this.data.simFast) {
            this.result.simFast = this.data.simFast;
        }
    };
    SimseasonDialogComponent.prototype.submitForm = function () {
        // console.log('[simseason] submitForm() simSeason: ' + this.result.simSeason);
        // console.log('[simseason] submitForm() simFast: ' + this.result.simFast);
        this.dialogRef.close(this.result);
    };
    SimseasonDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    SimseasonDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simseason-dialog',
            template: __webpack_require__(/*! ./simseason-dialog.component.html */ "./src/app/dialog/simseason/simseason-dialog.component.html"),
            styles: [__webpack_require__(/*! ./simseason-dialog.component.scss */ "./src/app/dialog/simseason/simseason-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SimseasonDialogComponent);
    return SimseasonDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/top-teams/top-teams-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialog/top-teams/top-teams-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-title\" fxLayoutAlign=\"space-between\">\r\n  <div class=\"dialog-title-text\">Top Teams</div>\r\n  <button mat-mini-fab mat-dialog-close><mat-icon>close</mat-icon></button>\r\n</div>\r\n<mat-dialog-content>\r\n  <mat-tab-group mat-stretch-tabs [(selectedIndex)]=\"tabIndex\" (selectedTabChange)=\"tabClicked($event)\">\r\n    <mat-tab label=\"AFC Playoffs\">\r\n      <div id=\"afc\">\r\n        <h3 class=\"heading\">Playoff <img src=\"/assets/images/AFC.png\" height=\"75px\"> Picture</h3>\r\n        <div fxLayout=\"row\">\r\n          <div fxLayout=\"column\" class=\"division\">\r\n            Division Leaders\r\n            <div class=\"div-team\" *ngFor=\"let team of AFCDivLeaders\">\r\n              <div class=\"team-info\" fxFlex>\r\n                <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n                <span class=\"team-city\">{{team.city}}</span>\r\n                <span class=\"team-record\">{{team.wins}} - {{team.losses}}</span>\r\n                <br>\r\n                <span class=\"team-name\">{{team.name}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"column\" class=\"division\">\r\n            Wildcards\r\n            <div class=\"div-team\" *ngFor=\"let team of AFCWildcard\">\r\n              <div class=\"team-info\" fxFlex>\r\n                <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n                <span class=\"team-city\">{{team.city}}</span>\r\n                <span class=\"team-record\">{{team.wins}} - {{team.losses}}</span>\r\n                <br>\r\n                <span class=\"team-name\">{{team.name}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"column\" class=\"division\">\r\n            On the Outside\r\n            <div class=\"div-team\" *ngFor=\"let team of AFCHunt\">\r\n              <div class=\"team-info\" fxFlex>\r\n                <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n                <span class=\"team-city\">{{team.city}}</span>\r\n                <span class=\"team-record\">{{team.wins}} - {{team.losses}}</span>\r\n                <br>\r\n                <span class=\"team-name\">{{team.name}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"NFC Playoffs\">\r\n      <div id=\"nfc\">\r\n        <h3 class=\"heading\">Playoff <img src=\"/assets/images/NFC.png\" height=\"75px\"> Picture</h3>\r\n        <div fxLayout=\"row\">\r\n          <div fxLayout=\"column\" class=\"division\">\r\n            Division Leaders\r\n            <div class=\"div-team\" *ngFor=\"let team of NFCDivLeaders\">\r\n              <div class=\"team-info\" fxFlex>\r\n                <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n                <span class=\"team-city\">{{team.city}}</span>\r\n                <span class=\"team-record\">{{team.wins}} - {{team.losses}}</span>\r\n                <br>\r\n                <span class=\"team-name\">{{team.name}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"column\" class=\"division\">\r\n            Wildcards\r\n            <div class=\"div-team\" *ngFor=\"let team of NFCWildcard\">\r\n              <div class=\"team-info\" fxFlex>\r\n                <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n                <span class=\"team-city\">{{team.city}}</span>\r\n                <span class=\"team-record\">{{team.wins}} - {{team.losses}}</span>\r\n                <br>\r\n                <span class=\"team-name\">{{team.name}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"column\" class=\"division\">\r\n            On the Outside\r\n            <div class=\"div-team\" *ngFor=\"let team of NFCHunt\">\r\n              <div class=\"team-info\" fxFlex>\r\n                <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n                <span class=\"team-city\">{{team.city}}</span>\r\n                <span class=\"team-record\">{{team.wins}} - {{team.losses}}</span>\r\n                <br>\r\n                <span class=\"team-name\">{{team.name}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/dialog/top-teams/top-teams-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dialog/top-teams/top-teams-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\n.dialog-title {\n  margin-bottom: 12px; }\n.dialog-title .dialog-title-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: normal;\n    font-weight: bold;\n    margin-bottom: 28px; }\n.dialog-title button {\n    color: #eeeeee;\n    background-color: rgba(0, 128, 0, 0.5) !important; }\nmat-dialog-content mat-tab-group {\n  background-color: #eeeeee;\n  border-radius: 5px; }\nmat-dialog-content mat-tab-group .heading {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: italic;\n    font-weight: bold;\n    text-align: center;\n    margin: 5px; }\nmat-dialog-content mat-tab-group .division {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: bold;\n    text-align: center;\n    background: rgba(0, 128, 0, 0.5);\n    padding: 1px 1px 1px 1px;\n    margin: 0px 0px 5px 5px;\n    border-radius: 5px; }\nmat-dialog-content mat-tab-group .division .div-team {\n      background: url('/tryit/ngNFL/assets/images/whiteback.jpg');\n      text-align: left;\n      margin: 1px;\n      border-radius: 5px; }\nmat-dialog-content mat-tab-group .division .div-team .team-info {\n        white-space: nowrap;\n        min-width: 200px; }\nmat-dialog-content mat-tab-group .division .div-team .team-info:hover {\n          border-color: rgba(0, 128, 0, 0.5);\n          background-color: rgba(0, 128, 0, 0.3); }\nmat-dialog-content mat-tab-group .division .div-team .team-info .logo {\n          float: left;\n          height: 40px;\n          padding: 2px 1px 1px 3px; }\nmat-dialog-content mat-tab-group .division .div-team .team-info .team-city {\n          font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n          font-size: 0.875em;\n          font-style: normal;\n          font-weight: normal;\n          padding-left: 5px; }\nmat-dialog-content mat-tab-group .division .div-team .team-info .team-name {\n          font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n          font-size: 1em;\n          font-style: normal;\n          font-weight: bold;\n          padding-left: 5px; }\nmat-dialog-content mat-tab-group .division .div-team .team-info .team-record {\n          font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n          font-size: 0.875em;\n          font-style: normal;\n          font-weight: normal;\n          float: right;\n          margin: 2px 5px 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL3RvcC10ZWFtcy9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXHNjc3NcXF9jb21tb24uc2NzcyIsInNyYy9hcHAvZGlhbG9nL3RvcC10ZWFtcy9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXGFwcFxcZGlhbG9nXFx0b3AtdGVhbXNcXHRvcC10ZWFtcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFZQSw4QkFBQTtBQWNBLDhCQUFBO0FBV0EsbUNBQUE7QUF5QkEsbUNBQUE7QUM1REE7RUFDRSxtQkFBbUIsRUFBQTtBQURyQjtJRDhDRSwyRkFsQjZGO0lBbUI3RixrQkE1QmtCO0lBNkJsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lDNUNmLG1CQUFtQixFQUFBO0FBTHZCO0lBU0ksY0RKMEI7SUNLMUIsaURBQXNDLEVBQUE7QUFJMUM7RUFFSSx5QkRYMEI7RUNZMUIsa0JBQWtCLEVBQUE7QUFIdEI7SUR1Q0UsMkZBekI2RjtJQTBCN0Ysa0JBbkNrQjtJQW9DbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQ25DYixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0FBUmpCO0lEdUNFLDJGQXpCNkY7SUEwQjdGLGNBcENlO0lBcUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUM3QmIsa0JBQWtCO0lBQ2xCLGdDRDFCeUI7SUMyQnpCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7QUFqQnhCO01Bb0JRLDJEQUE2QztNQUM3QyxnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGtCQUFrQixFQUFBO0FBdkIxQjtRQTBCVSxtQkFBbUI7UUFDbkIsZ0JBQWdCLEVBQUE7QUEzQjFCO1VBOEJZLGtDRDFDbUI7VUMyQ25CLHNDRDFDbUIsRUFBQTtBQ1cvQjtVQWtDWSxXQUFXO1VBQ1gsWUFBWTtVQUNaLHdCQUF3QixFQUFBO0FBcENwQztVRHlCRSwyRkFYNkY7VUFZN0Ysa0JBdkJrQjtVQXdCbEIsa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQ1lULGlCQUFpQixFQUFBO0FBeEM3QjtVRGdDRSwyRkFsQjZGO1VBbUI3RixjQTdCZTtVQThCZixrQkFBa0I7VUFDbEIsaUJBQWlCO1VDU1AsaUJBQWlCLEVBQUE7QUE1QzdCO1VEeUJFLDJGQVg2RjtVQVk3RixrQkF2QmtCO1VBd0JsQixrQkFBa0I7VUFDbEIsbUJBQW1CO1VDb0JULFlBQVk7VUFDWix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy90b3AtdGVhbXMvdG9wLXRlYW1zLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgLmRpYWxvZy10aXRsZS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgY29sb3I6ICROZWFyV2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTkZMQ29sb3IgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgbWF0LXRhYi1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkTmVhcldoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2aXNpb24ge1xyXG4gICAgICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJG1lZEZvbnRTaXplKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkTkZMQ29sb3I7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAxcHggMXB4IDFweDtcclxuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIC5kaXYtdGVhbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL3doaXRlYmFjay5qcGcpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAudGVhbS1pbmZvIHtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRORkxDb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5GTFRyYW5zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMXB4IDFweCAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbS1jaXR5IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkc21Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW0tbmFtZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW0tcmVjb3JkIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkc21Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHggNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dialog/top-teams/top-teams-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialog/top-teams/top-teams-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: TopTeamsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTeamsDialogComponent", function() { return TopTeamsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _common_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/sort */ "./src/app/common/sort.ts");





var TopTeamsDialogComponent = /** @class */ (function () {
    function TopTeamsDialogComponent(teamService, dialogRef, data) {
        this.teamService = teamService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.divisions = [];
        this.teamsArr = [];
        this.AFCDivLeaders = [];
        this.AFCOthers = [];
        this.AFCWildcard = [];
        this.AFCHunt = [];
        this.NFCDivLeaders = [];
        this.NFCOthers = [];
        this.NFCWildcard = [];
        this.NFCHunt = [];
    }
    TopTeamsDialogComponent.prototype.ngOnInit = function () {
        // this.teamsArr = this.teamService.getCurrentTeams().map(teams => teams);
        var _this = this;
        if (this.data) {
            this.tabIndex = this.data.tabIndex;
        }
        else {
            this.tabIndex = 0;
        }
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            // console.log('[navbar] ngOnInit() getCurrentTeams() SUCCESS');
        }, function (err) {
            console.error('[top-teams] ngOnInit() getTeams() error: ' + err);
        });
    };
    TopTeamsDialogComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.teamsArr.length > 0) {
            this.AFCDivLeaders = [];
            this.AFCOthers = [];
            this.AFCWildcard = [];
            this.AFCHunt = [];
            this.NFCDivLeaders = [];
            this.NFCOthers = [];
            this.NFCWildcard = [];
            this.NFCHunt = [];
            this.teamsArr.forEach(function (team) {
                if (_this.divisions.indexOf(team.division) < 0) {
                    _this.divisions.push(team.division);
                }
            });
            this.divisions
                .filter(function (division) { return division.indexOf('AFC') > -1; })
                .forEach(function (division) {
                var thisDiv = _this.teamsArr.filter(function (team) { return (team.division === division); });
                thisDiv.sort(_common_sort__WEBPACK_IMPORTED_MODULE_4__["sortDivision"]);
                _this.AFCDivLeaders.push(thisDiv[0]);
                _this.AFCOthers.push(thisDiv[1]);
                _this.AFCOthers.push(thisDiv[2]);
                _this.AFCOthers.push(thisDiv[3]);
            });
            this.AFCDivLeaders.sort(_common_sort__WEBPACK_IMPORTED_MODULE_4__["sortConference"]);
            this.AFCOthers.sort(_common_sort__WEBPACK_IMPORTED_MODULE_4__["sortConference"]);
            this.AFCWildcard.push(this.AFCOthers[0]);
            this.AFCWildcard.push(this.AFCOthers[1]);
            this.AFCHunt.push(this.AFCOthers[2]);
            this.AFCHunt.push(this.AFCOthers[3]);
            this.AFCHunt.push(this.AFCOthers[4]);
            this.AFCHunt.push(this.AFCOthers[5]);
            this.divisions
                .filter(function (division) { return division.indexOf('NFC') > -1; })
                .forEach(function (division) {
                var thisDiv = _this.teamsArr.filter(function (team) { return (team.division === division); });
                thisDiv.sort(_common_sort__WEBPACK_IMPORTED_MODULE_4__["sortDivision"]);
                _this.NFCDivLeaders.push(thisDiv[0]);
                _this.NFCOthers.push(thisDiv[1]);
                _this.NFCOthers.push(thisDiv[2]);
                _this.NFCOthers.push(thisDiv[3]);
            });
            this.NFCDivLeaders.sort(_common_sort__WEBPACK_IMPORTED_MODULE_4__["sortConference"]);
            this.NFCOthers.sort(_common_sort__WEBPACK_IMPORTED_MODULE_4__["sortConference"]);
            this.NFCWildcard.push(this.NFCOthers[0]);
            this.NFCWildcard.push(this.NFCOthers[1]);
            this.NFCHunt.push(this.NFCOthers[2]);
            this.NFCHunt.push(this.NFCOthers[3]);
            this.NFCHunt.push(this.NFCOthers[4]);
            this.NFCHunt.push(this.NFCOthers[5]);
        }
    };
    TopTeamsDialogComponent.prototype.ngOnDestroy = function () {
        this.onClose();
    };
    TopTeamsDialogComponent.prototype.tabClicked = function (event) {
        this.tabIndex = event.index;
    };
    TopTeamsDialogComponent.prototype.onClose = function () {
        this.dialogRef.close({ 'tabIndex': this.tabIndex });
    };
    TopTeamsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-teams-dialog',
            template: __webpack_require__(/*! ./top-teams-dialog.component.html */ "./src/app/dialog/top-teams/top-teams-dialog.component.html"),
            styles: [__webpack_require__(/*! ./top-teams-dialog.component.scss */ "./src/app/dialog/top-teams/top-teams-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TopTeamsDialogComponent);
    return TopTeamsDialogComponent;
}());



/***/ }),

/***/ "./src/app/nav/navbar.component.html":
/*!*******************************************!*\
  !*** ./src/app/nav/navbar.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"menu\">\r\n\r\n  <div class=\"menu-logo\"><img src=\"/assets/images/NFL.png\" height=\"50px\"></div>\r\n\r\n  <div fxLayoutAlign=\"center\" fxShow=\"false\" fxShow.gt-sm>\r\n    <span class=\"menu-link\"><a [routerLink]=\"['/teams']\" id=\"show\">Show Teams</a></span>\r\n    <span class=\"menu-link\"><a [routerLink]=\"['/schedule']\" id=\"schedule\">Schedule</a></span>\r\n    <span class=\"menu-link\"><a [routerLink]=\"['/standings']\" id=\"standings\">Standings</a></span>\r\n    <span class=\"menu-link\"><a [routerLink]=\"['/playoffs']\" id=\"playoffs\" *ngIf=\"postseason\">Playoffs</a></span>\r\n    <span class=\"menu-link\"><a id=\"topTeams\" (click)=\"getTopTeams()\">Top Teams</a></span>\r\n    <span class=\"menu-link\"><a id=\"help\">Help</a></span>\r\n  </div>\r\n\r\n  <span fxFlex=\"1 1 auto\"></span>\r\n\r\n  <button mat-raised-button id=\"Simulate\" (click)=\"simulate()\" [disabled]=\"simActive() || seasonOver\"\r\n    [appSpinnerButton]=\"simActive()\" [ngClass]=\"{ disabled: simActive() }\">Simulate</button>\r\n\r\n  <div class=\"settings\">\r\n    <div class=\"spin\">\r\n      <button mat-icon-button class=\"settings-mini-fab\" matTooltip=\"Settings\" [matMenuTriggerFor]=\"settingsMenu\">\r\n        <mat-icon>settings</mat-icon>\r\n      </button>\r\n      <mat-menu #settingsMenu>\r\n        <a mat-menu-item id=\"toggle\"><mat-slide-toggle [(ngModel)]=\"oneGameAtATime\">One Game at a Time</mat-slide-toggle></a>\r\n        <a mat-menu-item id=\"speed\"><mat-slide-toggle [(ngModel)]=\"simFast\">Sim Fast</mat-slide-toggle></a>\r\n        <a mat-menu-item id=\"reset\" (click)=\"resetSeason()\"><mat-icon>replay</mat-icon>Reset Season</a>\r\n      </mat-menu>\r\n    </div>\r\n  </div>\r\n\r\n  <a mat-button [matMenuTriggerFor]=\"mainMenu\" fxHide=\"false\" fxHide.gt-sm>\r\n    <mat-icon>more_vert</mat-icon>\r\n  </a>\r\n  <mat-menu #mainMenu>\r\n    <a mat-menu-item [routerLink]=\"['/teams']\" id=\"show\">Show Teams</a>\r\n    <a mat-menu-item [routerLink]=\"['/schedule']\" id=\"schedule\">Schedule</a>\r\n    <a mat-menu-item [routerLink]=\"['/standings']\" id=\"standings\">Standings</a>\r\n    <a mat-menu-item [routerLink]=\"['/playoffs']\" id=\"playoffs\" *ngIf=\"postseason\">Playoffs</a>\r\n    <a mat-menu-item id=\"topTeams\" (click)=\"getTopTeams()\">Top Teams</a>\r\n    <a mat-menu-item id=\"help\">Help</a>\r\n  </mat-menu>\r\n\r\n</mat-toolbar>\r\n\r\n<mat-progress-bar color=\"accent\" mode=\"determinate\" [value]=\"progress\"></mat-progress-bar>\r\n"

/***/ }),

/***/ "./src/app/nav/navbar.component.scss":
/*!*******************************************!*\
  !*** ./src/app/nav/navbar.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\n.menu {\n  background: url('/tryit/ngNFL/assets/images/grass.png');\n  top: 0;\n  margin: 0px;\n  padding: 0px;\n  z-index: 99;\n  text-shadow: 5px 5px 5px black;\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky; }\n.menu .menu-logo {\n    margin: 5px 20px; }\n.menu .menu-link {\n    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.menu .menu-link:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n.menu a {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 0.875em;\n    font-style: normal;\n    font-weight: normal;\n    color: white;\n    cursor: pointer;\n    padding: 14px 16px;\n    text-decoration: none; }\n.menu a:hover {\n      border-color: rgba(0, 128, 0, 0.5);\n      background-color: rgba(0, 128, 0, 0.5); }\n.menu .settings {\n    padding-right: 12px; }\n.menu button {\n    margin: 10px; }\n.menu button#Simulate {\n      width: 80px;\n      height: 32px;\n      line-height: 24px; }\n.menu button#Simulate.disabled {\n        background-color: rgba(0, 0, 0, 0.4);\n        color: rgba(200, 200, 200, 0.6); }\n.menu button.settings-mini-fab {\n      padding: 0px;\n      width: 30px;\n      height: 30px;\n      color: #eeeeee; }\n.menu button.settings-mini-fab mat-icon {\n        line-height: .7em;\n        font-size: 1.5em; }\n.menu .spin {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: -webkit-transform 0.7s;\n    transition: transform 0.7s;\n    transition: transform 0.7s, -webkit-transform 0.7s;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n    -webkit-transform-origin: 25px 25.5px 0;\n    transform-origin: 25px 25.5px 0; }\n@supports (-moz-appearance: none) {\n      .menu .spin {\n        -webkit-filter: blur(0);\n                filter: blur(0);\n        -webkit-transform-origin: 25px 26.5px 0;\n        transform-origin: 25px 26.5px 0; } }\n@supports (-ms-ime-align: auto) {\n      .menu .spin {\n        -webkit-filter: blur(0);\n                filter: blur(0);\n        -webkit-transform-origin: 25px 26.5px 0;\n        transform-origin: 25px 26.5px 0; } }\n.menu .spin:hover {\n      -webkit-transform: rotate(180deg);\n      transform: rotate(180deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcc2Nzc1xcX2NvbW1vbi5zY3NzIiwic3JjL2FwcC9uYXYvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxhcHBcXG5hdlxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsdURBQTJDO0VBRTNDLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQUUsV0FBQTtFQUMxQixnQkFBZ0IsRUFBQTtBQVRsQjtJQVlJLGdCQUFnQixFQUFBO0FBWnBCO0lBZ0JJLDREQUE0RCxFQUFBO0FBaEJoRTtNQW1CTSw2QkFBcUI7Y0FBckIscUJBQXFCLEVBQUE7QUFuQjNCO0lEdUNFLDJGQVg2RjtJQVk3RixrQkF2QmtCO0lBd0JsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lDakJqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBQTtBQTVCekI7TUErQk0sa0NEN0J5QjtNQzhCekIsc0NEOUJ5QixFQUFBO0FDRi9CO0lBcUNJLG1CQUFtQixFQUFBO0FBckN2QjtJQXlDSSxZQUFZLEVBQUE7QUF6Q2hCO01BNENNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCLEVBQUE7QUE5Q3ZCO1FBaURRLG9DQUFvQztRQUNwQywrQkFBK0IsRUFBQTtBQWxEdkM7TUF1RE0sWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1osY0RyRHdCLEVBQUE7QUNMOUI7UUE2RFEsaUJBQWlCO1FBQ2pCLGdCRHpDVSxFQUFBO0FDckJsQjtJRGdFRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBUTNCLGtDQ0oyQjtJREkzQiwwQkNKMkI7SURJM0Isa0RDSjJCO0lEUTNCLHVCQUFlO1lBQWYsZUFBZTtJQUVmLHVDQUgwRDtJQU8xRCwrQkFQMEQsRUFBQTtBQThDekI7TUN6SG5DO1FENEVFLHVCQUFlO2dCQUFmLGVBQWU7UUFFZix1Q0FIMEQ7UUFPMUQsK0JBUDBELEVBQUEsRUNOekQ7QUR3RDhCO01DN0hqQztRRDRFRSx1QkFBZTtnQkFBZixlQUFlO1FBRWYsdUNBSDBEO1FBTzFELCtCQVAwRCxFQUFBLEVDTnpEO0FBckVIO01Ec0ZFLGlDQUFrQztNQUlsQyx5QkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogQ29sb3IgZGVmaW5pdGlvbnMgICAgICogLy9cclxuXHJcbi8vICAgIE1haW4gY29sb3JcclxuJE5GTENvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcclxuJE5GTFRyYW5zOiByZ2JhKDAsIDEyOCwgMCwgMC4zKTtcclxuJE5GTExpbmtDb2xvcjogcmdiKDAsIDEyOCwgMCk7XHJcbiROZWFyV2hpdGU6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuJE5lYXJCbGFjazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kTGlnaHRHcmV5OiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgc2l6ZSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzaXplcywgdXNlZCBieSBpY29ucywgbGFiZWxzIGFuZCB0b29sYmFyc1xyXG4keHh4c0ZvbnRTaXplOiAwLjVlbTtcclxuJHh4c0ZvbnRTaXplOiAwLjYyNWVtO1xyXG4keHNGb250U2l6ZTogMC43NWVtOyAvLyAxMnB4XHJcbiRzbUZvbnRTaXplOiAwLjg3NWVtOyAvLyAxNHB4XHJcbiRtZWRGb250U2l6ZTogMWVtOyAvLyAxNnB4XHJcbiRsZ0ZvbnRTaXplOiAxLjEyNWVtOyAvLyAxOHB4XHJcbiR4bEZvbnRTaXplOiAxLjI1ZW07IC8vIDIxcHhcclxuJHh4Rm9udFNpemU6IDEuNWVtOyAvLyAyNnB4XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgZmFtaWx5IGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHN0eWxlc1xyXG4kc2Fuc1NlcmlmRm9udDE6IFJvYm90bywgQXJpYWwsIFwiQXZlbmlyIE5leHRcIiwgQ2FsaWJyaSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MjogXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQzOiBMYXRvLCBcIlNlZ29lIFVJXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzZXJpZkZvbnQxOiBCYXNrZXJ2aWxsZSwgR2VvcmdpYSwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBQYWxhdGlubywgc2VyaWY7XHJcbiRzZXJpZkZvbnQyOiBEaWRvdCwgXCJCb29rIEFudGlxdWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgdGV4dCBzdHlsZXMgICAgICAgKiAvL1xyXG5cclxuQG1peGluIG5vcm1hbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1peGluIGJvbGRJdGFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgbWF0IGljb24gYW5pbWF0aW9ucyAvL1xyXG5cclxuQG1peGluIHRyYW5zRHVyYXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC43MHMpIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNPcmlnaW4oJHhPcmlnOiBjZW50ZXIsICR5T3JpZzogY2VudGVyLCAkek9yaWc6IDApIHtcclxuICBmaWx0ZXI6IGJsdXIoMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1JvdGF0ZSgkZGVncmVlOiAxODBkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNTY2FsZSgkeFNjYWxlOiAxLjUsICR5U2NhbGU6IDEuNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNXaWdnbGUoJGR1cmF0aW9uOiAycywgJGNvdW50OiAxKSB7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgJGR1cmF0aW9uIGVhc2UgMHMgJGNvdW50O1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gc3BpblxyXG5AbWl4aW4gbWF0SWNvblNwaW4oJGR1cmF0aW9uLCAkZGVncmVlLCAkeE9yaWcsICR5T3JpZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gIC8vIEZpcmVmb3gvTW96aWxsYSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIC8vIEVkZ2UsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNSb3RhdGUoJGRlZ3JlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB6b29tXHJcbkBtaXhpbiBtYXRJY29uWm9vbSgkZHVyYXRpb24sICR4U2NhbGUsICR5U2NhbGUpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zU2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB3aWdnbGVcclxuQG1peGluIG1hdEljb25XaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpIHtcclxuICAvLyBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uICogJGNvdW50KTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3Njc3MvY29tbW9uJztcclxuXHJcbi5tZW51IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2dyYXNzLnBuZycpO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG5cclxuICAubWVudS1sb2dvIHtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudS1saW5rIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAaW5jbHVkZSBub3JtYWxUZXh0KCRzbUZvbnRTaXplKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkTkZMQ29sb3I7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRORkxDb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZXR0aW5ncyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAmI1NpbXVsYXRlIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC42KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuc2V0dGluZ3MtbWluaS1mYWIge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiAkTmVhcldoaXRlO1xyXG5cclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAuN2VtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHh4Rm9udFNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGluIHtcclxuICAgIEBpbmNsdWRlIG1hdEljb25TcGluKDAuN3MsIDE4MGRlZywgMjVweCwgMjUuNXB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/navbar.component.ts":
/*!*****************************************!*\
  !*** ./src/app/nav/navbar.component.ts ***!
  \*****************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _service_game_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/game.service */ "./src/app/service/game.service.ts");
/* harmony import */ var _dialog_top_teams_top_teams_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog/top-teams/top-teams-dialog.component */ "./src/app/dialog/top-teams/top-teams-dialog.component.ts");
/* harmony import */ var _dialog_simseason_simseason_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog/simseason/simseason-dialog.component */ "./src/app/dialog/simseason/simseason-dialog.component.ts");











var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, teamService, storageService, scheduleService, playoffService, gameService, dialog, snackBar) {
        this.router = router;
        this.teamService = teamService;
        this.storageService = storageService;
        this.scheduleService = scheduleService;
        this.playoffService = playoffService;
        this.gameService = gameService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.askSimSeason = false;
        this.simSeason = false;
        this.simFast = false;
        this.topTeamsTabIndex = 0;
        this.currentGame = 0;
        this.progress = 0;
        this.postseason = false;
        this.playoffTeams = [];
        this.calledInitPlayoffs = false;
        this.oneGameAtATime = true;
        this.gameActive = false;
        this.seasonOver = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.currentGame$.subscribe(function (data) {
            _this.currentGame = data;
            if (_this.currentGame > 0) {
                _this.askSimSeason = true;
            }
        });
        this.scheduleService.currentGameDay$.subscribe(function (data) { return _this.currentGameDay = data; });
        this.scheduleService.endOfSeason$.subscribe(function (data) { return _this.postseason = data; });
        this.gameService.gameActive$.subscribe(function (data) { return _this.gameActive = data; });
        this.scheduleService.finalGame$.subscribe(function (data) { return _this.finalGame = data; });
        this.progress = Math.round((this.currentGame / this.finalGame) * 1000) / 10;
    };
    NavBarComponent.prototype.initPlayoffs = function () {
        var _this = this;
        // console.log('[navbar] initPlayoffs()');
        if (this.postseason && !this.calledInitPlayoffs) {
            this.calledInitPlayoffs = true;
            if (this.playoffTeams.length === 0) {
                this.playoffService.getPlayoffTeams().subscribe(function (tData) {
                    _this.playoffTeams = tData;
                }, function (err) {
                    console.error('[navbar] initPlayoffs() getPlayoffTeams() error: ' + err);
                }, function () {
                    // console.log('[navbar] initPlayoffs() getPlayoffTeams() COMPLETE');
                    // console.log('[navbar] initPlayoffs() calling initPlayoffs()');
                    _this.playoffService.initPlayoffs();
                    _this.simFast = false;
                    _this.seasonOver = false;
                });
            }
        }
        if (!this.calledInitPlayoffs) {
            setTimeout(function () { _this.initPlayoffs(); }, 1005);
        }
    };
    NavBarComponent.prototype.getTopTeams = function () {
        this.openTopTeamsDialog();
    };
    NavBarComponent.prototype.simulate = function () {
        // console.log('[navbar] simulate() clicked!');
        if (!this.askSimSeason) {
            this.askSimSeason = true;
            if (this.currentGame === 0) {
                this.openSimSeasonDialog();
            }
        }
        else {
            if (!this.postseason) {
                if (this.scheduleService.playNextGame(this.simFast)) {
                    this.progress = Math.round((this.currentGame / this.finalGame) * 1000) / 10;
                    // Keep playing
                    if (this.progress === 100) {
                        console.log('[navbar] simulate() progress at 100, calling initPlayoffs()');
                        this.initPlayoffs();
                    }
                }
                else {
                    console.log('[navbar] simulate() season over, calling initPlayoffs()');
                    this.initPlayoffs();
                }
            }
            else {
                // console.log('[navbar] simulate() Play a playoff game!');
                if (this.playoffService.playPlayoffGame(this.simFast)) {
                    // Keep playing
                }
                else {
                    this.seasonOver = true;
                }
            }
        }
    };
    NavBarComponent.prototype.simActive = function () {
        return this.simSeason || (this.gameActive && !this.simSeason && this.oneGameAtATime);
    };
    NavBarComponent.prototype.playAllGames = function () {
        var _this = this;
        if (this.scheduleService.playNextGame(this.simFast)) {
            this.progress = Math.round((this.currentGame / this.finalGame) * 1000) / 10;
            // Keep playing
            var timeout = this.simFast ? 50 : 500;
            setTimeout(function () { _this.playAllGames(); }, timeout);
        }
        else {
            this.simSeason = false;
            console.log('[navbar] playAllGames() sim season complete, calling initPlayoffs()');
            this.initPlayoffs();
        }
    };
    NavBarComponent.prototype.resetSeason = function () {
        var _this = this;
        console.log('[navbar] resetSeason()');
        this.storageService.clearScheduleFromStorage().subscribe(function () {
            // Do nothing here; wait for complete
        }, function (err) {
            console.error('[navbar] resetSeason() clearScheduleFromStorage() error: ' + err);
        }, function () {
            console.log('[navbar] resetSeason() clearScheduleFromStorage() complete');
            _this.scheduleService.buildFullSchedule();
            _this.storageService.clearTeamsFromStorage().subscribe(function () {
                // Do nothing here; wait for complete
            }, function (err) {
                console.error('[navbar] resetSeason() clearTeamsFromStorage() error: ' + err);
            }, function () {
                console.log('[navbar] resetSeason() clearTeamsFromStorage() complete');
                _this.teamService.initTeams();
                _this.playoffService.resetPlayoffs();
                _this.askSimSeason = false;
                _this.simSeason = false;
                _this.simFast = false;
                _this.progress = 0;
                _this.postseason = false;
                _this.playoffTeams = [];
                _this.calledInitPlayoffs = false;
                _this.seasonOver = false;
                _this.openSnackBar('Season reset!', '');
                if (_this.router.url.includes('schedule') || _this.router.url.includes('teams') || _this.router.url.includes('playoffs')) {
                    _this.router.navigateByUrl('/teams');
                }
            });
        });
    };
    NavBarComponent.prototype.openTopTeamsDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_top_teams_top_teams_dialog_component__WEBPACK_IMPORTED_MODULE_9__["TopTeamsDialogComponent"], {
            data: { 'tabIndex': this.topTeamsTabIndex }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
            if (result) {
                _this.topTeamsTabIndex = result.tabIndex;
            }
        }, function (err) {
            console.error('[navbar] openTopTeamsDialog() afterClosed() error: ' + err);
        });
    };
    NavBarComponent.prototype.openSimSeasonDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_simseason_simseason_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SimseasonDialogComponent"], {
            data: { simFast: this.simFast },
            minWidth: '30vw',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.askSimSeason = true;
            _this.dialogReturn = result;
            if (result) {
                _this.simSeason = result.simSeason;
                _this.simFast = result.simFast;
                if (_this.simSeason) {
                    _this.playAllGames();
                }
                else {
                    _this.scheduleService.playNextGame(_this.simFast);
                }
            }
            else {
                _this.scheduleService.playNextGame(_this.simFast);
            }
        }, function (err) {
            console.error('[navbar] openSimSeasonDialog() afterClosed() error: ' + err);
        });
    };
    NavBarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/nav/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/nav/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _service_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _service_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ScheduleService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_7__["PlayoffService"],
            _service_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/playoffs/playoffs.component.html":
/*!**************************************************!*\
  !*** ./src/app/playoffs/playoffs.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!loading\">\r\n  <div class=\"playoffs\">\r\n    <div class=\"playoffs-text\">\r\n      Playoffs\r\n    </div>\r\n\r\n    <!-- <div style=\"margin: 12px;\">\r\n      <div *ngFor=\"let team of playoffTeams\">\r\n        {{ showTeam(team) }}\r\n      </div>\r\n    </div> -->\r\n\r\n    <mat-tab-group mat-stretch-tabs [(selectedIndex)]=\"tabIndex\" (selectedTabChange)=\"tabClicked($event)\">\r\n      <mat-tab label=\"Bracket\">\r\n        <mat-card>\r\n          <div class=\"bracket\" fxLayout.gt-md=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"space-between center\">\r\n            <div *ngIf=\"SuperBowlChamp\" class=\"overlay\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxHide.lt-lg>\r\n              <div class=\"super-bowl-trophy\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <img src=\"/assets/images/{{teamsArr[SuperBowlChamp]?.abbrev}}.png\" class=\"super-bowl-champ\">\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"column\">\r\n              <div class=\"playoff-text\" fxLayoutAlign=\"flex-start\">AFC Playoffs</div>\r\n              <div class=\"wrapper left\">\r\n                <div class=\"item\">\r\n                  <div class=\"item-parent\">\r\n                    <p><img src=\"/assets/images/{{ getAbbrev(20) }}.png\"></p>\r\n                  </div>\r\n                  <div class=\"item-childrens\">\r\n                    <div class=\"item-child\">\r\n                      <div class=\"item\">\r\n                        <div class=\"item-parent\">\r\n                          <p><img src=\"/assets/images/{{ getAbbrev(16) }}.png\"></p>\r\n                        </div>\r\n                        <div class=\"item-childrens\">\r\n                          <div class=\"item-child\">\r\n                            <div class=\"item\">\r\n                              <div class=\"item-parent\">\r\n                                <p><img src=\"/assets/images/{{ getAbbrev(8) }}.png\"></p>\r\n                              </div>\r\n                              <div class=\"item-childrens\">\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(0) }}.png\"></p>\r\n                                </div>\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(1) }}.png\"></p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"item-child\">\r\n                            <p><img src=\"/assets/images/{{ getAbbrev(9) }}.png\"></p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"item-child\">\r\n                      <div class=\"item\">\r\n                        <div class=\"item-parent\">\r\n                          <p><img src=\"/assets/images/{{ getAbbrev(18) }}.png\"></p>\r\n                        </div>\r\n                        <div class=\"item-childrens\">\r\n                          <div class=\"item-child\">\r\n                            <div class=\"item\">\r\n                              <div class=\"item-parent\">\r\n                                <p><img src=\"/assets/images/{{ getAbbrev(12) }}.png\"></p>\r\n                              </div>\r\n                              <div class=\"item-childrens\">\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(4) }}.png\"></p>\r\n                                </div>\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(5) }}.png\"></p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"item-child\">\r\n                            <p><img src=\"/assets/images/{{ getAbbrev(13) }}.png\"></p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"column\">\r\n              <div class=\"playoff-text\" fxLayoutAlign=\"flex-end\">NFC Playoffs</div>\r\n              <div class=\"wrapper right\">\r\n                <div class=\"item\">\r\n                  <div class=\"item-parent\">\r\n                    <p><img src=\"/assets/images/{{ getAbbrev(21) }}.png\"></p>\r\n                  </div>\r\n                  <div class=\"item-childrens\">\r\n                    <div class=\"item-child\">\r\n                      <div class=\"item\">\r\n                        <div class=\"item-parent\">\r\n                          <p><img src=\"/assets/images/{{ getAbbrev(17) }}.png\"></p>\r\n                        </div>\r\n                        <div class=\"item-childrens\">\r\n                          <div class=\"item-child\">\r\n                            <div class=\"item\">\r\n                              <div class=\"item-parent\">\r\n                                <p><img src=\"/assets/images/{{ getAbbrev(10) }}.png\"></p>\r\n                              </div>\r\n                              <div class=\"item-childrens\">\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(2) }}.png\"></p>\r\n                                </div>\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(3) }}.png\"></p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"item-child\">\r\n                            <p><img src=\"/assets/images/{{ getAbbrev(11) }}.png\"></p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"item-child\">\r\n                      <div class=\"item\">\r\n                        <div class=\"item-parent\">\r\n                          <p><img src=\"/assets/images/{{ getAbbrev(19) }}.png\"></p>\r\n                        </div>\r\n                        <div class=\"item-childrens\">\r\n                          <div class=\"item-child\">\r\n                            <div class=\"item\">\r\n                              <div class=\"item-parent\">\r\n                                <p><img src=\"/assets/images/{{ getAbbrev(14) }}.png\"></p>\r\n                              </div>\r\n                              <div class=\"item-childrens\">\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(6) }}.png\"></p>\r\n                                </div>\r\n                                <div class=\"item-child\">\r\n                                  <p><img src=\"/assets/images/{{ getAbbrev(7) }}.png\"></p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"item-child\">\r\n                            <p><img src=\"/assets/images/{{ getAbbrev(15) }}.png\"></p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </mat-tab>\r\n      <mat-tab label=\"Schedule\">\r\n        <mat-card>\r\n          <div class=\"schedule\" *ngFor=\"let day of GameDay\">\r\n            <ng-container *ngIf=\"getGamesForDay(day).length\">\r\n              <div class=\"gameday-text\">\r\n                {{day}}\r\n              </div>\r\n              <div fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\"\r\n                [@listAnimations]=\"{ value: getGamesForDay(day).length, params: { stagger: '100ms' } }\">\r\n                <div fxFlex.gt-xs=\"50%\" fxFlex.gt-md=\"25%\" *ngFor=\"let score of getGamesForDay(day)\"\r\n                  (click)=\"getMatchup(score.id)\">\r\n                  <mat-card class=\"gameday\" matRipple appMaterialElevation>\r\n                    <show-score [score]=score></show-score>\r\n                  </mat-card>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </mat-card>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card class=\"loading-well\" *ngIf=\"loading\">\r\n    <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n    <div class=\"loading-font\">&nbsp; Loading Playoffs &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/playoffs/playoffs.component.scss":
/*!**************************************************!*\
  !*** ./src/app/playoffs/playoffs.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\n.playoffs .playoffs-text {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1.125em;\n  font-style: italic;\n  font-weight: bold;\n  margin-top: 5px; }\n.playoffs img {\n  border: 0px; }\n.playoffs mat-tab-group {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  padding: 5px; }\n.playoffs mat-tab-group .schedule .gameday-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: bold;\n    margin: 6px; }\n.playoffs mat-tab-group .schedule .gameday {\n    background-color: #dddddd;\n    cursor: pointer;\n    margin: 6px;\n    transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n.playoffs mat-tab-group .schedule .gameday:hover {\n      border-color: rgba(0, 0, 0, 0.8);\n      background-color: #eeeeee; }\n.playoffs mat-tab-group .bracket .overlay {\n    width: 100%;\n    height: 50%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.playoffs mat-tab-group .bracket .overlay .super-bowl-trophy {\n      width: 172px;\n      height: 200px;\n      background-image: url('/tryit/ngNFL/assets/images/SuperBowl.png'); }\n.playoffs mat-tab-group .bracket .overlay .super-bowl-trophy .super-bowl-champ {\n        margin-top: 50px; }\n.playoffs mat-tab-group .bracket .playoff-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: bold;\n    margin: 6px; }\n.playoffs mat-tab-group .bracket .wrapper {\n    display: flex;\n    height: 522px;\n    justify-content: center; }\n.playoffs mat-tab-group .bracket .wrapper.left .item {\n      display: flex;\n      flex-direction: row-reverse; }\n.playoffs mat-tab-group .bracket .wrapper.left .item p {\n        padding: 0px;\n        margin: 0;\n        height: 55px;\n        width: 82px; }\n.playoffs mat-tab-group .bracket .wrapper.left .item-parent {\n        position: relative;\n        margin-left: 40px;\n        display: flex;\n        align-items: center; }\n.playoffs mat-tab-group .bracket .wrapper.left .item-parent:after {\n          position: absolute;\n          content: '';\n          width: 20px;\n          height: 2px;\n          left: 0;\n          top: 50%;\n          background-color: rgba(0, 128, 0, 0.5);\n          -webkit-transform: translateX(-100%);\n                  transform: translateX(-100%); }\n.playoffs mat-tab-group .bracket .wrapper.left .item-childrens {\n        display: flex;\n        flex-direction: column;\n        justify-content: center; }\n.playoffs mat-tab-group .bracket .wrapper.left .item-child {\n        display: flex;\n        align-items: flex-start;\n        justify-content: flex-end;\n        margin-top: 10px;\n        margin-bottom: 10px;\n        position: relative; }\n.playoffs mat-tab-group .bracket .wrapper.left .item-child:before {\n          content: '';\n          position: absolute;\n          background-color: rgba(0, 128, 0, 0.5);\n          right: 0;\n          top: 50%;\n          -webkit-transform: translateX(100%);\n                  transform: translateX(100%);\n          width: 20px;\n          height: 2px; }\n.playoffs mat-tab-group .bracket .wrapper.left .item-child:after {\n          content: '';\n          position: absolute;\n          background-color: rgba(0, 128, 0, 0.5);\n          right: -20px;\n          height: calc(50% + 22px);\n          width: 2px;\n          top: 50%; }\n.playoffs mat-tab-group .bracket .wrapper.left .item-child:last-child:after {\n          -webkit-transform: translateY(-100%);\n                  transform: translateY(-100%); }\n.playoffs mat-tab-group .bracket .wrapper.left .item-child:only-child:after {\n          display: none; }\n.playoffs mat-tab-group .bracket .wrapper.right .item {\n      display: flex;\n      flex-direction: row; }\n.playoffs mat-tab-group .bracket .wrapper.right .item p {\n        padding: 0px;\n        margin: 0;\n        height: 55px;\n        width: 82px; }\n.playoffs mat-tab-group .bracket .wrapper.right .item-parent {\n        position: relative;\n        margin-right: 40px;\n        display: flex;\n        align-items: center; }\n.playoffs mat-tab-group .bracket .wrapper.right .item-parent:after {\n          position: absolute;\n          content: '';\n          width: 20px;\n          height: 2px;\n          right: 0;\n          top: 50%;\n          background-color: rgba(0, 128, 0, 0.5);\n          -webkit-transform: translateX(100%);\n                  transform: translateX(100%); }\n.playoffs mat-tab-group .bracket .wrapper.right .item-childrens {\n        display: flex;\n        flex-direction: column;\n        justify-content: center; }\n.playoffs mat-tab-group .bracket .wrapper.right .item-child {\n        display: flex;\n        align-items: flex-start;\n        justify-content: flex-start;\n        margin-top: 10px;\n        margin-bottom: 10px;\n        position: relative; }\n.playoffs mat-tab-group .bracket .wrapper.right .item-child:before {\n          content: '';\n          position: absolute;\n          background-color: rgba(0, 128, 0, 0.5);\n          left: 0;\n          top: 50%;\n          -webkit-transform: translateX(-100%);\n                  transform: translateX(-100%);\n          width: 20px;\n          height: 2px; }\n.playoffs mat-tab-group .bracket .wrapper.right .item-child:after {\n          content: '';\n          position: absolute;\n          background-color: rgba(0, 128, 0, 0.5);\n          left: -20px;\n          height: calc(50% + 22px);\n          width: 2px;\n          top: 50%; }\n.playoffs mat-tab-group .bracket .wrapper.right .item-child:last-child:after {\n          -webkit-transform: translateY(-100%);\n                  transform: translateY(-100%); }\n.playoffs mat-tab-group .bracket .wrapper.right .item-child:only-child:after {\n          display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheW9mZnMvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3BsYXlvZmZzL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFxwbGF5b2Zmc1xccGxheW9mZnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFZQSw4QkFBQTtBQWNBLDhCQUFBO0FBV0EsbUNBQUE7QUF5QkEsbUNBQUE7QUM1REE7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RURnREUsMkZBekI2RjtFQTBCN0Ysa0JBbkNrQjtFQW9DbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQ2hEZixlQUFlLEVBQUE7QUFIbkI7RUFPSSxXQUFXLEVBQUE7QUFQZjtFQVdJLHlCRFgwQjtFQ1kxQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBYmhCO0lEZ0RFLDJGQXpCNkY7SUEwQjdGLGNBcENlO0lBcUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUNqQ1gsV0FBVyxFQUFBO0FBbEJuQjtJQXNCUSx5QkRwQnNCO0lDcUJ0QixlQUFlO0lBQ2YsV0FBVztJQUNYLCtEQUEwRCxFQUFBO0FBekJsRTtNQTRCVSxnQ0QzQm9CO01DNEJwQix5QkQ3Qm9CLEVBQUE7QUNBOUI7SUF3Q1EsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU8sRUFBQTtBQTVDZjtNQStDVSxZQUFZO01BQ1osYUFBYTtNQUNiLGlFQUFxRCxFQUFBO0FBakQvRDtRQW1EWSxnQkFBZ0IsRUFBQTtBQW5ENUI7SURnREUsMkZBekI2RjtJQTBCN0YsY0FwQ2U7SUFxQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQ09YLFdBQVcsRUFBQTtBQTFEbkI7SUE4RFEsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtBQWhFL0I7TUFvRVksYUFBYTtNQUNiLDJCQUEyQixFQUFBO0FBckV2QztRQXVFYyxZQUFZO1FBQ1osU0FBUztRQUNULFlBQVk7UUFDWixXQUFXLEVBQUE7QUExRXpCO1FBK0VjLGtCQUFrQjtRQUNsQixpQkE3Q1U7UUE4Q1YsYUFBYTtRQUNiLG1CQUFtQixFQUFBO0FBbEZqQztVQW9Ga0Isa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxXQUFxQjtVQUNyQixXQUFXO1VBQ1gsT0FBTztVQUNQLFFBQVE7VUFDUixzQ0Q3RmE7VUM4RmIsb0NBQTRCO2tCQUE1Qiw0QkFBNEIsRUFBQTtBQTNGOUM7UUErRmMsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUIsRUFBQTtBQWpHckM7UUFvR2MsYUFBYTtRQUNiLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsZ0JBbkVjO1FBb0VkLG1CQXBFYztRQXFFZCxrQkFBa0IsRUFBQTtBQXpHaEM7VUEyR2dCLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsc0NEaEhlO1VDaUhmLFFBQVE7VUFDUixRQUFRO1VBQ1IsbUNBQTJCO2tCQUEzQiwyQkFBMkI7VUFDM0IsV0FBdUI7VUFDdkIsV0FBVyxFQUFBO0FBbEgzQjtVQXFIZ0IsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixzQ0QxSGU7VUMySGYsWUFBd0I7VUFDeEIsd0JBQXdCO1VBQ3hCLFVBQVU7VUFDVixRQUFRLEVBQUE7QUEzSHhCO1VBK0hrQixvQ0FBNEI7a0JBQTVCLDRCQUE0QixFQUFBO0FBL0g5QztVQW1JZ0IsYUFBYSxFQUFBO0FBbkk3QjtNQTBJWSxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7QUEzSS9CO1FBNkljLFlBQVk7UUFDWixTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVcsRUFBQTtBQWhKekI7UUFxSmMsa0JBQWtCO1FBQ2xCLGtCQW5IVTtRQW9IVixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7QUF4SmpDO1VBMEprQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFdBQXFCO1VBQ3JCLFdBQVc7VUFDWCxRQUFRO1VBQ1IsUUFBUTtVQUNSLHNDRG5LYTtVQ29LYixtQ0FBMkI7a0JBQTNCLDJCQUEyQixFQUFBO0FBaks3QztRQXFLYyxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QixFQUFBO0FBdktyQztRQTBLYyxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQixnQkF6SWM7UUEwSWQsbUJBMUljO1FBMklkLGtCQUFrQixFQUFBO0FBL0toQztVQWlMZ0IsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixzQ0R0TGU7VUN1TGYsT0FBTztVQUNQLFFBQVE7VUFDUixvQ0FBNEI7a0JBQTVCLDRCQUE0QjtVQUM1QixXQUF1QjtVQUN2QixXQUFXLEVBQUE7QUF4TDNCO1VBMkxnQixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLHNDRGhNZTtVQ2lNZixXQUF1QjtVQUN2Qix3QkFBd0I7VUFDeEIsVUFBVTtVQUNWLFFBQVEsRUFBQTtBQWpNeEI7VUFxTWtCLG9DQUE0QjtrQkFBNUIsNEJBQTRCLEVBQUE7QUFyTTlDO1VBeU1nQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5b2Zmcy9wbGF5b2Zmcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5wbGF5b2ZmcyB7XHJcbiAgLnBsYXlvZmZzLXRleHQge1xyXG4gICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICB9XHJcblxyXG4gIG1hdC10YWItZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAuc2NoZWR1bGUge1xyXG4gICAgICAuZ2FtZWRheS10ZXh0IHtcclxuICAgICAgICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJG1lZEZvbnRTaXplKTtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdhbWVkYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodEdyZXk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkTmVhckJsYWNrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnJhY2tldCB7XHJcbiAgICAgICRzaWRlLW1hcmdpbjogNDBweDtcclxuICAgICAgJHZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgJGxpbmUtY29sb3I6ICRORkxDb2xvcjtcclxuXHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIC5zdXBlci1ib3dsLXRyb3BoeSB7XHJcbiAgICAgICAgICB3aWR0aDogMTcycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9TdXBlckJvd2wucG5nJyk7XHJcbiAgICAgICAgICAuc3VwZXItYm93bC1jaGFtcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucGxheW9mZi10ZXh0IHtcclxuICAgICAgICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJG1lZEZvbnRTaXplKTtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MjJweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi5sZWZ0IHtcclxuICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODJweDtcclxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluZS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi1wYXJlbnQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHNpZGUtbWFyZ2luO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICRzaWRlLW1hcmdpbi8yO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWNoaWxkcmVucyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkdmVydGljYWwtbWFyZ2luO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR2ZXJ0aWNhbC1tYXJnaW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRzaWRlLW1hcmdpbiAvIDI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0kc2lkZS1tYXJnaW4gLyAyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDUwJSArIDIycHgpIDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOm9ubHktY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MnB4O1xyXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRsaW5lLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLXBhcmVudCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJHNpZGUtbWFyZ2luO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICRzaWRlLW1hcmdpbi8yO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWNoaWxkcmVucyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR2ZXJ0aWNhbC1tYXJnaW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHZlcnRpY2FsLW1hcmdpbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJHNpZGUtbWFyZ2luIC8gMjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtJHNpZGUtbWFyZ2luIC8gMjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1MCUgKyAyMnB4KSA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjpvbmx5LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/playoffs/playoffs.component.ts":
/*!************************************************!*\
  !*** ./src/app/playoffs/playoffs.component.ts ***!
  \************************************************/
/*! exports provided: PlayoffsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayoffsComponent", function() { return PlayoffsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/matchup/matchup-dialog.component */ "./src/app/dialog/matchup/matchup-dialog.component.ts");
/* harmony import */ var _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/results/results-dialog.component */ "./src/app/dialog/results/results-dialog.component.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");








var PlayoffsComponent = /** @class */ (function () {
    function PlayoffsComponent(teamService, playoffService, dialog) {
        this.teamService = teamService;
        this.playoffService = playoffService;
        this.dialog = dialog;
        this.divisions = [];
        this.teamsArr = [];
        this.playoffTeams = [];
        this.loading = true;
        this.currentPlayoffGame = 0;
        this.GameDay = [];
        this.PlayoffBracket = new Array(22);
    }
    PlayoffsComponent.prototype.ngOnInit = function () {
        // console.log('[playoffs] ngOnInit()');
        // Reset season needs to also reset playoffs!
        // this.teamsArr = this.teamService.getTeams().map(teams => teams);
        var _this = this;
        this.tabIndex = this.playoffService.playoffTabIndex;
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            // console.log('[playoffs] ngOnInit() getTeams() SUCCESS');
            _this.playoffService.getPlayoffTeams().subscribe(function (tData) {
                _this.playoffTeams = tData;
            }, function (err) {
                console.error('[playoffs] ngOnInit() getPlayoffTeams() error: ' + err);
            }, function () {
                // console.log('[playoffs] ngOnInit() getPlayoffTeams() COMPLETE');
                _this.playoffService.initPlayoffs();
                _this.playoffGames = _this.playoffService.PLAYOFF_SCHEDULE;
                _this.loading = false;
                // window.scrollTo(0, 0);
            });
        }, function (err) {
            console.error('[playoffs] ngOnInit() getTeams() error: ' + err);
        });
        this.playoffService.currentPlayoffGame$.subscribe(function (data) { return _this.currentPlayoffGame = data; });
        this.playoffService.currentPlayoffGameDay$.subscribe(function (data) { return _this.currentPlayoffGameDay = data; });
        // this.GameDay = [...Array.from(new Set(this.playoffGames.map(s => s.gameday)))];
        this.playoffService.GameDay$.subscribe(function (data) { return _this.GameDay = data; });
        this.playoffService.PlayoffBracket$.subscribe(function (data) { return _this.PlayoffBracket = data; });
        this.playoffService.SuperBowlChamp$.subscribe(function (data) { return _this.SuperBowlChamp = data; });
    };
    PlayoffsComponent.prototype.tabClicked = function (event) {
        this.tabIndex = event.index;
        this.playoffService.setPlayoffTabIndex(this.tabIndex);
    };
    PlayoffsComponent.prototype.getAbbrev = function (idx) {
        var abbrev = 'blank';
        // console.log('[playoffs] getAbbrev() idx: ' + idx + ', playoffbracket: ' + this.PlayoffBracket[idx]);
        if (this.PlayoffBracket[idx] > -1) {
            abbrev = this.teamsArr[this.PlayoffBracket[idx]].abbrev;
        }
        return abbrev;
    };
    // getAbbrev(id: number, hv: string) {
    //   let abbrev = 'blank';
    //   if (this.playoffGames[id]) {
    //     if (hv === 'v') {
    //       abbrev = this.teamsArr[this.playoffGames[id].visitTeam].abbrev;
    //     } else {
    //       abbrev = this.teamsArr[this.playoffGames[id].homeTeam].abbrev;
    //     }
    //   }
    //   return abbrev;
    // }
    PlayoffsComponent.prototype.showTeam = function (teamId) {
        var team = this.teamService.getTeamByIndex(teamId);
        return team.city + ' ' + team.name;
    };
    PlayoffsComponent.prototype.getGamesForDay = function (day) {
        return this.playoffService.getGamesForDay(day);
    };
    PlayoffsComponent.prototype.openResultsDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ResultsDialogComponent"], {
            data: { id: id, playoffs: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[playoffs] openResultsDialog() afterClosed() error: ' + err);
        });
    };
    PlayoffsComponent.prototype.openMatchupDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MatchupDialogComponent"], {
            data: { id: id, playoffs: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[playoffs] openMatchupDialog() afterClosed() error: ' + err);
        });
    };
    PlayoffsComponent.prototype.getMatchup = function (id) {
        // console.log('[playoffs] getMatchup: ' + id);
        var _this = this;
        this.playoffService.getGameResults(id).subscribe(function (results) {
            if (results.length) {
                _this.openResultsDialog(id);
            }
            else {
                _this.openMatchupDialog(id);
            }
        });
    };
    PlayoffsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'playoffs',
            template: __webpack_require__(/*! ./playoffs.component.html */ "./src/app/playoffs/playoffs.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_7__["listAnimation"]],
            styles: [__webpack_require__(/*! ./playoffs.component.scss */ "./src/app/playoffs/playoffs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_4__["PlayoffService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], PlayoffsComponent);
    return PlayoffsComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule-calendar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/schedule/schedule-calendar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"schedule\">\r\n    <div class=\"schedule-text\">\r\n      Schedule\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\">\r\n      <div fxFlex.gt-xs=\"50%\" fxFlex.gt-md=\"25%\" *ngFor=\"let schedDate of NFLCalendarArr\">\r\n        <div class=\"schedule-body\">\r\n          <schedule-month [month]=\"schedDate.month\" [year]=\"schedDate.year\"></schedule-month>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule-calendar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/schedule/schedule-calendar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\n.schedule .schedule-text {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1.125em;\n  font-style: italic;\n  font-weight: bold;\n  margin-top: 5px; }\n.schedule .schedule-body {\n  margin: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3NjaGVkdWxlL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFxzY2hlZHVsZVxcc2NoZWR1bGUtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFZQSw4QkFBQTtBQWNBLDhCQUFBO0FBV0EsbUNBQUE7QUF5QkEsbUNBQUE7QUM1REE7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RURnREUsMkZBekI2RjtFQTBCN0Ysa0JBbkNrQjtFQW9DbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQ2hEZixlQUFlLEVBQUE7QUFIbkI7RUFPSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZSB7XHJcbiAgLnNjaGVkdWxlLXRleHQge1xyXG4gICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZS1ib2R5IHtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/schedule/schedule-calendar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/schedule/schedule-calendar.component.ts ***!
  \*********************************************************/
/*! exports provided: ScheduleCalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleCalenderComponent", function() { return ScheduleCalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/schedule.day.service */ "./src/app/service/schedule.day.service.ts");




var ScheduleCalenderComponent = /** @class */ (function () {
    function ScheduleCalenderComponent(scheduleService, scheduleDayService) {
        this.scheduleService = scheduleService;
        this.scheduleDayService = scheduleDayService;
        this.NFLCalendarArr = [];
        this.gamesArr = [];
        this.scheduleYear = 2019;
    }
    ScheduleCalenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('[schedule-calendar] ngOnInit() scheduleYear: ' + this.scheduleYear);
        this.NFLCalendarArr = [
            { month: 9, year: this.scheduleYear },
            { month: 10, year: this.scheduleYear },
            { month: 11, year: this.scheduleYear },
            { month: 12, year: this.scheduleYear }
        ];
        this.scheduleService.currentGameDay$.subscribe(function (data) { return _this.gameDay = data; });
    };
    ScheduleCalenderComponent.prototype.ngAfterContentInit = function () {
        // console.log('[schedule-calendar] ngAfterContentInit()');
        this.getGamesForDay(this.gameDay);
    };
    ScheduleCalenderComponent.prototype.getGamesForDay = function (gameDay) {
        // console.log('[schedule-calendar] getGamesForDay() gameDay: ' + gameDay);
        this.gamesArr = this.scheduleService.getGamesForDay(gameDay);
        if (this.gamesArr.length > 0) {
            // console.log('[schedule-calendar] getGamesForDay() calling setScheduleDay()');
            this.scheduleDayService.setScheduleDay(gameDay, this.gamesArr);
        }
    };
    ScheduleCalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedule-calendar',
            template: __webpack_require__(/*! ./schedule-calendar.component.html */ "./src/app/schedule/schedule-calendar.component.html"),
            styles: [__webpack_require__(/*! ./schedule-calendar.component.scss */ "./src/app/schedule/schedule-calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"],
            _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleDayService"]])
    ], ScheduleCalenderComponent);
    return ScheduleCalenderComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule-day.component.html":
/*!******************************************************!*\
  !*** ./src/app/schedule/schedule-day.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!loading\">\r\n  <div class=\"schedule\">\r\n    <div class=\"gameday-text\">\r\n      {{gameDay}}\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\"\r\n      [@listAnimations]=\"{ value: gamesArr.length, params: { stagger: '100ms' } }\">\r\n      <div fxFlex.gt-xs=\"50%\" fxFlex.gt-md=\"25%\" *ngFor=\"let score of gamesArr\"\r\n        (click)=\"getMatchup(score.id)\">\r\n        <mat-card class=\"gameday\" matRipple appMaterialElevation>\r\n          <show-score [score]=score></show-score>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card class=\"loading-well\" *ngIf=\"loading\">\r\n  <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n  <div class=\"loading-font\">&nbsp; Loading Team List &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule-day.component.scss":
/*!******************************************************!*\
  !*** ./src/app/schedule/schedule-day.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\n.schedule .gameday-text {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1.125em;\n  font-style: italic;\n  font-weight: bold;\n  margin-top: 5px; }\n.schedule .gameday {\n  background-color: #dddddd;\n  cursor: pointer;\n  margin: 6px;\n  transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n.schedule .gameday:hover {\n    border-color: rgba(0, 0, 0, 0.8);\n    background-color: #eeeeee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3NjaGVkdWxlL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFxzY2hlZHVsZVxcc2NoZWR1bGUtZGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdkO0VEZ0RFLDJGQXpCNkY7RUEwQjdGLGtCQW5Da0I7RUFvQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUNoRGYsZUFBZSxFQUFBO0FBSG5CO0VBT0kseUJETDBCO0VDTTFCLGVBQWU7RUFDZixXQUFXO0VBQ1gsK0RBQTBELEVBQUE7QUFWOUQ7SUFhTSxnQ0Rad0I7SUNheEIseUJEZHdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS1kYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogQ29sb3IgZGVmaW5pdGlvbnMgICAgICogLy9cclxuXHJcbi8vICAgIE1haW4gY29sb3JcclxuJE5GTENvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcclxuJE5GTFRyYW5zOiByZ2JhKDAsIDEyOCwgMCwgMC4zKTtcclxuJE5GTExpbmtDb2xvcjogcmdiKDAsIDEyOCwgMCk7XHJcbiROZWFyV2hpdGU6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuJE5lYXJCbGFjazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kTGlnaHRHcmV5OiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgc2l6ZSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzaXplcywgdXNlZCBieSBpY29ucywgbGFiZWxzIGFuZCB0b29sYmFyc1xyXG4keHh4c0ZvbnRTaXplOiAwLjVlbTtcclxuJHh4c0ZvbnRTaXplOiAwLjYyNWVtO1xyXG4keHNGb250U2l6ZTogMC43NWVtOyAvLyAxMnB4XHJcbiRzbUZvbnRTaXplOiAwLjg3NWVtOyAvLyAxNHB4XHJcbiRtZWRGb250U2l6ZTogMWVtOyAvLyAxNnB4XHJcbiRsZ0ZvbnRTaXplOiAxLjEyNWVtOyAvLyAxOHB4XHJcbiR4bEZvbnRTaXplOiAxLjI1ZW07IC8vIDIxcHhcclxuJHh4Rm9udFNpemU6IDEuNWVtOyAvLyAyNnB4XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgZmFtaWx5IGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHN0eWxlc1xyXG4kc2Fuc1NlcmlmRm9udDE6IFJvYm90bywgQXJpYWwsIFwiQXZlbmlyIE5leHRcIiwgQ2FsaWJyaSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MjogXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQzOiBMYXRvLCBcIlNlZ29lIFVJXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzZXJpZkZvbnQxOiBCYXNrZXJ2aWxsZSwgR2VvcmdpYSwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBQYWxhdGlubywgc2VyaWY7XHJcbiRzZXJpZkZvbnQyOiBEaWRvdCwgXCJCb29rIEFudGlxdWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgdGV4dCBzdHlsZXMgICAgICAgKiAvL1xyXG5cclxuQG1peGluIG5vcm1hbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1peGluIGJvbGRJdGFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgbWF0IGljb24gYW5pbWF0aW9ucyAvL1xyXG5cclxuQG1peGluIHRyYW5zRHVyYXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC43MHMpIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNPcmlnaW4oJHhPcmlnOiBjZW50ZXIsICR5T3JpZzogY2VudGVyLCAkek9yaWc6IDApIHtcclxuICBmaWx0ZXI6IGJsdXIoMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1JvdGF0ZSgkZGVncmVlOiAxODBkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNTY2FsZSgkeFNjYWxlOiAxLjUsICR5U2NhbGU6IDEuNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNXaWdnbGUoJGR1cmF0aW9uOiAycywgJGNvdW50OiAxKSB7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgJGR1cmF0aW9uIGVhc2UgMHMgJGNvdW50O1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gc3BpblxyXG5AbWl4aW4gbWF0SWNvblNwaW4oJGR1cmF0aW9uLCAkZGVncmVlLCAkeE9yaWcsICR5T3JpZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gIC8vIEZpcmVmb3gvTW96aWxsYSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIC8vIEVkZ2UsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNSb3RhdGUoJGRlZ3JlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB6b29tXHJcbkBtaXhpbiBtYXRJY29uWm9vbSgkZHVyYXRpb24sICR4U2NhbGUsICR5U2NhbGUpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zU2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB3aWdnbGVcclxuQG1peGluIG1hdEljb25XaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpIHtcclxuICAvLyBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uICogJGNvdW50KTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3Njc3MvY29tbW9uJztcclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUge1xyXG4gIC5nYW1lZGF5LXRleHQge1xyXG4gICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5nYW1lZGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodEdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJE5lYXJCbGFjaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/schedule/schedule-day.component.ts":
/*!****************************************************!*\
  !*** ./src/app/schedule/schedule-day.component.ts ***!
  \****************************************************/
/*! exports provided: ScheduleDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDayComponent", function() { return ScheduleDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/schedule.day.service */ "./src/app/service/schedule.day.service.ts");
/* harmony import */ var _dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/matchup/matchup-dialog.component */ "./src/app/dialog/matchup/matchup-dialog.component.ts");
/* harmony import */ var _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/results/results-dialog.component */ "./src/app/dialog/results/results-dialog.component.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");








var ScheduleDayComponent = /** @class */ (function () {
    function ScheduleDayComponent(scheduleService, scheduleDayService, dialog) {
        this.scheduleService = scheduleService;
        this.scheduleDayService = scheduleDayService;
        this.dialog = dialog;
        this.gamesArr = [];
        this.loading = true;
    }
    ScheduleDayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleDayService.scheduleDay$.subscribe(function (data) {
            // console.log('[schedule-day] scheduleDay received: ' + data);
            _this.gameDay = data;
        }, function (err) {
            console.error('[schedule-day] ngOnInit() scheduleDay error: ' + err);
        });
        this.scheduleDayService.scheduleGames$.subscribe(function (data) {
            // console.log('[schedule-day] scheduleGames received: ' + data);
            _this.gamesArr = data;
        }, function (err) {
            console.error('[schedule-day] ngOnInit() scheduleGames error: ' + err);
        });
        this.loading = false;
    };
    ScheduleDayComponent.prototype.openResultsDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ResultsDialogComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[schedule-day] openResultsDialog() afterClosed() error: ' + err);
        });
    };
    ScheduleDayComponent.prototype.openMatchupDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MatchupDialogComponent"], {
            data: { id: id, playoffs: false }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[schedule-day] openMatchupDialog() afterClosed() error: ' + err);
        });
    };
    ScheduleDayComponent.prototype.getMatchup = function (id) {
        // console.log('[schedule-day] getMatchup: ' + id);
        var _this = this;
        this.scheduleService.getGameResults(id).subscribe(function (results) {
            if (results.length) {
                _this.openResultsDialog(id);
            }
            else {
                _this.openMatchupDialog(id);
            }
        });
    };
    ScheduleDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedule-day',
            template: __webpack_require__(/*! ./schedule-day.component.html */ "./src/app/schedule/schedule-day.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_7__["listAnimation"]],
            styles: [__webpack_require__(/*! ./schedule-day.component.scss */ "./src/app/schedule/schedule-day.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"],
            _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleDayService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ScheduleDayComponent);
    return ScheduleDayComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule-month.component.html":
/*!********************************************************!*\
  !*** ./src/app/schedule/schedule-month.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"month\">\r\n  {{monthName}}\r\n  <table class=\"month-table\" width=\"100%\">\r\n    <tr *ngFor=\"let week of monthArr\">\r\n      <td *ngFor=\"let day of week\">\r\n        <a *ngIf=\"hasGamesForDay(month, year, day); else noLink\" (click)=\"getGamesForDay(month, year, day)\">{{day}}</a>\r\n        <ng-template #noLink><div class=\"no-link\">{{day}}</div></ng-template>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule-month.component.scss":
/*!********************************************************!*\
  !*** ./src/app/schedule/schedule-month.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\n.month {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n  text-align: center;\n  background: rgba(0, 128, 0, 0.5);\n  height: 134px;\n  border-radius: 5px;\n  padding: 12px; }\n.month .month-table {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 0.75em;\n    font-style: italic;\n    font-weight: bold;\n    background: url('/tryit/ngNFL/assets/images/whiteback.jpg');\n    height: 116px;\n    border-radius: 5px; }\n.month .month-table a {\n      color: green;\n      cursor: pointer; }\n.month .month-table a:hover {\n        border-color: rgba(0, 128, 0, 0.5);\n        background-color: rgba(0, 128, 0, 0.3); }\n.month .month-table .no-link {\n      color: rgba(0, 128, 0, 0.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3NjaGVkdWxlL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFxzY2hlZHVsZVxcc2NoZWR1bGUtbW9udGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFZQSw4QkFBQTtBQWNBLDhCQUFBO0FBV0EsbUNBQUE7QUF5QkEsbUNBQUE7QUM1REE7RURxREUsMkZBekI2RjtFQTBCN0YsY0FwQ2U7RUFxQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQ3REakIsa0JBQWtCO0VBQ2xCLGdDREQ2QjtFQ0U3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtBQU5mO0lEcURFLDJGQXpCNkY7SUEwQjdGLGlCQXRDaUI7SUF1Q2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUM3Q2YsMkRBQTZDO0lBQzdDLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtBQWJ0QjtNQWdCTSxZRFp1QjtNQ2F2QixlQUFlLEVBQUE7QUFqQnJCO1FBb0JRLGtDRGxCdUI7UUNtQnZCLHNDRGxCdUIsRUFBQTtBQ0gvQjtNQXlCTSwyQkR0QnlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS1tb250aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxuLm1vbnRoIHtcclxuICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJG1lZEZvbnRTaXplKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJE5GTENvbG9yO1xyXG4gIGhlaWdodDogMTM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcblxyXG4gIC5tb250aC10YWJsZSB7XHJcbiAgICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJHhzRm9udFNpemUpO1xyXG4gICAgLy8gY29sb3I6ICM2NjY7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvd2hpdGViYWNrLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDExNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJE5GTExpbmtDb2xvcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkTkZMQ29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5GTFRyYW5zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tbGluayB7XHJcbiAgICAgIGNvbG9yOiAkTkZMVHJhbnM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/schedule/schedule-month.component.ts":
/*!******************************************************!*\
  !*** ./src/app/schedule/schedule-month.component.ts ***!
  \******************************************************/
/*! exports provided: ScheduleMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleMonthComponent", function() { return ScheduleMonthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/schedule.day.service */ "./src/app/service/schedule.day.service.ts");




var ScheduleMonthComponent = /** @class */ (function () {
    function ScheduleMonthComponent(scheduleService, scheduleDayService) {
        this.scheduleService = scheduleService;
        this.scheduleDayService = scheduleDayService;
        this.gamesArr = [];
        this.monthNames = ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];
        this.dayNames = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    ScheduleMonthComponent.prototype.ngOnInit = function () {
        this.monthName = this.monthNames[this.month - 1];
        this.buildMonth(this.month - 1, this.year);
    };
    ScheduleMonthComponent.prototype.getDaysInMonth = function (month, year) {
        switch (month) {
            case 0: return 31;
            case 1: return 28;
            case 2: return 31;
            case 3: return 30;
            case 4: return 31;
            case 5: return 30;
            case 6: return 31;
            case 7: return 31;
            case 8: return 30;
            case 9: return 31;
            case 10: return 30;
            case 11: return 31;
            default: return 0;
        }
    };
    ScheduleMonthComponent.prototype.buildMonth = function (month, year) {
        var rowCounter = 0;
        var currentDay = 0;
        var daysInMonth = this.getDaysInMonth(month, year);
        var firstDayOfMonth = new Date(year, month, 1).getDay();
        // console.log('[schedule-month] buildMonth() firstDayOfMonth: ' + firstDayOfMonth)
        this.monthArr = [];
        while (currentDay < daysInMonth) {
            this.monthArr[rowCounter] = [];
            for (var i = 0; i < 7; i++) {
                if (((currentDay === 0) && (i < firstDayOfMonth)) || (currentDay >= daysInMonth)) {
                    this.monthArr[rowCounter][i] = null;
                }
                else {
                    currentDay++;
                    // console.log('[schedule-month] buildMonth() adding day ' + currentDay + ' to monthArr[' + rowCounter + '][' + i + ']');
                    this.monthArr[rowCounter][i] = currentDay;
                }
            }
            rowCounter++;
        }
    };
    ScheduleMonthComponent.prototype.getGamesForDay = function (month, year, dayOfMonth) {
        var today = new Date(year, month - 1, dayOfMonth);
        var gameDay = this.dayNames[today.getDay()] + ', ' + this.monthNames[today.getMonth()] + ' ' + today.getDate();
        // console.log('[schedule-month] getGamesForDay() gameDay: ' + gameDay);
        this.gamesArr = this.scheduleService.getGamesForDay(gameDay);
        if (this.gamesArr.length > 0) {
            // console.log('[schedule-month] getGamesForDay() games: ' + this.gamesArr);
            this.scheduleDayService.setScheduleDay(gameDay, this.gamesArr);
        }
    };
    ScheduleMonthComponent.prototype.hasGamesForDay = function (month, year, dayOfMonth) {
        var today = new Date(year, month - 1, dayOfMonth);
        var gameDay = this.dayNames[today.getDay()] + ', ' + this.monthNames[today.getMonth()] + ' ' + today.getDate();
        return this.scheduleService.hasGamesForDay(gameDay);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ScheduleMonthComponent.prototype, "month", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ScheduleMonthComponent.prototype, "year", void 0);
    ScheduleMonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedule-month',
            template: __webpack_require__(/*! ./schedule-month.component.html */ "./src/app/schedule/schedule-month.component.html"),
            styles: [__webpack_require__(/*! ./schedule-month.component.scss */ "./src/app/schedule/schedule-month.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"],
            _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleDayService"]])
    ], ScheduleMonthComponent);
    return ScheduleMonthComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_schedule_day_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/schedule.day.service */ "./src/app/service/schedule.day.service.ts");



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(scheduleDayService) {
        this.scheduleDayService = scheduleDayService;
    }
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedule',
            template: "\n    <schedule-calendar></schedule-calendar>\n    <schedule-day></schedule-day>\n  ",
            providers: [_service_schedule_day_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleDayService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_schedule_day_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleDayService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.loadAppConfig = function () {
        var _this = this;
        return this.http.get('assets/conf.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp.json(); }))
            .toPromise()
            .then(function (data) {
            _this.appConfig = data;
        });
    };
    ConfigService.prototype.getConfig = function () {
        return this.appConfig;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/service/game.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/game.service.ts ***!
  \*****************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var GameService = /** @class */ (function () {
    function GameService() {
        this.gameActive = false;
        // Observable sources
        this.gameActiveSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // Observable streams
        this.gameActive$ = this.gameActiveSource.asObservable();
    }
    GameService.prototype.setGameActive = function (data) {
        // console.log('[schedule.service] setGameActive() data: ' + data);
        this.gameActiveSource.next(data);
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/service/playoff.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/playoff.service.ts ***!
  \********************************************/
/*! exports provided: PlayoffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayoffService", function() { return PlayoffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/game.service */ "./src/app/service/game.service.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _common_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/sort */ "./src/app/common/sort.ts");
/* harmony import */ var _shared_PlayNFLGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/PlayNFLGame */ "./src/app/shared/PlayNFLGame.ts");









var SCHEDULE = [
    { 'gameday': 'Wildcard Weekend', 'games': [4, 3, 10, 9, 5, 2, 11, 8] },
    { 'gameday': 'Division Championship', 'games': [3, 0, 9, 6, 2, 1, 8, 7] },
    { 'gameday': 'Conference Championship', 'games': [1, 0, 7, 6] },
    { 'gameday': 'Super Bowl', 'games': [6, 0] }
];
var PlayoffService = /** @class */ (function () {
    function PlayoffService(teamService, gameService, storageService) {
        this.teamService = teamService;
        this.gameService = gameService;
        this.storageService = storageService;
        this.PLAYOFF_SCHEDULE = [];
        this.GameDay = [];
        this.currentPlayoffGame = 0;
        this.AFCPlayoffTeams = [];
        this.NFCPlayoffTeams = [];
        this.PlayoffTeams = [];
        this.PlayoffBracket = new Array(22);
        this.playoffTabIndex = 0;
        // Observable sources
        this.currentPlayoffGameSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentPlayoffGameDaySource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.GameDaySource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.PlayoffBracketSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new Array(22));
        this.SuperBowlChampSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        // Observable streams
        this.currentPlayoffGame$ = this.currentPlayoffGameSource.asObservable();
        this.currentPlayoffGameDay$ = this.currentPlayoffGameDaySource.asObservable();
        this.GameDay$ = this.GameDaySource.asObservable();
        this.PlayoffBracket$ = this.PlayoffBracketSource.asObservable();
        this.SuperBowlChamp$ = this.SuperBowlChampSource.asObservable();
    }
    // Service message commands
    PlayoffService.prototype.setCurrentPlayoffGame = function (data) {
        // console.log('[playoff.service] setPlayoffcurrentPlayoffGame() data: ' + data);
        this.currentPlayoffGameSource.next(data);
    };
    PlayoffService.prototype.setCurrentPlayoffGameDay = function (data) {
        // console.log('[playoff.service] setPlayoffcurrentPlayoffGameDay() data: ' + data);
        this.currentPlayoffGameDaySource.next(data);
    };
    PlayoffService.prototype.setGameDay = function (data) {
        // console.log('[playoff.service] setGameDay() data: ' + data);
        this.GameDaySource.next(data);
    };
    PlayoffService.prototype.setPlayoffBracket = function (data) {
        // console.log('[playoff.service] setGameDay() data: ' + data);
        this.PlayoffBracketSource.next(data);
    };
    PlayoffService.prototype.setSuperBowlChamp = function (data) {
        // console.log('[playoff.service] setSuperBowlChamp() data: ' + data);
        this.SuperBowlChampSource.next(data);
    };
    PlayoffService.prototype.getPlayoffTabIndex = function () {
        return this.playoffTabIndex;
    };
    PlayoffService.prototype.setPlayoffTabIndex = function (idx) {
        this.playoffTabIndex = idx;
    };
    PlayoffService.prototype.loadPlayoffScheduleFromStorage = function () {
        var _this = this;
        this.currentPlayoffGame = 0;
        this.PLAYOFF_SCHEDULE = this.storageService.loadPlayoffScheduleFromLocalStorage() || [];
        this.PLAYOFF_SCHEDULE.forEach(function (game) {
            if (game.quarter !== 'F' && game.quarter !== null) {
                _this.resetIncompleteGame(game);
            }
            if (game.visitScore !== null) {
                _this.currentPlayoffGame++;
            }
        });
        this.setCurrentPlayoffGame(this.currentPlayoffGame);
    };
    PlayoffService.prototype.resetIncompleteGame = function (game) {
        game.visitScore = null;
        game.visitRecord = null;
        game.homeScore = null,
            game.homeRecord = null;
        game.quarter = null;
        game.spread = null;
        game.overtime = null;
        game.gameResults = [];
    };
    PlayoffService.prototype.addToSchedule = function (playoffDay) {
        var _this = this;
        var counter = 0;
        SCHEDULE.forEach(function (day) {
            for (var i = 0; i < day.games.length; i++) {
                var nextPlayoffGame = {
                    id: counter++,
                    gameday: day.gameday,
                    visitTeam: _this.PlayoffTeams[day.games[i]],
                    visitScore: null,
                    homeTeam: _this.PlayoffTeams[day.games[i + 1]],
                    homeScore: null,
                    quarter: null,
                    gameResults: []
                };
                if (nextPlayoffGame.gameday === playoffDay) {
                    _this.PLAYOFF_SCHEDULE.push(nextPlayoffGame);
                }
                i++;
            }
        });
    };
    PlayoffService.prototype.buildPlayoffSchedule = function (playoffDay) {
        console.log('[playoff.service] buildPlayoffSchedule() playoffDay: ' + playoffDay);
        this.loadPlayoffScheduleFromStorage();
        if (this.PLAYOFF_SCHEDULE.length < 1) {
            // console.log('[playoff.service] building');
            this.addToSchedule(playoffDay);
            console.log('[playoff.service] Playoff schedule built!');
            // console.table(this.PLAYOFF_SCHEDULE);
            this.storageService.storePlayoffScheduleToLocalStorage(this.PLAYOFF_SCHEDULE);
        }
        if (this.currentPlayoffGame < this.PLAYOFF_SCHEDULE.length) {
            this.currentPlayoffGameDay = this.PLAYOFF_SCHEDULE[this.currentPlayoffGame].gameday;
            this.setCurrentPlayoffGameDay(this.currentPlayoffGameDay);
            // console.log('[playoff.service] buildPlayoffSchedule() 1 currentPlayoffGameDay: ' + this.currentPlayoffGameDay);
        }
        else {
            this.currentPlayoffGameDay = this.PLAYOFF_SCHEDULE[this.currentPlayoffGame - 1].gameday;
            this.setCurrentPlayoffGameDay(this.currentPlayoffGameDay);
            // console.log('[playoff.service] buildPlayoffSchedule() 2 currentPlayoffGameDay: ' + this.currentPlayoffGameDay);
            this.checkNextPlayoffRound();
        }
        this.updatePlayoffBracket();
    };
    PlayoffService.prototype.checkNextPlayoffRound = function () {
        var _this = this;
        // console.log('[playoff.service] checkNextPlayoffRound() check for more rounds or season over');
        this.currentPlayoffGameDay = this.PLAYOFF_SCHEDULE[this.currentPlayoffGame - 1].gameday;
        var index = this.GameDay.findIndex(function (day) { return day === _this.currentPlayoffGameDay; });
        this.addToSchedule(this.GameDay[++index]);
        if (this.currentPlayoffGame < this.PLAYOFF_SCHEDULE.length) {
            this.currentPlayoffGameDay = this.PLAYOFF_SCHEDULE[this.currentPlayoffGame].gameday;
            this.setCurrentPlayoffGameDay(this.currentPlayoffGameDay);
            console.log('[playoff.service] checkNextPlayoffRound() currentPlayoffGameDay: ' + this.currentPlayoffGameDay);
            if (index === 1 && this.PLAYOFF_SCHEDULE[3].quarter === 'F') {
                // console.log('[playoff.service] checkNextPlayoffRound() Division Round, check Wildcard Weekend results');
                if (this.PLAYOFF_SCHEDULE[0].visitScore > this.PLAYOFF_SCHEDULE[0].homeScore) {
                    this.PLAYOFF_SCHEDULE[4].visitTeam = this.PLAYOFF_SCHEDULE[0].visitTeam;
                }
                if (this.PLAYOFF_SCHEDULE[1].visitScore > this.PLAYOFF_SCHEDULE[1].homeScore) {
                    this.PLAYOFF_SCHEDULE[5].visitTeam = this.PLAYOFF_SCHEDULE[1].visitTeam;
                }
                if (this.PLAYOFF_SCHEDULE[2].visitScore > this.PLAYOFF_SCHEDULE[2].homeScore) {
                    this.PLAYOFF_SCHEDULE[4].visitTeam = this.PLAYOFF_SCHEDULE[2].visitTeam;
                    if (this.PLAYOFF_SCHEDULE[0].visitScore > this.PLAYOFF_SCHEDULE[0].homeScore) {
                        this.PLAYOFF_SCHEDULE[6].visitTeam = this.PLAYOFF_SCHEDULE[0].visitTeam;
                    }
                    else {
                        this.PLAYOFF_SCHEDULE[6].visitTeam = this.PLAYOFF_SCHEDULE[0].homeTeam;
                    }
                }
                if (this.PLAYOFF_SCHEDULE[3].visitScore > this.PLAYOFF_SCHEDULE[3].homeScore) {
                    this.PLAYOFF_SCHEDULE[5].visitTeam = this.PLAYOFF_SCHEDULE[3].visitTeam;
                    if (this.PLAYOFF_SCHEDULE[1].visitScore > this.PLAYOFF_SCHEDULE[1].homeScore) {
                        this.PLAYOFF_SCHEDULE[7].visitTeam = this.PLAYOFF_SCHEDULE[1].visitTeam;
                    }
                    else {
                        this.PLAYOFF_SCHEDULE[7].visitTeam = this.PLAYOFF_SCHEDULE[1].homeTeam;
                    }
                }
            }
            if (index === 2 && this.PLAYOFF_SCHEDULE[7].quarter === 'F') {
                // console.log('[playoff.service] checkNextPlayoffRound() Conference Round, check Division Round results');
                if ((this.PLAYOFF_SCHEDULE[4].visitScore > this.PLAYOFF_SCHEDULE[4].homeScore)
                    && (this.PLAYOFF_SCHEDULE[6].visitScore > this.PLAYOFF_SCHEDULE[6].homeScore)) {
                    // console.log('AFC both div UPSET');
                    this.PLAYOFF_SCHEDULE[8].visitTeam = this.PLAYOFF_SCHEDULE[4].visitTeam;
                    this.PLAYOFF_SCHEDULE[8].homeTeam = this.PLAYOFF_SCHEDULE[6].visitTeam;
                }
                else {
                    if (this.PLAYOFF_SCHEDULE[4].visitScore > this.PLAYOFF_SCHEDULE[4].homeScore) {
                        // console.log('AFC div UPSET 1');
                        this.PLAYOFF_SCHEDULE[8].visitTeam = this.PLAYOFF_SCHEDULE[4].visitTeam;
                        this.PLAYOFF_SCHEDULE[8].homeTeam = this.PLAYOFF_SCHEDULE[6].homeTeam;
                    }
                    if (this.PLAYOFF_SCHEDULE[6].visitScore > this.PLAYOFF_SCHEDULE[6].homeScore) {
                        // console.log('AFC div UPSET 2');
                        this.PLAYOFF_SCHEDULE[8].visitTeam = this.PLAYOFF_SCHEDULE[6].visitTeam;
                        this.PLAYOFF_SCHEDULE[8].homeTeam = this.PLAYOFF_SCHEDULE[4].homeTeam;
                    }
                }
                if ((this.PLAYOFF_SCHEDULE[5].visitScore > this.PLAYOFF_SCHEDULE[5].homeScore)
                    && (this.PLAYOFF_SCHEDULE[7].visitScore > this.PLAYOFF_SCHEDULE[7].homeScore)) {
                    // console.log('NFC both div UPSET');
                    this.PLAYOFF_SCHEDULE[9].visitTeam = this.PLAYOFF_SCHEDULE[5].visitTeam;
                    this.PLAYOFF_SCHEDULE[9].homeTeam = this.PLAYOFF_SCHEDULE[7].visitTeam;
                }
                else {
                    if (this.PLAYOFF_SCHEDULE[5].visitScore > this.PLAYOFF_SCHEDULE[5].homeScore) {
                        // console.log('NFC div UPSET 1');
                        this.PLAYOFF_SCHEDULE[9].visitTeam = this.PLAYOFF_SCHEDULE[5].visitTeam;
                        this.PLAYOFF_SCHEDULE[9].homeTeam = this.PLAYOFF_SCHEDULE[7].homeTeam;
                    }
                    if (this.PLAYOFF_SCHEDULE[7].visitScore > this.PLAYOFF_SCHEDULE[7].homeScore) {
                        // console.log('NFC div UPSET 2');
                        this.PLAYOFF_SCHEDULE[9].visitTeam = this.PLAYOFF_SCHEDULE[7].visitTeam;
                        this.PLAYOFF_SCHEDULE[9].homeTeam = this.PLAYOFF_SCHEDULE[5].homeTeam;
                    }
                }
            }
            if (index === 3 && this.PLAYOFF_SCHEDULE[9].quarter === 'F') {
                // console.log('[playoff.service] checkNextPlayoffRound() Super Bowl, check Conference Round results');
                if (this.PLAYOFF_SCHEDULE[8].visitScore > this.PLAYOFF_SCHEDULE[8].homeScore) {
                    // console.log('AFC UPSET conf game');
                    this.PLAYOFF_SCHEDULE[10].visitTeam = this.PLAYOFF_SCHEDULE[8].visitTeam;
                }
                else {
                    this.PLAYOFF_SCHEDULE[10].visitTeam = this.PLAYOFF_SCHEDULE[8].homeTeam;
                }
                if (this.PLAYOFF_SCHEDULE[9].visitScore > this.PLAYOFF_SCHEDULE[9].homeScore) {
                    // console.log('NFC UPSET conf game');
                    this.PLAYOFF_SCHEDULE[10].homeTeam = this.PLAYOFF_SCHEDULE[9].visitTeam;
                }
                else {
                    this.PLAYOFF_SCHEDULE[10].homeTeam = this.PLAYOFF_SCHEDULE[9].homeTeam;
                }
            }
        }
        // console.log('[playoff.service] checkNextPlayoffRound() PLAYOFF_SCHEDULE:');
        // console.log(this.PLAYOFF_SCHEDULE);
        this.storageService.storePlayoffScheduleToLocalStorage(this.PLAYOFF_SCHEDULE);
    };
    PlayoffService.prototype.getGamesForDay = function (searchTerm) {
        // console.log('[playoff.service] getGamesForDay() searchTerm: ' + searchTerm);
        return this.PLAYOFF_SCHEDULE.filter(function (day) { return day.gameday === searchTerm; });
    };
    // hasGamesForDay(searchTerm: string): boolean {
    //   let games: ISchedule[] = [];
    //   games = this.PLAYOFF_SCHEDULE.filter(day => day.gameday === searchTerm);
    //   return games.length > 0 ? true : false;
    // }
    PlayoffService.prototype.getGamesForTeam = function (team, postseason) {
        // console.log('[playoff.service] getGamesForTeam() team: ' + team);
        var _this = this;
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if ((this.PLAYOFF_SCHEDULE.length < 1) && (postseason)) {
            this.initPlayoffs();
        }
        setTimeout(function () {
            subject.next(_this.PLAYOFF_SCHEDULE.filter(function (game) { return ((game.visitTeam === team) || (game.homeTeam === team)); }));
            subject.complete();
        }, 0);
        return subject;
    };
    PlayoffService.prototype.getGameById = function (id) {
        return this.PLAYOFF_SCHEDULE.find(function (game) { return game.id === id; });
    };
    PlayoffService.prototype.updatePlayoffBracket = function () {
        var _this = this;
        // console.log('[playoff.service] updatePlayoffBracket()');
        var swapBracket = function (t1, t2) {
            var temp = _this.PlayoffBracket[t1];
            _this.PlayoffBracket[t1] = _this.PlayoffBracket[t2];
            _this.PlayoffBracket[t2] = temp;
        };
        this.PLAYOFF_SCHEDULE.forEach(function (game) {
            if (game.id === 0 && _this.PlayoffTeams.length > 0) {
                // console.log('[playoff.service] updatePlayoffBracket() Initializing Bracket');
                _this.PlayoffBracket = [];
                _this.PlayoffBracket[0] = _this.PLAYOFF_SCHEDULE[0].visitTeam;
                _this.PlayoffBracket[1] = _this.PLAYOFF_SCHEDULE[0].homeTeam;
                _this.PlayoffBracket[2] = _this.PLAYOFF_SCHEDULE[1].visitTeam;
                _this.PlayoffBracket[3] = _this.PLAYOFF_SCHEDULE[1].homeTeam;
                _this.PlayoffBracket[4] = _this.PLAYOFF_SCHEDULE[2].visitTeam;
                _this.PlayoffBracket[5] = _this.PLAYOFF_SCHEDULE[2].homeTeam;
                _this.PlayoffBracket[6] = _this.PLAYOFF_SCHEDULE[3].visitTeam;
                _this.PlayoffBracket[7] = _this.PLAYOFF_SCHEDULE[3].homeTeam;
                _this.PlayoffBracket[9] = _this.PlayoffTeams[0];
                _this.PlayoffBracket[11] = _this.PlayoffTeams[6];
                _this.PlayoffBracket[13] = _this.PlayoffTeams[1];
                _this.PlayoffBracket[15] = _this.PlayoffTeams[7];
            }
            // console.log('[playoff.service] updatePlayoffBracket() game.id: ' + game.id);
            // console.log('[playoff.service] updatePlayoffBracket() PlayoffTeams:');
            // console.log(this.PlayoffTeams);
            if (game.quarter === 'F') {
                if (game.id === 0) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[8] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[8] = game.visitTeam;
                    }
                }
                if (game.id === 1) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[10] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[10] = game.visitTeam;
                    }
                }
                if (game.id === 2) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[12] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[12] = game.visitTeam;
                        // swapBracket(9, 13);
                        swapBracket(0, 4);
                        swapBracket(1, 5);
                        swapBracket(8, 12);
                    }
                }
                if (game.id === 3) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[14] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[14] = game.visitTeam;
                        // swapBracket(11, 15);
                        swapBracket(2, 6);
                        swapBracket(3, 7);
                        swapBracket(10, 14);
                    }
                }
                if (game.id === 4) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[16] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[16] = game.visitTeam;
                    }
                }
                if (game.id === 5) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[17] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[17] = game.visitTeam;
                    }
                }
                if (game.id === 6) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[18] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[18] = game.visitTeam;
                    }
                }
                if (game.id === 7) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[19] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[19] = game.visitTeam;
                    }
                }
                if (game.id === 8) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[20] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[20] = game.visitTeam;
                    }
                }
                if (game.id === 9) {
                    if (game.homeScore > game.visitScore) {
                        _this.PlayoffBracket[21] = game.homeTeam;
                    }
                    else {
                        _this.PlayoffBracket[21] = game.visitTeam;
                    }
                }
                if (game.id === 10) {
                    if (game.homeScore > game.visitScore) {
                        _this.SuperBowlChamp = game.homeTeam;
                    }
                    else {
                        _this.SuperBowlChamp = game.visitTeam;
                    }
                    _this.setSuperBowlChamp(_this.SuperBowlChamp);
                }
            }
        });
        this.setPlayoffBracket(this.PlayoffBracket);
    };
    PlayoffService.prototype.getGameResults = function (id) {
        var _this = this;
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        setTimeout(function () { subject.next(_this.PLAYOFF_SCHEDULE.find(function (game) { return (game.id === id); }).gameResults); subject.complete(); }, 0);
        return subject;
    };
    PlayoffService.prototype.playGame = function (game, simFast) {
        var _this = this;
        var visitTeam = this.teamService.getTeamByIndex(game.visitTeam);
        var homeTeam = this.teamService.getTeamByIndex(game.homeTeam);
        console.log('[playoff.service] playGame() currentPlayoffGame: ' + this.currentPlayoffGame
            + ', ' + visitTeam.city + ' at ' + homeTeam.city);
        _shared_PlayNFLGame__WEBPACK_IMPORTED_MODULE_8__["PlayNFLGame"].playNFLGame(game, visitTeam, homeTeam, simFast).subscribe(function (gameData) {
            // console.log('[playoff.service] playGame() playing Game');
            _this.gameService.setGameActive(true);
            game = gameData;
        }, function (err) {
            console.error('[playoff.service] playGame() playNFLGame error: ' + err);
        }, function () {
            // console.log('[playoff.service] playGame() playNFLGame over');
            _this.gameService.setGameActive(false);
            var overtime = game.quarter === 'OT';
            game.overtime = overtime;
            game.quarter = 'F';
            // if (game.visitScore > game.homeScore) {
            //   console.log('[playoff.service] playGame() Visitors Win');
            // } else {
            //   console.log('[playoff.service] playGame() Home Wins');
            // }
            _this.updatePlayoffBracket();
            _this.storageService.storePlayoffScheduleToLocalStorage(_this.PLAYOFF_SCHEDULE);
            if (game.id === (_this.PLAYOFF_SCHEDULE.length - 1)) {
                // console.log('[playoff.service] playGame() currentPlayoffGame: ' + this.currentPlayoffGame);
                // console.log('[playoff.service] playGame() Last game, time to build the next round');
                _this.checkNextPlayoffRound();
            }
        });
    };
    PlayoffService.prototype.playPlayoffGame = function (simFast) {
        // console.log('[playoff.service] playPlayoffGame() curr:' + this.currentPlayoffGame + ' len:' + this.PLAYOFF_SCHEDULE.length);
        if (this.currentPlayoffGame < this.PLAYOFF_SCHEDULE.length) {
            this.setCurrentPlayoffGame(this.currentPlayoffGame);
            this.currentPlayoffGameDay = this.PLAYOFF_SCHEDULE[this.currentPlayoffGame].gameday;
            // console.log('[playoff.service] playPlayoffGame() currentPlayoffGameDay: ' + this.currentPlayoffGameDay);
            this.setCurrentPlayoffGameDay(this.currentPlayoffGameDay);
            this.playGame(this.PLAYOFF_SCHEDULE[this.currentPlayoffGame], simFast);
            this.currentPlayoffGame++;
            return true;
        }
        else {
            console.log('[playoff.service] playPlayoffGame() Season Over');
            return false;
        }
    };
    PlayoffService.prototype.initPlayoffs = function () {
        if (this.PLAYOFF_SCHEDULE.length > 0) {
            // console.log('[playoff.service] initPlayoffs() Playoff schedule built');
        }
        else {
            // console.log('[playoff.service] initPlayoffs() Building playoff schedule');
            this.GameDay = SCHEDULE.map(function (s) { return s.gameday; });
            this.setGameDay(this.GameDay);
            this.buildPlayoffSchedule(this.GameDay[0]);
        }
    };
    PlayoffService.prototype.getPlayoffTeams = function () {
        var _this = this;
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (this.PlayoffTeams.length) {
            // console.log('[playoff.service] getPlayoffTeams() Have Playoff Teams');
            subject.next(this.PlayoffTeams);
            subject.complete();
        }
        else {
            // console.log('[playoff.service] getPlayoffTeams() Need to build Playoff Teams');
            this.getAFCPlayoffTeams();
            this.getNFCPlayoffTeams();
            setTimeout(function () {
                _this.PlayoffTeams = _this.AFCPlayoffTeams.concat(_this.NFCPlayoffTeams);
                subject.next(_this.PlayoffTeams);
                // console.log('[playoff.service] getPlayoffTeams() Built Playoff Teams!');
                _this.updatePlayoffBracket();
                subject.complete();
            }, 0);
        }
        setTimeout(function () { subject.next(_this.PlayoffTeams); }, 0);
        return subject;
    };
    PlayoffService.prototype.getAFCPlayoffTeams = function () {
        var _this = this;
        if (this.NFCPlayoffTeams.length) {
            // console.log('[playoff.service] getAFCPlayoffTeams() AFCPlayoffTeams already BUILT');
        }
        else {
            // console.log('[playoff.service] getAFCPlayoffTeams() Need to build AFCPlayoffTeams');
            var divisions_1 = [];
            var teamsArr_1 = [];
            var AFCDivLeaders_1 = [];
            var AFCOthers_1 = [];
            this.AFCPlayoffTeams = [];
            this.teamService.getTeams().subscribe(function (data) {
                teamsArr_1 = data;
                // console.log('[playoffs.service-afc] ngOnInit() getTeams() SUCCESS');
                teamsArr_1.forEach(function (team) {
                    if (divisions_1.indexOf(team.division) < 0) {
                        divisions_1.push(team.division);
                    }
                });
                divisions_1
                    .filter(function (division) { return division.indexOf('AFC') > -1; })
                    .forEach(function (division) {
                    var thisDiv = teamsArr_1.filter(function (team) { return (team.division === division); });
                    thisDiv.sort(_common_sort__WEBPACK_IMPORTED_MODULE_7__["sortDivision"]);
                    AFCDivLeaders_1.push(thisDiv[0]);
                    AFCOthers_1.push(thisDiv[1]);
                    AFCOthers_1.push(thisDiv[2]);
                    AFCOthers_1.push(thisDiv[3]);
                });
                AFCDivLeaders_1.sort(_common_sort__WEBPACK_IMPORTED_MODULE_7__["sortConference"]);
                AFCOthers_1.sort(_common_sort__WEBPACK_IMPORTED_MODULE_7__["sortConference"]);
                _this.AFCPlayoffTeams.push(_this.teamService.getTeamIndex(AFCDivLeaders_1[0].abbrev));
                _this.AFCPlayoffTeams.push(_this.teamService.getTeamIndex(AFCDivLeaders_1[1].abbrev));
                _this.AFCPlayoffTeams.push(_this.teamService.getTeamIndex(AFCDivLeaders_1[2].abbrev));
                _this.AFCPlayoffTeams.push(_this.teamService.getTeamIndex(AFCDivLeaders_1[3].abbrev));
                _this.AFCPlayoffTeams.push(_this.teamService.getTeamIndex(AFCOthers_1[0].abbrev));
                _this.AFCPlayoffTeams.push(_this.teamService.getTeamIndex(AFCOthers_1[1].abbrev));
                // console.table(this.AFCPlayoffTeams);
            });
        }
    };
    PlayoffService.prototype.getNFCPlayoffTeams = function () {
        var _this = this;
        if (this.NFCPlayoffTeams.length) {
            // console.log('[playoff.service] getNFCPlayoffTeams() NFCPlayoffTeams already BUILT');
        }
        else {
            // console.log('[playoff.service] getNFCPlayoffTeams() Need to build NFCPlayoffTeams');
            var divisions_2 = [];
            var teamsArr_2 = [];
            var NFCDivLeaders_1 = [];
            var NFCOthers_1 = [];
            this.NFCPlayoffTeams = [];
            this.teamService.getTeams().subscribe(function (data) {
                teamsArr_2 = data;
                // console.log('[playoffs.service-nfc] ngOnInit() getTeams() SUCCESS');
                teamsArr_2.forEach(function (team) {
                    if (divisions_2.indexOf(team.division) < 0) {
                        divisions_2.push(team.division);
                    }
                });
                divisions_2
                    .filter(function (division) { return division.indexOf('NFC') > -1; })
                    .forEach(function (division) {
                    var thisDiv = teamsArr_2.filter(function (team) { return (team.division === division); });
                    thisDiv.sort(_common_sort__WEBPACK_IMPORTED_MODULE_7__["sortDivision"]);
                    NFCDivLeaders_1.push(thisDiv[0]);
                    NFCOthers_1.push(thisDiv[1]);
                    NFCOthers_1.push(thisDiv[2]);
                    NFCOthers_1.push(thisDiv[3]);
                });
                NFCDivLeaders_1.sort(_common_sort__WEBPACK_IMPORTED_MODULE_7__["sortConference"]);
                NFCOthers_1.sort(_common_sort__WEBPACK_IMPORTED_MODULE_7__["sortConference"]);
                _this.NFCPlayoffTeams.push(_this.teamService.getTeamIndex(NFCDivLeaders_1[0].abbrev));
                _this.NFCPlayoffTeams.push(_this.teamService.getTeamIndex(NFCDivLeaders_1[1].abbrev));
                _this.NFCPlayoffTeams.push(_this.teamService.getTeamIndex(NFCDivLeaders_1[2].abbrev));
                _this.NFCPlayoffTeams.push(_this.teamService.getTeamIndex(NFCDivLeaders_1[3].abbrev));
                _this.NFCPlayoffTeams.push(_this.teamService.getTeamIndex(NFCOthers_1[0].abbrev));
                _this.NFCPlayoffTeams.push(_this.teamService.getTeamIndex(NFCOthers_1[1].abbrev));
                // console.table(this.NFCPlayoffTeams);
            });
        }
    };
    PlayoffService.prototype.resetPlayoffs = function () {
        var _this = this;
        console.log('[playoff.service] resetPlayoffs() Playoffs RESET!');
        this.storageService.clearPlayoffScheduleFromStorage().subscribe(function () {
            // Do nothing here; wait for complete
        }, function (err) {
            console.error('[playoff.service] resetPlayoffs() clearPlayoffScheduleFromStorage() error: ' + err);
        }, function () {
            console.log('[playoff.service] resetPlayoffs() clearPlayoffScheduleFromStorage() complete');
            _this.PLAYOFF_SCHEDULE = [];
            _this.currentPlayoffGame = 0;
            _this.currentPlayoffGameDay = '';
            _this.AFCPlayoffTeams = [];
            _this.NFCPlayoffTeams = [];
            _this.PlayoffTeams = [];
            _this.SuperBowlChamp = null;
            _this.setCurrentPlayoffGame(_this.currentPlayoffGame);
            _this.setCurrentPlayoffGameDay(_this.currentPlayoffGameDay);
            _this.setSuperBowlChamp(_this.SuperBowlChamp);
        });
    };
    PlayoffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _service_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"],
            _service_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], PlayoffService);
    return PlayoffService;
}());



/***/ }),

/***/ "./src/app/service/schedule.day.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/schedule.day.service.ts ***!
  \*************************************************/
/*! exports provided: ScheduleDayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDayService", function() { return ScheduleDayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");



var ScheduleDayService = /** @class */ (function () {
    function ScheduleDayService() {
        // Observable sources
        this.scheduleDaySource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.scheduleGamesSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Observable streams
        this.scheduleDay$ = this.scheduleDaySource.asObservable();
        this.scheduleGames$ = this.scheduleGamesSource.asObservable();
    }
    // Service message commands
    ScheduleDayService.prototype.setScheduleDay = function (scheduleInfo, scheduleGames) {
        // console.log('[schedule.day.service] setScheduleDay() scheduleInfo: ' + scheduleInfo);
        this.scheduleDaySource.next(scheduleInfo);
        this.scheduleGamesSource.next(scheduleGames);
    };
    ScheduleDayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ScheduleDayService);
    return ScheduleDayService;
}());



/***/ }),

/***/ "./src/app/service/schedule.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/schedule.service.ts ***!
  \*********************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/game.service */ "./src/app/service/game.service.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _shared_PlayNFLGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/PlayNFLGame */ "./src/app/shared/PlayNFLGame.ts");
/* harmony import */ var _shared_NFLSchedule2019__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/NFLSchedule2019 */ "./src/app/shared/NFLSchedule2019.ts");









var ScheduleService = /** @class */ (function () {
    function ScheduleService(teamService, gameService, storageService) {
        this.teamService = teamService;
        this.gameService = gameService;
        this.storageService = storageService;
        this.currentGame = 0;
        this.endOfSeason = false;
        this.SCHEDULE = [];
        // Observable sources
        this.currentGameSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentGameDaySource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.endOfSeasonSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.finalGameSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        // Observable streams
        this.currentGame$ = this.currentGameSource.asObservable();
        this.currentGameDay$ = this.currentGameDaySource.asObservable();
        this.endOfSeason$ = this.endOfSeasonSource.asObservable();
        this.finalGame$ = this.finalGameSource.asObservable();
    }
    // {'gameday': 'Monday, September 11', 'games': [26, 23, 14, 12]},
    // Service message commands
    ScheduleService.prototype.setCurrentGame = function (data) {
        // console.log('[schedule.service] setCurrentGame() data: ' + data);
        this.currentGameSource.next(data);
    };
    ScheduleService.prototype.setCurrentGameDay = function (data) {
        // console.log('[schedule.service] setCurrentGameDay() data: ' + data);
        this.currentGameDaySource.next(data);
    };
    ScheduleService.prototype.setEndOfSeason = function (data) {
        // console.log('[schedule.service] setEndOfSeason() data: ' + data);
        this.endOfSeasonSource.next(data);
    };
    ScheduleService.prototype.setFinalGame = function (data) {
        // console.log('[schedule.service] setFinalGame() data: ' + data);
        this.finalGameSource.next(data);
    };
    ScheduleService.prototype.loadScheduleFromStorage = function () {
        var _this = this;
        this.currentGame = 0;
        this.FULL_SCHEDULE = this.storageService.loadScheduleFromLocalStorage() || [];
        this.FULL_SCHEDULE.forEach(function (game) {
            if (game.quarter !== 'F' && game.quarter !== null) {
                _this.resetIncompleteGame(game);
            }
            if (game.visitScore !== null) {
                _this.currentGame++;
            }
        });
        // this.currentGame = this.currentGame > 0 ? this.currentGame-- : 0;
        this.setCurrentGame(this.currentGame);
    };
    ScheduleService.prototype.resetIncompleteGame = function (game) {
        game.visitScore = null;
        game.visitRecord = null;
        game.homeScore = null,
            game.homeRecord = null;
        game.quarter = null;
        game.spread = null;
        game.overtime = null;
        game.gameResults = [];
    };
    ScheduleService.prototype.buildFullSchedule = function () {
        var _this = this;
        // console.log('[schedule.service] buildFullSchedule()');
        this.loadScheduleFromStorage();
        if (this.SCHEDULE.length < 1) {
            this.SCHEDULE = _shared_NFLSchedule2019__WEBPACK_IMPORTED_MODULE_8__["_SCHEDULE"];
        }
        if (this.FULL_SCHEDULE.length < 1) {
            // console.log('[schedule.service] building');
            this.FULL_SCHEDULE = [];
            var counter_1 = 0;
            this.SCHEDULE.forEach(function (day) {
                for (var i = 0; i < day.games.length; i++) {
                    var nextGame = {
                        id: counter_1++,
                        gameday: day.gameday,
                        visitTeam: day.games[i],
                        visitScore: null,
                        homeTeam: day.games[i + 1],
                        homeScore: null,
                        quarter: null,
                        gameResults: []
                    };
                    _this.FULL_SCHEDULE.push(nextGame);
                    i++;
                }
            });
            // console.log('[schedule.service] FULL_SCHEDULE built!');
            // console.table(this.FULL_SCHEDULE);
            this.storageService.storeScheduleToLocalStorage(this.FULL_SCHEDULE);
        }
        this.finalGame = (this.FULL_SCHEDULE.length - 1);
        this.setFinalGame(this.finalGame);
        this.currentGameDay = this.currentGame <= this.finalGame ? this.FULL_SCHEDULE[this.currentGame].gameday : 'Playoffs';
        this.setCurrentGameDay(this.currentGameDay);
        this.endOfSeason = this.currentGame > this.finalGame;
        this.setEndOfSeason(this.endOfSeason);
        console.log('[schedule.service] buildFullSchedule() Complete!');
    };
    ScheduleService.prototype.getFullSchedule = function () {
        return this.FULL_SCHEDULE;
    };
    ScheduleService.prototype.getGamesForDay = function (searchTerm) {
        // console.log('[schedule.service] getGamesForDay() searchTerm: ' + searchTerm);
        return this.FULL_SCHEDULE.filter(function (day) { return day.gameday === searchTerm; });
    };
    ScheduleService.prototype.hasGamesForDay = function (searchTerm) {
        var games = [];
        games = this.FULL_SCHEDULE.filter(function (day) { return day.gameday === searchTerm; });
        return games.length > 0 ? true : false;
    };
    // getGamesForTeam(team: number): ISchedule[] {
    //   // console.log('[schedule.service] getGamesForTeam() team: ' + team);
    //   return this.FULL_SCHEDULE.filter(game => ((game.visitTeam === team) || (game.homeTeam === team)));
    // }
    ScheduleService.prototype.getGamesForTeam = function (team) {
        // console.log('[schedule.service] getGamesForTeam() team: ' + team);
        var _this = this;
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        setTimeout(function () {
            subject.next(_this.FULL_SCHEDULE.filter(function (game) { return ((game.visitTeam === team) || (game.homeTeam === team)); }));
            subject.complete();
        }, 0);
        // .next adds data to the observable stream
        // using setTimeout to simulate aschrony
        return subject;
    };
    ScheduleService.prototype.getGameById = function (id) {
        return this.FULL_SCHEDULE.find(function (game) { return game.id === id; });
    };
    ScheduleService.prototype.getGameResults = function (id) {
        var _this = this;
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        setTimeout(function () { subject.next(_this.FULL_SCHEDULE.find(function (game) { return (game.id === id); }).gameResults); subject.complete(); }, 0);
        return subject;
    };
    ScheduleService.prototype.zeroPad = function (value, precision) {
        if (value === 0) {
            return '.000';
        }
        if (value === 1) {
            return '1.000';
        }
        var result = '' + value;
        if (result.length > (precision + 1)) {
            result = '' + (Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision));
        }
        var decPoint = result.indexOf('.');
        for (var i = (result.length - decPoint); i <= precision; i++) {
            result += '0';
        }
        if (result[0] !== '.') {
            result = result.substring(1, result.length);
        }
        return result;
    };
    ScheduleService.prototype.getPCT = function (team) {
        return this.zeroPad((team.wins / (team.wins + team.losses)), 3);
    };
    ScheduleService.prototype.playGame = function (game, simFast) {
        var _this = this;
        // console.log('[schedule.service] playGame() simFast: ' + simFast);
        var visitTeam = this.teamService.getTeamByIndex(game.visitTeam);
        var homeTeam = this.teamService.getTeamByIndex(game.homeTeam);
        console.log('[schedule.service] playGame() currentGame: ' + this.currentGame
            + ', ' + visitTeam.city + ' at ' + homeTeam.city);
        // PlayFakeGame.playFakeGame(game, simFast)
        _shared_PlayNFLGame__WEBPACK_IMPORTED_MODULE_7__["PlayNFLGame"].playNFLGame(game, visitTeam, homeTeam, simFast).subscribe(function (gameData) {
            // console.log('[schedule.service] playGame() playing Game');
            _this.gameService.setGameActive(true);
            game = gameData;
        }, function (err) {
            console.error('[schedule.service] playGame() playNFLGame error: ' + err);
        }, function () {
            // console.log('[schedule.service] playGame() GAME OVER');
            _this.gameService.setGameActive(false);
            var overtime = game.quarter === 'OT';
            game.overtime = overtime;
            game.quarter = 'F';
            // Update in case sim season timing slightly updates the records
            game.visitRecord = visitTeam.wins + '-' + visitTeam.losses;
            game.homeRecord = homeTeam.wins + '-' + homeTeam.losses;
            if (game.visitScore > game.homeScore) {
                // console.log('[schedule.service] playGame() Visitors Win');
                visitTeam.wins++;
                visitTeam.visitwins++;
                homeTeam.losses++;
                homeTeam.homelosses++;
                if (visitTeam.division.substr(0, 3) === homeTeam.division.substr(0, 3)) {
                    visitTeam.confwins++;
                    homeTeam.conflosses++;
                    if (visitTeam.division === homeTeam.division) {
                        visitTeam.divwins++;
                        homeTeam.divlosses++;
                    }
                }
                else {
                    visitTeam.othwins++;
                    homeTeam.othlosses++;
                }
            }
            else {
                // console.log('[schedule.service] playGame() Home Wins');
                visitTeam.losses++;
                visitTeam.visitlosses++;
                homeTeam.wins++;
                homeTeam.homewins++;
                if (visitTeam.division.substr(0, 3) === homeTeam.division.substr(0, 3)) {
                    visitTeam.conflosses++;
                    homeTeam.confwins++;
                    if (visitTeam.division === homeTeam.division) {
                        visitTeam.divlosses++;
                        homeTeam.divwins++;
                    }
                }
                else {
                    visitTeam.othlosses++;
                    homeTeam.othwins++;
                }
            }
            visitTeam.pct = _this.getPCT(visitTeam);
            visitTeam.pf += game.visitScore;
            visitTeam.pa += game.homeScore;
            homeTeam.pct = _this.getPCT(homeTeam);
            homeTeam.pf += game.homeScore;
            homeTeam.pa += game.visitScore;
            _this.storageService.storeScheduleToLocalStorage(_this.FULL_SCHEDULE);
            if (game.id === _this.finalGame) {
                console.log('[schedule.service] playGame() Regular Season Over');
                _this.endOfSeason = true;
                _this.setEndOfSeason(_this.endOfSeason);
            }
            // this.storageService.storeTeamsToLocalStorage(this.teamService.getTeams());
            _this.teamService.getTeams().subscribe(function (teamData) {
                _this.storageService.storeTeamsToLocalStorage(teamData);
            }, function (err) {
                console.error('[schedule.service] playGame() getTeams() error: ' + err);
            });
        });
    };
    ScheduleService.prototype.playNextGame = function (simFast) {
        // console.log('[schedule.service] playNextGame() curr:' + this.currentGame + ' len:' + this.FULL_SCHEDULE.length);
        if (this.currentGame < this.FULL_SCHEDULE.length) {
            this.setCurrentGame(this.currentGame);
            this.currentGameDay = this.FULL_SCHEDULE[this.currentGame].gameday;
            // console.log('[schedule.service] playNextGame() currentGameDay: ' + this.currentGameDay);
            this.setCurrentGameDay(this.currentGameDay);
            this.playGame(this.FULL_SCHEDULE[this.currentGame], simFast);
            this.currentGame++;
            return true;
        }
        else {
            console.log('[schedule.service] playNextGame() Season Over');
            this.currentGameDay = 'Playoffs';
            this.setCurrentGameDay(this.currentGameDay);
            return false;
        }
    };
    ScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _service_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"],
            _service_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], ScheduleService);
    return ScheduleService;
}());



/***/ }),

/***/ "./src/app/service/storage.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/storage.service.ts ***!
  \********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.loadScheduleFromLocalStorage = function () {
        // console.log('[storage.service] loadScheduleFromLocalStorage()');
        var config;
        try {
            var configText = localStorage.getItem('fullSchedule');
            if (configText) {
                config = JSON.parse(configText);
                // } else {
                //   this.storeScheduleToLocalStorage(config);
            }
            // console.log('[storage.service] loadScheduleFromLocalStorage() SUCCESS');
        }
        catch (e) {
            console.warn('[storage.service] loadScheduleFromLocalStorage() Error reading from local storage');
        }
        return config;
    };
    StorageService.prototype.storeScheduleToLocalStorage = function (newFullSchedule) {
        // console.log('[storage.service] storeScheduleToLocalStorage()');
        try {
            var configText = JSON.stringify(newFullSchedule);
            localStorage.setItem('fullSchedule', configText);
        }
        catch (e) {
            console.warn('[storage.service] storeScheduleToLocalStorage() Error reading from local storage');
        }
    };
    StorageService.prototype.clearScheduleFromStorage = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        localStorage.removeItem('fullSchedule');
        setTimeout(function () {
            subject.next(true);
            subject.complete();
        }, 50);
        return subject;
    };
    StorageService.prototype.loadTeamsFromLocalStorage = function () {
        // console.log('[storage.service] loadTeamsFromLocalStorage()');
        var config;
        try {
            var configText = localStorage.getItem('teams');
            if (configText) {
                config = JSON.parse(configText);
                // } else {
                //   this.storeTeamsToLocalStorage(config);
            }
            // console.log('[storage.service] loadTeamsFromLocalStorage() SUCCESS');
        }
        catch (e) {
            console.warn('[storage.service] loadTeamsFromLocalStorage() Error reading from local storage');
        }
        return config;
    };
    StorageService.prototype.storeTeamsToLocalStorage = function (newTeams) {
        // console.log('[storage.service] storeTeamsToLocalStorage()');
        try {
            var configText = JSON.stringify(newTeams);
            localStorage.setItem('teams', configText);
        }
        catch (e) {
            console.warn('[storage.service] storeTeamsToLocalStorage() Error reading from local storage');
        }
    };
    StorageService.prototype.clearTeamsFromStorage = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        localStorage.removeItem('teams');
        setTimeout(function () {
            subject.next(true);
            subject.complete();
        }, 50);
        return subject;
    };
    StorageService.prototype.loadPlayoffScheduleFromLocalStorage = function () {
        // console.log('[storage.service] loadPlayoffScheduleFromLocalStorage()');
        var config;
        try {
            var configText = localStorage.getItem('playoffSchedule');
            if (configText) {
                config = JSON.parse(configText);
            }
        }
        catch (e) {
            console.warn('[storage.service] loadPlayoffScheduleFromLocalStorage() Error reading from local storage');
        }
        return config;
    };
    StorageService.prototype.storePlayoffScheduleToLocalStorage = function (newPlayoffSchedule) {
        // console.log('[storage.service] storePlayoffScheduleToLocalStorage()');
        try {
            var configText = JSON.stringify(newPlayoffSchedule);
            localStorage.setItem('playoffSchedule', configText);
        }
        catch (e) {
            console.warn('[storage.service] storePlayoffScheduleToLocalStorage() Error reading from local storage');
        }
    };
    StorageService.prototype.clearPlayoffScheduleFromStorage = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        localStorage.removeItem('playoffSchedule');
        setTimeout(function () {
            subject.next(true);
            subject.complete();
        }, 50);
        return subject;
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/service/team.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/team.service.ts ***!
  \*****************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/storage.service */ "./src/app/service/storage.service.ts");
/* harmony import */ var _shared_NFLTeams2019__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/NFLTeams2019 */ "./src/app/shared/NFLTeams2019.ts");







var TeamService = /** @class */ (function () {
    function TeamService(http, configService, storageService) {
        this.http = http;
        this.configService = configService;
        this.storageService = storageService;
        this.authServerUrl = 'http://' + this.configService.getConfig().server.host + ':' + this.configService.getConfig().server.port;
        this.useServer = this.configService.getConfig().useServer;
    }
    TeamService.prototype.loadTeamsFromStorage = function () {
        this.TEAMS = this.storageService.loadTeamsFromLocalStorage() || [];
    };
    TeamService.prototype.initTeams = function () {
        // console.log('[team.service] initTeams()');
        this.loadTeamsFromStorage();
        if (this.TEAMS.length < 1) {
            if (this.useServer) {
                // Use service
                var url = this.authServerUrl + '/sports/api/team';
                console.log(url);
                console.log('[team.service] initTeams() Using Service!');
                // this.TEAMS = this.http.get(this.authServerUrl).map((res: Response) => res.json());
            }
            else {
                // console.log('[team.service] initTeams() Not using Service!');
                this.TEAMS = _shared_NFLTeams2019__WEBPACK_IMPORTED_MODULE_6__["_TEAMS"];
                // console.log('[team.service] initTeams() TEAMS: ' + this.TEAMS.length);
            }
            this.TEAMS.forEach(function (team) {
                team.total = (team.qb + team.rb + team.wr + team.ol + team.dl + team.lb + team.db + team.st + team.co);
                team.wins = 0;
                team.losses = 0;
                team.pct = '.000';
                team.pf = 0;
                team.pa = 0;
                team.homewins = 0;
                team.homelosses = 0;
                team.visitwins = 0;
                team.visitlosses = 0;
                team.divwins = 0;
                team.divlosses = 0;
                team.confwins = 0;
                team.conflosses = 0;
                team.othwins = 0;
                team.othlosses = 0;
            });
            this.storageService.storeTeamsToLocalStorage(this.TEAMS);
        }
        console.log('[team.service] initTeams() Complete!');
    };
    TeamService.prototype.getTeams = function () {
        var _this = this;
        // getTeams() {
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // return this.TEAMS;
        setTimeout(function () { subject.next(_this.TEAMS); subject.complete(); }, 0);
        // .next adds data to the observable stream
        // using setTimeout to simulate aschrony
        return subject;
        // return TEAMS.asObservable();
        // return TEAMS;
        // return this.http.get(url, options).map((resp: Response) => resp.json()).catch(this.handleError);
    };
    TeamService.prototype.getTeam = function (abbrev) {
        return this.TEAMS.find(function (team) { return team.abbrev === abbrev; });
    };
    TeamService.prototype.getTeamIndex = function (abbrev) {
        var counter = 0;
        var index = -1;
        this.TEAMS.forEach(function (team) {
            if (team.abbrev === abbrev) {
                index = counter;
            }
            else {
                counter++;
            }
        });
        return index;
    };
    TeamService.prototype.getTeamByIndex = function (index) {
        return this.TEAMS[index];
    };
    TeamService.prototype.getTeamsForDivision = function (division) {
        return this.TEAMS.filter(function (team) { return team.division.toLocaleLowerCase() === division.toLocaleLowerCase(); });
    };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _service_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/shared/NFLSchedule2019.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/NFLSchedule2019.ts ***!
  \*******************************************/
/*! exports provided: _SCHEDULE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SCHEDULE", function() { return _SCHEDULE; });
var _SCHEDULE = [
    { 'gameday': 'Thursday, September 5', 'games': [22, 20] },
    { 'gameday': 'Sunday, September 8', 'games': [29, 25, 11, 6, 13, 10, 4, 1, 24, 23, 0, 3, 19, 18, 9, 14, 5, 31, 21, 28, 17, 16, 30, 27, 7, 2] },
    { 'gameday': 'Monday, September 9', 'games': [8, 26, 12, 15] },
    { 'gameday': 'Thursday, September 12', 'games': [27, 25] },
    { 'gameday': 'Sunday, September 15', 'games': [28, 4, 30, 5, 14, 21, 23, 22, 10, 8, 2, 1, 0, 17, 31, 7, 9, 11, 16, 19, 13, 15, 20, 12, 26, 29, 18, 24] },
    { 'gameday': 'Monday, September 16', 'games': [6, 3] },
    { 'gameday': 'Thursday, September 19', 'games': [11, 10] },
    { 'gameday': 'Sunday, September 22', 'games': [5, 0, 1, 16, 12, 22, 24, 9, 4, 13, 15, 23, 3, 2, 21, 18, 25, 28, 17, 27, 8, 14, 26, 31, 7, 30, 29, 6] },
    { 'gameday': 'Monday, September 23', 'games': [20, 19] },
    { 'gameday': 'Thursday, September 26', 'games': [18, 22] },
    { 'gameday': 'Sunday, September 29', 'games': [11, 24, 6, 4, 2, 0, 13, 21, 25, 8, 15, 9, 14, 1, 19, 17, 31, 28, 27, 29, 23, 20, 10, 12, 16, 26] },
    { 'gameday': 'Monday, September 30', 'games': [5, 7] },
    { 'gameday': 'Thursday, October 3', 'games': [29, 31] },
    { 'gameday': 'Sunday, October 6', 'games': [20, 15, 10, 25, 28, 5, 24, 8, 27, 26, 23, 17, 3, 18, 4, 7, 0, 11, 2, 19, 12, 14, 22, 16, 9, 13] },
    { 'gameday': 'Monday, October 7', 'games': [6, 30] },
    { 'gameday': 'Thursday, October 10', 'games': [17, 2] },
    { 'gameday': 'Sunday, October 13', 'games': [25, 27, 5, 4, 31, 6, 26, 10, 8, 13, 19, 1, 18, 23, 24, 28, 30, 29, 11, 12, 16, 3, 7, 14] },
    { 'gameday': 'Monday, October 14', 'games': [21, 22] },
    { 'gameday': 'Thursday, October 17', 'games': [13, 12] },
    { 'gameday': 'Sunday, October 20', 'games': [29, 24, 1, 0, 10, 5, 23, 21, 15, 22, 8, 9, 28, 17, 30, 19, 14, 11, 26, 20, 4, 31, 18, 16] },
    { 'gameday': 'Monday, October 21', 'games': [2, 3] },
    { 'gameday': 'Thursday, October 24', 'games': [19, 23] },
    { 'gameday': 'Sunday, October 27', 'games': [5, 29, 31, 24, 18, 0, 14, 20, 17, 21, 15, 8, 3, 10, 28, 26, 27, 11, 25, 30, 12, 9, 6, 2, 22, 13] },
    { 'gameday': 'Monday, October 28', 'games': [1, 7] },
    { 'gameday': 'Thursday, October 31', 'games': [30, 28] },
    { 'gameday': 'Sunday, November 3', 'games': [8, 10, 19, 0, 11, 25, 23, 13, 3, 1, 20, 18, 9, 7, 21, 15, 27, 31, 6, 12, 22, 14, 2, 4] },
    { 'gameday': 'Monday, November 4', 'games': [16, 17] },
    { 'gameday': 'Thursday, November 7', 'games': [14, 15] },
    { 'gameday': 'Sunday, November 10', 'games': [21, 20, 4, 5, 0, 6, 25, 22, 24, 26, 17, 3, 28, 27, 13, 11, 1, 9, 29, 7, 23, 16] },
    { 'gameday': 'Monday, November 11', 'games': [31, 30] },
    { 'gameday': 'Thursday, November 14', 'games': [7, 6] },
    { 'gameday': 'Sunday, November 17', 'games': [8, 4, 24, 25, 16, 21, 10, 9, 0, 1, 12, 23, 26, 27, 3, 19, 28, 30, 5, 15, 2, 18, 20, 29] },
    { 'gameday': 'Monday, November 18', 'games': [13, 14] },
    { 'gameday': 'Thursday, November 21', 'games': [9, 8] },
    { 'gameday': 'Sunday, November 24', 'games': [27, 24, 12, 0, 17, 20, 7, 5, 1, 6, 25, 26, 15, 3, 21, 19, 10, 11, 16, 2, 22, 30, 31, 18] },
    { 'gameday': 'Monday, November 25', 'games': [4, 29] },
    { 'gameday': 'Thursday, November 28', 'games': [20, 21, 0, 16, 26, 24] },
    { 'gameday': 'Sunday, December 1', 'games': [30, 4, 19, 25, 3, 5, 11, 9, 27, 10, 15, 13, 18, 1, 22, 17, 29, 28, 14, 12, 6, 7, 2, 8] },
    { 'gameday': 'Monday, December 2', 'games': [23, 31] },
    { 'gameday': 'Thursday, December 5', 'games': [16, 20] },
    { 'gameday': 'Sunday, December 8', 'games': [25, 24, 4, 0, 5, 6, 19, 22, 12, 8, 21, 23, 30, 26, 1, 3, 9, 27, 14, 10, 7, 28, 13, 2, 11, 15, 31, 29] },
    { 'gameday': 'Monday, December 9', 'games': [17, 18] },
    { 'gameday': 'Thursday, December 12', 'games': [3, 4] },
    { 'gameday': 'Sunday, December 15', 'games': [31, 25, 2, 5, 27, 21, 20, 22, 12, 13, 1, 17, 0, 7, 8, 11, 18, 19, 6, 28, 10, 15, 29, 16, 24, 30, 23, 14] },
    { 'gameday': 'Monday, December 16', 'games': [9, 26] },
    { 'gameday': 'Saturday, December 21', 'games': [21, 12, 15, 14, 0, 2, 29, 30, 8, 27] },
    { 'gameday': 'Sunday, December 22', 'games': [10, 24, 4, 6, 25, 9, 5, 1, 7, 3, 26, 11, 17, 19, 16, 18, 28, 31, 13, 20] },
    { 'gameday': 'Monday, December 23', 'games': [22, 23] },
    { 'gameday': 'Sunday, December 29', 'games': [7, 4, 3, 0, 26, 25, 6, 5, 19, 16, 22, 21, 11, 8, 9, 10, 14, 13, 20, 23, 1, 2, 18, 17, 24, 27, 15, 12, 28, 29, 30, 31] },
];
// Created on Fri Sep 6, 2019
// end of NFLSchedule2019


/***/ }),

/***/ "./src/app/shared/NFLTeams2019.ts":
/*!****************************************!*\
  !*** ./src/app/shared/NFLTeams2019.ts ***!
  \****************************************/
/*! exports provided: _TEAMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TEAMS", function() { return _TEAMS; });
var _TEAMS = [
    { 'city': 'Buffalo', 'name': 'Bills', 'abbrev': 'BUF', 'lightcolor': 'CF0020', 'darkcolor': '1F488F', 'division': 'AFC East', 'qb': 5, 'rb': 7, 'wr': 5, 'ol': 6, 'dl': 7, 'lb': 6, 'db': 8, 'st': 5, 'co': 7 },
    { 'city': 'Miami', 'name': 'Dolphins', 'abbrev': 'MIA', 'lightcolor': 'EF904F', 'darkcolor': '007880', 'division': 'AFC East', 'qb': 7, 'rb': 5, 'wr': 6, 'ol': 5, 'dl': 6, 'lb': 5, 'db': 6, 'st': 6, 'co': 7 },
    { 'city': 'New England', 'name': 'Patriots', 'abbrev': 'NE', 'lightcolor': 'CF0020', 'darkcolor': '203F80', 'division': 'AFC East', 'qb': 8, 'rb': 8, 'wr': 8, 'ol': 9, 'dl': 5, 'lb': 8, 'db': 7, 'st': 8, 'co': 7 },
    { 'city': 'New York', 'name': 'Jets', 'abbrev': 'NYJ', 'lightcolor': 'D0D0D0', 'darkcolor': '007352', 'division': 'AFC East', 'qb': 5, 'rb': 5, 'wr': 5, 'ol': 7, 'dl': 7, 'lb': 6, 'db': 6, 'st': 9, 'co': 7 },
    { 'city': 'Baltimore', 'name': 'Ravens', 'abbrev': 'BAL', 'lightcolor': 'DFB800', 'darkcolor': '30186F', 'division': 'AFC North', 'qb': 6, 'rb': 9, 'wr': 6, 'ol': 8, 'dl': 9, 'lb': 8, 'db': 9, 'st': 9, 'co': 7 },
    { 'city': 'Cincinnati', 'name': 'Bengals', 'abbrev': 'CIN', 'lightcolor': 'EF904F', 'darkcolor': '000000', 'division': 'AFC North', 'qb': 7, 'rb': 6, 'wr': 6, 'ol': 7, 'dl': 7, 'lb': 8, 'db': 5, 'st': 6, 'co': 7 },
    { 'city': 'Cleveland', 'name': 'Browns', 'abbrev': 'CLE', 'lightcolor': 'EF904F', 'darkcolor': '804000', 'division': 'AFC North', 'qb': 7, 'rb': 7, 'wr': 7, 'ol': 7, 'dl': 7, 'lb': 5, 'db': 9, 'st': 5, 'co': 7 },
    { 'city': 'Pittsburgh', 'name': 'Steelers', 'abbrev': 'PIT', 'lightcolor': 'F0D700', 'darkcolor': '000000', 'division': 'AFC North', 'qb': 8, 'rb': 6, 'wr': 9, 'ol': 9, 'dl': 9, 'lb': 8, 'db': 6, 'st': 5, 'co': 7 },
    { 'city': 'Houston', 'name': 'Texans', 'abbrev': 'HOU', 'lightcolor': 'CF0020', 'darkcolor': '20386F', 'division': 'AFC South', 'qb': 8, 'rb': 7, 'wr': 7, 'ol': 5, 'dl': 8, 'lb': 6, 'db': 7, 'st': 9, 'co': 7 },
    { 'city': 'Indianapolis', 'name': 'Colts', 'abbrev': 'IND', 'lightcolor': 'D0D0D0', 'darkcolor': '20386F', 'division': 'AFC South', 'qb': 9, 'rb': 6, 'wr': 9, 'ol': 9, 'dl': 6, 'lb': 5, 'db': 8, 'st': 7, 'co': 7 },
    { 'city': 'Jacksonville', 'name': 'Jaguars', 'abbrev': 'JAX', 'lightcolor': 'BF9800', 'darkcolor': '007890', 'division': 'AFC South', 'qb': 5, 'rb': 5, 'wr': 5, 'ol': 6, 'dl': 8, 'lb': 5, 'db': 9, 'st': 6, 'co': 7 },
    { 'city': 'Tennessee', 'name': 'Titans', 'abbrev': 'TEN', 'lightcolor': '5FA0DF', 'darkcolor': 'CF0020', 'division': 'AFC South', 'qb': 6, 'rb': 7, 'wr': 5, 'ol': 5, 'dl': 6, 'lb': 5, 'db': 8, 'st': 7, 'co': 7 },
    { 'city': 'Denver', 'name': 'Broncos', 'abbrev': 'DEN', 'lightcolor': 'EF904F', 'darkcolor': '10285F', 'division': 'AFC West', 'qb': 6, 'rb': 8, 'wr': 6, 'ol': 8, 'dl': 8, 'lb': 9, 'db': 7, 'st': 5, 'co': 7 },
    { 'city': 'Kansas City', 'name': 'Chiefs', 'abbrev': 'KC', 'lightcolor': 'F0D700', 'darkcolor': 'CF0020', 'division': 'AFC West', 'qb': 9, 'rb': 7, 'wr': 9, 'ol': 8, 'dl': 7, 'lb': 9, 'db': 6, 'st': 9, 'co': 7 },
    { 'city': 'Los Angeles', 'name': 'Chargers', 'abbrev': 'LAC', 'lightcolor': 'F0D700', 'darkcolor': '0F284F', 'division': 'AFC West', 'qb': 8, 'rb': 7, 'wr': 8, 'ol': 8, 'dl': 7, 'lb': 5, 'db': 8, 'st': 7, 'co': 7 },
    { 'city': 'Oakland', 'name': 'Raiders', 'abbrev': 'OAK', 'lightcolor': 'D0D0D0', 'darkcolor': '000000', 'division': 'AFC West', 'qb': 6, 'rb': 5, 'wr': 6, 'ol': 6, 'dl': 5, 'lb': 7, 'db': 5, 'st': 7, 'co': 7 },
    { 'city': 'Dallas', 'name': 'Cowboys', 'abbrev': 'DAL', 'lightcolor': 'D0D0D0', 'darkcolor': '10285F', 'division': 'NFC East', 'qb': 7, 'rb': 7, 'wr': 6, 'ol': 6, 'dl': 7, 'lb': 5, 'db': 7, 'st': 7, 'co': 7 },
    { 'city': 'New York', 'name': 'Giants', 'abbrev': 'NYG', 'lightcolor': 'CF0020', 'darkcolor': '00487F', 'division': 'NFC East', 'qb': 7, 'rb': 6, 'wr': 7, 'ol': 7, 'dl': 5, 'lb': 5, 'db': 8, 'st': 8, 'co': 7 },
    { 'city': 'Philadelphia', 'name': 'Eagles', 'abbrev': 'PHI', 'lightcolor': 'D0D0D0', 'darkcolor': '005A39', 'division': 'NFC East', 'qb': 8, 'rb': 6, 'wr': 8, 'ol': 7, 'dl': 7, 'lb': 5, 'db': 7, 'st': 7, 'co': 7 },
    { 'city': 'Washington', 'name': 'Redskins', 'abbrev': 'WAS', 'lightcolor': 'F0D72F', 'darkcolor': '7F002F', 'division': 'NFC East', 'qb': 5, 'rb': 6, 'wr': 5, 'ol': 6, 'dl': 7, 'lb': 6, 'db': 7, 'st': 6, 'co': 7 },
    { 'city': 'Chicago', 'name': 'Bears', 'abbrev': 'CHI', 'lightcolor': 'EF703F', 'darkcolor': '001F3F', 'division': 'NFC North', 'qb': 7, 'rb': 7, 'wr': 7, 'ol': 8, 'dl': 8, 'lb': 6, 'db': 9, 'st': 7, 'co': 7 },
    { 'city': 'Detroit', 'name': 'Lions', 'abbrev': 'DET', 'lightcolor': 'D0D0D0', 'darkcolor': '0082BE', 'division': 'NFC North', 'qb': 7, 'rb': 6, 'wr': 6, 'ol': 8, 'dl': 8, 'lb': 7, 'db': 6, 'st': 7, 'co': 7 },
    { 'city': 'Green Bay', 'name': 'Packers', 'abbrev': 'GB', 'lightcolor': 'F0D700', 'darkcolor': '42735A', 'division': 'NFC North', 'qb': 7, 'rb': 7, 'wr': 7, 'ol': 7, 'dl': 7, 'lb': 7, 'db': 6, 'st': 8, 'co': 7 },
    { 'city': 'Minnesota', 'name': 'Vikings', 'abbrev': 'MIN', 'lightcolor': 'F0D700', 'darkcolor': '63317B', 'division': 'NFC North', 'qb': 8, 'rb': 5, 'wr': 8, 'ol': 8, 'dl': 9, 'lb': 7, 'db': 9, 'st': 7, 'co': 7 },
    { 'city': 'Atlanta', 'name': 'Falcons', 'abbrev': 'ATL', 'lightcolor': 'CF0020', 'darkcolor': '000000', 'division': 'NFC South', 'qb': 9, 'rb': 6, 'wr': 9, 'ol': 7, 'dl': 6, 'lb': 5, 'db': 6, 'st': 7, 'co': 7 },
    { 'city': 'Carolina', 'name': 'Panthers', 'abbrev': 'CAR', 'lightcolor': 'D0D0D0', 'darkcolor': '009FD0', 'division': 'NFC South', 'qb': 7, 'rb': 8, 'wr': 7, 'ol': 8, 'dl': 7, 'lb': 9, 'db': 6, 'st': 5, 'co': 7 },
    { 'city': 'New Orleans', 'name': 'Saints', 'abbrev': 'NO', 'lightcolor': 'D0C78F', 'darkcolor': '000000', 'division': 'NFC South', 'qb': 9, 'rb': 9, 'wr': 8, 'ol': 9, 'dl': 9, 'lb': 5, 'db': 6, 'st': 9, 'co': 7 },
    { 'city': 'Tampa Bay', 'name': 'Buccaneers', 'abbrev': 'TB', 'lightcolor': '90887F', 'darkcolor': 'BF083F', 'division': 'NFC South', 'qb': 8, 'rb': 5, 'wr': 9, 'ol': 7, 'dl': 8, 'lb': 8, 'db': 5, 'st': 6, 'co': 7 },
    { 'city': 'Arizona', 'name': 'Cardinals', 'abbrev': 'ARI', 'lightcolor': 'F0D700', 'darkcolor': 'A0003F', 'division': 'NFC West', 'qb': 5, 'rb': 5, 'wr': 5, 'ol': 6, 'dl': 9, 'lb': 9, 'db': 8, 'st': 5, 'co': 7 },
    { 'city': 'Los Angeles', 'name': 'Rams', 'abbrev': 'LAR', 'lightcolor': 'F0D700', 'darkcolor': '10407F', 'division': 'NFC West', 'qb': 8, 'rb': 9, 'wr': 8, 'ol': 9, 'dl': 7, 'lb': 7, 'db': 6, 'st': 9, 'co': 7 },
    { 'city': 'San Francisco', 'name': '49ers', 'abbrev': 'SF', 'lightcolor': 'C0A87F', 'darkcolor': 'A0003F', 'division': 'NFC West', 'qb': 7, 'rb': 6, 'wr': 7, 'ol': 5, 'dl': 7, 'lb': 5, 'db': 5, 'st': 8, 'co': 7 },
    { 'city': 'Seattle', 'name': 'Seahawks', 'abbrev': 'SEA', 'lightcolor': '838EB2', 'darkcolor': '3B527B', 'division': 'NFC West', 'qb': 9, 'rb': 9, 'wr': 7, 'ol': 7, 'dl': 7, 'lb': 9, 'db': 7, 'st': 7, 'co': 7 }
];
// Copied from NFLTeams2018 on Fri Sep 6, 2019
// end of NFLTeams2019


/***/ }),

/***/ "./src/app/shared/PlayNFLGame.ts":
/*!***************************************!*\
  !*** ./src/app/shared/PlayNFLGame.ts ***!
  \***************************************/
/*! exports provided: PlayNFLGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayNFLGame", function() { return PlayNFLGame; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _common_odds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/odds */ "./src/app/common/odds.ts");


var PlayNFLGame = /** @class */ (function () {
    function PlayNFLGame() {
    }
    // Called by services (schedule.service and playoff.service)
    PlayNFLGame.playNFLGame = function (game, vTeam, hTeam, simFast) {
        // console.log('[PlayNFLGame] playNFLGame() started');
        var timeout = simFast ? 10 : 500;
        var subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var gameCounter = 9;
        var gameMax = 11;
        var self = this;
        game.visitScore = 0;
        game.homeScore = 0;
        game.visitRecord = vTeam.wins + '-' + vTeam.losses;
        game.homeRecord = hTeam.wins + '-' + hTeam.losses;
        game.spread = Object(_common_odds__WEBPACK_IMPORTED_MODULE_1__["calculateOdds"])(vTeam, hTeam);
        (function theLoop(i) {
            setTimeout(function () {
                var quarter = 'X';
                switch (i) {
                    case 0:
                    case 1:
                        quarter = '1';
                        break;
                    case 2:
                    case 3:
                        quarter = '2';
                        break;
                    case 4:
                    case 5:
                        quarter = '3';
                        break;
                    case 6:
                    case 7:
                    case 8:
                        quarter = '4';
                        break;
                    case 9:
                    case 10:
                    case 11:
                        quarter = 'OT';
                        break;
                    default: return 'U';
                }
                var score = self.generateNFLScore(self, game, vTeam, hTeam, i, quarter);
                // console.log('[PlayNFLGame] playNFLGame() score: ' + score);
                game.quarter = quarter;
                if (score > 0) {
                    // console.log('[PlayNFLGame] playNFLGame() HOME scored: ' + score);
                    game.homeScore += score;
                    game.gameResults.push({ teamScored: game.homeTeam, quarter: quarter, points: score });
                }
                if (score < 0) {
                    var vScore = (score * -1);
                    // console.log('[PlayNFLGame] playNFLGame() VISIT scored: ' + vScore);
                    game.visitScore += vScore;
                    game.gameResults.push({ teamScored: game.visitTeam, quarter: quarter, points: vScore });
                }
                i++;
                if ((i < gameCounter) || ((i < gameMax) && (game.visitScore === game.homeScore))) {
                    if (i >= gameCounter) {
                        // console.log('[PlayNFLGame] playNFLGame() Game: ' + game.id + ' - OVERTIME! (' + gameCounter + ')');
                    }
                    theLoop(i);
                }
                else {
                    if (game.visitScore === game.homeScore) {
                        // console.log('[PlayNFLGame] playNFLGame() Game: ' + game.id + ' - FORECD OVERTIME!');
                        game.homeScore += 3;
                        game.gameResults.push({ teamScored: game.homeTeam, quarter: 'OT', points: 3 });
                    }
                    // console.log('[PlayNFLGame] playNFLGame() game over');
                    subject.complete();
                }
            }, timeout);
        })(0);
        setTimeout(function () { subject.next(game); }, 0);
        return subject;
    };
    // Called internally by playNFLGame
    PlayNFLGame.generateNFLScore = function (self, game, vTeam, hTeam, gameCounter, quarter) {
        // console.log('[PlayNFLGame] generateNFLScore() gameCounter: ' + gameCounter);
        switch (gameCounter) {
            case 0: return this.determineScore(self, game.homeScore, hTeam.qb, game.visitScore, vTeam.qb, quarter);
            case 1: return this.determineScore(self, game.homeScore, hTeam.rb, game.visitScore, vTeam.lb, quarter);
            case 2: return this.determineScore(self, game.homeScore, hTeam.wr, game.visitScore, vTeam.db, quarter);
            case 3: return this.determineScore(self, game.homeScore, hTeam.ol, game.visitScore, vTeam.dl, quarter);
            case 4: return this.determineScore(self, game.homeScore, hTeam.dl, game.visitScore, vTeam.ol, quarter);
            case 5: return this.determineScore(self, game.homeScore, hTeam.lb, game.visitScore, vTeam.rb, quarter);
            case 6: return this.determineScore(self, game.homeScore, hTeam.db, game.visitScore, vTeam.wr, quarter);
            case 7: return this.determineScore(self, game.homeScore, hTeam.st, game.visitScore, vTeam.st, quarter);
            case 8: return this.determineScore(self, game.homeScore, hTeam.co, game.visitScore, vTeam.co, quarter);
            case 9: return this.determineScore(self, game.homeScore, hTeam.qb, game.visitScore, vTeam.qb, quarter);
            case 10: return this.determineScore(self, game.homeScore, hTeam.co, game.visitScore, vTeam.co, quarter);
            case 11: return 3;
            default: console.log('generateNFLScore() Error - Invalid gameCounter: ' + gameCounter);
        }
    };
    // Called internally by generateNFLScore
    PlayNFLGame.determineScore = function (self, homeScore, homeAttrib, visitScore, visitAttrib, quarter) {
        var points = 0;
        var difference = 0;
        var currHomeScore = homeScore;
        var currVisitScore = visitScore;
        // console.log('[PlayNFLGame] determineScore() homeAttrib: ' + homeAttrib +  ', visitAttrib: ' + visitAttrib);
        homeAttrib -= 3;
        visitAttrib -= 3;
        var Try1 = (homeAttrib <= 0) ? 0 : Math.floor(Math.random() * homeAttrib);
        var Try2 = (visitAttrib <= 0) ? 0 : Math.floor(Math.random() * visitAttrib);
        // console.log('[PlayNFLGame] determineScore() Try1: ' + Try1 +  ', Try2: ' + Try2);
        if (Try1 !== Try2) {
            difference = Math.abs(Try1 - Try2);
            // console.log('[PlayNFLGame] determineScore() difference: ' + difference);
            if (difference >= 3) {
                points = self.makePoints(8);
            }
            else {
                points = self.makePoints(5);
            }
            // console.log('[PlayNFLGame] determineScore() points: ' + points);
            if (Try1 > Try2) {
                if (quarter === 'OT') {
                    if (points > 3) {
                        points = 7;
                    }
                }
                else {
                    if (points === 6) {
                        if (quarter >= '3') {
                            points += self.xtraPt(self, currHomeScore, currVisitScore, 'Home', quarter);
                        }
                        else {
                            points += self.goFor(1);
                        }
                    }
                }
                return points;
            }
            else {
                if (quarter === 'OT') {
                    if (points > 3) {
                        points = 7;
                    }
                }
                else {
                    if (points === 6) {
                        if (quarter >= '3') {
                            points += self.xtraPt(self, currHomeScore, currVisitScore, 'Visit', quarter);
                        }
                        else {
                            points += self.goFor(1);
                        }
                    }
                }
                return (points * -1);
            }
        }
        return 0;
    };
    // Called internally by determineScore
    PlayNFLGame.makePoints = function (number) {
        var rand = Math.floor(Math.random() * number);
        if (rand % 2 === 1) {
            // console.log('[PlayNFLGame] makePoints() returning 3');
            return 3;
        }
        else {
            // console.log('[PlayNFLGame] makePoints() returning 6');
            return 6;
        }
    };
    // Called internally by determineScore
    PlayNFLGame.xtraPt = function (self, homeScore, visitScore, scorer) {
        // console.log('[PlayNFLGame] xtraPt() Attempting');
        var difference = 0;
        var soFar = '';
        var xtra = 0;
        if (scorer === 'Home') {
            difference = ((homeScore + 6) - visitScore);
            if (difference > 0) {
                soFar = 'winning';
            }
            if (difference < 0) {
                soFar = 'losing';
            }
        }
        if (scorer === 'Visit') {
            difference = (homeScore - (visitScore + 6));
            if (difference > 0) {
                soFar = 'losing';
            }
            if (difference < 0) {
                soFar = 'winning';
            }
        }
        if (difference === 0) {
            // go for 1
            xtra = self.goFor(1);
            return xtra;
        }
        if (soFar === 'winning') {
            switch (Math.abs(difference)) {
                case 1:
                    xtra = self.goFor(2);
                    break;
                case 2:
                    xtra = self.goFor(1);
                    break;
                case 3:
                    xtra = self.goFor(1);
                    break;
                case 4:
                    xtra = self.goFor(1);
                    break;
                case 5:
                    xtra = self.goFor(2);
                    break;
                case 6:
                    xtra = self.goFor(1);
                    break;
                case 7:
                    xtra = self.goFor(1);
                    break;
                case 8:
                    xtra = self.goFor(1);
                    break;
                case 9:
                    xtra = self.goFor(1);
                    break;
                case 10:
                    xtra = self.goFor(1);
                    break;
                case 11:
                    xtra = self.goFor(1);
                    break;
                case 12:
                    xtra = self.goFor(2);
                    break;
                case 13:
                    xtra = self.goFor(1);
                    break;
                case 14:
                    xtra = self.goFor(1);
                    break;
                case 15:
                    xtra = self.goFor(2);
                    break;
                case 16:
                    xtra = self.goFor(1);
                    break;
                case 17:
                    xtra = self.goFor(1);
                    break;
                case 18:
                    xtra = self.goFor(1);
                    break;
                case 19:
                    xtra = self.goFor(2);
                    break;
                case 20:
                    xtra = self.goFor(1);
                    break;
                default: xtra = self.goFor(1);
            }
            return xtra;
        }
        if (soFar === 'losing') {
            switch (Math.abs(difference)) {
                case 1:
                    xtra = self.goFor(1);
                    break;
                case 2:
                    xtra = self.goFor(2);
                    break;
                case 3:
                    xtra = self.goFor(1);
                    break;
                case 4:
                    xtra = self.goFor(1);
                    break;
                case 5:
                    xtra = self.goFor(2);
                    break;
                case 6:
                    xtra = self.goFor(1);
                    break;
                case 7:
                    xtra = self.goFor(1);
                    break;
                case 8:
                    xtra = self.goFor(1);
                    break;
                case 9:
                    xtra = self.goFor(2);
                    break;
                case 10:
                    xtra = self.goFor(2);
                    break;
                case 11:
                    xtra = self.goFor(1);
                    break;
                case 12:
                    xtra = self.goFor(2);
                    break;
                case 13:
                    xtra = self.goFor(1);
                    break;
                case 14:
                    xtra = self.goFor(1);
                    break;
                case 15:
                    xtra = self.goFor(1);
                    break;
                case 16:
                    xtra = self.goFor(2);
                    break;
                case 17:
                    xtra = self.goFor(1);
                    break;
                case 18:
                    xtra = self.goFor(1);
                    break;
                case 19:
                    xtra = self.goFor(2);
                    break;
                case 20:
                    xtra = self.goFor(1);
                    break;
                default: xtra = self.goFor(1);
            }
            return xtra;
        }
    };
    // Called internally by xtraPt
    PlayNFLGame.goFor = function (attempt) {
        // console.log('[PlayNFLGame] goFor(' + attempt + ')');
        var rand = Math.floor(Math.random() * 100) + 1;
        if (attempt === 1) {
            return (rand > 94) ? 0 : attempt;
        }
        if (attempt === 2) {
            return (rand > 60) ? 0 : attempt;
        }
    };
    return PlayNFLGame;
}());



/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: fadeAnimation, listAnimation, RouterAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterAnimations", function() { return RouterAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: 0, left: 0, width: '100%' })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.6s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
        ])
    ])
]);
var listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        // query(':leave', [
        //   stagger(100, [
        //     animate('0.4s', style({ opacity: 0 }))
        //   ])
        // ], { optional: true }),
        // query(':leave', animate('50ms', style({ opacity: 0 })), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('100ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
            ])
        ], { optional: true })
    ])
]);
var RouterAnimations = /** @class */ (function () {
    function RouterAnimations() {
    }
    RouterAnimations.routeSlide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeSlide', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX({{offsetEnter}}%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX({{offsetLeave}}%)' }))
                ], { optional: true }),
            ])
        ]),
    ]);
    return RouterAnimations;
}());

// export const slideInAnimation =
//   trigger('routeAnimations', [
//     transition('HomePage <=> AboutPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%'})
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('300ms ease-out', style({ left: '100%'}))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%'}))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('* <=> FilterPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%'})
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('200ms ease-out', style({ left: '100%'}))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%'}))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ]);


/***/ }),

/***/ "./src/app/shared/material-elevation.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/material-elevation.directive.ts ***!
  \********************************************************/
/*! exports provided: MaterialElevationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialElevationDirective", function() { return MaterialElevationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaterialElevationDirective = /** @class */ (function () {
    function MaterialElevationDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    MaterialElevationDirective.prototype.ngOnChanges = function (_changes) {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.onMouseEnter = function () {
        this.setElevation(this.raisedElevation);
    };
    MaterialElevationDirective.prototype.onMouseLeave = function () {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.setElevation = function (amount) {
        var _this = this;
        // remove all elevation classes
        var classesToRemove = Array.from(this.element.nativeElement.classList).filter(function (c) { return c.startsWith('mat-elevation-z'); });
        classesToRemove.forEach(function (c) {
            _this.renderer.removeClass(_this.element.nativeElement, c);
        });
        // add the given elevation class
        var newClass = "mat-elevation-z" + amount;
        this.renderer.addClass(this.element.nativeElement, newClass);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialElevationDirective.prototype, "defaultElevation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialElevationDirective.prototype, "raisedElevation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MaterialElevationDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MaterialElevationDirective.prototype, "onMouseLeave", null);
    MaterialElevationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMaterialElevation]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MaterialElevationDirective);
    return MaterialElevationDirective;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
            ],
            exports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner-button.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/spinner-button.directive.ts ***!
  \****************************************************/
/*! exports provided: SpinnerButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerButtonDirective", function() { return SpinnerButtonDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SpinnerButtonDirective = /** @class */ (function () {
    function SpinnerButtonDirective(el, renderer, viewContainerRef, componentFactoryResolver) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    SpinnerButtonDirective.prototype.ngOnInit = function () {
        // Record the button's original text
        this.originalInnerText = this.el.nativeElement.innerText || this.el.nativeElement.id;
        // Set the button to maintain the same dimensions, even once we put the spinner inside.
        this.el.nativeElement.style.width = this.el.nativeElement.offsetWidth + "px";
        this.el.nativeElement.style.height = this.el.nativeElement.offsetHeight + "px";
        // Create the spinner
        var factory = this.componentFactoryResolver.resolveComponentFactory(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]);
        var componentRef = this.viewContainerRef.createComponent(factory);
        this.spinner = componentRef.instance;
        // Configure the spinner
        this.spinner.strokeWidth = 3;
        this.spinner.diameter = 24;
        this.spinner.color = 'accent';
        // Hide the spinner
        this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'none');
        // Apply new styles to the button content's container
        var span = this.el.nativeElement.querySelector('.mat-button-wrapper');
        this.renderer.setStyle(span, 'display', 'flex');
        this.renderer.setStyle(span, 'align-items', 'center');
        this.renderer.setStyle(span, 'justify-content', 'center');
    };
    SpinnerButtonDirective.prototype.ngOnChanges = function (changes) {
        if (typeof (changes.showSpinner) === 'object' && !changes.showSpinner.isFirstChange()) {
            if (changes.showSpinner.currentValue === true) {
                // Clear the button's text
                var span = this.el.nativeElement.querySelector('.mat-button-wrapper');
                span.innerText = '';
                // Append the spinner
                this.renderer.appendChild(this.el.nativeElement.firstChild, this.spinner._elementRef.nativeElement);
                // Show the spinner
                this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'inherit');
            }
            if (changes.showSpinner.currentValue === false) {
                // Hide the spinner
                this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'display', 'none');
                // Remove the spinner
                this.renderer.removeChild(this.el.nativeElement.firstChild, this.spinner._elementRef.nativeElement);
                var span = this.el.nativeElement.querySelector('.mat-button-wrapper');
                span.innerText = this.originalInnerText;
            }
            this.el.nativeElement.disabled = changes.showSpinner.currentValue;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appSpinnerButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpinnerButtonDirective.prototype, "showSpinner", void 0);
    SpinnerButtonDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'button[appSpinnerButton]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], SpinnerButtonDirective);
    return SpinnerButtonDirective;
}());



/***/ }),

/***/ "./src/app/showscores/show-score.component.html":
/*!******************************************************!*\
  !*** ./src/app/showscores/show-score.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"show-score\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" *ngIf=\"!loading\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" fxFlex>\r\n    <div class=\"team-info\">\r\n      <img src=\"/assets/images/{{teamsArr[score.visitTeam].abbrev}}.png\" class=\"logo\">\r\n      <span class=\"score\">{{score.visitScore}}</span>\r\n      <span>\r\n        <span class=\"team-city\">{{teamsArr[score.visitTeam].city}}</span><br>\r\n        <span class=\"team-name\">{{teamsArr[score.visitTeam].name}}</span>\r\n      </span>\r\n    </div>\r\n    <div class=\"team-info\">\r\n      <img src=\"/assets/images/{{teamsArr[score.homeTeam].abbrev}}.png\" class=\"logo\">\r\n      <span class=\"score\">{{score.homeScore}}</span>\r\n      <span>\r\n        <span class=\"team-city\">{{teamsArr[score.homeTeam].city}}</span><br>\r\n        <span class=\"team-name\">{{teamsArr[score.homeTeam].name}}</span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div fxFlex=\"12px\" *ngIf=\"showQuarter()\">\r\n    <span class=\"quarter\">{{ score.quarter }}</span>\r\n  </div>\r\n</div>\r\n\r\n<mat-card *ngIf=\"loading\">\r\n  <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n  <div class=\"loading-font\">&nbsp; Loading Game &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/showscores/show-score.component.scss":
/*!******************************************************!*\
  !*** ./src/app/showscores/show-score.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 8px 8px 0px;\n  padding: 8px; }\n.show-score .team-info {\n  padding: 1px;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%; }\n.show-score .team-info .logo {\n    float: left;\n    height: 40px; }\n.show-score .team-info .score {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: italic;\n    font-weight: bold;\n    margin: 2px;\n    padding: 5px;\n    float: right; }\n.show-score .team-info .team-city {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 0.875em;\n    font-style: normal;\n    font-weight: normal;\n    padding-left: 5px; }\n.show-score .team-info .team-name {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: normal;\n    font-weight: bold;\n    padding-left: 5px; }\n.show-score .quarter {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Njb3Jlcy9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXHNjc3NcXF9jb21tb24uc2NzcyIsInNyYy9hcHAvc2hvd3Njb3Jlcy9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXGFwcFxcc2hvd3Njb3Jlc1xcc2hvdy1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQVlBLDhCQUFBO0FBY0EsOEJBQUE7QUFXQSxtQ0FBQTtBQXlCQSxtQ0FBQTtBQzVEQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7QUFHZDtFQUVJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUxmO0lBUU0sV0FBVztJQUNYLFlBQVksRUFBQTtBQVRsQjtJRGdERSwyRkF6QjZGO0lBMEI3RixrQkFuQ2tCO0lBb0NsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lDckNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWSxFQUFBO0FBaEJsQjtJRGtDRSwyRkFYNkY7SUFZN0Ysa0JBdkJrQjtJQXdCbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQ2pCZixpQkFBaUIsRUFBQTtBQXBCdkI7SUR5Q0UsMkZBbEI2RjtJQW1CN0YsY0E3QmU7SUE4QmYsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQ3BCYixpQkFBaUIsRUFBQTtBQXhCdkI7RURnREUsMkZBekI2RjtFQTBCN0YsY0FwQ2U7RUFxQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvd3Njb3Jlcy9zaG93LXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIENvbG9yIGRlZmluaXRpb25zICAgICAqIC8vXHJcblxyXG4vLyAgICBNYWluIGNvbG9yXHJcbiRORkxDb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XHJcbiRORkxUcmFuczogcmdiYSgwLCAxMjgsIDAsIDAuMyk7XHJcbiRORkxMaW5rQ29sb3I6IHJnYigwLCAxMjgsIDApO1xyXG4kTmVhcldoaXRlOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiROZWFyQmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJExpZ2h0R3JleTogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IHNpemUgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc2l6ZXMsIHVzZWQgYnkgaWNvbnMsIGxhYmVscyBhbmQgdG9vbGJhcnNcclxuJHh4eHNGb250U2l6ZTogMC41ZW07XHJcbiR4eHNGb250U2l6ZTogMC42MjVlbTtcclxuJHhzRm9udFNpemU6IDAuNzVlbTsgLy8gMTJweFxyXG4kc21Gb250U2l6ZTogMC44NzVlbTsgLy8gMTRweFxyXG4kbWVkRm9udFNpemU6IDFlbTsgLy8gMTZweFxyXG4kbGdGb250U2l6ZTogMS4xMjVlbTsgLy8gMThweFxyXG4keGxGb250U2l6ZTogMS4yNWVtOyAvLyAyMXB4XHJcbiR4eEZvbnRTaXplOiAxLjVlbTsgLy8gMjZweFxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IGZhbWlseSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzdHlsZXNcclxuJHNhbnNTZXJpZkZvbnQxOiBSb2JvdG8sIEFyaWFsLCBcIkF2ZW5pciBOZXh0XCIsIENhbGlicmksIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDI6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MzogTGF0bywgXCJTZWdvZSBVSVwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2VyaWZGb250MTogQmFza2VydmlsbGUsIEdlb3JnaWEsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgUGFsYXRpbm8sIHNlcmlmO1xyXG4kc2VyaWZGb250MjogRGlkb3QsIFwiQm9vayBBbnRpcXVhXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIHRleHQgc3R5bGVzICAgICAgICogLy9cclxuXHJcbkBtaXhpbiBub3JtYWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJvbGRUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkSXRhbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIG1hdCBpY29uIGFuaW1hdGlvbnMgLy9cclxuXHJcbkBtaXhpbiB0cmFuc0R1cmF0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuNzBzKSB7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxufVxyXG5cclxuQG1peGluIHRyYW5zT3JpZ2luKCR4T3JpZzogY2VudGVyLCAkeU9yaWc6IGNlbnRlciwgJHpPcmlnOiAwKSB7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNSb3RhdGUoJGRlZ3JlZTogMTgwZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zU2NhbGUoJHhTY2FsZTogMS41LCAkeVNjYWxlOiAxLjUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbjogMnMsICRjb3VudDogMSkge1xyXG4gIGFuaW1hdGlvbjogd2lnZ2xlICRkdXJhdGlvbiBlYXNlIDBzICRjb3VudDtcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHNwaW5cclxuQG1peGluIG1hdEljb25TcGluKCRkdXJhdGlvbiwgJGRlZ3JlZSwgJHhPcmlnLCAkeU9yaWcpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAvLyBGaXJlZm94L01vemlsbGEsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1vei1hcHBlYXJhbmNlOiBub25lKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICAvLyBFZGdlLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zUm90YXRlKCRkZWdyZWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gem9vbVxyXG5AbWl4aW4gbWF0SWNvblpvb20oJGR1cmF0aW9uLCAkeFNjYWxlLCAkeVNjYWxlKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1NjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gd2lnZ2xlXHJcbkBtaXhpbiBtYXRJY29uV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KSB7XHJcbiAgLy8gQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbiAqICRjb3VudCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1dpZ2dsZSgkZHVyYXRpb24sICRjb3VudCk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ3NyYy9zY3NzL2NvbW1vbic7XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiA4cHggOHB4IDBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5zaG93LXNjb3JlIHtcclxuICAudGVhbS1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLnNjb3JlIHtcclxuICAgICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGVhbS1jaXR5IHtcclxuICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkc21Gb250U2l6ZSk7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRlYW0tbmFtZSB7XHJcbiAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucXVhcnRlciB7XHJcbiAgICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJG1lZEZvbnRTaXplKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/showscores/show-score.component.ts":
/*!****************************************************!*\
  !*** ./src/app/showscores/show-score.component.ts ***!
  \****************************************************/
/*! exports provided: ShowScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowScoreComponent", function() { return ShowScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");



var ShowScoreComponent = /** @class */ (function () {
    function ShowScoreComponent(teamService) {
        this.teamService = teamService;
        this.teamsArr = [];
        this.loading = true;
        this.odds = 0;
    }
    ShowScoreComponent.prototype.ngOnInit = function () {
        // console.log('[show-score] ngOnInit()');
        // console.table(this.score);
        var _this = this;
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            // console.log('[show-score] ngOnInit() getTeams() SUCCESS');
            _this.loading = false;
            // this.odds = calculateOdds(this.teamsArr[this.score.visitTeam], this.teamsArr[this.score.homeTeam]);
        }, function (err) {
            console.error('[show-score] ngOnInit() getTeams() error: ' + err);
        });
    };
    ShowScoreComponent.prototype.showQuarter = function () {
        return !['F', 'OT'].includes(this.score.quarter);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowScoreComponent.prototype, "score", void 0);
    ShowScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'show-score',
            template: __webpack_require__(/*! ./show-score.component.html */ "./src/app/showscores/show-score.component.html"),
            styles: [__webpack_require__(/*! ./show-score.component.scss */ "./src/app/showscores/show-score.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], ShowScoreComponent);
    return ShowScoreComponent;
}());



/***/ }),

/***/ "./src/app/showscores/show-scores.component.html":
/*!*******************************************************!*\
  !*** ./src/app/showscores/show-scores.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"gameday-text\">\r\n    {{ !postseason ? gameDay : playoffGameDay }}\r\n  </div>\r\n  <div class=\"div-scroll\" [@listAnimations]=\"{ value: gamesArr.length, params: { stagger: '100ms' } }\">\r\n    <div *ngFor=\"let score of gamesArr.slice().reverse()\" (click)=\"getResults(score.id)\">\r\n      <mat-card class=\"scoreboard\" matRipple appMaterialElevation>\r\n        <show-score [score]=score></show-score>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/showscores/show-scores.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/showscores/show-scores.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\n.gameday-text {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1.125em;\n  font-style: italic;\n  font-weight: bold; }\n.div-scroll {\n  max-height: 562px;\n  overflow-y: auto; }\n.div-scroll mat-card:last-child {\n    margin-bottom: 14px; }\n.div-scroll .scoreboard {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: bold;\n    background-color: #dddddd;\n    cursor: pointer;\n    margin-bottom: 0px;\n    border-radius: 5px;\n    transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n.div-scroll .scoreboard:hover {\n      border-color: rgba(0, 0, 0, 0.8);\n      background-color: #eeeeee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Njb3Jlcy9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXHNjc3NcXF9jb21tb24uc2NzcyIsInNyYy9hcHAvc2hvd3Njb3Jlcy9DOlxcVXNlcnNcXEppbVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxuZ05GTC9zcmNcXGFwcFxcc2hvd3Njb3Jlc1xcc2hvdy1zY29yZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFZQSw4QkFBQTtBQWNBLDhCQUFBO0FBV0EsbUNBQUE7QUF5QkEsbUNBQUE7QUM1REE7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RURnREUsMkZBekI2RjtFQTBCN0Ysa0JBbkNrQjtFQW9DbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0FDL0NuQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtBQUZsQjtJQUtJLG1CQUFtQixFQUFBO0FBTHZCO0lENENFLDJGQXpCNkY7SUEwQjdGLGNBcENlO0lBcUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUNyQ2YseUJEWjBCO0lDYzFCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLCtEQUEwRCxFQUFBO0FBZjlEO01Ba0JNLGdDRHJCd0I7TUNzQnhCLHlCRHZCd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3dzY29yZXMvc2hvdy1zY29yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogQ29sb3IgZGVmaW5pdGlvbnMgICAgICogLy9cclxuXHJcbi8vICAgIE1haW4gY29sb3JcclxuJE5GTENvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcclxuJE5GTFRyYW5zOiByZ2JhKDAsIDEyOCwgMCwgMC4zKTtcclxuJE5GTExpbmtDb2xvcjogcmdiKDAsIDEyOCwgMCk7XHJcbiROZWFyV2hpdGU6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuJE5lYXJCbGFjazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kTGlnaHRHcmV5OiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgc2l6ZSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzaXplcywgdXNlZCBieSBpY29ucywgbGFiZWxzIGFuZCB0b29sYmFyc1xyXG4keHh4c0ZvbnRTaXplOiAwLjVlbTtcclxuJHh4c0ZvbnRTaXplOiAwLjYyNWVtO1xyXG4keHNGb250U2l6ZTogMC43NWVtOyAvLyAxMnB4XHJcbiRzbUZvbnRTaXplOiAwLjg3NWVtOyAvLyAxNHB4XHJcbiRtZWRGb250U2l6ZTogMWVtOyAvLyAxNnB4XHJcbiRsZ0ZvbnRTaXplOiAxLjEyNWVtOyAvLyAxOHB4XHJcbiR4bEZvbnRTaXplOiAxLjI1ZW07IC8vIDIxcHhcclxuJHh4Rm9udFNpemU6IDEuNWVtOyAvLyAyNnB4XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgZmFtaWx5IGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHN0eWxlc1xyXG4kc2Fuc1NlcmlmRm9udDE6IFJvYm90bywgQXJpYWwsIFwiQXZlbmlyIE5leHRcIiwgQ2FsaWJyaSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MjogXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQzOiBMYXRvLCBcIlNlZ29lIFVJXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzZXJpZkZvbnQxOiBCYXNrZXJ2aWxsZSwgR2VvcmdpYSwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBQYWxhdGlubywgc2VyaWY7XHJcbiRzZXJpZkZvbnQyOiBEaWRvdCwgXCJCb29rIEFudGlxdWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgdGV4dCBzdHlsZXMgICAgICAgKiAvL1xyXG5cclxuQG1peGluIG5vcm1hbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1peGluIGJvbGRJdGFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgbWF0IGljb24gYW5pbWF0aW9ucyAvL1xyXG5cclxuQG1peGluIHRyYW5zRHVyYXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC43MHMpIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNPcmlnaW4oJHhPcmlnOiBjZW50ZXIsICR5T3JpZzogY2VudGVyLCAkek9yaWc6IDApIHtcclxuICBmaWx0ZXI6IGJsdXIoMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1JvdGF0ZSgkZGVncmVlOiAxODBkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNTY2FsZSgkeFNjYWxlOiAxLjUsICR5U2NhbGU6IDEuNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNXaWdnbGUoJGR1cmF0aW9uOiAycywgJGNvdW50OiAxKSB7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgJGR1cmF0aW9uIGVhc2UgMHMgJGNvdW50O1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gc3BpblxyXG5AbWl4aW4gbWF0SWNvblNwaW4oJGR1cmF0aW9uLCAkZGVncmVlLCAkeE9yaWcsICR5T3JpZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gIC8vIEZpcmVmb3gvTW96aWxsYSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIC8vIEVkZ2UsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNSb3RhdGUoJGRlZ3JlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB6b29tXHJcbkBtaXhpbiBtYXRJY29uWm9vbSgkZHVyYXRpb24sICR4U2NhbGUsICR5U2NhbGUpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zU2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB3aWdnbGVcclxuQG1peGluIG1hdEljb25XaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpIHtcclxuICAvLyBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uICogJGNvdW50KTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3Njc3MvY29tbW9uJztcclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZ2FtZWRheS10ZXh0IHtcclxuICBAaW5jbHVkZSBib2xkSXRhbFRleHQoJGxnRm9udFNpemUpO1xyXG59XHJcblxyXG4uZGl2LXNjcm9sbCB7XHJcbiAgbWF4LWhlaWdodDogNTYycHg7IC8vIEZpdHMgNSBzY29yZSBjYXJkc1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gIG1hdC1jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gIC5zY29yZWJvYXJkIHtcclxuICAgIEBpbmNsdWRlIGJvbGRJdGFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0R3JleTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICRORkxDb2xvcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJE5lYXJCbGFjaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/showscores/show-scores.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/showscores/show-scores.component.ts ***!
  \*****************************************************/
/*! exports provided: ShowScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowScoresComponent", function() { return ShowScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/results/results-dialog.component */ "./src/app/dialog/results/results-dialog.component.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");







var ShowScoresComponent = /** @class */ (function () {
    function ShowScoresComponent(scheduleService, playoffService, dialog) {
        this.scheduleService = scheduleService;
        this.playoffService = playoffService;
        this.dialog = dialog;
        this.gamesArr = [];
        this.postseason = false;
    }
    ShowScoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.endOfSeason$.subscribe(function (data) { return _this.postseason = data; });
        this.scheduleService.currentGameDay$.subscribe(function (data) { return _this.gameDay = data; });
        this.playoffService.currentPlayoffGameDay$.subscribe(function (data) { return _this.playoffGameDay = data; });
    };
    ShowScoresComponent.prototype.ngDoCheck = function () {
        // console.log('[show-scores] ngDoCheck()');
        // console.log('[show-scores] ngDoCheck() postseason: ' + this.postseason);
        // console.log('[show-scores] ngDoCheck() playoffGameDay: ' + this.playoffGameDay);
        if (!this.postseason) {
            this.gamesArr = this.scheduleService.getGamesForDay(this.gameDay).filter(function (day) { return day.homeScore !== null; });
        }
        else {
            this.gamesArr = this.playoffService.getGamesForDay(this.playoffGameDay).filter(function (day) { return day.homeScore !== null; });
        }
    };
    ShowScoresComponent.prototype.openResultsDialog = function (id, playoffs) {
        var _this = this;
        if (playoffs === void 0) { playoffs = false; }
        var dialogRef = this.dialog.open(_dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ResultsDialogComponent"], {
            data: { id: id, playoffs: playoffs }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[show-scores] openResultsDialog() afterClosed() error: ' + err);
        });
    };
    ShowScoresComponent.prototype.getResults = function (id) {
        // console.log('[show-scores] getResults: ' + id);
        this.openResultsDialog(id, this.postseason);
    };
    ShowScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'show-scores',
            template: __webpack_require__(/*! ./show-scores.component.html */ "./src/app/showscores/show-scores.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]],
            styles: [__webpack_require__(/*! ./show-scores.component.scss */ "./src/app/showscores/show-scores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_4__["PlayoffService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ShowScoresComponent);
    return ShowScoresComponent;
}());



/***/ }),

/***/ "./src/app/standings/standings-division-expanded.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/standings/standings-division-expanded.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\" class=\"division\">\r\n  {{division}}\r\n  <table class=\"div-table\" width=\"100%\">\r\n    <thead>\r\n      <tr>\r\n        <td width=\"20%\"></td>\r\n        <td width=\"8%\">W</td>\r\n        <td width=\"8%\">L</td>\r\n        <td width=\"8%\" *ngIf=\"currentGame > 0\">PCT</td>\r\n        <td width=\"8%\" *ngIf=\"currentGame === 0\">Total</td>\r\n        <td width=\"8%\">PF</td>\r\n        <td width=\"8%\">PA</td>\r\n        <td width=\"8%\">Home</td>\r\n        <td width=\"8%\">Away</td>\r\n        <td width=\"8%\">Div</td>\r\n        <td width=\"8%\">{{division.indexOf('NFC') >= 0 ? 'NFC' : 'AFC'}}</td>\r\n        <td width=\"8%\">{{division.indexOf('AFC') >= 0 ? 'NFC' : 'AFC'}}</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr class=\"team-row\" *ngFor=\"let team of divisionTeams\" (click)=\"showTeam(team.abbrev)\">\r\n        <td class=\"team-info\">\r\n          <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n          <span class=\"team-city\">{{team.city}}</span>\r\n          <br>\r\n          <span class=\"team-name\">{{team.name}}</span>\r\n        </td>\r\n        <td>{{team.wins}}</td>\r\n        <td>{{team.losses}}</td>\r\n        <td *ngIf=\"currentGame > 0\">{{team.pct}}</td>\r\n        <td *ngIf=\"currentGame === 0\">{{team.total}}</td>\r\n        <td>{{team.pf}}</td>\r\n        <td>{{team.pa}}</td>\r\n        <td>{{team.homewins}}-{{team.homelosses}}</td>\r\n        <td>{{team.visitwins}}-{{team.visitlosses}}</td>\r\n        <td>{{team.divwins}}-{{team.divlosses}}</td>\r\n        <td>{{team.confwins}}-{{team.conflosses}}</td>\r\n        <td>{{team.othwins}}-{{team.othlosses}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<mat-card class=\"loading-well\" *ngIf=\"loading\">\r\n  <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n  <div class=\"loading-font\">&nbsp; Loading Expanded Standings &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/standings/standings-division-expanded.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/standings/standings-division-expanded.component.ts ***!
  \********************************************************************/
/*! exports provided: StandingsDivisionExpandedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsDivisionExpandedComponent", function() { return StandingsDivisionExpandedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _common_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/sort */ "./src/app/common/sort.ts");






var StandingsDivisionExpandedComponent = /** @class */ (function () {
    function StandingsDivisionExpandedComponent(router, teamService, scheduleService) {
        this.router = router;
        this.teamService = teamService;
        this.scheduleService = scheduleService;
        this.teamsArr = [];
        this.divisionTeams = [];
        this.currentGame = 0;
        this.loading = true;
    }
    StandingsDivisionExpandedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.currentGame$.subscribe(function (data) { return _this.currentGame = data; });
    };
    StandingsDivisionExpandedComponent.prototype.ngDoCheck = function () {
        // console.log('[standings-div-exp] ngDoCheck() division: ' + this.division);
        // this.teamsArr = this.teamService.getTeams().map(teams => teams);
        // this.divisionTeams = this.getTeamsForDivision(this.division);
        var _this = this;
        if (this.loading) {
            this.teamService.getTeams().subscribe(function (data) {
                _this.teamsArr = data;
                // console.log('[standings-div-exp] ngDoCheck() getTeams() SUCCESS');
                _this.loading = false;
            }, function (err) {
                console.error('[standings-div-exp] ngDoCheck() getTeams() error: ' + err);
            });
        }
        if (this.currentGame > 0) {
            this.divisionTeams = this.teamService.getTeamsForDivision(this.division).sort(_common_sort__WEBPACK_IMPORTED_MODULE_5__["sortDivision"]);
        }
        else {
            this.divisionTeams = this.teamService.getTeamsForDivision(this.division).sort(_common_sort__WEBPACK_IMPORTED_MODULE_5__["sortDivisionByTotal"]);
        }
    };
    StandingsDivisionExpandedComponent.prototype.showTeam = function (abbrev) {
        this.router.navigate(['/teams/' + abbrev]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StandingsDivisionExpandedComponent.prototype, "division", void 0);
    StandingsDivisionExpandedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'standings-division-expanded',
            template: __webpack_require__(/*! ./standings-division-expanded.component.html */ "./src/app/standings/standings-division-expanded.component.html"),
            styles: [__webpack_require__(/*! ./standings-division.component.scss */ "./src/app/standings/standings-division.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"]])
    ], StandingsDivisionExpandedComponent);
    return StandingsDivisionExpandedComponent;
}());



/***/ }),

/***/ "./src/app/standings/standings-division.component.html":
/*!*************************************************************!*\
  !*** ./src/app/standings/standings-division.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\" class=\"division\">\r\n  {{division}}\r\n  <table class=\"div-table\" width=\"100%\">\r\n    <thead>\r\n      <tr>\r\n        <td width=\"40%\"></td>\r\n        <td width=\"12%\">W</td>\r\n        <td width=\"12%\">L</td>\r\n        <td width=\"12%\" *ngIf=\"currentGame > 0\">PCT</td>\r\n        <td width=\"12%\" *ngIf=\"currentGame === 0\">Total</td>\r\n        <td width=\"12%\">PF</td>\r\n        <td width=\"12%\">PA</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr class=\"team-row\" *ngFor=\"let team of divisionTeams\" (click)=\"showTeam(team.abbrev)\">\r\n        <td class=\"team-info\">\r\n          <img src=\"/assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n          <span class=\"team-city\">{{team.city}}</span>\r\n          <br>\r\n          <span class=\"team-name\">{{team.name}}</span>\r\n        </td>\r\n        <td>{{team.wins}}</td>\r\n        <td>{{team.losses}}</td>\r\n        <td *ngIf=\"currentGame > 0\">{{team.pct}}</td>\r\n        <td *ngIf=\"currentGame === 0\">{{team.total}}</td>\r\n        <td>{{team.pf}}</td>\r\n        <td>{{team.pa}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<mat-card class=\"loading-well\" *ngIf=\"loading\">\r\n  <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n  <div class=\"loading-font\">&nbsp; Loading Standings &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/standings/standings-division.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/standings/standings-division.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\n.division {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n  text-align: center;\n  background: rgba(0, 128, 0, 0.5);\n  padding: 12px;\n  margin: 0px;\n  border-radius: 5px; }\n.division table {\n    border-collapse: collapse;\n    border-style: hidden; }\n.division table thead {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 0.875em;\n      font-style: normal;\n      font-weight: bold; }\n.division table td {\n      text-align: center;\n      border: 1px solid rgba(0, 0, 0, 0.2); }\n.division table.div-table {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 0.875em;\n      font-style: normal;\n      font-weight: normal;\n      background: url('/tryit/ngNFL/assets/images/whiteback.jpg');\n      border-radius: 5px; }\n.division table.div-table .team-row:hover {\n        border-color: rgba(0, 128, 0, 0.5);\n        background-color: rgba(0, 128, 0, 0.3); }\n.division table.div-table .team-row .team-info {\n        text-align: left;\n        white-space: nowrap; }\n.division table.div-table .team-row .team-info .logo {\n          float: left;\n          height: 40px; }\n.division table.div-table .team-row .team-info .team-city {\n          font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n          font-size: 1em;\n          font-style: normal;\n          font-weight: normal;\n          padding-left: 5px; }\n.division table.div-table .team-row .team-info .team-name {\n          font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n          font-size: 1.125em;\n          font-style: normal;\n          font-weight: bold;\n          padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhbmRpbmdzL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcc2Nzc1xcX2NvbW1vbi5zY3NzIiwic3JjL2FwcC9zdGFuZGluZ3MvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxhcHBcXHN0YW5kaW5nc1xcc3RhbmRpbmdzLWRpdmlzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdkO0VEZ0RFLDJGQXpCNkY7RUEwQjdGLGNBcENlO0VBcUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUNqRGpCLGtCQUFrQjtFQUNsQixnQ0RONkI7RUNPN0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtBQU5wQjtJQVNJLHlCQUF5QjtJQUN6QixvQkFBb0IsRUFBQTtBQVZ4QjtNRHlDRSwyRkFsQjZGO01BbUI3RixrQkE5QmtCO01BK0JsQixrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7QUM1Q25CO01BaUJNLGtCQUFrQjtNQUNsQixvQ0FBb0MsRUFBQTtBQWxCMUM7TURrQ0UsMkZBWDZGO01BWTdGLGtCQXZCa0I7TUF3QmxCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUNkZiwyREFBNkM7TUFDN0Msa0JBQWtCLEVBQUE7QUF4QnhCO1FBNEJVLGtDRC9CcUI7UUNnQ3JCLHNDRC9CcUIsRUFBQTtBQ0UvQjtRQWlDVSxnQkFBZ0I7UUFDaEIsbUJBQW1CLEVBQUE7QUFsQzdCO1VBcUNZLFdBQVc7VUFDWCxZQUFZLEVBQUE7QUF0Q3hCO1VEa0NFLDJGQVg2RjtVQVk3RixjQXRCZTtVQXVCZixrQkFBa0I7VUFDbEIsbUJBQW1CO1VDS1QsaUJBQWlCLEVBQUE7QUExQzdCO1VEeUNFLDJGQWxCNkY7VUFtQjdGLGtCQTVCa0I7VUE2QmxCLGtCQUFrQjtVQUNsQixpQkFBaUI7VUNFUCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YW5kaW5ncy9zdGFuZGluZ3MtZGl2aXNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogQ29sb3IgZGVmaW5pdGlvbnMgICAgICogLy9cclxuXHJcbi8vICAgIE1haW4gY29sb3JcclxuJE5GTENvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcclxuJE5GTFRyYW5zOiByZ2JhKDAsIDEyOCwgMCwgMC4zKTtcclxuJE5GTExpbmtDb2xvcjogcmdiKDAsIDEyOCwgMCk7XHJcbiROZWFyV2hpdGU6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuJE5lYXJCbGFjazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kTGlnaHRHcmV5OiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgc2l6ZSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzaXplcywgdXNlZCBieSBpY29ucywgbGFiZWxzIGFuZCB0b29sYmFyc1xyXG4keHh4c0ZvbnRTaXplOiAwLjVlbTtcclxuJHh4c0ZvbnRTaXplOiAwLjYyNWVtO1xyXG4keHNGb250U2l6ZTogMC43NWVtOyAvLyAxMnB4XHJcbiRzbUZvbnRTaXplOiAwLjg3NWVtOyAvLyAxNHB4XHJcbiRtZWRGb250U2l6ZTogMWVtOyAvLyAxNnB4XHJcbiRsZ0ZvbnRTaXplOiAxLjEyNWVtOyAvLyAxOHB4XHJcbiR4bEZvbnRTaXplOiAxLjI1ZW07IC8vIDIxcHhcclxuJHh4Rm9udFNpemU6IDEuNWVtOyAvLyAyNnB4XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIEZvbnQgZmFtaWx5IGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHN0eWxlc1xyXG4kc2Fuc1NlcmlmRm9udDE6IFJvYm90bywgQXJpYWwsIFwiQXZlbmlyIE5leHRcIiwgQ2FsaWJyaSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MjogXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQzOiBMYXRvLCBcIlNlZ29lIFVJXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzZXJpZkZvbnQxOiBCYXNrZXJ2aWxsZSwgR2VvcmdpYSwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBQYWxhdGlubywgc2VyaWY7XHJcbiRzZXJpZkZvbnQyOiBEaWRvdCwgXCJCb29rIEFudGlxdWFcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgdGV4dCBzdHlsZXMgICAgICAgKiAvL1xyXG5cclxuQG1peGluIG5vcm1hbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1peGluIGJvbGRJdGFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIE1peGlucyBmb3IgbWF0IGljb24gYW5pbWF0aW9ucyAvL1xyXG5cclxuQG1peGluIHRyYW5zRHVyYXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC43MHMpIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1zLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNPcmlnaW4oJHhPcmlnOiBjZW50ZXIsICR5T3JpZzogY2VudGVyLCAkek9yaWc6IDApIHtcclxuICBmaWx0ZXI6IGJsdXIoMCk7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1JvdGF0ZSgkZGVncmVlOiAxODBkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNTY2FsZSgkeFNjYWxlOiAxLjUsICR5U2NhbGU6IDEuNSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNXaWdnbGUoJGR1cmF0aW9uOiAycywgJGNvdW50OiAxKSB7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgJGR1cmF0aW9uIGVhc2UgMHMgJGNvdW50O1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gc3BpblxyXG5AbWl4aW4gbWF0SWNvblNwaW4oJGR1cmF0aW9uLCAkZGVncmVlLCAkeE9yaWcsICR5T3JpZykge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gIC8vIEZpcmVmb3gvTW96aWxsYSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbW96LWFwcGVhcmFuY2U6IG5vbmUpIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIC8vIEVkZ2UsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNSb3RhdGUoJGRlZ3JlZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB6b29tXHJcbkBtaXhpbiBtYXRJY29uWm9vbSgkZHVyYXRpb24sICR4U2NhbGUsICR5U2NhbGUpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zU2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiB3aWdnbGVcclxuQG1peGluIG1hdEljb25XaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpIHtcclxuICAvLyBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uICogJGNvdW50KTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3Njc3MvY29tbW9uJztcclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZGl2aXNpb24ge1xyXG4gIEBpbmNsdWRlIGJvbGRJdGFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkTkZMQ29sb3I7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW46IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KCRzbUZvbnRTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZGl2LXRhYmxlIHtcclxuICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkc21Gb250U2l6ZSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy93aGl0ZWJhY2suanBnKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgLnRlYW0tcm93IHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJE5GTENvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5GTFRyYW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlYW0taW5mbyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbS1jaXR5IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbm9ybWFsVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtLW5hbWUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBib2xkVGV4dCgkbGdGb250U2l6ZSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/standings/standings-division.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/standings/standings-division.component.ts ***!
  \***********************************************************/
/*! exports provided: StandingsDivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsDivisionComponent", function() { return StandingsDivisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _common_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/sort */ "./src/app/common/sort.ts");






var StandingsDivisionComponent = /** @class */ (function () {
    function StandingsDivisionComponent(router, teamService, scheduleService) {
        this.router = router;
        this.teamService = teamService;
        this.scheduleService = scheduleService;
        this.teamsArr = [];
        this.divisionTeams = [];
        this.currentGame = 0;
        this.loading = true;
    }
    StandingsDivisionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.currentGame$.subscribe(function (data) { return _this.currentGame = data; });
    };
    StandingsDivisionComponent.prototype.ngDoCheck = function () {
        // console.log('[standings-div] ngDoCheck() division: ' + this.division);
        // this.teamsArr = this.teamService.getTeams().map(teams => teams);
        // this.divisionTeams = this.getTeamsForDivision(this.division);
        var _this = this;
        if (this.loading) {
            this.teamService.getTeams().subscribe(function (data) {
                _this.teamsArr = data;
                // console.log('[standings-div] ngDoCheck() getTeams() SUCCESS');
                _this.loading = false;
            }, function (err) {
                console.error('[standings-div] ngDoCheck() getTeams() error: ' + err);
            });
        }
        if (this.currentGame > 0) {
            this.divisionTeams = this.teamService.getTeamsForDivision(this.division).sort(_common_sort__WEBPACK_IMPORTED_MODULE_5__["sortDivision"]);
        }
        else {
            this.divisionTeams = this.teamService.getTeamsForDivision(this.division).sort(_common_sort__WEBPACK_IMPORTED_MODULE_5__["sortDivisionByTotal"]);
        }
    };
    StandingsDivisionComponent.prototype.showTeam = function (abbrev) {
        this.router.navigate(['/teams/' + abbrev]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StandingsDivisionComponent.prototype, "division", void 0);
    StandingsDivisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'standings-division',
            template: __webpack_require__(/*! ./standings-division.component.html */ "./src/app/standings/standings-division.component.html"),
            styles: [__webpack_require__(/*! ./standings-division.component.scss */ "./src/app/standings/standings-division.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _service_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"]])
    ], StandingsDivisionComponent);
    return StandingsDivisionComponent;
}());



/***/ }),

/***/ "./src/app/standings/standings.component.html":
/*!****************************************************!*\
  !*** ./src/app/standings/standings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!loading\">\r\n  <div class=\"standings-text\">\r\n    Standings\r\n  </div>\r\n  <mat-tab-group mat-stretch-tabs>\r\n    <mat-tab label=\"Standard\">\r\n      <div id=\"standard\" fxLayout=\"row wrap\">\r\n        <div class=\"div-body\" fxFlex.lt-lg=\"calc(100% - 4px)\" fxFlex.gt-md=\"calc(50% - 4px)\" *ngFor=\"let division of divisions\">\r\n          <standings-division [division]=\"division\"></standings-division>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Expanded\">\r\n      <div id=\"expanded\" fxLayout=\"column\">\r\n        <div class=\"div-body\" *ngFor=\"let division of divisions\">\r\n          <standings-division-expanded [division]=\"division\"></standings-division-expanded>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n\r\n<mat-card class=\"loading-well\" *ngIf=\"loading\">\r\n  <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n  <div class=\"loading-font\">&nbsp; Loading Standings &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/standings/standings.component.scss":
/*!****************************************************!*\
  !*** ./src/app/standings/standings.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\nmat-card .standings-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 5px; }\nmat-card mat-tab-group {\n    background-color: #eeeeee;\n    border-radius: 5px;\n    padding: 5px; }\nmat-card mat-tab-group .div-body {\n      margin: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhbmRpbmdzL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcc2Nzc1xcX2NvbW1vbi5zY3NzIiwic3JjL2FwcC9zdGFuZGluZ3MvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxhcHBcXHN0YW5kaW5nc1xcc3RhbmRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUZkO0lEcURFLDJGQXpCNkY7SUEwQjdGLGtCQW5Da0I7SUFvQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUNsRGYsZUFBZSxFQUFBO0FBTm5CO0lBVUkseUJETDBCO0lDTTFCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7QUFaaEI7TUFlTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFuZGluZ3Mvc3RhbmRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIENvbG9yIGRlZmluaXRpb25zICAgICAqIC8vXHJcblxyXG4vLyAgICBNYWluIGNvbG9yXHJcbiRORkxDb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XHJcbiRORkxUcmFuczogcmdiYSgwLCAxMjgsIDAsIDAuMyk7XHJcbiRORkxMaW5rQ29sb3I6IHJnYigwLCAxMjgsIDApO1xyXG4kTmVhcldoaXRlOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiROZWFyQmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJExpZ2h0R3JleTogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IHNpemUgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc2l6ZXMsIHVzZWQgYnkgaWNvbnMsIGxhYmVscyBhbmQgdG9vbGJhcnNcclxuJHh4eHNGb250U2l6ZTogMC41ZW07XHJcbiR4eHNGb250U2l6ZTogMC42MjVlbTtcclxuJHhzRm9udFNpemU6IDAuNzVlbTsgLy8gMTJweFxyXG4kc21Gb250U2l6ZTogMC44NzVlbTsgLy8gMTRweFxyXG4kbWVkRm9udFNpemU6IDFlbTsgLy8gMTZweFxyXG4kbGdGb250U2l6ZTogMS4xMjVlbTsgLy8gMThweFxyXG4keGxGb250U2l6ZTogMS4yNWVtOyAvLyAyMXB4XHJcbiR4eEZvbnRTaXplOiAxLjVlbTsgLy8gMjZweFxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IGZhbWlseSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzdHlsZXNcclxuJHNhbnNTZXJpZkZvbnQxOiBSb2JvdG8sIEFyaWFsLCBcIkF2ZW5pciBOZXh0XCIsIENhbGlicmksIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDI6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MzogTGF0bywgXCJTZWdvZSBVSVwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2VyaWZGb250MTogQmFza2VydmlsbGUsIEdlb3JnaWEsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgUGFsYXRpbm8sIHNlcmlmO1xyXG4kc2VyaWZGb250MjogRGlkb3QsIFwiQm9vayBBbnRpcXVhXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIHRleHQgc3R5bGVzICAgICAgICogLy9cclxuXHJcbkBtaXhpbiBub3JtYWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJvbGRUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkSXRhbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIG1hdCBpY29uIGFuaW1hdGlvbnMgLy9cclxuXHJcbkBtaXhpbiB0cmFuc0R1cmF0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuNzBzKSB7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxufVxyXG5cclxuQG1peGluIHRyYW5zT3JpZ2luKCR4T3JpZzogY2VudGVyLCAkeU9yaWc6IGNlbnRlciwgJHpPcmlnOiAwKSB7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNSb3RhdGUoJGRlZ3JlZTogMTgwZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zU2NhbGUoJHhTY2FsZTogMS41LCAkeVNjYWxlOiAxLjUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbjogMnMsICRjb3VudDogMSkge1xyXG4gIGFuaW1hdGlvbjogd2lnZ2xlICRkdXJhdGlvbiBlYXNlIDBzICRjb3VudDtcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHNwaW5cclxuQG1peGluIG1hdEljb25TcGluKCRkdXJhdGlvbiwgJGRlZ3JlZSwgJHhPcmlnLCAkeU9yaWcpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAvLyBGaXJlZm94L01vemlsbGEsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1vei1hcHBlYXJhbmNlOiBub25lKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICAvLyBFZGdlLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zUm90YXRlKCRkZWdyZWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gem9vbVxyXG5AbWl4aW4gbWF0SWNvblpvb20oJGR1cmF0aW9uLCAkeFNjYWxlLCAkeVNjYWxlKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1NjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gd2lnZ2xlXHJcbkBtaXhpbiBtYXRJY29uV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KSB7XHJcbiAgLy8gQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbiAqICRjb3VudCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1dpZ2dsZSgkZHVyYXRpb24sICRjb3VudCk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ3NyYy9zY3NzL2NvbW1vbic7XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgLnN0YW5kaW5ncy10ZXh0IHtcclxuICAgIEBpbmNsdWRlIGJvbGRJdGFsVGV4dCgkbGdGb250U2l6ZSk7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICBtYXQtdGFiLWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICROZWFyV2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgLmRpdi1ib2R5IHtcclxuICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/standings/standings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/standings/standings.component.ts ***!
  \**************************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");



var StandingsComponent = /** @class */ (function () {
    function StandingsComponent(teamService) {
        this.teamService = teamService;
        this.divisions = [];
        this.teamsArr = [];
        this.loading = true;
    }
    StandingsComponent.prototype.ngOnInit = function () {
        // console.log('[standings] ngOnInit()');
        var _this = this;
        // this.teamsArr = this.teamService.getTeams().map(teams => teams);
        // this.divisions = ['AFC West', 'NFC West', 'AFC South', 'NFC South', 'AFC North', 'NFC North', 'AFC East', 'NFC East'];
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            // console.log('[standings] ngOnInit() getTeams() SUCCESS');
            _this.teamsArr.forEach(function (team) {
                if (_this.divisions.indexOf(team.division) < 0) {
                    _this.divisions.push(team.division);
                }
            });
            _this.loading = false;
            window.scrollTo(0, 0);
        }, function (err) {
            console.error('[standings] ngOnInit() getTeams() error: ' + err);
        });
    };
    StandingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'standings',
            template: __webpack_require__(/*! ./standings.component.html */ "./src/app/standings/standings.component.html"),
            styles: [__webpack_require__(/*! ./standings.component.scss */ "./src/app/standings/standings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./src/app/teams/team-details.component.html":
/*!***************************************************!*\
  !*** ./src/app/teams/team-details.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card class=\"team-card\">\r\n    <div fxLayout=\"column\">\r\n      <div class=\"banner-border\" [ngStyle]=\"{'background-color':'#'+team.lightcolor}\">&nbsp;</div>\r\n      <div class=\"banner-center\" [ngStyle]=\"{'background-color':'#'+team.darkcolor}\">{{team?.city}} {{team?.name}}</div>\r\n      <div class=\"banner-border\" [ngStyle]=\"{'background-color':'#'+team.lightcolor}\">{{team?.division}}</div>\r\n    </div>\r\n  </mat-card>\r\n  <mat-card class=\"team-card\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <div class=\"image-container\"><img src=\"/assets/images/{{team?.abbrev}}-L.png\" [alt]=\"team?.name\"></div>\r\n      <div class=\"image-container\" [ngClass]=\"{ 'super-bowl-trophy': (teamIdx === SuperBowlChamp) }\"\r\n        fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n        <img src=\"/assets/images/{{team?.abbrev}}.png\" [ngClass]=\"{ 'super-bowl-champ': (teamIdx === SuperBowlChamp) }\" [alt]=\"team?.name\">\r\n      </div>\r\n      <div class=\"image-container\"><img src=\"/assets/images/{{team?.abbrev}}-R.png\" [alt]=\"team?.name\"></div>\r\n    </div>\r\n  </mat-card>\r\n  <mat-card class=\"team-card\">\r\n    <table width=\"100%\">\r\n      <tr [ngStyle]=\"{'background-color':'#'+team.lightcolor}\">\r\n        <td>QB</td>\r\n        <td>RB</td>\r\n        <td>WR</td>\r\n        <td>OL</td>\r\n        <td>DL</td>\r\n        <td>LB</td>\r\n        <td>DB</td>\r\n        <td>ST</td>\r\n        <td>CO</td>\r\n        <td>Total</td>\r\n      </tr>\r\n      <tr [ngStyle]=\"{'color':'white','background-color':'#'+team.darkcolor}\">\r\n        <td>{{team.qb}}</td>\r\n        <td>{{team.rb}}</td>\r\n        <td>{{team.wr}}</td>\r\n        <td>{{team.ol}}</td>\r\n        <td>{{team.dl}}</td>\r\n        <td>{{team.lb}}</td>\r\n        <td>{{team.db}}</td>\r\n        <td>{{team.st}}</td>\r\n        <td>{{team.co}}</td>\r\n        <td>{{total}}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-card>\r\n  <mat-card class=\"team-card\">\r\n    <table width=\"100%\">\r\n      <tr [ngStyle]=\"{'background-color':'#'+team.lightcolor}\">\r\n        <td width=\"25%\">Wins</td>\r\n        <td width=\"25%\">Losses</td>\r\n        <td width=\"25%\">PF</td>\r\n        <td width=\"25%\">PA</td>\r\n      </tr>\r\n      <tr [ngStyle]=\"{'color':'white','background-color':'#'+team.darkcolor}\">\r\n        <td>{{team.wins}}</td>\r\n        <td>{{team.losses}}</td>\r\n        <td>{{team.pf}}</td>\r\n        <td>{{team.pa}}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-card>\r\n</mat-card>\r\n<team-schedule></team-schedule>\r\n"

/***/ }),

/***/ "./src/app/teams/team-details.component.scss":
/*!***************************************************!*\
  !*** ./src/app/teams/team-details.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\nmat-card .team-card {\n    margin: 4px;\n    background-color: #dddddd; }\nmat-card .team-card .banner-border {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 1em;\n      font-style: normal;\n      font-weight: bold;\n      text-align: center;\n      margin: 2px 0px;\n      padding: 2px 0px; }\nmat-card .team-card .banner-center {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 1.5em;\n      font-style: normal;\n      font-weight: bold;\n      text-align: center;\n      color: #eeeeee; }\nmat-card .team-card .image-container {\n      margin: 8px; }\nmat-card .team-card .super-bowl-trophy {\n      width: 100px;\n      height: 116px;\n      background-image: url('/tryit/ngNFL/assets/images/Trophy.png'); }\nmat-card .team-card .super-bowl-trophy .super-bowl-champ {\n        margin-top: 35px;\n        width: 45%; }\nmat-card .team-card td {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 0.875em;\n      font-style: normal;\n      font-weight: bold;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3RlYW1zL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFx0ZWFtc1xcdGVhbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUZkO0lBS0ksV0FBVztJQUNYLHlCREMwQixFQUFBO0FDUDlCO01EOENFLDJGQWxCNkY7TUFtQjdGLGNBN0JlO01BOEJmLGtCQUFrQjtNQUNsQixpQkFBaUI7TUN2Q2Isa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtBQVp0QjtNRDhDRSwyRkFsQjZGO01BbUI3RixnQkExQmdCO01BMkJoQixrQkFBa0I7TUFDbEIsaUJBQWlCO01DaENiLGtCQUFrQjtNQUNsQixjRGJ3QixFQUFBO0FDTDlCO01Bc0JNLFdBQVcsRUFBQTtBQXRCakI7TUEwQk0sWUFBWTtNQUNaLGFBQWE7TUFDYiw4REFBa0QsRUFBQTtBQTVCeEQ7UUE4QlEsZ0JBQWdCO1FBQ2hCLFVBQVUsRUFBQTtBQS9CbEI7TUQ4Q0UsMkZBbEI2RjtNQW1CN0Ysa0JBOUJrQjtNQStCbEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQ1piLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVhbXMvdGVhbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyAqIENvbG9yIGRlZmluaXRpb25zICAgICAqIC8vXHJcblxyXG4vLyAgICBNYWluIGNvbG9yXHJcbiRORkxDb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XHJcbiRORkxUcmFuczogcmdiYSgwLCAxMjgsIDAsIDAuMyk7XHJcbiRORkxMaW5rQ29sb3I6IHJnYigwLCAxMjgsIDApO1xyXG4kTmVhcldoaXRlOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiROZWFyQmxhY2s6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJExpZ2h0R3JleTogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IHNpemUgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc2l6ZXMsIHVzZWQgYnkgaWNvbnMsIGxhYmVscyBhbmQgdG9vbGJhcnNcclxuJHh4eHNGb250U2l6ZTogMC41ZW07XHJcbiR4eHNGb250U2l6ZTogMC42MjVlbTtcclxuJHhzRm9udFNpemU6IDAuNzVlbTsgLy8gMTJweFxyXG4kc21Gb250U2l6ZTogMC44NzVlbTsgLy8gMTRweFxyXG4kbWVkRm9udFNpemU6IDFlbTsgLy8gMTZweFxyXG4kbGdGb250U2l6ZTogMS4xMjVlbTsgLy8gMThweFxyXG4keGxGb250U2l6ZTogMS4yNWVtOyAvLyAyMXB4XHJcbiR4eEZvbnRTaXplOiAxLjVlbTsgLy8gMjZweFxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBGb250IGZhbWlseSBkZWZpbml0aW9ucyAqIC8vXHJcblxyXG4vLyAgICBTdGFuZGFyZCBzdHlsZXNcclxuJHNhbnNTZXJpZkZvbnQxOiBSb2JvdG8sIEFyaWFsLCBcIkF2ZW5pciBOZXh0XCIsIENhbGlicmksIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDI6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiRzYW5zU2VyaWZGb250MzogTGF0bywgXCJTZWdvZSBVSVwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2VyaWZGb250MTogQmFza2VydmlsbGUsIEdlb3JnaWEsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgUGFsYXRpbm8sIHNlcmlmO1xyXG4kc2VyaWZGb250MjogRGlkb3QsIFwiQm9vayBBbnRpcXVhXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIHRleHQgc3R5bGVzICAgICAgICogLy9cclxuXHJcbkBtaXhpbiBub3JtYWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGJvbGRUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkSXRhbFRleHQoJGZvbnRTaXplOiAkbWVkRm9udFNpemUpIHtcclxuICBmb250LWZhbWlseTogJHNhbnNTZXJpZkZvbnQxO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBNaXhpbnMgZm9yIG1hdCBpY29uIGFuaW1hdGlvbnMgLy9cclxuXHJcbkBtaXhpbiB0cmFuc0R1cmF0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuNzBzKSB7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxufVxyXG5cclxuQG1peGluIHRyYW5zT3JpZ2luKCR4T3JpZzogY2VudGVyLCAkeU9yaWc6IGNlbnRlciwgJHpPcmlnOiAwKSB7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG5cclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJHhPcmlnICR5T3JpZyAkek9yaWc7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNSb3RhdGUoJGRlZ3JlZTogMTgwZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zU2NhbGUoJHhTY2FsZTogMS41LCAkeVNjYWxlOiAxLjUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zV2lnZ2xlKCRkdXJhdGlvbjogMnMsICRjb3VudDogMSkge1xyXG4gIGFuaW1hdGlvbjogd2lnZ2xlICRkdXJhdGlvbiBlYXNlIDBzICRjb3VudDtcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICAgIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHNwaW5cclxuQG1peGluIG1hdEljb25TcGluKCRkdXJhdGlvbiwgJGRlZ3JlZSwgJHhPcmlnLCAkeU9yaWcpIHtcclxuICBAaW5jbHVkZSB0cmFuc0R1cmF0aW9uKHRyYW5zZm9ybSwgJGR1cmF0aW9uKTtcclxuICAvLyBGaXJlZm94L01vemlsbGEsIGFkZCAxIHRvIHRoZSB5T3JpZ1xyXG4gIEBzdXBwb3J0cyAoLW1vei1hcHBlYXJhbmNlOiBub25lKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICAvLyBFZGdlLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnICsgMSk7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRyYW5zT3JpZ2luKCR4T3JpZywgJHlPcmlnKTtcclxuICAmOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIHRyYW5zUm90YXRlKCRkZWdyZWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gem9vbVxyXG5AbWl4aW4gbWF0SWNvblpvb20oJGR1cmF0aW9uLCAkeFNjYWxlLCAkeVNjYWxlKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1NjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4aW4gZm9yIGljb24gd2lnZ2xlXHJcbkBtaXhpbiBtYXRJY29uV2lnZ2xlKCRkdXJhdGlvbiwgJGNvdW50KSB7XHJcbiAgLy8gQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbiAqICRjb3VudCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1dpZ2dsZSgkZHVyYXRpb24sICRjb3VudCk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ3NyYy9zY3NzL2NvbW1vbic7XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgLnRlYW0tY2FyZCB7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodEdyZXk7XHJcblxyXG4gICAgLmJhbm5lci1ib3JkZXIge1xyXG4gICAgICBAaW5jbHVkZSBib2xkVGV4dCgkbWVkRm9udFNpemUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMnB4IDBweDtcclxuICAgICAgcGFkZGluZzogMnB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyLWNlbnRlciB7XHJcbiAgICAgIEBpbmNsdWRlIGJvbGRUZXh0KCR4eEZvbnRTaXplKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1cGVyLWJvd2wtdHJvcGh5IHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDExNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1Ryb3BoeS5wbmcnKTtcclxuICAgICAgLnN1cGVyLWJvd2wtY2hhbXAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgQGluY2x1ZGUgYm9sZFRleHQoJHNtRm9udFNpemUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/teams/team-details.component.ts":
/*!*************************************************!*\
  !*** ./src/app/teams/team-details.component.ts ***!
  \*************************************************/
/*! exports provided: TeamDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsComponent", function() { return TeamDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/playoff.service */ "./src/app/service/playoff.service.ts");





var TeamDetailsComponent = /** @class */ (function () {
    function TeamDetailsComponent(teamService, playoffService, route) {
        this.teamService = teamService;
        this.playoffService = playoffService;
        this.route = route;
    }
    TeamDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.teamIdx = _this.teamService.getTeamIndex(params['abbrev']);
            _this.team = _this.teamService.getTeam(params['abbrev']);
            _this.total = _this.team.qb + _this.team.rb + _this.team.wr + _this.team.ol +
                _this.team.dl + _this.team.lb + _this.team.db + _this.team.st + _this.team.co;
        });
        this.playoffService.SuperBowlChamp$.subscribe(function (data) { return _this.SuperBowlChamp = data; });
    };
    TeamDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'team-details',
            template: __webpack_require__(/*! ./team-details.component.html */ "./src/app/teams/team-details.component.html"),
            styles: [__webpack_require__(/*! ./team-details.component.scss */ "./src/app/teams/team-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_4__["PlayoffService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TeamDetailsComponent);
    return TeamDetailsComponent;
}());



/***/ }),

/***/ "./src/app/teams/team-list.component.html":
/*!************************************************!*\
  !*** ./src/app/teams/team-list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"team-head-text\">\r\n    NFL Teams\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\"\r\n    [@listAnimations]=\"{ value: teamsArr.length, params: { stagger: '50ms' } }\">\r\n    <div fxFlex.gt-xs=\"50%\" fxFlex.gt-md=\"25%\" *ngFor=\"let team of teamsArr\">\r\n      <div class=\"team-container\" (click)=\"showTeam(team.abbrev)\"\r\n        [ngStyle]=\"{'color':'#'+team.lightcolor, 'background-color':'#'+team.darkcolor}\">\r\n        <div class=\"team-info\">\r\n          <img src=\"./assets/images/{{team.abbrev}}.png\" class=\"logo\">\r\n          <span>{{team.city}}<br>{{team.name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/teams/team-list.component.scss":
/*!************************************************!*\
  !*** ./src/app/teams/team-list.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\n.team-head-text {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1.125em;\n  font-style: italic;\n  font-weight: bold;\n  margin-top: 5px; }\n.team-container {\n  font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n  text-shadow: 2px 2px 0 black;\n  cursor: pointer;\n  margin: 4px;\n  padding: 1px 1px 5px;\n  border-radius: 10px;\n  min-width: 190px; }\n.team-container .team-info {\n    margin: 5px; }\n.team-container .team-info .logo {\n      float: left;\n      margin-right: 5px;\n      height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3RlYW1zL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFx0ZWFtc1xcdGVhbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBWUEsOEJBQUE7QUFjQSw4QkFBQTtBQVdBLG1DQUFBO0FBeUJBLG1DQUFBO0FDNURBO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdkO0VEZ0RFLDJGQXpCNkY7RUEwQjdGLGtCQW5Da0I7RUFvQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUNqRGpCLGVBQWUsRUFBQTtBQUdqQjtFRDJDRSwyRkF6QjZGO0VBMEI3RixjQXBDZTtFQXFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VDNUNqQiw0QkFBb0M7RUFDcEMsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBUGxCO0lBWUksV0FBVyxFQUFBO0FBWmY7TUFlTSxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi50ZWFtLWhlYWQtdGV4dCB7XHJcbiAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRsZ0ZvbnRTaXplKTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50ZWFtLWNvbnRhaW5lciB7XHJcbiAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsMCwwLDEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDRweDtcclxuICBwYWRkaW5nOiAxcHggMXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgLy8gbWF4LXdpZHRoOiAyNDBweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRlYW0taW5mbyB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/teams/team-list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teams/team-list.component.ts ***!
  \**********************************************/
/*! exports provided: TeamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListComponent", function() { return TeamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");





var TeamListComponent = /** @class */ (function () {
    function TeamListComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
        this.teamsArr = [];
        this.loading = true;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        // this.teamsArr = this.teamService.getTeams().map(teams => teams);
        var _this = this;
        this.teamService.getTeams().subscribe(function (data) {
            _this.teamsArr = data;
            // console.log('[team-list] ngOnInit() getTeams() SUCCESS');
            _this.loading = false;
        }, function (err) {
            console.error('[team-list] ngOnInit() getTeams() error: ' + err);
        });
    };
    TeamListComponent.prototype.showTeam = function (abbrev) {
        this.router.navigate(['/teams/' + abbrev]);
    };
    TeamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'team-list',
            template: __webpack_require__(/*! ./team-list.component.html */ "./src/app/teams/team-list.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_4__["listAnimation"]],
            styles: [__webpack_require__(/*! ./team-list.component.scss */ "./src/app/teams/team-list.component.scss")]
        })
        // background-color: {{team.darkcolor}};
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "./src/app/teams/team-schedule.component.html":
/*!****************************************************!*\
  !*** ./src/app/teams/team-schedule.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!loading\">\r\n  <div class=\"schedule\">\r\n    <div class=\"schedule-text\">\r\n      {{team.city}} {{team.name}} Schedule\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\"\r\n      [@listAnimations]=\"{ value: teamSchedule.length, params: { stagger: '100ms' } }\">\r\n      <div fxFlex.gt-xs=\"50%\" fxFlex.gt-md=\"25%\" *ngFor=\"let score of teamSchedule\"\r\n        (click)=\"getMatchup(score.id)\">\r\n        <mat-card class=\"gameday\" matRipple appMaterialElevation>\r\n          <div class=\"gameday-text\">\r\n            {{score.gameday}}\r\n          </div>\r\n          <show-score [score]=score></show-score>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex.gt-xs=\"50%\" fxFlex.gt-md=\"25%\" *ngFor=\"let score of playoffSchedule\"\r\n        (click)=\"getMatchup(score.id, true)\">\r\n        <mat-card class=\"gameday\" matRipple appMaterialElevation>\r\n          <div class=\"gameday-text\">\r\n            {{score.gameday}}\r\n          </div>\r\n          <show-score [score]=score></show-score>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card class=\"loading-well\" *ngIf=\"loading\">\r\n  <div class=\"loading-image\"><img src=\"/assets/images/loading.gif\" height=\"40px\"></div>\r\n  <div class=\"loading-font\">&nbsp; Loading Team Schedule &hellip;</div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/teams/team-schedule.component.scss":
/*!****************************************************!*\
  !*** ./src/app/teams/team-schedule.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************/\n/*****************************/\n/*****************************/\n/**********************************/\n/**********************************/\nmat-card {\n  margin: 12px;\n  padding: 8px; }\nmat-card .schedule .schedule-text {\n    font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 1.125em;\n    font-style: italic;\n    font-weight: bold;\n    margin-top: 5px; }\nmat-card .schedule .gameday {\n    background-color: #dddddd;\n    cursor: pointer;\n    margin: 6px;\n    transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1); }\nmat-card .schedule .gameday:hover {\n      border-color: rgba(0, 0, 0, 0.8);\n      background-color: #eeeeee; }\nmat-card .schedule .gameday .gameday-text {\n      font-family: Roboto, Arial, \"Avenir Next\", Calibri, \"Helvetica Neue\", Helvetica, sans-serif;\n      font-size: 1em;\n      font-style: italic;\n      font-weight: bold;\n      margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdORkwvc3JjXFxzY3NzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3RlYW1zL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nTkZML3NyY1xcYXBwXFx0ZWFtc1xcdGVhbS1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQVlBLDhCQUFBO0FBY0EsOEJBQUE7QUFXQSxtQ0FBQTtBQXlCQSxtQ0FBQTtBQzVEQTtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFGZDtJRHFERSwyRkF6QjZGO0lBMEI3RixrQkFuQ2tCO0lBb0NsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lDakRiLGVBQWUsRUFBQTtBQVByQjtJQVdNLHlCREp3QjtJQ0t4QixlQUFlO0lBQ2YsV0FBVztJQUNYLCtEQUEwRCxFQUFBO0FBZGhFO01BaUJRLGdDRFhzQjtNQ1l0Qix5QkRic0IsRUFBQTtBQ0w5QjtNRHFERSwyRkF6QjZGO01BMEI3RixjQXBDZTtNQXFDZixrQkFBa0I7TUFDbEIsaUJBQWlCO01DakNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVhbXMvdGVhbS1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gKiBDb2xvciBkZWZpbml0aW9ucyAgICAgKiAvL1xyXG5cclxuLy8gICAgTWFpbiBjb2xvclxyXG4kTkZMQ29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xyXG4kTkZMVHJhbnM6IHJnYmEoMCwgMTI4LCAwLCAwLjMpO1xyXG4kTkZMTGlua0NvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxuJE5lYXJXaGl0ZTogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4kTmVhckJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRMaWdodEdyZXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBzaXplIGRlZmluaXRpb25zICogLy9cclxuXHJcbi8vICAgIFN0YW5kYXJkIHNpemVzLCB1c2VkIGJ5IGljb25zLCBsYWJlbHMgYW5kIHRvb2xiYXJzXHJcbiR4eHhzRm9udFNpemU6IDAuNWVtO1xyXG4keHhzRm9udFNpemU6IDAuNjI1ZW07XHJcbiR4c0ZvbnRTaXplOiAwLjc1ZW07IC8vIDEycHhcclxuJHNtRm9udFNpemU6IDAuODc1ZW07IC8vIDE0cHhcclxuJG1lZEZvbnRTaXplOiAxZW07IC8vIDE2cHhcclxuJGxnRm9udFNpemU6IDEuMTI1ZW07IC8vIDE4cHhcclxuJHhsRm9udFNpemU6IDEuMjVlbTsgLy8gMjFweFxyXG4keHhGb250U2l6ZTogMS41ZW07IC8vIDI2cHhcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vICogRm9udCBmYW1pbHkgZGVmaW5pdGlvbnMgKiAvL1xyXG5cclxuLy8gICAgU3RhbmRhcmQgc3R5bGVzXHJcbiRzYW5zU2VyaWZGb250MTogUm9ib3RvLCBBcmlhbCwgXCJBdmVuaXIgTmV4dFwiLCBDYWxpYnJpLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNhbnNTZXJpZkZvbnQyOiBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4kc2Fuc1NlcmlmRm9udDM6IExhdG8sIFwiU2Vnb2UgVUlcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuJHNlcmlmRm9udDE6IEJhc2tlcnZpbGxlLCBHZW9yZ2lhLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFBhbGF0aW5vLCBzZXJpZjtcclxuJHNlcmlmRm9udDI6IERpZG90LCBcIkJvb2sgQW50aXF1YVwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciB0ZXh0IHN0eWxlcyAgICAgICAqIC8vXHJcblxyXG5AbWl4aW4gbm9ybWFsVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBib2xkVGV4dCgkZm9udFNpemU6ICRtZWRGb250U2l6ZSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Fuc1NlcmlmRm9udDE7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWl4aW4gYm9sZEl0YWxUZXh0KCRmb250U2l6ZTogJG1lZEZvbnRTaXplKSB7XHJcbiAgZm9udC1mYW1pbHk6ICRzYW5zU2VyaWZGb250MTtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gTWl4aW5zIGZvciBtYXQgaWNvbiBhbmltYXRpb25zIC8vXHJcblxyXG5AbWl4aW4gdHJhbnNEdXJhdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjcwcykge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtbXMtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uO1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc09yaWdpbigkeE9yaWc6IGNlbnRlciwgJHlPcmlnOiBjZW50ZXIsICR6T3JpZzogMCkge1xyXG4gIGZpbHRlcjogYmx1cigwKTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICR4T3JpZyAkeU9yaWcgJHpPcmlnO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeE9yaWcgJHlPcmlnICR6T3JpZztcclxufVxyXG5cclxuQG1peGluIHRyYW5zUm90YXRlKCRkZWdyZWU6IDE4MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1NjYWxlKCR4U2NhbGU6IDEuNSwgJHlTY2FsZTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4U2NhbGUsICR5U2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHhTY2FsZSwgJHlTY2FsZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc1dpZ2dsZSgkZHVyYXRpb246IDJzLCAkY291bnQ6IDEpIHtcclxuICBhbmltYXRpb246IHdpZ2dsZSAkZHVyYXRpb24gZWFzZSAwcyAkY291bnQ7XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgICAwJSwxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gICAgMCUsMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNaXhpbiBmb3IgaWNvbiBzcGluXHJcbkBtaXhpbiBtYXRJY29uU3BpbigkZHVyYXRpb24sICRkZWdyZWUsICR4T3JpZywgJHlPcmlnKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNEdXJhdGlvbih0cmFuc2Zvcm0sICRkdXJhdGlvbik7XHJcbiAgLy8gRmlyZWZveC9Nb3ppbGxhLCBhZGQgMSB0byB0aGUgeU9yaWdcclxuICBAc3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNPcmlnaW4oJHhPcmlnLCAkeU9yaWcgKyAxKTtcclxuICB9XHJcbiAgLy8gRWRnZSwgYWRkIDEgdG8gdGhlIHlPcmlnXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyArIDEpO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0cmFuc09yaWdpbigkeE9yaWcsICR5T3JpZyk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSB0cmFuc1JvdGF0ZSgkZGVncmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHpvb21cclxuQG1peGluIG1hdEljb25ab29tKCRkdXJhdGlvbiwgJHhTY2FsZSwgJHlTY2FsZSkge1xyXG4gIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24pO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNTY2FsZSgkeFNjYWxlLCAkeVNjYWxlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciBpY29uIHdpZ2dsZVxyXG5AbWl4aW4gbWF0SWNvbldpZ2dsZSgkZHVyYXRpb24sICRjb3VudCkge1xyXG4gIC8vIEBpbmNsdWRlIHRyYW5zRHVyYXRpb24odHJhbnNmb3JtLCAkZHVyYXRpb24gKiAkY291bnQpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNXaWdnbGUoJGR1cmF0aW9uLCAkY291bnQpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb21tb24nO1xyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMTJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gIC5zY2hlZHVsZSB7XHJcbiAgICAuc2NoZWR1bGUtdGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGJvbGRJdGFsVGV4dCgkbGdGb250U2l6ZSk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FtZWRheSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodEdyZXk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICROZWFyQmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJE5lYXJXaGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdhbWVkYXktdGV4dCB7XHJcbiAgICAgICAgQGluY2x1ZGUgYm9sZEl0YWxUZXh0KCRtZWRGb250U2l6ZSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/teams/team-schedule.component.ts":
/*!**************************************************!*\
  !*** ./src/app/teams/team-schedule.component.ts ***!
  \**************************************************/
/*! exports provided: TeamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamScheduleComponent", function() { return TeamScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/team.service */ "./src/app/service/team.service.ts");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _service_playoff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/playoff.service */ "./src/app/service/playoff.service.ts");
/* harmony import */ var _dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/matchup/matchup-dialog.component */ "./src/app/dialog/matchup/matchup-dialog.component.ts");
/* harmony import */ var _dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/results/results-dialog.component */ "./src/app/dialog/results/results-dialog.component.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");










var TeamScheduleComponent = /** @class */ (function () {
    function TeamScheduleComponent(router, route, teamService, scheduleService, playoffService, dialog) {
        this.router = router;
        this.route = route;
        this.teamService = teamService;
        this.scheduleService = scheduleService;
        this.playoffService = playoffService;
        this.dialog = dialog;
        this.teamsArr = [];
        this.postseason = false;
        this.loading = true;
    }
    TeamScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.endOfSeason$.subscribe(function (data) { return _this.postseason = data; });
        this.route.params.forEach(function (params) {
            _this.team = _this.teamService.getTeam(params['abbrev']);
            // console.log('[team-schedule] ngOnInit() team: ' + this.team.city + ' ' + this.team.name);
            // this.teamsArr = this.teamService.getTeams().map(teams => teams);
            _this.teamService.getTeams().subscribe(function (teamData) {
                _this.teamsArr = teamData;
                // console.log('[team-schedule] ngOnInit() getTeams() SUCCESS');
                _this.teamIndex = _this.teamsArr.findIndex(function (team) { return team.abbrev === _this.team.abbrev; });
                _this.scheduleService.getGamesForTeam(_this.teamIndex).subscribe(function (schedData) {
                    _this.teamSchedule = schedData;
                    // console.table(this.teamSchedule);
                }, function (err) {
                    console.error('[team-schedule] ngOnInit() getGamesForTeam() error: ' + err);
                }, function () {
                    // console.log('[team-schedule] ngOnInit() getGamesForTeam() COMPLETE');
                    _this.playoffService.getGamesForTeam(_this.teamIndex, _this.postseason).subscribe(function (playSchedData) {
                        _this.playoffSchedule = playSchedData;
                        // console.table(this.playoffSchedule);
                        _this.loading = false;
                    }, function (err) {
                        console.error('[team-schedule] ngOnInit() playoff getGamesForTeam() error: ' + err);
                    }, function () {
                        // console.log('[team-schedule] ngOnInit() playoff getGamesForTeam() COMPLETE');
                    });
                });
            }, function (err) {
                console.error('[team-schedule] ngOnInit() getTeams() error: ' + err);
            });
        });
    };
    TeamScheduleComponent.prototype.getOpponent = function (game) {
        if (game.visitTeam === this.teamIndex) {
            // console.log('[team-schedule] getOpponent() visit: ' + game.visitTeam);
            return this.teamsArr[game.homeTeam];
        }
        if (game.homeTeam === this.teamIndex) {
            // console.log('[team-schedule] getOpponent() home: ' + game.homeTeam);
            return this.teamsArr[game.visitTeam];
        }
    };
    TeamScheduleComponent.prototype.showTeam = function (abbrev) {
        // showTeam(getOpponent(score).abbrev)
        // routing to the same component - TeamDetails needs to subscribe to the route paramaters;
        this.router.navigate(['/teams/' + abbrev]);
    };
    TeamScheduleComponent.prototype.openResultsDialog = function (id, playoffs) {
        var _this = this;
        if (playoffs === void 0) { playoffs = false; }
        var dialogRef = this.dialog.open(_dialog_results_results_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ResultsDialogComponent"], {
            data: { id: id, playoffs: playoffs }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[team-schedule] openResultsDialog() afterClosed() error: ' + err);
        });
    };
    TeamScheduleComponent.prototype.openMatchupDialog = function (id, playoffs) {
        var _this = this;
        if (playoffs === void 0) { playoffs = false; }
        var dialogRef = this.dialog.open(_dialog_matchup_matchup_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MatchupDialogComponent"], {
            data: { id: id, playoffs: playoffs }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.dialogReturn = result;
        }, function (err) {
            console.error('[team-schedule] openMatchupDialog() afterClosed() error: ' + err);
        });
    };
    TeamScheduleComponent.prototype.getMatchup = function (id, playoffs) {
        // console.log('[team-schedule] getMatchup: ' + id);
        var _this = this;
        if (playoffs === void 0) { playoffs = false; }
        var service = playoffs ? this.playoffService : this.scheduleService;
        service.getGameResults(id).subscribe(function (results) {
            if (results.length) {
                _this.openResultsDialog(id, playoffs);
            }
            else {
                _this.openMatchupDialog(id, playoffs);
            }
        });
    };
    TeamScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'team-schedule',
            template: __webpack_require__(/*! ./team-schedule.component.html */ "./src/app/teams/team-schedule.component.html"),
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_9__["listAnimation"]],
            styles: [__webpack_require__(/*! ./team-schedule.component.scss */ "./src/app/teams/team-schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _service_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleService"],
            _service_playoff_service__WEBPACK_IMPORTED_MODULE_6__["PlayoffService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], TeamScheduleComponent);
    return TeamScheduleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jim\Documents\Angular\ngNFL\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map