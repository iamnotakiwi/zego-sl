!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var r = t();
        for (var i in r) ("object" == typeof exports ? exports : e)[i] = r[i]
    }
}("undefined" != typeof self ? self : this, (function () {
    return function (e) {
        var t = {};

        function r(i) {
            if (t[i]) return t[i].exports;
            var s = t[i] = {i: i, l: !1, exports: {}};
            return e[i].call(s.exports, s, s.exports, r), s.l = !0, s.exports
        }

        return r.m = e, r.c = t, r.d = function (e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var s in e) r.d(i, s, function (t) {
                return e[t]
            }.bind(null, s));
            return i
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 7)
    }([function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.PROTO_VERSION = "1.6.0", t.ROOMVERSION = "V1", function (e) {
            e[e.debug = 0] = "debug", e[e.info = 1] = "info", e[e.warn = 2] = "warn", e[e.error = 3] = "error", e[e.report = 99] = "report", e[e.disable = 100] = "disable"
        }(t.ENUM_LOG_LEVEL || (t.ENUM_LOG_LEVEL = {})), t.LOG_LEVEL = {
            debug: 0,
            info: 1,
            warn: 2,
            error: 3,
            report: 99,
            disable: 100
        }, function (e) {
            e[e.disable = 0] = "disable", e[e.websocket = 1] = "websocket", e[e.https = 2] = "https"
        }(t.ENUM_REMOTE_TYPE || (t.ENUM_REMOTE_TYPE = {})), t.sdkErrorList = {
            CLIENT: "Client.",
            SERVER: "Server.",
            SUCCESS: {code: "Success", msg: "success."},
            PARAM: {code: "Error.Param", msg: "input error."},
            HEARTBEAT_TIMEOUT: {code: "Error.Timeout", msg: "heartbeat timeout."},
            LOGIN_TIMEOUT: {code: "Error.Timeout", msg: "login timeout."},
            SEND_MSG_TIMEOUT: {code: "Error.Timeout", msg: "send customsg timeout."},
            RESET_QUEUE: {code: "Error.Timeout", msg: "msg waiting ack is clear when reset."},
            LOGIN_DISCONNECT: {code: "Error.Network", msg: "network is broken and login fail."},
            KICK_OUT: {code: "Error.Kickout", msg: "kickout reason="},
            UNKNOWN: {code: "Error.Unknown", msg: "unknown error."},
            FREQ_LIMITED: {code: "Error.requencyLimited", msg: "Frequency Limited."}
        }, function (e) {
            e[e.disconnected = 0] = "disconnected", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected"
        }(t.ENUM_SIGNAL_STATE || (t.ENUM_SIGNAL_STATE = {})), t.ENUM_RESOLUTION_TYPE = {
            LOW: {
                width: 240,
                height: 320,
                frameRate: 15,
                bitRate: 300
            },
            MEDIUM: {width: 480, height: 640, frameRate: 15, bitRate: 800},
            HIGH: {width: 720, height: 1280, frameRate: 20, bitRate: 1500}
        }, t.ENUM_SCREEM_RESOLUTION_TYPE = {
            LOW: {frameRate: 20, bitRate: 800},
            MEDIUM: {frameRate: 15, bitRate: 1200},
            HIGH: {frameRate: 5, bitRate: 2e3}
        }, t.ENUM_RETRY_STATE = {didNotStart: 0, retrying: 1, finished: 2}, t.ENUM_PUBLISH_STATE = {
            start: 0,
            waitingSessionRsp: 1,
            waitingOffserRsp: 2,
            waitingServerAnswer: 3,
            waitingServerICE: 4,
            connecting: 5,
            publishing: 6,
            stop: 7,
            didNotStart: 8
        }, t.ENUM_PLAY_STATE = {
            start: 0,
            waitingSessionRsp: 1,
            waitingOffserRsp: 2,
            waitingServerAnswer: 3,
            waitingServerICE: 4,
            connecting: 5,
            playing: 6,
            stop: 7,
            didNotStart: 8
        }, t.ENUM_PLAY_STATE_NEGO = {
            stop: 0,
            start: 1,
            waiterAnswer: 2,
            waitingCandidate: 3,
            sendCandidate: 4,
            iceConnected: 5
        }, t.ENUM_CONNECT_STATE = {
            disconnect: 0,
            connecting: 1,
            connected: 2
        }, t.MAX_TRY_CONNECT_COUNT = 1, t.SEND_MSG_RESET = 2, t.SEND_MSG_TIMEOUT = 1, t.MAX_TRY_HEARTBEAT_COUNT = 5, t.ENUM_PUBLISH_STREAM_STATE = {
            waiting_url: 1,
            tryPublish: 2,
            update_info: 3,
            publishing: 4,
            stop: 5
        }, t.ENUM_STREAM_SUB_CMD = {
            liveNone: 0,
            liveBegin: 2001,
            liveEnd: 2002,
            liveUpdate: 2003
        }, t.ENUM_STREAM_UPDATE_TYPE = {added: 1, deleted: 0}, function (e) {
            e[e.logout = 0] = "logout", e[e.trylogin = 1] = "trylogin", e[e.login = 2] = "login"
        }(t.ENUM_RUN_STATE || (t.ENUM_RUN_STATE = {})), t.ENUM_PUBLISH_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2
        }, t.ENUM_PLAY_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2
        }, t.MAX_TRY_LOGIN_COUNT = 5, t.TRY_LOGIN_INTERVAL = [2e3, 4e3, 6e3, 8e3, 1e4], t.MINIUM_HEARTBEAT_INTERVAL = 3e3, t.ENUM_STREAM_UPDATE_CMD = {
            added: 12001,
            deleted: 12002,
            updated: 12003
        }, t.SERVER_ERROR_CODE = 1e4, t.MIXSTREAM_ERROR_CODE = 1e4, function (e) {
            e[e.low = 1] = "low", e[e.stantard = 2] = "stantard", e[e.hight = 3] = "hight", e[e.custome = 4] = "custome"
        }(t.QUALITYLEVEL || (t.QUALITYLEVEL = {})), t.ENUM_SIGNAL_SUB_CMD = {
            none: 0,
            joinLiveRequest: 1001,
            joinLiveResult: 1002,
            joinLiveInvite: 1003,
            joinLiveStop: 1004
        }, t.ENUM_PUSH_SIGNAL_SUB_CMD = {
            none: 0,
            pushJoinLiveRequest: 11001,
            pushJoinLiveResult: 11002,
            pushJoinLiveInvite: 11003,
            pushJoinLiveStop: 11004
        }, t.ENUM_PUBLISH_STATE_NEGO = {
            stop: 0,
            start: 1,
            waiterAnswer: 2,
            waitingCandidate: 3,
            sendCandidate: 4,
            iceConnected: 5
        }, function (e) {
            e[e.cdn = 0] = "cdn", e[e.ultra = 1] = "ultra"
        }(t.ENUM_PLAY_SOURCE_TYPE || (t.ENUM_PLAY_SOURCE_TYPE = {})), function (e) {
            e[e.stop = 0] = "stop", e[e.start = 1] = "start"
        }(t.ENUM_BROADCASTER_STATUS || (t.ENUM_BROADCASTER_STATUS = {})), function (e) {
            e[e.cdn = 0] = "cdn", e[e.ultra = 1] = "ultra", e[e.customUrl = 2] = "customUrl"
        }(t.ENUM_DISPATCH_TYPE || (t.ENUM_DISPATCH_TYPE = {})), function (e) {
            e[e.CDN = 0] = "CDN", e[e.BGP = 1] = "BGP"
        }(t.ENUM_SOURCE_TYPE || (t.ENUM_SOURCE_TYPE = {})), function (e) {
            e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallPragram = 2] = "ClientType_SmallPragram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
        }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {}));
        var i = function () {
            function e(e, t) {
                void 0 === e && (e = null), void 0 === t && (t = null), this._id = null, this.next = null, this.prev = null, this._id = e, this._data = t
            }

            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._id ? this._id : null
                }, set: function (e) {
                    this._id = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this._data
                }, set: function (e) {
                    this._data = e
                }, enumerable: !0, configurable: !0
            }), e.prototype.hasNext = function () {
                return this.next && this.next.id
            }, e.prototype.hasPrev = function () {
                return this.prev && this.prev.id
            }, e
        }();
        t.ListNode = i;
        var s = function () {
            function e() {
                this.start = new i, this.end = new i, this._idCounter = 0, this._numNodes = 0, this.start.next = this.end, this.start.prev = null, this.end.prev = this.start, this.end.next = null
            }

            return e.prototype.insertBefore = function (e, t) {
                var r = new i(this._idCounter, t);
                return r.next = e, r.prev = e.prev, e.prev && (e.prev.next = r), e.prev = r, ++this._idCounter, ++this._numNodes, r
            }, e.prototype.addLast = function (e) {
                return this.insertBefore(this.end, e)
            }, e.prototype.add = function (e) {
                return this.addLast(e)
            }, e.prototype.getFirst = function () {
                return 0 === this._numNodes ? null : this.start.next
            }, e.prototype.getLast = function () {
                return 0 === this._numNodes ? null : this.end.prev
            }, e.prototype.size = function () {
                return this._numNodes
            }, e.prototype.getFromFirst = function (e) {
                var t = 0, r = this.start.next;
                if (e >= 0) for (; t < e && null !== r;) r = r.next, ++t; else r = null;
                if (null === r) throw"Index out of bounds.";
                return r
            }, e.prototype.get = function (e) {
                return 0 === e ? this.getFirst() : e === this._numNodes - 1 ? this.getLast() : this.getFromFirst(e)
            }, e.prototype.remove = function (e) {
                return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), --this._numNodes, e
            }, e.prototype.removeFirst = function () {
                var e = null;
                return this._numNodes > 0 && this.start.next && (e = this.remove(this.start.next)), e
            }, e.prototype.removeLast = function () {
                var e = null;
                return this._numNodes > 0 && this.end.prev && (e = this.remove(this.end.prev)), e
            }, e.prototype.removeAll = function () {
                this.start.next = this.end, this.end.prev = this.start, this._numNodes = 0, this._idCounter = 0
            }, e.prototype.each = function (e) {
                for (var t = this.start; t.hasNext();) e(t = t.next)
            }, e.prototype.find = function (e) {
                for (var t = this.start, r = !1, i = null; t.hasNext() && !r;) e(t = t.next) && (i = t, r = !0);
                return i
            }, e.prototype.map = function (e) {
                for (var t = this.start, r = []; t.hasNext();) e(t = t.next) && r.push(t);
                return r
            }, e.prototype.push = function (e) {
                return this.addLast(e)
            }, e.prototype.unshift = function (e) {
                this._numNodes > 0 ? this.insertBefore(this.start.next, e) : this.insertBefore(this.end, e)
            }, e.prototype.pop = function () {
                return this.removeLast()
            }, e.prototype.shift = function () {
                return this.removeFirst()
            }, e
        }();
        t.LinkedList = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.commonErrorList = {
            SUCCESS: {
                code: "Success",
                msg: "success."
            },
            INIT: {code: 2000000001, msg: "init sdk wrong"},
            PARAM: {code: 2000000002, msg: "input parm error."},
            DETECT_TIMEOUT: {code: 2000000003, msg: "detect time out"},
            DETECT_FAIL: {code: 2000000004, msg: "detect fail"},
            SCREEN: {code: 2000000005, msg: "screen sharing fail"},
            DEVICE_NO_FOUND: {code: 2000000006, msg: "device no found"},
            ENUMERATE_DEVICES_FAIL: {code: 2000000007, msg: "enumerate devices fail"},
            NOT_LOGIN: {code: 2000000008, msg: "not login"},
            STOP_MIX_FAIL: {code: 2000000009, msg: "stop mix stream fail"},
            MIX_VIDEOC: {code: 2000000010, msg: "mix video code type wrong"},
            MIX_OUTPUT: {code: 2000000011, msg: "mix output wrong"}
        }, t.liveRoomErrorList = {
            SERVER: {code: 0, msg: "liverooom cmd error"},
            KICK_OUT: {code: 2001000001, msg: "liveroom kick out"},
            HEARTBEAT_TIMEOUT: {code: 2001000002, msg: "heartbeat timeout."},
            LOGIN_TIMEOUT: {code: 2001000003, msg: "login timeout."},
            SEND_MSG_TIMEOUT: {code: 2001000004, msg: "send customsg timeout."},
            RESET_QUEUE: {code: 2001000005, msg: "msg waiting ack is clear when reset."},
            LOGIN_DISCONNECT: {code: 2001000006, msg: "network is broken and login fail."},
            UNKNOWN: {code: 2001000007, msg: "unknown error."},
            FREQ_LIMITED: {code: 2001000008, msg: "frequency limited."}
        }, t.publishErrorList = {
            PARAM: {code: 2002000001, msg: "input parm error."},
            BROWSER_NOT_SUPPORT: {code: 2002000002, msg: "browser do not support"},
            DISPATCH_ERROR: {code: 2002000003, msg: "dispatch request error"},
            DISPATCH_TIMEOUT: {code: 2002000004, msg: "dispatch request timeout"},
            TOKEN_ERROR: {code: 2002000005, msg: "login token error"},
            SEND_SESSION_TIMEOUT: {code: 2002000006, msg: "send session request timeout"},
            CREATE_SESSION_ERROR: {code: 2002000007, msg: "create session error"},
            CREATE_OFFER_ERROR: {code: 2002000008, msg: "create offer error"},
            SET_LOCAL_DESC_ERROR: {code: 2002000009, msg: "setLocalDescription error"},
            SEND_MEDIA_DESC_TIMEOUT: {code: 2002000010, msg: "send mediaDesc timeout"},
            SERVER_MEDIA_DESC_TIMEOUT: {code: 2002000011, msg: "waiting server mediaDesc timeout"},
            SERVER_MEDIA_DESC_ERROR: {code: 2002000012, msg: "server mediaDesc type error"},
            SET_REMOTE_DESC_ERROR: {code: 2002000013, msg: "other side offer error"},
            SEND_CANDIDATE_TIMEOUT: {code: 2002000014, msg: "sendIceCandidate error"},
            SERVER_CANDIDATE_TIMEOUT: {code: 2002000015, msg: "waiting candidate timeout"},
            SERVER_CANDIDATE_ERROR: {code: 2002000016, msg: "recv candidate error"},
            SESSION_CLOSED: {code: 2002000017, msg: "server session closed"},
            MEDIA_CONNECTION_FAILED: {code: 2002000018, msg: "Iice Connection state failed"},
            MEDIA_CONNECTION_CLOSED: {code: 2002000019, msg: "ice connection state closed"},
            WEBSOCKET_ERROR: {code: 2002000020, msg: "network error"},
            CONSTRAINTS_ERROR: {code: 2002000021, msg: "constraint error"},
            MEDIA_CONNECTION_DISCONNECTED: {code: 2002000022, msg: "ice connection state disconnected"},
            SERVER_NEGO_TIMEOUT: {code: 2002000023, msg: "negotiation timeout"}
        }, t.playErrorList = {
            PARAM: {code: 2003000001, msg: "input parm error."},
            REPEATED_PULL: {code: 2003000002, msg: "repeated pull same stream"},
            DISPATCH_ERROR: {code: 2003000003, msg: "dispatch request error"},
            DISPATCH_TIMEOUT: {code: 2003000004, msg: "dispatch request timeout"},
            TOKEN_ERROR: {code: 2003000005, msg: "login token error"},
            SEND_SESSION_TIMEOUT: {code: 2003000006, msg: "send session request timeout"},
            CREATE_SESSION_ERROR: {code: 2003000007, msg: "create session error"},
            CREATE_OFFER_ERROR: {code: 2003000008, msg: "create offer error"},
            SERVER_MEDIA_DESC_TIMEOUT: {code: 2003000009, msg: "wating server mediaDesc timeout"},
            SET_REMOTE_DESC_ERROR: {code: 2003000010, msg: "other side offer error"},
            CREATE_ANSWER_ERROR: {code: 2003000011, msg: "create offer error"},
            SET_LOCAL_DESC_ERROR: {code: 2003000012, msg: "setLocalDescription error"},
            SEND_MEDIA_DESC_TIMEOUT: {code: 2003000013, msg: "send mediaDesc timeout"},
            SEND_CANDIDATE_ERROR: {code: 2003000014, msg: "send candidate error"},
            SEND_CANDIDATE_TIMEOUT: {code: 2003000015, msg: "send candidate timeout"},
            SERVER_CANDIDATE_TIMEOUT: {code: 2003000016, msg: "waiting candidate timeout"},
            SERVER_CANDIDATE_ERROR: {code: 2003000017, msg: "recv candidate error"},
            MEDIA_CONNECTION_FAILED: {code: 2003000018, msg: "ice Connection state failed"},
            MEDIA_CONNECTION_CLOSED: {code: 2003000019, msg: "ice connection state closed"},
            SESSION_CLOSED: {code: 2003000020, msg: "server session closed"},
            WEBSOCKET_ERROR: {code: 2003000021, msg: "network error"},
            MEDIA_CONNECTION_DISCONNECTED: {code: 2002000022, msg: "ice connection state disconnected"},
            SERVER_NEGO_TIMEOUT: {code: 2002000023, msg: "negotiation timeout"}
        }
    }, function (e, t, r) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {value: !0}), t.ENUM_PUBLISH_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2
        }, t.ENUM_PLAY_STATE_UPDATE = {start: 0, error: 1, retry: 2, stop: 3}, t.ENUM_RETRY_STATE = {
            didNotStart: 0,
            retrying: 1,
            finished: 2
        }, t.REPORT_ACTION = {
            eventStart: "eventStart",
            eventEndWithMsgInfo: "eventEndWithMsgInfo",
            addEventMsg: "addEventMsg",
            addEvent: "addEvent",
            eventEnd: "eventEnd",
            addMsgInfo: "addMsgInfo"
        }, t.getSeq = (i = 1, function () {
            return i++
        }), t.getReportSeq = function () {
            var e = 1;
            return function () {
                return e++
            }
        }()
    }, function (e, t, r) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, r, i) {
            return new (r || (r = Promise))((function (s, o) {
                function n(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                        e(t)
                    }))).then(n, a)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, s = this && this.__generator || function (e, t) {
            var r, i, s, o, n = {
                label: 0, sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                }, trys: [], ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o;

            function a(o) {
                return function (a) {
                    return function (o) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; n;) try {
                            if (r = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s;
                            switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) {
                                case 0:
                                case 1:
                                    s = o;
                                    break;
                                case 4:
                                    return n.label++, {value: o[1], done: !1};
                                case 5:
                                    n.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = n.ops.pop(), n.trys.pop();
                                    continue;
                                default:
                                    if (!(s = (s = n.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        n = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                        n.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && n.label < s[1]) {
                                        n.label = s[1], s = o;
                                        break
                                    }
                                    if (s && n.label < s[2]) {
                                        n.label = s[2], n.ops.push(o);
                                        break
                                    }
                                    s[2] && n.ops.pop(), n.trys.pop();
                                    continue
                            }
                            o = t.call(e, n)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            r = s = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {value: o[0] ? o[1] : void 0, done: !0}
                    }([o, a])
                }
            }
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(0), n = r(1), a = r(4), c = function () {
            function e() {
            }

            return e.checkConfigParam = function (e, t, r) {
                return e && "number" == typeof e ? !(!t || "string" != typeof t && !Array.isArray(t) || "" == t) || (r.error("ccp.0 server must be string or string array and not empty"), !1) : (r.error("ccp.0 appid must be number and not empty"), !1)
            }, e.registerCallback = function (e, t, r) {
                var i, s;
                t.success && (i = t.success, r[e + "SuccessCallback"] = i), t.error && (s = t.error, r[e + "ErrorCallback"] = s)
            }, e.actionErrorCallback = function (e, t) {
                return t[e + "ErrorCallback"]
            }, e.actionSuccessCallback = function (e, t) {
                return t[e + "SuccessCallback"]
            }, e.logReportCallback = function (t, r, i, s) {
                e.registerCallback(t, {
                    success: function (t, s) {
                        for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                        e.dataReportEvent(r, i, t, s, o)
                    }
                }, s)
            }, e.proxyRes = function (t, r, i, s) {
                return {
                    interResolve: function (e) {
                        t.uploadReport(r), i(e)
                    }, interReject: function (i, o) {
                        var n;
                        if (void 0 === o && (o = ""), i.code < 2e9) n = e.decodeServerError(i.code, i.msg); else {
                            var c = a.codeErrMap[i.code];
                            n = a.errorList[c]
                        }
                        t.addMsgInfo(r, {error: n.code, message: n.message + o}), t.uploadReport(r), s(i)
                    }
                }
            }, e.getServerError = function (e) {
                var t = {
                    1: "parse json error.",
                    1001: "login is processing.",
                    1002: "liveroom request error.",
                    1003: "zpush connect fail.",
                    1004: "zpush handshake fail.",
                    1005: "zpush login fail.",
                    1006: "user login state is wrong.",
                    1007: "got no zpush addr",
                    1008: "token error",
                    1009: "dispatch error",
                    1010: "token expired",
                    1011: "token format error",
                    1012: "subcmd error",
                    1101: "zego auth error",
                    2001: "invalid channel",
                    2002: "biz channel error",
                    1e9: "liveroom cmd error, result="
                };
                if (0 === e) return n.commonErrorList.SUCCESS;
                var r = n.liveRoomErrorList.SERVER;
                return r.code = e, r.msg = e > 1e9 ? t[1e9] + e : t[e] ? t[e] : "unknown error code:" + e, r
            }, e.unregisterCallback = function (e, t) {
                delete t[e + "SuccessCallback"], delete t[e + "ErrorCallback"]
            }, e.decodeServerError = function (e, t) {
                var r = {code: -1, message: "server error"};
                return r.code = e > 1e9 ? e - 1e9 + 52e6 : e + 2002e6, t && (r.message = t), r
            }, e.mixServerError = function (e) {
                var t = {
                    82000001: "kMixStreamFailError",
                    82000002: "kMixStreamInputError",
                    82000003: "kMixStreamAuthError",
                    82000150: "kMixStreamNotExistError",
                    82000151: "kMixStreamStartMixError",
                    82000152: "kMixStreamStopMixError",
                    82000155: "kMixStreamInputFormatError",
                    82000156: "kMixStreamOutputFormatError",
                    82000157: "kMixStreamNotOpenError",
                    82000158: "kMixStreamInputExceedError",
                    82000159: "kMixStreamDispatchError",
                    82000160: "kMixStreamStopMixOwnerError",
                    82000170: "kMixStreamWaterMarkParamError",
                    82000171: "kMixStreamWaterMarkImageError",
                    82000190: "kMixStreamQpsOverloadError"
                };
                if (e > 1e9) {
                    var r = e - 1e9 + 82e6;
                    return t[r] ? t[r] : ""
                }
                return ""
            }, e.getKickoutError = function (e) {
                var t = {};
                switch (e) {
                    case 1:
                        t.code = 63000001, t.message = "zpush multiple login kickout";
                        break;
                    case 2:
                        t.code = 63000002, t.message = "zpush manual kickout";
                        break;
                    case 3:
                        t.code = 63000003, t.message = "zpush room session error"
                }
                return t
            }, e.dataReportEvent = function (e, t, r, i, s) {
                switch (r) {
                    case"eventStart":
                        e.eventStart(t, i);
                        break;
                    case"eventEndWithMsgInfo":
                        e.eventEndWithMsgInfo(t, i, s[0]);
                        break;
                    case"addEventMsg":
                        e.addEventMsg(t, i, s[0], s[1]);
                        break;
                    case"addEvent":
                        e.addEvent(t, i);
                        break;
                    case"eventEnd":
                        e.eventEnd(t, i);
                        break;
                    case"addMsgInfo":
                        e.addMsgInfo(t, s[0])
                }
            }, e.isKeepTryLogin = function (e) {
                switch (e) {
                    case 1002:
                    case 1003:
                        return !0;
                    default:
                        return !1
                }
            }, e.mergeStreamList = function (e, t, r, i, s) {
                e.debug("msl.0 call");
                var o, n = [], a = [], c = [];
                i || (i = []);
                for (var d = 0; d < i.length; d++) if (i[d].anchor_id_name != t) {
                    o = !1;
                    for (var l = 0; l < r.length; l++) if (i[d].stream_id === r[l].stream_id) {
                        i[d].extra_info !== r[l].extra_info && c.push(i[d]), o = !0;
                        break
                    }
                    o || n.push(i[d])
                } else e.debug("msl.0 have self stream added");
                for (var u = 0; u < r.length; u++) {
                    o = !1;
                    for (var h = 0; h < i.length; h++) if (r[u].stream_id === i[h].stream_id) {
                        o = !0;
                        break
                    }
                    o || a.push(r[u])
                }
                r.splice(0);
                for (d = 0; d < i.length; d++) r.push(i[d]);
                s(n, a, c), e.debug("msl.0 call success")
            }, e.mergeUserList = function (e, t, r, i) {
                e.debug("msl.0 call");
                var s, o = [], n = [];
                r || (r = []);
                for (var a = 0; a < r.length; a++) {
                    s = !1;
                    for (var c = 0; c < t.length; c++) if (r[a].userID === t[c].userID) {
                        s = !0;
                        break
                    }
                    s || o.push(r[a])
                }
                for (var d = 0; d < t.length; d++) {
                    s = !1;
                    for (var l = 0; l < r.length; l++) if (t[d].userID === r[l].userID) {
                        s = !0;
                        break
                    }
                    s || n.push(t[d])
                }
                t.splice(0);
                for (a = 0; a < r.length; a++) t.push(t[a]);
                i(o, n), e.debug("msl.0 call success")
            }, e.checkCustomCommandParam = function (e) {
                return !0
            }, e.generateRandumNumber = function (e) {
                return parseInt(Math.random() * (e + 1) + "", 10)
            }, e.uuid = function (e, t) {
                var r, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), s = [];
                if (t = t || i.length, e) for (r = 0; r < e; r++) s[r] = i[0 | Math.random() * t]; else {
                    var o = void 0;
                    for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", r = 0; r < 36; r++) s[r] || (o = 0 | 16 * Math.random(), s[r] = i[19 == r ? 3 & o | 8 : o])
                }
                return s.join("")
            }, e.supportDetection = function (e, t) {
                return i(this, void 0, void 0, (function () {
                    var r, i, o, n, a;
                    return s(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                if (r = {
                                    webRTC: !1,
                                    customCapture: !1,
                                    camera: !1,
                                    microphone: !1,
                                    videoCodec: {H264: !1, H265: !1, VP8: !1, VP9: !1},
                                    screenSharing: e
                                }, ((i = document.createElement("video")).captureStream || i.mozCaptureStream) && (r.customCapture = !0), !(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return [3, 7];
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 6, , 7]), "https:" === window.location.protocol || "file:" === window.location.protocol || -1 != window.location.hostname.indexOf("127.0.0.1") || -1 != window.location.hostname.indexOf("localhost") ? [3, 2] : (r.camera = !1, console.error("webrtc requires https or localhost"), [3, 5]);
                            case 2:
                                return [4, navigator.mediaDevices.getUserMedia({video: !0})];
                            case 3:
                                return (o = s.sent()) && (r.camera = !0) && o.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), [4, navigator.mediaDevices.getUserMedia({audio: !0})];
                            case 4:
                                (n = s.sent()) && (r.microphone = !0) && n.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), s.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return a = s.sent(), console.error("devices detect error: ", a.name, a.message), [3, 7];
                            case 7:
                                return this.supportVideoCodeType((function (e, i) {
                                    r.videoCodec.H264 = e.H264, r.videoCodec.H265 = e.H265, r.videoCodec.VP8 = e.VP8, r.videoCodec.VP9 = e.VP9, r.webRTC = e.webRTC, i && console.error("videoCodec detect error: " + i), t && t(r)
                                })), [2]
                        }
                    }))
                }))
            }, e.compareVersion = function (e, t) {
                e = e.split("."), t = t.split(".");
                for (var r = Math.max(e.length, t.length); e.length < r;) e.push("0");
                for (; t.length < r;) t.push("0");
                for (var i = 0; i < r; i++) {
                    var s = parseInt(e[i]), o = parseInt(t[i]);
                    if (s > o) return 1;
                    if (s < o) return -1
                }
                return 0
            }, e.isSupportLive = function (e, t) {
                var r = "当前微信版本过低，无法使用相关组件", i = "需要摄像头和录音功能的授权", s = wx.getSystemInfoSync().SDKVersion,
                    o = {code: -1, msg: ""};
                this.compareVersion(s, "1.7.0") < 0 && (o = {
                    code: 10001,
                    msg: r
                }, e && e(o)), wx.getSetting({
                    success: function (t) {
                        var r = t.authSetting;
                        r["scope.camera"] && r["scope.record"] || (o = {code: 10002, msg: i}), e && e(o)
                    }, fail: function (e) {
                        console.error("get setting error", e), t && t(e)
                    }
                })
            }, e.supportVideoCodeType = function (e) {
                var t = {webRTC: !1, H264: !1, VP8: !1, VP9: !1, H265: !1};
                try {
                    (new RTCPeerConnection).createOffer({
                        offerToReceiveAudio: !0,
                        offerToReceiveVideo: !0
                    }).then((function (r) {
                        if (t.webRTC = !0, r && r.sdp) {
                            var i = r.sdp.split("\r\n");
                            t.H264 = i.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("H264/") > -1
                            })), t.VP8 = i.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("VP8/") > -1
                            })), t.VP9 = i.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("VP9/") > -1
                            })), t.H265 = i.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("H264/") > -1
                            })), e && e(t)
                        }
                    }))
                } catch (r) {
                    e && e(t, r)
                }
            }, e.inlineWorker = function (e) {
                if (Worker && e) {
                    var t = e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],
                        r = URL.createObjectURL(new window.Blob([t], {type: "text/javascript"}));
                    return new Worker(r)
                }
                return null
            }, e.getBrowser = function () {
                var e = window.navigator.userAgent, t = null != window.ActiveXObject && -1 != e.indexOf("MSIE"),
                    r = -1 != e.indexOf("Firefox"), i = null != window.opr, s = e.indexOf("Chrome") && window.chrome,
                    o = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version");
                return t ? "IE" : r ? "Firefox" : i ? "Opera" : s ? "Chrome" : o ? "Safari" : "Unkown"
            }, e.setDebug = function (e, t) {
                "string" == typeof e && -1 != e.indexOf("wss") ? -1 == e.indexOf("wss://wsliveroom-alpha.zego.im/ws") && -1 == e.indexOf("wss://wssliveroom-test.zego.im/ws") && -1 == e.indexOf("wss://test2-wsliveroom-api.zego.im/ws") && -1 == e.indexOf("wss://wsliveroom-test.zegocloud.com/ws") && -1 == e.indexOf("wss://wsliveroom-test.zego.im/ws") && -1 == e.indexOf("wss://webliveroom-test.zego.im/ws") || (t.debug = !0) : console.error("server wrong")
            }, e.getPublisherStateType = function (e) {
                return 0 == e || 1 == e ? 0 == e ? "PUBLISHING" : "NO_PUBLISH" : "PUBLISH_REQUESTING"
            }, e.getPlayerStateType = function (e) {
                return 0 == e || 1 == e ? 0 == e ? "PLAYING" : "NO_PLAY" : "PLAY_REQUESTING"
            }, e.getSteamUpdateType = function (e) {
                return 0 == e ? "DELETE" : "ADD"
            }, e.getLogLevel = function (e) {
                return o.LOG_LEVEL[e]
            }, e
        }();
        t.ClientUtil = c
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.eventList = {
            kZegoTaskInitSetting: "/sdk/init",
            kZegoTaskLoginRoom: "/sdk/login",
            kZegoTaskLogoutRoom: "/sdk/logout",
            kZegoTaskReLoginRoom: "/sdk/relogin",
            kZegoTaskSdkDisconnect: "/sdk/disconnect",
            kZegoTaskKickout: "/sdk/kickout",
            kZegoTaskSessionClose: "/sdk/session_close",
            kZegoTaskLiveRoomhHB: "/liveroom/hb",
            kZegoTaskLiveSendRoomBigIM: "/liveroom/send_big_room_message",
            kZegoTaskLiveGetRoomBigIM: "/liveroom/get_big_room_message",
            kZegoTaskLiveRoomGetUserUpdateInfo: "/liveroom/get_user_update_info",
            kZegoTaskLiveRoomGetRoomMessage: "/liveroom/get_room_message",
            kZegoTaskLiveRoomSendRoomMessage: "/liveroom/send_room_message",
            kZegoTaskLiveRoomSendCustomCommand: "/liveroom/send_custom_command",
            kZegoTaskLiveRoomGetCustomCommand: "/liveroom/get_custom_command",
            kZegoTaskLiveRoomSendStreamExtraInfo: "/liveroom/send_stream_extra_info",
            kZegoTaskLiveRoomGetStreamExtraInfo: "/liveroom/get_stream_extra_info",
            kZegoTaskLiveRoomGetStreamUpdateInfo: "/liveroom/get_stream_update_info",
            kZegoTaskPublishStart: "/sdk/start_publish",
            kZegoTaskRePublish: "/sdk/republish",
            kZegoTaskPublishStop: "/sdk/stop_publish",
            kZegoTaskPlayStart: "/sdk/start_play",
            kZegoTaskRePlay: "/sdk/replay",
            kZegoTaskPlayStop: "/sdk/stop_play",
            kZegoTaskMixStart: "/mix/start_mix",
            kZegoTaskMixStop: "/mix/stop_mix",
            kZegoTaskMixConfig: "/mix/config_mix",
            kZegoTaskEnumDevices: "/sdk/enum_devices",
            kZegoTaskSetDebug: "/sdk/set_debug",
            kZegoTaskSetLog: "/sdk/set_log_config",
            kZegoTaskUseVideoDevice: "/sdk/use_video_device",
            kZegoTaskUseAudioDevice: "/sdk/use_audio_device",
            kZegoTaskCheckSystemRequirements: "/sdk/check_system",
            kZegoTaskMutePublishVideo: "/sdk/mute_publish_video",
            kZegoTaskMutePublishAudio: "/sdk/mute_publish_audio",
            kZegoTaskRemoteCameraUpdate: "/sdk/remote_camera_update",
            kZegoTaskRemoteMicUpdate: "/sdk/remote_mic_update",
            kZegoTaskGetSoundLevel: "/sdk/get_sound_level",
            kZegoTaskStopSoundLevel: "/sdk/stop_sound_level",
            kZegoTaskAddPublishCdnUrl: "/sdk/add_publish_cdn_url",
            kZegoTaskRemovePublishCdnUrl: "/sdk/remove_publish_cdn_url",
            kZegoTaskClearPublishCdnUrl: "/sdk/clear_publish_cdn_url",
            kZegoTaskCreateStream: "/sdk/create_stream",
            kZegoTaskDestroyStream: "/sdk/destroy_stream",
            kZegoTaskScreenSharingEnded: "/sdk/screen_share_end",
            kZegoEventPublishStat: "/sdk/publish_stat_report",
            kZegoEventPlayStat: "/sdk/play_stat_report"
        }, t.errorList = {
            kOK: 0,
            kEnd: 1,
            kNoneAppIdError: 10000101,
            kNotLoginError: {code: 10000105, message: "sdk error, not login room"},
            kPublishBadNameError: 10000106,
            kInvalidParamError: {code: 10001001, message: "sdk error, invalid param."},
            kInvalidChannelError: 10001002,
            kNullPointerError: 10001003,
            kInvalidUserIDError: 10001004,
            kInvalidRoomIDError: 10001005,
            kNoFreeChannelError: 10001101,
            kFormatUrlError: 10001102,
            kInvalidExtraUrlError: 10001103,
            kNoPushIpError: 10001104,
            kUnmatchStreamIDError: 10002001,
            kUnmatchSeqError: {code: 10002002, message: "sdk error, unmatch seq"},
            kNoneSeqError: 10002003,
            kUnmatchStateError: 10002004,
            kRedirectError: 10003001,
            kOutOfMemeryError: 10004001,
            kStartThreadError: 10004002,
            kStartRequestError: 10005001,
            kStartUpdateStreamInfoError: 10006001,
            kNoMultiRoomLoginRole: 10007001,
            kMultiRoomIDMappingOther: 10007002,
            kNetWorkProbeNoUrl: 10007003,
            kNetWorkProbeStopPublish: 10007004,
            kNetWorkProbeStopPlay: 10007005,
            kFetalError1: 10007101,
            kFetalError2: 10007102,
            kFetalError3: 10007103,
            kFetalError4: 10007104,
            kFetalError5: 10007105,
            kFetalError6: 10007106,
            kFetalError7: 10007107,
            kSDKNoMoudleFunction: 10008001,
            kDeviceError: 10009001,
            kNetworkNotConnectError: 11000101,
            kNetworkDnsResolveError: 11000404,
            kEngineCreateError: 12101001,
            kEngineStatusError: 12101002,
            kEngineStartError: 12101003,
            kDeniedMaxRetryError: 12101004,
            kDeniedDisableSwitchLineError: 12101005,
            kEngineNoPlayDataError: 12102001,
            kEngineNoPublishDataError: 12102002,
            kEngineUnknownError: 122e5,
            kEngineConnectServerError: 12200001,
            kEngineRtmpHandshakeError: 12200002,
            kEngineRtmpAppConnectError: 12200003,
            kEngineRtmpCreateStreamError: 12200004,
            kEngineRtmpPublishBadNameError: 12200005,
            kEngineServerDisconnectError: 12200006,
            kEngineRtpConnectServerError: 12200100,
            kEngineRtpHelloTimeoutError: 12200101,
            kEngineRtpCreateSessionTimeoutError: 12200102,
            kEngineRtpCreateSessionFailError: 12200103,
            kEngineRtpPlayOrPublishTimeoutError: 12200104,
            kEngineRtpPlayOrPublishDeniedError: 12200105,
            kEngineRtpTimeoutError: 12200106,
            kEngineRtpDecryptError: 12200107,
            kEngineRtpDecryptNotSupport: 12200108,
            kEngineRtpSockError: 12200109,
            kEngineHttpFlvProtocolError: 12200200,
            kEngineHttpFlvHttpCodeError: 12200201,
            kEngineHttpFlvParseFlvError: 12200202,
            kEngineHttpFlvServerDisconnectError: 12200203,
            kEngineHttpFlvRedirectError: 12200204,
            kPlayStreamNotExistError: 12301004,
            kMediaServerForbidError: 12301011,
            kMediaServerPublishBadNameError: 12301012,
            kMediaServerStopPublishError: 12301014,
            kConfigDecryptError: 20000001,
            kConfigOfflineError: 20000002,
            kConfigDomainError: 20000003,
            kConfigMediaNetworkNoneError: 20000004,
            kConfigMediaNetworkNoUrlError: 20000005,
            kConfigServerCouldntConnectError: 21200007,
            kConfigServerTimeoutError: 21200028,
            kConfigServerSslCaCertError: 21200060,
            kDispatchServerInvalidError: 30000001,
            kDispatchNoIpError: 30000404,
            kDispatchServerCouldntConnectError: 31200007,
            kDispatchServerTimeoutError: 31200028,
            kDispatchServerSslCaCertError: 31200060,
            kDispatchNotChangedError: 32000001,
            kDispatchEmptyPublishIpsError: 32001002,
            kDispatchEmptyPlayIpsError: 32001003,
            kDispatchStreamNotExistError: 32001004,
            kDispatchAgentTimeoutError: 35500001,
            kDispatchAgentDroppedError: 35500002,
            kLogicServerNoUrlError: 40000404,
            kLogicServerNoIpError: 40000405,
            kLogicServerNoStreamInfoError: 40000406,
            kLogicServerFetalError1: 40700001,
            kLogicServerCouldntConnectError: 41200007,
            kLogicServerTimeoutError: 41200028,
            kLogicServerSslCaCertError: 41200060,
            kLoginAgentTimeoutError: 45500001,
            kLoginAgentDroppedError: 45500002,
            kLiveRoomRequestParamError: 50001001,
            kLiveRoomHBTimeoutError: {code: 50001002, message: "liveroom error, hb timeout"},
            kLiveRoomNoPushServerAddrError: 50001003,
            kLiveRoomNoPushCryptoKeyError: 50001004,
            kLiveRoomNoPushTokenError: 50001005,
            kLiveRoomAutoRetryMaxTimeOut: 50001006,
            kLiveRoomRetryRightNow: 50001009,
            kLiveRoomWaitNetOKWillRetry: 50001010,
            kLiveRoomLogoutWhenLogining: 50001011,
            kLiveRoomLogoutUserCancel: 50001012,
            kLiveRoomHBErrorNoResp: 50001050,
            kLiveRoomHBErrorByHttpTiemout: 50001051,
            kLiveRoomReliableMessageParseBufError: 50001200,
            kLiveRoomReliableMessageTransChannelError: 50001201,
            kLiveRoomReliableUserMessageBufEmpty: 50001202,
            kLiveRoomReliableUserMessageParseBufError: 50001203,
            kLiveRoomGetUserListParseBufError: 50001204,
            kLiveRoomHttpNullPtrError: 50001205,
            kLiveRoomMultiZPushSessionIDNotMatchError: 50005021,
            kLiveRoomMultiLimitRoomCountError: 50005022,
            kLiveRoomCouldntConnectError: 51200007,
            kLiveRoomTimeoutError: 51200028,
            kLiveRoomSslCaCertError: 51200060,
            kLiveRoomInvalidRspError: 51400003,
            kLiveRoomInputParamsError: 52000002,
            kLiveRoomRoomAuthError: 52000101,
            kLiveRoomRoomNotExistError: 52000104,
            kLiveRoomUserNotExistError: 52000105,
            kLiveRoomSetStreamInfoError: 52000123,
            kLiveRoomStreamInfoNotExist: 52000138,
            kLiveRoomSessionError: 52000141,
            kLiveRoomQpsLimitError: 52000201,
            kLiveRoomLuaSessionError: 52001001,
            kLiveRoomAddUserError: 52001002,
            kLiveRoomDelUserError: 52001003,
            kLiveRoomAddTransError: 52001009,
            kLiveRoomMaxUserCountError: 52001105,
            kLiveRoomPublishBadNameError: 52001012,
            kLiveRoomRequiredReloginError: 52002001,
            kLiveRoomThirdTokenAuthError: 52002002,
            kLiveRoomNetBrokenTimeoutError: 52002003,
            kLiveRoomAgentTimeoutError: 55500001,
            kLiveRoomAgentDroppedError: 55500002,
            kRoomConnectError: 60001001,
            kRoomDoHandShakeReqError: 60001002,
            kRoomDoLoginReqError: 60001003,
            kRoomTimeoutError: 60001004,
            kRoomHbTimeoutError: 60001005,
            kRoomStartConnectError: 60001006,
            kRoomReconnectFailError: 60001008,
            kRoomLoginZPushNoCryptoKey: 60001009,
            kRoomLoginCheckMD5Fail: 60001010,
            kRoomRetryIPOver: 60001011,
            kRoomRetryActiveIPError: 60001012,
            kRoomSendLoginNoZPushRsp: 60001013,
            kRoomDoSendLoginMultiRoomReqError: 60001014,
            kRoomZPushTcpClosed: 60001015,
            kRoomConnectErrorQuic: 60001016,
            kRoomInvalidSocketError: 60002001,
            kRoomInvalidRspError: 60003001,
            kRoomDecodeSignError: 62001001,
            kRoomDecodeLoginError: 62001002,
            kRoomReplayAttacksError: 62002001,
            kRoomThirdTokenAuthError: 62002002,
            kRoomLoginCreateUserError: 62010001,
            kRoomLoginSameCreateUserError: 62010002,
            kRoomStatusTimeoutError: 62010005,
            kRoomStatusRspError: 62010006,
            kRoomDispatchTokenBuildError: 62030011,
            kRoomDispatchTokenDecodeError: 62030012,
            kRoomDispatchTokenInvalidError: 62030013,
            kRoomDispatchTokenExpiredError: 62030014,
            kRoomMultipleLoginKickoutError: {code: 63000001, message: "zpush multiple login kickout"},
            kRoomManualKickoutError: {code: 63000002, message: "zpush manual kickout"},
            kRoomSessionErrorKickoutError: {code: 63000003, message: "zpush room session error"},
            kRoomDispatchError: 64000001,
            kRoomDispatchResultNotMatch: 64000002,
            kRoomNoDispatchToken: 64000003,
            kRoomSdkZpushError: 65000001,
            kMixStreamNoneMixConfigError: 80000001,
            kMixStreamCouldntConnectError: 81200007,
            kMixStreamTimeoutError: 81200028,
            kMixStreamSslCaCertError: 81200060,
            kMixStreamFailError: {code: 82000001, message: "failure"},
            kMixStreamInputError: {code: 82000002, message: "input params error"},
            kMixStreamAuthError: {code: 82000003, message: "Auth Failure"},
            kMixStreamNotExistError: {code: 82000150, message: "mix stream not exist"},
            kMixStreamStartMixError: {code: 82000151, message: "mix stream fail"},
            kMixStreamStopMixError: {code: 82000152, message: "unmix stream fail"},
            kMixStreamInputFormatError: {code: 82000155, message: "mix stream input format error"},
            kMixStreamOutputFormatError: {code: 82000156, message: "mix stream output format error"},
            kMixStreamNotOpenError: {code: 82000157, message: "mix not open"},
            kMixStreamInputExceedError: {code: 82000158, message: "mix stream input exceed"},
            kMixStreamDispatchError: {code: 82000159, message: "mix_dispatch fail"},
            kMixStreamStopMixOwnerError: {code: 82000160, message: "unmix owner fail"},
            kMixStreamWaterMarkParamError: {code: 82000170, message: "water mark params error"},
            kMixStreamWaterMarkImageError: {code: 82000171, message: "water mark image empty"},
            kMixStreamQpsOverloadError: {code: 82000190, message: "mix_start qps overload"},
            kMixStreamAgentTimeoutError: 85500001,
            kMixStreamAgentDroppedError: 85500002,
            kInitSdkError: {code: 2001100001, message: "login but init sdk wrong"},
            kScreenSharingFail: {code: 2001100002, message: "screen share fail"},
            kEnumerateDevicesFail: {code: 2001100003, message: "enumerate devices fail"},
            kMixVideocError: {code: 2001100004, message: "mix video code type wrong"},
            kWxGetSettingFail: {code: 2001100005, message: "wx getsetting fail"},
            kDevicesDetectError: {code: 2001100006, message: "devices detect error"},
            kVideoCodecDetectError: {code: 2001100007, message: "videoCodec detect error"},
            kMixStopFail: {code: 2001100008, message: "stop mix stream fail"},
            kLoginTimeoutError: {code: 2001110001, message: "login timeout"},
            kSendMsgTimeout: {code: 2001110002, message: "send customsg timeout."},
            kLiveRoomDisconnect: {code: 2001110003, message: "network is broken and login fail."},
            kMsgFrequencyLimited: {code: 2001110004, message: "send msg freq error"},
            kLiveRoomNotLoginError: {code: 2001110005, message: "liveroom not login"},
            kLiveRoomMessageParseError: {code: 2001110006, message: "message parse error"},
            kLiveRoomMessageNoneError: {code: 2001110007, message: "message none error"},
            kBrowserNotSupport: {code: 2001120001, message: "browser do not support"},
            kHttpsRequired: {code: 2001120002, message: "https or localhost required"},
            kDispatchError: {code: 2001120003, message: "dispatch request error"},
            kDispatchTimeout: {code: 2001120004, message: "dispatch request timeout"},
            kTokenError: {code: 2001120005, message: "login token error"},
            kSendSessionTimeout: {code: 2001120006, message: "send session request timeout"},
            kCreateSessionError: {code: 2001120007, message: "create session error"},
            kCreateOfferError: {code: 2001120008, message: "create offer error"},
            kSetLocalDescError: {code: 2001120009, message: "setLocalDescription error"},
            kSendMediaDescTimeout: {code: 2001120010, message: "send mediaDesc timeout"},
            kServerMediaDescTimeout: {code: 2001120011, message: "waiting server mediaDesc timeout"},
            kServerMediaDescError: {code: 2001120012, message: "server mediaDesc type error"},
            kSetRemoteDescError: {code: 2001120013, message: "other side offer error"},
            kSendCandidateTimeout: {code: 2001120014, message: "sendIceCandidate error"},
            kServerCandidateTimeout: {code: 2001120015, message: "waiting candidate timeout"},
            kServerCandidateError: {code: 2001120016, message: "recv candidate error"},
            kSessionClosed: {code: 2001120017, message: "server session closed"},
            kMediaConnectionFailed: {code: 2001120018, message: "Iice Connection state failed"},
            kMediaConnectionClosed: {code: 2001120019, message: "ice connection state closed"},
            kWebsocketError: {code: 2001120020, message: "network error"},
            kConstraintError: {code: 2001120021, message: "constraint error"},
            kMediaConnectionDisconnected: {code: 2001120022, message: "ice connection state disconnected"},
            kServerNegoTimeout: {code: 2001120023, message: "negotiation timeout"},
            kLocalStreamError: {code: 2001120024, message: "local stream error"},
            kPublishConstraintsNotSupport: {code: 2001120025, message: "publish constraints is not supported"},
            kGetSoundLevelError: {code: 2001120026, message: "get sound level error"},
            kPublishStreamNotFound: {code: 2001120027, message: "publish stream not found"},
            kPublisherRepeatError: {code: 2001120028, message: "publisher already exist, publish repeat"},
            kPlayerRepeatError: {code: 2001120029, message: "player already exist, play repeat"},
            kStopWhenPublishing: {code: 2001120030, message: "stop publish when publishing error"},
            kStopWhenPlaying: {code: 2001120031, message: "stop play when playing error"},
            kPublishRetryFail: {code: 2001120032, message: "publish retry fail"},
            kPlayRetryFail: {code: 2001120033, message: "play retry fail"},
            kUrlsNone: {code: 2001120034, message: "url none"},
            kIsPublishing: {code: 2001120035, message: "stream is publishing"},
            kIsPlaying: {code: 2001120035, message: "stream is pulling"}
        }, t.codeErrMap = {
            2000000001: "kInitSdkError",
            2000000002: "kInvalidParamError",
            2000000005: "kScreenSharingFail",
            2000000007: "kEnumerateDevicesFail",
            2000000008: "kNotLoginError",
            2000000009: "kMixStopFail",
            2000000010: "kMixVideocError",
            2001000002: "kLiveRoomHBTimeoutError",
            2001000003: "kLoginTimeoutError",
            "Error.Network": "kLiveRoomDisconnect",
            "Error.requencyLimited": "kMsgFrequencyLimited",
            2002000001: "kInvalidParamError",
            2002000002: "kBrowserNotSupport",
            2002000003: "kDispatchError",
            2002000004: "kDispatchTimeout",
            2002000005: "kTokenError",
            2002000006: "kSendSessionTimeout",
            2002000007: "kCreateSessionError",
            2002000008: "kCreateOfferError",
            2002000009: "kSetLocalDescError",
            2002000010: "kSendMediaDescTimeout",
            2002000011: "kServerMediaDescTimeout",
            2002000012: "kServerMediaDescError",
            2002000013: "kSetRemoteDescError",
            2002000014: "kSendCandidateTimeout",
            2002000015: "kServerCandidateTimeout",
            2002000016: "kServerCandidateError",
            2002000017: "kSessionClosed",
            2002000018: "kMediaConnectionFailed",
            2002000019: "kMediaConnectionClosed",
            2002000020: "kWebsocketError",
            2002000021: "kConstraintError",
            2002000022: "kMediaConnectionDisconnected",
            2002000023: "kServerNegoTimeout",
            2003000003: "kDispatchError",
            2003000004: "kDispatchTimeout",
            2003000005: "kTokenError",
            2003000006: "kSendSessionTimeout",
            2003000007: "kCreateSessionError",
            2003000008: "kCreateOfferError",
            2003000009: "kSetLocalDescError",
            2003000010: "kSendMediaDescTimeout",
            2003000011: "kServerMediaDescTimeout",
            2003000012: "kServerMediaDescError",
            2003000013: "kSetRemoteDescError",
            2003000014: "kSendCandidateTimeout",
            2003000015: "kServerCandidateTimeout",
            2003000016: "kServerCandidateError",
            2003000017: "kSessionClosed",
            2003000018: "kMediaConnectionFailed",
            2003000019: "kMediaConnectionClosed",
            2003000020: "kWebsocketError",
            2003000021: "kConstraintError",
            2003000022: "kMediaConnectionDisconnected",
            2003000023: "kServerNegoTimeout"
        }
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e) {
                this.loop = !1, this.replace = !1, this.effectEndedCallBack = null, this.effectEndedListener = null, this.startTimes = 0, this.startOffset = 0, this.pauseTimes = 0, this.resumeOffset = 0, this.isMixAudio = !1, this.logger = e
            }

            return e.prototype.preloadEffect = function (e, t) {
                var r = this;
                this.logger.info("amu.pe.0 start preload effect");
                var i = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext),
                    s = new XMLHttpRequest;
                s.open("GET", e, !0), s.responseType = "arraybuffer", s.onload = function () {
                    if (200 == s.status || 304 == s.status) {
                        var e = s.response;
                        i.decodeAudioData(e, (function (e) {
                            r.logger.info("amu.pe.0 effect preload success"), t("", e)
                        }), (function (e) {
                            t(e)
                        }))
                    } else {
                        var o = s.statusText;
                        t(o)
                    }
                }, s.send()
            }, e.prototype.playEffect = function (e, t, r, i, s) {
                var o = this;
                !0 !== this.isMixAudio ? this.audioBuffer ? (this.startOffset = e || 0, this.loop = t || !1, this.replace = r || !1, this.effectEndedCallBack = s, this.mixEffect(this.audioBuffer, (function () {
                    o.buffSource.loop = !!t, e ? o.buffSource.start(0, e / 1e3) : o.buffSource.start(0), o.startTimes = Date.now(), o.effectEndedListener = o.effectEndedHandler.bind(o), o.buffSource.addEventListener("ended", o.effectEndedListener), i && i()
                }))) : this.logger.error("amu.pe.1 no audio buffer found") : this.logger.error("amu.pe.1 audio is mixing")
            }, e.prototype.pauseEffect = function () {
                this.stopMixingAudio(), this.resumeOffset = (this.pauseTimes - this.startTimes + this.startOffset) % (1e3 * this.audioBuffer.duration)
            }, e.prototype.resumeEffect = function () {
                this.playEffect(this.resumeOffset, this.loop, this.replace, void 0, this.effectEndedCallBack), this.startOffset = this.resumeOffset
            }, e.prototype.mixEffect = function (e, t) {
                this.localStream ? (this.ac = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext), this.gainNode = this.ac.createGain(), this.buffSource = this.ac.createBufferSource(), this.buffSource.buffer = e, this.buffSource.connect(this.gainNode), this.gainNode.connect(this.ac.destination), this.replaceTrack() && t()) : this.logger.error("amu.me.0 localStream can not be found")
            }, e.prototype.startMixingAudio = function (e, t) {
                return this.replace = t || !1, this.isMixAudio ? (this.logger.error("amu.sma.0 audio is mixing"), !1) : this.localStream ? (e.captureStream = e.captureStream || e.mozCaptureStream || e.webkitCaptureStream, this.ac = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext), this.gainNode = this.ac.createGain(), this.mixAudio = this.ac.createMediaStreamSource(e.captureStream()), this.mixAudio.connect(this.gainNode), this.replaceTrack()) : (this.logger.error("amu.sma.0 localStream can not be found"), !1)
            }, e.prototype.replaceTrack = function () {
                this.streamSource = this.ac.createMediaStreamSource(this.localStream.clone()), this.destination = this.ac.createMediaStreamDestination(), !this.replace && this.streamSource.connect(this.destination), this.gainNode.connect(this.destination);
                var e = this.destination.stream.getAudioTracks()[0],
                    t = this.peerConnection.getSenders().find((function (t) {
                        return t.track.kind === e.kind
                    }));
                return t ? (this.micTrack = this.localStream.getAudioTracks()[0], t.replaceTrack(e), this.localStream.removeTrack(this.micTrack), this.localStream.addTrack(e), this.isMixAudio = !0, !0) : (this.logger.error("amu.rt.0 no sender"), !1)
            }, e.prototype.stopMixingAudio = function () {
                var e = this;
                return this.isMixAudio ? this.localStream ? (this.peerConnection.getSenders().find((function (t) {
                    return t.track.kind === e.micTrack.kind
                })).replaceTrack(this.micTrack), this.localStream.removeTrack(this.localStream.getAudioTracks()[0]), this.localStream.addTrack(this.micTrack), this.mixAudio ? (this.mixAudio.disconnect(this.gainNode), this.mixAudio = null) : this.buffSource && (this.buffSource.removeEventListener("ended", this.effectEndedListener), this.buffSource.stop(), this.pauseTimes = Date.now(), this.buffSource.disconnect(this.gainNode), this.buffSource = null), this.gainNode.disconnect(this.destination), this.micTrack = null, this.ac = void 0, this.isMixAudio = !1, !0) : (this.logger.error("amu.sma.1 localStream can not be found"), !1) : (this.logger.error("amu.sma.1 no mixing audio found"), !1)
            }, e.prototype.setMixingAudioVolume = function (e) {
                return this.gainNode ? (this.gainNode.gain.value = e, !0) : (this.logger.error("amu.sma.2 no mixing audio found"), !1)
            }, e.prototype.effectEndedHandler = function () {
                this.stopMixingAudio(), this.effectEndedCallBack && this.effectEndedCallBack()
            }, e
        }();
        t.AudioMixUtil = i
    }, function (e, t, r) {
        "use strict";
        var i = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var i = Array(e), s = 0;
            for (t = 0; t < r; t++) for (var o = arguments[t], n = 0, a = o.length; n < a; n++, s++) i[s] = o[n];
            return i
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = function () {
            function e() {
            }

            return e.zegoSdp = function (e) {
                var t = e.split("\r\n"), r = [], s = [];
                t.forEach((function (e) {
                    var t = e.match(/a=rtpmap:(\d+)\s+((H264\/90000)|(opus\/48000\/2))/);
                    t && t[1] && t[2] && ("H264/90000" === t[2] && r.push(t[1]), "opus/48000/2" === t[2] && s.push(t[1]))
                }));
                var o = [];
                return t.map((function (e) {
                    var t = !0, n = e.match(/((a=rtcp-fb:)|(a=rtpmap:)|(a=fmtp:))(\d+)/);
                    if (n && n[5] && (i(r, s).some((function (e) {
                        return e == n[5]
                    })) || (t = !1)), e.indexOf("m=video") > -1) {
                        var a = e.split(" ");
                        e = i([a[0], a[1], a[2]], r).join(" ")
                    } else if (e.indexOf("m=audio") > -1) {
                        a = e.split(" ");
                        e = i([a[0], a[1], a[2]], s).join(" ")
                    }
                    t && o.push(e)
                })), o.join("\r\n")
            }, e.getSDPByVideDecodeType = function (e, t) {
                var r = {str: "", arr: [], obj: {H264: [], H265: [], VP8: [], VP9: [], OHTER: []}};
                if (!e.includes("m=video")) return e;
                var s = /m=video.+/.exec(e)[0];
                s = s.match(/[\s|\d]+/g)[1].replace(" ", ""), r.str = s, r.arr = r.str.split(" "), r.arr.forEach((function (t) {
                    var i = new RegExp("a=rtpmap:" + t + ".+").exec(e)[0];
                    i.includes("H264") ? r.obj.H264.push(t) : i.includes("H265") ? r.obj.H265.push(t) : i.includes("VP8") ? r.obj.VP8.push(t) : i.includes("VP9") ? r.obj.VP9.push(t) : r.obj.OHTER.push(t)
                })), r.obj.OHTER.forEach((function (t) {
                    var i = new RegExp("a=fmtp:" + t + ".+apt=(\\d+)").exec(e), s = i && i[1];
                    s && (r.obj.H264.includes(s) ? r.obj.H264.push(t) : r.obj.H265.includes(s) ? r.obj.H265.push(t) : r.obj.VP8.includes(s) ? r.obj.VP8.push(t) : r.obj.VP9.includes(s) && r.obj.VP9.push(t))
                }));
                var o = [];
                return "VP9" === t ? o = i(r.obj.H265, r.obj.H264, r.obj.VP8) : "VP8" === t ? o = i(r.obj.H265, r.obj.H264, r.obj.VP9) : "H264" === t ? o = i(r.obj.H265, r.obj.VP8, r.obj.VP9) : "H265" === t && (o = i(r.obj.VP8, r.obj.H264, r.obj.VP9)), o.forEach((function (t) {
                    var i = r.arr.indexOf(t);
                    r.arr.splice(i, 1);
                    var s = new RegExp("a=rtpmap:" + t + ".+\\s\\n", "g"),
                        o = new RegExp("a=rtcp-fb:" + t + ".+\\s\\n", "g"),
                        n = new RegExp("a=fmtp:" + t + ".+\\s\\n", "g");
                    e = (e = (e = e.replace(s, "")).replace(o, "")).replace(n, "")
                })), e = e.replace(s, r.arr.join(" "))
            }, e
        }();
        t.SdpUtil = s
    }, function (e, t, r) {
        "use strict";
        var i, s = this && this.__extends || (i = function (e, t) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }), o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(0), a = r(8), c = r(10), d = r(3), l = r(5), u = r(18), h = r(26), p = r(27), g = r(28), m = r(1),
            f = r(29), v = r(2), S = r(4), C = function (e) {
                function t(t, r) {
                    var i = e.call(this) || this, s = new h.StateCenter, o = new a.LoggerWeb(s);
                    i.dataReport = new f.ZegoDataReport(o);
                    var u = new c.ZegoStreamCenterWeb(o, s, i.dataReport);
                    i.streamCenter = u, i.logger = o, i.stateCenter = s, i.stateCenter.clientType = "rtc", i.audioMixing = new l.AudioMixUtil(o);
                    var p = v.getReportSeq();
                    return i.dataReport.newReport(p), i.init(), d.ClientUtil.setDebug(r, i.stateCenter), d.ClientUtil.checkConfigParam(t, r, o) ? (i.stateCenter.appid = t, "string" == typeof r ? (i.stateCenter.server = r, i.stateCenter.serverBak = r) : Array.isArray(r) && r.length > 0 && (i.stateCenter.server = r[0], i.stateCenter.serverBak = r[1] || r[0]), i.stateCenter.configOK = !0, i.bindWindowListener(), o.info("zc.0 " + navigator.appVersion)) : (o.error("zc.0 init sdk error"), i.dataReport.addMsgInfo(p, {
                        error: S.errorList.kInvalidParamError.code,
                        message: S.errorList.kInvalidParamError.message
                    })), i.logger.setSessionInfo(i.stateCenter.appid, "", "", "", "", n.PROTO_VERSION), i.dataReport.uploadReport(p, S.eventList.kZegoTaskInitSetting), i
                }

                return s(t, e), t.prototype.getSocket = function (e) {
                    return new WebSocket(e)
                }, t.prototype.on = function (e, t) {
                    return this.bindListener(e, t)
                }, t.prototype.off = function (e, t) {
                    return this.deleteListener(e, t)
                }, t.prototype.mutePublishStreamVideo = function (e, t) {
                    var r = v.getReportSeq();
                    this.dataReport.newReport(r, S.eventList.kZegoTaskMutePublishVideo);
                    var i = this.enableStream(e, {video: !t});
                    return this.dataReport.uploadReport(r), i
                }, t.prototype.mutePublishStreamAudio = function (e, t) {
                    var r = v.getReportSeq();
                    this.dataReport.newReport(r, S.eventList.kZegoTaskMutePublishAudio);
                    var i = this.enableStream(e, {audio: !t});
                    return this.dataReport.uploadReport(r), i
                }, t.prototype.enableStream = function (e, t) {
                    if (this.logger.debug("zc.p.ec.0 call"), "boolean" != typeof t.video && "boolean" != typeof t.audio) return this.logger.error("zc.p.es.0 option error"), !1;
                    var r = !0, i = !0;
                    return "boolean" == typeof t.video && (r = this.streamCenter.enableCamera(e, t.video)), "boolean" == typeof t.audio && (i = this.streamCenter.enableMicrophone(e, t.audio)), r && i
                }, t.prototype.setAudioOutput = function (e, t) {
                    return this.logger.debug("zc.p.slao call"), "string" != typeof t ? (console.error("audiooutput is not string"), !1) : this.streamCenter.setStreamAudioOutput(e, t)
                }, t.prototype.setCustomSignalUrl = function (e) {
                    if (this.logger.debug("zc.p.scs.0 call: " + e), !e || 0 == e.length) return this.logger.error("zc.p.scs.0 param error"), !1;
                    var t = !0;
                    e.forEach((function (e) {
                        return 0 != e.indexOf("wss://") && (t = !1)
                    })), t ? this.stateCenter.customUrl = e : this.logger.error("zc.p.scs.0 url is not correct")
                }, t.prototype.setQualityMonitorCycle = function (e) {
                    return "number" == typeof e && e >= 1e3 ? (this.streamCenter.setQualityMonitorCycle(e), !0) : (this.logger.error("zc.sqmc.0 time must be number and bigger than 1000"), !1)
                }, t.prototype.startPlayingStream = function (e, t) {
                    var r = this;
                    this.logger.debug("zc.p.sps.0 call");
                    var i = this.streamCenter.getTotalStreamId(e);
                    return new Promise((function (s, o) {
                        var a = v.getReportSeq();
                        if (r.stateCenter.reportSeqList.startPlay[i] = a, r.dataReport.newReport(a, S.eventList.kZegoTaskPlayStart), "string" != typeof e || "" === e) return r.logger.error("zc.p.sps.0 streamID must be string and not empty"), r.dataReport.uploadReport(a, void 0, S.errorList.kInvalidParamError, "stream id type error"), o(S.errorList.kInvalidParamError), !1;
                        if (r.stateCenter.customUrl && r.stateCenter.customUrl.length > 0) return r.streamCenter.setPlayStateStart(e, t) ? r.streamCenter.startPlayingStream(e, r.stateCenter.customUrl, s) : (r.logger.error("zc.p.sps.0 cannot start play"), o(m.playErrorList.REPEATED_PULL), !1);
                        if (r.dataReport.addMsgInfo(a, {
                            streamID: e,
                            playOption: t
                        }), !r.stateCenter.isLogin()) return r.logger.error("zc.p.sps.0 not login"), r.dataReport.uploadReport(a, void 0, S.errorList.kNotLoginError), o(S.errorList.kNotLoginError), !1;
                        for (var c = !1, d = 0; d < r.stateCenter.streamList.length; d++) if (r.stateCenter.streamList[d].stream_id === e) {
                            c = !0;
                            break
                        }
                        if (0 == c && r.logger.info("zc.p.sps.0 cannot find stream"), r.stateCenter.pullLimited || (e = NaN + e), !r.streamCenter.setPlayStateStart(e, t)) return r.logger.info("zc.p.sps.0 cannot start play"), o(m.playErrorList.REPEATED_PULL), !1;
                        var l = {stream_id: e, ptype: "pull", signals: r.streamCenter.getAllInUseUrl()};
                        return r.streamCenter.playSuccessCallBackList[e] = s, r.socketCenter.registerRouter("webrtc_url", (function (e) {
                            r.handleFetchWebRtcUrlRsp(e)
                        })), r.socketCenter.sendMessage("webrtc_url", l, void 0, (function (t) {
                            r.logger.info("zc.p.sps.0 dispatch error"), t == n.sdkErrorList.SEND_MSG_TIMEOUT ? r.streamCenter.onPlayStateUpdate(n.ENUM_PLAY_STATE_UPDATE.error, e, m.playErrorList.DISPATCH_TIMEOUT) : r.streamCenter.onPlayStateUpdate(n.ENUM_PLAY_STATE_UPDATE.error, e, m.playErrorList.DISPATCH_ERROR), r.streamCenter.stopPlayingStream(e)
                        })), !0
                    }))
                }, t.prototype.stopPlayingStream = function (e) {
                    this.logger.info("zc.p.sps.1.0 call");
                    var t = this.streamCenter.getTotalStreamId(e), r = v.getReportSeq();
                    if (this.stateCenter.reportSeqList.stopPlay[t] = r, this.dataReport.newReport(r, S.eventList.kZegoTaskPlayStop), "string" != typeof e || "" === e) return this.logger.error("zc.p.sps.1.0 streamid must be string and not empty"), this.dataReport.uploadReport(r, void 0, S.errorList.kInvalidParamError, "stream id type error"), void delete this.stateCenter.reportSeqList.stopPlay[t];
                    var i = this.streamCenter.playerList[t];
                    if (!i || 0 == i.serverUrls.length) return i && this.logger.error("zc.p.sps.1.0 stream can not be destroyed"), this.dataReport.uploadReport(r, void 0, S.errorList.kIsPlaying, "can not be destroyed"), void delete this.stateCenter.reportSeqList.stopPlay[t];
                    for (var s in this.streamCenter.stopPlayingStream(e), this.stateCenter.streamUrlMap) if (this.stateCenter.streamUrlMap[s] === e) {
                        delete this.stateCenter.streamUrlMap[s];
                        break
                    }
                    this.dataReport.uploadReport(r), this.logger.debug("zc.p.sps.1.0 call success")
                }, t.prototype.createStream = function (e) {
                    var t = this;
                    return this.logger.debug("zc.p.sp.0 call"), e && e.camera && e.camera.audioBitRate && (e.camera.audioBitrate = e.camera.audioBitRate), e && e.camera && e.camera.bitrate && (e.camera.bitRate = e.camera.bitrate), e && e.screen && "object" == typeof e.screen && e.screen.bitrate && (e.screen.bitRate = e.screen.bitrate), e && e.custom && e.custom.bitrate && (e.custom.bitRate = e.custom.bitrate), new Promise((function (r, i) {
                        var s = v.getReportSeq();
                        t.dataReport.newReport(s, S.eventList.kZegoTaskCreateStream);
                        var o = function (e) {
                            t.dataReport.uploadReport(s), r(e)
                        }, n = function (e, r) {
                            void 0 === r && (r = "");
                            var o = S.codeErrMap[e.code];
                            o ? t.dataReport.addMsgInfo(s, {
                                error: S.errorList[o].code,
                                message: S.errorList[o].message + r
                            }) : t.dataReport.addMsgInfo(s, {
                                error: e.code,
                                message: e.msg
                            }), t.dataReport.uploadReport(s), i(e)
                        };
                        if ("https:" !== window.location.protocol && "file:" !== window.location.protocol && -1 == window.location.hostname.indexOf("127.0.0.1") && -1 == window.location.hostname.indexOf("localhost")) return t.logger.error("zc.p.sp.0 https or localhost required "), t.dataReport.addMsgInfo(s, {
                            error: S.errorList.kHttpsRequired.code,
                            message: S.errorList.kHttpsRequired.message
                        }), t.dataReport.uploadReport(s), void i(m.publishErrorList.BROWSER_NOT_SUPPORT);
                        if (e && e.screen) {
                            if ("object" == typeof e.screen && e.screen.bitRate) {
                                if ("number" != typeof e.screen.bitRate) return t.logger.error("zc.p.sp.0 bitrate must be number"), void n(m.publishErrorList.PARAM, " bitrate must be number");
                                if (e.screen.bitRate > 10240) return t.logger.error("zc.p.sp.0 bitrate cannot greater than 10 Mbps"), void i(m.publishErrorList.PARAM + " bitrate cannot greater than 10 Mbps")
                            }
                            var a = d.ClientUtil.getBrowser(), c = t.streamCenter.getScreenConstrains(e.screen);
                            t.dataReport.addMsgInfo(s, {
                                stream_type: "screen",
                                screen: c
                            }), "Firefox" == a && t.startScreenShotFirFox("screen", c, (function (e, r) {
                                e ? (t.streamCenter.createScreenPreviewer(r, c) && o(r), r.getVideoTracks()[0].onended = function () {
                                    var e = v.getReportSeq();
                                    t.dataReport.newReport(e), t.dataReport.uploadReport(e, S.eventList.kZegoTaskScreenSharingEnded), t.stateCenter.actionListener("screenSharingEnded")
                                }) : n(m.commonErrorList.SCREEN)
                            })), ("Chrome" == a || "Safari" == a) && t.startScreenSharing(c, (function (e, r) {
                                e ? (t.streamCenter.createScreenPreviewer(r, c) && o(r), r.getVideoTracks()[0].onended = function () {
                                    var e = v.getReportSeq();
                                    t.dataReport.newReport(e), t.dataReport.uploadReport(e, S.eventList.kZegoTaskScreenSharingEnded), t.stateCenter.actionListener("screenSharingEnded")
                                }) : "Chrome" == a && t.startScreenShotChrome((function (e, r) {
                                    e ? (t.streamCenter.createScreenPreviewer(r) && o(r), r.getVideoTracks()[0].onended = function () {
                                        var e = v.getReportSeq();
                                        t.dataReport.newReport(e), t.dataReport.uploadReport(e, S.eventList.kZegoTaskScreenSharingEnded), t.stateCenter.actionListener("screenSharingEnded")
                                    }) : n(m.commonErrorList.SCREEN)
                                }))
                            }))
                        } else {
                            if (e && e.camera && e.camera.audioBitrate) {
                                if ("number" != typeof e.camera.audioBitrate) return t.logger.error("zc.p.sp.0 audioBitrate must be number"), void n(m.publishErrorList.PARAM, " audioBitrate must be number");
                                if (e.camera.audioBitrate < 6) return t.logger.error("zc.p.sp.0 audioBitrate cannot less 6 kbps"), void n(m.publishErrorList.PARAM, " audioBitrate cannot less 6 kbps");
                                if (e.camera.audioBitrate > 510) return t.logger.error("zc.p.sp.0 audioBitrate cannot greater than 510 kbps"), void n(m.publishErrorList.PARAM, " audioBitrate cannot greater than 510 kbps");
                                t.stateCenter.audioBitRate = 1e3 * e.camera.audioBitrate
                            }
                            if (e && e.camera && e.camera.bitRate) {
                                if ("number" != typeof e.camera.bitRate) return t.logger.error("zc.p.sp.0 bitrate must be number"), void n(m.publishErrorList.PARAM, " bitrate must be number");
                                if (e.camera.bitRate > 10240) return t.logger.error("zc.p.sp.0 bitrate cannot greater than 10 Mbps"), void n(m.publishErrorList.PARAM, " bitrate cannot greater than 10 Mbps")
                            }
                            if (e && e.custom && e.custom.bitRate) {
                                if ("number" != typeof e.custom.bitRate) return t.logger.error("zc.p.sp.0 bitrate must be number"), void n(m.publishErrorList.PARAM, " bitrate must be number");
                                if (e.custom.bitRate > 10240) return t.logger.error("zc.p.sp.0 bitrate cannot greater than 10 Mbps"), void n(m.publishErrorList.PARAM, " bitrate cannot greater than 10 Mbps")
                            }
                            var l = {};
                            e && e.camera ? (l = e.camera, t.dataReport.addMsgInfo(s, {
                                stream_type: "camera",
                                camera: e.camera
                            }), "boolean" != typeof l.video && (l.video = !0), "boolean" != typeof l.audio && (l.audio = !0)) : e && e.custom && (l = e.custom, t.dataReport.addMsgInfo(s, {
                                stream_type: "custom",
                                custom: e.custom
                            })), t.streamCenter.startPreview(l, o, n)
                        }
                    }))
                }, t.prototype.destroyStream = function (e) {
                    this.logger.info("zc.p.sp.1 call");
                    var t = v.getReportSeq();
                    if (this.dataReport.newReport(t), !(e instanceof MediaStream) || e instanceof MediaStream && 0 == e.getTracks().length) return this.logger.error("zc.p.sp.1 localStream is not mediaStream or tracks is null"), this.dataReport.addMsgInfo(t, {
                        error: S.errorList.kLocalStreamError.code,
                        message: S.errorList.kLocalStreamError.message
                    }), void this.dataReport.uploadReport(t, S.eventList.kZegoTaskDestroyStream);
                    this.streamCenter.stopPreview(e), this.dataReport.uploadReport(t, S.eventList.kZegoTaskDestroyStream)
                }, t.prototype.startPublishingStream = function (e, t, r) {
                    var i = this;
                    this.logger.info("zc.sps.0 call");
                    var s = this.streamCenter.getTotalStreamId(e), o = v.getReportSeq();
                    if (this.stateCenter.reportSeqList.startPublish[s] = o, this.dataReport.newReport(o, S.eventList.kZegoTaskPublishStart), !e || "string" != typeof e) {
                        var a = "stream id type wrong";
                        return this.logger.error("zc.sps.0 " + a), this.dataReport.uploadReport(o, void 0, S.errorList.kInvalidParamError, a), delete this.stateCenter.reportSeqList.startPublish[s], !1
                    }
                    if (!t || t instanceof MediaStream && 0 == t.getTracks().length) {
                        a = "localStream wrong";
                        return this.logger.error("zc.sps.0 " + a), this.dataReport.uploadReport(o, void 0, S.errorList.kInvalidParamError, a), delete this.stateCenter.reportSeqList.startPublish[s], !1
                    }
                    if (!this.stateCenter.isLogin()) return this.logger.error("zc.p.sps.1 not login"), this.dataReport.uploadReport(o, void 0, S.errorList.kNotLoginError), delete this.stateCenter.reportSeqList.startPublish[s], !1;
                    if (r || (r = {}), r.audioBitRate = this.stateCenter.audioBitRate, this.dataReport.addMsgInfo(o, {
                        streamID: e,
                        publishOption: r
                    }), this.stateCenter.customUrl && 0 != this.stateCenter.customUrl.length) return this.stateCenter.publishStreamList[e] = {
                        state: n.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                        extra_info: r.extraInfo ? r.extraInfo : null
                    }, this.streamCenter.setPublishStateStart(e, t, r) ? this.streamCenter.startPublishingStream(e, this.stateCenter.customUrl) : (this.logger.info("zc.p.sps.1 cannot start publish"), !1);
                    if (this.stateCenter.publishStreamList[e] = {
                        state: n.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                        extra_info: r.extraInfo ? r.extraInfo : null
                    }, !this.streamCenter.setPublishStateStart(e, t, r)) return this.logger.error("zc.p.sps.1 cannot start publish"), !1;
                    this.logger.info("zc.p.sps.1 start publish");
                    var c = {
                        stream_id: e,
                        ptype: "push",
                        signals: this.streamCenter.getAllInUseUrl(),
                        header_kvs: [{key: "grpc-metadata-push", value: r && r.cdnUrl || ""}]
                    };
                    return this.socketCenter.registerRouter("webrtc_url", (function (e) {
                        i.handleFetchWebRtcUrlRsp(e)
                    })), this.socketCenter.sendMessage("webrtc_url", c, void 0, (function (t) {
                        i.logger.info("zc.p.sps.1 dispatch error"), t == n.sdkErrorList.SEND_MSG_TIMEOUT ? i.streamHandler.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.error, e, m.publishErrorList.DISPATCH_TIMEOUT) : i.streamHandler.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.error, e, m.publishErrorList.DISPATCH_ERROR), i.streamCenter.stopPublishingStream(e)
                    })), !0
                }, t.prototype.stopPublishingStream = function (e) {
                    this.logger.debug("zc.p.sps.1.1 call");
                    var t = this.streamCenter.getTotalStreamId(e), r = v.getReportSeq();
                    if (this.stateCenter.reportSeqList.stopPublish[t] = r, this.dataReport.newReport(r, S.eventList.kZegoTaskPublishStop), "string" != typeof e || "" == e) return this.logger.error("zc.p.sps.1.1 streamID must be string and not empty"), this.dataReport.uploadReport(r, void 0, S.errorList.kInvalidParamError, "stream id type error"), delete this.stateCenter.reportSeqList.stopPublish[t], !1;
                    var i = this.streamCenter.publisherList[t];
                    return i && 0 != i.serverUrls.length ? (this.streamCenter.stopPublishingStream(e), this.stateCenter.publishStreamList[e] && (this.stateCenter.publishStreamList[e].state >= n.ENUM_PUBLISH_STREAM_STATE.update_info && this.streamHandler.updateStreamInfo(e, n.ENUM_STREAM_SUB_CMD.liveEnd), delete this.stateCenter.publishStreamList[e]), this.dataReport.uploadReport(r), !0) : (i && this.logger.error("zc.p.sps.1.1 stream can not be destroyed"), this.dataReport.uploadReport(r, void 0, S.errorList.kIsPublishing, "can not be destroyed"), delete this.stateCenter.reportSeqList.stopPublish[t], !1)
                }, t.prototype.setPublishStreamConstraints = function (e, t) {
                    var r = this;
                    return this.logger.info("zc.spsc.0 call"), new Promise((function (i, s) {
                        var o = v.getReportSeq();
                        if (t.videoInput ? r.dataReport.newReport(o, S.eventList.kZegoTaskUseVideoDevice) : r.dataReport.newReport(o, S.eventList.kZegoTaskUseAudioDevice), !(e instanceof MediaStream)) return r.logger.error("zc.sc.0 localStream not found"), r.dataReport.addMsgInfo(o, {
                            error: S.errorList.kLocalStreamError.code,
                            message: S.errorList.kLocalStreamError.message
                        }), r.dataReport.uploadReport(o), void s(m.publishErrorList.PARAM);
                        r.streamCenter.setPublishStreamConstraints(e, t, (function () {
                            r.dataReport.uploadReport(o), i()
                        }), (function (e) {
                            e && 1 == e.code ? (r.dataReport.addMsgInfo(o, {
                                error: S.errorList.kPublishConstraintsNotSupport.code,
                                checkMessageTimeout: S.errorList.kPublishConstraintsNotSupport.message
                            }), r.dataReport.uploadReport(o)) : S.codeErrMap[e.code] && (r.dataReport.addMsgInfo(o, {
                                error: S.errorList.kConstraintError.code,
                                checkMessageTimeout: S.errorList.kConstraintError.message
                            }), r.dataReport.uploadReport(o)), s(e)
                        }))
                    }))
                }, t.prototype.preloadEffect = function (e, t, r) {
                    var i = this;
                    e && "number" == typeof e && t && "string" == typeof t ? this.stateCenter.audioEffectBuffer[e] ? this.logger.error("zc.pe.0 audio buffer already exists") : this.audioMixing.preloadEffect(t, (function (t, s) {
                        if (t) return i.logger.error("zc.pe.0 effect preload fail " + t), void (r && r(t));
                        s && (i.stateCenter.audioEffectBuffer[e] = s, r && r())
                    })) : this.logger.error("zc.pe.0 params error")
                }, t.prototype.playEffect = function (e, t, r) {
                    if (e.streamID && "string" == typeof e.streamID && e.effectId && "number" == typeof e.effectId) if (this.stateCenter.audioEffectBuffer[e.effectId]) {
                        var i = this.stateCenter.audioEffectBuffer[e.effectId], s = this.getPublisher(e.streamID);
                        s ? i ? s.playEffect(e, i, t, r) : this.logger.error("zc.pe.1 no audio buffer found") : this.logger.error("zc.pe.1 publisher doesn't exist")
                    } else this.logger.error("zc,pe.1 audio buffer dosesn't exists"); else this.logger.error("zc.pe.1 params error")
                }, t.prototype.pauseEffect = function (e) {
                    if (e && "string" == typeof e) {
                        var t = this.getPublisher(e);
                        t ? t.pauseEffect() : this.logger.error("zc.pe.2 publisher doesn't exist")
                    } else this.logger.error("zc.pe.2 streamID format error")
                }, t.prototype.resumeEffect = function (e) {
                    if (e && "string" == typeof e) {
                        var t = this.getPublisher(e);
                        t ? t.resumeEffect() : this.logger.error("zc.re.0 publisher doesn't exist")
                    } else this.logger.error("zc.re.0 streamID format error")
                }, t.prototype.unloadEffect = function (e) {
                    return e && "number" == typeof e ? (delete this.stateCenter.audioEffectBuffer[e], !0) : (this.logger.error("zc.ue.0 params error"), !1)
                }, t.prototype.startMixingAudio = function (e, t, r) {
                    if (this.logger.debug("zc.sma.0 call"), !e || "string" != typeof e) return this.logger.error("zc.sma.0 stream id error"), !1;
                    if (!t) return this.logger.error("zc.sma.0 no audio"), !1;
                    var i = this.getPublisher(e);
                    return i ? i.startMixingAudio(t, r) : (this.logger.error("zc.sma.0 publisher doesn't exist"), !1)
                }, t.prototype.stopMixingAudio = function (e) {
                    if (!e || "string" != typeof e) return this.logger.error("zc.sma.1 param streamID format error"), !1;
                    var t = this.getPublisher(e);
                    return t ? t.stopMixingAudio() : (this.logger.error("zc.sma.1 publisher doesn't exist"), !1)
                }, t.prototype.setMixingAudioVolume = function (e, t) {
                    if (this.logger.debug("zc.sma.2 call"), "string" != typeof e || "" == e) return this.logger.error("zc.sma.2 stream ID must be string and not empty"), !1;
                    if ("number" != typeof t || t < 0 || t > 100) return this.logger.error("zc.sma.2 volume must be a number between 0 and 100"), !1;
                    var r = this.getPublisher(e);
                    return r ? r.audioMixing.setMixingAudioVolume(t / 100) : (this.logger.error("zc.sma.2 publisher doesn't exist"), !1)
                }, t.prototype.getPublisher = function (e) {
                    var t = null, r = this.streamCenter.getTotalStreamId(e);
                    return this.streamCenter.publisherList[r] && this.streamCenter.publisherList[r].publisher && (t = this.streamCenter.publisherList[r].publisher), t
                }, t.prototype.startScreenShotChrome = function (e) {
                    if (!t.screenShotReady) return this.logger.error('zc.b.ss Please install the extension:1. Go to chrome://extensions  2. Check: "Enable Developer mode   3. Click: "Load the unpacked extension... 4. Choose "extension" folder from the repository 5. Reload this page'), !1;
                    window.postMessage({
                        type: "SS_UI_REQUEST",
                        text: "start"
                    }, "*"), d.ClientUtil.registerCallback("screenShare", {success: e}, this.stateCenter.callbackList)
                }, t.prototype.startScreenSharing = function (e, t) {
                    var r = this;
                    "getDisplayMedia" in navigator.mediaDevices ? navigator.mediaDevices.getDisplayMedia({
                        audio: e.audio,
                        video: {frameRate: e.frameRate}
                    }).then((function (e) {
                        t(!0, e)
                    })).catch((function (e) {
                        r.logger.error("zc.b.sss " + e), t(!1, null, e)
                    })) : this.logger.error("zc.b.sss brower does not support getDisplayMedia")
                }, t.prototype.startScreenShotFirFox = function (e, t, r) {
                    var i = this, s = {video: {frameRate: t.frameRate, bitRate: t.bitRate}, audio: t.audio};
                    s.video.mediaSource = e, navigator.mediaDevices.getUserMedia(s).then((function (e) {
                        i.stateCenter.screenShotStream = e, r(!0, e)
                    })).catch((function (e) {
                        i.logger.error("zc.b.ssf " + e), r(!1, null, e)
                    }))
                }, t.prototype.stopScreenShot = function () {
                    this.stateCenter.screenShotStream.getTracks().forEach((function (e) {
                        e.stop()
                    })), window.postMessage({type: "SS_UI_CANCEL", text: "start"}, "*")
                }, t.prototype.WebrtcOnPublishStateUpdateHandle = function (e, t, r) {
                    this.stateCenter.publishStreamList[t].state == n.ENUM_PUBLISH_STREAM_STATE.publishing && this.streamHandler.onPublishStateUpdate(e, t, r)
                }, t.prototype.setCDNInfo = function (e, t) {
                    e.urlFlv = t.urls_flv instanceof Array ? t.urls_flv[0] : "string" == typeof t.urls_flv ? t.urls_flv : "", e.urlHls = t.urls_m3u8 instanceof Array ? t.urls_m3u8[0] : "string" == typeof t.urls_m3u8 ? t.urls_m3u8 : "", e.urlHttpsFlv = t.urls_https_flv instanceof Array ? t.urls_https_flv[0] : "string" == typeof t.urls_https_flv ? t.urls_https_flv : "", e.urlHttpsHls = t.urls_https_m3u8 instanceof Array ? t.urls_https_m3u8[0] : "string" == typeof t.urls_https_m3u8 ? t.urls_https_m3u8 : "", e.urlRtmp = t.urls_rtmp instanceof Array ? t.urls_rtmp[0] : "string" == typeof t.urls_rtmp ? t.urls_rtmp : ""
                }, t.prototype.loginBodyData = function () {
                    return {
                        id_name: this.stateCenter.idName,
                        nick_name: this.stateCenter.nickName,
                        role: this.stateCenter.role,
                        token: this.stateCenter.token,
                        version: n.PROTO_VERSION,
                        room_name: this.stateCenter.roomid,
                        user_state_flag: this.stateCenter.userStateUpdate ? 1 : 0,
                        room_create_flag: this.stateCenter.roomCreateFlag,
                        client_type: n.E_CLIENT_TYPE.ClientType_Webrtc,
                        third_token: this.stateCenter.third_token,
                        user_count_limit: this.stateCenter.maxMemberCount
                    }
                }, t.prototype.screenStreamFrom = function (e, t, r) {
                    var i = this, s = {};
                    s.audio = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e
                        }
                    }, s.video = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e,
                            maxWidth: window.screen.width,
                            maxHeight: window.screen.height
                        }
                    }, !t && (s.audio = !1), navigator.mediaDevices.getUserMedia(s).then((function (e) {
                        i.stateCenter.screenShotStream = e, r(!0, e)
                    })).catch((function (e) {
                        i.logger.error("zc.b.ssf " + e), r(!1, null, e)
                    }))
                }, t.prototype.filterStreamList = function (e) {
                    var t = {}, r = {}, i = {}, s = [], o = 0;
                    for (var n in this.stateCenter.streamList.forEach((function (t, r) {
                        t.stream_id == e && (o = r)
                    })), this.stateCenter.streamList[o]) "urls_flv" != n && "urls_https_flv" != n || (t[n] = this.stateCenter.streamList[o][n]), "urls_m3u8" != n && "urls_https_m3u8" != n || (r[n] = this.stateCenter.streamList[o][n]), "urls_rtmp" == n && (i[n] = this.stateCenter.streamList[o][n]);
                    var a = window.location.protocol, c = window.navigator.userAgent;
                    if (/Safari/.test(c) && !/Chrome/.test(c)) for (var n in r) r[n] && r[n].forEach((function (e) {
                        -1 !== e.indexOf(a) && s.push(e)
                    })); else if ("http:" == a) for (var n in t) t[n] && t[n].forEach((function (e) {
                        -1 === e.indexOf("http") && -1 === e.indexOf("https") || s.push(e)
                    })); else if ("https:" == a) for (var n in t) t[n] && t[n].forEach((function (e) {
                        -1 !== e.indexOf(a) && s.push(e)
                    })); else if ("rtmp:" == a) for (var n in i) i[n] && i[n].forEach((function (e) {
                        -1 !== e.indexOf(a) && s.push(e)
                    }));
                    return s.filter((function (e, t, r) {
                        return r.indexOf(e) == t
                    }))
                }, t.prototype.voiceChange = function (e, t) {
                    if (!e || "number" != typeof e) return this.logger.error("zc.vc.0 mult error"), !1;
                    if (!t || "string" != typeof t) return this.logger.error("zc.vc.0 stream id error"), !1;
                    var r = this.getPublisher(t);
                    return r ? r.voiceChange(e) : void 0
                }, t.prototype.voiceBack = function (e) {
                    var t = this.getPublisher(e);
                    if (t) return t.voiceBack()
                }, t.prototype.checkSystemRequirements = function () {
                    var e = this,
                        r = navigator && navigator.mediaDevices && (t.screenShotReady || "getDisplayMedia" in navigator.mediaDevices);
                    return new Promise((function (t) {
                        var i = v.getReportSeq();
                        e.dataReport.newReport(i, S.eventList.kZegoTaskCheckSystemRequirements);
                        d.ClientUtil.supportDetection(r, (function (r) {
                            e.dataReport.addMsgInfo(i, {capability: r}), e.dataReport.uploadReport(i), t(r)
                        }))
                    }))
                }, t.prototype.enumDevices = function () {
                    var e = this;
                    return new Promise((function (r, i) {
                        var s = v.getReportSeq();
                        e.dataReport.newReport(s, S.eventList.kZegoTaskEnumDevices);
                        t.getDevices((function (t) {
                            e.dataReport.addMsgInfo(s, {
                                microphones: t.microphone,
                                speakers: t.speaker,
                                cameras: t.cameras
                            }), e.dataReport.uploadReport(s), r(t)
                        }), (function (t) {
                            var r = S.codeErrMap[t.code];
                            r && e.dataReport.addMsgInfo(s, {
                                error: S.errorList[r].code,
                                message: S.errorList[r].message
                            }), e.dataReport.uploadReport(s), i(t)
                        }))
                    }))
                }, t.getDevices = function (e, t) {
                    void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then((function (t) {
                        for (var r = [], i = [], s = [], o = 0; o < t.length; o++) {
                            var n = t[o];
                            "audioinput" === n.kind && r.push({
                                deviceName: n.label,
                                deviceID: n.deviceId
                            }), "audiooutput" === n.kind && i.push({
                                deviceName: n.label,
                                deviceID: n.deviceId
                            }), "videoinput" === n.kind && s.push({deviceName: n.label, deviceID: n.deviceId})
                        }
                        e && e({microphones: r, speakers: i, cameras: s})
                    })).catch((function (e) {
                        console.error("enumerate devices wrong " + e), t && t(m.commonErrorList.ENUMERATE_DEVICES_FAIL)
                    })) : t && t(m.publishErrorList.BROWSER_NOT_SUPPORT)
                }, t.prototype.getAudioInfo = function (e, t, r) {
                    if (!e) return console.error("loclStream is empty!"), !1;
                    var i = o({}, r);
                    return new p.MediaUtil(i).connectToSource(e, (function (e) {
                        t(e)
                    }))
                }, t.prototype.getSoundLevel = function (e, t, r) {
                    this.logger.info("zc.gsl call");
                    var i = v.getReportSeq();
                    this.dataReport.newReport(i, S.eventList.kZegoTaskGetSoundLevel);
                    try {
                        var s = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext),
                            o = s.createMediaStreamSource(e), n = s.createScriptProcessor(4096, 1, 1);
                        this.stateCenter.audioStreamList[e.id] = {
                            mic: o,
                            script: n
                        }, o.connect(n), n.connect(s.destination), n.onaudioprocess = function (e) {
                            for (var r = e.inputBuffer.getChannelData(0), i = 0, s = 0; s < r.length; s++) i < r[s] && (i = r[s]);
                            t(i)
                        }, this.dataReport.uploadReport(i)
                    } catch (e) {
                        r(e), this.dataReport.addMsgInfo(i, {
                            error: S.errorList.kGetSoundLevelError.code,
                            message: S.errorList.kGetSoundLevelError.message
                        }), this.dataReport.uploadReport(i)
                    }
                    this.logger.info("zc.gsl call success")
                }, t.prototype.stopSoundLevel = function (e) {
                    this.logger.info("zc.ssl call");
                    var t = v.getReportSeq();
                    this.dataReport.newReport(t, S.eventList.kZegoTaskStopSoundLevel);
                    var r = this.stateCenter.audioStreamList[e.id];
                    r.mic.disconnect(), r.script.disconnect(), delete this.stateCenter.audioStreamList[e.id], this.dataReport.uploadReport(t)
                }, t.handleDataAvailable = function (e) {
                    e.data && e.data.size > 0 && t.recordedBlobs.push(e.data)
                }, t.prototype.startRecord = function (e) {
                    var r = e.captureStream();
                    t.recordedBlobs = [];
                    var i = {mimeType: "video/webm;codecs=vp9"};
                    g.MediaRecorder.isTypeSupported(i.mimeType) || (i = {mimeType: "video/webm;codecs=vp8"}, g.MediaRecorder.isTypeSupported(i.mimeType) || (i = {mimeType: "video/webm"}, g.MediaRecorder.isTypeSupported(i.mimeType) || (i = {mimeType: ""})));
                    try {
                        t.mediaRecorder = new g.MediaRecorder(r, i)
                    } catch (e) {
                        return void console.error("Exception while creating ZegoMediaRecorder:", e)
                    }
                    t.mediaRecorder.onstop = function (e) {
                        console.log("Recorder stopped: ", e)
                    }, t.mediaRecorder.ondataavailable = t.handleDataAvailable, t.mediaRecorder.start(10)
                }, t.prototype.stopRecord = function () {
                    t.mediaRecorder ? t.mediaRecorder.stop() : console.warn("please invoke startRecord first")
                }, t.prototype.resumeRecord = function () {
                    t.mediaRecorder ? t.mediaRecorder.resume() : console.warn("please invoke startRecord first")
                }, t.prototype.pauseRecord = function () {
                    t.mediaRecorder ? t.mediaRecorder.pause() : console.warn("please invoke startRecord first")
                }, t.prototype.saveRecord = function (e) {
                    if (t.mediaRecorder && t.recordedBlobs) {
                        var r = new Blob(t.recordedBlobs, {type: "video/webm"}), i = window.URL.createObjectURL(r),
                            s = document.createElement("a");
                        s.style.display = "none", s.href = i, s.download = e + ".webm", document.body.appendChild(s), s.click(), setTimeout((function () {
                            document.body.removeChild(s), window.URL.revokeObjectURL(i)
                        }), 100)
                    } else console.warn("please invoke startRecord first")
                }, t.prototype.takeSnapShot = function (e, t) {
                    if (e && 0 !== e.videoHeight) {
                        var r = document.createElement("canvas");
                        r.width = e.videoWidth, r.height = e.videoHeight;
                        var i = r.getContext("2d");
                        i && i.drawImage(e, 0, 0, r.width, r.height), t.src = r.toDataURL("image/jpeg")
                    } else console.error("video can not empty")
                }, t.prototype.saveSnapShot = function (e, t) {
                    if (e && 0 !== e.videoHeight) {
                        var r = document.createElement("canvas");
                        r.width = e.videoWidth, r.height = e.videoHeight;
                        var i = r.getContext("2d");
                        i && i.drawImage(e, 0, 0, r.width, r.height), r.toBlob((function (e) {
                            var r = window.URL.createObjectURL(e), i = document.createElement("a");
                            i.style.display = "none", i.href = r, i.download = t + ".jpeg", document.body.appendChild(i), i.click(), setTimeout((function () {
                                document.body.removeChild(i), window.URL.revokeObjectURL(r)
                            }), 100)
                        }))
                    } else console.error("video can not empty")
                }, t.prototype.useVideoDevice = function (e, t) {
                    return this.logger.info("zc.uvd.0 call"), this.setPublishStreamConstraints(e, {videoInput: t})
                }, t.prototype.useAudioDevice = function (e, t) {
                    return this.logger.info("zc.uad.0 call"), this.setPublishStreamConstraints(e, {audioInput: t})
                }, t.prototype.bindWindowListener = function () {
                    var e = this,
                        t = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ? "pagehide" : "beforeunload";
                    window.addEventListener(t, (function () {
                        for (var t in window.event && (window.event.cancelBubble = !0), e.streamCenter.publisherList) e.stopPublishingStream(t);
                        for (var t in e.streamCenter.playerList) e.stopPlayingStream(t);
                        console.log(e.streamCenter.playerList), console.log(e.streamCenter.publisherList), e.logoutRoom(e.stateCenter.roomid)
                    })), window.addEventListener("message", (function (t) {
                        var r = t.data, i = r.type, s = r.streamID, o = r.canRequestAudioTrack;
                        "SS_DIALOG_SUCCESS" === i && e.screenStreamFrom(s, o, d.ClientUtil.actionSuccessCallback("screenShare", e.stateCenter.callbackList)), "SS_DIALOG_CANCEL" === i && (e.logger.error("zc.b.ss " + i), d.ClientUtil.actionSuccessCallback("screenShare", e.stateCenter.callbackList)(!1, null, i))
                    }))
                }, t.screenShotReady = !1, t
            }(u.BaseCenter);
        t.ZegoExpressEngine = C, window.addEventListener("message", (function (e) {
            var t = e.data.type, r = e.origin;
            r !== window.location.origin && console.warn("ScreenStream: you should discard foreign event from origin:", r), "SS_PING" === t && (C.screenShotReady = !0)
        }))
    }, function (e, t, r) {
        "use strict";
        var i, s = this && this.__extends || (i = function (e, t) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(9), n = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return s(t, e), t.prototype.openWebSocketLogServer = function (e) {
                if (this.url != e) {
                    if (this.url = e, !e) return;
                    this.stopWebSocketServer(), this.websocket = new WebSocket(e), this.websocket.onopen = function (e) {
                    }, this.websocket.onclose = function (e) {
                        console.error("onclose   websocket error:", e)
                    }, this.websocket.onmessage = function (e) {
                    }, this.websocket.onerror = function (e) {
                        console.error("open log websocket error:" + e)
                    }
                }
            }, t.prototype.SendHttpsLog = function () {
                var e = this;
                if (0 != this.logCacheSend.length) {
                    var t = this.logCacheSend.join("\n"), r = new XMLHttpRequest;
                    r.onreadystatechange = function () {
                        if (4 == r.readyState) if (200 == r.status) {
                            if (0 == r.responseText.length) return;
                            try {
                                var t = JSON.parse(r.responseText).interval;
                                "number" == typeof t && e.logUploadInterval !== t && (e.timeInterval = t, e.openHttpsLogServer(e.url))
                            } catch (e) {
                                console.log("send result failed " + e)
                            }
                        } else console.log("send failed " + r.status)
                    }, r.open("POST", this.url, !0), r.send(t), this.logCacheSend = []
                }
            }, t.prototype.logReportParamList = function (e, t) {
                var r = new Date, i = r.getFullYear() + "/";
                return i += (o.D[r.getMonth() + 1] || r.getMonth() + 1) + "/", i += (o.D[r.getDate()] || r.getDate()) + " ", i += (o.D[r.getHours()] || r.getHours()) + ":", i += (o.D[r.getMinutes()] || r.getMinutes()) + ":", i += o.D[r.getSeconds()] || r.getSeconds(), i += "." + r.getTime() % 1e3, t.time = i, t.level = e, t.console = "rtc", t.appid = this.appid, t.room_id = this.roomid, t.userid = this.userid, t.id_name = this.userid, t.userName = this.userName, t.sessionid = this.sessionid, t.sdk_version = this.version, this.appid && this.userid && (t.event_id = this.appid + "_" + this.userid + "_" + t.event_time + "_" + t.seq), [JSON.stringify(t)]
            }, t
        }(o.Logger);
        t.LoggerWeb = n
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0);
        t.D = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
        var s = function () {
            function e(e) {
                this.logLevel = i.ENUM_LOG_LEVEL.info, this.logRemoteLevel = 0, this.logUploadTimer = null, this.logUploadInterval = 1e4, this.logCache = [], this.logCacheSend = [], this.logCacheMax = 100, this.existUserID = !1, this.stateCenter = e
            }

            return e.prototype.setLogLevel = function (e) {
                this.logLevel < i.ENUM_LOG_LEVEL.debug || this.logLevel > i.ENUM_LOG_LEVEL.report ? this.logLevel = i.ENUM_LOG_LEVEL.disable : this.logLevel = e
            }, e.prototype.setRemoteLogLevel = function (e) {
                this.logRemoteLevel < i.ENUM_LOG_LEVEL.debug || this.logRemoteLevel > i.ENUM_LOG_LEVEL.report ? this.logRemoteLevel = i.ENUM_LOG_LEVEL.disable : this.logRemoteLevel = e
            }, e.prototype.setSessionInfo = function (e, t, r, i, s, o) {
                this.appid = e, this.roomid = t, this.sessionid = r, this.userid = i, this.userName = s, this.version = o
            }, e.prototype.openLogServer = function (e) {
                try {
                    e.startsWith("wss:") ? (this.logType = i.ENUM_REMOTE_TYPE.websocket, this.openWebSocketLogServer(e)) : e.startsWith("https:") ? (this.logType = i.ENUM_REMOTE_TYPE.https, this.openHttpsLogServer(e)) : this.logType = i.ENUM_REMOTE_TYPE.disable
                } catch (e) {
                    this.error(JSON.stringify(e))
                }
            }, e.prototype.stopLogServer = function () {
                this.logType == i.ENUM_REMOTE_TYPE.websocket ? this.stopWebSocketServer() : this.logType == i.ENUM_REMOTE_TYPE.https && (this.SendHttpsLog(), this.stopHttpsServer()), this.logType = i.ENUM_REMOTE_TYPE.disable
            }, e.prototype.stopWebSocketServer = function () {
                this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null)
            }, e.prototype.openHttpsLogServer = function (e) {
                var t = this;
                this.url = e, e && (this.stopHttpsServer(), this.logUploadTimer || (this.logUploadTimer = setInterval((function () {
                    t.SendHttpsLog()
                }), this.logUploadInterval)))
            }, e.prototype.stopHttpsServer = function () {
                this.logUploadTimer && (clearInterval(this.logUploadTimer), this.logUploadTimer = null)
            }, e.prototype.report = function (e) {
                var t = this.logReportParamList(i.ENUM_LOG_LEVEL.report, e);
                this.logLevel !== i.ENUM_LOG_LEVEL.disable && this.logLevel <= i.ENUM_LOG_LEVEL.report && console.debug(t), this.RemoteLog(i.ENUM_LOG_LEVEL.report, t, !0)
            }, e.prototype.debug = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(i.ENUM_LOG_LEVEL.debug, e.join(""));
                this.logLevel !== i.ENUM_LOG_LEVEL.disable && this.logLevel <= i.ENUM_LOG_LEVEL.debug && console.debug(r), this.log(i.ENUM_LOG_LEVEL.debug, r)
            }, e.prototype.info = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(i.ENUM_LOG_LEVEL.info, e.join(""));
                this.logLevel !== i.ENUM_LOG_LEVEL.disable && this.logLevel <= i.ENUM_LOG_LEVEL.info && console.info(r), this.log(i.ENUM_LOG_LEVEL.info, r)
            }, e.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(i.ENUM_LOG_LEVEL.warn, e.join(""));
                this.logLevel !== i.ENUM_LOG_LEVEL.disable && this.logLevel <= i.ENUM_LOG_LEVEL.warn && console.warn(r), this.log(i.ENUM_LOG_LEVEL.warn, r)
            }, e.prototype.error = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r = this.logParamList(i.ENUM_LOG_LEVEL.error, e.join(""));
                this.logLevel !== i.ENUM_LOG_LEVEL.disable && this.logLevel <= i.ENUM_LOG_LEVEL.error && (console.error(r), window ? this.stateCenter.debug && window.alert(e.join("").substr(e.join("").indexOf(" ") + 1, 4500)) : wx && this.stateCenter.debug && wx.showModal({
                    title: "",
                    content: e.join("").substr(e.join("").indexOf(" ") + 1, 4500)
                })), this.log(i.ENUM_LOG_LEVEL.error, r)
            }, e.prototype.log = function (e, t) {
                this.logRemoteLevel !== i.ENUM_LOG_LEVEL.disable && this.logRemoteLevel <= e && this.RemoteLog(e, t)
            }, e.prototype.RemoteLog = function (e, t, r) {
                if (void 0 === r && (r = !1), "" != this.url) if (this.logType == i.ENUM_REMOTE_TYPE.websocket) this.RemoteWebSocketLog(e, t); else if (this.logType == i.ENUM_REMOTE_TYPE.https) this.RemoteHttpsLog(e, t, r); else if (this.logLevel !== i.ENUM_LOG_LEVEL.disable && this.logLevel <= e) for (this.logCacheSend.push(t); this.logCacheSend.length > this.logCacheMax;) this.logCacheSend.shift()
            }, e.prototype.RemoteWebSocketLog = function (e, t) {
                if ("string" == typeof t && t.length > 4e3) console.info("log over maximum, ignore"); else if (null == this.websocket || 2 == this.websocket.readyState || 3 == this.websocket.readyState) {
                    var r = this.url;
                    this.url = "", this.openLogServer(r), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
                } else if (0 == this.websocket.readyState) this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t); else if (1 == this.websocket.readyState) if (this.logCacheSend.length > 0) {
                    for (var i = "", s = 0; s < this.logCacheSend.length; s++) (i + this.logCacheSend[s]).length > 4e3 && (this.websocket.send(i), i = ""), i = i + this.logCacheSend[s] + "\n";
                    t = i + t, this.logCacheSend = [], this.websocket.send(t)
                } else this.websocket.send(t); else console.warn("wrong socket state:" + this.websocket.readyState), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
            }, e.prototype.RemoteHttpsLog = function (e, t, r) {
                this.logCacheSend.push(t), (this.logCacheSend.length >= this.logCacheMax || !0 === r) && this.SendHttpsLog()
            }, e.prototype.logParamList = function (e, r) {
                var i = new Date, s = i.getFullYear() + "/";
                s += (t.D[i.getMonth() + 1] || i.getMonth() + 1) + "/", s += (t.D[i.getDate()] || i.getDate()) + " ", s += (t.D[i.getHours()] || i.getHours()) + ":", s += (t.D[i.getMinutes()] || i.getMinutes()) + ":", s += t.D[i.getSeconds()] || i.getSeconds(), s += "." + i.getTime() % 1e3;
                var o = r.substr(0, r.indexOf(" "));
                0 == o.length && (o = r);
                var n = r.substr(r.indexOf(" ") + 1, 4500);
                0 == n.length && (n = "");
                var a = {
                    time: s,
                    level: e,
                    action: o,
                    content: n,
                    appid: this.appid,
                    roomid: this.roomid,
                    userid: this.userid,
                    userName: this.userName,
                    sessionid: this.sessionid
                };
                return JSON.stringify(a)
            }, e
        }();
        t.Logger = s
    }, function (e, t, r) {
        "use strict";
        var i, s = this && this.__extends || (i = function (e, t) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }), o = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var i = Array(e), s = 0;
            for (t = 0; t < r; t++) for (var o = arguments[t], n = 0, a = o.length; n < a; n++, s++) i[s] = o[n];
            return i
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(11), a = r(12), c = r(1), d = r(2), l = r(0), u = r(15), h = r(16), p = r(17), g = r(4),
            m = function (e) {
                function t(t, r, i) {
                    var s = e.call(this, t, r) || this;
                    return s.testEnvironment = !1, s.heartbeatTimer = null, s.heartbeatInterval = 1e4, s.qualityTimerInterval = 3e3, s.maxRetryCount = 5, s.previewVideoList = [], s.signalList = {}, s.chargeInfos = {
                        itemtype: "ChargeInfos",
                        timestamp_begin: 0,
                        timestamp_end: 0,
                        timestamp_diff_flag: 0,
                        timestamp_diff: 0,
                        infos: []
                    }, s.chargeInfosTimer = null, s.chargeInfosInterval = 6e4, s.chargeInfoSeq = 0, s.tryCountConnectInterval = 3e3, s.checkMessageTimeout = function () {
                        for (var e in s.signalList) s.signalList[e].signal && s.signalList[e].signal.checkMessageTimeout()
                    }, s.getAllInUseUrl = function () {
                        var e = [];
                        for (var t in s.signalList) e.push(t);
                        return e
                    }, s.onDisconnectHandle = function (e) {
                        if (s.logger.info("zsc.od.0 call"), s.signalList[e]) {
                            for (var t = s.signalList[e], r = 0; r < t.publishConnectedList.length; r++) {
                                var i = s.publisherList[t.publishConnectedList[r]];
                                i && i.publisher && i.publisher.onDisconnect()
                            }
                            for (r = 0; r < t.playConnectedList.length; r++) {
                                var o = s.playerList[t.playConnectedList[r]];
                                o && o.player && o.player.onDisconnect()
                            }
                            delete s.signalList[e], s.stopSignalHeartbeat()
                        }
                    }, s.logger = t, s.stateCenter = r, s.dataReport = i, s
                }

                return s(t, e), t.prototype.onSignalDisconnected = function (e) {
                }, t.prototype.setQualityMonitorCycle = function (e) {
                    var t = this;
                    return this.logger.debug("zsc.qmc.0 timeInterval " + e), 0 == Object.keys(this.publisherList).length ? this.qualityTimerInterval = e : Object.keys(this.publisherList).forEach((function (r) {
                        t.publisherList[r].publisher.qualityTimeInterval = e, t.publisherList[r].publisher.setPublishQualityTimer()
                    })), !0
                }, t.prototype.setSessionInfo = function (e, t, r, i) {
                    this.logger.debug("zsc.ssi.0 called"), this.appid = e, this.userid = t, this.token = r, this.testEnvironment = i
                }, t.prototype.onPlayStateUpdate = function (e, t, r) {
                }, t.prototype.onPlayQualityUpdate = function (e, t) {
                }, t.prototype.onPublishStateUpdate = function (e, t, r) {
                }, t.prototype.onPublishQualityUpdate = function (e, t) {
                }, t.prototype.onUpdateHeartBeartIntervalHandle = function (e) {
                    e != this.heartbeatInterval && (this.logger.debug("zsc.uhb.0 update " + e), this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null), this.heartbeatInterval = e, this.startSignalHeartbeat())
                }, t.prototype.enableMicrophone = function (e, t) {
                    var r = this.checkPreview(e);
                    return r ? r.enableMicrophone(t, this) : (this.logger.error("zsc.em.0 no preview"), !1)
                }, t.prototype.enableCamera = function (e, t) {
                    var r = this.checkPreview(e);
                    return r ? r.enableCamera(t, this) : (this.logger.error("zsc.ec.0 no preview"), !1)
                }, t.prototype.startPreview = function (e, t, r) {
                    var i = this, s = null;
                    return s = new n.ZegoPreview(this.logger), this.previewVideoList.push(s), s.startPreview(e, (function (e) {
                        i.logger.debug("zsc.sp.0 call success"), t && t(e)
                    }), (function (e) {
                        i.previewVideoList = i.previewVideoList.filter((function (e) {
                            return e !== s
                        })), r && r(e)
                    })), !0
                }, t.prototype.stopPreview = function (e) {
                    if (!e) return this.logger.warn("zsc.sp.0 localStream null"), !1;
                    for (var t in this.publisherList) this.publisherList[t].localStream === e && (this.publisherList[t].localStream = null);
                    var r = this.checkPreview(e);
                    return r ? (r.previewSuc && (r.stopPreview(), this.removePreview(r)), !0) : (this.logger.warn("zsc.sp.0 no preview"), !1)
                }, t.prototype.setPublishStateStart = function (e, t, r) {
                    var i = this, s = this.getTotalStreamId(e), o = this.publisherList[s],
                        n = this.stateCenter.reportSeqList.startPublish[s];
                    if (this.dataReport.eventStart(n, "setPublishState"), o) return this.logger.error("zsc.pss.0 publisher already exist"), this.dataReport.eventEndWithMsgInfo(n, "setPublishState", {message: "publisher already exist"}), this.dataReport.uploadReport(n, void 0, g.errorList.kIsPublishing), delete this.stateCenter.reportSeqList.startPublish[s], !1;
                    var c = new a.ZegoPublish(this.logger, null, this.dataReport, this.qualityTimerInterval, this);
                    return c.reportSeq = this.stateCenter.reportSeqList.startPublish[s] || 0, c.onPublishStateUpdate = function (t, r, s) {
                        var o = i.publisherList[r];
                        o ? i.onPublishStateUpdate(t, o.streamID, s) : i.logger.error("zsc.psuh.0 cannot find publish " + e)
                    }, c.onPublishQualityUpdate = function (t, r) {
                        var s = i.publisherList[t];
                        s ? i.onPublishQualityUpdate(s.streamID, r) : i.logger.error("zsc.psuh.0 cannot find publish " + e)
                    }, this.publisherList[s] = {
                        localStream: t,
                        publisher: c,
                        serverUrls: [],
                        retryCount: 0,
                        streamID: e,
                        publishOption: r,
                        tryCountConnect: 1,
                        countConnectTimer: void 0
                    }, this.dataReport.eventStart(c.reportSeq, "GetSignalUrl"), !0
                }, t.prototype.getTotalStreamId = function (e) {
                    if (this.testEnvironment) {
                        var t = "zegotest-" + this.appid + "-" + e;
                        return this.logger.info("zsc.gts.0 test streamid " + t), t
                    }
                    return e
                }, t.prototype.startPublishingStream = function (e, t) {
                    this.logger.info("zsc.sps.0 call");
                    var r = this.getTotalStreamId(e), i = this.publisherList[r];
                    if (!i) return this.logger.error("zsc.sps.0 publisher don't exist"), !1;
                    var s = i.publisher;
                    if (this.dataReport.eventEndWithMsg(s.reportSeq, "GetSignalUrl", {urls: t}), !t || 0 === t.length) return this.onPublishStateUpdate(d.ENUM_PUBLISH_STATE_UPDATE.error, e, c.publishErrorList.DISPATCH_ERROR), this.logger.info("zsc.sps.0 server don't have signal url"), !1;
                    i.serverUrls = o(i.serverUrls, t);
                    var n = t.indexOf(this.server);
                    return -1 !== n && (i.serverUrls.splice(n, 1), i.serverUrls.unshift(this.server)), this.connectPublishServer(r)
                }, t.prototype.updateWaitingList = function (e, t, r, i, s) {
                    t ? e.publishWaitingList.push({
                        streamID: r,
                        success: i,
                        error: s
                    }) : e.playWaitingList.push({streamID: r, success: i, error: s})
                }, t.prototype.publishStream = function (e) {
                    var t = this.publisherList[e].publisher;
                    if (t) {
                        var r = null, i = null, s = this.publisherList[e].publishOption,
                            o = this.checkPreview(this.publisherList[e].localStream);
                        o ? (r = o.localStream, i = o.videoInfo, r ? (this.logger.debug("zsc.ps.0 call success"), t.startPublish(e, r, i, o.mediaStreamConfig, s)) : this.logger.error("zsc.ps.0 no localStream found")) : this.logger.error("zsc.ps.0 no preview found")
                    } else this.logger.info("zsc.ps.0 publisher don't exist")
                }, t.prototype.connectPublishServer = function (e, t) {
                    var r = this, i = this.publisherList[e];
                    return i ? (this.dataReport.eventStart(t ? i.publisher.retrySeq : i.publisher.reportSeq, "ConnectServer"), this.connetWithReuseSignalServerTimer(e, !0, (function (e, i, s) {
                        var o = r.publisherList[e];
                        if (o) {
                            var n = o.publisher;
                            if (n) {
                                r.dataReport.eventEndWithMsg(t ? n.retrySeq : n.reportSeq, "ConnectServer", {
                                    result: 0,
                                    server: s
                                });
                                var a = i.tokenInfo;
                                r.logger.info("zsc.cps.0 update token success"), a && a.report && (n.qualityUpload = a.report, n.qualityUploadInterval = a.report_interval), n.signal = i.signal, o.retryCount = 0, r.server = s, r.publishStream(e), r.getTokenSuccess()
                            } else r.logger.info("zsc.cps.1 check publisher don't exist")
                        } else r.logger.info("zsc.cps.0 after connect publisher don't exist")
                    }), (function (e, i) {
                        r.logger.error("zsc.cps.0 update token failed " + i);
                        var s = r.publisherList[e];
                        if (s) {
                            var o = s.publisher;
                            o ? r.shouldRetry(s, i) ? (r.logger.info("zsc.cps.1 retry connect"), s.serverUrls.splice(0, 1), s.retryCount += 1, r.connectPublishServer(e)) : (t ? (r.dataReport.eventEndWithMsg(o.retrySeq, "ConnectServer", {result: i}), r.dataReport.uploadReport(o.retrySeq), delete r.stateCenter.reportSeqList.rePublish[e]) : (r.dataReport.eventEndWithMsg(o.reportSeq, "ConnectServer", {result: i}), r.dataReport.uploadReport(o.reportSeq), delete r.stateCenter.reportSeqList.startPublish[e]), r.onPublishStateUpdate(d.ENUM_PUBLISH_STATE_UPDATE.error, e, c.publishErrorList.TOKEN_ERROR)) : r.logger.info("zsc.cps.1 check publisher don't exist")
                        } else r.logger.info("zsc.cps.0 after connect publisher don't exist")
                    }), t), !0) : (this.logger.error("zsc.cps.0 publisher don't exist"), !1)
                }, t.prototype.shouldRetry = function (e, t) {
                    return 0 != e.serverUrls.length && (!(e.retryCount >= this.maxRetryCount) && 3 == t)
                }, t.prototype.getTokenSuccess = function () {
                    this.logger.debug("zsc.gts.0 call")
                }, t.prototype.stopPublishingStream = function (e) {
                    var t = this.getTotalStreamId(e), r = this.publisherList[t];
                    r ? (delete this.publisherList[t], r.publisher && (r.publisher.stopPublish(), delete r.publisher), this.removeStreamFromSignal(!0, t), this.stopSignalHeartbeat(), this.logger.debug("zsc.sps.0.1 call success")) : this.logger.warn("zsc.sps.0.1 publisher don't exist")
                }, t.prototype.setStreamAudioOutput = function (e, t) {
                    var r = this;
                    return !(null == t || 0 == t.length || !e) && (this.logger.debug("zsc.ssao.0 device " + t), e ? "undefined" !== e.sinkId ? (e.setSinkId(t).then((function () {
                        r.logger.info("zsc.ssao.0 success device: " + t)
                    })).catch((function (e) {
                        r.logger.info("zsc.ssao.0 " + e.name)
                    })), !0) : (this.logger.error("zsc.ssao.0 browser does not suppport"), !1) : (this.logger.error("zsc.ssao.0 no localVideo"), !1))
                }, t.prototype.connetWithReuseSignalServer = function (e, t, r, i, s, o) {
                    var n = this;
                    this.logger.info("zsc.crss.0 begin " + r);
                    var a = null;
                    if (this.signalList[r] && !o) (a = this.signalList[r]).state == l.ENUM_SIGNAL_STATE.connected ? (this.logger.info("zsc.crss.0 already connected " + r + " streamId: " + e), t ? a.publishConnectedList.push(e) : a.playConnectedList.push(e), i(e, a)) : a.state == l.ENUM_SIGNAL_STATE.connecting && (this.logger.debug("zsc.crss.0 signal is connecting " + r + " streamId: " + e), this.updateWaitingList(a, t, e, i, s)); else {
                        this.logger.info("zsc.crss.0 new signal " + r + " streamId: " + e);
                        var c = new u.ZegoSignal(this.logger, this.stateCenter);
                        c.setSessionInfo(this.appid, this.userid), c.onUpdateHeartBeartInterval = this.onUpdateHeartBeartIntervalHandle, c.onDisconnect = this.onDisconnectHandle, this.signalList[r] = {
                            signal: c,
                            state: l.ENUM_SIGNAL_STATE.connecting,
                            publishWaitingList: [],
                            playWaitingList: [],
                            publishConnectedList: [],
                            playConnectedList: [],
                            tokenInfo: null
                        }, this.updateWaitingList(this.signalList[r], t, e, i, s), c.connectServer(this.token, r, (function (e, t, i) {
                            a = n.signalList[r];
                            var s, o, c = 0;
                            if (0 != e) {
                                for (n.logger.debug("zsc.crss.0 connect failed " + t), c = 0; c < a.publishWaitingList.length; c++) (s = a.publishWaitingList[c]).error && s.error(s.streamID, e);
                                for (c = 0; c < a.playWaitingList.length; c++) (o = a.playWaitingList[c]).error && o.error(o.streamID, e);
                                delete n.signalList[r]
                            } else {
                                for (n.logger.debug("zsc.crss.0 connected success " + t), a.state = l.ENUM_SIGNAL_STATE.connected, a.tokenInfo = i, c = 0; c < a.publishWaitingList.length; c++) (s = a.publishWaitingList[c]).success && s.success(s.streamID, a), a.publishConnectedList.push(s.streamID);
                                for (c = 0; c < a.playWaitingList.length; c++) (o = a.playWaitingList[c]).success && o.success(o.streamID, a), a.playConnectedList.push(o.streamID);
                                a.publishWaitingList = [], a.playWaitingList = [], null == n.heartbeatTimer && n.startSignalHeartbeat(), null == n.chargeInfosTimer && n.startChargeInfosUpload()
                            }
                        }))
                    }
                }, t.prototype.setPlayStateStart = function (e, t) {
                    var r = this, i = this.getTotalStreamId(e), s = this.playerList[i],
                        o = this.stateCenter.reportSeqList.startPlay[i];
                    if (this.dataReport.eventStart(o, "setPlayState"), s) return this.logger.error("zsc.pss.1 player already exist"), this.dataReport.eventEndWithMsgInfo(o, "setPlayState", {message: "player already exist"}), this.dataReport.uploadReport(o, void 0, g.errorList.kIsPlaying), delete this.stateCenter.reportSeqList.startPlay[i], !1;
                    var n = new h.ZegoPlayWeb(this.logger, null, this.dataReport, this.qualityTimerInterval, this);
                    return n.reportSeq = this.stateCenter.reportSeqList.startPlay[i], this.playerList[i] = {
                        player: n,
                        signal: null,
                        serverUrls: [],
                        retryCount: 0,
                        streamID: e,
                        playOption: t,
                        tryCountConnect: 1,
                        countConnectTimer: void 0
                    }, n.onPlayStateUpdate = function (e, t, i) {
                        var s = r.playerList[t];
                        s ? r.onPlayStateUpdate(e, s.streamID, i) : r.logger.error("zsc.pss.1 cannot find play " + t)
                    }, n.onPlayQualityUpdate = function (e, t) {
                        var i = r.playerList[e];
                        i ? r.onPlayQualityUpdate(i.streamID, t) : r.logger.error("zsc.pss.1 cannot find play " + e)
                    }, n.onRemoteCameraStatusUpdate = function (e, t) {
                        var i = r.playerList[e];
                        i ? r.onRemoteCameraStatusUpdate(i.streamID, t) : r.logger.error("zsc.pss.1 cannot find play " + e)
                    }, n.onRemoteMicStatusUpdate = function (e, t) {
                        var i = r.playerList[e];
                        i ? r.onRemoteMicStatusUpdate(i.streamID, t) : r.logger.error("zsc.pss.1 cannot find play " + e)
                    }, this.dataReport.eventStart(n.reportSeq, "GetSignalUrl"), !0
                }, t.prototype.startPlayingStream = function (e, t, r) {
                    this.logger.info("zsc.sps.1 start play called");
                    var i = this.getTotalStreamId(e), s = this.playerList[i];
                    if (!s) return this.logger.error("zsc.sps.1 player don't exist"), !1;
                    var n = s.player;
                    if (this.dataReport.eventEndWithMsg(n.reportSeq, "GetSignalUrl", {urls: t}), 0 == t.length) return this.onPlayStateUpdate(d.ENUM_PLAY_STATE_UPDATE.error, e, c.playErrorList.DISPATCH_ERROR), this.logger.info("zsc.sps.1 server don't have signal url"), !1;
                    s.serverUrls = o(s.serverUrls, t);
                    var a = t.indexOf(this.server);
                    return -1 !== a && (s.serverUrls.splice(a, 1), s.serverUrls.unshift(this.server)), this.connectPlayServer(i, r)
                }, t.prototype.connectPlayServer = function (e, t, r) {
                    var i = this, s = this.playerList[e];
                    return s ? (this.dataReport.eventStart(r ? s.player.retrySeq : s.player.reportSeq, "ConnectServer"), this.connetWithReuseSignalServerTimer(e, !1, (function (e, s, o) {
                        var n = i.playerList[e];
                        if (n) {
                            var a = n.player;
                            if (a) {
                                i.dataReport.eventEndWithMsg(r ? a.retrySeq : a.reportSeq, "ConnectServer", {
                                    result: 0,
                                    server: o
                                });
                                var c = s.tokenInfo;
                                i.logger.info("zsc.cps.1 update token success"), c && c.report && (a.qualityUpload = c.report, a.qualityUploadInterval = c.report_interval), a.signal = s.signal, n.retryCount = 0, i.server = o, i.playStream(e, t), i.getTokenSuccess()
                            } else i.logger.error("zsc.cps.1 checkplayer don't exist")
                        } else i.logger.error("zsc.cps.1 after connect player don't exist")
                    }), (function (s, o) {
                        var n = i.playerList[s];
                        if (n) if (i.shouldRetry(n, o)) {
                            i.logger.info("zsc.cps.1 retry connect");
                            n.serverUrls[0];
                            n.serverUrls.splice(0, 1), n.retryCount += 1, i.connectPlayServer(s, t)
                        } else r ? (i.dataReport.eventEndWithMsg(n.player.retrySeq, "ConnectServer", {result: o}), i.dataReport.uploadReport(n.player.retrySeq), delete i.stateCenter.reportSeqList.rePlay[e]) : (i.dataReport.eventEndWithMsg(n.player.reportSeq, "ConnectServer", {result: o}), i.dataReport.uploadReport(n.player.reportSeq), delete i.stateCenter.reportSeqList.startPlay[e]), i.onPlayStateUpdate(d.ENUM_PLAY_STATE_UPDATE.error, s, c.playErrorList.TOKEN_ERROR); else i.logger.error("zsc.cps.1 after connect player don't exist")
                    }), r), !0) : (this.logger.error("zsc.cps.1 player don't exist"), !1)
                }, t.prototype.connetWithReuseSignalServerTimer = function (e, t, r, i, s) {
                    var o, n, a = this;
                    if (t && this.publisherList[e]) {
                        if (o = this.publisherList[e].serverUrls, this.publisherList[e].tryCountConnect > 3 * o.length) return void this.logger.error("zs.crsst.0 beyond max limit");
                        this.publisherList[e].countConnectTimer = setTimeout((function () {
                            a.connetWithReuseSignalServerTimer(e, t, r, i, s)
                        }), this.tryCountConnectInterval), n = o[(this.publisherList[e].tryCountConnect - 1) % o.length], this.logger.info("zs.crsst.0 called " + this.publisherList[e].tryCountConnect + " " + n), this.connetWithReuseSignalServer(e, t, n, (function (t, i) {
                            a.publisherList[e].tryCountConnect = 1, r(t, i, n), clearTimeout(a.publisherList[e].countConnectTimer)
                        }), this.publisherList[e].tryCountConnect === 3 * o.length ? i : void 0, s), ++this.publisherList[e].tryCountConnect
                    } else if (!t && this.playerList[e]) {
                        if (o = this.playerList[e].serverUrls, this.playerList[e].tryCountConnect > 3 * o.length) return void this.logger.error("zs.crsst.0 beyond max limit");
                        this.logger.info("zs.crsst.0 called " + this.playerList[e].tryCountConnect), this.playerList[e].countConnectTimer = setTimeout((function () {
                            a.connetWithReuseSignalServerTimer(e, t, r, i, s)
                        }), this.tryCountConnectInterval), n = o[(this.playerList[e].tryCountConnect - 1) % o.length], this.connetWithReuseSignalServer(e, t, n, (function (t, i) {
                            a.playerList[e].tryCountConnect = 1, r(t, i, n), clearTimeout(a.playerList[e].countConnectTimer)
                        }), this.playerList[e].tryCountConnect === 3 * o.length ? i : void 0, s), ++this.playerList[e].tryCountConnect
                    }
                }, t.prototype.playStream = function (e, t) {
                    var r = this.playerList[e].player;
                    r ? (this.logger.info("zsc.ps.1 call success"), r.startPlay(e, t, this.playerList[e].playOption)) : this.logger.warn("zsc.ps.1 player don't exist")
                }, t.prototype.removeStreamFromSignal = function (e, t) {
                    var r = [];
                    for (var i in this.signalList) {
                        var s = this.signalList[i];
                        if (e) {
                            for (var o = 0; o < s.publishConnectedList.length; o++) if (s.publishConnectedList[o] === t) {
                                this.logger.debug("zsc.rsfs.0 found from publish"), s.publishConnectedList.splice(o, 1);
                                break
                            }
                        } else for (var n = 0; n < s.playConnectedList.length; n++) if (s.playConnectedList[n] === t) {
                            this.logger.debug("zsc.rsfs.0 found from play"), s.playConnectedList.splice(n, 1);
                            break
                        }
                        0 == s.publishConnectedList.length && 0 == s.playConnectedList.length && (s.signal.disconnectServer(), r.push(i))
                    }
                    for (var a = 0; a < r.length; a++) delete this.signalList[r[a]]
                }, t.prototype.stopSignalHeartbeat = function () {
                    this.logger.debug("zsc.ssh.1 call");
                    var e = 0;
                    for (var t in this.signalList) e += 1;
                    this.heartbeatTimer && 0 == e && (this.logger.info("zsc.ssh.1 stop"), clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
                }, t.prototype.stopPlayingStream = function (e) {
                    var t = this.getTotalStreamId(e), r = this.playerList[t];
                    r ? (delete this.playerList[t], r.player && (r.player.stopPlay(), delete r.player), this.removeStreamFromSignal(!1, t), this.stopSignalHeartbeat(), delete this.playSuccessCallBackList[e], this.logger.debug("zsc.sps.1.1 call success")) : this.logger.info("zsc.sps.1.1 player don't exist")
                }, t.prototype.reset = function () {
                    for (var e in this.publisherList) this.publisherList[e].publisher && this.publisherList[e].publisher.stopPublish();
                    for (var t in this.playerList) this.playerList[t].player && this.playerList[t].player.stopPlay();
                    for (var r in this.signalList) this.signalList[r].signal && this.signalList[r].signal.disconnectServer();
                    this.playerList = {}, this.publisherList = {}, this.signalList = {}, this.server = "", this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
                }, t.prototype.startSignalHeartbeat = function () {
                    var e = this;
                    this.logger.debug("zsc.ssh.0 call"), this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null), this.heartbeatTimer = setTimeout((function () {
                        e.checkSignalHeartbeat()
                    }), this.heartbeatInterval)
                }, t.prototype.startChargeInfosUpload = function () {
                    var e = this;
                    this.logger.debug("zsc.sciu.0 call"), this.chargeInfosTimer && (clearTimeout(this.chargeInfosTimer), this.chargeInfosTimer = null), this.chargeInfosTimer = setTimeout((function () {
                        e.checkChargeInfos()
                    }), this.chargeInfosInterval)
                }, t.prototype.checkChargeInfos = function () {
                    this.logger.debug("zsc.cci.0 call");
                    var e = {is_publishing: 0, play_max_audio_bitrate: 0, play_stream_resolution_infos: []};
                    for (var t in this.chargeInfos.timestamp_begin = (new Date).getTime(), this.publisherList) {
                        this.publisherList[t].publisher.state === l.ENUM_PUBLISH_STATE.publishing && (e.is_publishing = 1);
                        break
                    }
                    e.play_max_audio_bitrate = 0;
                    var r = function (t) {
                        var r = i.playerList[t].player.playStream,
                            s = r && 0 !== r.getVideoTracks().length ? r.getVideoTracks()[0].getSettings() : void 0,
                            o = {
                                video_width: s && s.width ? s.width : 0,
                                video_height: s && s.height ? s.height : 0,
                                count: 1
                            };
                        if (!e.play_stream_resolution_infos.find((function (e) {
                            return e.video_width == o.video_width && e.video_height == o.video_height && (e.count++, !0)
                        })) && e.play_stream_resolution_infos.push(o), 0 == o.video_width && 0 == o.video_height) {
                            var n = 1e3 * i.playerList[t].player.lastPlayStats.audioBitrate;
                            n > e.play_max_audio_bitrate && (e.play_max_audio_bitrate = n)
                        }
                    }, i = this;
                    for (var s in this.playerList) r(s);
                    0 !== this.chargeInfos.timestamp_end ? (this.chargeInfos.timestamp_diff = this.chargeInfos.timestamp_begin - this.chargeInfos.timestamp_end, this.chargeInfos.timestamp_diff_flag = 1) : (this.chargeInfos.timestamp_diff = 0, this.chargeInfos.timestamp_diff_flag = 0), this.chargeInfos.timestamp_end = (new Date).getTime(), this.chargeInfos.infos = [e], 0 !== e.play_stream_resolution_infos.length && this.logger.report(this.chargeInfos), this.chargeInfosTimer && this.startChargeInfosUpload()
                }, t.prototype.checkSignalHeartbeat = function () {
                    for (var e in this.logger.debug("zsc.csh.0 call"), this.signalList) this.signalList[e].signal && this.signalList[e].signal.sendHeartbeat();
                    this.heartbeatTimer && this.startSignalHeartbeat()
                }, t.prototype.checkPreview = function (e) {
                    for (var t = 0; t < this.previewVideoList.length; t++) if (this.previewVideoList[t].localStream === e) return this.previewVideoList[t];
                    return null
                }, t.prototype.removePreview = function (e) {
                    for (var t = 0; t < this.previewVideoList.length; t++) if (this.previewVideoList[t] === e) {
                        this.previewVideoList.splice(t, 1);
                        break
                    }
                }, t.prototype.onPlayerStreamUrlUpdate = function (e, t, r) {
                }, t.prototype.getScreenConstrains = function (e) {
                    var t = {};
                    if ("boolean" == typeof e && e) t = {
                        audio: !1,
                        frameRate: 15,
                        bitRate: 1500
                    }; else if ("object" == typeof e) {
                        switch (e.videoQuality) {
                            case 1:
                                t = {
                                    frameRate: l.ENUM_SCREEM_RESOLUTION_TYPE.LOW.frameRate,
                                    bitRate: l.ENUM_SCREEM_RESOLUTION_TYPE.LOW.bitRate
                                };
                                break;
                            case 2:
                                t = {
                                    frameRate: l.ENUM_SCREEM_RESOLUTION_TYPE.MEDIUM.frameRate,
                                    bitRate: l.ENUM_SCREEM_RESOLUTION_TYPE.MEDIUM.bitRate
                                };
                                break;
                            case 3:
                                t = {
                                    frameRate: l.ENUM_SCREEM_RESOLUTION_TYPE.HIGH.frameRate,
                                    bitRate: l.ENUM_SCREEM_RESOLUTION_TYPE.HIGH.bitRate
                                };
                                break;
                            case 4:
                                "number" != typeof e.frameRate && (this.logger.error("zc.gsc.0 screen frameRate must be number "), e.frameRate = 15), ("number" != typeof e.bitRate || e.bitRate > 3e3) && (this.logger.error("zc.gsc.0 screen bitRate must be number and lower than 3000"), e.bitRate = 1500), t = {
                                    frameRate: e.frameRate,
                                    bitRate: e.bitRate
                                }
                        }
                        t.audio = "boolean" == typeof e.audio && e.audio
                    }
                    return t
                }, t.prototype.createScreenPreviewer = function (e, t) {
                    var r = new n.ZegoPreview(this.logger), i = e.getVideoTracks()[0].getSettings();
                    return this.stateCenter.screenShotStream = e, this.previewVideoList.push(r), r.mediaStreamConfig = t, r.localStream = e, r.videoInfo = {
                        width: i.width,
                        height: i.height,
                        frameRate: i.frameRate || 0,
                        bitRate: t.bitRate || 0
                    }, r.previewSuc = !0, r
                }, t.prototype.setPublishStreamConstraints = function (e, t, r, i) {
                    var s = this, o = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
                        n = null;
                    for (var a in this.publisherList) this.publisherList[a].localStream == e && (n = this.publisherList[a]);
                    if (n) {
                        var d = this.checkPreview(e);
                        if (d) if (!t || 0 == Object.keys(t).length || t.width && t.width < 120 || t.height && t.height < 120) this.logger.error("zc.spsc.0 constraints wrong"); else {
                            d.mediaStreamConfig.videoInput !== t.videoInput && delete d.mediaStreamConfig.facingMode && delete t.facingMode;
                            var l = Object.assign(d.mediaStreamConfig, t);
                            if (l.externalCapture || l.externalMediaStream) this.logger.error("zc.spsc.0 do not support external stream"); else {
                                var u = d.getMediaStreamConstraints(l), h = n.publisher.localStream, p = h.clone();
                                if (!n.publisher.peerConnection.getSenders || !n.publisher.peerConnection.getSenders()[0].replaceTrack) return this.logger.error("zc.spsc.0 set publish constraints is not supported"), void (i && i({
                                    code: 1,
                                    msg: "not supported"
                                }));
                                !o && h.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), navigator.mediaDevices.getUserMedia(u).then((function (e) {
                                    e.getTracks().forEach((function (e) {
                                        var t = h.getTracks().find((function (t) {
                                            return t.kind === e.kind
                                        }));
                                        n.publisher.peerConnection.getSenders().find((function (t) {
                                            return null !== t.track && t.track.kind === e.kind
                                        })).replaceTrack(e), h.removeTrack(t), h.addTrack(e)
                                    })), s.logger.info("zc.spsc.0 set constraints success"), p.getTracks().forEach((function (e) {
                                        return e.stop()
                                    })), r && r()
                                })).catch((function (e) {
                                    s.logger.error("zc.spsc.0 fail reason ", e.name), p.getTracks().forEach((function (e) {
                                        var t = h.getTracks().find((function (t) {
                                            return t.kind === e.kind
                                        }));
                                        n.publisher.peerConnection.getSenders().find((function (t) {
                                            return null !== t.track && t.track.kind === e.kind
                                        })).replaceTrack(e), h.removeTrack(t), h.addTrack(e)
                                    })), i && i({
                                        code: c.publishErrorList.CONSTRAINTS_ERROR.code,
                                        msg: e.name + " " + (e.constraint ? "constraint:" + e.constraint : "")
                                    })
                                }))
                            }
                        } else this.logger.error("zc.spsc.0 preview no found")
                    } else this.logger.error("zc.spsc.0 publisher not found")
                }, t
            }(p.ZegoStreamCenter);
        t.ZegoStreamCenterWeb = m
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(1), o = r(2), n = function () {
            function e(e) {
                var t = this;
                this.log = e, this.localStream = null, this.videoInfo = {}, this.previewSuc = !1, this.enableMicrophone = function (e, r) {
                    if (!t.localStream) return t.logger.error("zp.em.2 no localStream"), !1;
                    for (var i in t.localStream.getAudioTracks().forEach((function (t) {
                        t.enabled = e
                    })), r.publisherList) {
                        var s = r.publisherList[i].publisher;
                        s.localStream == t.localStream && s.signal.sendStreamStatus(o.getSeq(), s.sessionId, t.localStream.getVideoTracks()[0] && !0 === t.localStream.getVideoTracks()[0].enabled ? 0 : 2, e ? 0 : 2)
                    }
                    return t.logger.debug("zp.em.2 call success"), !0
                }, this.enableCamera = function (e, r) {
                    if (!t.localStream) return t.logger.error("zp.ec.2 no localStream"), !1;
                    for (var i in t.localStream.getVideoTracks().forEach((function (t) {
                        t.enabled = e
                    })), r.publisherList) {
                        var s = r.publisherList[i].publisher;
                        s.localStream == t.localStream && s.signal.sendStreamStatus(o.getSeq(), s.sessionId, e ? 0 : 2, t.localStream.getAudioTracks()[0] && 1 == t.localStream.getAudioTracks()[0].enabled ? 0 : 2)
                    }
                    return t.logger.debug("zp.ec.2 call success"), !0
                }, this.logger = e
            }

            return e.prototype.getMediaStreamConstraints = function (e) {
                var t = {audio: null, video: null};
                if (t.audio = !0, t.video = {
                    width: 640,
                    height: 480,
                    frameRate: 15,
                    bitRate: 800
                }, console.log("mediaStreamConfig", e), e.audio ? void 0 === e.audioInput && void 0 === e.ANS && void 0 === e.AGC && void 0 === e.AEC ? (t.audio = {}, t.audio.noiseSuppression = !0, t.audio.autoGainControl = !0, t.audio.echoCancellation = !0) : (t.audio = {}, void 0 !== e.audioInput && null !== e.audioInput && (t.audio.deviceId = e.audioInput), void 0 !== e.ANS && (t.audio.noiseSuppression = e.ANS), void 0 !== e.AGC && (t.audio.autoGainControl = e.AGC), void 0 !== e.AEC && (t.audio.echoCancellation = e.AEC)) : !1 === e.audio && (t.audio = !1), e.video) {
                    var r = 480, s = 640, o = 15, n = 800;
                    if (1 === e.videoQuality ? (r = i.ENUM_RESOLUTION_TYPE.LOW.width, s = i.ENUM_RESOLUTION_TYPE.LOW.height, o = i.ENUM_RESOLUTION_TYPE.LOW.frameRate, n = i.ENUM_RESOLUTION_TYPE.LOW.bitRate) : 2 === e.videoQuality ? (r = i.ENUM_RESOLUTION_TYPE.MEDIUM.width, s = i.ENUM_RESOLUTION_TYPE.MEDIUM.height, o = i.ENUM_RESOLUTION_TYPE.MEDIUM.frameRate, n = i.ENUM_RESOLUTION_TYPE.MEDIUM.bitRate) : 3 === e.videoQuality ? (r = i.ENUM_RESOLUTION_TYPE.HIGH.width, s = i.ENUM_RESOLUTION_TYPE.HIGH.height, o = i.ENUM_RESOLUTION_TYPE.HIGH.frameRate, n = i.ENUM_RESOLUTION_TYPE.HIGH.bitRate) : 4 === e.videoQuality ? (r = e.width, s = e.height, o = e.frameRate, n = e.bitRate || 800) : this.logger.info("zp.gmsc.2 use default"), !1 !== e.horizontal) {
                        var a = s;
                        s = r, r = a
                    }
                    t.video = {
                        width: r,
                        height: s,
                        frameRate: o,
                        bitRate: n
                    }, null != e.facingMode ? t.video.facingMode = e.facingMode : null != e.videoInput && null != e.videoInput && (t.video.deviceId = {exact: e.videoInput}), this.logger.info("zp.gmsc.2 width: " + r + " height: " + s + " rate: " + o)
                } else !1 === e.video && (t.video = !1);
                return t
            }, e.prototype.startPreview = function (e, t, r) {
                var i = this;
                if (this.logger.debug("zp.sv.2 called"), this.mediaStreamConfig = e, void 0 !== navigator.mediaDevices && null != navigator.mediaDevices.getUserMedia) {
                    if (e.source instanceof MediaStream) {
                        var o = e.source.getVideoTracks(),
                            n = o.length > 0 ? o[0].getSettings() : {width: 0, height: 0, frameRate: 0};
                        return this.logger.debug("zp.sv.2 use external media stream"), this.previewSuc = !0, this.localStream = e.source, this.videoInfo = {
                            width: n.width,
                            height: n.height,
                            frameRate: n.frameRate,
                            bitRate: e.bitRate || 0
                        }, void (t && t(this.localStream))
                    }
                    if (e.source instanceof HTMLMediaElement) {
                        var a = this.captureStream(e.source);
                        a ? (this.videoInfo.bitRate = e.bitRate || 0, this.previewSuc = !0, t && t(a)) : r && r(s.publishErrorList.BROWSER_NOT_SUPPORT)
                    } else {
                        var c = this.getMediaStreamConstraints(e);
                        this.videoInfo = c.video, this.mediaStreamConfig.video = !!c.video, this.mediaStreamConfig.audio = !!c.audio, this.logger.info("zp.sv.2 ", JSON.stringify(c)), navigator.mediaDevices.getUserMedia(c).then((function (e) {
                            i.logger.info("zp.sv.2 success"), i.localStream = e, i.previewSuc = !0, t && t(e)
                        }), (function (e) {
                            i.logger.info("zp.sv.2 failed"), r && r(e.name)
                        }))
                    }
                } else r && r(s.publishErrorList.BROWSER_NOT_SUPPORT)
            }, e.prototype.captureStream = function (e) {
                if (!e) return this.logger.info("zp.cs.2 no local video"), null;
                var t;
                if (e.captureStream) t = e.captureStream(), this.logger.debug("zp.cs.2 captureStream"); else {
                    if (!e.mozCaptureStream) return this.logger.info("zp.cs.2 don't support"), null;
                    t = e.mozCaptureStream(), this.logger.debug("zp.cs.2 mozCaptureStream")
                }
                return 0 == t.getTracks().length ? (this.logger.error("zp.cs.2 external capture tracks no found"), null) : (this.localStream = t, this.videoInfo = {
                    width: e.videoWidth,
                    height: e.videoHeight,
                    frameRate: 0,
                    bitRate: 0
                }, this.logger.debug("zp.cs.2 called success"), this.localStream)
            }, e.prototype.stopPreview = function () {
                if (this.logger.info("zp.sv.2.1 called"), this.localStream) {
                    var e = this.localStream.getTracks();
                    e.reverse(), e.forEach((function (e) {
                        e.stop()
                    })), this.localStream = null, this.videoInfo = {}
                }
            }, e
        }();
        t.ZegoPreview = n
    }, function (e, t, r) {
        "use strict";
        var i = this && this.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = r(0), o = r(2), n = r(1), a = i(r(13)), c = r(5), d = r(6), l = r(14), u = r(4), h = function () {
            function e(e, t, r, i, n) {
                this.state = s.ENUM_PUBLISH_STATE.stop, this.sessionId = 0, this.waitingICETimeInterval = 5e3, this.waitingAnswerTimeInterval = 5e3, this.candidateInfo = [], this.waitingICETimer = null, this.waitingAnswerTimer = null, this.qualityTimer = null, this.publishQualityList = [], this.maxQualityListCount = 10, this.lastPublishStats = {}, this.reportSeq = o.getSeq(), this.retrySeq = 0, this.qualityUpload = !1, this.qualityUploadInterval = 3e4, this.qualityUploadLastTime = 0, this.qualitySeq = 0, this.maxRetryCount = 3, this.currentRetryCount = 0, this.retryState = s.ENUM_RETRY_STATE.didNotStart, this.waitingServerTimerInterval = 3e3, this.waitingServerTimer = null, this.videoInfo = {
                    width: 0,
                    height: 0,
                    frameRate: 0,
                    bitRate: 0
                }, this.mediaStreamConfig = null, this.offerSeq = 0, this.qualityCount = 0, this.closeSessionSignal = !1, this.audioBitRate = 48e3, this.localSdpRevert = !1, this.videoCodec = "H264", this.stateNego = s.ENUM_PUBLISH_STATE_NEGO.stop, this.negoInterval = 25e3, this.negoTryCount = 1, this.negoTryMaxCount = 2, this.publishEvent = !1, this.nextSignalTryCount = 1, this.waittingConnectedTimer = null, this.waittingConnectedInerval = 15e3, this.tryingNexitSignal = !1, this.logger = e, this.signal = t, this.dataReport = r, this.qualityTimeInterval = i, this.audioMixing = new c.AudioMixUtil(e), this.streamCenter = n
            }

            return e.prototype.publishStateUpdateError = function (e) {
                this.logger.error("zp.psu.0 call " + JSON.stringify(e)), this.state === s.ENUM_PUBLISH_STATE.stop || this.negoTryCount < this.negoTryMaxCount && this.stateNego < s.ENUM_PUBLISH_STATE_NEGO.iceConnected || (0 != this.sessionId && this.shouldSendCloseSession(e) && (this.signal.sendCloseSession(o.getSeq(), this.sessionId, 1), this.closeSessionSignal = !0), this.state = s.ENUM_PUBLISH_STATE.stop, this.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.error, this.streamId, e), this.resetPublish())
            }, e.prototype.resetPublish = function () {
                this.logger.info("zp.rp.0 call"), this.streamId = null, this.state = s.ENUM_PUBLISH_STATE.stop, this.publishEvent = !1, null == this.peerConnection && null == this.peerConnection || (this.peerConnection.close(), this.peerConnection = null), null != this.waitingAnswerTimer && (clearTimeout(this.waitingAnswerTimer), this.waitingAnswerTimer = null), null != this.waitingICETimer && (clearTimeout(this.waitingICETimer), this.waitingICETimer = null), null != this.negoTimer && (clearTimeout(this.negoTimer), this.negoTimer = null), null != this.waittingConnectedTimer && (clearTimeout(this.waittingConnectedTimer), this.waittingConnectedTimer = null), this.clearPublishQualityTimer(), this.signal && (this.signal.unregisterPushCallback("CandidateInfoPush", this.sessionId), this.signal.unregisterPushCallback("MediaDescPush", this.sessionId), this.signal.unregisterPushCallback("CloseSessionPush", this.sessionId)), this.sessionSeq = 0, this.offerSeq = 0, this.candidateInfo = [], this.publishQualityList = [], this.qualityUploadLastTime = 0, this.currentRetryCount = 0, this.retryState = s.ENUM_RETRY_STATE.didNotStart, this.clearTryPublishTimer()
            }, e.prototype.clearTryPublishTimer = function () {
                null != this.waitingServerTimer && (clearTimeout(this.waitingServerTimer), this.waitingServerTimer = null)
            }, e.prototype.clearPublishQualityTimer = function () {
                null != this.qualityTimer && (clearInterval(this.qualityTimer), this.qualityTimer = null), this.lastPublishStats = {}, this.qualityCount = 0
            }, e.prototype.shouldSendCloseSession = function (e) {
                return this.state != s.ENUM_PUBLISH_STATE.stop && this.state != s.ENUM_PUBLISH_STATE.waitingSessionRsp
            }, e.prototype.startPublish = function (e, t, r, i, a) {
                var c = this;
                this.logger.info("zp.sp.0 called"), this.signal && this.signal.negoInterval && (this.negoInterval = this.signal.negoInterval), this.signal && this.signal.negoTryCount && (this.negoTryCount = this.signal.negoTryCount), this.signal && this.signal.negoTryMaxCount && (this.negoTryMaxCount = this.signal.negoTryMaxCount), e ? (this.streamId = e, this.localStream = t, this.mediaStreamConfig = i, this.publishOption = a || {}, navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && i && (i.externalCapture || i.externalMediaStream) && (this.localStream.onaddtrack = function () {
                    c.logger.info("zp.sp.0 Track added");
                    var e = c.localStream.getVideoTracks(), t = c.localStream.getAudioTracks();
                    if (e.length > 1) c.peerConnection.getSenders().find((function (t) {
                        return t.track.kind === e[1].kind
                    })).replaceTrack(e[1]), c.localStream.removeTrack(e[0]); else if (t.length > 1) {
                        c.peerConnection.getSenders().find((function (e) {
                            return e.track.kind === t[1].kind
                        })).replaceTrack(t[1]), c.localStream.removeTrack(t[0])
                    }
                }), r && (this.videoInfo = r), a && a.audioBitRate && (this.audioBitRate = a.audioBitRate), a && a.videoCodec && (this.videoCodec = a.videoCodec), this.sessionSeq = o.getSeq(), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "CreateSession"), this.signal.createSession(this.sessionSeq, 0, 0, e, a && a.streamParams, (function (e, t, r) {
                    c.dataReport.eventEndWithMsg(0 == c.retrySeq ? c.reportSeq : c.retrySeq, "CreateSession", {sessionId: r.session_id}), c.logger.info("zp.sp.0 sessionId:" + r.session_id), c.sessionSeq == e ? 0 !== r.result ? (c.logger.error("zp.sp.0 create session failed " + r.result), c.publishStateUpdateError(n.publishErrorList.CREATE_SESSION_ERROR)) : (c.sessionId = r.session_id, c.logger.debug("zp.sp.0 create session success " + c.sessionId), c.onCreatePublishSessionSuccess(r)) : c.logger.error("zp.sp.0 seq is not match.")
                }), (function (e, t) {
                    c.dataReport.eventEndWithMsg(0 == c.retrySeq ? c.reportSeq : c.retrySeq, "CreateSession", {error: e}), c.publishStateUpdateError(n.publishErrorList.SEND_SESSION_TIMEOUT)
                })), this.state = s.ENUM_PUBLISH_STATE.waitingSessionRsp, this.logger.info("zp.sp.0 called success"), this.stateNego = s.ENUM_PUBLISH_STATE_NEGO.start, this.negoTimer = setTimeout((function () {
                    c.stateNego !== s.ENUM_PUBLISH_STATE_NEGO.iceConnected && c.negoTryCount < c.negoTryMaxCount ? (c.signal.sendCloseSession(o.getSeq(), c.sessionId, 1), c.resetPublish(), c.startPublish(e, t, r, i, a), ++c.negoTryCount) : c.stateNego !== s.ENUM_PUBLISH_STATE_NEGO.iceConnected && c.negoTryCount === c.negoTryMaxCount && (c.logger.error("zp.sp.0 waiting timeout"), c.publishStateUpdateError(n.publishErrorList.SERVER_NEGO_TIMEOUT))
                }), this.negoInterval)) : this.logger.error("zp.sp.0 streamId is null")
            }, e.prototype.onCreatePublishSessionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.ops.0 called");
                var r = [];
                e.turn_server && r.push(e.turn_server), e.stun_server && r.push(e.stun_server);
                var i = {
                    iceTransportPolicy: "relay",
                    iceServers: [{urls: r, username: e.turn_username, credential: e.turn_auth_key}]
                };
                this.logger.info("zp.ops.0 username: " + e.turn_username), this.logger.info("zp.ops.0 credential: " + e.turn_auth_key), this.peerConnection = new RTCPeerConnection(i), this.peerConnection.onicecandidate = function (e) {
                    t.onIceCandidate(e)
                }, this.peerConnection.onsignalingstatechange = function (e) {
                    t.onConnectionStateChange(e)
                }, this.peerConnection.oniceconnectionstatechange = function (e) {
                    t.onIceConnectionStateChange(e)
                };
                var s = [], o = [];
                this.localStream && (this.localStream.getTracks().forEach((function (e) {
                    t.peerConnection.addTrack(e, t.localStream)
                })), s = this.localStream.getVideoTracks(), o = this.localStream.getAudioTracks(), console.warn("getConstraints", o && o[0] && o[0].getConstraints && o[0].getConstraints()), s.length > 0 && this.logger.info("zp.ops.0 video device: " + s[0].label), o.length > 0 && this.logger.info("zp.ops.0 audio device: " + o[0].label));
                var a = {offerToReceiveAudio: o.length > 0 ? 1 : 0, offerToReceiveVideo: s.length > 0 ? 1 : 0};
                this.logger.info("zp.ops.0 createOffer: " + JSON.stringify(a)), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "CreateOffer"), this.peerConnection.createOffer(a).then((function (e) {
                    t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "CreateOffer"), t.onCreateOfferSuccess(e)
                }), (function (e) {
                    t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "CreateOffer", {error: e.toString()}), t.logger.error("zp.ops.0 create offer error " + e.toString()), t.publishStateUpdateError(n.publishErrorList.CREATE_OFFER_ERROR)
                })), this.signal.registerPushCallback("CandidateInfoPush", this.sessionId, (function (e, r, i) {
                    t.onRecvCandidateInfo(e, r, i)
                })), this.signal.registerPushCallback("CloseSessionPush", this.sessionId, (function (e, r, i) {
                    t.onRecvCloseSession(e, r, i)
                })), this.signal.registerPushCallback("MediaDescPush", this.sessionId, (function (e, r, i) {
                    t.onRecvMediaDescription(e, r, i)
                })), this.signal.registerPushCallback("SessionResetPush", this.sessionId, (function (e, r, i) {
                    t.onRecvResetSession(e, r, i)
                })), this.signal.registerPushCallback("PublishEventPush", this.sessionId, (function (e, r, i) {
                    t.onRecvPublishEvent(e, r, i)
                })), this.logger.debug("zp.ops.0 call success")
            }, e.prototype.onCreateOfferSuccess = function (e) {
                var t = this;
                0 != this.videoInfo.bitRate && (e.sdp = this.updateBandwidthRestriction(e.sdp, this.videoInfo.bitRate)), e.sdp = e.sdp.replace(/sendrecv/g, "sendonly"), e.sdp = e.sdp.replace(/useinbandfec=\d+/, "maxaveragebitrate=" + this.audioBitRate), /m=video[\s\S]*m=audio/.test(e.sdp) && (this.localSdpRevert = !0), e.sdp = d.SdpUtil.getSDPByVideDecodeType(e.sdp, this.videoCodec), this.logger.info("zp.oco.0 localSdp1 " + e.sdp.substr(0, e.sdp.length / 2)), this.logger.info("zp.oco.0 localSdp2 " + e.sdp.substr(e.sdp.length / 2)), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SetLocalDescription"), this.peerConnection.setLocalDescription(e).then((function () {
                    t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SetLocalDescription"), t.onSetLocalDescriptionSuccess(e)
                }), (function (e) {
                    t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SetLocalDescription", {error: e.toString()}), t.logger.error("zp.oco.0 error " + e.toString()), t.publishStateUpdateError(n.publishErrorList.SET_LOCAL_DESC_ERROR)
                }))
            }, e.prototype.updateBandwidthRestriction = function (e, t) {
                var r = "AS";
                return "firefox" === a.browserDetails.browser && (t = 1e3 * (t >>> 0), r = "TIAS"), e = -1 === e.indexOf("b=" + r + ":") ? (e = e.replace(/c=IN (.*)\r\n/g, "c=IN $1\r\nb=" + r + ":" + t + "\r\n")).replace("b=" + r + ":" + t + "\r\n", "") : (e = e.replace(new RegExp("b=" + r + ":.*\r\n", "g"), "b=" + r + ":" + t + "\r\n")).replace("b=" + r + ":" + t + "\r\n", "")
            }, e.prototype.onSetLocalDescriptionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.osd.0 success");
                var r = {
                    sdp: e.sdp,
                    width: this.videoInfo.width,
                    height: this.videoInfo.height,
                    frameRate: this.videoInfo.frameRate,
                    video_min_kpbs: this.videoInfo.bitRate,
                    video_max_kpbs: this.videoInfo.bitRate,
                    audio_kpbs: 48,
                    keyframe_intv: 2
                };
                this.offerSeq = o.getSeq(), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SendMediaDesc"), this.signal.sendMediaDesc(this.offerSeq, this.sessionId, 0, r, (function (e, i, o) {
                    t.offerSeq == e && t.sessionId == i ? (t.logger.info("zp.osd.0 send success"), t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendMediaDesc", {
                        mediaDescription: {
                            width: r.width,
                            height: r.height,
                            frameRate: r.frameRate,
                            video_min_kpbs: r.video_min_kpbs,
                            video_max_kpbs: r.video_max_kpbs,
                            audio_kpbs: r.audio_kpbs,
                            keyframe_intv: r.keyframe_intv
                        }
                    }), t.waitingAnswerTimer = setTimeout((function () {
                        t.state == s.ENUM_PUBLISH_STATE.waitingServerAnswer && (t.logger.error("zp.osd.0 waiting timeout"), t.publishStateUpdateError(n.publishErrorList.SERVER_MEDIA_DESC_TIMEOUT))
                    }), t.waitingAnswerTimeInterval), t.logger.info("zp.osd.0 send success stateNego:waiterAnswer"), t.stateNego = s.ENUM_PUBLISH_STATE_NEGO.waiterAnswer, t.state = s.ENUM_PUBLISH_STATE.waitingServerAnswer) : t.logger.error("zp.osd.0 seq or sessionId is not equal")
                }), (function (e, r) {
                    t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendMediaDesc", {error: e}), t.publishStateUpdateError(n.publishErrorList.SEND_MEDIA_DESC_TIMEOUT)
                })), this.state = s.ENUM_PUBLISH_STATE.waitingOffserRsp, this.logger.debug("zp.osd.0 call success")
            }, e.prototype.onRecvMediaDescription = function (e, t, r) {
                this.logger.info("zp.ormd.0 received"), this.state == s.ENUM_PUBLISH_STATE.waitingServerAnswer ? (this.stateNego = s.ENUM_PUBLISH_STATE_NEGO.waitingCandidate, this.logger.info("zp.orm.0 received stateNego:waitingCandidate"), null != this.waitingAnswerTimer && (clearTimeout(this.waitingAnswerTimer), this.waitingAnswerTimer = null), this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "RecvMediaDesc"), this.signal.sendMediaDescAck(e, this.sessionId, 0), 1 == r.type ? this.onGetRemoteOfferSucceses(r.sdp) : this.publishStateUpdateError(n.publishErrorList.SERVER_MEDIA_DESC_ERROR)) : this.logger.info("zp.ormd.0 current state " + this.state + " not allowed")
            }, e.prototype.onGetRemoteOfferSucceses = function (e) {
                var t = this;
                if (48e3 !== this.audioBitRate && (e = e.replace(/maxaveragebitrate=(\d+)/, "maxaveragebitrate=" + this.audioBitRate)), this.localSdpRevert) {
                    var r = [/[\s\S]*m=audio/.exec(e)[0].replace("m=audio", ""), /m=video[\s\S]*/.exec(e)[0], /m=audio[\s\S]*m=video/.exec(e)[0].replace("m=video", "")],
                        i = r[0], o = r[1], a = r[2], c = /a=group:BUNDLE\s+(\w+)\s+(\w+)/.exec(i);
                    e = (i = i.replace(/a=group:BUNDLE\s+(\w+)\s+(\w+)/, "a=group:BUNDLE " + c[2] + " " + c[1])) + o + a
                }
                this.logger.info("zp.oro.0 remoteSdp:", e);
                var d = {
                    type: "answer", sdp: e, toJSON: function () {
                    }
                };
                this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SetRemoteDescription"), this.peerConnection.setRemoteDescription(new RTCSessionDescription(d)).then((function () {
                    t.logger.info("zp.oro.0 set success"), t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SetRemoteDescription")
                }), (function (e) {
                    t.logger.error("zp.oro.0 failed: " + e.toString()), t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SetRemoteDescription", {error: e.toString()}), t.publishStateUpdateError(n.publishErrorList.SET_REMOTE_DESC_ERROR)
                })), this.state = s.ENUM_PUBLISH_STATE.waitingServerICE, this.waitingICETimer = setTimeout((function () {
                    t.state == s.ENUM_PUBLISH_STATE.waitingServerICE && (t.logger.error("zp.orod.0 waiting server timeout"), t.publishStateUpdateError(n.publishErrorList.SERVER_CANDIDATE_TIMEOUT))
                }), this.waitingICETimeInterval), this.logger.debug("zp.oro.0 call success")
            }, e.prototype.onIceConnectionStateChange = function (e) {
                var t = this;
                this.state != s.ENUM_PUBLISH_STATE.stop && null != this.peerConnection && (this.logger.info("zp.oics.0 stateChanged " + this.peerConnection.iceConnectionState), "connected" === this.peerConnection.iceConnectionState ? (this.logger.info("zp.oics.0 connected state " + this.state), this.dataReport.eventEnd(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceConnected"), this.stateNego = s.ENUM_PUBLISH_STATE_NEGO.iceConnected, this.waittingConnectedTimer && clearTimeout(this.waittingConnectedTimer), this.waittingConnectedTimer = null, this.logger.info("zp.oisc.0  stateNego:iceConnected"), this.negoTryCount = 1, this.nextSignalTryCount = 1, this.negoTimer && (clearTimeout(this.negoTimer), this.negoTimer = null), this.publishEvent && this.publishSuccess()) : "closed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceClosed"), this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)) : "failed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceFailed"), this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)) : "disconnected" === this.peerConnection.iceConnectionState && (this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceDisconnected"), this.waittingConnectedTimer = setTimeout((function () {
                    !t.tryingNexitSignal && t.tryNextSignal(n.publishErrorList.MEDIA_CONNECTION_DISCONNECTED)
                }), this.waittingConnectedInerval)))
            }, e.prototype.onIceCandidate = function (e) {
                if (this.logger.info("zp.oic.0 candidate" + e.candidate), e.candidate) if (this.logger.info("zp.oic.0 candidate" + e.candidate.candidate), this.state < s.ENUM_PUBLISH_STATE.connecting || this.state == s.ENUM_PUBLISH_STATE.stop) this.candidateInfo.push({
                    candidate: e.candidate.candidate,
                    sdpMid: e.candidate.sdpMid,
                    sdpMLineIndex: e.candidate.sdpMLineIndex
                }); else {
                    var t = {
                        candidate: e.candidate.candidate,
                        sdpMid: e.candidate.sdpMid,
                        sdpMLineIndex: e.candidate.sdpMLineIndex
                    };
                    this.sendCandidateInfo([t])
                }
            }, e.prototype.sendCandidateInfo = function (e) {
                var t = this;
                this.logger.info("zp.sci.0 called"), !(e = e.filter((function (e) {
                    return e.candidate.indexOf("relay") > 0
                }))) || e.length < 1 ? this.logger.info("zp.sci.0 cancelled") : (this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SendIceCandidate"), this.stateNego !== s.ENUM_PUBLISH_STATE_NEGO.iceConnected && (this.stateNego = s.ENUM_PUBLISH_STATE_NEGO.sendCandidate), this.logger.info("zp.sci.0  stateNego:sendCandidate"), this.signal.sendCandidateInfo(o.getSeq(), this.sessionId, e, (function (e, r, i) {
                    t.logger.info("zp.sci.0 send success"), t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendIceCandidate")
                }), (function (e, r) {
                    t.logger.error("zp.sci.0 failed to send: " + e.toString()), t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendIceCandidate", {error: e}), t.publishStateUpdateError(n.publishErrorList.SEND_CANDIDATE_TIMEOUT)
                })))
            }, e.prototype.onConnectionStateChange = function (e) {
                this.logger.info("zp.ocs.0 called " + e.target.signalingState)
            }, e.prototype.onRecvCandidateInfo = function (e, t, r) {
                var i = this;
                if (this.logger.info("zp.oci.0 received " + JSON.stringify(r.infos)), this.state == s.ENUM_PUBLISH_STATE.waitingServerICE) {
                    null != this.waitingICETimer && (clearTimeout(this.waitingICETimer), this.waitingICETimer = null), this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "RecvIceCandidate"), this.signal.sendCandidateInfoAck(e, this.sessionId, 0), this.sendCandidateInfo(this.candidateInfo), this.candidateInfo = [];
                    for (var o = 0; o < r.infos.length; o++) {
                        var a = {
                            sdpMid: r.infos[o].sdpMid,
                            sdpMLineIndex: r.infos[o].sdpMLineIndex,
                            candidate: r.infos[o].candidate
                        };
                        this.logger.debug("zp.orci.0 candidate " + a.candidate), this.peerConnection.addIceCandidate(new RTCIceCandidate(a)).then((function () {
                            i.logger.debug("zp.oci.0 add success")
                        }), (function (e) {
                            i.logger.error("zp.oci.0 add error " + e.toString()), i.publishStateUpdateError(n.publishErrorList.SERVER_CANDIDATE_ERROR)
                        }))
                    }
                    this.state = s.ENUM_PUBLISH_STATE.connecting, this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceConnected")
                } else this.logger.info("zp.oci.0 current state " + this.state + " not allowed")
            }, e.prototype.onRecvCloseSession = function (e, t, r) {
                this.logger.info("zp.orcs.0 reason: " + r.reason), this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                var i = JSON.parse(JSON.stringify(n.publishErrorList.SESSION_CLOSED));
                i.msg += r.reason, this.negoTimer && clearTimeout(this.negoTimer);
                var s = 1 * r.reason,
                    a = r.err_info && JSON.parse(r.err_info).action ? JSON.parse(r.err_info).action : null;
                if ("number" == typeof s && [26].includes(s) && this.negoTryCount < this.negoTryMaxCount || 5 == a) {
                    this.logger.info("zp.orcs.0 retry: " + this.streamId), this.retrySeq = o.getReportSeq(), this.dataReport.newReport(this.retrySeq, u.eventList.kZegoTaskRePublish), this.dataReport.addMsgInfo(this.retrySeq, {reason: i});
                    var c = this.streamId, d = this.localStream, l = this.videoInfo, h = this.mediaStreamConfig,
                        p = this.publishOption;
                    this.signal.sendCloseSession(o.getSeq(), this.sessionId, 1), this.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId, {
                        code: 0,
                        msg: ""
                    }), this.resetPublish(), this.startPublish(c, d, l, h, p), ++this.negoTryCount
                } else [4, 8, 10, 11, 12, 27].includes(s) || 2 == a ? !this.tryingNexitSignal && this.tryNextSignal(i) : this.publishStateUpdateError(i)
            }, e.prototype.onRecvResetSession = function (e, t, r) {
                if (this.logger.info("zp.orrs.0 received "), t == this.sessionId) {
                    this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                    var i = JSON.parse(JSON.stringify(n.publishErrorList.SESSION_CLOSED));
                    this.negoTimer && clearTimeout(this.negoTimer), !this.tryingNexitSignal && this.tryNextSignal(i)
                } else this.logger.error("zp.orrs.0 cannot find session")
            }, e.prototype.onRecvPublishEvent = function (e, t, r) {
                this.logger.info("zp.orpe.0 received"), this.publishEvent = !0, this.stateNego === s.ENUM_PUBLISH_STATE_NEGO.iceConnected && 0 == r.event && this.publishSuccess()
            }, e.prototype.shouldRetryPublish = function () {
                return this.retryState == s.ENUM_RETRY_STATE.didNotStart && this.state != s.ENUM_PUBLISH_STATE.publishing ? (this.logger.info("zp.srp.0.0 connection didn't success"), !1) : this.retryState == s.ENUM_RETRY_STATE.retrying ? (this.logger.info("zp.srp.0.0 already retrying"), !1) : this.currentRetryCount > this.maxRetryCount ? (this.logger.info("zp.srp.0.0 beyond max"), !1) : (this.logger.info("zp.srp.1.0 call success"), !0)
            }, e.prototype.startRetryPublish = function () {
                this.logger.info("zp.srp.0 call");
                var e = this.streamId;
                e ? (this.resetPublish(), this.tryStartPublish(e)) : this.logger.info("zp.srp.0 no streamid")
            }, e.prototype.tryStartPublish = function (e) {
                var t = this;
                if (this.logger.info("zp.tsp.0 call"), this.clearTryPublishTimer(), this.streamId = e, this.currentRetryCount > this.maxRetryCount) return this.logger.info("zp.tsp.0 beyond max limit"), void this.publishStateUpdateError(n.publishErrorList.WEBSOCKET_ERROR);
                this.retryState = s.ENUM_RETRY_STATE.retrying, this.currentRetryCount += 1, this.signal.isServerConnected() ? (this.logger.info("zp.tsp.0 signal connected"), this.startPublish(e, this.localStream, this.videoInfo, this.mediaStreamConfig, this.publishOption)) : (this.logger.debug("zp.tsp.0 signal server not connected"), this.waitingAnswerTimer = setTimeout((function () {
                    t.tryStartPublish(e), console.warn(new Date)
                }), this.waitingAnswerTimeInterval))
            }, e.prototype.checkPublishConnectionFailedState = function (e) {
                var t = null;
                "failed" == e ? t = n.publishErrorList.MEDIA_CONNECTION_FAILED : "closed" == e && (t = n.publishErrorList.MEDIA_CONNECTION_CLOSED), null != t && (this.state != s.ENUM_PUBLISH_STATE.publishing && this.retryState == s.ENUM_PUBLISH_STATE.didNotStart ? (this.logger.info("zp.oics.0  state " + this.state + " retryState " + this.retryState + " connectionState " + e), this.publishStateUpdateError(t)) : this.shouldRetryPublish() ? (this.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId, {
                    code: 0,
                    msg: ""
                }), this.startRetryPublish()) : this.publishStateUpdateError(t))
            }, e.prototype.setPublishQualityTimer = function () {
                var e = this;
                null == this.qualityTimer && (this.logger.info("zp.spq.0 called"), this.clearPublishQualityTimer(), this.qualityTimer = setInterval((function () {
                    e.peerConnection && e.peerConnection.getStats(null).then((function (t) {
                        e.getPublishStats(t)
                    }), (function (t) {
                        e.logger.info("zp.spq.0 getStats error " + t.toString())
                    }))
                }), this.qualityTimeInterval), this.lastPublishStats = {
                    time: 0,
                    audioBytesSent: 0,
                    videoBytesSent: 0,
                    framesEncoded: 0,
                    framesSent: 0
                }, this.qualitySeq = o.getSeq(), this.qualityCount = 0)
            }, e.prototype.getPublishStats = function (e) {
                var t = this;
                if (e) {
                    var r = {
                        audioCodec: "opus",
                        audioBitrate: 0,
                        videoBitrate: 0,
                        videoFPS: 0,
                        nackCount: 0,
                        pliCount: 0,
                        frameHeight: 0,
                        frameWidth: 0,
                        videoTransferFPS: 0,
                        totalRoundTripTime: 0,
                        currentRoundTripTime: 0
                    }, i = this.lastPublishStats.time;
                    e.forEach((function (e) {
                        ("outbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesSent) && "audio" == e.mediaType ? (0 != i && (r.audioBitrate = 8 * (e.bytesSent - t.lastPublishStats.audioBytesSent) / (e.timestamp - i)), r.audioBitrate < 0 && (r.audioBitrate = 0), t.lastPublishStats.audioBytesSent = e.bytesSent, t.lastPublishStats.time = e.timestamp) : ("outbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesSent) && "video" == e.mediaType ? (0 != i && (r.videoBitrate = 8 * (e.bytesSent - t.lastPublishStats.videoBytesSent) / (e.timestamp - i), r.videoFPS = 1e3 * (e.framesEncoded - t.lastPublishStats.framesEncoded) / (e.timestamp - i)), r.videoBitrate < 0 && (r.videoBitrate = 0), r.videoFPS < 0 && (r.videoFPS = 0), r.nackCount = e.nackCount, r.pliCount = e.pliCount, t.lastPublishStats.videoBytesSent = e.bytesSent, t.lastPublishStats.framesEncoded = e.framesEncoded, t.lastPublishStats.time = e.timestamp) : "track" == e.type && ("video" == e.kind || e.id.indexOf("video") >= 0 || e.frameWidth) ? (r.frameHeight = e.frameHeight, r.frameWidth = e.frameWidth, 0 != i && (r.videoTransferFPS = 1e3 * (e.framesSent - t.lastPublishStats.framesSent) / (e.timestamp - i)), r.videoTransferFPS < 0 && (r.videoTransferFPS = 0), t.lastPublishStats.framesSent = e.framesSent) : "candidate-pair" == e.type && (null != e.totalRoundTripTime && (r.totalRoundTripTime = e.totalRoundTripTime), null != e.currentRoundTripTime && (r.currentRoundTripTime = e.currentRoundTripTime))
                    })), this.uploadPublishQuality(r);
                    var s = {
                        video: {
                            videoBitrate: r.videoBitrate,
                            videoFPS: r.videoFPS,
                            videoTransferFPS: r.videoTransferFPS,
                            frameHeight: r.frameHeight,
                            frameWidth: r.frameWidth
                        },
                        audio: {audioBitrate: r.audioBitrate, audioCodec: r.audioCodec},
                        nackCount: r.nackCount,
                        pliCount: r.pliCount,
                        totalRoundTripTime: r.totalRoundTripTime,
                        currentRoundTripTime: r.currentRoundTripTime
                    };
                    0 != i && this.onPublishQualityUpdate(this.streamId, s)
                }
            }, e.prototype.uploadPublishQuality = function (e) {
                var t = this;
                if (this.qualityUpload) {
                    var r = Date.parse(new Date + "");
                    (0 == this.qualityUploadLastTime || r - this.qualityUploadLastTime >= this.qualityUploadInterval) && (e.stream_type = "publish", e.stream_id = this.streamId, e.timeStamp = r / 1e3, this.logger.info("zp.upq.0 upload" + JSON.stringify(e)), this.signal.QualityReport(o.getSeq(), this.sessionId, e, (function (e, r, i) {
                        void 0 !== i.report && (t.qualityUpload = i.report, t.qualityUploadInterval = i.report_interval_ms)
                    }), (function (e, r) {
                        t.logger.info("zp.upq.0 upload failed " + e)
                    })), this.qualityUploadLastTime = r)
                }
            }, e.prototype.stopPublish = function () {
                if (this.logger.info("zp.sp.0.1 called"), Object.keys(this.streamCenter.publisherList).length = 1) for (var e in this.streamCenter.playerList) {
                    var t = this.streamCenter.playerList[e].player;
                    t.state == s.ENUM_PLAY_STATE.playing && t.broadcasterStatus == s.ENUM_BROADCASTER_STATUS.start && (this.signal && this.signal.sendBroadcasterStatus(o.getSeq(), t.sessionId, 0), t.broadcasterStatus = s.ENUM_BROADCASTER_STATUS.stop)
                }
                this.sessionId && !this.closeSessionSignal && this.signal.sendCloseSession(o.getSeq(), this.sessionId, 0), this.resetPublish()
            }, e.prototype.onPublishStateUpdate = function (e, t, r) {
            }, e.prototype.onPublishQualityUpdate = function (e, t) {
            }, e.prototype.onDisconnect = function () {
                this.logger.info("zp.od.0 call"), this.logger.info("zp.od.0 websocket disconnect"), !this.tryingNexitSignal && this.tryNextSignal(n.publishErrorList.WEBSOCKET_ERROR)
            }, e.prototype.playEffect = function (e, t, r, i) {
                this.audioMixing.localStream = this.localStream, this.audioMixing.peerConnection = this.peerConnection, this.audioMixing.audioBuffer = t, this.audioMixing.playEffect(e.playTime, e.loop, e.replace, r, i)
            }, e.prototype.pauseEffect = function () {
                this.audioMixing.pauseEffect()
            }, e.prototype.resumeEffect = function () {
                this.audioMixing.resumeEffect()
            }, e.prototype.startMixingAudio = function (e, t) {
                return this.audioMixing.localStream = this.localStream, this.audioMixing.peerConnection = this.peerConnection, this.audioMixing.startMixingAudio(e, t)
            }, e.prototype.stopMixingAudio = function () {
                return this.audioMixing.stopMixingAudio()
            }, e.prototype.voiceChange = function (e) {
                var t = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext);
                this.pitchEffect = new l.PitchUtil(t);
                var r = t.createMediaStreamSource(this.localStream.clone()), i = t.createMediaStreamDestination();
                if (r.connect(this.pitchEffect.input), this.pitchEffect.output.connect(i), this.pitchEffect.setPitchOffset(e), !this.micTrack) {
                    var s = i.stream.getAudioTracks()[0], o = this.peerConnection.getSenders().find((function (e) {
                        return e.track.kind === s.kind
                    }));
                    if (!o) return this.logger.error("zp.vc.0 no sender"), !1;
                    this.micTrack = this.localStream.getAudioTracks()[0], o.replaceTrack(s), this.localStream.removeTrack(this.micTrack), this.localStream.addTrack(s)
                }
            }, e.prototype.voiceBack = function () {
                var e = this;
                this.micTrack ? (this.peerConnection.getSenders().find((function (t) {
                    return t.track.kind === e.micTrack.kind
                })).replaceTrack(this.micTrack), this.localStream.removeTrack(this.localStream.getAudioTracks()[0]), this.localStream.addTrack(this.micTrack), this.micTrack = null) : this.logger.error("zp.vb.0 mo mickTrack found")
            }, e.prototype.publishSuccess = function () {
                for (var e in this.state != s.ENUM_PUBLISH_STATE.publishing && this.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.start, this.streamId, {
                    code: 0,
                    msg: ""
                }), this.state = s.ENUM_PUBLISH_STATE.publishing, this.tryingNexitSignal = !1, this.retrySeq = 0, this.retryState != s.ENUM_RETRY_STATE.didNotStart && (this.retryState = s.ENUM_RETRY_STATE.finished, this.currentRetryCount = 0), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "PublishState"), this.streamCenter.playerList) {
                    var t = this.streamCenter.playerList[e].player;
                    t.state == s.ENUM_PLAY_STATE.playing && t.broadcasterStatus == s.ENUM_BROADCASTER_STATUS.stop && (this.signal && this.signal.sendBroadcasterStatus(o.getSeq(), t.sessionId, 1), t.broadcasterStatus = s.ENUM_BROADCASTER_STATUS.start)
                }
                this.setPublishQualityTimer();
                var r = 2, i = 2;
                0 !== this.localStream.getVideoTracks().length && (r = 0), 0 !== this.localStream.getAudioTracks().length && (i = 0), this.signal.sendStreamStatus(o.getSeq(), this.sessionId, r, i)
            }, e.prototype.tryNextSignal = function (e) {
                this.tryingNexitSignal = !0;
                var t = this.streamId, r = this.signal.server, i = this.streamCenter.publisherList[t], n = [];
                i && i.serverUrls && (n = i.serverUrls), this.retrySeq = o.getReportSeq(), this.streamCenter.stateCenter.reportSeqList.rePublish[t] = this.retrySeq, this.dataReport.newReport(this.retrySeq, u.eventList.kZegoTaskRePublish), this.dataReport.addMsgInfo(this.retrySeq, {
                    serverUrls: n,
                    reason: e
                }), this.nextSignalTryCount > 3 * n.length ? (this.logger.error("zp.tns.0 try max limit"), this.publishStateUpdateError(e)) : (this.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId, {
                    code: 0,
                    msg: ""
                }), n.forEach((function (e, t) {
                    return t <= n.indexOf(r) && n.push(e)
                })), n.splice(0, n.indexOf(r) + 1), this.logger.info("zp.tns.0 try next signal " + t), this.signal && this.signal.state == s.ENUM_CONNECT_STATE.connected && this.signal.sendCloseSession(o.getSeq(), this.sessionId, 1), this.signal && this.signal.removeSession(this.sessionId), this.resetPublish(), this.streamCenter.connectPublishServer(t, !0), this.nextSignalTryCount++)
            }, e
        }();
        t.ZegoPublish = h
    }, function (e, t, r) {
        var i;
        e.exports = function e(t, r, s) {
            function o(a, c) {
                if (!r[a]) {
                    if (!t[a]) {
                        if (!c && "function" == typeof i && i) return i(a, !0);
                        if (n) return n(a, !0);
                        var d = new Error("Cannot find module '" + a + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var l = r[a] = {exports: {}};
                    t[a][0].call(l.exports, (function (e) {
                        return o(t[a][1][e] || e)
                    }), l, l.exports, e, t, r, s)
                }
                return r[a].exports
            }

            for (var n = "function" == typeof i && i, a = 0; a < s.length; a++) o(s[a]);
            return o
        }({
            1: [function (e, t, r) {
                "use strict";
                var i = (0, e("./adapter_factory.js").adapterFactory)({window: window});
                t.exports = i
            }, {"./adapter_factory.js": 2}], 2: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.adapterFactory = function () {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).window,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            shimChrome: !0,
                            shimFirefox: !0,
                            shimEdge: !0,
                            shimSafari: !0
                        }, r = i.log, d = i.detectBrowser(e), l = {
                            browserDetails: d,
                            commonShim: c,
                            extractVersion: i.extractVersion,
                            disableLog: i.disableLog,
                            disableWarnings: i.disableWarnings
                        };
                    switch (d.browser) {
                        case"chrome":
                            if (!s || !s.shimPeerConnection || !t.shimChrome) return r("Chrome shim is not included in this adapter release."), l;
                            r("adapter.js shimming chrome."), l.browserShim = s, s.shimGetUserMedia(e), s.shimMediaStream(e), s.shimPeerConnection(e), s.shimOnTrack(e), s.shimAddTrackRemoveTrack(e), s.shimGetSendersWithDtmf(e), s.shimGetStats(e), s.shimSenderReceiverGetStats(e), s.fixNegotiationNeeded(e), c.shimRTCIceCandidate(e), c.shimConnectionState(e), c.shimMaxMessageSize(e), c.shimSendThrowTypeError(e), c.removeAllowExtmapMixed(e);
                            break;
                        case"firefox":
                            if (!n || !n.shimPeerConnection || !t.shimFirefox) return r("Firefox shim is not included in this adapter release."), l;
                            r("adapter.js shimming firefox."), l.browserShim = n, n.shimGetUserMedia(e), n.shimPeerConnection(e), n.shimOnTrack(e), n.shimRemoveStream(e), n.shimSenderGetStats(e), n.shimReceiverGetStats(e), n.shimRTCDataChannel(e), c.shimRTCIceCandidate(e), c.shimConnectionState(e), c.shimMaxMessageSize(e), c.shimSendThrowTypeError(e);
                            break;
                        case"edge":
                            if (!o || !o.shimPeerConnection || !t.shimEdge) return r("MS edge shim is not included in this adapter release."), l;
                            r("adapter.js shimming edge."), l.browserShim = o, o.shimGetUserMedia(e), o.shimGetDisplayMedia(e), o.shimPeerConnection(e), o.shimReplaceTrack(e), c.shimMaxMessageSize(e), c.shimSendThrowTypeError(e);
                            break;
                        case"safari":
                            if (!a || !t.shimSafari) return r("Safari shim is not included in this adapter release."), l;
                            r("adapter.js shimming safari."), l.browserShim = a, a.shimRTCIceServerUrls(e), a.shimCreateOfferLegacy(e), a.shimCallbacksAPI(e), a.shimLocalStreamsAPI(e), a.shimRemoteStreamsAPI(e), a.shimTrackEventTransceiver(e), a.shimGetUserMedia(e), c.shimRTCIceCandidate(e), c.shimMaxMessageSize(e), c.shimSendThrowTypeError(e), c.removeAllowExtmapMixed(e);
                            break;
                        default:
                            r("Unsupported browser!")
                    }
                    return l
                };
                var i = d(e("./utils")), s = d(e("./chrome/chrome_shim")), o = d(e("./edge/edge_shim")),
                    n = d(e("./firefox/firefox_shim")), a = d(e("./safari/safari_shim")), c = d(e("./common_shim"));

                function d(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }
            }, {
                "./chrome/chrome_shim": 3,
                "./common_shim": 6,
                "./edge/edge_shim": 7,
                "./firefox/firefox_shim": 11,
                "./safari/safari_shim": 14,
                "./utils": 15
            }], 3: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0, get: function () {
                        return s.shimGetUserMedia
                    }
                });
                var o = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0, get: function () {
                        return o.shimGetDisplayMedia
                    }
                }), r.shimMediaStream = function (e) {
                    e.MediaStream = e.MediaStream || e.webkitMediaStream
                }, r.shimOnTrack = function (e) {
                    if ("object" !== (void 0 === e ? "undefined" : i(e)) || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) n.wrapPeerConnectionEvent(e, "track", (function (e) {
                        return e.transceiver || Object.defineProperty(e, "transceiver", {value: {receiver: e.receiver}}), e
                    })); else {
                        Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                            get: function () {
                                return this._ontrack
                            }, set: function (e) {
                                this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                            }, enumerable: !0, configurable: !0
                        });
                        var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                            var r = this;
                            return this._ontrackpoly || (this._ontrackpoly = function (t) {
                                t.stream.addEventListener("addtrack", (function (i) {
                                    var s = void 0;
                                    s = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find((function (e) {
                                        return e.track && e.track.id === i.track.id
                                    })) : {track: i.track};
                                    var o = new Event("track");
                                    o.track = i.track, o.receiver = s, o.transceiver = {receiver: s}, o.streams = [t.stream], r.dispatchEvent(o)
                                })), t.stream.getTracks().forEach((function (i) {
                                    var s = void 0;
                                    s = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find((function (e) {
                                        return e.track && e.track.id === i.id
                                    })) : {track: i};
                                    var o = new Event("track");
                                    o.track = i, o.receiver = s, o.transceiver = {receiver: s}, o.streams = [t.stream], r.dispatchEvent(o)
                                }))
                            }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
                        }
                    }
                }, r.shimGetSendersWithDtmf = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
                        var t = function (e, t) {
                            return {
                                track: t, get dtmf() {
                                    return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                                }, _pc: e
                            }
                        };
                        if (!e.RTCPeerConnection.prototype.getSenders) {
                            e.RTCPeerConnection.prototype.getSenders = function () {
                                return this._senders = this._senders || [], this._senders.slice()
                            };
                            var r = e.RTCPeerConnection.prototype.addTrack;
                            e.RTCPeerConnection.prototype.addTrack = function (e, i) {
                                var s = r.apply(this, arguments);
                                return s || (s = t(this, e), this._senders.push(s)), s
                            };
                            var s = e.RTCPeerConnection.prototype.removeTrack;
                            e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                s.apply(this, arguments);
                                var t = this._senders.indexOf(e);
                                -1 !== t && this._senders.splice(t, 1)
                            }
                        }
                        var o = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function (e) {
                            var r = this;
                            this._senders = this._senders || [], o.apply(this, [e]), e.getTracks().forEach((function (e) {
                                r._senders.push(t(r, e))
                            }))
                        };
                        var n = e.RTCPeerConnection.prototype.removeStream;
                        e.RTCPeerConnection.prototype.removeStream = function (e) {
                            var t = this;
                            this._senders = this._senders || [], n.apply(this, [e]), e.getTracks().forEach((function (e) {
                                var r = t._senders.find((function (t) {
                                    return t.track === e
                                }));
                                r && t._senders.splice(t._senders.indexOf(r), 1)
                            }))
                        }
                    } else if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
                        var a = e.RTCPeerConnection.prototype.getSenders;
                        e.RTCPeerConnection.prototype.getSenders = function () {
                            var e = this, t = a.apply(this, []);
                            return t.forEach((function (t) {
                                return t._pc = e
                            })), t
                        }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                            get: function () {
                                return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                            }
                        })
                    }
                }, r.shimGetStats = function (e) {
                    if (e.RTCPeerConnection) {
                        var t = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function (e, r, i) {
                            var s = this, o = arguments;
                            if (arguments.length > 0 && "function" == typeof e) return t.apply(this, arguments);
                            if (0 === t.length && (0 === arguments.length || "function" != typeof arguments[0])) return t.apply(this, []);
                            var n = function (e) {
                                var t = {};
                                return e.result().forEach((function (e) {
                                    var r = {
                                        id: e.id,
                                        timestamp: e.timestamp,
                                        type: {
                                            localcandidate: "local-candidate",
                                            remotecandidate: "remote-candidate"
                                        }[e.type] || e.type
                                    };
                                    e.names().forEach((function (t) {
                                        r[t] = e.stat(t)
                                    })), t[r.id] = r
                                })), t
                            }, a = function (e) {
                                return new Map(Object.keys(e).map((function (t) {
                                    return [t, e[t]]
                                })))
                            };
                            if (arguments.length >= 2) {
                                var c = function (e) {
                                    o[1](a(n(e)))
                                };
                                return t.apply(this, [c, arguments[0]])
                            }
                            return new Promise((function (e, r) {
                                t.apply(s, [function (t) {
                                    e(a(n(t)))
                                }, r])
                            })).then(r, i)
                        }
                    }
                }, r.shimSenderReceiverGetStats = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver) {
                        if (!("getStats" in e.RTCRtpSender.prototype)) {
                            var t = e.RTCPeerConnection.prototype.getSenders;
                            t && (e.RTCPeerConnection.prototype.getSenders = function () {
                                var e = this, r = t.apply(this, []);
                                return r.forEach((function (t) {
                                    return t._pc = e
                                })), r
                            });
                            var r = e.RTCPeerConnection.prototype.addTrack;
                            r && (e.RTCPeerConnection.prototype.addTrack = function () {
                                var e = r.apply(this, arguments);
                                return e._pc = this, e
                            }), e.RTCRtpSender.prototype.getStats = function () {
                                var e = this;
                                return this._pc.getStats().then((function (t) {
                                    return n.filterStats(t, e.track, !0)
                                }))
                            }
                        }
                        if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                            var s = e.RTCPeerConnection.prototype.getReceivers;
                            s && (e.RTCPeerConnection.prototype.getReceivers = function () {
                                var e = this, t = s.apply(this, []);
                                return t.forEach((function (t) {
                                    return t._pc = e
                                })), t
                            }), n.wrapPeerConnectionEvent(e, "track", (function (e) {
                                return e.receiver._pc = e.srcElement, e
                            })), e.RTCRtpReceiver.prototype.getStats = function () {
                                var e = this;
                                return this._pc.getStats().then((function (t) {
                                    return n.filterStats(t, e.track, !1)
                                }))
                            }
                        }
                        if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
                            var o = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function () {
                                if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                                    var t = arguments[0], r = void 0, i = void 0, s = void 0;
                                    return this.getSenders().forEach((function (e) {
                                        e.track === t && (r ? s = !0 : r = e)
                                    })), this.getReceivers().forEach((function (e) {
                                        return e.track === t && (i ? s = !0 : i = e), e.track === t
                                    })), s || r && i ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : i ? i.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                                }
                                return o.apply(this, arguments)
                            }
                        }
                    }
                }, r.shimAddTrackRemoveTrackWithNative = a, r.shimAddTrackRemoveTrack = function (e) {
                    if (e.RTCPeerConnection) {
                        var t = n.detectBrowser(e);
                        if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return a(e);
                        var r = e.RTCPeerConnection.prototype.getLocalStreams;
                        e.RTCPeerConnection.prototype.getLocalStreams = function () {
                            var e = this, t = r.apply(this);
                            return this._reverseStreams = this._reverseStreams || {}, t.map((function (t) {
                                return e._reverseStreams[t.id]
                            }))
                        };
                        var i = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function (t) {
                            var r = this;
                            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach((function (e) {
                                if (r.getSenders().find((function (t) {
                                    return t.track === e
                                }))) throw new DOMException("Track already exists.", "InvalidAccessError")
                            })), !this._reverseStreams[t.id]) {
                                var s = new e.MediaStream(t.getTracks());
                                this._streams[t.id] = s, this._reverseStreams[s.id] = t, t = s
                            }
                            i.apply(this, [t])
                        };
                        var s = e.RTCPeerConnection.prototype.removeStream;
                        e.RTCPeerConnection.prototype.removeStream = function (e) {
                            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
                        }, e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                            var i = this;
                            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                            var s = [].slice.call(arguments, 1);
                            if (1 !== s.length || !s[0].getTracks().find((function (e) {
                                return e === t
                            }))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                            var o = this.getSenders().find((function (e) {
                                return e.track === t
                            }));
                            if (o) throw new DOMException("Track already exists.", "InvalidAccessError");
                            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
                            var n = this._streams[r.id];
                            if (n) n.addTrack(t), Promise.resolve().then((function () {
                                i.dispatchEvent(new Event("negotiationneeded"))
                            })); else {
                                var a = new e.MediaStream([t]);
                                this._streams[r.id] = a, this._reverseStreams[a.id] = r, this.addStream(a)
                            }
                            return this.getSenders().find((function (e) {
                                return e.track === t
                            }))
                        }, ["createOffer", "createAnswer"].forEach((function (t) {
                            var r = e.RTCPeerConnection.prototype[t];
                            e.RTCPeerConnection.prototype[t] = function () {
                                var e = this, t = arguments, i = arguments.length && "function" == typeof arguments[0];
                                return i ? r.apply(this, [function (r) {
                                    var i = d(e, r);
                                    t[0].apply(null, [i])
                                }, function (e) {
                                    t[1] && t[1].apply(null, e)
                                }, arguments[2]]) : r.apply(this, arguments).then((function (t) {
                                    return d(e, t)
                                }))
                            }
                        }));
                        var o = e.RTCPeerConnection.prototype.setLocalDescription;
                        e.RTCPeerConnection.prototype.setLocalDescription = function () {
                            return arguments.length && arguments[0].type ? (arguments[0] = l(this, arguments[0]), o.apply(this, arguments)) : o.apply(this, arguments)
                        };
                        var c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                            get: function () {
                                var e = c.get.apply(this);
                                return "" === e.type ? e : d(this, e)
                            }
                        }), e.RTCPeerConnection.prototype.removeTrack = function (e) {
                            var t = this;
                            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                            if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                            if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                            this._streams = this._streams || {};
                            var r = void 0;
                            Object.keys(this._streams).forEach((function (i) {
                                t._streams[i].getTracks().find((function (t) {
                                    return e.track === t
                                })) && (r = t._streams[i])
                            })), r && (1 === r.getTracks().length ? this.removeStream(this._reverseStreams[r.id]) : r.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
                        }
                    }

                    function d(e, t) {
                        var r = t.sdp;
                        return Object.keys(e._reverseStreams || []).forEach((function (t) {
                            var i = e._reverseStreams[t], s = e._streams[i.id];
                            r = r.replace(new RegExp(s.id, "g"), i.id)
                        })), new RTCSessionDescription({type: t.type, sdp: r})
                    }

                    function l(e, t) {
                        var r = t.sdp;
                        return Object.keys(e._reverseStreams || []).forEach((function (t) {
                            var i = e._reverseStreams[t], s = e._streams[i.id];
                            r = r.replace(new RegExp(i.id, "g"), s.id)
                        })), new RTCSessionDescription({type: t.type, sdp: r})
                    }
                }, r.shimPeerConnection = function (e) {
                    if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection) {
                        ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function (t) {
                            var r = e.RTCPeerConnection.prototype[t];
                            e.RTCPeerConnection.prototype[t] = function () {
                                return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                            }
                        }));
                        var t = e.RTCPeerConnection.prototype.addIceCandidate;
                        e.RTCPeerConnection.prototype.addIceCandidate = function () {
                            return arguments[0] ? t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                        }
                    }
                }, r.fixNegotiationNeeded = function (e) {
                    n.wrapPeerConnectionEvent(e, "negotiationneeded", (function (e) {
                        if ("stable" === e.target.signalingState) return e
                    }))
                };
                var n = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils.js"));

                function a(e) {
                    e.RTCPeerConnection.prototype.getLocalStreams = function () {
                        var e = this;
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((function (t) {
                            return e._shimmedLocalStreams[t][0]
                        }))
                    };
                    var t = e.RTCPeerConnection.prototype.addTrack;
                    e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                        if (!r) return t.apply(this, arguments);
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                        var i = t.apply(this, arguments);
                        return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(i) && this._shimmedLocalStreams[r.id].push(i) : this._shimmedLocalStreams[r.id] = [r, i], i
                    };
                    var r = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function (e) {
                        var t = this;
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach((function (e) {
                            if (t.getSenders().find((function (t) {
                                return t.track === e
                            }))) throw new DOMException("Track already exists.", "InvalidAccessError")
                        }));
                        var i = this.getSenders();
                        r.apply(this, arguments);
                        var s = this.getSenders().filter((function (e) {
                            return -1 === i.indexOf(e)
                        }));
                        this._shimmedLocalStreams[e.id] = [e].concat(s)
                    };
                    var i = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function (e) {
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], i.apply(this, arguments)
                    };
                    var s = e.RTCPeerConnection.prototype.removeTrack;
                    e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        var t = this;
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach((function (r) {
                            var i = t._shimmedLocalStreams[r].indexOf(e);
                            -1 !== i && t._shimmedLocalStreams[r].splice(i, 1), 1 === t._shimmedLocalStreams[r].length && delete t._shimmedLocalStreams[r]
                        })), s.apply(this, arguments)
                    }
                }
            }, {"../utils.js": 15, "./getdisplaymedia": 4, "./getusermedia": 5}], 4: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = function (e, t) {
                    e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof t ? e.navigator.mediaDevices.getDisplayMedia = function (r) {
                        return t(r).then((function (t) {
                            var i = r.video && r.video.width, s = r.video && r.video.height,
                                o = r.video && r.video.frameRate;
                            return r.video = {
                                mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: t,
                                    maxFrameRate: o || 3
                                }
                            }, i && (r.video.mandatory.maxWidth = i), s && (r.video.mandatory.maxHeight = s), e.navigator.mediaDevices.getUserMedia(r)
                        }))
                    } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
                }
            }, {}], 5: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimGetUserMedia = function (e) {
                    var t = e && e.navigator;
                    if (t.mediaDevices) {
                        var r = s.detectBrowser(e), n = function (e) {
                            if ("object" !== (void 0 === e ? "undefined" : i(e)) || e.mandatory || e.optional) return e;
                            var t = {};
                            return Object.keys(e).forEach((function (r) {
                                if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                                    var s = "object" === i(e[r]) ? e[r] : {ideal: e[r]};
                                    void 0 !== s.exact && "number" == typeof s.exact && (s.min = s.max = s.exact);
                                    var o = function (e, t) {
                                        return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                                    };
                                    if (void 0 !== s.ideal) {
                                        t.optional = t.optional || [];
                                        var n = {};
                                        "number" == typeof s.ideal ? (n[o("min", r)] = s.ideal, t.optional.push(n), (n = {})[o("max", r)] = s.ideal, t.optional.push(n)) : (n[o("", r)] = s.ideal, t.optional.push(n))
                                    }
                                    void 0 !== s.exact && "number" != typeof s.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[o("", r)] = s.exact) : ["min", "max"].forEach((function (e) {
                                        void 0 !== s[e] && (t.mandatory = t.mandatory || {}, t.mandatory[o(e, r)] = s[e])
                                    }))
                                }
                            })), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                        }, a = function (e, s) {
                            if (r.version >= 61) return s(e);
                            if ((e = JSON.parse(JSON.stringify(e))) && "object" === i(e.audio)) {
                                var a = function (e, t, r) {
                                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                                };
                                a((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), a(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = n(e.audio)
                            }
                            if (e && "object" === i(e.video)) {
                                var c = e.video.facingMode;
                                c = c && ("object" === (void 0 === c ? "undefined" : i(c)) ? c : {ideal: c});
                                var d = r.version < 66;
                                if (c && ("user" === c.exact || "environment" === c.exact || "user" === c.ideal || "environment" === c.ideal) && (!t.mediaDevices.getSupportedConstraints || !t.mediaDevices.getSupportedConstraints().facingMode || d)) {
                                    delete e.video.facingMode;
                                    var l = void 0;
                                    if ("environment" === c.exact || "environment" === c.ideal ? l = ["back", "rear"] : "user" !== c.exact && "user" !== c.ideal || (l = ["front"]), l) return t.mediaDevices.enumerateDevices().then((function (t) {
                                        var r = (t = t.filter((function (e) {
                                            return "videoinput" === e.kind
                                        }))).find((function (e) {
                                            return l.some((function (t) {
                                                return e.label.toLowerCase().includes(t)
                                            }))
                                        }));
                                        return !r && t.length && l.includes("back") && (r = t[t.length - 1]), r && (e.video.deviceId = c.exact ? {exact: r.deviceId} : {ideal: r.deviceId}), e.video = n(e.video), o("chrome: " + JSON.stringify(e)), s(e)
                                    }))
                                }
                                e.video = n(e.video)
                            }
                            return o("chrome: " + JSON.stringify(e)), s(e)
                        }, c = function (e) {
                            return r.version >= 64 ? e : {
                                name: {
                                    PermissionDeniedError: "NotAllowedError",
                                    PermissionDismissedError: "NotAllowedError",
                                    InvalidStateError: "NotAllowedError",
                                    DevicesNotFoundError: "NotFoundError",
                                    ConstraintNotSatisfiedError: "OverconstrainedError",
                                    TrackStartError: "NotReadableError",
                                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                    MediaDeviceKillSwitchOn: "NotAllowedError",
                                    TabCaptureError: "AbortError",
                                    ScreenCaptureError: "AbortError",
                                    DeviceCaptureError: "AbortError"
                                }[e.name] || e.name,
                                message: e.message,
                                constraint: e.constraint || e.constraintName,
                                toString: function () {
                                    return this.name + (this.message && ": ") + this.message
                                }
                            }
                        };
                        if (t.getUserMedia = function (e, r, i) {
                            a(e, (function (e) {
                                t.webkitGetUserMedia(e, r, (function (e) {
                                    i && i(c(e))
                                }))
                            }))
                        }.bind(t), t.mediaDevices.getUserMedia) {
                            var d = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                            t.mediaDevices.getUserMedia = function (e) {
                                return a(e, (function (e) {
                                    return d(e).then((function (t) {
                                        if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach((function (e) {
                                            e.stop()
                                        })), new DOMException("", "NotFoundError");
                                        return t
                                    }), (function (e) {
                                        return Promise.reject(c(e))
                                    }))
                                }))
                            }
                        }
                    }
                };
                var s = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils.js")), o = s.log
            }, {"../utils.js": 15}], 6: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimRTCIceCandidate = function (e) {
                    if (e.RTCIceCandidate && !(e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)) {
                        var t = e.RTCIceCandidate;
                        e.RTCIceCandidate = function (e) {
                            if ("object" === (void 0 === e ? "undefined" : i(e)) && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                                var r = new t(e), s = n.default.parseCandidate(e.candidate), o = Object.assign(r, s);
                                return o.toJSON = function () {
                                    return {
                                        candidate: o.candidate,
                                        sdpMid: o.sdpMid,
                                        sdpMLineIndex: o.sdpMLineIndex,
                                        usernameFragment: o.usernameFragment
                                    }
                                }, o
                            }
                            return new t(e)
                        }, e.RTCIceCandidate.prototype = t.prototype, a.wrapPeerConnectionEvent(e, "icecandidate", (function (t) {
                            return t.candidate && Object.defineProperty(t, "candidate", {
                                value: new e.RTCIceCandidate(t.candidate),
                                writable: "false"
                            }), t
                        }))
                    }
                }, r.shimMaxMessageSize = function (e) {
                    if (!e.RTCSctpTransport && e.RTCPeerConnection) {
                        var t = a.detectBrowser(e);
                        "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                            get: function () {
                                return void 0 === this._sctp ? null : this._sctp
                            }
                        });
                        var r = function (e) {
                            if (!e || !e.sdp) return !1;
                            var t = n.default.splitSections(e.sdp);
                            return t.shift(), t.some((function (e) {
                                var t = n.default.parseMLine(e);
                                return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                            }))
                        }, i = function (e) {
                            var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                            if (null === t || t.length < 2) return -1;
                            var r = parseInt(t[1], 10);
                            return r != r ? -1 : r
                        }, s = function (e) {
                            var r = 65536;
                            return "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r
                        }, o = function (e, r) {
                            var i = 65536;
                            "firefox" === t.browser && 57 === t.version && (i = 65535);
                            var s = n.default.matchPrefix(e.sdp, "a=max-message-size:");
                            return s.length > 0 ? i = parseInt(s[0].substr(19), 10) : "firefox" === t.browser && -1 !== r && (i = 2147483637), i
                        }, c = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                            if (this._sctp = null, r(arguments[0])) {
                                var e = i(arguments[0]), t = s(e), n = o(arguments[0], e), a = void 0;
                                a = 0 === t && 0 === n ? Number.POSITIVE_INFINITY : 0 === t || 0 === n ? Math.max(t, n) : Math.min(t, n);
                                var d = {};
                                Object.defineProperty(d, "maxMessageSize", {
                                    get: function () {
                                        return a
                                    }
                                }), this._sctp = d
                            }
                            return c.apply(this, arguments)
                        }
                    }
                }, r.shimSendThrowTypeError = function (e) {
                    if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
                        var t = e.RTCPeerConnection.prototype.createDataChannel;
                        e.RTCPeerConnection.prototype.createDataChannel = function () {
                            var e = t.apply(this, arguments);
                            return r(e, this), e
                        }, a.wrapPeerConnectionEvent(e, "datachannel", (function (e) {
                            return r(e.channel, e.target), e
                        }))
                    }

                    function r(e, t) {
                        var r = e.send;
                        e.send = function () {
                            var i = arguments[0], s = i.length || i.size || i.byteLength;
                            if ("open" === e.readyState && t.sctp && s > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                            return r.apply(e, arguments)
                        }
                    }
                }, r.shimConnectionState = function (e) {
                    if (e.RTCPeerConnection && !("connectionState" in e.RTCPeerConnection.prototype)) {
                        var t = e.RTCPeerConnection.prototype;
                        Object.defineProperty(t, "connectionState", {
                            get: function () {
                                return {
                                    completed: "connected",
                                    checking: "connecting"
                                }[this.iceConnectionState] || this.iceConnectionState
                            }, enumerable: !0, configurable: !0
                        }), Object.defineProperty(t, "onconnectionstatechange", {
                            get: function () {
                                return this._onconnectionstatechange || null
                            }, set: function (e) {
                                this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e)
                            }, enumerable: !0, configurable: !0
                        }), ["setLocalDescription", "setRemoteDescription"].forEach((function (e) {
                            var r = t[e];
                            t[e] = function () {
                                return this._connectionstatechangepoly || (this._connectionstatechangepoly = function (e) {
                                    var t = e.target;
                                    if (t._lastConnectionState !== t.connectionState) {
                                        t._lastConnectionState = t.connectionState;
                                        var r = new Event("connectionstatechange", e);
                                        t.dispatchEvent(r)
                                    }
                                    return e
                                }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments)
                            }
                        }))
                    }
                }, r.removeAllowExtmapMixed = function (e) {
                    if (e.RTCPeerConnection) {
                        var t = a.detectBrowser(e);
                        if (!("chrome" === t.browser && t.version >= 71)) {
                            var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function (e) {
                                return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter((function (e) {
                                    return "a=extmap-allow-mixed" !== e.trim()
                                })).join("\n")), r.apply(this, arguments)
                            }
                        }
                    }
                };
                var s, o = e("sdp"), n = (s = o) && s.__esModule ? s : {default: s}, a = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("./utils"))
            }, {"./utils": 15, sdp: 17}], 7: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var i = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0, get: function () {
                        return i.shimGetUserMedia
                    }
                });
                var s = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0, get: function () {
                        return s.shimGetDisplayMedia
                    }
                }), r.shimPeerConnection = function (e) {
                    var t = n.detectBrowser(e);
                    if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function (e) {
                        return e
                    }), e.RTCSessionDescription || (e.RTCSessionDescription = function (e) {
                        return e
                    }), t.version < 15025)) {
                        var r = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
                        Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                            set: function (e) {
                                r.set.call(this, e);
                                var t = new Event("enabled");
                                t.enabled = e, this.dispatchEvent(t)
                            }
                        })
                    }
                    !e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                        get: function () {
                            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
                        }
                    }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
                    var i = (0, d.default)(e, t.version);
                    e.RTCPeerConnection = function (e) {
                        return e && e.iceServers && (e.iceServers = (0, a.filterIceServers)(e.iceServers, t.version), n.log("ICE servers after filtering:", e.iceServers)), new i(e)
                    }, e.RTCPeerConnection.prototype = i.prototype
                }, r.shimReplaceTrack = function (e) {
                    !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
                };
                var o, n = function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }(e("../utils")), a = e("./filtericeservers"), c = e("rtcpeerconnection-shim"),
                    d = (o = c) && o.__esModule ? o : {default: o}
            }, {
                "../utils": 15,
                "./filtericeservers": 8,
                "./getdisplaymedia": 9,
                "./getusermedia": 10,
                "rtcpeerconnection-shim": 16
            }], 8: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.filterIceServers = function (e, t) {
                    var r = !1;
                    return (e = JSON.parse(JSON.stringify(e))).filter((function (e) {
                        if (e && (e.urls || e.url)) {
                            var t = e.urls || e.url;
                            e.url && !e.urls && i.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                            var s = "string" == typeof t;
                            return s && (t = [t]), t = t.filter((function (e) {
                                if (0 === e.indexOf("stun:")) return !1;
                                var t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                                return t && !r ? (r = !0, !0) : t && !r
                            })), delete e.url, e.urls = s ? t[0] : t, !!t.length
                        }
                    }))
                };
                var i = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils"))
            }, {"../utils": 15}], 9: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = function (e) {
                    "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)))
                }
            }, {}], 10: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetUserMedia = function (e) {
                    var t = e && e.navigator, r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                    t.mediaDevices.getUserMedia = function (e) {
                        return r(e).catch((function (e) {
                            return Promise.reject(function (e) {
                                return {
                                    name: {PermissionDeniedError: "NotAllowedError"}[e.name] || e.name,
                                    message: e.message,
                                    constraint: e.constraint,
                                    toString: function () {
                                        return this.name
                                    }
                                }
                            }(e))
                        }))
                    }
                }
            }, {}], 11: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0, get: function () {
                        return s.shimGetUserMedia
                    }
                });
                var o = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0, get: function () {
                        return o.shimGetDisplayMedia
                    }
                }), r.shimOnTrack = function (e) {
                    "object" === (void 0 === e ? "undefined" : i(e)) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                        get: function () {
                            return {receiver: this.receiver}
                        }
                    })
                }, r.shimPeerConnection = function (e) {
                    var t = n.detectBrowser(e);
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
                        !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function (t) {
                            var r = e.RTCPeerConnection.prototype[t];
                            e.RTCPeerConnection.prototype[t] = function () {
                                return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                            }
                        }));
                        var r = e.RTCPeerConnection.prototype.addIceCandidate;
                        e.RTCPeerConnection.prototype.addIceCandidate = function () {
                            return arguments[0] ? r.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                        };
                        var s = {
                            inboundrtp: "inbound-rtp",
                            outboundrtp: "outbound-rtp",
                            candidatepair: "candidate-pair",
                            localcandidate: "local-candidate",
                            remotecandidate: "remote-candidate"
                        }, o = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function (e, r, i) {
                            return o.apply(this, [e || null]).then((function (e) {
                                if (t.version < 53 && !r) try {
                                    e.forEach((function (e) {
                                        e.type = s[e.type] || e.type
                                    }))
                                } catch (t) {
                                    if ("TypeError" !== t.name) throw t;
                                    e.forEach((function (t, r) {
                                        e.set(r, Object.assign({}, t, {type: s[t.type] || t.type}))
                                    }))
                                }
                                return e
                            })).then(r, i)
                        }
                    }
                }, r.shimSenderGetStats = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && e.RTCRtpSender && !(e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)) {
                        var t = e.RTCPeerConnection.prototype.getSenders;
                        t && (e.RTCPeerConnection.prototype.getSenders = function () {
                            var e = this, r = t.apply(this, []);
                            return r.forEach((function (t) {
                                return t._pc = e
                            })), r
                        });
                        var r = e.RTCPeerConnection.prototype.addTrack;
                        r && (e.RTCPeerConnection.prototype.addTrack = function () {
                            var e = r.apply(this, arguments);
                            return e._pc = this, e
                        }), e.RTCRtpSender.prototype.getStats = function () {
                            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
                        }
                    }
                }, r.shimReceiverGetStats = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && e.RTCRtpSender && !(e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)) {
                        var t = e.RTCPeerConnection.prototype.getReceivers;
                        t && (e.RTCPeerConnection.prototype.getReceivers = function () {
                            var e = this, r = t.apply(this, []);
                            return r.forEach((function (t) {
                                return t._pc = e
                            })), r
                        }), n.wrapPeerConnectionEvent(e, "track", (function (e) {
                            return e.receiver._pc = e.srcElement, e
                        })), e.RTCRtpReceiver.prototype.getStats = function () {
                            return this._pc.getStats(this.track)
                        }
                    }
                }, r.shimRemoveStream = function (e) {
                    !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
                        var t = this;
                        n.deprecated("removeStream", "removeTrack"), this.getSenders().forEach((function (r) {
                            r.track && e.getTracks().includes(r.track) && t.removeTrack(r)
                        }))
                    })
                }, r.shimRTCDataChannel = function (e) {
                    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
                };
                var n = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils"))
            }, {"../utils": 15, "./getdisplaymedia": 12, "./getusermedia": 13}], 12: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = function (e, t) {
                    e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                        if (!r || !r.video) {
                            var i = new DOMException("getDisplayMedia without video constraints is undefined");
                            return i.name = "NotFoundError", i.code = 8, Promise.reject(i)
                        }
                        return !0 === r.video ? r.video = {mediaSource: t} : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r)
                    })
                }
            }, {}], 13: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimGetUserMedia = function (e) {
                    var t = s.detectBrowser(e), r = e && e.navigator, o = e && e.MediaStreamTrack;
                    if (r.getUserMedia = function (e, t, i) {
                        s.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, i)
                    }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
                        var n = function (e, t, r) {
                            t in e && !(r in e) && (e[r] = e[t], delete e[t])
                        }, a = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                        if (r.mediaDevices.getUserMedia = function (e) {
                            return "object" === (void 0 === e ? "undefined" : i(e)) && "object" === i(e.audio) && (e = JSON.parse(JSON.stringify(e)), n(e.audio, "autoGainControl", "mozAutoGainControl"), n(e.audio, "noiseSuppression", "mozNoiseSuppression")), a(e)
                        }, o && o.prototype.getSettings) {
                            var c = o.prototype.getSettings;
                            o.prototype.getSettings = function () {
                                var e = c.apply(this, arguments);
                                return n(e, "mozAutoGainControl", "autoGainControl"), n(e, "mozNoiseSuppression", "noiseSuppression"), e
                            }
                        }
                        if (o && o.prototype.applyConstraints) {
                            var d = o.prototype.applyConstraints;
                            o.prototype.applyConstraints = function (e) {
                                return "audio" === this.kind && "object" === (void 0 === e ? "undefined" : i(e)) && (e = JSON.parse(JSON.stringify(e)), n(e, "autoGainControl", "mozAutoGainControl"), n(e, "noiseSuppression", "mozNoiseSuppression")), d.apply(this, [e])
                            }
                        }
                    }
                };
                var s = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils"))
            }, {"../utils": 15}], 14: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimLocalStreamsAPI = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection) {
                        if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                            return this._localStreams || (this._localStreams = []), this._localStreams
                        }), !("addStream" in e.RTCPeerConnection.prototype)) {
                            var t = e.RTCPeerConnection.prototype.addTrack;
                            e.RTCPeerConnection.prototype.addStream = function (e) {
                                var r = this;
                                this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getTracks().forEach((function (i) {
                                    return t.call(r, i, e)
                                }))
                            }, e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                                return r && (this._localStreams ? this._localStreams.includes(r) || this._localStreams.push(r) : this._localStreams = [r]), t.call(this, e, r)
                            }
                        }
                        "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
                            var t = this;
                            this._localStreams || (this._localStreams = []);
                            var r = this._localStreams.indexOf(e);
                            if (-1 !== r) {
                                this._localStreams.splice(r, 1);
                                var i = e.getTracks();
                                this.getSenders().forEach((function (e) {
                                    i.includes(e.track) && t.removeTrack(e)
                                }))
                            }
                        })
                    }
                }, r.shimRemoteStreamsAPI = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                        return this._remoteStreams ? this._remoteStreams : []
                    }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
                        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                            get: function () {
                                return this._onaddstream
                            }, set: function (e) {
                                var t = this;
                                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function (e) {
                                    e.streams.forEach((function (e) {
                                        if (t._remoteStreams || (t._remoteStreams = []), !t._remoteStreams.includes(e)) {
                                            t._remoteStreams.push(e);
                                            var r = new Event("addstream");
                                            r.stream = e, t.dispatchEvent(r)
                                        }
                                    }))
                                })
                            }
                        });
                        var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                            var e = this;
                            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (t) {
                                t.streams.forEach((function (t) {
                                    if (e._remoteStreams || (e._remoteStreams = []), !(e._remoteStreams.indexOf(t) >= 0)) {
                                        e._remoteStreams.push(t);
                                        var r = new Event("addstream");
                                        r.stream = t, e.dispatchEvent(r)
                                    }
                                }))
                            }), t.apply(e, arguments)
                        }
                    }
                }, r.shimCallbacksAPI = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection) {
                        var t = e.RTCPeerConnection.prototype, r = t.createOffer, s = t.createAnswer,
                            o = t.setLocalDescription, n = t.setRemoteDescription, a = t.addIceCandidate;
                        t.createOffer = function (e, t) {
                            var i = arguments.length >= 2 ? arguments[2] : arguments[0], s = r.apply(this, [i]);
                            return t ? (s.then(e, t), Promise.resolve()) : s
                        }, t.createAnswer = function (e, t) {
                            var r = arguments.length >= 2 ? arguments[2] : arguments[0], i = s.apply(this, [r]);
                            return t ? (i.then(e, t), Promise.resolve()) : i
                        };
                        var c = function (e, t, r) {
                            var i = o.apply(this, [e]);
                            return r ? (i.then(t, r), Promise.resolve()) : i
                        };
                        t.setLocalDescription = c, c = function (e, t, r) {
                            var i = n.apply(this, [e]);
                            return r ? (i.then(t, r), Promise.resolve()) : i
                        }, t.setRemoteDescription = c, c = function (e, t, r) {
                            var i = a.apply(this, [e]);
                            return r ? (i.then(t, r), Promise.resolve()) : i
                        }, t.addIceCandidate = c
                    }
                }, r.shimGetUserMedia = function (e) {
                    var t = e && e.navigator;
                    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                        var r = t.mediaDevices, i = r.getUserMedia.bind(r);
                        t.mediaDevices.getUserMedia = function (e) {
                            return i(o(e))
                        }
                    }
                    !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, r, i) {
                        t.mediaDevices.getUserMedia(e).then(r, i)
                    }.bind(t))
                }, r.shimConstraints = o, r.shimRTCIceServerUrls = function (e) {
                    var t = e.RTCPeerConnection;
                    e.RTCPeerConnection = function (e, r) {
                        if (e && e.iceServers) {
                            for (var i = [], o = 0; o < e.iceServers.length; o++) {
                                var n = e.iceServers[o];
                                !n.hasOwnProperty("urls") && n.hasOwnProperty("url") ? (s.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (n = JSON.parse(JSON.stringify(n))).urls = n.url, delete n.url, i.push(n)) : i.push(e.iceServers[o])
                            }
                            e.iceServers = i
                        }
                        return new t(e, r)
                    }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                        get: function () {
                            return t.generateCertificate
                        }
                    })
                }, r.shimTrackEventTransceiver = function (e) {
                    "object" === (void 0 === e ? "undefined" : i(e)) && e.RTCPeerConnection && "receiver" in e.RTCTrackEvent.prototype && !e.RTCTransceiver && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                        get: function () {
                            return {receiver: this.receiver}
                        }
                    })
                }, r.shimCreateOfferLegacy = function (e) {
                    var t = e.RTCPeerConnection.prototype.createOffer;
                    e.RTCPeerConnection.prototype.createOffer = function (e) {
                        if (e) {
                            void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                            var r = this.getTransceivers().find((function (e) {
                                return "audio" === e.receiver.track.kind
                            }));
                            !1 === e.offerToReceiveAudio && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveAudio || r || this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                            var i = this.getTransceivers().find((function (e) {
                                return "video" === e.receiver.track.kind
                            }));
                            !1 === e.offerToReceiveVideo && i ? "sendrecv" === i.direction ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : "recvonly" === i.direction && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : !0 !== e.offerToReceiveVideo || i || this.addTransceiver("video")
                        }
                        return t.apply(this, arguments)
                    }
                };
                var s = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils"));

                function o(e) {
                    return e && void 0 !== e.video ? Object.assign({}, e, {video: s.compactObject(e.video)}) : e
                }
            }, {"../utils": 15}], 15: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.extractVersion = n, r.wrapPeerConnectionEvent = function (e, t, r) {
                    if (e.RTCPeerConnection) {
                        var i = e.RTCPeerConnection.prototype, s = i.addEventListener;
                        i.addEventListener = function (e, i) {
                            if (e !== t) return s.apply(this, arguments);
                            var o = function (e) {
                                var t = r(e);
                                t && i(t)
                            };
                            return this._eventMap = this._eventMap || {}, this._eventMap[i] = o, s.apply(this, [e, o])
                        };
                        var o = i.removeEventListener;
                        i.removeEventListener = function (e, r) {
                            if (e !== t || !this._eventMap || !this._eventMap[r]) return o.apply(this, arguments);
                            var i = this._eventMap[r];
                            return delete this._eventMap[r], o.apply(this, [e, i])
                        }, Object.defineProperty(i, "on" + t, {
                            get: function () {
                                return this["_on" + t]
                            }, set: function (e) {
                                this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                            }, enumerable: !0, configurable: !0
                        })
                    }
                }, r.disableLog = function (e) {
                    return "boolean" != typeof e ? new Error("Argument type: " + (void 0 === e ? "undefined" : i(e)) + ". Please use a boolean.") : (s = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
                }, r.disableWarnings = function (e) {
                    return "boolean" != typeof e ? new Error("Argument type: " + (void 0 === e ? "undefined" : i(e)) + ". Please use a boolean.") : (o = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
                }, r.log = function () {
                    if ("object" === ("undefined" == typeof window ? "undefined" : i(window))) {
                        if (s) return;
                        "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
                    }
                }, r.deprecated = function (e, t) {
                    o && console.warn(e + " is deprecated, please use " + t + " instead.")
                }, r.detectBrowser = function (e) {
                    var t = e.navigator, r = {browser: null, version: null};
                    if (void 0 === e || !e.navigator) return r.browser = "Not a browser.", r;
                    if (t.mozGetUserMedia) r.browser = "firefox", r.version = n(t.userAgent, /Firefox\/(\d+)\./, 1); else if (t.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) r.browser = "chrome", r.version = n(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2); else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) r.browser = "edge", r.version = n(t.userAgent, /Edge\/(\d+).(\d+)$/, 2); else {
                        if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return r.browser = "Not a supported browser.", r;
                        r.browser = "safari", r.version = n(t.userAgent, /AppleWebKit\/(\d+)\./, 1)
                    }
                    return r
                }, r.compactObject = function e(t) {
                    return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : Object.keys(t).reduce((function (r, s) {
                        var o = "object" === i(t[s]), n = o ? e(t[s]) : t[s], a = o && !Object.keys(n).length;
                        return void 0 === n || a ? r : Object.assign(r, function (e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }({}, s, n))
                    }), {})
                }, r.walkStats = a, r.filterStats = function (e, t, r) {
                    var i = r ? "outbound-rtp" : "inbound-rtp", s = new Map;
                    if (null === t) return s;
                    var o = [];
                    return e.forEach((function (e) {
                        "track" === e.type && e.trackIdentifier === t.id && o.push(e)
                    })), o.forEach((function (t) {
                        e.forEach((function (r) {
                            r.type === i && r.trackId === t.id && a(e, r, s)
                        }))
                    })), s
                };
                var s = !0, o = !0;

                function n(e, t, r) {
                    var i = e.match(t);
                    return i && i.length >= r && parseInt(i[r], 10)
                }

                function a(e, t, r) {
                    t && !r.has(t.id) && (r.set(t.id, t), Object.keys(t).forEach((function (i) {
                        i.endsWith("Id") ? a(e, e.get(t[i]), r) : i.endsWith("Ids") && t[i].forEach((function (t) {
                            a(e, e.get(t), r)
                        }))
                    })))
                }
            }, {}], 16: [function (e, t, r) {
                "use strict";
                var i = e("sdp");

                function s(e, t, r, s, o) {
                    var n = i.writeRtpDescription(e.kind, t);
                    if (n += i.writeIceParameters(e.iceGatherer.getLocalParameters()), n += i.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : o || "active"), n += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? n += "a=sendrecv\r\n" : e.rtpSender ? n += "a=sendonly\r\n" : e.rtpReceiver ? n += "a=recvonly\r\n" : n += "a=inactive\r\n", e.rtpSender) {
                        var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
                        e.rtpSender._initialTrackId = a;
                        var c = "msid:" + (s ? s.id : "-") + " " + a + "\r\n";
                        n += "a=" + c, n += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c, e.sendEncodingParameters[0].rtx && (n += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c, n += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                    }
                    return n += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + i.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (n += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + i.localCName + "\r\n"), n
                }

                function o(e, t) {
                    var r = {codecs: [], headerExtensions: [], fecMechanisms: []}, i = function (e, t) {
                        e = parseInt(e, 10);
                        for (var r = 0; r < t.length; r++) if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r]
                    }, s = function (e, t, r, s) {
                        var o = i(e.parameters.apt, r), n = i(t.parameters.apt, s);
                        return o && n && o.name.toLowerCase() === n.name.toLowerCase()
                    };
                    return e.codecs.forEach((function (i) {
                        for (var o = 0; o < t.codecs.length; o++) {
                            var n = t.codecs[o];
                            if (i.name.toLowerCase() === n.name.toLowerCase() && i.clockRate === n.clockRate) {
                                if ("rtx" === i.name.toLowerCase() && i.parameters && n.parameters.apt && !s(i, n, e.codecs, t.codecs)) continue;
                                (n = JSON.parse(JSON.stringify(n))).numChannels = Math.min(i.numChannels, n.numChannels), r.codecs.push(n), n.rtcpFeedback = n.rtcpFeedback.filter((function (e) {
                                    for (var t = 0; t < i.rtcpFeedback.length; t++) if (i.rtcpFeedback[t].type === e.type && i.rtcpFeedback[t].parameter === e.parameter) return !0;
                                    return !1
                                }));
                                break
                            }
                        }
                    })), e.headerExtensions.forEach((function (e) {
                        for (var i = 0; i < t.headerExtensions.length; i++) {
                            var s = t.headerExtensions[i];
                            if (e.uri === s.uri) {
                                r.headerExtensions.push(s);
                                break
                            }
                        }
                    })), r
                }

                function n(e, t, r) {
                    return -1 !== {
                        offer: {
                            setLocalDescription: ["stable", "have-local-offer"],
                            setRemoteDescription: ["stable", "have-remote-offer"]
                        },
                        answer: {
                            setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                            setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
                        }
                    }[t][e].indexOf(r)
                }

                function a(e, t) {
                    var r = e.getRemoteCandidates().find((function (e) {
                        return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type
                    }));
                    return r || e.addRemoteCandidate(t), !r
                }

                function c(e, t) {
                    var r = new Error(t);
                    return r.name = e, r.code = {
                        NotSupportedError: 9,
                        InvalidStateError: 11,
                        InvalidAccessError: 15,
                        TypeError: void 0,
                        OperationError: void 0
                    }[e], r
                }

                t.exports = function (e, t) {
                    function r(t, r) {
                        r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {track: t}))
                    }

                    function d(t, r, i, s) {
                        var o = new Event("track");
                        o.track = r, o.receiver = i, o.transceiver = {receiver: i}, o.streams = s, e.setTimeout((function () {
                            t._dispatchEvent("track", o)
                        }))
                    }

                    var l = function (r) {
                        var s = this, o = document.createDocumentFragment();
                        if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach((function (e) {
                            s[e] = o[e].bind(o)
                        })), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", r = JSON.parse(JSON.stringify(r || {})), this.usingBundle = "max-bundle" === r.bundlePolicy, "negotiate" === r.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                        switch (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"), r.iceTransportPolicy) {
                            case"all":
                            case"relay":
                                break;
                            default:
                                r.iceTransportPolicy = "all"
                        }
                        switch (r.bundlePolicy) {
                            case"balanced":
                            case"max-compat":
                            case"max-bundle":
                                break;
                            default:
                                r.bundlePolicy = "balanced"
                        }
                        if (r.iceServers = function (e, t) {
                            var r = !1;
                            return (e = JSON.parse(JSON.stringify(e))).filter((function (e) {
                                if (e && (e.urls || e.url)) {
                                    var i = e.urls || e.url;
                                    e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                                    var s = "string" == typeof i;
                                    return s && (i = [i]), i = i.filter((function (e) {
                                        return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || r ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (r = !0, !0)
                                    })), delete e.url, e.urls = s ? i[0] : i, !!i.length
                                }
                            }))
                        }(r.iceServers || [], t), this._iceGatherers = [], r.iceCandidatePoolSize) for (var n = r.iceCandidatePoolSize; n > 0; n--) this._iceGatherers.push(new e.RTCIceGatherer({
                            iceServers: r.iceServers,
                            gatherPolicy: r.iceTransportPolicy
                        })); else r.iceCandidatePoolSize = 0;
                        this._config = r, this.transceivers = [], this._sdpSessionId = i.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
                    };
                    Object.defineProperty(l.prototype, "localDescription", {
                        configurable: !0, get: function () {
                            return this._localDescription
                        }
                    }), Object.defineProperty(l.prototype, "remoteDescription", {
                        configurable: !0, get: function () {
                            return this._remoteDescription
                        }
                    }), l.prototype.onicecandidate = null, l.prototype.onaddstream = null, l.prototype.ontrack = null, l.prototype.onremovestream = null, l.prototype.onsignalingstatechange = null, l.prototype.oniceconnectionstatechange = null, l.prototype.onconnectionstatechange = null, l.prototype.onicegatheringstatechange = null, l.prototype.onnegotiationneeded = null, l.prototype.ondatachannel = null, l.prototype._dispatchEvent = function (e, t) {
                        this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t))
                    }, l.prototype._emitGatheringStateChange = function () {
                        var e = new Event("icegatheringstatechange");
                        this._dispatchEvent("icegatheringstatechange", e)
                    }, l.prototype.getConfiguration = function () {
                        return this._config
                    }, l.prototype.getLocalStreams = function () {
                        return this.localStreams
                    }, l.prototype.getRemoteStreams = function () {
                        return this.remoteStreams
                    }, l.prototype._createTransceiver = function (e, t) {
                        var r = this.transceivers.length > 0, i = {
                            track: null,
                            iceGatherer: null,
                            iceTransport: null,
                            dtlsTransport: null,
                            localCapabilities: null,
                            remoteCapabilities: null,
                            rtpSender: null,
                            rtpReceiver: null,
                            kind: e,
                            mid: null,
                            sendEncodingParameters: null,
                            recvEncodingParameters: null,
                            stream: null,
                            associatedRemoteMediaStreams: [],
                            wantReceive: !0
                        };
                        if (this.usingBundle && r) i.iceTransport = this.transceivers[0].iceTransport, i.dtlsTransport = this.transceivers[0].dtlsTransport; else {
                            var s = this._createIceAndDtlsTransports();
                            i.iceTransport = s.iceTransport, i.dtlsTransport = s.dtlsTransport
                        }
                        return t || this.transceivers.push(i), i
                    }, l.prototype.addTrack = function (t, r) {
                        if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                        var i;
                        if (this.transceivers.find((function (e) {
                            return e.track === t
                        }))) throw c("InvalidAccessError", "Track already exists.");
                        for (var s = 0; s < this.transceivers.length; s++) this.transceivers[s].track || this.transceivers[s].kind !== t.kind || (i = this.transceivers[s]);
                        return i || (i = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(r) && this.localStreams.push(r), i.track = t, i.stream = r, i.rtpSender = new e.RTCRtpSender(t, i.dtlsTransport), i.rtpSender
                    }, l.prototype.addStream = function (e) {
                        var r = this;
                        if (t >= 15025) e.getTracks().forEach((function (t) {
                            r.addTrack(t, e)
                        })); else {
                            var i = e.clone();
                            e.getTracks().forEach((function (e, t) {
                                var r = i.getTracks()[t];
                                e.addEventListener("enabled", (function (e) {
                                    r.enabled = e.enabled
                                }))
                            })), i.getTracks().forEach((function (e) {
                                r.addTrack(e, i)
                            }))
                        }
                    }, l.prototype.removeTrack = function (t) {
                        if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                        if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                        var r = this.transceivers.find((function (e) {
                            return e.rtpSender === t
                        }));
                        if (!r) throw c("InvalidAccessError", "Sender was not created by this connection.");
                        var i = r.stream;
                        r.rtpSender.stop(), r.rtpSender = null, r.track = null, r.stream = null, -1 === this.transceivers.map((function (e) {
                            return e.stream
                        })).indexOf(i) && this.localStreams.indexOf(i) > -1 && this.localStreams.splice(this.localStreams.indexOf(i), 1), this._maybeFireNegotiationNeeded()
                    }, l.prototype.removeStream = function (e) {
                        var t = this;
                        e.getTracks().forEach((function (e) {
                            var r = t.getSenders().find((function (t) {
                                return t.track === e
                            }));
                            r && t.removeTrack(r)
                        }))
                    }, l.prototype.getSenders = function () {
                        return this.transceivers.filter((function (e) {
                            return !!e.rtpSender
                        })).map((function (e) {
                            return e.rtpSender
                        }))
                    }, l.prototype.getReceivers = function () {
                        return this.transceivers.filter((function (e) {
                            return !!e.rtpReceiver
                        })).map((function (e) {
                            return e.rtpReceiver
                        }))
                    }, l.prototype._createIceGatherer = function (t, r) {
                        var i = this;
                        if (r && t > 0) return this.transceivers[0].iceGatherer;
                        if (this._iceGatherers.length) return this._iceGatherers.shift();
                        var s = new e.RTCIceGatherer({
                            iceServers: this._config.iceServers,
                            gatherPolicy: this._config.iceTransportPolicy
                        });
                        return Object.defineProperty(s, "state", {
                            value: "new",
                            writable: !0
                        }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function (e) {
                            var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                            s.state = r ? "completed" : "gathering", null !== i.transceivers[t].bufferedCandidateEvents && i.transceivers[t].bufferedCandidateEvents.push(e)
                        }, s.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), s
                    }, l.prototype._gather = function (t, r) {
                        var s = this, o = this.transceivers[r].iceGatherer;
                        if (!o.onlocalcandidate) {
                            var n = this.transceivers[r].bufferedCandidateEvents;
                            this.transceivers[r].bufferedCandidateEvents = null, o.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates), o.onlocalcandidate = function (e) {
                                if (!(s.usingBundle && r > 0)) {
                                    var n = new Event("icecandidate");
                                    n.candidate = {sdpMid: t, sdpMLineIndex: r};
                                    var a = e.candidate, c = !a || 0 === Object.keys(a).length;
                                    if (c) "new" !== o.state && "gathering" !== o.state || (o.state = "completed"); else {
                                        "new" === o.state && (o.state = "gathering"), a.component = 1, a.ufrag = o.getLocalParameters().usernameFragment;
                                        var d = i.writeCandidate(a);
                                        n.candidate = Object.assign(n.candidate, i.parseCandidate(d)), n.candidate.candidate = d, n.candidate.toJSON = function () {
                                            return {
                                                candidate: n.candidate.candidate,
                                                sdpMid: n.candidate.sdpMid,
                                                sdpMLineIndex: n.candidate.sdpMLineIndex,
                                                usernameFragment: n.candidate.usernameFragment
                                            }
                                        }
                                    }
                                    var l = i.getMediaSections(s._localDescription.sdp);
                                    l[n.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + n.candidate.candidate + "\r\n", s._localDescription.sdp = i.getDescription(s._localDescription.sdp) + l.join("");
                                    var u = s.transceivers.every((function (e) {
                                        return e.iceGatherer && "completed" === e.iceGatherer.state
                                    }));
                                    "gathering" !== s.iceGatheringState && (s.iceGatheringState = "gathering", s._emitGatheringStateChange()), c || s._dispatchEvent("icecandidate", n), u && (s._dispatchEvent("icecandidate", new Event("icecandidate")), s.iceGatheringState = "complete", s._emitGatheringStateChange())
                                }
                            }, e.setTimeout((function () {
                                n.forEach((function (e) {
                                    o.onlocalcandidate(e)
                                }))
                            }), 0)
                        }
                    }, l.prototype._createIceAndDtlsTransports = function () {
                        var t = this, r = new e.RTCIceTransport(null);
                        r.onicestatechange = function () {
                            t._updateIceConnectionState(), t._updateConnectionState()
                        };
                        var i = new e.RTCDtlsTransport(r);
                        return i.ondtlsstatechange = function () {
                            t._updateConnectionState()
                        }, i.onerror = function () {
                            Object.defineProperty(i, "state", {
                                value: "failed",
                                writable: !0
                            }), t._updateConnectionState()
                        }, {iceTransport: r, dtlsTransport: i}
                    }, l.prototype._disposeIceAndDtlsTransports = function (e) {
                        var t = this.transceivers[e].iceGatherer;
                        t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                        var r = this.transceivers[e].iceTransport;
                        r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
                        var i = this.transceivers[e].dtlsTransport;
                        i && (delete i.ondtlsstatechange, delete i.onerror, delete this.transceivers[e].dtlsTransport)
                    }, l.prototype._transceive = function (e, r, s) {
                        var n = o(e.localCapabilities, e.remoteCapabilities);
                        r && e.rtpSender && (n.encodings = e.sendEncodingParameters, n.rtcp = {
                            cname: i.localCName,
                            compound: e.rtcpParameters.compound
                        }, e.recvEncodingParameters.length && (n.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(n)), s && e.rtpReceiver && n.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach((function (e) {
                            delete e.rtx
                        })), e.recvEncodingParameters.length ? n.encodings = e.recvEncodingParameters : n.encodings = [{}], n.rtcp = {compound: e.rtcpParameters.compound}, e.rtcpParameters.cname && (n.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (n.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(n))
                    }, l.prototype.setLocalDescription = function (e) {
                        var t, r, s = this;
                        if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
                        if (!n("setLocalDescription", e.type, s.signalingState) || s._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + e.type + " in state " + s.signalingState));
                        if ("offer" === e.type) t = i.splitSections(e.sdp), r = t.shift(), t.forEach((function (e, t) {
                            var r = i.parseRtpParameters(e);
                            s.transceivers[t].localCapabilities = r
                        })), s.transceivers.forEach((function (e, t) {
                            s._gather(e.mid, t)
                        })); else if ("answer" === e.type) {
                            t = i.splitSections(s._remoteDescription.sdp), r = t.shift();
                            var a = i.matchPrefix(r, "a=ice-lite").length > 0;
                            t.forEach((function (e, t) {
                                var n = s.transceivers[t], c = n.iceGatherer, d = n.iceTransport, l = n.dtlsTransport,
                                    u = n.localCapabilities, h = n.remoteCapabilities;
                                if (!(i.isRejected(e) && 0 === i.matchPrefix(e, "a=bundle-only").length || n.rejected)) {
                                    var p = i.getIceParameters(e, r), g = i.getDtlsParameters(e, r);
                                    a && (g.role = "server"), s.usingBundle && 0 !== t || (s._gather(n.mid, t), "new" === d.state && d.start(c, p, a ? "controlling" : "controlled"), "new" === l.state && l.start(g));
                                    var m = o(u, h);
                                    s._transceive(n, m.codecs.length > 0, !1)
                                }
                            }))
                        }
                        return s._localDescription = {
                            type: e.type,
                            sdp: e.sdp
                        }, "offer" === e.type ? s._updateSignalingState("have-local-offer") : s._updateSignalingState("stable"), Promise.resolve()
                    }, l.prototype.setRemoteDescription = function (s) {
                        var l = this;
                        if (-1 === ["offer", "answer"].indexOf(s.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + s.type + '"'));
                        if (!n("setRemoteDescription", s.type, l.signalingState) || l._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + s.type + " in state " + l.signalingState));
                        var u = {};
                        l.remoteStreams.forEach((function (e) {
                            u[e.id] = e
                        }));
                        var h = [], p = i.splitSections(s.sdp), g = p.shift(),
                            m = i.matchPrefix(g, "a=ice-lite").length > 0,
                            f = i.matchPrefix(g, "a=group:BUNDLE ").length > 0;
                        l.usingBundle = f;
                        var v = i.matchPrefix(g, "a=ice-options:")[0];
                        return l.canTrickleIceCandidates = !!v && v.substr(14).split(" ").indexOf("trickle") >= 0, p.forEach((function (n, c) {
                            var d = i.splitLines(n), p = i.getKind(n),
                                v = i.isRejected(n) && 0 === i.matchPrefix(n, "a=bundle-only").length,
                                S = d[0].substr(2).split(" ")[2], C = i.getDirection(n, g), y = i.parseMsid(n),
                                b = i.getMid(n) || i.generateIdentifier();
                            if (v || "application" === p && ("DTLS/SCTP" === S || "UDP/DTLS/SCTP" === S)) l.transceivers[c] = {
                                mid: b,
                                kind: p,
                                protocol: S,
                                rejected: !0
                            }; else {
                                var E, T, R, _, k, L, M, P, I;
                                !v && l.transceivers[c] && l.transceivers[c].rejected && (l.transceivers[c] = l._createTransceiver(p, !0));
                                var w, U, D = i.parseRtpParameters(n);
                                v || (w = i.getIceParameters(n, g), (U = i.getDtlsParameters(n, g)).role = "client"), M = i.parseRtpEncodingParameters(n);
                                var N = i.parseRtcpParameters(n),
                                    O = i.matchPrefix(n, "a=end-of-candidates", g).length > 0,
                                    A = i.matchPrefix(n, "a=candidate:").map((function (e) {
                                        return i.parseCandidate(e)
                                    })).filter((function (e) {
                                        return 1 === e.component
                                    }));
                                if (("offer" === s.type || "answer" === s.type) && !v && f && c > 0 && l.transceivers[c] && (l._disposeIceAndDtlsTransports(c), l.transceivers[c].iceGatherer = l.transceivers[0].iceGatherer, l.transceivers[c].iceTransport = l.transceivers[0].iceTransport, l.transceivers[c].dtlsTransport = l.transceivers[0].dtlsTransport, l.transceivers[c].rtpSender && l.transceivers[c].rtpSender.setTransport(l.transceivers[0].dtlsTransport), l.transceivers[c].rtpReceiver && l.transceivers[c].rtpReceiver.setTransport(l.transceivers[0].dtlsTransport)), "offer" !== s.type || v) "answer" !== s.type || v || (T = (E = l.transceivers[c]).iceGatherer, R = E.iceTransport, _ = E.dtlsTransport, k = E.rtpReceiver, L = E.sendEncodingParameters, P = E.localCapabilities, l.transceivers[c].recvEncodingParameters = M, l.transceivers[c].remoteCapabilities = D, l.transceivers[c].rtcpParameters = N, A.length && "new" === R.state && (!m && !O || f && 0 !== c ? A.forEach((function (e) {
                                    a(E.iceTransport, e)
                                })) : R.setRemoteCandidates(A)), f && 0 !== c || ("new" === R.state && R.start(T, w, "controlling"), "new" === _.state && _.start(U)), !o(E.localCapabilities, E.remoteCapabilities).codecs.filter((function (e) {
                                    return "rtx" === e.name.toLowerCase()
                                })).length && E.sendEncodingParameters[0].rtx && delete E.sendEncodingParameters[0].rtx, l._transceive(E, "sendrecv" === C || "recvonly" === C, "sendrecv" === C || "sendonly" === C), !k || "sendrecv" !== C && "sendonly" !== C ? delete E.rtpReceiver : (I = k.track, y ? (u[y.stream] || (u[y.stream] = new e.MediaStream), r(I, u[y.stream]), h.push([I, k, u[y.stream]])) : (u.default || (u.default = new e.MediaStream), r(I, u.default), h.push([I, k, u.default])))); else {
                                    (E = l.transceivers[c] || l._createTransceiver(p)).mid = b, E.iceGatherer || (E.iceGatherer = l._createIceGatherer(c, f)), A.length && "new" === E.iceTransport.state && (!O || f && 0 !== c ? A.forEach((function (e) {
                                        a(E.iceTransport, e)
                                    })) : E.iceTransport.setRemoteCandidates(A)), P = e.RTCRtpReceiver.getCapabilities(p), t < 15019 && (P.codecs = P.codecs.filter((function (e) {
                                        return "rtx" !== e.name
                                    }))), L = E.sendEncodingParameters || [{ssrc: 1001 * (2 * c + 2)}];
                                    var x, z = !1;
                                    "sendrecv" === C || "sendonly" === C ? (z = !E.rtpReceiver, k = E.rtpReceiver || new e.RTCRtpReceiver(E.dtlsTransport, p), z && (I = k.track, y && "-" === y.stream || (y ? (u[y.stream] || (u[y.stream] = new e.MediaStream, Object.defineProperty(u[y.stream], "id", {
                                        get: function () {
                                            return y.stream
                                        }
                                    })), Object.defineProperty(I, "id", {
                                        get: function () {
                                            return y.track
                                        }
                                    }), x = u[y.stream]) : (u.default || (u.default = new e.MediaStream), x = u.default)), x && (r(I, x), E.associatedRemoteMediaStreams.push(x)), h.push([I, k, x]))) : E.rtpReceiver && E.rtpReceiver.track && (E.associatedRemoteMediaStreams.forEach((function (t) {
                                        var r = t.getTracks().find((function (e) {
                                            return e.id === E.rtpReceiver.track.id
                                        }));
                                        r && function (t, r) {
                                            r.removeTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {track: t}))
                                        }(r, t)
                                    })), E.associatedRemoteMediaStreams = []), E.localCapabilities = P, E.remoteCapabilities = D, E.rtpReceiver = k, E.rtcpParameters = N, E.sendEncodingParameters = L, E.recvEncodingParameters = M, l._transceive(l.transceivers[c], !1, z)
                                }
                            }
                        })), void 0 === l._dtlsRole && (l._dtlsRole = "offer" === s.type ? "active" : "passive"), l._remoteDescription = {
                            type: s.type,
                            sdp: s.sdp
                        }, "offer" === s.type ? l._updateSignalingState("have-remote-offer") : l._updateSignalingState("stable"), Object.keys(u).forEach((function (t) {
                            var r = u[t];
                            if (r.getTracks().length) {
                                if (-1 === l.remoteStreams.indexOf(r)) {
                                    l.remoteStreams.push(r);
                                    var i = new Event("addstream");
                                    i.stream = r, e.setTimeout((function () {
                                        l._dispatchEvent("addstream", i)
                                    }))
                                }
                                h.forEach((function (e) {
                                    var t = e[0], i = e[1];
                                    r.id === e[2].id && d(l, t, i, [r])
                                }))
                            }
                        })), h.forEach((function (e) {
                            e[2] || d(l, e[0], e[1], [])
                        })), e.setTimeout((function () {
                            l && l.transceivers && l.transceivers.forEach((function (e) {
                                e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}))
                            }))
                        }), 4e3), Promise.resolve()
                    }, l.prototype.close = function () {
                        this.transceivers.forEach((function (e) {
                            e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
                        })), this._isClosed = !0, this._updateSignalingState("closed")
                    }, l.prototype._updateSignalingState = function (e) {
                        this.signalingState = e;
                        var t = new Event("signalingstatechange");
                        this._dispatchEvent("signalingstatechange", t)
                    }, l.prototype._maybeFireNegotiationNeeded = function () {
                        var t = this;
                        "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout((function () {
                            if (t.needNegotiation) {
                                t.needNegotiation = !1;
                                var e = new Event("negotiationneeded");
                                t._dispatchEvent("negotiationneeded", e)
                            }
                        }), 0))
                    }, l.prototype._updateIceConnectionState = function () {
                        var e, t = {
                            new: 0,
                            closed: 0,
                            checking: 0,
                            connected: 0,
                            completed: 0,
                            disconnected: 0,
                            failed: 0
                        };
                        if (this.transceivers.forEach((function (e) {
                            e.iceTransport && !e.rejected && t[e.iceTransport.state]++
                        })), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
                            this.iceConnectionState = e;
                            var r = new Event("iceconnectionstatechange");
                            this._dispatchEvent("iceconnectionstatechange", r)
                        }
                    }, l.prototype._updateConnectionState = function () {
                        var e, t = {
                            new: 0,
                            closed: 0,
                            connecting: 0,
                            connected: 0,
                            completed: 0,
                            disconnected: 0,
                            failed: 0
                        };
                        if (this.transceivers.forEach((function (e) {
                            e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++)
                        })), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
                            this.connectionState = e;
                            var r = new Event("connectionstatechange");
                            this._dispatchEvent("connectionstatechange", r)
                        }
                    }, l.prototype.createOffer = function () {
                        var r = this;
                        if (r._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
                        var o = r.transceivers.filter((function (e) {
                            return "audio" === e.kind
                        })).length, n = r.transceivers.filter((function (e) {
                            return "video" === e.kind
                        })).length, a = arguments[0];
                        if (a) {
                            if (a.mandatory || a.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                            void 0 !== a.offerToReceiveAudio && (o = !0 === a.offerToReceiveAudio ? 1 : !1 === a.offerToReceiveAudio ? 0 : a.offerToReceiveAudio), void 0 !== a.offerToReceiveVideo && (n = !0 === a.offerToReceiveVideo ? 1 : !1 === a.offerToReceiveVideo ? 0 : a.offerToReceiveVideo)
                        }
                        for (r.transceivers.forEach((function (e) {
                            "audio" === e.kind ? --o < 0 && (e.wantReceive = !1) : "video" === e.kind && --n < 0 && (e.wantReceive = !1)
                        })); o > 0 || n > 0;) o > 0 && (r._createTransceiver("audio"), o--), n > 0 && (r._createTransceiver("video"), n--);
                        var d = i.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                        r.transceivers.forEach((function (s, o) {
                            var n = s.track, a = s.kind, c = s.mid || i.generateIdentifier();
                            s.mid = c, s.iceGatherer || (s.iceGatherer = r._createIceGatherer(o, r.usingBundle));
                            var d = e.RTCRtpSender.getCapabilities(a);
                            t < 15019 && (d.codecs = d.codecs.filter((function (e) {
                                return "rtx" !== e.name
                            }))), d.codecs.forEach((function (e) {
                                "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), s.remoteCapabilities && s.remoteCapabilities.codecs && s.remoteCapabilities.codecs.forEach((function (t) {
                                    e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType)
                                }))
                            })), d.headerExtensions.forEach((function (e) {
                                (s.remoteCapabilities && s.remoteCapabilities.headerExtensions || []).forEach((function (t) {
                                    e.uri === t.uri && (e.id = t.id)
                                }))
                            }));
                            var l = s.sendEncodingParameters || [{ssrc: 1001 * (2 * o + 1)}];
                            n && t >= 15019 && "video" === a && !l[0].rtx && (l[0].rtx = {ssrc: l[0].ssrc + 1}), s.wantReceive && (s.rtpReceiver = new e.RTCRtpReceiver(s.dtlsTransport, a)), s.localCapabilities = d, s.sendEncodingParameters = l
                        })), "max-compat" !== r._config.bundlePolicy && (d += "a=group:BUNDLE " + r.transceivers.map((function (e) {
                            return e.mid
                        })).join(" ") + "\r\n"), d += "a=ice-options:trickle\r\n", r.transceivers.forEach((function (e, t) {
                            d += s(e, e.localCapabilities, "offer", e.stream, r._dtlsRole), d += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === r.iceGatheringState || 0 !== t && r.usingBundle || (e.iceGatherer.getLocalCandidates().forEach((function (e) {
                                e.component = 1, d += "a=" + i.writeCandidate(e) + "\r\n"
                            })), "completed" === e.iceGatherer.state && (d += "a=end-of-candidates\r\n"))
                        }));
                        var l = new e.RTCSessionDescription({type: "offer", sdp: d});
                        return Promise.resolve(l)
                    }, l.prototype.createAnswer = function () {
                        var r = this;
                        if (r._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
                        if ("have-remote-offer" !== r.signalingState && "have-local-pranswer" !== r.signalingState) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + r.signalingState));
                        var n = i.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                        r.usingBundle && (n += "a=group:BUNDLE " + r.transceivers.map((function (e) {
                            return e.mid
                        })).join(" ") + "\r\n"), n += "a=ice-options:trickle\r\n";
                        var a = i.getMediaSections(r._remoteDescription.sdp).length;
                        r.transceivers.forEach((function (e, i) {
                            if (!(i + 1 > a)) {
                                if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? n += "m=application 0 DTLS/SCTP 5000\r\n" : n += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? n += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (n += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (n += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                                var c;
                                e.stream && ("audio" === e.kind ? c = e.stream.getAudioTracks()[0] : "video" === e.kind && (c = e.stream.getVideoTracks()[0]), c && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {ssrc: e.sendEncodingParameters[0].ssrc + 1}));
                                var d = o(e.localCapabilities, e.remoteCapabilities);
                                !d.codecs.filter((function (e) {
                                    return "rtx" === e.name.toLowerCase()
                                })).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, n += s(e, d, "answer", e.stream, r._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (n += "a=rtcp-rsize\r\n")
                            }
                        }));
                        var d = new e.RTCSessionDescription({type: "answer", sdp: n});
                        return Promise.resolve(d)
                    }, l.prototype.addIceCandidate = function (e) {
                        var t, r = this;
                        return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise((function (s, o) {
                            if (!r._remoteDescription) return o(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
                            if (e && "" !== e.candidate) {
                                var n = e.sdpMLineIndex;
                                if (e.sdpMid) for (var d = 0; d < r.transceivers.length; d++) if (r.transceivers[d].mid === e.sdpMid) {
                                    n = d;
                                    break
                                }
                                var l = r.transceivers[n];
                                if (!l) return o(c("OperationError", "Can not add ICE candidate"));
                                if (l.rejected) return s();
                                var u = Object.keys(e.candidate).length > 0 ? i.parseCandidate(e.candidate) : {};
                                if ("tcp" === u.protocol && (0 === u.port || 9 === u.port)) return s();
                                if (u.component && 1 !== u.component) return s();
                                if ((0 === n || n > 0 && l.iceTransport !== r.transceivers[0].iceTransport) && !a(l.iceTransport, u)) return o(c("OperationError", "Can not add ICE candidate"));
                                var h = e.candidate.trim();
                                0 === h.indexOf("a=") && (h = h.substr(2)), (t = i.getMediaSections(r._remoteDescription.sdp))[n] += "a=" + (u.type ? h : "end-of-candidates") + "\r\n", r._remoteDescription.sdp = i.getDescription(r._remoteDescription.sdp) + t.join("")
                            } else for (var p = 0; p < r.transceivers.length && (r.transceivers[p].rejected || (r.transceivers[p].iceTransport.addRemoteCandidate({}), (t = i.getMediaSections(r._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n", r._remoteDescription.sdp = i.getDescription(r._remoteDescription.sdp) + t.join(""), !r.usingBundle)); p++) ;
                            s()
                        }))
                    }, l.prototype.getStats = function (t) {
                        if (t && t instanceof e.MediaStreamTrack) {
                            var r = null;
                            if (this.transceivers.forEach((function (e) {
                                e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver)
                            })), !r) throw c("InvalidAccessError", "Invalid selector.");
                            return r.getStats()
                        }
                        var i = [];
                        return this.transceivers.forEach((function (e) {
                            ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach((function (t) {
                                e[t] && i.push(e[t].getStats())
                            }))
                        })), Promise.all(i).then((function (e) {
                            var t = new Map;
                            return e.forEach((function (e) {
                                e.forEach((function (e) {
                                    t.set(e.id, e)
                                }))
                            })), t
                        }))
                    }, ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach((function (t) {
                        var r = e[t];
                        if (r && r.prototype && r.prototype.getStats) {
                            var i = r.prototype.getStats;
                            r.prototype.getStats = function () {
                                return i.apply(this).then((function (e) {
                                    var t = new Map;
                                    return Object.keys(e).forEach((function (r) {
                                        var i;
                                        e[r].type = {
                                            inboundrtp: "inbound-rtp",
                                            outboundrtp: "outbound-rtp",
                                            candidatepair: "candidate-pair",
                                            localcandidate: "local-candidate",
                                            remotecandidate: "remote-candidate"
                                        }[(i = e[r]).type] || i.type, t.set(r, e[r])
                                    })), t
                                }))
                            }
                        }
                    }));
                    var u = ["createOffer", "createAnswer"];
                    return u.forEach((function (e) {
                        var t = l.prototype[e];
                        l.prototype[e] = function () {
                            var e = arguments;
                            return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then((function (t) {
                                "function" == typeof e[0] && e[0].apply(null, [t])
                            }), (function (t) {
                                "function" == typeof e[1] && e[1].apply(null, [t])
                            })) : t.apply(this, arguments)
                        }
                    })), (u = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach((function (e) {
                        var t = l.prototype[e];
                        l.prototype[e] = function () {
                            var e = arguments;
                            return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then((function () {
                                "function" == typeof e[1] && e[1].apply(null)
                            }), (function (t) {
                                "function" == typeof e[2] && e[2].apply(null, [t])
                            })) : t.apply(this, arguments)
                        }
                    })), ["getStats"].forEach((function (e) {
                        var t = l.prototype[e];
                        l.prototype[e] = function () {
                            var e = arguments;
                            return "function" == typeof e[1] ? t.apply(this, arguments).then((function () {
                                "function" == typeof e[1] && e[1].apply(null)
                            })) : t.apply(this, arguments)
                        }
                    })), l
                }
            }, {sdp: 17}], 17: [function (e, t, r) {
                "use strict";
                var i = {
                    generateIdentifier: function () {
                        return Math.random().toString(36).substr(2, 10)
                    }
                };
                i.localCName = i.generateIdentifier(), i.splitLines = function (e) {
                    return e.trim().split("\n").map((function (e) {
                        return e.trim()
                    }))
                }, i.splitSections = function (e) {
                    return e.split("\nm=").map((function (e, t) {
                        return (t > 0 ? "m=" + e : e).trim() + "\r\n"
                    }))
                }, i.getDescription = function (e) {
                    var t = i.splitSections(e);
                    return t && t[0]
                }, i.getMediaSections = function (e) {
                    var t = i.splitSections(e);
                    return t.shift(), t
                }, i.matchPrefix = function (e, t) {
                    return i.splitLines(e).filter((function (e) {
                        return 0 === e.indexOf(t)
                    }))
                }, i.parseCandidate = function (e) {
                    for (var t, r = {
                        foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                        component: parseInt(t[1], 10),
                        protocol: t[2].toLowerCase(),
                        priority: parseInt(t[3], 10),
                        ip: t[4],
                        address: t[4],
                        port: parseInt(t[5], 10),
                        type: t[7]
                    }, i = 8; i < t.length; i += 2) switch (t[i]) {
                        case"raddr":
                            r.relatedAddress = t[i + 1];
                            break;
                        case"rport":
                            r.relatedPort = parseInt(t[i + 1], 10);
                            break;
                        case"tcptype":
                            r.tcpType = t[i + 1];
                            break;
                        case"ufrag":
                            r.ufrag = t[i + 1], r.usernameFragment = t[i + 1];
                            break;
                        default:
                            r[t[i]] = t[i + 1]
                    }
                    return r
                }, i.writeCandidate = function (e) {
                    var t = [];
                    t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
                    var r = e.type;
                    return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
                }, i.parseIceOptions = function (e) {
                    return e.substr(14).split(" ")
                }, i.parseRtpMap = function (e) {
                    var t = e.substr(9).split(" "), r = {payloadType: parseInt(t.shift(), 10)};
                    return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r
                }, i.writeRtpMap = function (e) {
                    var t = e.payloadType;
                    void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                    var r = e.channels || e.numChannels || 1;
                    return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n"
                }, i.parseExtmap = function (e) {
                    var t = e.substr(9).split(" ");
                    return {
                        id: parseInt(t[0], 10),
                        direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                        uri: t[1]
                    }
                }, i.writeExtmap = function (e) {
                    return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
                }, i.parseFmtp = function (e) {
                    for (var t, r = {}, i = e.substr(e.indexOf(" ") + 1).split(";"), s = 0; s < i.length; s++) r[(t = i[s].trim().split("="))[0].trim()] = t[1];
                    return r
                }, i.writeFmtp = function (e) {
                    var t = "", r = e.payloadType;
                    if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                        var i = [];
                        Object.keys(e.parameters).forEach((function (t) {
                            e.parameters[t] ? i.push(t + "=" + e.parameters[t]) : i.push(t)
                        })), t += "a=fmtp:" + r + " " + i.join(";") + "\r\n"
                    }
                    return t
                }, i.parseRtcpFb = function (e) {
                    var t = e.substr(e.indexOf(" ") + 1).split(" ");
                    return {type: t.shift(), parameter: t.join(" ")}
                }, i.writeRtcpFb = function (e) {
                    var t = "", r = e.payloadType;
                    return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((function (e) {
                        t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
                    })), t
                }, i.parseSsrcMedia = function (e) {
                    var t = e.indexOf(" "), r = {ssrc: parseInt(e.substr(7, t - 7), 10)}, i = e.indexOf(":", t);
                    return i > -1 ? (r.attribute = e.substr(t + 1, i - t - 1), r.value = e.substr(i + 1)) : r.attribute = e.substr(t + 1), r
                }, i.parseSsrcGroup = function (e) {
                    var t = e.substr(13).split(" ");
                    return {
                        semantics: t.shift(), ssrcs: t.map((function (e) {
                            return parseInt(e, 10)
                        }))
                    }
                }, i.getMid = function (e) {
                    var t = i.matchPrefix(e, "a=mid:")[0];
                    if (t) return t.substr(6)
                }, i.parseFingerprint = function (e) {
                    var t = e.substr(14).split(" ");
                    return {algorithm: t[0].toLowerCase(), value: t[1]}
                }, i.getDtlsParameters = function (e, t) {
                    return {role: "auto", fingerprints: i.matchPrefix(e + t, "a=fingerprint:").map(i.parseFingerprint)}
                }, i.writeDtlsParameters = function (e, t) {
                    var r = "a=setup:" + t + "\r\n";
                    return e.fingerprints.forEach((function (e) {
                        r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
                    })), r
                }, i.getIceParameters = function (e, t) {
                    var r = i.splitLines(e);
                    return {
                        usernameFragment: (r = r.concat(i.splitLines(t))).filter((function (e) {
                            return 0 === e.indexOf("a=ice-ufrag:")
                        }))[0].substr(12), password: r.filter((function (e) {
                            return 0 === e.indexOf("a=ice-pwd:")
                        }))[0].substr(10)
                    }
                }, i.writeIceParameters = function (e) {
                    return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
                }, i.parseRtpParameters = function (e) {
                    for (var t = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: [],
                        rtcp: []
                    }, r = i.splitLines(e)[0].split(" "), s = 3; s < r.length; s++) {
                        var o = r[s], n = i.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
                        if (n) {
                            var a = i.parseRtpMap(n), c = i.matchPrefix(e, "a=fmtp:" + o + " ");
                            switch (a.parameters = c.length ? i.parseFmtp(c[0]) : {}, a.rtcpFeedback = i.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(i.parseRtcpFb), t.codecs.push(a), a.name.toUpperCase()) {
                                case"RED":
                                case"ULPFEC":
                                    t.fecMechanisms.push(a.name.toUpperCase())
                            }
                        }
                    }
                    return i.matchPrefix(e, "a=extmap:").forEach((function (e) {
                        t.headerExtensions.push(i.parseExtmap(e))
                    })), t
                }, i.writeRtpDescription = function (e, t) {
                    var r = "";
                    r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map((function (e) {
                        return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
                    })).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach((function (e) {
                        r += i.writeRtpMap(e), r += i.writeFmtp(e), r += i.writeRtcpFb(e)
                    }));
                    var s = 0;
                    return t.codecs.forEach((function (e) {
                        e.maxptime > s && (s = e.maxptime)
                    })), s > 0 && (r += "a=maxptime:" + s + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach((function (e) {
                        r += i.writeExtmap(e)
                    })), r
                }, i.parseRtpEncodingParameters = function (e) {
                    var t, r = [], s = i.parseRtpParameters(e), o = -1 !== s.fecMechanisms.indexOf("RED"),
                        n = -1 !== s.fecMechanisms.indexOf("ULPFEC"),
                        a = i.matchPrefix(e, "a=ssrc:").map((function (e) {
                            return i.parseSsrcMedia(e)
                        })).filter((function (e) {
                            return "cname" === e.attribute
                        })), c = a.length > 0 && a[0].ssrc, d = i.matchPrefix(e, "a=ssrc-group:FID").map((function (e) {
                            return e.substr(17).split(" ").map((function (e) {
                                return parseInt(e, 10)
                            }))
                        }));
                    d.length > 0 && d[0].length > 1 && d[0][0] === c && (t = d[0][1]), s.codecs.forEach((function (e) {
                        if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                            var i = {ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10)};
                            c && t && (i.rtx = {ssrc: t}), r.push(i), o && ((i = JSON.parse(JSON.stringify(i))).fec = {
                                ssrc: c,
                                mechanism: n ? "red+ulpfec" : "red"
                            }, r.push(i))
                        }
                    })), 0 === r.length && c && r.push({ssrc: c});
                    var l = i.matchPrefix(e, "b=");
                    return l.length && (l = 0 === l[0].indexOf("b=TIAS:") ? parseInt(l[0].substr(7), 10) : 0 === l[0].indexOf("b=AS:") ? 1e3 * parseInt(l[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach((function (e) {
                        e.maxBitrate = l
                    }))), r
                }, i.parseRtcpParameters = function (e) {
                    var t = {}, r = i.matchPrefix(e, "a=ssrc:").map((function (e) {
                        return i.parseSsrcMedia(e)
                    })).filter((function (e) {
                        return "cname" === e.attribute
                    }))[0];
                    r && (t.cname = r.value, t.ssrc = r.ssrc);
                    var s = i.matchPrefix(e, "a=rtcp-rsize");
                    t.reducedSize = s.length > 0, t.compound = 0 === s.length;
                    var o = i.matchPrefix(e, "a=rtcp-mux");
                    return t.mux = o.length > 0, t
                }, i.parseMsid = function (e) {
                    var t, r = i.matchPrefix(e, "a=msid:");
                    if (1 === r.length) return {stream: (t = r[0].substr(7).split(" "))[0], track: t[1]};
                    var s = i.matchPrefix(e, "a=ssrc:").map((function (e) {
                        return i.parseSsrcMedia(e)
                    })).filter((function (e) {
                        return "msid" === e.attribute
                    }));
                    return s.length > 0 ? {stream: (t = s[0].value.split(" "))[0], track: t[1]} : void 0
                }, i.generateSessionId = function () {
                    return Math.random().toString().substr(2, 21)
                }, i.writeSessionBoilerplate = function (e, t, r) {
                    var s = void 0 !== t ? t : 2;
                    return "v=0\r\no=" + (r || "thisisadapterortc") + " " + (e || i.generateSessionId()) + " " + s + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                }, i.writeMediaSection = function (e, t, r, s) {
                    var o = i.writeRtpDescription(e.kind, t);
                    if (o += i.writeIceParameters(e.iceGatherer.getLocalParameters()), o += i.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), o += "a=mid:" + e.mid + "\r\n", e.direction ? o += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? o += "a=sendrecv\r\n" : e.rtpSender ? o += "a=sendonly\r\n" : e.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", e.rtpSender) {
                        var n = "msid:" + s.id + " " + e.rtpSender.track.id + "\r\n";
                        o += "a=" + n, o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + n, e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + n, o += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                    }
                    return o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + i.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + i.localCName + "\r\n"), o
                }, i.getDirection = function (e, t) {
                    for (var r = i.splitLines(e), s = 0; s < r.length; s++) switch (r[s]) {
                        case"a=sendrecv":
                        case"a=sendonly":
                        case"a=recvonly":
                        case"a=inactive":
                            return r[s].substr(2)
                    }
                    return t ? i.getDirection(t) : "sendrecv"
                }, i.getKind = function (e) {
                    return i.splitLines(e)[0].split(" ")[0].substr(2)
                }, i.isRejected = function (e) {
                    return "0" === e.split(" ", 2)[1]
                }, i.parseMLine = function (e) {
                    var t = i.splitLines(e)[0].substr(2).split(" ");
                    return {kind: t[0], port: parseInt(t[1], 10), protocol: t[2], fmt: t.slice(3).join(" ")}
                }, i.parseOLine = function (e) {
                    var t = i.matchPrefix(e, "o=")[0].substr(2).split(" ");
                    return {
                        username: t[0],
                        sessionId: t[1],
                        sessionVersion: parseInt(t[2], 10),
                        netType: t[3],
                        addressType: t[4],
                        address: t[5]
                    }
                }, i.isValidSDP = function (e) {
                    if ("string" != typeof e || 0 === e.length) return !1;
                    for (var t = i.splitLines(e), r = 0; r < t.length; r++) if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
                    return !0
                }, "object" == typeof t && (t.exports = i)
            }, {}]
        }, {}, [1])(1)
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e) {
                this.delayTime = .1, this.fadeTime = .05, this.startTime = .1, this.previousPitch = -1, this.context = e, this.input = e.createGain(), this.output = e.createGain(), this.mod1 = e.createBufferSource(), this.mod2 = e.createBufferSource(), this.mod3 = e.createBufferSource(), this.mod4 = e.createBufferSource(), this.shiftDownBuffer = this.createDelayTimeBuffer(e, this.startTime, this.fadeTime, !1), this.shiftUpBuffer = this.createDelayTimeBuffer(e, this.startTime, this.fadeTime, !0), this.mod1.buffer = this.shiftDownBuffer, this.mod2.buffer = this.shiftDownBuffer, this.mod3.buffer = this.shiftUpBuffer, this.mod4.buffer = this.shiftUpBuffer, this.mod1.loop = !0, this.mod2.loop = !0, this.mod3.loop = !0, this.mod4.loop = !0, this.mod1Gain = e.createGain(), this.mod2Gain = e.createGain(), this.mod3Gain = e.createGain(), this.mod4Gain = e.createGain(), this.mod3Gain.gain.value = 0, this.mod4Gain.gain.value = 0, this.mod1.connect(this.mod1Gain), this.mod2.connect(this.mod2Gain), this.mod3.connect(this.mod3Gain), this.mod4.connect(this.mod4Gain), this.modGain1 = e.createGain(), this.modGain2 = e.createGain(), this.delay1 = e.createDelay(), this.delay2 = e.createDelay(), this.mod1Gain.connect(this.modGain1), this.mod2Gain.connect(this.modGain2), this.mod3Gain.connect(this.modGain1), this.mod4Gain.connect(this.modGain2), this.modGain1.connect(this.delay1.delayTime), this.modGain2.connect(this.delay2.delayTime), this.fade1 = e.createBufferSource(), this.fade2 = e.createBufferSource(), this.fadeBuffer = this.createFadeBuffer(e, this.startTime, this.fadeTime), this.fade1.buffer = this.fadeBuffer, this.fade2.buffer = this.fadeBuffer, this.fade1.loop = !0, this.fade2.loop = !0, this.mix1 = e.createGain(), this.mix2 = e.createGain(), this.mix1.gain.value = 0, this.mix2.gain.value = 0, this.fade1.connect(this.mix1.gain), this.fade2.connect(this.mix2.gain), this.input.connect(this.delay1), this.input.connect(this.delay2), this.delay1.connect(this.mix1), this.delay2.connect(this.mix2), this.mix1.connect(this.output), this.mix2.connect(this.output);
                var t = e.currentTime + .05, r = t + this.startTime - this.fadeTime;
                this.mod1.start(t), this.mod2.start(r), this.mod3.start(t), this.mod4.start(r), this.fade1.start(t), this.fade2.start(r), this.setDelay(this.delayTime)
            }

            return e.prototype.createFadeBuffer = function (e, t, r) {
                for (var i = t * e.sampleRate, s = i + (t - 2 * r) * e.sampleRate, o = e.createBuffer(1, s, e.sampleRate), n = o.getChannelData(0), a = r * e.sampleRate, c = i - a, d = 0; d < i; ++d) n[d] = d < a ? Math.sqrt(d / a) : d >= c ? Math.sqrt(1 - (d - c) / a) : 1;
                for (d = i; d < length; ++d) n[d] = 0;
                return o
            }, e.prototype.createDelayTimeBuffer = function (e, t, r, i) {
                for (var s = t * e.sampleRate, o = s + (t - 2 * r) * e.sampleRate, n = e.createBuffer(1, o, e.sampleRate), a = n.getChannelData(0), c = 0; c < s; ++c) a[c] = i ? (s - c) / o : c / s;
                for (c = s; c < o; ++c) a[c] = 0;
                return n
            }, e.prototype.setDelay = function (e) {
                this.modGain1.gain.setTargetAtTime(.5 * e, 0, .01), this.modGain2.gain.setTargetAtTime(.5 * e, 0, .01)
            }, e.prototype.setPitchOffset = function (e) {
                e > 0 ? (this.mod1Gain.gain.value = 0, this.mod2Gain.gain.value = 0, this.mod3Gain.gain.value = 1, this.mod4Gain.gain.value = 1) : (this.mod1Gain.gain.value = 1, this.mod2Gain.gain.value = 1, this.mod3Gain.gain.value = 0, this.mod4Gain.gain.value = 0), this.setDelay(this.delayTime * Math.abs(e)), this.previousPitch = e
            }, e
        }();
        t.PitchUtil = i
    }, function (e, t, r) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = r(0), o = r(2), n = function () {
            function e(e, t) {
                this.sendDataMap = {}, this.sendDataList = new s.LinkedList, this.sendDataCheckOnceCount = 100, this.signalSeq = 0, this.pushCallback = {}, this.sessionInfos = {}, this.tryHeartbeatCount = 0, this.heartbeatInterval = 1e4, this.sendDataTimeout = 5e3, this.sendDataDropTimeout = 1e4, this.tryConnectCount = 1, this.tryConnectTimer = null, this.tryConnectInterval = 3e3, this.state = s.ENUM_CONNECT_STATE.disconnect, this.tokenType = 0, this.browser = this.getBrowserAndVersion(), this.platform = navigator.platform, this.negoInterval = 25e3, this.negoTryCount = 1, this.negoTryMaxCount = 2, this.logger = e, this.stateCenter = t
            }

            return e.prototype.getBrowserAndVersion = function () {
                var e, t = navigator.userAgent,
                    r = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
                return /trident/i.test(r[1]) ? {
                    name: "IE",
                    version: (e = /\brv[ :]+([\d\.]+)/g.exec(t) || [])[1] || ""
                } : "Chrome" === r[1] && null != (e = t.match(/\bOPR|Edge\/([\d\.]+)/)) ? {
                    name: "Opera",
                    version: e[1]
                } : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/([\d+\.]+)/i)) && r.splice(1, 1, e[1]), {
                    name: r[0],
                    version: r[1]
                })
            }, e.prototype.setSessionInfo = function (e, t) {
                this.logger.debug("zs.ssi.0 call"), this.appid = e + "", this.userid = t
            }, e.prototype.onDisconnect = function (e) {
            }, e.prototype.onUpdateHeartBeartInterval = function (e) {
            }, e.prototype.resetConnectTimer = function () {
                this.logger.info("zs.rct.0 call"), clearTimeout(this.tryConnectTimer), this.tryConnectTimer = null, this.tryConnectCount = 0
            }, e.prototype.bindWebSocketHandle = function () {
                var e = this;
                this.tryHeartbeatCount = 0, this.websocket.onmessage = function (t) {
                    var r = JSON.parse(t.data);
                    e.logger.info("zs.bsh.0 signmsg= ", r.header.cmd), e.logger.info("zs.bsh.0 signmsg= " + JSON.stringify(r)), r.header.appid == e.appid && r.header.user_id === e.userid ? e.handleServerPush(r) : e.logger.warn("zs.bsh.0 check header failed")
                }, this.websocket.onclose = function (t) {
                    e.logger.info("zs.bsh.0 close msg = " + JSON.stringify(t)), e.state != s.ENUM_CONNECT_STATE.disconnect && (e.resetConnectTimer(), e.startConnectTimer(), e.resetCheckMessage())
                }, this.websocket.onerror = function (t) {
                    e.logger.error("zs.bsh.0 msg = " + JSON.stringify(t))
                }
            }, e.prototype.resetCheckMessage = function () {
                this.logger.debug("zs.rcm.0 call");
                for (var e = this.sendDataList.getFirst(); null != e;) this.sendDataList.remove(e), e._data.error && e._data.error(s.SEND_MSG_RESET, e._data.seq), e = this.sendDataList.getFirst();
                this.sendDataMap = {}
            }, e.prototype.handleServerPush = function (e) {
                switch (e.header.cmd) {
                    case"LoginRsp":
                        this.handleRespondData("LoginReq", e);
                        break;
                    case"CreateSessionRsp":
                        this.handleRespondData("CreateSessionReq", e), 0 === e.body.result && this.addSession(e.header.session_id, e.body.session_token);
                        break;
                    case"MediaDescRsp":
                        this.handleRespondData("MediaDescReq", e);
                        break;
                    case"CandidateInfoRsp":
                        this.handleRespondData("CandidateInfoReq", e);
                        break;
                    case"CloseSessionRsp":
                        this.handleRespondData("CloseSessionReq", e), this.removeSession(e.header.session_id);
                        break;
                    case"ClientHBRsp":
                        this.handleRespondData("ClientHBReq", e);
                        break;
                    case"MediaDescPush":
                    case"CandidateInfoPush":
                        this.handlePushData(e);
                        break;
                    case"CloseSessionPush":
                        this.handlePushData(e), this.removeSession(e.header.session_id);
                        break;
                    case"QualityReportRsp":
                        this.handleRespondData("QualityReportReq", e);
                        break;
                    case"SessionResetPush":
                        this.handlePushResetSessionData(e);
                        break;
                    case"StreamStatusNotifyPush":
                    case"PublishEventPush":
                    case"PlayEventPush":
                        this.handlePushData(e)
                }
            }, e.prototype.disconnectCallback = function () {
                this.connectCallback && (this.connectCallback(-1, this.server, void 0), this.connectCallback = null);
                var e = this.server;
                this.disconnectServer(), this.onDisconnect(e)
            }, e.prototype.updateToken = function () {
                var e = this;
                this.logger.info("zs.ut.0 call");
                var t = {
                    token: this.token,
                    tokenType: this.tokenType,
                    roomid: this.stateCenter.roomid,
                    anchorname: this.stateCenter.anchor_info.anchor_id,
                    sdkversion: s.PROTO_VERSION,
                    osinfo: navigator.appVersion
                };
                if (0 != Object.keys(this.sessionInfos).length) {
                    var r = [];
                    for (var i in this.sessionInfos) {
                        var n = parseInt(i);
                        r.push({session_id: n, session_token: this.sessionInfos[n].token})
                    }
                    t.sessions = r
                }
                this.sendMessageWithCallback("LoginReq", o.getSeq(), 0, t, (function (t, r, i) {
                    if (0 == i.result) {
                        e.token = i.token, e.tokenType = i.tokenType;
                        var s = {report: i.report, report_interval: i.report_interval_ms};
                        i.negoInterval && (e.negoInterval = i.negoInterval), i.negoTryCount && (e.negoTryCount = i.negoTryCount), i.negoTryMaxCount && (e.negoTryMaxCount = i.negoTryMaxCount), null != e.connectCallback && (e.connectCallback(0, e.server, s), e.connectCallback = null)
                    } else {
                        var o = {error: i.strError};
                        null != e.connectCallback && (e.connectCallback(i.result, e.server, o), e.connectCallback = null)
                    }
                }), (function () {
                    null != e.connectCallback && (e.connectCallback(-1, e.server, void 0), e.connectCallback = null)
                }))
            }, e.prototype.sendMessageWithCallback = function (e, t, r, i, o, n) {
                if (this.logger.debug("zs.smwc.0 call " + e), !this.websocket || 1 !== this.websocket.readyState) return this.logger.error("zs.smwc.0 connect not establish"), void (n && n(s.SEND_MSG_TIMEOUT, t));
                var a = {header: this.getHeader(e, t, r), body: i};
                null == o && (o = null), null == n && (n = null);
                var c = {seq: t, deleted: !1, cmd: e, time: Date.parse(new Date + ""), success: o, error: n},
                    d = this.sendDataList.push(c);
                this.sendDataMap[c.seq] = d;
                var l = JSON.stringify(a);
                this.websocket.send(l), this.logger.debug("zs.smwc.0 success")
            }, e.prototype.getHeader = function (e, t, r) {
                return this.globalHeader = {
                    version: "1.0.1",
                    cmd: e,
                    appid: this.appid + "",
                    seq: t,
                    user_id: this.userid,
                    session_id: r
                }, this.globalHeader
            }, e.prototype.connectServer = function (e, t, r) {
                var i = this;
                if (this.token = e, this.server = t, this.state = s.ENUM_CONNECT_STATE.connecting, this.connectCallback = r, this.websocket && 1 === this.websocket.readyState) this.resetConnectTimer(), this.state = s.ENUM_CONNECT_STATE.connected; else {
                    this.logger.info("zs.cs.0 need new websocket");
                    try {
                        this.websocket && (this.logger.warn("zs.cs.0 close error websocket"), this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null), this.websocket = new WebSocket(this.server), this.websocket.onopen = function () {
                            i.resetConnectTimer(), i.logger.info("zs.cs.0 websocket open call"), i.bindWebSocketHandle(), i.updateToken(), i.state = s.ENUM_CONNECT_STATE.connected
                        }, this.websocket.onclose = function (e) {
                            i.logger.info("zs.cs.0 websocket close call  " + JSON.stringify(e))
                        }, this.websocket.onerror = function (e) {
                            i.logger.info("zs.cs.0 websocket onerror call  " + JSON.stringify(e))
                        }
                    } catch (e) {
                        this.logger.error("zs.cs.0 websocket error " + e)
                    }
                }
                this.tryConnectTimer = setTimeout((function () {
                    i.startConnectTimer(r)
                }), this.tryConnectInterval)
            }, e.prototype.startConnectTimer = function (e) {
                if (this.logger.info("zs.sct.0 call"), this.tryConnectCount >= s.MAX_TRY_CONNECT_COUNT) return this.logger.info("zs.sct.0 beyond " + this.server + "max limit"), void this.disconnectCallback();
                this.websocket && 1 === this.websocket.readyState ? this.resetConnectTimer() : (this.tryConnectCount += 1, this.connectServer(this.token, this.server, e))
            }, e.prototype.disconnectServer = function () {
                this.logger.debug("zs.ds.0 call"), this.connectCallback = null, this.resetCheckMessage(), this.resetConnectTimer(), this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null), this.token = "", this.sessionInfos = {}, this.tokenType = 0, this.tryHeartbeatCount = 0, this.tryConnectCount = 0, this.state = s.ENUM_CONNECT_STATE.disconnect
            }, e.prototype.isServerConnected = function () {
                return !(!this.websocket || 1 !== this.websocket.readyState)
            }, e.prototype.createSession = function (e, t, r, i, o, n, a) {
                void 0 === o && (o = ""), this.logger.debug("zs.cs.1 call: ", i);
                var c = "";
                s.PROTO_VERSION.split(".").forEach((function (e, t) {
                    return 1 == e.length && 1 == t ? c += "0" + e : c += e
                }));
                var d = {
                    type: t,
                    stream_id: i,
                    platform: this.platform,
                    browser: this.browser.name,
                    version: this.browser.version,
                    app_id: this.appid,
                    negotiate_mode: r,
                    strAuthParam: o,
                    sdk_version: 1 * c
                };
                this.sendMessageWithCallback("CreateSessionReq", e, 0, d, n, a)
            }, e.prototype.removeSession = function (e) {
                this.logger.info("zs.rs.0 call"), this.sessionInfos[e] && delete this.sessionInfos[e]
            }, e.prototype.sendCloseSession = function (e, t, r, i, s) {
                this.logger.debug("zs.scs.0 call: ", t);
                var o = {reason: r};
                this.removeSession(t), this.sendMessageWithCallback("CloseSessionReq", e, t, o, i, s)
            }, e.prototype.sendMessage = function (e, t, r, i) {
                if (this.logger.debug("zs.sm.0 call " + e), this.websocket && 1 === this.websocket.readyState) {
                    var s = {header: this.getHeader(e, t, r), body: i}, o = JSON.stringify(s);
                    this.websocket.send(o), this.logger.debug("zs.sm.0 success")
                } else this.logger.error("zs.sm.0 connect not establish")
            }, e.prototype.handleRespondData = function (e, t) {
                this.logger.debug("zs.hrd.0 call");
                var r = this.sendDataMap[t.header.seq];
                if (null != r) {
                    var i = r._data;
                    i.cmd !== e ? this.logger.error("sz.hrd.0 command is not match") : i.success && i.success(t.header.seq, t.header.session_id, t.body), delete this.sendDataMap[t.header.seq], this.sendDataList.remove(r)
                } else {
                    if ("CloseSessionRsp" == t.header.cmd) return;
                    this.logger.error("zs.hrd.0 cannot find data " + e)
                }
            }, e.prototype.addSession = function (e, t) {
                this.logger.info("zs.as.0 call"), this.sessionInfos[e] = {token: t}
            }, e.prototype.handlePushData = function (e) {
                this.logger.debug("zs.hpd.0 call " + e.header.cmd + " session " + e.header.session_id);
                var t = this.pushCallback[e.header.cmd + e.header.session_id];
                t ? t.callback && t.callback(e.header.seq, e.header.session_id, e.body) : this.logger.info("zs.hpd.0 no callbackData " + e.header.cmd + " session: " + e.header.session_id)
            }, e.prototype.handlePushResetSessionData = function (e) {
                this.logger.debug("zs.hprsd.0 call ");
                var t = [];
                if (0 == e.body.cResetType) t = Object.keys(this.sessionInfos); else if (1 == e.body.cResetType) for (var r = 0; r < e.body.session_ids.length; r++) t.push(e.body.session_ids[r]);
                if (this.sendResetSessionAck(e.header.seq, 0, 0), 0 != t.length) for (var i = 0; i < t.length; i++) {
                    var s = this.pushCallback[e.header.cmd + t[i]];
                    null == s ? this.logger.info("zs.hprsd.0 no callbackData " + t[i]) : s.callback && s.callback(e.header.seq, t[i], e.body)
                } else this.logger.info("zs.hprsd.0 no session to callback")
            }, e.prototype.sendMediaDesc = function (e, t, r, i, s, o) {
                this.logger.debug("zs.smd.0 call: ", t);
                var n = {type: r, sdp: i.sdp};
                null != i.width && (n.width = i.width), null != i.height && (n.height = i.height), null != i.frameRate && (n.framerate = i.frameRate), null != i.video_min_kpbs && (n.video_min_kpbs = i.video_min_kpbs), null != i.video_max_kpbs && (n.video_max_kpbs = i.video_max_kpbs), null != i.audio_kpbs && (n.audio_kpbs = i.audio_kpbs), null != i.keyframe_intv && (n.keyframe_intv = i.keyframe_intv), this.sendMessageWithCallback("MediaDescReq", e, t, n, s, o)
            }, e.prototype.sendCandidateInfo = function (e, t, r, i, s) {
                this.logger.debug("zs.sci.0 call: ", t);
                for (var o = [], n = 0; n < r.length; n++) {
                    var a = {candidate: r[n].candidate, sdpMid: r[n].sdpMid, sdpMLineIndex: r[n].sdpMLineIndex};
                    o.push(a)
                }
                var c = {infos: o};
                this.sendMessageWithCallback("CandidateInfoReq", e, t, c, i, s)
            }, e.prototype.sendMediaDescAck = function (e, t, r) {
                this.logger.debug("zs.smda.0 call: ", t);
                var i = {result: r};
                this.sendMessage("MediaDescAck", e, t, i)
            }, e.prototype.sendCandidateInfoAck = function (e, t, r) {
                this.logger.debug("zs.scia.0 call: ", t);
                var i = {result: r};
                this.sendMessage("CandidateInfoAck", e, t, i)
            }, e.prototype.sendCloseSessionAck = function (e, t, r) {
                this.logger.debug("zs.scsa.0 call: ", t);
                var i = {result: r};
                this.sendMessage("CloseSessionAck", e, t, i)
            }, e.prototype.sendResetSessionAck = function (e, t, r) {
                this.logger.debug("zs.ssra.0 call: ", t);
                var i = {result: r};
                this.sendMessage("SessionResetAck", e, t, i)
            }, e.prototype.registerPushCallback = function (e, t, r) {
                r && "function" == typeof r && (this.logger.debug("zs.rpc.0 setcallback"), this.pushCallback[e + t] = {callback: r})
            }, e.prototype.unregisterPushCallback = function (e, t) {
                delete this.pushCallback[e + t]
            }, e.prototype.checkMessageTimeout = function () {
                for (var e = this.sendDataList.getFirst(), t = Date.parse(new Date + ""), r = 0, i = 0, o = 0; !(null == e || e._data.time + this.sendDataTimeout > t || (delete this.sendDataMap[e._data.seq], this.sendDataList.remove(e), ++i, null == e._data.error || this.sendDataDropTimeout > 0 && e._data.time + this.sendDataDropTimeout < t ? ++o : e._data.error && e._data.error(s.SEND_MSG_TIMEOUT, e._data.seq), ++r >= this.sendDataCheckOnceCount));) e = this.sendDataList.getFirst();
                0 == i && 0 == o || this.logger.debug("zs.cmt.0 call success, state: timeout=", i, " drop=", o)
            }, e.prototype.sendHeartbeat = function () {
                var e = this;
                if (this.logger.debug("zs.shb.0 call tryHeartbeatCount:" + this.tryHeartbeatCount), 0 != Object.keys(this.sessionInfos).length) {
                    if (++this.tryHeartbeatCount > s.MAX_TRY_HEARTBEAT_COUNT) return this.logger.error("zs.shb.0 heartbeat try limit"), void this.disconnectCallback();
                    var t = [];
                    for (var r in this.sessionInfos) t.push(parseInt(r));
                    var i = {session_ids: t};
                    this.sendMessageWithCallback("ClientHBReq", o.getSeq(), 0, i, (function (t, r, i) {
                        e.heartbeatInterval != i.hb_interval && (e.heartbeatInterval = i.hb_interval, e.onUpdateHeartBeartInterval(i.hb_interval)), e.tryHeartbeatCount = 0
                    }), (function (e, t) {
                    }))
                } else this.logger.info("zs.shb.0 no need to heartbeat")
            }, e.prototype.QualityReport = function (e, t, r, s, o) {
                this.logger.debug("zs.qr.0 call");
                var n = {streams: [i(i({}, r), {aid: t})]};
                this.sendMessageWithCallback("QualityReportReq", e, t, n, s, o)
            }, e.prototype.sendStreamStatus = function (e, t, r, i) {
                this.logger.debug("zs.sss.0 call");
                var s = {mic_status: i, camera_status: r};
                this.logger.info("zs.sss.0 stream status " + JSON.stringify(s)), this.sendMessage("StreamStatusNotify", e, t, s)
            }, e.prototype.sendBroadcasterStatus = function (e, t, r) {
                this.logger.debug("zs.sss.0 call");
                var i = {status: r};
                this.sendMessage("BroadcasterStatusNotify", e, t, i)
            }, e
        }();
        t.ZegoSignal = n
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(2), o = r(1), n = r(6), a = r(4), c = function () {
            function e(e, t, r, o, n) {
                this.state = i.ENUM_PLAY_STATE.stop, this.candidateInfo = [], this.waitICETimer = null, this.waitingICETimeInterval = 5e3, this.waitingOfferTimer = null, this.waitingOfferTimeInterval = 5e3, this.waitingServerTimer = null, this.waitingServerTimerInterval = 3e3, this.qualityTimer = null, this.broadcasterStatus = i.ENUM_BROADCASTER_STATUS.stop, this.playQualityList = [], this.maxQualityListCount = 10, this.lastPlayStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    time: 0,
                    audioTime: 0,
                    videoTime: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    framesDecoded: 0,
                    framesReceived: 0,
                    framesDropped: 0,
                    audioBitrate: 0
                }, this.reportSeq = s.getSeq(), this.retrySeq = 0, this.videoSizeCallback = !1, this.qualityUpload = !1, this.qualityUploadInterval = 3e4, this.qualityUploadLastTime = 0, this.maxRetryCount = 3, this.currentRetryCount = 0, this.retryState = i.ENUM_RETRY_STATE.didNotStart, this.remoteStream = null, this.playStream = null, this.closeSessionSignal = !1, this.stateNego = i.ENUM_PLAY_STATE_NEGO.stop, this.negoTimer = null, this.negoInterval = 25e3, this.negoTryCount = 1, this.negoTryMaxCount = 2, this.playEvent = !1, this.nextSignalTryCount = 1, this.waittingConnectedTimer = null, this.waittingConnectedInerval = 15e3, this.tryingNexitSignal = !1, this.gotStreamStatus = !1, this.logger = e, this.signal = t, this.dataReport = r, this.qualityTimeInterval = o, this.streamCenter = n
            }

            return e.prototype.startPlay = function (e, t, r) {
                var n = this;
                this.logger.info("zp.sp.1 called ", e), this.playEvent = !1, this.signal && this.signal.negoInterval && (this.negoInterval = this.signal.negoInterval), this.signal && this.signal.negoTryCount && (this.negoTryCount = this.signal.negoTryCount), this.signal && this.signal.negoTryMaxCount && (this.negoTryMaxCount = this.signal.negoTryMaxCount), e ? (this.streamId = e, this.getRomoteStreamSuc = t, this.playOption = r || {}, r && r.videoCodec && (this.playOption.videoCodec = r.videoCodec), this.sessionSeq = s.getSeq(), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "CreateSession"), this.signal.createSession(this.sessionSeq, 1, 0, e, r && r.streamParams, (function (e, t, r) {
                    n.dataReport.eventEndWithMsg(0 == n.retrySeq ? n.reportSeq : n.retrySeq, "CreateSession", {sessionId: r.session_id}), n.logger.info("zp.sp.1 sessionId:" + r.session_id), n.sessionSeq == e ? 0 !== r.result ? (n.logger.error("zp.sp.1 create error"), n.playStateUpdateError(o.playErrorList.CREATE_SESSION_ERROR)) : (n.sessionId = r.session_id, n.onCreatePlaySessionSuccess(r)) : n.logger.error("zp.sp.1 seq is not match.")
                }), (function (e, t) {
                    n.dataReport.eventEndWithMsg(0 == n.retrySeq ? n.reportSeq : n.retrySeq, "CreateSession", {error: e}), n.playStateUpdateError(o.playErrorList.SEND_SESSION_TIMEOUT)
                })), this.state = i.ENUM_PLAY_STATE.waitingSessionRsp, this.logger.debug("zp.sp.1 called success"), this.stateNego = i.ENUM_PLAY_STATE_NEGO.start, this.negoTimer = setTimeout((function () {
                    n.stateNego !== i.ENUM_PLAY_STATE_NEGO.iceConnected && n.negoTryCount < n.negoTryMaxCount ? (n.signal.sendCloseSession(s.getSeq(), n.sessionId, 1), n.resetPlay(), n.startPlay(e, t, r), ++n.negoTryCount) : n.stateNego !== i.ENUM_PLAY_STATE_NEGO.iceConnected && n.negoTryCount === n.negoTryMaxCount && (n.logger.error("zp.sp.1 waiting timeout"), n.playStateUpdateError(o.playErrorList.SERVER_NEGO_TIMEOUT))
                }), this.negoInterval)) : this.logger.warn("zp.sp.1 streamId is null")
            }, e.prototype.onCreatePlaySessionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.ops.1 success");
                var r = [];
                e.turn_server && r.push(e.turn_server), e.stun_server && r.push(e.stun_server);
                var i = {
                    iceTransportPolicy: "relay",
                    iceServers: [{urls: r, username: e.turn_username, credential: e.turn_auth_key}]
                };
                this.logger.info("zp.ops.1 username: " + e.turn_username), this.logger.info("zp.ops.1 credential: " + e.turn_auth_key), this.peerConnection = new RTCPeerConnection(i), this.peerConnection.onicecandidate = function (e) {
                    t.onIceCandidate(e)
                }, this.peerConnection.onsignalingstatechange = function (e) {
                    t.onConnectionStateChange(e)
                }, this.peerConnection.oniceconnectionstatechange = function (e) {
                    t.onIceConnectionStateChange(e)
                }, this.peerConnection.ontrack = function (e) {
                    t.onGotRemoteStream(e.streams[0])
                };
                var s = {offerToReceiveAudio: 1, offerToReceiveVideo: 1};
                this.playOption && !1 === this.playOption.video && (s.offerToReceiveVideo = 0), this.playOption && !1 === this.playOption.audio && (s.offerToReceiveAudio = 0), this.logger.info("zp.ops.1 createOffer: " + JSON.stringify(s)), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "CreateOffer"), this.peerConnection.createOffer(s).then((function (e) {
                    t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "CreateOffer"), t.onCreateOfferSuccess(e)
                }), (function (e) {
                    t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "CreateOffer", {error: e.toString()}), t.logger.error("zp.ops.0 create offer error " + e.toString()), t.playStateUpdateError(o.playErrorList.CREATE_OFFER_ERROR)
                })), this.signal.registerPushCallback("MediaDescPush", this.sessionId, (function (e, r, i) {
                    t.onRecvMediaDesc(e, r, i)
                })), this.signal.registerPushCallback("CandidateInfoPush", this.sessionId, (function (e, r, i) {
                    t.onRecvCandidateInfo(e, r, i)
                })), this.signal.registerPushCallback("CloseSessionPush", this.sessionId, (function (e, r, i) {
                    t.onRecvCloseSession(e, r, i)
                })), this.signal.registerPushCallback("SessionResetPush", this.sessionId, (function (e, r, i) {
                    t.onRecvResetSession(e, r, i)
                })), this.signal.registerPushCallback("StreamStatusNotifyPush", this.sessionId, (function (e, r, i) {
                    t.gotStreamStatus = !0, t.streamStatus = i, t.playStream && t.onRecvStreamStatus(i)
                })), this.signal.registerPushCallback("PlayEventPush", this.sessionId, (function (e, r, i) {
                    t.onRecvPlayEvent(e, r, i)
                })), this.logger.debug("zp.ops.1 call success")
            }, e.prototype.onCreateOfferSuccess = function (e) {
                var t = this;
                this.logger.info("zp.oco.1 localSdp1 " + e.sdp.substr(0, e.sdp.length / 2)), this.logger.info("zp.oco.1 localSdp2 " + e.sdp.substr(e.sdp.length / 2)), e.sdp = e.sdp.replace(/sendrecv/g, "recvonly"), this.playOption.videoCodec && (e.sdp = n.SdpUtil.getSDPByVideDecodeType(e.sdp, this.playOption.videoCodec)), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SetLocalDescription"), this.peerConnection.setLocalDescription(e).then((function () {
                    t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SetLocalDescription"), t.onSetLocalDescriptionSuccess(e)
                }), (function (e) {
                    t.logger.error("zp.oca.1 set error " + e.toString()), t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SetLocalDescription", {error: e.toString()}), t.playStateUpdateError(o.playErrorList.SET_LOCAL_DESC_ERROR)
                }))
            }, e.prototype.onSetLocalDescriptionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.osd.1 success");
                var r = {sdp: e.sdp};
                this.answerSeq = s.getSeq(), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SendMediaDesc"), this.signal.sendMediaDesc(this.answerSeq, this.sessionId, 0, r, (function (e, r, s) {
                    t.logger.info("zp.osd.1 sendMediaDesc resp"), t.answerSeq == e && t.sessionId == r ? (t.logger.info("zp.osd.1 send success stateNego:waiterAnswer"), t.stateNego = i.ENUM_PLAY_STATE_NEGO.waiterAnswer, t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendMediaDesc"), t.waitingOfferTimer = setTimeout((function () {
                        t.state == i.ENUM_PLAY_STATE.waitingOffserRsp && (t.logger.error("zp.osd.1 waiting timeout"), t.playStateUpdateError(o.playErrorList.SERVER_CANDIDATE_TIMEOUT))
                    }), t.waitingOfferTimeInterval), t.state = i.ENUM_PLAY_STATE.waitingServerAnswer) : t.logger.error("zp.osd.1 seq or sessionId is not equal " + t.answerSeq + " " + e, 0 + t.sessionId + " " + r)
                }), (function (e, r) {
                    t.logger.error("zp.osd.1 failed to send " + e), t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendMediaDesc", {error: e}), t.playStateUpdateError(o.playErrorList.SEND_MEDIA_DESC_TIMEOUT)
                })), this.state = i.ENUM_PLAY_STATE.waitingOffserRsp
            }, e.prototype.onRecvMediaDesc = function (e, t, r) {
                var s = this;
                if (this.logger.info("zp.orm.1 received ", r), this.stateNego = i.ENUM_PLAY_STATE_NEGO.waitingCandidate, this.logger.info("zp.orm.1 received stateNego:waitingCandidate"), this.state === i.ENUM_PLAY_STATE.waitingServerAnswer) {
                    null != this.waitingOfferTimer && (clearTimeout(this.waitingOfferTimer), this.waitingOfferTimer = null), this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "RecvMediaDesc"), this.signal.sendMediaDescAck(e, this.sessionId, 0);
                    var n = {
                        type: "answer", sdp: r.sdp, toJSON: function () {
                        }
                    };
                    this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SetRemoteDescription"), this.logger.info("zp.orm.1 remoteSdp ", n.sdp), this.peerConnection.setRemoteDescription(new RTCSessionDescription(n)).then((function () {
                        s.dataReport.eventEnd(0 == s.retrySeq ? s.reportSeq : s.retrySeq, "SetRemoteDescription"), s.logger.info("zp.orm.1 set success")
                    }), (function (e) {
                        s.logger.error("zp.orm.1 set remote error " + e.toString()), s.dataReport.eventEndWithMsg(0 == s.retrySeq ? s.reportSeq : s.retrySeq, "SetRemoteDescription", {error: e.toString()}), s.playStateUpdateError(o.playErrorList.SET_REMOTE_DESC_ERROR)
                    })), this.waitICETimer = setTimeout((function () {
                        s.state == i.ENUM_PLAY_STATE.waitingServerICE && (s.logger.error("zp.orm.1 waiting server timeout"), s.playStateUpdateError(o.playErrorList.SERVER_CANDIDATE_TIMEOUT))
                    }), this.waitingICETimeInterval), this.state = i.ENUM_PLAY_STATE.waitingServerICE, this.logger.debug("zp.orm.1 call success")
                } else this.logger.error("zp.orm.1 current state " + this.state + " not allowed")
            }, e.prototype.onRecvCandidateInfo = function (e, t, r) {
                var s = this;
                if (this.logger.info("zp.orci.1 received "), this.state == i.ENUM_PLAY_STATE.waitingServerICE) {
                    null != this.waitICETimer && (clearTimeout(this.waitICETimer), this.waitICETimer = null), this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "RecvIceCandidate"), this.signal.sendCandidateInfoAck(e, this.sessionId, 0), this.sendCandidateInfo(this.candidateInfo), this.candidateInfo = [];
                    for (var n = 0; n < r.infos.length; n++) {
                        var a = {
                            sdpMid: r.infos[n].sdpMid,
                            sdpMLineIndex: r.infos[n].sdpMLineIndex,
                            candidate: r.infos[n].candidate
                        };
                        this.logger.debug("zp.orci.1 candidate " + a.candidate), this.peerConnection.addIceCandidate(new RTCIceCandidate(a)).then((function () {
                            s.logger.debug("zp.orci.1 add success")
                        }), (function (e) {
                            s.logger.error("zp.orci.1 add error " + e.toString()), s.playStateUpdateError(o.playErrorList.SERVER_CANDIDATE_ERROR)
                        }))
                    }
                    this.state = i.ENUM_PLAY_STATE.connecting, this.logger.debug("zp.orci.1 call success")
                } else this.logger.warn("zp.orci.1 current state " + this.state + " not allowed")
            }, e.prototype.onRecvPlayEvent = function (e, t, r) {
                if (this.logger.info("zp.orpe.1 received"), !0 === this.playEvent && 0 == r.event) {
                    this.logger.info("zp.orpe.1 retry: " + this.streamId);
                    var i = this.streamId, o = this.playOption;
                    this.signal.sendCloseSession(s.getSeq(), this.sessionId, 1), this.resetPlay(), this.startPlay(i, this.getRomoteStreamSuc, o)
                } else this.playEvent = !0
            }, e.prototype.onIceCandidate = function (e) {
                if (this.logger.info("zp.oic.1 called"), null != e.candidate) if (this.logger.debug("zp.oic.1 candidate " + e.candidate.candidate), this.state < i.ENUM_PLAY_STATE.connecting || this.state == i.ENUM_PLAY_STATE.stop) this.logger.debug("zp.oic.1 cached"), this.candidateInfo.push({
                    candidate: e.candidate.candidate,
                    sdpMid: e.candidate.sdpMid,
                    sdpMLineIndex: e.candidate.sdpMLineIndex
                }); else {
                    this.logger.debug("zp.oic.1 send");
                    var t = {
                        candidate: e.candidate.candidate,
                        sdpMid: e.candidate.sdpMid,
                        sdpMLineIndex: e.candidate.sdpMLineIndex
                    };
                    this.sendCandidateInfo([t])
                }
            }, e.prototype.onConnectionStateChange = function (e) {
                this.logger.info("zp.oisc.1 called " + e.target.signalingState)
            }, e.prototype.onIceConnectionStateChange = function (e) {
                var t = this;
                if (this.state != i.ENUM_PLAY_STATE.stop && null != this.peerConnection) if (this.logger.info("zp.oisc.1  stateChanged " + this.peerConnection.iceConnectionState), "connected" === this.peerConnection.iceConnectionState) {
                    for (var r in this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceConnected"), this.state != i.ENUM_PLAY_STATE.playing && this.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.start, this.streamId, {
                        code: 0,
                        msg: ""
                    }), this.state = i.ENUM_PLAY_STATE.playing, this.tryingNexitSignal = !1, this.retrySeq = 0, this.retryState != i.ENUM_RETRY_STATE.didNotStart && (this.retryState = i.ENUM_RETRY_STATE.finished, this.currentRetryCount = 0), this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "PlayState"), this.streamCenter.publisherList) {
                        if (this.streamCenter.publisherList[r].publisher.state == i.ENUM_PUBLISH_STATE.publishing && this.broadcasterStatus == i.ENUM_BROADCASTER_STATUS.stop) {
                            this.signal && this.signal.sendBroadcasterStatus(s.getSeq(), this.sessionId, 1), this.broadcasterStatus = i.ENUM_BROADCASTER_STATUS.start;
                            break
                        }
                    }
                    this.setPlayQualityTimer(), this.stateNego = i.ENUM_PLAY_STATE_NEGO.iceConnected, this.logger.info("zp.oisc.1  stateNego:iceConnected"), this.negoTryCount = 1, this.nextSignalTryCount = 1, this.waittingConnectedTimer && clearTimeout(this.waittingConnectedTimer), this.waittingConnectedTimer = null, this.negoTimer && clearTimeout(this.negoTimer)
                } else "closed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceClosed"), this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState)) : "failed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceFailed"), this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState)) : "disconnected" === this.peerConnection.iceConnectionState && (this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "IceDisconnected"), this.waittingConnectedTimer = setTimeout((function () {
                    !t.tryingNexitSignal && t.tryNextSignal(o.playErrorList.MEDIA_CONNECTION_DISCONNECTED)
                }), this.waittingConnectedInerval))
            }, e.prototype.checkPlayConnectionFailedState = function (e) {
                var t = null;
                "failed" == e ? t = o.playErrorList.MEDIA_CONNECTION_FAILED : "closed" == e && (t = o.playErrorList.MEDIA_CONNECTION_CLOSED), null != t && (this.state != i.ENUM_PLAY_STATE.playing && this.retryState == i.ENUM_PLAY_STATE.didNotStart ? (this.logger.info("zp.oics.1  state " + this.state + " retryState " + this.retryState + " connectionState " + e), this.playStateUpdateError(t)) : this.shouldRetryPlay() ? (this.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.retry, this.streamId, o.playErrorList.MEDIA_CONNECTION_FAILED), this.startRetryPlay()) : this.playStateUpdateError(t))
            }, e.prototype.shouldRetryPlay = function () {
                return this.retryState == i.ENUM_RETRY_STATE.didNotStart && this.state != i.ENUM_PLAY_STATE.playing ? (this.logger.info("zp.srp.1.0 connection didn't success"), !1) : this.retryState == i.ENUM_RETRY_STATE.retrying ? (this.logger.info("zp.srp.0.0 already retrying"), !1) : this.currentRetryCount > this.maxRetryCount ? (this.logger.info("zp.srp.1.0 beyond max"), !1) : (this.logger.debug("zp.srp.1.0 call success"), !0)
            }, e.prototype.startRetryPlay = function () {
                this.logger.debug("zp.srp.0 call");
                var e = this.streamId;
                this.resetPlay(), this.tryStartPlay(e)
            }, e.prototype.clearTryPlayTimer = function () {
                null != this.waitingServerTimer && (clearTimeout(this.waitingServerTimer), this.waitingServerTimer = null)
            }, e.prototype.tryStartPlay = function (e) {
                var t = this;
                if (this.logger.debug("zp.tsp.1 call"), this.clearTryPlayTimer(), this.streamId = e, this.currentRetryCount > this.maxRetryCount) return this.logger.error("zp.tsp.1 beyond max limit"), void this.playStateUpdateError(o.playErrorList.WEBSOCKET_ERROR);
                this.retryState = i.ENUM_RETRY_STATE.retrying, this.currentRetryCount += 1, this.signal.isServerConnected() ? (this.logger.debug("zp.tsp.1 signal connected"), this.startPlay(e, this.getRomoteStreamSuc, this.playOption)) : (this.logger.debug("zp.tsp.1 signal server not connected"), this.waitingServerTimer = setTimeout((function () {
                    t.tryStartPlay(e)
                }), this.waitingServerTimerInterval))
            }, e.prototype.clearPlayQualityTimer = function () {
                null != this.qualityTimer && (clearInterval(this.qualityTimer), this.qualityTimer = null), this.lastPlayStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    time: 0,
                    audioTime: 0,
                    videoTime: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    framesDecoded: 0,
                    framesDropped: 0,
                    framesReceived: 0,
                    audioBitrate: 0
                }
            }, e.prototype.resetPlay = function () {
                this.logger.info("zp.rp.1 call"), this.streamId = null, this.state = i.ENUM_PLAY_STATE.stop, this.playEvent = !1, null != this.peerConnection && (this.peerConnection.close(), this.peerConnection = null), null != this.waitingOfferTimer && (clearTimeout(this.waitingOfferTimer), this.waitingOfferTimer = null), null != this.waitICETimer && (clearTimeout(this.waitICETimer), this.waitICETimer = null), null != this.negoTimer && (clearTimeout(this.negoTimer), this.negoTimer = null), null != this.waittingConnectedTimer && (clearTimeout(this.waittingConnectedTimer), this.waittingConnectedTimer = null), this.clearPlayQualityTimer(), this.signal && (this.signal.unregisterPushCallback("MediaDescPush", this.sessionId), this.signal.unregisterPushCallback("CandidateInfoPush", this.sessionId), this.signal.unregisterPushCallback("CloseSessionPush", this.sessionId)), this.sessionSeq = 0, this.answerSeq = 0, this.videoSizeCallback = !1, this.currentRetryCount = 0, this.retryState = i.ENUM_RETRY_STATE.didNotStart, this.clearTryPlayTimer()
            }, e.prototype.setPlayQualityTimer = function () {
                var e = this;
                null == this.qualityTimer && (this.logger.debug("zp.spq.1 startTimer"), this.clearPlayQualityTimer(), this.qualityTimer = setInterval((function () {
                    e.peerConnection && e.peerConnection.getStats(null).then((function (t) {
                        e.getPlayStats(t)
                    }), (function (t) {
                        e.logger.info("zp.spq.1 getStats error " + t.toString())
                    }))
                }), this.qualityTimeInterval), this.lastPlayStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    time: 0,
                    audioTime: 0,
                    videoTime: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    framesDecoded: 0,
                    framesReceived: 0,
                    framesDropped: 0,
                    audioBitrate: 0
                })
            }, e.prototype.getPlayStats = function (e) {
                var t = this;
                if (null != e) {
                    var r = {
                        audioFractionLost: 0,
                        audioPacketsLost: 0,
                        audioPacketsLostRate: 0,
                        audioBitrate: 0,
                        audioLevel: 0,
                        audioSendLevel: 0,
                        audioSamplingRate: 0,
                        audioCodec: "opus",
                        audioQuality: 0,
                        videoQuality: 0,
                        videoPacketsLostRate: 0,
                        videoBitrate: 0,
                        videoFPS: 0,
                        playData: 0,
                        nackCount: 0,
                        pliCount: 0,
                        audioJitter: 0,
                        videoFractionLost: 0,
                        videoFramesDecoded: 0,
                        frameHeight: 0,
                        frameWidth: 0,
                        videoTransferFPS: 0,
                        videoFramesDropped: 0,
                        totalRoundTripTime: 0,
                        currentRoundTripTime: 0
                    }, i = this.lastPlayStats.time, s = 0;
                    e.forEach((function (e) {
                        ("inbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesReceived) && ("audio" == e.mediaType || e.id.indexOf("AudioStream") >= 0) ? (0 != i && (r.audioBitrate = 8 * (e.bytesReceived - t.lastPlayStats.audioBytesReceived) / (e.timestamp - i)), r.audioBitrate < 0 && (r.audioBitrate = 0), r.audioJitter = e.jitter, r.audioPacketsLost = e.packetsLost, r.audioFractionLost = e.fractionLost, r.audioPacketsLostRate = (e.packetsLost - t.lastPlayStats.audioPacketsLost) / (e.timestamp - t.lastPlayStats.audioTime), t.lastPlayStats.audioBytesReceived = e.bytesReceived, t.lastPlayStats.audioPacketsLost = e.packetsLost, t.lastPlayStats.audioTime = e.timestamp, t.lastPlayStats.time = e.timestamp, t.lastPlayStats.audioBitrate = r.audioBitrate) : ("inbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesReceived) && ("video" == e.mediaType || e.id.indexOf("VideoStream") >= 0) ? (0 != i && (r.videoBitrate = 8 * (e.bytesReceived - t.lastPlayStats.videoBytesReceived) / (e.timestamp - i), r.videoFPS = 1e3 * (e.framesDecoded - t.lastPlayStats.framesDecoded) / (e.timestamp - i)), r.videoBitrate < 0 && (r.videoBitrate = 0), r.videoFPS < 0 && (r.videoFPS = 0), r.nackCount = e.nackCount, r.pliCount = e.pliCount, r.videoFractionLost = e.fractionLost, r.videoFramesDecoded = e.framesDecoded, r.videoPacketsLostRate = (e.packetsLost - t.lastPlayStats.videoPacketsLost) / (e.timestamp - t.lastPlayStats.videoTime), t.lastPlayStats.videoBytesReceived = e.bytesReceived, t.lastPlayStats.framesDecoded = e.framesDecoded, t.lastPlayStats.videoPacketsLost = e.packetsLost, t.lastPlayStats.videoTime = e.timestamp, t.lastPlayStats.time = e.timestamp) : "track" == e.type && ("video" == e.kind || e.id.indexOf("video") >= 0) || e.frameWidth ? (r.frameHeight = e.frameHeight, r.frameWidth = e.frameWidth, 0 != i && (r.videoTransferFPS = 1e3 * (e.framesReceived - t.lastPlayStats.framesReceived) / (e.timestamp - i), r.videoFramesDropped = e.framesDropped - t.lastPlayStats.framesDropped), r.videoTransferFPS < 0 && (r.videoTransferFPS = 0), r.videoFramesDropped < 0 && (r.videoFramesDropped = 0), t.lastPlayStats.framesReceived = e.framesReceived, t.lastPlayStats.framesDropped = e.framesDropped) : "track" == e.type && ("audio" == e.kind || e.id.indexOf("audio") >= 0) ? (r.audioLevel = e.audioLevel, r.audioSendLevel = e.totalAudioEnergy, r.audioSamplingRate = e.totalSamplesDuration) : "candidate-pair" == e.type && (null != e.totalRoundTripTime && (r.totalRoundTripTime = e.totalRoundTripTime), null != e.currentRoundTripTime && (r.currentRoundTripTime = e.currentRoundTripTime, s = 1e3 * r.currentRoundTripTime))
                    })), r.audioQuality = this.getNetQuality(s, r.audioFractionLost), r.videoQuality = this.getNetQuality(s, r.videoFractionLost), this.uploadPlayQuality(r);
                    var o = {
                        video: {
                            videoBitrate: r.videoBitrate,
                            videoFPS: r.videoFPS,
                            videoTransferFPS: r.videoTransferFPS,
                            videoFramesDecoded: r.videoFramesDecoded,
                            videoFramesDropped: r.videoFramesDropped,
                            videoPacketsLostRate: r.videoPacketsLostRate,
                            videoQuality: r.videoQuality,
                            frameHeight: r.frameHeight,
                            frameWidth: r.frameWidth
                        },
                        audio: {
                            audioBitrate: r.audioBitrate,
                            audioCodec: r.audioCodec,
                            audioJitter: r.audioJitter,
                            audioLevel: r.audioLevel,
                            audioPacketsLost: r.audioPacketsLost,
                            audioPacketsLostRate: r.audioPacketsLostRate,
                            audioQuality: r.audioQuality,
                            audioSamplingRate: r.audioSamplingRate,
                            audioSendLevel: r.audioSendLevel
                        },
                        nackCount: r.nackCount,
                        pliCount: r.pliCount,
                        totalRoundTripTime: r.totalRoundTripTime,
                        playData: r.playData,
                        currentRoundTripTime: r.currentRoundTripTime
                    };
                    0 != i && this.onPlayQualityUpdate(this.streamId, o)
                }
            }, e.prototype.getNetQuality = function (e, t) {
                return e && e < 600 ? t > .4 ? 2 : t > .3 ? 4 : 5 : e < 900 ? t > .4 ? 2 : t > .2 ? 3 : 4 : t > .2 ? 2 : 3
            }, e.prototype.uploadPlayQuality = function (e) {
                var t = this;
                if (this.qualityUpload) {
                    var r = Date.parse(new Date + "");
                    (0 == this.qualityUploadLastTime || r - this.qualityUploadLastTime >= this.qualityUploadInterval) && (e.stream_type = "play", e.stream_id = this.streamId, e.timeStamp = r / 1e3, this.logger.info("zp.upq.1 upload" + JSON.stringify(e)), this.signal.QualityReport(s.getSeq(), this.sessionId, e, (function (e, r, i) {
                        void 0 !== i.report && (t.qualityUpload = i.report, t.qualityUploadInterval = i.report_interval_ms)
                    }), (function (e, r) {
                        t.logger.info("zp.upq.1 upload failed " + e)
                    })), this.qualityUploadLastTime = r)
                }
            }, e.prototype.onRecvResetSession = function (e, t, r) {
                if (this.logger.info("zp.orrs.1 received "), t == this.sessionId) {
                    this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                    var i = JSON.parse(JSON.stringify(o.playErrorList.SESSION_CLOSED));
                    this.negoTimer && clearTimeout(this.negoTimer), !this.tryingNexitSignal && this.tryNextSignal(i)
                } else this.logger.info("zp.orrs.1 cannot find session")
            }, e.prototype.onRecvCloseSession = function (e, t, r) {
                this.logger.info("zp.orcs.1 reason: " + r.reason), this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                var i = JSON.parse(JSON.stringify(o.playErrorList.SESSION_CLOSED));
                i.msg += r.reason, this.negoTimer && clearTimeout(this.negoTimer);
                var n = 1 * r.reason,
                    c = r.err_info && JSON.parse(r.err_info).action ? JSON.parse(r.err_info).action : null;
                if ("number" == typeof n && [24, 28].includes(n) && this.negoTryCount < this.negoTryMaxCount || 5 == c) {
                    this.logger.info("zp.orcs.1 retry: " + this.streamId), this.retrySeq = s.getReportSeq(), this.dataReport.newReport(this.retrySeq, a.eventList.kZegoTaskRePlay), this.dataReport.addMsgInfo(this.retrySeq, {reason: i});
                    var d = this.streamId, l = this.playOption;
                    this.signal.sendCloseSession(s.getSeq(), this.sessionId, 1), this.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.retry, this.streamId, {
                        code: 0,
                        msg: ""
                    }), this.resetPlay(), this.startPlay(d, this.getRomoteStreamSuc, l), ++this.negoTryCount
                } else [4, 8, 10, 11, 12, 26, 27].includes(n) || 2 == c ? !this.tryingNexitSignal && this.tryNextSignal(i) : this.playStateUpdateError(i)
            }, e.prototype.onRecvStreamStatus = function (e) {
                this.logger.debug("zp.orss.0 call");
                var t = this.playStream;
                0 !== e.camera_status && t.getVideoTracks().forEach((function (e) {
                    e.stop(), t.removeTrack(e)
                })), 0 == e.camera_status && 0 == t.getVideoTracks().length && t.addTrack(this.remoteStream.clone().getVideoTracks()[0]), this.cameraStatus !== e.camera_status && this.onRemoteCameraStatusUpdate(this.streamId, this.getCameraMicStatus(e.camera_status)), this.micStatus !== e.mic_status && this.onRemoteMicStatusUpdate(this.streamId, this.getCameraMicStatus(e.mic_status)), this.cameraStatus = e.camera_status, this.micStatus = e.mic_status, this.logger.debug("zp.orss.0 call success")
            }, e.prototype.onGotRemoteStream = function (e) {
                var t = this;
                this.logger.info("zp.ogrs.0 called " + e), e ? (this.playStream ? (this.playStream.getTracks().forEach((function (e) {
                    return t.playStream.removeTrack(e)
                })), e.clone().getTracks().forEach((function (e) {
                    return t.playStream.addTrack(e)
                }))) : this.playStream = e.clone(), this.remoteStream = e, this.getRomoteStreamSuc(this.playStream), this.gotStreamStatus && this.onRecvStreamStatus(this.streamStatus), this.dataReport.addEvent(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "GetRemoteStream")) : this.logger.warn("zp.ogrs.0 remote stream is empty")
            }, e.prototype.sendCandidateInfo = function (e) {
                var t = this;
                this.logger.info("zp.sci.1 called"), !(e = e.filter((function (e) {
                    return !(e.candidate.indexOf("tcp") > 0) && (!!e.candidate || void 0)
                }))) || e.length < 1 ? this.logger.info("zp.sci.1 cancelled") : (this.dataReport.eventStart(0 == this.retrySeq ? this.reportSeq : this.retrySeq, "SendIceCandidate"), this.stateNego !== i.ENUM_PLAY_STATE_NEGO.iceConnected && (this.stateNego = i.ENUM_PLAY_STATE_NEGO.sendCandidate), this.logger.info("zp.sci.1  stateNego:sendCandidate"), this.signal.sendCandidateInfo(s.getSeq(), this.sessionId, e, (function (e, r, i) {
                    t.logger.debug("zp.sci.1 send success"), t.dataReport.eventEnd(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendIceCandidate")
                }), (function (e, r) {
                    t.logger.error("zp.sci.1 failed to send: " + e.toString()), t.dataReport.eventEndWithMsg(0 == t.retrySeq ? t.reportSeq : t.retrySeq, "SendIceCandidate", {error: e}), t.playStateUpdateError(o.playErrorList.SEND_CANDIDATE_ERROR)
                })))
            }, e.prototype.shouldSendCloseSession = function (e) {
                return this.state != s.ENUM_PLAY_STATE_UPDATE.stop && this.state != i.ENUM_PLAY_STATE.waitingSessionRsp
            }, e.prototype.playStateUpdateError = function (e) {
                this.logger.info("zp.psue.1 called ", e.code), this.state === i.ENUM_PLAY_STATE.stop || this.negoTryCount < this.negoTryMaxCount && this.stateNego < i.ENUM_PLAY_STATE_NEGO.iceConnected ? this.logger.info("zp.psue.1 reset") : (0 != this.sessionId && this.shouldSendCloseSession(e) && (this.signal.sendCloseSession(s.getSeq(), this.sessionId, 1), this.closeSessionSignal = !0), this.state = i.ENUM_PLAY_STATE.stop, this.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.error, this.streamId, e), this.resetPlay())
            }, e.prototype.getCameraMicStatus = function (e) {
                return 0 == e ? "OPEN" : "MUTE"
            }, e.prototype.onPlayStateUpdate = function (e, t, r) {
            }, e.prototype.onPlayQualityUpdate = function (e, t) {
            }, e.prototype.onRemoteCameraStatusUpdate = function (e, t) {
            }, e.prototype.onRemoteMicStatusUpdate = function (e, t) {
            }, e.prototype.stopPlay = function () {
                for (var e in this.logger.info("zp.sp.1.1 called"), this.streamCenter.publisherList) {
                    if (this.streamCenter.publisherList[e].publisher.state == i.ENUM_PUBLISH_STATE.publishing && this.broadcasterStatus == i.ENUM_BROADCASTER_STATUS.start) {
                        this.signal && this.signal.sendBroadcasterStatus(s.getSeq(), this.sessionId, 0), this.broadcasterStatus = i.ENUM_BROADCASTER_STATUS.stop;
                        break
                    }
                }
                this.sessionId && !this.closeSessionSignal && this.signal.sendCloseSession(s.getSeq(), this.sessionId, 0), this.resetPlay()
            }, e.prototype.onDisconnect = function () {
                this.logger.info("zp.od.1 call"), this.logger.info("zp.od.1 websocket disconnect"), !this.tryingNexitSignal && this.tryNextSignal(o.playErrorList.WEBSOCKET_ERROR)
            }, e.prototype.tryNextSignal = function (e) {
                this.tryingNexitSignal = !0;
                var t = this.streamId, r = this.signal.server, o = this.streamCenter.playerList[t], n = [];
                o && o.serverUrls && (n = o.serverUrls), this.retrySeq = s.getReportSeq(), this.streamCenter.stateCenter.reportSeqList.rePublish[t] = this.retrySeq, this.dataReport.newReport(this.retrySeq, a.eventList.kZegoTaskRePlay), this.dataReport.addMsgInfo(this.retrySeq, {
                    serverUrls: n,
                    reason: e
                }), this.nextSignalTryCount > 3 * n.length ? (this.logger.error("zp.tns.1 try max limit"), this.playStateUpdateError(e)) : (this.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.retry, this.streamId, {
                    code: 0,
                    msg: ""
                }), n.forEach((function (e, t) {
                    return t <= n.indexOf(r) && n.push(e)
                })), n.splice(0, n.indexOf(r) + 1), this.logger.info("zp.tns.1 try next signal " + t), this.signal && this.signal.state == i.ENUM_CONNECT_STATE.connected && this.signal.sendCloseSession(s.getSeq(), this.sessionId, 1), this.signal && this.signal.removeSession(this.sessionId), this.resetPlay(), this.streamCenter.connectPlayServer(t, this.getRomoteStreamSuc, !0), this.nextSignalTryCount++)
            }, e
        }();
        t.ZegoPlayWeb = c
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            function e(e, t) {
                this.playerList = {}, this.publisherList = {}, this.playSuccessCallBackList = {}, this.playErrorCallBackList = {}
            }

            return e.prototype.onRemoteCameraStatusUpdate = function (e, t) {
            }, e.prototype.onRemoteMicStatusUpdate = function (e, t) {
            }, e.prototype.setSessionInfo = function (e, t, r, i) {
            }, e
        }();
        t.ZegoStreamCenter = i
    }, function (e, t, r) {
        "use strict";
        var i, s = this && this.__extends || (i = function (e, t) {
            return (i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(19), n = r(0), a = r(20), c = r(21), d = r(22), l = r(23), u = r(24), h = r(25), p = r(1), g = r(3),
            m = r(2), f = r(4), v = function (e) {
                function t() {
                    return e.call(this) || this
                }

                return s(t, e), t.prototype.init = function () {
                    this.bindSocketHandler(), this.bindStreamHandler(), this.bindHeatBeatHandler(), this.bindRoomHandler(), this.bindMessageHandler(), this.bindLiveHandler(), this.bindStreamCenterHandler()
                }, t.prototype.bindSocketHandler = function () {
                    var e = this;
                    this.socketCenter = new a.SocketCenter(this.logger, this.stateCenter), this.socketCenter.registerRouter("push_signal", (function (t) {
                        e.liveHandler.handlePushSignalMsg(t)
                    })), this.socketCenter.getSocket = function (t) {
                        return e.getSocket(t)
                    }, this.socketCenter.handlePushKickout = function (t) {
                        e.logger.info("zb.cm.bsh.0  call hpk");
                        var r = m.getReportSeq();
                        e.dataReport.newReport(r, f.eventList.kZegoTaskKickout), e.roomHandler.setRunState(n.ENUM_RUN_STATE.logout), e.roomHandler.resetRoom(), e.dataReport.addMsgInfo(r, {user_id: e.stateCenter.idName}), e.logger.error("zb.cm.bsh.0 kick out reason " + t.body.reason), e.dataReport.addMsgInfo(r, {
                            error: g.ClientUtil.getKickoutError(t.body.reason).code,
                            message: g.ClientUtil.getKickoutError(t.body.reason).message
                        }), e.dataReport.uploadReport(r), e.stateCenter.actionListener("roomStateUpdate", e.stateCenter.roomid, "DISCONNECTED", p.liveRoomErrorList.KICK_OUT, ""), e.logger.debug("zb.cm.bsh.0  call hpk success")
                    }, this.socketCenter.handlePushCustomMsg = function (t) {
                        e.messageHandler.handlePushCustomMsg(t)
                    }, this.socketCenter.handlePushUserStateUpdateMsg = function (t) {
                        e.roomHandler.handlePushUserStateUpdateMsg(t)
                    }, this.socketCenter.handlePushRoomMsg = function (t) {
                        var r = m.getReportSeq();
                        e.dataReport.newReport(r), e.dataReport.addMsgInfo(r, {room_sid: t.header.session_id});
                        var i = [];
                        t.body.chat_data.forEach((function (t) {
                            var s = {
                                fromUser: {userID: t.id_name, userName: t.nick_name},
                                message: t.msg_content,
                                sendTime: t.send_time,
                                messageID: t.msg_id
                            };
                            i.push(s), e.dataReport.addMsgInfo(r, {from_msg_id: t.id_name})
                        })), e.dataReport.uploadReport(r, f.eventList.kZegoTaskLiveRoomGetRoomMessage), e.stateCenter.actionListener("IMRecvBroadcastMessage", e.stateCenter.roomid, i)
                    }, this.socketCenter.handlePushMergeMsg = function (t) {
                        e.messageHandler.handlePushMergeMsg(t)
                    }, this.socketCenter.handlePushTransMsg = function (t) {
                        e.messageHandler.handlePushTransMsg(t)
                    }, this.socketCenter.handleBigImMsgRsp = function (t) {
                        e.messageHandler.handleBigImMsgRsp(t)
                    }
                }, t.prototype.bindStreamHandler = function () {
                    var e = this;
                    this.streamHandler = new d.StreamHandler(this.logger, this.stateCenter, this.socketCenter, this.dataReport), this.streamHandler.onStreamUpdated = function (t, r, i) {
                        var s = i.map((function (e) {
                            return {
                                streamID: e.streamID,
                                user: e.user,
                                extraInfo: e.extraInfo,
                                urlsFLV: e.urlFlv,
                                urlsRTMP: e.urlRtmp,
                                urlsHLS: e.urlHls,
                                urlsHttpsFLV: e.urlHttpsFlv,
                                urlsHttpsHLS: e.urlHttpsHls
                            }
                        })), o = m.getReportSeq();
                        e.dataReport.newReport(o, f.eventList.kZegoTaskLiveRoomGetStreamUpdateInfo), e.dataReport.addMsgInfo(o, {
                            stream_update_type: 1 === r ? "added" : "deleted",
                            update_stream: s
                        }), e.dataReport.uploadReport(o), e.stateCenter.actionListener("roomStreamUpdate", t, g.ClientUtil.getSteamUpdateType(r), s)
                    }, this.streamHandler.onPublishStateUpdate = function (t, r, i) {
                        if (e.logger.info("zb.opsu ", r), "xcx" == e.stateCenter.clientType) 0 == t ? (g.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + r, e.stateCenter.reportList) && g.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + r, e.stateCenter.reportList)(m.REPORT_ACTION.eventEnd, "publish_state"), e.dataReport.uploadReport(e.stateCenter.reportSeqList.startPublish[r]), delete e.stateCenter.reportSeqList.startPublish[r], g.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + r, e.stateCenter.reportList)) : 1 == t && (e.dataReport.addMsgInfo(e.stateCenter.reportSeqList.startPublish[r], {
                            error: i.code,
                            message: i.msg
                        }), e.dataReport.uploadReport(e.stateCenter.reportSeqList.startPublish[r]), delete e.stateCenter.reportSeqList.startPublish[r], g.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + r, e.stateCenter.reportList)); else {
                            var s = e.streamCenter.getTotalStreamId(r), o = e.stateCenter.reportSeqList.startPublish[s],
                                n = e.streamCenter.publisherList[s];
                            if (n && n.publisher && (0 == t || 1 == t)) if (0 !== n.publisher.retrySeq) {
                                var a = n.publisher.retrySeq;
                                e.dataReport.eventEndWithMsgInfo(a, "PublishState", {type: t}), 1 == t && e.dataReport.addMsgInfo(a, {
                                    error: i.code,
                                    message: i.msg
                                }), e.dataReport.uploadReport(a), delete e.stateCenter.reportSeqList.rePublish[s]
                            } else e.dataReport.eventEndWithMsgInfo(o, "PublishState", {type: t}), 1 == t && e.dataReport.addMsgInfo(o, {
                                error: i.code,
                                message: i.msg
                            }), e.dataReport.uploadReport(o), delete e.stateCenter.reportSeqList.startPublish[s]
                        }
                        e.stateCenter.actionListener("publisherStateUpdate", {
                            state: g.ClientUtil.getPublisherStateType(t),
                            streamID: r,
                            errorCode: i.code,
                            extendedData: i.msg
                        })
                    }, this.streamHandler.onStreamExtraInfoUpdated = function (t, r) {
                        var i = r.map((function (e) {
                            return {streamID: e.streamID, user: e.user, extraInfo: e.extraInfo}
                        })), s = m.getReportSeq();
                        e.dataReport.newReport(s, f.eventList.kZegoTaskLiveRoomGetStreamExtraInfo), e.dataReport.addMsgInfo(s, {update_stream: i}), e.dataReport.uploadReport(s), e.stateCenter.actionListener("streamExtraInfoUpdate", t, i)
                    }, this.streamHandler.setCDNInfo = function (t, r) {
                        e.setCDNInfo(t, r)
                    }
                }, t.prototype.bindHeatBeatHandler = function () {
                    var e = this;
                    this.heartBeatHandler = new l.HeartBeatHandler(this.logger, this.stateCenter, this.socketCenter, this.dataReport), this.heartBeatHandler.onRecvReliableMessage = function (t, r, i) {
                        e.stateCenter.actionListener("recvReliableMessage", t, r, i)
                    }, this.heartBeatHandler.handleFetchStreamListRsp = function (t) {
                        e.streamHandler.handleFetchStreamListRsp(t)
                    }, this.heartBeatHandler.fetchUserList = function () {
                        e.roomHandler.fetchUserList()
                    }, this.heartBeatHandler.onUpdateOnlineCount = function (t, r) {
                        e.stateCenter.actionListener("updateOnlineCount", t, r)
                    }, this.heartBeatHandler.updateStreamInfo = function (t, r, i, s) {
                        void 0 === i && (i = ""), e.streamHandler.updateStreamInfo(t, r, i, s)
                    }, this.heartBeatHandler.hbLogout = function (t) {
                        e.logger.error("hhbr.0 " + t.msg), e.stateCenter.actionListener("roomStateUpdate", e.stateCenter.roomid, "DISCONNECTED", t.code, "")
                    }
                }, t.prototype.bindRoomHandler = function () {
                    var e = this;
                    this.roomHandler = new c.RoomHandler(this.logger, this.stateCenter, this.socketCenter), this.roomHandler.loginSuccessCallBack = function (t, r) {
                        var i = r.body.hearbeat_interval < n.MINIUM_HEARTBEAT_INTERVAL ? n.MINIUM_HEARTBEAT_INTERVAL : r.body.hearbeat_interval;
                        e.stateCenter.tryHeartbeatCount = 0, e.stateCenter.heartbeatTimer && clearTimeout(e.stateCenter.heartbeatTimer), e.heartBeatHandler.start(i), e.heartBeatHandler.resetCheckMessage(), e.heartBeatHandler.startCheckMessageTimeout(), e.streamCenter.setSessionInfo(e.stateCenter.appid, e.stateCenter.idName, e.stateCenter.token, e.stateCenter.testEnvironment), r.body.anchor_info && e.stateCenter.actionListener("getAnchorInfo", r.body.anchor_info.anchor_id_name, r.body.anchor_info.anchor_nick_name), r.body.online_count && e.stateCenter.actionListener("updateOnlineCount", e.stateCenter.roomid, r.body.online_count), e.logger.info("zb.cm.brh hls userStateUpdate " + e.stateCenter.userStateUpdate), e.stateCenter.userStateUpdate && (e.logger.info("zb.cm.brh hls fetch all new userlist"), e.roomHandler.fetchUserList(t)), e.streamHandler.handleStreamStart(t, r)
                    }, this.roomHandler.resetRoomCallBack = function () {
                        e.heartBeatHandler.resetHeartbeat(), e.heartBeatHandler.resetCheckMessage(), e.resetStreamCenter()
                    }, this.roomHandler.onUserStateUpdate = function (t, r, i) {
                        var s = m.getReportSeq();
                        e.dataReport.newReport(s, f.eventList.kZegoTaskLiveRoomGetUserUpdateInfo);
                        var o = i.filter((function (t) {
                            return t.userID !== e.stateCenter.idName
                        }));
                        0 !== o.length && e.stateCenter.actionListener("roomUserUpdate", t, r, o), e.dataReport.addMsgInfo(s, {user_update_type: "ADD" == r ? "added" : "deleted"})
                    }, this.roomHandler.onDisconnect = function (t) {
                        if (e.logger.error("zc.od.0 " + t.msg), "string" == typeof t.code && "Error.Network" === t.code) e.dataReport.addMsgInfo(e.stateCenter.reportSeqList.relogin, {
                            error: f.errorList.kLiveRoomDisconnect.code,
                            message: f.errorList.kLiveRoomDisconnect.message
                        }); else if ("number" == typeof t.code) {
                            var r = g.ClientUtil.decodeServerError(t.code, t.msg);
                            e.dataReport.addMsgInfo(e.stateCenter.reportSeqList.relogin, {
                                error: r.code,
                                message: r.message
                            })
                        }
                        e.dataReport.uploadReport(e.stateCenter.reportSeqList.relogin), e.stateCenter.reportSeqList.relogin = 0, g.ClientUtil.unregisterCallback("kZegoTaskReLoginRoom", e.stateCenter.reportList), e.stateCenter.actionListener("roomStateUpdate", e.stateCenter.roomid, "DISCONNECTED", t.code, "")
                    }, this.roomHandler.onConnecting = function (t) {
                        if (0 === e.stateCenter.reportSeqList.login) {
                            var r = m.getReportSeq();
                            e.stateCenter.reportSeqList.relogin = r, e.dataReport.newReport(r, f.eventList.kZegoTaskReLoginRoom), g.ClientUtil.logReportCallback("kZegoTaskReLoginRoom", e.dataReport, r, e.stateCenter.reportList)
                        }
                        e.stateCenter.actionListener("roomStateUpdate", e.stateCenter.roomid, "CONNECTING", t.code, t.msg)
                    }, this.roomHandler.loginBodyData = function () {
                        return e.loginBodyData()
                    }
                }, t.prototype.bindMessageHandler = function () {
                    var e = this;
                    this.messageHandler = new u.MessageHandler(this.logger, this.stateCenter, this.socketCenter, this.dataReport), this.messageHandler.onRecvCustomCommand = function (t, r, i, s) {
                        var o = m.getReportSeq();
                        e.dataReport.newReport(o), e.dataReport.uploadReport(o, f.eventList.kZegoTaskLiveRoomGetCustomCommand), e.stateCenter.actionListener("IMRecvCustomCommand", i, {
                            userID: t,
                            userName: r
                        }, s)
                    }, this.messageHandler.onRecvBigRoomMessage = function (t, r) {
                        var i = m.getReportSeq();
                        e.dataReport.newReport(i);
                        var s = [];
                        t.forEach((function (e) {
                            var t = {
                                fromUser: {userID: e.idName, userName: e.nickName},
                                message: e.content,
                                sendTime: e.time,
                                messageID: e.messageId
                            };
                            s.push(t)
                        })), e.dataReport.uploadReport(i, f.eventList.kZegoTaskLiveGetRoomBigIM), e.stateCenter.actionListener("IMRecvBarrageMessage", r, s)
                    }, this.messageHandler.onRecvReliableMessage = function (t, r, i) {
                        e.stateCenter.actionListener("recvReliableMessage", t, r, i)
                    }
                }, t.prototype.bindLiveHandler = function () {
                    var e = this;
                    this.liveHandler = new h.LiveHandler(this.logger, this.stateCenter, this.socketCenter), this.liveHandler.onRecvEndJoinLiveCommand = function (t, r, i, s) {
                        e.stateCenter.actionListener("recvEndJoinLiveCommand", t, r, i, s)
                    }, this.liveHandler.onRecvInviteJoinLiveRequest = function (t, r, i, s) {
                        e.stateCenter.actionListener("RecvInviteJoinLiveRequest", t, r, i, s)
                    }, this.liveHandler.onRecvJoinLiveRequest = function (t, r, i, s) {
                        e.stateCenter.actionListener("recvJoinLiveRequest", t, r, i, s)
                    }
                }, t.prototype.bindStreamCenterHandler = function () {
                    var e = this;
                    this.streamCenter.onPlayStateUpdate = function (t, r, i) {
                        if ("xcx" == e.stateCenter.clientType) 0 == t ? (g.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + r, e.stateCenter.reportList) && g.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + r, e.stateCenter.reportList)("eventEnd", "play_state"), e.dataReport.uploadReport(e.stateCenter.reportSeqList.startPlay[r]), delete e.stateCenter.reportSeqList.startPlay[r], g.ClientUtil.unregisterCallback("kZegoTaskPlayStart" + r, e.stateCenter.reportList)) : 1 == t && (e.dataReport.uploadReport(e.stateCenter.reportSeqList.startPlay[r]), delete e.stateCenter.reportSeqList.startPlay[r], g.ClientUtil.unregisterCallback("kZegoTaskPlayStart" + r, e.stateCenter.reportList)), e.stateCenter.actionListener("playerStateUpdate", {
                            state: g.ClientUtil.getPlayerStateType(t),
                            streamID: r,
                            errorCode: i.code,
                            extendedData: i.msg
                        }); else {
                            console.error("playState");
                            var s = e.streamCenter.getTotalStreamId(r), o = e.stateCenter.reportSeqList.startPlay[s],
                                n = e.streamCenter.playerList[s];
                            if (console.log(s), n && n.player && (0 == t || 1 == t)) if (0 !== n.player.retrySeq) {
                                var a = n.player.retrySeq;
                                e.dataReport.eventEndWithMsgInfo(a, "PlayState", {type: t}), 1 == t && e.dataReport.addMsgInfo(a, {
                                    error: i.code,
                                    message: i.msg
                                }), e.dataReport.uploadReport(a), delete e.stateCenter.reportSeqList.rePlay[s]
                            } else e.dataReport.eventEndWithMsgInfo(o, "PlayState", {type: t}), 1 == t && e.dataReport.addMsgInfo(o, {
                                error: i.code,
                                message: i.msg
                            }), e.dataReport.uploadReport(o), delete e.stateCenter.reportSeqList.startPlay[s]
                        }
                    }, this.streamCenter.onPublishStateUpdate = function (t, r, i) {
                        e.onPublishStateUpdateHandle(t, r, i)
                    }, this.streamCenter.onPublishQualityUpdate = function (t, r) {
                        e.stateCenter.actionListener("publishQualityUpdate", t, r)
                    }, this.streamCenter.onPlayQualityUpdate = function (t, r) {
                        e.stateCenter.actionListener("playQualityUpdate", t, r)
                    }, this.streamCenter.onRemoteCameraStatusUpdate = function (t, r) {
                        var i = m.getReportSeq();
                        e.dataReport.newReport(i, f.eventList.kZegoTaskRemoteCameraUpdate), e.dataReport.uploadReport(i), e.stateCenter.actionListener("remoteCameraStatusUpdate", t, r)
                    }, this.streamCenter.onRemoteMicStatusUpdate = function (t, r) {
                        var i = m.getReportSeq();
                        e.dataReport.newReport(i, f.eventList.kZegoTaskRemoteMicUpdate), e.dataReport.uploadReport(i), e.stateCenter.actionListener("remoteMicStatusUpdate", t, r)
                    }
                }, t.prototype.setLogConfig = function (e) {
                    this.logger.info("zb.cm.clf call");
                    var t = m.getReportSeq();
                    if (this.dataReport.newReport(t), e.logLevel && (this.logger.setLogLevel(g.ClientUtil.getLogLevel(e.logLevel)), this.dataReport.addMsgInfo(t, {log_level: e.logLevel})), e.remoteLogLevel && [0, 1, 2, 3, 99, 100].includes(g.ClientUtil.getLogLevel(e.remoteLogLevel)) && (this.logger.setRemoteLogLevel(g.ClientUtil.getLogLevel(e.remoteLogLevel)), this.dataReport.addMsgInfo(t, {remote_log_level: e.remoteLogLevel})), this.logger.setSessionInfo(this.stateCenter.appid, "", "", this.stateCenter.idName, "", n.PROTO_VERSION), "string" == typeof e.logURL && (e.logURL.startsWith("wss://") || e.logURL.startsWith("https://"))) this.logger.openLogServer(e.logURL), this.dataReport.addMsgInfo(t, {log_url: e.logURL}); else if (e.logURL) return this.logger.error("zb.cm.clf log url must be a wss or https url"), !1;
                    return this.dataReport.uploadReport(t, f.eventList.kZegoTaskSetLog), this.logger.info("zb.cm.clf call success"), !0
                }, t.prototype.setDebugVerbose = function (e) {
                    this.logger.info("zb.cm.sd call");
                    var t = m.getReportSeq();
                    this.dataReport.newReport(t), "boolean" == typeof e && (this.stateCenter.debug = e, this.stateCenter.debugCustom = !0, this.dataReport.addMsgInfo(t, {debug: e ? "true" : "false"})), this.dataReport.uploadReport(t, f.eventList.kZegoTaskSetDebug), this.logger.info("zb.cm.sd call success")
                }, t.prototype.loginRoom = function (e, t, r, i) {
                    var s = this;
                    return new Promise((function (o, n) {
                        var a = s.loginReport(o, n, t, i), c = a.interResolve, d = a.interReject;
                        return "string" != typeof e || "" == e ? (s.logger.error("zb.rh.lg roomid must be string and not empty"), void d(p.commonErrorList.PARAM, " param roomID error.")) : "string" != typeof t || "" == t ? (s.logger.error("zb.rh.lg token must be string and not empty"), void d(p.commonErrorList.PARAM, " param token error.")) : r && "object" == typeof r ? r.userID && "string" == typeof r.userID && "" != r.userID ? r.userName && "string" == typeof r.userName && "" != r.userName ? void s.roomHandler.login(e, t, r, i, c, d) : (s.logger.error("zb.rh.lg userName must be string and not empty"), void d(p.commonErrorList.PARAM, " param userName error.")) : (s.logger.error("zb.rh.lg userID must be string and not empty"), void d(p.commonErrorList.PARAM, " param userID error.")) : (s.logger.error("zb.rh.lg user must be exist and is an object"), void d(p.commonErrorList.PARAM, " param user error."))
                    }))
                }, t.prototype.loginReport = function (e, t, r, i) {
                    var s = this;
                    0 !== this.stateCenter.reportSeqList.login && (this.dataReport.uploadReport(this.stateCenter.reportSeqList.login), this.stateCenter.reportSeqList.login = 0, g.ClientUtil.unregisterCallback("kZegoTaskLoginRoom", this.stateCenter.reportList));
                    var o = m.getReportSeq();
                    this.stateCenter.reportSeqList.login = o, this.dataReport.newReport(o, f.eventList.kZegoTaskLoginRoom), "string" == typeof r && this.dataReport.addMsgInfo(o, {token: r}), i && (i.userUpdate && "boolean" == typeof i.userUpdate && this.dataReport.addMsgInfo(o, {user_update: i.userUpdate}), i.maxMemberCount && "number" == typeof i.maxMemberCount && this.dataReport.addMsgInfo(o, {max_member_count: i.maxMemberCount})), g.ClientUtil.logReportCallback("kZegoTaskLoginRoom", this.dataReport, o, this.stateCenter.reportList);
                    return {
                        interResolve: function (t) {
                            s.dataReport.uploadReport(o), s.stateCenter.reportSeqList.login = 0, g.ClientUtil.unregisterCallback("kZegoTaskLoginRoom", s.stateCenter.reportList), e(t)
                        }, interReject: function (e, r) {
                            var i;
                            if (void 0 === r && (r = ""), e.code < 2e9) i = g.ClientUtil.decodeServerError(e.code, e.msg); else {
                                var n = f.codeErrMap[e.code];
                                i = f.errorList[n]
                            }
                            s.dataReport.addMsgInfo(o, {
                                error: i.code,
                                message: i.message + r
                            }), s.dataReport.uploadReport(o), s.stateCenter.reportSeqList.login = 0, g.ClientUtil.unregisterCallback("kZegoTaskLoginRoom", s.stateCenter.reportList), t(e)
                        }
                    }
                }, t.prototype.logoutRoom = function (e) {
                    var t = m.getReportSeq();
                    this.dataReport.newReport(t), "string" == typeof e && "" != e || (this.logger.debug("zb.rh.lg roomid must be string and not empty"), this.dataReport.addMsgInfo(t, {
                        error: f.errorList.kInvalidParamError.code,
                        message: f.errorList.kInvalidParamError.message + " param roomID error"
                    })), this.roomHandler.logout(e), this.dataReport.uploadReport(t, f.eventList.kZegoTaskLogoutRoom)
                }, t.prototype.sendCustomCommand = function (e, t, r) {
                    var i = this;
                    return new Promise((function (s, o) {
                        var n = m.getReportSeq();
                        i.dataReport.newReport(n, f.eventList.kZegoTaskLiveRoomSendCustomCommand), i.dataReport.addMsgInfo(n, {room_sid: i.stateCenter.sessionid});
                        var a = g.ClientUtil.proxyRes(i.dataReport, n, s, o), c = a.interResolve, d = a.interReject;
                        return "string" != typeof e || "" == e ? (i.logger.error("zb.scc roomid must be string and not empty"), void d(p.commonErrorList.PARAM, " param roomID error")) : r instanceof Array && !r.find((function (e) {
                            return "string" != typeof e
                        })) ? "string" != typeof t && "object" != typeof t ? (i.logger.error("zb.scc custom content must be a non empty string or object"), void d(p.commonErrorList.PARAM, " param command error")) : void i.messageHandler.sendCustomCommand(r, t, c, d) : (i.logger.error("zb.scc dstMembers must be string array"), void d(p.commonErrorList.PARAM, " param toUserList error"))
                    }))
                }, t.prototype.sendBroadcastMessage = function (e, t) {
                    var r = this;
                    return new Promise((function (i, s) {
                        var o = m.getReportSeq();
                        r.dataReport.newReport(o, f.eventList.kZegoTaskLiveRoomSendRoomMessage), r.dataReport.addMsgInfo(o, {room_sid: r.stateCenter.sessionid});
                        var n = g.ClientUtil.proxyRes(r.dataReport, o, i, s), a = n.interResolve, c = n.interReject;
                        return "string" != typeof e || "" == e ? (r.logger.error("zb.sbcm roomid must be string and not empty"), void c(p.commonErrorList.PARAM, " param roomID error")) : "string" != typeof t ? (r.logger.error("zb.sbcm message must be string"), void c(p.commonErrorList.PARAM, " param message error")) : void r.messageHandler.sendRoomMsg(r.stateCenter.msgCategory, e, t, a, c)
                    }))
                }, t.prototype.sendReliableMessage = function (e, t, r, i) {
                    this.messageHandler.sendReliableMessage(e, t, r, i)
                }, t.prototype.sendBarrageMessage = function (e, t) {
                    var r = this;
                    return new Promise((function (i, s) {
                        var o = m.getReportSeq();
                        r.dataReport.newReport(o, f.eventList.kZegoTaskLiveSendRoomBigIM), r.dataReport.addMsgInfo(o, {room_sid: r.stateCenter.sessionid});
                        var n = g.ClientUtil.proxyRes(r.dataReport, o, i, s), a = n.interResolve, c = n.interReject;
                        return "string" != typeof e || "" == e ? (r.logger.error("zb.sbm roomid must be string and not empty"), void c(p.commonErrorList.PARAM, " param roomID error")) : "string" != typeof t ? (r.logger.error("zb.sbm message must be string"), void c(p.commonErrorList.PARAM, " param message error")) : void r.messageHandler.sendBigRoomMessage(r.stateCenter.msgCategory, e, t, a, c)
                    }))
                }, t.prototype.sendRelayMessage = function (e, t, r, i) {
                    this.messageHandler.sendRelayMessage(e, t, r, i)
                }, t.prototype.requestJoinLive = function (e, t, r, i) {
                    return this.liveHandler.requestJoinLive(e, t, r, i)
                }, t.prototype.inviteJoinLive = function (e, t, r, i) {
                    return this.liveHandler.inviteJoinLive(e, t, r, i)
                }, t.prototype.endJoinLive = function (e, t, r) {
                    return this.liveHandler.endJoinLive(e, t, r)
                }, t.prototype.respondJoinLive = function (e, t, r, i) {
                    return this.liveHandler.respondJoinLive(e, t, r, i)
                }, t.prototype.startMixerTask = function (e) {
                    var t = this;
                    return new Promise((function (r, i) {
                        e.outputConfig && e.outputConfig.outputFps && (e.outputConfig.outputFPS = e.outputConfig.outputFps);
                        var s = m.getReportSeq();
                        t.dataReport.newReport(s, f.eventList.kZegoTaskMixStart), g.ClientUtil.logReportCallback("kZegoTaskMixStart" + e.taskID, t.dataReport, s, t.stateCenter.reportList);
                        t.streamHandler.updateMixStream(e, (function (i) {
                            t.dataReport.uploadReport(s), g.ClientUtil.unregisterCallback("kZegoTaskMixStart" + e.taskID, t.stateCenter.reportList), r(i)
                        }), (function (r) {
                            var o;
                            o = r.errorCode < 2e9 ? g.ClientUtil.mixServerError(r.errorCode - n.MIXSTREAM_ERROR_CODE) : f.codeErrMap[r.errorCode], t.dataReport.addMsgInfo(s, {
                                error: f.errorList[o].code,
                                message: f.errorList[o].message
                            }), t.dataReport.uploadReport(s), g.ClientUtil.unregisterCallback("kZegoTaskMixStart" + e.taskID, t.stateCenter.reportList), i(r)
                        }))
                    }))
                }, t.prototype.setMixerTaskConfig = function (e) {
                    var t = this;
                    return new Promise((function (r, i) {
                        var s = m.getReportSeq();
                        t.dataReport.newReport(s, f.eventList.kZegoTaskMixStart), g.ClientUtil.logReportCallback("kZegoTaskMixConfig", t.dataReport, s, t.stateCenter.reportList), t.streamHandler.setMixerTaskConfig(e).then((function (e) {
                            t.dataReport.uploadReport(s), g.ClientUtil.unregisterCallback("kZegoTaskMixConfig", t.stateCenter.reportList), r(e)
                        })).catch((function (e) {
                            var r = f.codeErrMap[e.code];
                            r && t.dataReport.addMsgInfo(s, {
                                error: f.errorList[r].code,
                                message: f.errorList[r].message
                            }), t.dataReport.uploadReport(s), g.ClientUtil.unregisterCallback("kZegoTaskMixConfig", t.stateCenter.reportList), i(e)
                        }))
                    }))
                }, t.prototype.stopMixerTask = function (e) {
                    var t = this;
                    return new Promise((function (r, i) {
                        var s = m.getReportSeq();
                        if (t.dataReport.newReport(s, f.eventList.kZegoTaskMixStop), !e || "string" != typeof e) return t.logger.error("zb.smt taskID error"), t.dataReport.addMsgInfo(s, {
                            error: f.errorList.kInvalidParamError.code,
                            message: f.errorList.kInvalidParamError.message + " param taskID error"
                        }), void t.dataReport.uploadReport(s);
                        t.streamHandler.stopMixStream(e, (function (e) {
                            t.dataReport.uploadReport(s), r(e)
                        }), (function (e) {
                            var r;
                            console.error(e), (r = e.errorCode < 2e9 ? g.ClientUtil.mixServerError(e.errorCode - n.MIXSTREAM_ERROR_CODE) : f.codeErrMap[e.errorCode]) ? t.dataReport.addMsgInfo(s, {
                                error: f.errorList[r].code,
                                message: f.errorList[r].message
                            }) : t.dataReport.addMsgInfo(s, {
                                error: e.errorCode,
                                message: "stop mixtask error"
                            }), t.dataReport.uploadReport(s), i(e)
                        }))
                    }))
                }, t.prototype.addPublishCdnUrl = function (e, t, r) {
                    var i = m.getReportSeq();
                    return this.dataReport.newReport(i, f.eventList.kZegoTaskAddPublishCdnUrl), this.dataReport.addMsgInfo(i, {
                        stream_id: e,
                        signature: t,
                        target_url: r
                    }), this.publishTarget({type: "addpush", streamID: e, pushUrl: r, signature: t}, i)
                }, t.prototype.removePublishCdnUrl = function (e, t, r) {
                    var i = m.getReportSeq();
                    return this.dataReport.newReport(i, f.eventList.kZegoTaskRemovePublishCdnUrl), this.dataReport.addMsgInfo(i, {
                        stream_id: e,
                        signature: t,
                        target_url: r
                    }), this.publishTarget({type: "delpush", streamID: e, pushUrl: r, signature: t}, i)
                }, t.prototype.clearPublishCdnUrl = function (e, t, r) {
                    var i = m.getReportSeq();
                    return this.dataReport.newReport(i, f.eventList.kZegoTaskRemovePublishCdnUrl), this.dataReport.addMsgInfo(i, {
                        stream_id: e,
                        signature: t,
                        target_url: r
                    }), this.publishTarget({type: "clearpush", streamID: e, pushUrl: r, signature: t}, i)
                }, t.prototype.publishTarget = function (e, t) {
                    var r = this;
                    return new Promise((function (i, s) {
                        if (!e.streamID || "string" != typeof e.streamID) return r.logger.error("zb.pt streamid error"), r.dataReport.addMsgInfo(t, {
                            error: f.errorList.kInvalidParamError.code,
                            message: f.errorList.kInvalidParamError.message + " streamid error"
                        }), void r.dataReport.uploadReport(t);
                        if (!e.pushUrl || "string" != typeof e.pushUrl) return r.logger.error("zb.pt pushurl error"), r.dataReport.addMsgInfo(t, {
                            error: f.errorList.kInvalidParamError.code,
                            message: f.errorList.kInvalidParamError.message + " pushurl error"
                        }), void r.dataReport.uploadReport(t);
                        if (!e.signature || "string" != typeof e.signature) return r.logger.error("zb.pt appSecret error"), r.dataReport.addMsgInfo(t, {
                            error: f.errorList.kInvalidParamError.code,
                            message: f.errorList.kInvalidParamError.message + " signature error"
                        }), void r.dataReport.uploadReport(t);
                        if (!r.stateCenter.publishStreamList[e.streamID]) return r.logger.error("zb.pt publish stream no found"), r.dataReport.addMsgInfo(t, {
                            error: f.errorList.kPublishStreamNotFound.code,
                            message: f.errorList.kPublishStreamNotFound.message
                        }), void r.dataReport.uploadReport(t);
                        r.streamHandler.publishTarget(e, (function (e) {
                            r.dataReport.uploadReport(t), i(e)
                        }), (function (e) {
                            var i = g.ClientUtil.getServerError(e.errorCode),
                                o = g.ClientUtil.decodeServerError(i.code, i.msg);
                            r.dataReport.addMsgInfo(t, {
                                error: o.code,
                                message: o.message
                            }), r.dataReport.uploadReport(t), s(e)
                        }))
                    }))
                }, t.prototype.setStreamExtraInfo = function (e, t) {
                    var r = m.getReportSeq();
                    if (this.dataReport.newReport(r, f.eventList.kZegoTaskLiveRoomSendStreamExtraInfo), this.dataReport.addMsgInfo(r, {
                        stream_id: e,
                        stream_extra_info: t,
                        room_sid: this.stateCenter.sessionid
                    }), "string" != typeof e || "" == e) return this.logger.error("zb.ssei streamID must be string and not empty"), this.dataReport.addMsgInfo(r, {
                        error: f.errorList.kInvalidParamError.code,
                        message: f.errorList.kInvalidParamError.message + " streamID must be string and not empty"
                    }), this.dataReport.uploadReport(r), !1;
                    if ("string" != typeof t || "" == t) return this.logger.error("zb.ssei extraInfo must be string and not empty"), this.dataReport.addMsgInfo(r, {
                        error: f.errorList.kInvalidParamError.code,
                        message: f.errorList.kInvalidParamError.message + " extraInfo must be string and not empty"
                    }), this.dataReport.uploadReport(r), !1;
                    var i = this.streamHandler.updateStreamExtraInfo(e, t);
                    return this.dataReport.uploadReport(r), i
                }, t.prototype.bindListener = function (e, t) {
                    return this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error("zc.o.0 listener callBack must be funciton"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error("zc.o.0 event " + e + " no found"), !1)
                }, t.prototype.deleteListener = function (e, t) {
                    if (!this.stateCenter.listenerList[e]) return this.logger.error("zc.o.1 listener no found"), !1;
                    var r = this.stateCenter.listenerList[e];
                    return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                }, t.prototype.getVersion = function () {
                    return n.PROTO_VERSION
                }, t
            }(o.Common);
        t.BaseCenter = v
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(1), o = r(3), n = function () {
            function e() {
            }

            return e.prototype.getSocket = function (e) {
                return null
            }, e.prototype.setCDNInfo = function (e, t) {
            }, e.prototype.onPublishStateUpdateHandle = function (e, t, r) {
                var s = this;
                0 == e ? this.stateCenter.publishStreamList[t] && (this.stateCenter.publishStreamList[t].state == i.ENUM_PUBLISH_STREAM_STATE.tryPublish ? (this.stateCenter.publishStreamList[t].state = i.ENUM_PUBLISH_STREAM_STATE.update_info, this.streamHandler.updateStreamInfo(t, i.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[t].extra_info, (function (e) {
                    s.stateCenter.publishStreamList[t] && s.stateCenter.publishStreamList[t].state == i.ENUM_PUBLISH_STREAM_STATE.update_info && (s.stateCenter.publishStreamList[t].state = i.ENUM_PUBLISH_STREAM_STATE.stop, s.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, t, e), s.streamCenter.stopPlayingStream(t))
                }))) : (this.WebrtcOnPublishStateUpdateHandle(e, t, r), "xcx" == this.stateCenter.clientType && (this.dataReport.uploadReport(this.stateCenter.reportSeqList.startPublish[t]), delete this.stateCenter.reportSeqList.startPublish[t], o.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + t, this.stateCenter.reportList)))) : (this.streamHandler.onPublishStateUpdate(e, t, r), 1 == e && (this.logger.info("cb.cm.opsuh trigger internal stop publish stream"), this.stopPublishingStream(t, !0)))
            }, e.prototype.WebrtcOnPublishStateUpdateHandle = function (e, t, r) {
            }, e.prototype.loginBodyData = function () {
            }, e.prototype.resetStreamCenter = function () {
                if (this.stateCenter.customUrl && (this.stateCenter.customUrl = null), this.streamCenter.reset(), !this.socketCenter.isDisConnect()) for (var e in this.stateCenter.publishStreamList) this.stateCenter.publishStreamList[e].state == i.ENUM_PUBLISH_STREAM_STATE.publishing && this.streamHandler.updateStreamInfo(e, i.ENUM_STREAM_SUB_CMD.liveEnd, this.stateCenter.publishStreamList[e].extra_info)
            }, e.prototype.handleFetchWebRtcUrlRsp = function (e) {
                var t = e.body.stream_id, r = !1;
                if (e.body.urls && Array.isArray(e.body.urls) && e.body.urls.length > 0 ? r = !0 : this.logger.error("cb.cm.hfwur signal url is empty"), "push" === e.body.ptype) !r && this.streamHandler.onPublishStateUpdate(1, t, s.publishErrorList.DISPATCH_ERROR) && this.stopPublishingStream(t), this.stateCenter.publishStreamList[t] ? this.streamCenter.startPublishingStream(t, e.body.urls) : this.logger.error("cb.cm.hfwur no streamid to publish"); else if ("pull" == e.body.ptype) {
                    !r && this.streamCenter.onPlayStateUpdate(1, t, s.playErrorList.DISPATCH_ERROR) && this.stopPlayingStream(t);
                    for (var i = !1, o = 0; o < this.stateCenter.streamList.length; o++) if (this.stateCenter.streamList[o].stream_id === t) {
                        i = !0;
                        break
                    }
                    0 == i && this.logger.warn("cb.cm.hfwur cannot find stream, continue to play"), this.streamCenter.startPlayingStream(t, e.body.urls, this.streamCenter.playSuccessCallBackList[t])
                }
            }, e
        }();
        t.Common = n
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(3), o = function () {
            function e(e, t) {
                var r = this;
                this.websocket = null, this.cmdSeq = 0, this.responseRouters = {}, this.logger = e, this.stateCenter = t, this.responseRouters = {
                    push_kickout: function (e) {
                        r.handlePushKickout(e)
                    }, push_custommsg: function (e) {
                        r.handlePushCustomMsg(e)
                    }, push_im_chat: function (e) {
                        r.handlePushRoomMsg(e)
                    }, push_userlist_update: function (e) {
                        r.handlePushUserStateUpdateMsg(e)
                    }, push_merge_message: function (e) {
                        r.handlePushMergeMsg(e)
                    }, trans: function (e) {
                        r.handleTransRsp(e)
                    }, push_trans: function (e) {
                        r.handlePushTransMsg(e)
                    }
                }
            }

            return e.prototype.handlePushKickout = function (e) {
            }, e.prototype.handlePushCustomMsg = function (e) {
            }, e.prototype.handlePushRoomMsg = function (e) {
            }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
            }, e.prototype.handlePushMergeMsg = function (e) {
            }, e.prototype.handlePushTransMsg = function (e) {
            }, e.prototype.handleBigImMsgRsp = function (e) {
            }, e.prototype.handleTransRsp = function (e) {
                if (this.stateCenter.isLogin()) if (0 == e.body.err_code) {
                    var t = e.body.trans_type;
                    this.stateCenter.transSeqMap[t] ? (this.stateCenter.transSeqMap[t].seq = e.body.trans_seq, this.logger.debug("zb.sc.htr trans " + t + " seq " + e.body.trans_seq)) : this.logger.error("zb.sc.htr cannot match send info")
                } else this.logger.error("zb.sc.htr trans send error " + e.body.err_code); else this.logger.error("zb.sc.htr not login")
            }, e.prototype.handleBizChannelRspCallback = function (e, t) {
                0 === e.body.err_code ? null != t.success && t.success(e.header.seq, e.body.cmd, e.body.rsp_body) : null != t.error && t.error(e.body.err_code, e.header.seq, e.body.rsp_body)
            }, e.prototype.registerRouter = function (e, t) {
                this.responseRouters[e] = t
            }, e.prototype.getSocket = function (e) {
                return null
            }, e.prototype.getHeaderV2 = function (e) {
                return {
                    Protocol: "req_v2",
                    cmd: e,
                    appid: this.stateCenter.appid,
                    seq: ++this.cmdSeq,
                    user_id: this.stateCenter.userid,
                    session_id: this.stateCenter.sessionid || "",
                    room_id: this.stateCenter.roomid || ""
                }
            }, e.prototype.getHeader = function (e) {
                return {
                    Protocol: "req",
                    cmd: e,
                    appid: this.stateCenter.appid,
                    seq: ++this.cmdSeq,
                    user_id: this.stateCenter.userid,
                    session_id: this.stateCenter.sessionid || "",
                    room_id: this.stateCenter.roomid || ""
                }
            }, e.prototype.sendMessage = function (e, t, r, s) {
                if (this.logger.debug("zb.sc.sm call " + e), this.isDisConnect()) return this.logger.error("zb.sc.sm error " + e + " websocket is disconnected"), -1;
                var o = "V1" === i.ROOMVERSION ? this.getHeader(e) : this.getHeaderV2(e), n = {header: o, body: t};
                if (null == r && (r = null), null == s && (s = null), null != r || null != s) {
                    var a = {data: n, seq: o.seq, deleted: !1, time: Date.parse(new Date + ""), success: r, error: s},
                        c = this.stateCenter.sendCommandList.push(a);
                    this.stateCenter.sendCommandMap[a.seq] = c
                }
                return this.websocket && this.websocket.send(JSON.stringify(n)), this.logger.debug("zb.sc.sm success"), o.seq
            }, e.prototype.sendCustomMessage = function (e, t, r, s) {
                if (this.logger.debug("zb.sc.scm call"), this.isDisConnect()) return this.logger.error("zb.sc.scm error"), !1;
                var o = "V1" === i.ROOMVERSION ? this.getHeader(e) : this.getHeaderV2(e), n = {header: o, body: t},
                    a = JSON.stringify(n);
                null == r && (r = null), null == s && (s = null);
                var c = {data: n, seq: o.seq, deleted: !1, time: Date.parse(new Date + ""), success: r, error: s},
                    d = this.stateCenter.sendDataList.push(c);
                return this.stateCenter.sendDataMap[c.seq] = d, this.websocket && this.websocket.send(a), this.logger.debug("zb.sc.scm success seq: ", o.seq), !0
            }, e.prototype.isDisConnect = function () {
                return !this.websocket || 1 !== this.websocket.readyState
            }, e.prototype.closeSocket = function () {
                this.websocket && (this.logger.info("zb.sc.cs close websocket"), this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null)
            }, e.prototype.createSocket = function (e) {
                this.websocket = this.getSocket(e)
            }, e.prototype.openHandler = function (e) {
                this.websocket && (this.websocket.onopen = e)
            }, e.prototype.closeHandler = function (e) {
                this.websocket && (this.websocket.onclose = e)
            }, e.prototype.errorHandler = function () {
                var e = this;
                this.websocket && (this.websocket.onerror = function (t) {
                    e.logger.error("zb.sc.oe msg=" + JSON.stringify(t))
                })
            }, e.prototype.checkResponse = function (e) {
                return (e.header.appid !== this.stateCenter.appid || e.header.session_id !== this.stateCenter.sessionid || e.header.user_id !== this.stateCenter.userid || e.header.room_id !== this.stateCenter.roomid || this.stateCenter.runState !== i.ENUM_RUN_STATE.login) && (this.logger.error("zb.sc.crp check session fail."), !0)
            }, e.prototype.responseHandler = function () {
                var e = this;
                this.websocket && (this.websocket.onmessage = function (t) {
                    var r = JSON.parse(t.data);
                    e.logger.info("zb.sc.ws.rph jsonmsg= ", r.header.cmd), e.logger.info("zb.sc.ws.rph jsonmsg= ", t.data), 0 !== r.body.err_code && r.body.err_message && e.logger.error("zb.sc.ws.rph cmd=" + r.header.cmd + ", err_code=" + r.body.err_code + ", err_message=" + r.body.err_message + " "), "login" !== r.header.cmd ? "logout" !== r.header.cmd ? e.stateCenter.isLogin() ? e.checkResponse(r) ? e.logger.error("zb.sc.ws.rph check session fail.") : (e.handleSendCommandMsgRsp(r), e.logger.info("zb.sc.ws.rph cmd=" + r.header.cmd + ",function=" + !!e.responseRouters[r.header.cmd]), e.responseRouters[r.header.cmd] && e.responseRouters[r.header.cmd](r)) : e.logger.warn("zb.sc.ws.rph  already logout") : e.responseRouters.logout(r, e.cmdSeq) : e.responseRouters.login(r, e.cmdSeq)
                })
            }, e.prototype.handleSendCommandMsgRsp = function (e) {
                this.logger.debug("zb.sc.hscmr call");
                var t, r = this.stateCenter.sendCommandMap[e.header.seq];
                null != r && ("login" == (t = r._data).data.header.cmd ? this.logger.debug("zb.sc.hscmr don't check " + t.data.header.cmd) : "relay" == t.data.header.cmd ? this.handleRelayRspCallback(e, t) : "bigim_chat" == t.data.header.cmd ? this.handleBigImRspCallback(e, t) : "biz_channel" == t.data.header.cmd ? this.handleBizChannelRspCallback(e, t) : 0 === e.body.err_code ? null != t.success && t.success(e.header.seq) : null != t.error && t.error(s.ClientUtil.getServerError(e.body.err_code), e.header.seq), delete this.stateCenter.sendCommandMap[e.header.seq], this.stateCenter.sendCommandList.remove(r)), this.logger.debug("zb.sc.hscmr call success")
            }, e.prototype.handleRelayRspCallback = function (e, t) {
                0 === e.body.err_code ? null != t.success && t.success(e.header.seq, e.body.relay_result) : null != t.error && t.error(s.ClientUtil.getServerError(e.body.err_code), e.header.seq)
            }, e.prototype.handleBigImRspCallback = function (e, t) {
                0 === e.body.err_code ? null != t.success && this.handleBigImMsgRsp(e) : null != t.error && t.error({
                    errorCode: s.ClientUtil.getServerError(e.body.err_code).code,
                    messageID: ""
                })
            }, e
        }();
        t.SocketCenter = o
    }, function (e, t, r) {
        "use strict";
        var i = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var i = Array(e), s = 0;
            for (t = 0; t < r; t++) for (var o = arguments[t], n = 0, a = o.length; n < a; n++, s++) i[s] = o[n];
            return i
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = r(0), o = r(3), n = r(1), a = r(2), c = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.setRunState = function (e) {
                this.logger.debug("zb.rh.srs old=" + this.stateCenter.runState + ", new=" + e), this.stateCenter.lastRunState = this.stateCenter.runState, this.stateCenter.runState = e
            }, e.prototype.resetTryLogin = function () {
                this.logger.debug("zb.rh.rtl call"), clearTimeout(this.stateCenter.tryLoginTimer), this.stateCenter.tryLoginTimer = null, this.stateCenter.tryLoginCount = 0, this.logger.debug("zb.rh.rtl call success")
            }, e.prototype.resetBigRoomInfo = function () {
                this.stateCenter.transSeqMap = {}, this.stateCenter.realyMessageList = [], this.stateCenter.relayTimer && (clearTimeout(this.stateCenter.relayTimer), this.stateCenter.relayTimer = null), this.stateCenter.bigImLastTimeIndex = 0, this.stateCenter.bigIMmessageList = [], this.stateCenter.bigImCallbackMap = {}, this.stateCenter.bigImTimer && (clearTimeout(this.stateCenter.bigImTimer), this.stateCenter.bigImTimer = null), this.stateCenter.serverTimeOffset = 0, this.stateCenter.datiTimeWindow = 0, this.stateCenter.bigimTimeWindow = 0
            }, e.prototype.resetRoom = function (e) {
                var t = this;
                if (this.logger.debug("zb.rh.rr call"), this.resetTryLogin(), this.resetRoomCallBack(), this.stateCenter.streamList = [], this.stateCenter.streamQuerying = !1, this.stateCenter.publishStreamList = {}, this.stateCenter.joinLiveCallbackMap = {}, this.stateCenter.joinLiveRequestMap = {}, this.stateCenter.streamUrlMap = {}, this.resetBigRoomInfo(), this.stateCenter.cmdCallback = {}, this.logger.debug("zb.rh.rr call send logout=", this.stateCenter.sessionid), "0" !== this.stateCenter.sessionid && this.stateCenter.runState !== s.ENUM_RUN_STATE.logout) {
                    this.socketCenter.registerRouter("logout", (function (e) {
                        t.handleLogoutRsp(e)
                    })), this.socketCenter.sendMessage("logout", {reserve: 0})
                }
                this.socketCenter.closeSocket(), this.setRunState(s.ENUM_RUN_STATE.logout), this.stateCenter.userid = "", this.stateCenter.sessionid = "", this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.sessionid, this.stateCenter.idName, this.stateCenter.nickName, s.PROTO_VERSION), this.logger.debug("zb.rh.rr call success")
            }, e.prototype.resetRoomCallBack = function () {
            }, e.prototype.onDisconnect = function (e) {
            }, e.prototype.onConnecting = function (e) {
            }, e.prototype.loginSuccessCallBack = function (e, t) {
            }, e.prototype.login = function (e, t, r, i, a, c) {
                if (this.logger.setSessionInfo(this.stateCenter.appid, e, "", r.userID, "", s.PROTO_VERSION), this.logger.info("zb.rh.lg call:", e, t), i && (i.userUpdate && "boolean" == typeof i.userUpdate && (this.stateCenter.userStateUpdate = i.userUpdate), i.maxMemberCount && "number" == typeof i.maxMemberCount && (this.stateCenter.maxMemberCount = i.maxMemberCount)), !this.stateCenter.configOK) return this.logger.error("zb.rh.lg init sdk wrong"), void c(n.commonErrorList.INIT);
                this.stateCenter.runState !== s.ENUM_RUN_STATE.logout && (this.logger.debug("zb.rh.lg reset"), this.setRunState(s.ENUM_RUN_STATE.logout), this.resetRoom()), this.logger.debug("zb.rh.lg begin"), this.setRunState(s.ENUM_RUN_STATE.trylogin), this.stateCenter.roomid = e, this.stateCenter.token = t, this.stateCenter.third_token = t, this.stateCenter.idName = r.userID, this.stateCenter.nickName = r.userName, o.ClientUtil.registerCallback("login", {
                    success: a,
                    error: c
                }, this.stateCenter.callbackList), this.resetTryLogin(), this.onConnecting({
                    code: 0,
                    msg: ""
                }), this.tryLogin(), this.logger.info("zb.rh.lg call success")
            }, e.prototype.loginBodyData = function () {
            }, e.prototype.tryLogin = function () {
                var e = this;
                if (this.logger.debug("zb.rh.tl call"), this.stateCenter.runState === s.ENUM_RUN_STATE.trylogin) {
                    if (++this.stateCenter.tryLoginCount > s.MAX_TRY_LOGIN_COUNT) {
                        this.logger.error("zb.rh.tl fail times limit");
                        var t = this.stateCenter.lastRunState;
                        return this.setRunState(s.ENUM_RUN_STATE.logout), this.resetRoom(), void (t == s.ENUM_RUN_STATE.login ? (this.logger.error("zb.rh.tl fail and disconnect"), this.onDisconnect(s.sdkErrorList.LOGIN_DISCONNECT)) : (this.logger.info("zb.rh.tl fail and callback user"), o.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(n.liveRoomErrorList.FREQ_LIMITED)))
                    }
                    this.stateCenter.startConnceTime = (new Date).getTime(), console.warn("start connect", this.stateCenter.startConnceTime);
                    var r = 0 !== this.stateCenter.reportSeqList.login ? "kZegoTaskLoginRoom" : "kZegoTaskReLoginRoom";
                    if (this.socketCenter.isDisConnect()) {
                        this.logger.debug("zb.rh.tl need new websocket");
                        try {
                            this.socketCenter.closeSocket(), this.logger.debug("zb.rh.tl new websocket");
                            var i = this.stateCenter.tryLoginCount % 2 == 1 ? this.stateCenter.server : this.stateCenter.serverBak;
                            o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && (this.stateCenter.tryLoginCount > 1 && o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(a.REPORT_ACTION.eventEnd, "create_socket"), o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(a.REPORT_ACTION.eventStart, "create_socket"), o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(a.REPORT_ACTION.addEventMsg, "create_socket", "server", i)), this.socketCenter.createSocket(i), this.socketCenter.registerRouter("login", (function (t, r) {
                                e.handleLoginRsp(t, r)
                            })), this.socketCenter.closeHandler((function (t) {
                                e.socketCenter.closeSocket(), e.closeHandler(t)
                            })), this.socketCenter.openHandler((function () {
                                e.openHandler()
                            }))
                        } catch (e) {
                            this.logger.error("zb.rh.tl websocket err:" + e)
                        }
                    } else {
                        var c = this.loginBodyData();
                        this.logger.info("zb.rh.tl use current websocket and sent login"), o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(a.REPORT_ACTION.eventStart, "liveroom_login"), this.socketCenter.sendMessage("login", c)
                    }
                    this.stateCenter.tryLoginTimer = setTimeout((function () {
                        e.tryLogin()
                    }), s.TRY_LOGIN_INTERVAL[this.stateCenter.tryLoginCount % s.MAX_TRY_LOGIN_COUNT]), this.logger.info("zb.rh.tl call success")
                } else this.logger.error("zb.rh.tl state error")
            }, e.prototype.handleLoginRsp = function (e, t) {
                this.logger.debug("zb.rh.hlr call");
                var r = 0 !== this.stateCenter.reportSeqList.login ? "kZegoTaskLoginRoom" : "kZegoTaskReLoginRoom";
                if (o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && o.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(a.REPORT_ACTION.eventEndWithMsgInfo, "liveroom_login"), this.stateCenter.runState === s.ENUM_RUN_STATE.trylogin) {
                    if (e.header.seq === t) return 0 !== e.body.err_code ? (this.handleLoginFail(e), void this.logger.error("zb.rh.hlr server error=", e.body.err_code)) : (this.handleLoginSuccess(e), void this.logger.info("zb.rh.hlr call success."));
                    this.logger.error("zb.rh.hlr in wrong seq, local=", t, ",recv=", e.header.seq)
                } else this.logger.error("zb.rh.hlr state error")
            }, e.prototype.handleLoginFail = function (e) {
                if (this.logger.debug("zb.rh.hlf call"), o.ClientUtil.isKeepTryLogin(e.body.err_code)) this.logger.warn("zb.rh.hlf KeepTry true"); else {
                    var t = this.stateCenter.lastRunState;
                    this.setRunState(s.ENUM_RUN_STATE.logout), this.resetRoom();
                    var r = o.ClientUtil.getServerError(e.body.err_code);
                    t === s.ENUM_RUN_STATE.login ? (this.logger.info("zb.rh.hlf callback disconnect"), this.onDisconnect(r)) : (this.logger.info("zb.rh.hlf callback error"), o.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(r)), this.logger.debug("zb.rh.hlf call success")
                }
            }, e.prototype.handleLoginSuccess = function (e) {
                this.stateCenter.startloginSucTime = (new Date).getTime(), console.warn("login suc", this.stateCenter.startloginSucTime, this.stateCenter.startloginSucTime - this.stateCenter.startloginTime, this.stateCenter.startloginSucTime - this.stateCenter.startConnceTime), this.logger.info("zb.rh.hls call");
                var t = {}, r = this.stateCenter.lastRunState;
                if (this.setRunState(s.ENUM_RUN_STATE.login), this.stateCenter.userid = e.body.user_id, this.stateCenter.sessionid = e.body.session_id, this.stateCenter.anchor_info = e.body.anchor_info || this.stateCenter.anchor_info, this.stateCenter.userListInterval = e.body.userlist_interval || this.stateCenter.userListInterval, this.stateCenter.userListMergeInterval = e.body.userlist_merge_timeout || this.stateCenter.userListMergeInterval, this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.sessionid, this.stateCenter.idName, this.stateCenter.nickName, s.PROTO_VERSION), e.body.config_info && (this.logger.setRemoteLogLevel(e.body.config_info.log_level), t.log_level = e.body.config_info.log_level, "" != e.body.config_info.log_url && (this.logger.openLogServer(e.body.config_info.log_url), t.log_url = e.body.config_info.log_url)), null != e.body.ret_timestamp && "string" == typeof e.body.ret_timestamp) {
                    var i = parseFloat(e.body.ret_timestamp);
                    this.stateCenter.serverTimeOffset = 0 == i ? 0 : e.body.ret_timestamp - (new Date).getTime()
                }
                e.body.bigim_time_window && "number" == typeof e.body.bigim_time_window && (this.stateCenter.bigimTimeWindow = e.body.bigim_time_window), e.body.dati_time_window && "number" == typeof e.body.dati_time_window && (this.stateCenter.datiTimeWindow = e.body.dati_time_window), e.body.cluster_env && 1 === e.body.cluster_env && (this.stateCenter.testEnvironment = !0, t.test_environment = "true", !this.stateCenter.debugCustom && (this.stateCenter.debug = !0));
                var n = 0 !== this.stateCenter.reportSeqList.login ? "kZegoTaskLoginRoom" : "kZegoTaskReLoginRoom";
                o.ClientUtil.actionSuccessCallback(n, this.stateCenter.reportList) && o.ClientUtil.actionSuccessCallback(n, this.stateCenter.reportList)(a.REPORT_ACTION.addEventMsg, "liveroom_login", "respond_info", t), this.resetTryLogin(), this.loginSuccessCallBack(r, e)
            }, e.prototype.openHandler = function () {
                this.logger.info("zb.rh.oh websocket.onpen call");
                var e = 0 !== this.stateCenter.reportSeqList.login ? "kZegoTaskLoginRoom" : "kZegoTaskReLoginRoom";
                o.ClientUtil.actionSuccessCallback(e, this.stateCenter.reportList) && o.ClientUtil.actionSuccessCallback(e, this.stateCenter.reportList)(a.REPORT_ACTION.eventEndWithMsgInfo, "create_socket", {try_cnt: this.stateCenter.tryLoginCount}), this.socketCenter.responseHandler();
                var t = this.loginBodyData();
                this.logger.info("zb.rh.oh websocket.onpen send login"), this.stateCenter.startloginTime = (new Date).getTime(), console.warn("start login", this.stateCenter.startloginTime, this.stateCenter.startloginTime - this.stateCenter.startConnceTime), o.ClientUtil.actionSuccessCallback(e, this.stateCenter.reportList) && o.ClientUtil.actionSuccessCallback(e, this.stateCenter.reportList)(a.REPORT_ACTION.eventStart, "liveroom_login"), this.socketCenter.sendMessage("login", t), this.logger.debug("zb.rh.oh websocket.onpen call success")
            }, e.prototype.closeHandler = function (e) {
                this.logger.info("zb.rh.ws.oc msg=" + JSON.stringify(e)), this.stateCenter.runState !== s.ENUM_RUN_STATE.logout ? this.stateCenter.runState === s.ENUM_RUN_STATE.trylogin && this.stateCenter.tryLoginCount <= s.MAX_TRY_LOGIN_COUNT ? this.logger.info("zb.rh.ws.oc is called because of try login") : this.stateCenter.runState === s.ENUM_RUN_STATE.login ? (this.logger.info("zb.rh.ws.oc is called because of network broken, try again"), this.setRunState(s.ENUM_RUN_STATE.trylogin), this.resetTryLogin(), this.onConnecting({
                    code: 0,
                    msg: ""
                }), this.tryLogin()) : (this.logger.error("zb.rh.ws.oc out of think!!!"), this.setRunState(s.ENUM_RUN_STATE.logout), this.resetRoom(), this.onDisconnect(s.sdkErrorList.UNKNOWN)) : this.logger.info("zb.rh.ws.oc onclose logout flow call websocket.close")
            }, e.prototype.logout = function (e) {
                this.logger.debug("zb.rh.lo call"), this.stateCenter.runState !== s.ENUM_RUN_STATE.logout ? (this.resetRoom(e), this.logger.info("zb.rh.lo call success")) : this.logger.warn("zb.rh.lo at logout")
            }, e.prototype.fetchUserList = function (e) {
                this.logger.debug("zb.rh.ful call"), this.stateCenter.userQuerying ? this.logger.warn("zb.rh.ful is already querying") : (this.stateCenter.userQuerying = !0, this.stateCenter.userTempList = [], "V1" === s.ROOMVERSION ? this.fetchUserListWithPage(0, e || 0) : this.fetchUserListWithPageV2(0), this.logger.info("zb.rh.ful the first time call"))
            }, e.prototype.fetchUserListWithPageV2 = function (e) {
                var t = this;
                this.logger.debug("zb.rh.fulwp call"), this.socketCenter.registerRouter("user_list_v2", (function (r) {
                    t.handleFetchUserListRspV2(e, r)
                })), this.socketCenter.sendMessage("user_list_v2", {
                    marker: 0 === e ? "" : e + "",
                    mode: 0,
                    limit: 100
                }), this.logger.info("zb.rh.fulwp call success")
            }, e.prototype.fetchUserListWithPage = function (e, t) {
                var r = this;
                this.logger.debug("zb.rh.fulwp call"), this.socketCenter.registerRouter("user_list", (function (e) {
                    r.handleFetchUserListRsp(e, t)
                })), this.socketCenter.sendMessage("user_list", {
                    user_index: e,
                    sort_type: 0
                }), this.logger.info("zb.rh.fulwp call success")
            }, e.prototype.handleFetchUserListRspV2 = function (e, t) {
                if (this.logger.debug("zb.rh.hfulr call"), 0 != t.body.err_code) return this.stateCenter.userQuerying = !1, this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval, void this.logger.info("zb.rh.hfulr fetch error " + t.body.err_code);
                if (this.stateCenter.userStateUpdate) {
                    if (this.stateCenter.userTempList = i(this.stateCenter.userTempList, t.body.user_baseinfos), e != t.body.marker) return this.logger.warn("zb.rh.hfulr fetch another page"), void this.fetchUserListWithPageV2(e + 1);
                    this.stateCenter.userSeq = t.body.server_user_seq, this.logger.info("zb.rh.hfulr set user Seq " + this.stateCenter.userSeq);
                    for (var r = [], s = 0; s < this.stateCenter.userTempList.length; s++) {
                        var o = {
                            userId: this.stateCenter.userTempList[s].id_name,
                            userName: this.stateCenter.userTempList[s].nick_name
                        };
                        r.push(o)
                    }
                    this.stateCenter.userQuerying = !1, this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval, this.stateCenter.userTempList = [], this.logger.info("zb.rh.hfulr call success user_list " + r + " count " + r.length)
                }
            }, e.prototype.handleFetchUserListRsp = function (e, t) {
                var r = this;
                if (this.logger.debug("zb.rh.hfulr call"), 0 != e.body.err_code) return this.stateCenter.userQuerying = !1, this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval, void this.logger.info("zb.rh.hfulr fetch error " + e.body.err_code);
                if (this.stateCenter.userStateUpdate) {
                    this.stateCenter.userTempList = i(this.stateCenter.userTempList, e.body.user_baseinfos);
                    var n = e.body.ret_user_index;
                    if (n != e.body.server_user_index) return this.logger.warn("zb.rh.hfulr fetch another page"), void this.fetchUserListWithPage(n + 1, t);
                    this.stateCenter.userSeq = e.body.server_user_seq, this.logger.info("zb.rh.hfulr set user Seq " + this.stateCenter.userSeq);
                    for (var a = [], c = 0; c < this.stateCenter.userTempList.length; c++) {
                        var d = {
                            userID: this.stateCenter.userTempList[c].id_name,
                            userName: this.stateCenter.userTempList[c].nick_name
                        };
                        a.push(d)
                    }
                    t == s.ENUM_RUN_STATE.login ? (o.ClientUtil.mergeUserList(this.logger, this.stateCenter.userList, a, (function (e, t) {
                        0 !== e.length && r.onUserStateUpdate(r.stateCenter.roomid, "ADD", e), 0 !== t.length && r.onUserStateUpdate(r.stateCenter.roomid, "DELETE", t)
                    })), this.stateCenter.userList = a) : (this.stateCenter.userList = a, 0 !== a.length && this.onUserStateUpdate(this.stateCenter.roomid, "ADD", a)), this.stateCenter.userQuerying = !1, this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval, this.stateCenter.userTempList = [], this.logger.info("zb.rh.hfulr call success user_list " + a + " count " + a.length)
                }
            }, e.prototype.handleLogoutRsp = function (e) {
                this.logger.debug("zb.rh.hlor result=", e.body.err_code)
            }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
                if (this.logger.info("zb.rh.hpus call"), this.stateCenter.isLogin()) if (this.stateCenter.userStateUpdate) if (this.stateCenter.userSeq + e.body.user_actions.length === e.body.user_list_seq) {
                    this.stateCenter.userSeq = e.body.user_list_seq, this.logger.debug("zb.rh.hpus push userSeq " + this.stateCenter.userSeq);
                    for (var t = [], r = 0; r < e.body.user_actions.length; r++) {
                        var i = {
                            action: e.body.user_actions[r].Action,
                            idName: e.body.user_actions[r].IdName,
                            nickName: e.body.user_actions[r].NickName,
                            loginTime: e.body.user_actions[r].LoginTime
                        };
                        t.push(i)
                    }
                    var s = [], o = [];
                    t.forEach((function (e) {
                        1 == e.action ? s.push({
                            userID: e.idName,
                            userName: e.nickName
                        }) : 2 == e.action && o.push({userID: e.idName, userName: e.nickName})
                    })), this.stateCenter.userList = this.stateCenter.userList.concat(s).filter((function (e) {
                        return !o.some((function (t) {
                            return t.userID == e.userID
                        }))
                    })), 0 !== s.length && this.onUserStateUpdate(e.body.room_id, "ADD", s), 0 !== o.length && this.onUserStateUpdate(e.body.room_id, "DELETE", o), this.logger.info("zb.rh.hpus call success")
                } else this.mergeUserByUserSeq(e.body.user_list_seq, e.body.user_actions); else this.logger.info("zb.rh.hpus no userStateUpdate flag"); else this.logger.error("zb.rh.hpus not login")
            }, e.prototype.onUserStateUpdate = function (e, t, r) {
            }, e.prototype.mergeUserByUserSeq = function (e, t) {
                var r = this;
                this.stateCenter.userSeqMergeMap || (this.logger.warn("zb.rh.hpus new merge userlist " + this.stateCenter.userSeq + " server " + e), this.stateCenter.userSeqMergeMap = {}, this.stateCenter.userSeqMergeTimer && clearTimeout(this.stateCenter.userSeqMergeTimer), this.stateCenter.userSeqMergeTimer = setTimeout((function () {
                    var e = Object.keys(r.stateCenter.userSeqMergeMap).map((function (e) {
                        return +e
                    })).sort((function (e, t) {
                        return e - t
                    }));
                    if (e[e.length - 1] - e[0] + 1 === e.length) r.mergeUser(e); else {
                        r.stateCenter.userSeqMergeMap = null;
                        var t = r.stateCenter.lastUserQueryTime - Date.now();
                        r.logger.info("zb.rh.hpus fetch merge userlist " + r.stateCenter.userSeq + " userSeqList " + e.join(",") + " wait " + t), t > 0 ? (r.stateCenter.userQueryTimer && clearTimeout(r.stateCenter.userQueryTimer), r.stateCenter.userQueryTimer = setTimeout((function () {
                            r.fetchUserList()
                        }), t)) : r.fetchUserList()
                    }
                }), this.stateCenter.userListMergeInterval)), this.logger.warn("zb.rh.hpus merge userlist " + this.stateCenter.userSeq + " server " + e + " userlist " + t.length), this.stateCenter.userSeqMergeMap[e] = t
            }, e.prototype.mergeUser = function (e) {
                var t = this;
                this.logger.info("zb.rh.hpus merge userlist " + this.stateCenter.userSeq + " userSeqList " + e.join(",")), this.stateCenter.userSeq = e[e.length - 1];
                var r = {};
                e.forEach((function (e) {
                    t.stateCenter.userSeqMergeMap[e].forEach((function (e) {
                        r[e.IdName] = e
                    }))
                })), this.stateCenter.userSeqMergeMap = null;
                var i = Object.values(r).map((function (e) {
                    return {
                        action: e.Action,
                        idName: e.IdName,
                        nickName: e.NickName,
                        role: e.Role,
                        loginTime: e.LoginTime ? String(e.LoginTime) : ""
                    }
                }));
                i.sort((function (e, t) {
                    return e.loginTime.localeCompare(t.loginTime)
                }));
                var s = [], o = [];
                i.forEach((function (e) {
                    1 == e.action ? s.push({
                        userID: e.idName,
                        userName: e.nickName
                    }) : 2 == e.action && o.push({userID: e.idName, userName: e.nickName})
                })), this.stateCenter.userList = this.stateCenter.userList.concat(s).filter((function (e) {
                    return !o.some((function (t) {
                        return t.userID == e.userID
                    }))
                })), 0 !== s.length && this.onUserStateUpdate(this.stateCenter.roomid, "ADD", s), 0 !== o.length && this.onUserStateUpdate(this.stateCenter.roomid, "DELETE", o)
            }, e
        }();
        t.RoomHandler = c
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(3), o = r(1), n = r(2), a = function () {
            function e(e, t, r, i) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t, this.dataReport = i
            }

            return e.prototype.setCDNInfo = function (e, t) {
            }, e.prototype.onStreamUpdated = function (e, t, r) {
            }, e.prototype.onStreamExtraInfoUpdated = function (e, t) {
            }, e.prototype.handleStreamStart = function (e, t) {
                var r = this;
                if (this.stateCenter.streamQuerying = !1, this.socketCenter.registerRouter("stream", (function (e) {
                    r.handleStreamUpdateRsp(e)
                })), this.socketCenter.registerRouter("push_stream_update", (function (e) {
                    r.handlePushStreamUpdateMsg(e)
                })), this.stateCenter.reportSeqList.relogin && (this.dataReport.uploadReport(this.stateCenter.reportSeqList.relogin), this.stateCenter.reportSeqList.relogin = 0, s.ClientUtil.unregisterCallback("kZegoTaskReLoginRoom", this.stateCenter.reportList)), this.stateCenter.actionListener("roomStateUpdate", this.stateCenter.roomid, "CONNECTED", 0, ""), e == i.ENUM_RUN_STATE.login) this.logger.info("zb.sh.hss recover from disconnect so call streamupdate"), this.handleFullUpdateStream(t.body.stream_seq, t.body.stream_info || []); else {
                    this.logger.info("zb.sh.hss success callback user"), this.stateCenter.streamList = t.body.stream_info || [], this.stateCenter.streamSeq = t.body.stream_seq;
                    for (var o = 0; o < this.stateCenter.streamList.length; o++) this.stateCenter.streamList[o].anchor_id_name == this.stateCenter.idName && (this.updateStreamInfo(this.stateCenter.streamList[o].stream_id, i.ENUM_STREAM_SUB_CMD.liveEnd), this.stateCenter.streamList.splice(o--, 1));
                    var n = this.makeCallbackStreamList(this.stateCenter.streamList).map((function (e) {
                        return {
                            streamID: e.streamID,
                            user: e.user,
                            extraInfo: e.extraInfo,
                            urlsFLV: e.urlFlv,
                            urlsRTMP: e.urlRtmp,
                            urlsHLS: e.urlHls,
                            urlsHttpsFLV: e.urlHttpsFlv,
                            urlsHttpsHLS: e.urlHttpsHls
                        }
                    }));
                    s.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList) && s.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList)(!0), n.length > 0 && this.onStreamUpdated(this.stateCenter.roomid, i.ENUM_STREAM_UPDATE_TYPE.added, n)
                }
            }, e.prototype.onPublishStateUpdate = function (e, t, r) {
            }, e.prototype.updateStreamInfo = function (e, t, r, i) {
                var s = this;
                void 0 === r && (r = ""), this.logger.debug("zb.sh.usi call");
                var o = {stream_id: e, extra_info: r}, n = {sub_cmd: t, stream_msg: JSON.stringify(o)};
                this.socketCenter.registerRouter("stream", (function (e) {
                    s.handleStreamUpdateRsp(e)
                })), this.socketCenter.sendMessage("stream", n, void 0, i), this.logger.info("zb.sh.usi call success cmd " + t)
            }, e.prototype.handleStreamUpdateRsp = function (e) {
                if (this.stateCenter.isLogin()) if (0 == e.body.err_code) {
                    this.logger.info("zb.sh.hsur stream seq " + this.stateCenter.streamSeq + " server seq " + e.body.stream_seq), this.stateCenter.streamSeq = e.body.stream_seq;
                    for (var t = 0; t < e.body.stream_info.length; t++) {
                        var r = e.body.stream_info[t].stream_id;
                        if (!this.stateCenter.publishStreamList[r]) return void this.logger.info("hsur.0 stream is not exist");
                        this.stateCenter.publishStreamList[r].state == i.ENUM_PUBLISH_STREAM_STATE.update_info && (this.stateCenter.publishStreamList[r].state = i.ENUM_PUBLISH_STREAM_STATE.publishing, this.onPublishStateUpdate(0, r, {
                            code: 0,
                            msg: ""
                        }))
                    }
                } else this.logger.error("zb.sh.hsur stream update error " + e.body.err_code); else this.logger.error("zb.sh.hsur not login")
            }, e.prototype.handleFetchStreamListRsp = function (e) {
                this.logger.info("zb.sh.hfslr call"), this.stateCenter.streamQuerying = !1, 0 === e.body.err_code ? this.stateCenter.streamSeq !== e.body.stream_seq ? (this.handleFullUpdateStream(e.body.stream_seq, e.body.stream_info), this.logger.debug("zb.sh.hfslr call success")) : this.logger.info("zb.sh.hfslr same seq") : this.logger.info("zb.sh.hfslr server error=", e.body.err_code)
            }, e.prototype.handleFullUpdateStream = function (e, t) {
                var r = this;
                this.logger.debug("zb.sh.hfus call"), this.stateCenter.streamSeq = e, this.logger.debug("zb.sh.hfus server seq " + this.stateCenter.streamSeq), s.ClientUtil.mergeStreamList(this.logger, this.stateCenter.idName, this.stateCenter.streamList, t, (function (e, t, s) {
                    0 !== e.length && (r.logger.debug("zb.sh.hfus callback addstream"), r.onStreamUpdated(r.stateCenter.roomid, i.ENUM_STREAM_UPDATE_TYPE.added, r.makeCallbackStreamList(e))), 0 !== t.length && (r.logger.debug("zb.sh.hfus callback delstream"), r.onStreamUpdated(r.stateCenter.roomid, i.ENUM_STREAM_UPDATE_TYPE.deleted, r.makeCallbackStreamList(t))), 0 !== s.length && (r.logger.debug("zb.sh.hfus callback updatestream"), r.onStreamExtraInfoUpdated(r.stateCenter.roomid, r.makeCallbackStreamList(s)))
                })), this.logger.info("zb.sh.hfus call success")
            }, e.prototype.handlePushStreamUpdateMsg = function (e) {
                if (this.logger.info("zb.sh.hpsum call"), e.body.stream_info && 0 !== e.body.stream_info.length) {
                    if (e.body.stream_info.length + this.stateCenter.streamSeq !== e.body.stream_seq) return this.logger.info("zb.sh.hpsum call updatestream"), void this.fetchStreamList();
                    switch (this.stateCenter.streamSeq = e.body.stream_seq, e.body.stream_cmd) {
                        case i.ENUM_STREAM_UPDATE_CMD.added:
                            this.handleAddedStreamList(e.body.stream_info);
                            break;
                        case i.ENUM_STREAM_UPDATE_CMD.deleted:
                            this.handleDeletedStreamList(e.body.stream_info);
                            break;
                        case i.ENUM_STREAM_UPDATE_CMD.updated:
                            this.handleUpdatedStreamList(e.body.stream_info)
                    }
                    this.logger.info("zb.sh.hpsum call success")
                } else this.logger.info("zb.sh.hpsum, emtpy list")
            }, e.prototype.handleAddedStreamList = function (e) {
                this.logger.debug("zb.sh.hasl call");
                for (var t, r = [], s = 0; s < e.length; s++) if (e[s].anchor_id_name != this.stateCenter.idName) {
                    t = !1;
                    for (var o = 0; o < this.stateCenter.streamList.length; o++) if (e[s].stream_id === this.stateCenter.streamList[o].stream_id) {
                        t = !0;
                        break
                    }
                    t || r.push(e[s])
                } else this.logger.debug("hdsl.0 have self stream added");
                if (0 !== r.length) {
                    this.logger.debug("zb.sh.hasl callback addstream");
                    for (var n = 0; n < r.length; n++) this.stateCenter.streamList.push(r[n]);
                    this.onStreamUpdated(this.stateCenter.roomid, i.ENUM_STREAM_UPDATE_TYPE.added, this.makeCallbackStreamList(r))
                }
                this.logger.info("zb.sh.hasl call success")
            }, e.prototype.handleDeletedStreamList = function (e) {
                this.logger.debug("zb.sh.hdsl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName) {
                    for (var s = this.stateCenter.streamList.length - 1; s >= 0; s--) if (e[r].stream_id === this.stateCenter.streamList[s].stream_id) {
                        this.stateCenter.streamList.splice(s, 1), t.push(e[r]);
                        break
                    }
                } else this.logger.debug("zb.sh.hdsl have self stream deleted");
                0 !== t.length && (this.logger.debug("zb.sh.hdsl callback delstream"), this.onStreamUpdated(this.stateCenter.roomid, i.ENUM_STREAM_UPDATE_TYPE.deleted, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.hdsl call")
            }, e.prototype.handleUpdatedStreamList = function (e) {
                this.logger.debug("zb.sh.husl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName) {
                    for (var i = 0; i < this.stateCenter.streamList.length; i++) if (e[r].stream_id === this.stateCenter.streamList[i].stream_id) {
                        e[r].extra_info !== this.stateCenter.streamList[i].extra_info && (this.stateCenter.streamList[i] = e[r], t.push(e[r]));
                        break
                    }
                } else this.logger.debug("hsul.0 have self stream updated");
                0 !== t.length && (this.logger.debug("zb.sh.husl callback updatestream"), this.onStreamExtraInfoUpdated(this.stateCenter.roomid, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.husl call success")
            }, e.prototype.fetchStreamList = function () {
                if (this.logger.info("zb.sh.fsl call"), this.stateCenter.isLogin()) if (this.stateCenter.streamQuerying) this.logger.info("zb.sh.fsl already doing"); else {
                    this.stateCenter.streamQuerying = !0, this.logger.debug("zb.sh.fsl send fetch request");
                    this.socketCenter.registerRouter("stream_info", this.handleFetchStreamListRsp), this.socketCenter.sendMessage("stream_info", {reserve: 0}), this.logger.debug("zb.sh.fsl call success")
                } else this.logger.info("zb.sh.fsl state error")
            }, e.prototype.makeCallbackStreamList = function (e) {
                var t = [];
                if (e && e.length > 0) for (var r = 0; r < e.length; r++) {
                    var i = {
                        user: {userID: e[r].anchor_id_name, userName: e[r].anchor_nick_name},
                        extraInfo: e[r].extra_info,
                        streamID: e[r].stream_id,
                        roomID: "",
                        urlFlv: "",
                        urlRtmp: "",
                        urlHls: "",
                        urlHttpsFlv: "",
                        urlHttpsHls: ""
                    };
                    this.setCDNInfo(i, e[r]), t.push(i)
                }
                return t
            }, e.prototype.updateMixStream = function (e, t, r) {
                var a, c = this;
                this.logger.info("zb.sh.ums call");
                if (!e.taskID) return this.logger.error("zb.sh.ums no taskId found"), r({
                    errorCode: o.commonErrorList.PARAM.code,
                    extendedData: ""
                }), !1;
                if (!e.inputList || 0 == e.inputList.length) return this.logger.error("zb.sh.ums input list wrong"), r({
                    errorCode: o.commonErrorList.PARAM.code,
                    extendedData: ""
                }), !1;
                if (!e.outputList || 0 == e.outputList.length) return this.logger.error("zb.sh.ums no output list found"), r({
                    errorCode: o.commonErrorList.MIX_OUTPUT.code,
                    extendedData: ""
                }), !1;
                if (!e.outputConfig || "object" != typeof e.outputConfig) return this.logger.error("zb.sh.ums no output config found"), r({
                    errorCode: o.commonErrorList.MIX_OUTPUT.code,
                    extendedData: ""
                }), !1;
                if (!e.outputConfig.outputBitrate || "number" != typeof e.outputConfig.outputBitrate) return this.logger.error("zb.sh.ums bitrate param is required and must be number"), r({
                    errorCode: o.commonErrorList.PARAM.code,
                    extendedData: ""
                }), !1;
                if (!e.outputConfig.outputFPS || "number" != typeof e.outputConfig.outputFPS) return this.logger.error("zb.sh.ums fps param is required and must be number"), r({
                    errorCode: o.commonErrorList.PARAM.code,
                    extendedData: ""
                }), !1;
                if (!e.outputConfig.outputWidth || "number" != typeof e.outputConfig.outputWidth) return this.logger.error("zb.sh.ums width param is required and must be number"), r({
                    errorCode: o.commonErrorList.PARAM.code,
                    extendedData: ""
                }), !1;
                if (!e.outputConfig.outputHeight || "number" != typeof e.outputConfig.outputHeight) return this.logger.error("zb.sh.ums height param is required and must be number"), r({
                    errorCode: o.commonErrorList.PARAM.code,
                    extendedData: ""
                }), !1;
                var d = 0;
                e.outputConfig.singleStreamPassThrough && "boolean" == typeof e.outputConfig.singleStreamPassThrough && (d = e.outputConfig.singleStreamPassThrough ? 1 : 0);
                var l = {
                    task_id: e.taskID,
                    id_name: this.stateCenter.idName,
                    live_channel: this.stateCenter.roomid,
                    appid: this.stateCenter.appid,
                    version: i.PROTO_VERSION,
                    bypass: d
                }, u = this.stateCenter.mixStreamAdvance;
                u && (u.videoCodec && (l.extra_params = [{
                    key: "video_encode",
                    value: u.videoCodec
                }]), u.backgroundColor && (l.output_bg_color = u.backgroundColor), u.backgroundImage && (l.output_bg_image = u.backgroundImage), u.waterMark && (l.watermark = u.waterMark), u.extraParams && (!l.extra_params && (l.extra_params = []), (a = l.extra_params).push.apply(a, u.extraParams)));
                for (var h = [], p = 0; p < e.inputList.length; p++) {
                    var g = e.inputList[p], m = g.streamID;
                    this.stateCenter.testEnvironment && (m = "zegotest-" + this.stateCenter.appid + "-" + g.streamID), h.push({
                        stream_id: m,
                        content_control: "AUDIO" === g.contentType ? 2 : 0,
                        rect: {
                            layer: p,
                            top: g.layout.top,
                            left: g.layout.left,
                            bottom: g.layout.bottom,
                            right: g.layout.right
                        }
                    })
                }
                l.MixInput = h, s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList)(n.REPORT_ACTION.addMsgInfo, void 0, {
                    mix_stream_id: e.taskID,
                    stream_cnt: h.length,
                    input_stream_list: h
                });
                var f = [];
                e.outputList.forEach((function (t) {
                    var i = {}, s = "";
                    if ("string" == typeof t) s = t; else {
                        if ("object" != typeof t || !t.target) return c.logger.error("zb.sh.ums output target required"), r({
                            errorCode: o.commonErrorList.MIX_OUTPUT.code,
                            extendedData: ""
                        }), !1;
                        s = t.target
                    }
                    s.startsWith("rtmp://") || s.startsWith("https://") && s.endsWith(".flv") || s.startsWith("https://") && s.endsWith(".m3u8") ? i.mixurl = s : c.stateCenter.testEnvironment ? i.stream_id = "zegotest-" + c.stateCenter.appid + "-" + s : i.stream_id = s, i.bitrate = 1e3 * e.outputConfig.outputBitrate, i.fps = e.outputConfig.outputFPS, i.width = e.outputConfig.outputWidth, i.height = e.outputConfig.outputHeight, e.outputConfig.outputAudioCodecID && (i.audio_enc_id = e.outputConfig.outputAudioCodecID), "vp8" === u.videoCodec ? i.audio_enc_id = 3 : "h264" === u.videoCodec && (i.audio_enc_id = 0), e.outputConfig.outputAudioBitrate && (i.audio_bitrate = 1e3 * e.outputConfig.outputAudioBitrate), e.outputConfig.outputAudioChannels && (i.audio_channel_cnt = e.outputConfig.outputAudioChannels), c.stateCenter.testEnvironment ? i.testenv = 1 : i.testenv = 0, f.push(i)
                })), l.MixOutput = f, s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList)(n.REPORT_ACTION.addMsgInfo, void 0, {output_target_list: f});
                var v = {channel: "zeus", cmd: "start_mix", req_body: JSON.stringify(l)};
                return this.logger.debug("zb.sh.ums send command"), this.socketCenter.sendMessage("biz_channel", v, (function (e, o, n) {
                    c.logger.debug("zb.sh.ums receive message");
                    var a = "zegotest-" + c.stateCenter.appid + "-";
                    if (0 != n.length) {
                        for (var d = JSON.parse(n), l = [], u = 0; u < d.play.length; u++) {
                            var h = {rtmpURL: "", hlsURL: "", flvURL: ""}, p = d.play[u].stream_alias || "";
                            c.stateCenter.testEnvironment && p && p.startsWith(a) && (p = p.slice(a.length)), h.streamID = p, d.play[u].rtmp_url && d.play[u].rtmp_url.length > 0 && (h.rtmpURL = d.play[u].rtmp_url), d.play[u].hls_url && d.play[u].hls_url.length > 0 && (h.hlsURL = d.play[u].hls_url), d.play[u].hdl_url && d.play[u].hdl_url.length > 0 && (h.flvURL = d.play[u].hdl_url), l.push(h)
                        }
                        if (t) {
                            var g = {mixerOutputList: l};
                            t({errorCode: 0, extendedData: JSON.stringify(g)})
                        }
                    } else r && r({
                        errorCode: s.ClientUtil.getServerError(i.MIXSTREAM_ERROR_CODE + 1).code,
                        extendedData: ""
                    })
                }), (function (e, t, o) {
                    if ("number" == typeof e) {
                        c.logger.debug("zb.sh.ums error: " + e);
                        var n = [];
                        if (1000000150 == e && 0 != o.length) for (var a = JSON.parse(o), d = "zegotest-" + c.stateCenter.appid + "-", l = 0; l < a.non_exist_streams.length; l++) {
                            var u = a.non_exist_streams[l];
                            c.stateCenter.testEnvironment && u.startsWith(d) ? n.push(u.slice(d.length)) : n.push(u)
                        }
                        r && r({
                            errorCode: s.ClientUtil.getServerError(i.MIXSTREAM_ERROR_CODE + e).code,
                            extendedData: ""
                        })
                    } else c.logger.debug("zb.sh.ums error code " + e.code), r && r({
                        errorCode: e.code,
                        extendedData: ""
                    })
                })), !0
            }, e.prototype.setMixerTaskConfig = function (e) {
                var t = this;
                return new Promise((function (r, i) {
                    var a = {}, c = {};
                    if (e && e.videoCodec) {
                        if ("h264" !== e.videoCodec && "vp8" !== e.videoCodec) return t.logger.error("zb.sh.ums param videoCode error"), i({
                            errorCode: o.commonErrorList.MIX_VIDEOC,
                            extendedData: ""
                        }), !1;
                        "vp8" == e.videoCodec && !0, a.videoCodec = e.videoCodec, c.video_codec = e.videoCodec
                    }
                    if (e.backgroundColor) {
                        if ("number" != typeof e.backgroundColor) return t.logger.error("zb.sh.ums param outputBgColor error"), i({
                            errorCode: o.commonErrorList.PARAM,
                            extendedData: ""
                        }), !1;
                        a.backgroundColor = e.backgroundColor, c.background_color = e.backgroundColor
                    }
                    if (e.backgroundImage) {
                        if ("string" != typeof e.backgroundImage || !e.backgroundImage.startsWith("preset-id://")) return t.logger.error("zb.sh.ums param outputBgImage error"), i({
                            errorCode: o.commonErrorList.PARAM,
                            extendedData: ""
                        }), !1;
                        a.backgroundImage = e.backgroundImage, c.background_image = e.backgroundImage
                    }
                    e.waterMark && (a.waterMark = e.waterMark, c.water_mark = e.waterMark), t.stateCenter.mixStreamAdvance = a, s.ClientUtil.actionSuccessCallback("kZegoTaskMixConfig", t.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskMixConfig", t.stateCenter.reportList)(n.REPORT_ACTION.addMsgInfo, void 0, {config: c}), r({
                        errorCode: 0,
                        extendedData: ""
                    })
                }))
            }, e.prototype.publishTarget = function (e, t, r) {
                var o = this;
                if (-1 != ["addpush", "delpush", "clearpush"].indexOf(e.type)) {
                    this.logger.info("zb.sh.ptcall");
                    var n = Math.ceil((new Date).getTime() / 1e3), a = e.streamID;
                    this.stateCenter.testEnvironment && (a = "zegotest-" + this.stateCenter.appid + "-" + e.streamID);
                    var c = {
                        appid: this.stateCenter.appid,
                        biz_type: 0,
                        timestamp: n,
                        signature: e.signature,
                        seq: this.stateCenter.cdnSeq++,
                        version: 1 * i.PROTO_VERSION,
                        stream_id: a,
                        pushurl: e.pushUrl
                    }, d = {channel: "media", cmd: e.type, req_body: JSON.stringify(c)};
                    this.logger.debug("zb.sh.pt send command"), this.socketCenter.sendMessage("biz_channel", d, (function (n, a, c) {
                        if (o.logger.debug("zb.sh.pt receive message"), 0 != c.length) {
                            var d = JSON.parse(c), l = d.code, u = d.message;
                            if (l && 0 != l) return o.logger.error("zb.sh.pt " + e.type + " error code: " + l + " " + u), void (r && r({errorCode: l}));
                            o.logger.info("zb.sh.pt " + e.type + " success"), t && t({errorCode: 0})
                        } else r && r({errorCode: s.ClientUtil.getServerError(i.MIXSTREAM_ERROR_CODE + 1).code})
                    }), (function (e, t, i) {
                        o.logger.debug("zb.sh.pt error: " + r);
                        var s = "";
                        2001 == e ? s = "invalid channel" : 2002 == e && (s = "bizchannel error"), o.logger.error("zb.sh.pt " + s), r && r({errorCode: e})
                    }))
                } else this.logger.error("zb.sh.pt cdn push type error")
            }, e.prototype.stopMixStream = function (e, t, r) {
                var n = this;
                this.logger.info("zb.sh.sms call");
                var a = {
                    id_name: this.stateCenter.idName,
                    live_channel: this.stateCenter.roomid,
                    appid: this.stateCenter.appid,
                    version: i.PROTO_VERSION,
                    task_id: e
                }, c = {channel: "zeus", cmd: "stop_mix", req_body: JSON.stringify(a)};
                return this.socketCenter.sendMessage("biz_channel", c, (function () {
                    t && t({errorCode: 0})
                }), (function (e) {
                    "number" == typeof e ? r && r({
                        errorCode: s.ClientUtil.getServerError(i.MIXSTREAM_ERROR_CODE + e).code,
                        extendedData: ""
                    }) : (n.logger.error("zb.sh.sms stop mix fail " + JSON.stringify(e)), r && r({
                        errorCode: o.commonErrorList.STOP_MIX_FAIL.code,
                        extendedData: ""
                    }))
                })), !0
            }, e.prototype.updateStreamExtraInfo = function (e, t) {
                return this.logger.info("zb.sh.usei call"), this.stateCenter.publishStreamList[e] && (this.stateCenter.publishStreamList[e].extra_info = t, this.stateCenter.publishStreamList[e].state >= i.ENUM_PUBLISH_STREAM_STATE.update_info && this.updateStreamInfo(e, i.ENUM_STREAM_SUB_CMD.liveUpdate, t)), !0
            }, e
        }();
        t.StreamHandler = a
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(3), o = r(1), n = r(2), a = r(4), c = function () {
            function e(e, t, r, i) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t, this.dataReport = i
            }

            return e.prototype.resetHeartbeat = function () {
                this.logger.debug("zb.hb.rht call"), clearTimeout(this.stateCenter.heartbeatTimer), this.stateCenter.heartbeatTimer = null, this.stateCenter.tryHeartbeatCount = 0, this.logger.debug("zb.hb.rht call success")
            }, e.prototype.hbLogout = function (e) {
            }, e.prototype.start = function (e) {
                var t = this;
                this.logger.debug("zb.hb.sht call");
                var r = n.getReportSeq();
                if (this.dataReport.newReport(r, a.eventList.kZegoTaskLiveRoomhHB), this.dataReport.addMsgInfo(r, {room_sid: this.stateCenter.sessionid}), !this.stateCenter.isLogin()) return this.logger.error("zb.hb.sht state error"), this.dataReport.addMsgInfo(r, {
                    error: a.errorList.kLiveRoomNotLoginError.code,
                    message: a.errorList.kLiveRoomNotLoginError.message
                }), void this.dataReport.uploadReport(r);
                if (++this.stateCenter.tryHeartbeatCount > 3) return this.logger.error("zb.hb.sht come to try limit"), this.dataReport.addMsgInfo(r, {
                    error: a.errorList.kLiveRoomHBTimeoutError.code,
                    message: a.errorList.kLiveRoomHBTimeoutError.message
                }), this.dataReport.uploadReport(r), void this.hbLogout(o.liveRoomErrorList.HEARTBEAT_TIMEOUT);
                this.logger.debug("zb.hb.sht send packet");
                this.socketCenter.registerRouter("hb", (function (e) {
                    if (0 !== e.body.err_code) {
                        var i = s.ClientUtil.decodeServerError(e.body.err_code, e.body.err_message);
                        t.dataReport.addMsgInfo(r, {error: i.code, message: i.message})
                    }
                    t.dataReport.uploadReport(r), t.handleHeartbeatRsp(e)
                })), this.socketCenter.sendMessage("hb", {reserve: 0}), this.logger.debug("zb.hb.sht call success"), this.stateCenter.heartbeatInterval = e, this.stateCenter.heartbeatTimer = setTimeout((function () {
                    t.start(t.stateCenter.heartbeatInterval)
                }), this.stateCenter.heartbeatInterval)
            }, e.prototype.handleHeartbeatRsp = function (e) {
                if (this.logger.debug("zb.hb.hhbr call"), 0 !== e.body.err_code) return this.logger.error("zb.hb.hhbr call disconnect, server error=", e.body.err_code), void this.hbLogout(s.ClientUtil.getServerError(e.body.err_code));
                for (var t in this.stateCenter.tryHeartbeatCount = 0, this.stateCenter.heartbeatInterval = e.body.hearbeat_interval, this.stateCenter.heartbeatInterval < i.MINIUM_HEARTBEAT_INTERVAL && (this.stateCenter.heartbeatInterval = i.MINIUM_HEARTBEAT_INTERVAL), e.body.bigim_time_window && "number" == typeof e.body.bigim_time_window && (this.stateCenter.bigimTimeWindow = e.body.bigim_time_window), e.body.dati_time_window && "number" == typeof e.body.dati_time_window && (this.stateCenter.datiTimeWindow = e.body.dati_time_window), this.ReliableMessageHandler(e), this.fetchStreamList(e), this.patchUserList(e), this.stateCenter.publishStreamList) this.stateCenter.publishStreamList[t].state == i.ENUM_PUBLISH_STREAM_STATE.update_info && (this.logger.info("zb.hb.hhbr try to update stream info"), this.updateStreamInfo(t, i.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[t].extra_info));
                null != e.body.online_count && 0 != e.body.online_count && this.onUpdateOnlineCount(this.stateCenter.roomid, e.body.online_count), this.logger.debug("zb.hb.hhbr call success")
            }, e.prototype.ReliableMessageHandler = function (e) {
                var t = this;
                if (e.body.trans_seqs) for (var r = 0; r < e.body.trans_seqs.length; r++) {
                    var i = e.body.trans_seqs[r].trans_channel, s = e.body.trans_seqs[r].trans_seq_array;
                    (s = s.filter((function (e) {
                        var r = e.trans_type, i = e.trans_seq;
                        return !t.stateCenter.transSeqMap[r] || t.stateCenter.transSeqMap[r].seq !== i
                    }))).length > 0 && this.fetchReliableMessage(i, s)
                }
            }, e.prototype.fetchReliableMessage = function (e, t) {
                var r = this;
                this.logger.debug("zb.hb.frm call");
                var i = {trans_channel: e, fetch_array: t};
                this.socketCenter.registerRouter("trans_fetch", (function (e) {
                    r.handleFetchTransRsp(e)
                })), this.socketCenter.sendMessage("trans_fetch", i), this.logger.debug("zb.hb.frm call success")
            }, e.prototype.handleFetchTransRsp = function (e) {
                var t = this;
                this.stateCenter.isLogin() ? 0 == e.body.err_code ? e.body.trans_fetch_results.forEach((function (r) {
                    var i = r.trans_type, s = r.trans_seq;
                    t.stateCenter.transSeqMap[i] = {seq: s}, e.body.trans_user_idname != t.stateCenter.idName && t.onRecvReliableMessage(i, s, r.trans_data), t.logger.debug("zb.hb.hftr trans " + i + " seq " + s)
                })) : this.logger.error("zb.hb.hftr trans send error " + e.body.err_code) : this.logger.error("zb.hb.hftr not login")
            }, e.prototype.fetchStreamList = function (e) {
                var t = this;
                e.body.stream_seq !== this.stateCenter.streamSeq && (this.logger.debug("zb.hb.fsl current seq " + this.stateCenter.streamSeq + " server Seq " + e.body.stream_seq), this.logger.debug("zb.hb.fsl call"), this.stateCenter.isLogin() ? this.stateCenter.streamQuerying ? this.logger.warn("zb.hb.fsl already doing") : (this.stateCenter.streamQuerying = !0, this.logger.debug("zb.hb.fsl send fetch request"), this.socketCenter.registerRouter("stream_info", (function (e) {
                    t.handleFetchStreamListRsp(e)
                })), this.socketCenter.sendMessage("stream_info", {reserve: 0}), this.logger.debug("zb.hb.fsl call success")) : this.logger.error("zb.hb.fsl state error"))
            }, e.prototype.patchUserList = function (e) {
                var t = this;
                if (e.body.server_user_seq !== this.stateCenter.userSeq && this.stateCenter.userStateUpdate && !this.stateCenter.userSeqMergeMap) {
                    var r = this.stateCenter.lastUserQueryTime - Date.now();
                    this.logger.info("zb.hb.hhbr call update user " + this.stateCenter.userSeq + " server " + e.body.server_user_seq + " wait " + r), r > 0 ? (this.stateCenter.userQueryTimer && clearTimeout(this.stateCenter.userQueryTimer), this.stateCenter.userQueryTimer = setTimeout((function () {
                        t.fetchUserList()
                    }), r)) : this.fetchUserList()
                }
            }, e.prototype.handleFetchStreamListRsp = function (e) {
            }, e.prototype.fetchUserList = function () {
            }, e.prototype.updateStreamInfo = function (e, t, r, i) {
                void 0 === r && (r = "")
            }, e.prototype.onUpdateOnlineCount = function (e, t) {
            }, e.prototype.onRecvReliableMessage = function (e, t, r) {
            }, e.prototype.resetCheckMessage = function () {
                this.logger.debug("zb.hb.rcm call"), clearTimeout(this.stateCenter.sendDataCheckTimer), this.stateCenter.sendDataCheckTimer = null, this.checkSendMessageList(this.stateCenter.sendDataList), this.checkSendMessageList(this.stateCenter.sendCommandList), this.stateCenter.sendDataMap = {}, this.stateCenter.sendCommandMap = {}, this.logger.debug("zb.hb.rcm call success")
            }, e.prototype.checkSendMessageList = function (e) {
                for (var t = e.getFirst(); null != t;) e.remove(t), t._data.error && (t._data.data.body.custom_msg ? t._data.error(o.liveRoomErrorList.SEND_MSG_TIMEOUT, t._data.data.header.seq, t._data.data.body.custom_msg) : t._data.error(o.liveRoomErrorList.SEND_MSG_TIMEOUT, t._data.data.header.seq)), t = e.getFirst()
            }, e.prototype.checkMessageListTimeout = function (e, t) {
                for (var r = e.getFirst(), i = Date.parse(new Date + ""), s = 0, n = 0, a = 0; !(null == r || r._data.time + this.stateCenter.sendDataTimeout > i || (delete t[r._data.data.header.seq], e.remove(r), ++n, null == r._data.error || this.stateCenter.sendDataDropTimeout > 0 && r._data.time + this.stateCenter.sendDataDropTimeout < i ? ++a : r._data.data.body.custom_msg ? r._data.error(o.liveRoomErrorList.SEND_MSG_TIMEOUT, r._data.data.header.seq, r._data.data.body.custom_msg) : r._data.error(o.liveRoomErrorList.SEND_MSG_TIMEOUT, r._data.data.header.seq), ++s >= this.stateCenter.sendDataCheckOnceCount));) r = e.getFirst();
                0 == n && 0 == a || this.logger.debug("zb.hb.cmt call success, stat: timeout=", n, "drop=", a)
            }, e.prototype.startCheckMessageTimeout = function () {
                var e = this;
                this.stateCenter.isLogin() ? (this.checkMessageListTimeout(this.stateCenter.sendDataList, this.stateCenter.sendDataMap), this.checkMessageListTimeout(this.stateCenter.sendCommandList, this.stateCenter.sendCommandMap), this.stateCenter.sendDataCheckTimer = setTimeout((function () {
                    e.startCheckMessageTimeout()
                }), this.stateCenter.sendDataCheckInterval)) : this.logger.error("zb.hb.scmt state error")
            }, e
        }();
        t.HeartBeatHandler = c
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(3), o = function () {
            function e(e, t, r, i) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t, this.dataReport = i
            }

            return e.prototype.sendCustomCommand = function (e, t, r, i) {
                var o = this;
                if (this.logger.debug("zb.mh.scc call"), this.stateCenter.isLogin()) {
                    var n = {
                        from_userid: this.stateCenter.idName,
                        from_username: this.stateCenter.nickName,
                        request_id: this.stateCenter.getRequestId(),
                        custom_content: t || "",
                        room_id: this.stateCenter.roomid
                    }, a = {dest_id_name: e, custom_msg: JSON.stringify(n)};
                    s.ClientUtil.checkCustomCommandParam(a) ? (this.socketCenter.registerRouter("custommsg", (function (e) {
                        o.handleSendCustomMsgRsp(e)
                    })), this.socketCenter.sendCustomMessage("custommsg", a, (function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var i = e[0], s = e[1];
                        r({errorCode: i, messageID: s})
                    }), (function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = e[0], s = e[1];
                        o.logger.error("zb.mh.scc " + r.msg), i({errorCode: r, messageID: s})
                    })), this.logger.info("zb.mh.scc call success")) : this.logger.error("zb.mh.scc param error")
                } else this.logger.error("zb.mh.scc state error")
            }, e.prototype.handleSendCustomMsgRsp = function (e) {
                this.logger.debug("zb.mh.hscmrcall");
                var t, r = this.stateCenter.sendDataMap[e.header.seq];
                null != r ? ("custommsg" != (t = r._data).data.header.cmd ? this.logger.error("zb.mh.hscmrcmd wrong" + t.data.header.cmd) : 0 === e.body.err_code ? (JSON.parse(t.data.body.custom_msg), null != t.success && t.success(0, e.body.msg_id)) : null != t.error && t.error(s.ClientUtil.getServerError(e.body.err_code), e.body.msg_id), delete this.stateCenter.sendDataMap[e.header.seq], this.stateCenter.sendDataList.remove(r)) : this.logger.error("zb.mh.hscmrno found seq=" + e.header.seq), this.logger.debug("zb.mh.hscmr  call success")
            }, e.prototype.handlePushCustomMsg = function (e) {
                var t = JSON.parse(e.body.custommsg);
                this.logger.debug("zb.mh.hpcm submsg=", t), this.onRecvCustomCommand(t.from_userid, t.from_username, t.room_id, t.custom_content)
            }, e.prototype.onRecvCustomCommand = function (e, t, r, i) {
            }, e.prototype.sendRoomMsg = function (e, t, r, s, o) {
                var n = this;
                if (this.logger.debug("zb.mh.srm call"), this.stateCenter.isLogin()) {
                    var a = Date.parse(new Date + "");
                    if (this.stateCenter.sendRoomMsgTime > 0 && this.stateCenter.sendRoomMsgTime + this.stateCenter.SendRoomMsgInterval > a) return this.logger.info("zb.mh.srm freq error"), void (o && o(i.sdkErrorList.FREQ_LIMITED, 0, e, r));
                    this.stateCenter.sendRoomMsgTime = a, this.logger.debug("zb.mh.srm send fetch request");
                    var c = {msg_category: e, msg_type: 1, msg_content: r};
                    this.socketCenter.registerRouter("im_chat", (function (e) {
                        n.handleSendRoomMsgRsp(e)
                    })), this.socketCenter.sendCustomMessage("im_chat", c, (function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = e[0], i = e[1];
                        s({errorCode: r, messageID: i})
                    }), (function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = e[0], i = e[1];
                        n.logger.error("zb.mh.srm " + r.msg), o({errorCode: r, messageID: i})
                    })), this.logger.info("zb.mh.srm call success")
                } else this.logger.error("zb.mh.srm state error")
            }, e.prototype.handleSendRoomMsgRsp = function (e) {
                this.logger.debug("zb.mh.hsrmr call");
                var t, r = this.stateCenter.sendDataMap[e.header.seq];
                null != r ? ("im_chat" != (t = r._data).data.header.cmd ? this.logger.error("zb.mh.hsrmr cmd wrong" + t.data.header.cmd) : 0 === e.body.err_code ? t.success && t.success(0, e.body.msg_id) : t.error && t.error(s.ClientUtil.getServerError(e.body.err_code), e.body.msg_id), delete this.stateCenter.sendDataMap[e.header.seq], this.stateCenter.sendDataList.remove(r)) : this.logger.error("hzb.mh.hsrmr no found seq=" + e.header.seq), this.logger.info("zb.mh.hsrmr call success")
            }, e.prototype.onRecvRoomMsg = function (e, t, r) {
            }, e.prototype.sendReliableMessage = function (e, t, r, i) {
                this.logger.debug("zb.mh.srirm call"), this.stateCenter.transSeqMap[e] || (this.stateCenter.transSeqMap[e] = {seq: 0});
                var s = {
                    trans_type: e,
                    trans_data: t,
                    trans_local_seq: this.stateCenter.transSeqMap[e].seq,
                    trans_channel: "clt"
                };
                this.socketCenter.sendMessage("trans", s, r, i)
            }, e.prototype.sendBigRoomMessage = function (e, t, r, i, s) {
                var o = this;
                console.log(t), this.logger.debug("zb.mh.sbim call");
                var n = this.stateCenter.bigimTimeWindow, a = this.stateCenter.serverTimeOffset,
                    c = (new Date).getTime() + a, d = (++this.stateCenter.cmdSeq).toString();
                if (this.stateCenter.bigImCallbackMap[d] = {success: i, error: s}, 0 == n) {
                    var l = {msg_category: e, msg_type: 1, msg_content: r, bigmsg_client_id: d};
                    this.logger.debug("zb.mh.sbim no time window"), this.sendBigRoomMessageInternal([l], (function (e) {
                        o.handleBigImMsgRsp(e)
                    }), s)
                } else {
                    var u = Math.floor(c / n);
                    if (this.logger.debug("currentIndex " + u + " lastTimeIndex " + this.stateCenter.bigImLastTimeIndex), this.stateCenter.bigImLastTimeIndex < u && 0 == this.stateCenter.bigImMessageList.length) {
                        this.stateCenter.bigImLastTimeIndex = u;
                        var h = {msg_category: e, msg_type: 1, msg_content: r, bigmsg_client_id: d};
                        this.sendBigRoomMessageInternal([h], (function (e) {
                            o.handleBigImMsgRsp(e)
                        }), s)
                    } else this.stateCenter.bigImMessageList.push({
                        msg_category: e,
                        msg_type: 1,
                        msg_content: r,
                        bigmsg_client_id: d
                    }), 1 == this.stateCenter.bigImMessageList.length && this.setBigImTimer(a, n)
                }
            }, e.prototype.handlePushMergeMsg = function (e) {
                if (this.stateCenter.isLogin()) {
                    for (var t = 0; t < e.body.messages.length; t++) 14001 === e.body.messages[t].sub_cmd && this.handlePushBigRooMsg(e.body.messages[t].msg_body);
                    this.logger.debug("zb.mh.hpmm call success")
                } else this.logger.error("zb.mh.hpmmnot login")
            }, e.prototype.handlePushBigRooMsg = function (e) {
                var t;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return void this.logger.warn("zb.mh.hpbrm parse json error")
                }
                if (t) {
                    for (var r = t.room_id, i = [], s = 0; s < t.msg_data.length; s++) {
                        var o = t.msg_data[s];
                        o.id_name != this.stateCenter.idName ? i.push({
                            idName: o.id_name,
                            nickName: o.nick_name,
                            messageId: o.bigmsg_id,
                            category: o.msg_category,
                            type: o.msg_type,
                            content: o.msg_content,
                            time: o.send_time
                        }) : this.logger.debug("zb.mh.hpbrm self message")
                    }
                    0 == i.length ? this.logger.debug("zb.mh.hpbrm no other pushData except self") : this.onRecvBigRoomMessage(i, r), this.logger.debug("zb.mh.hpbrm call success")
                } else this.logger.warn("zb.mh.hpbrm cann't find message body")
            }, e.prototype.onRecvBigRoomMessage = function (e, t) {
            }, e.prototype.sendBigRoomMessageInternal = function (e, t, r) {
                this.logger.debug("zb.mh.sbim call");
                var i = {msgs: e};
                this.socketCenter.sendMessage("bigim_chat", i, t, r)
            }, e.prototype.handleBigImMsgRsp = function (e) {
                if (this.stateCenter.isLogin()) {
                    this.stateCenter.bigimTimeWindow != e.body.bigim_time_window && (this.stateCenter.bigimTimeWindow = e.body.bigim_time_window);
                    for (var t = 0; t < e.body.msgs.length; t++) {
                        var r = e.body.msgs[t].bigmsg_client_id, i = e.body.msgs[t].bigmsg_id;
                        if (this.stateCenter.bigImCallbackMap[r]) {
                            var s = this.stateCenter.bigImCallbackMap[r].success;
                            null != s && s({errorCode: 0, messageID: i}), delete this.stateCenter.bigImCallbackMap[r]
                        }
                    }
                } else this.logger.info("zb.mh.hbmr not login")
            }, e.prototype.setBigImTimer = function (e, t) {
                var r = this, i = t - ((new Date).getTime() + e) % t, o = s.ClientUtil.generateRandumNumber(t) + i;
                this.logger.info("zb.mh.sbt setTimer " + o), this.stateCenter.bigImTimer = setTimeout((function () {
                    r.onBigImTimer()
                }), o)
            }, e.prototype.onBigImTimer = function () {
                var e = this, t = (new Date).getTime() + this.stateCenter.serverTimeOffset;
                this.stateCenter.bigImLastTimeIndex = Math.floor(t / this.stateCenter.bigimTimeWindow);
                for (var r = [], i = [], s = 0; s < this.stateCenter.bigImMessageList.length && !(s >= 20); s++) {
                    var o = this.stateCenter.bigImMessageList[s];
                    r.push({
                        msg_category: o.msg_category,
                        msg_type: o.msg_type,
                        msg_content: o.msg_content,
                        bigmsg_client_id: o.bigmsg_client_id
                    }), i.push(o.bigmsg_client_id)
                }
                this.stateCenter.bigImMessageList.length > 20 ? this.stateCenter.bigImMessageList.splice(0, 20) : this.stateCenter.bigImMessageList = [], this.sendBigRoomMessageInternal(r, (function (t) {
                    e.handleBigImMsgRsp(t)
                }), (function (t, r) {
                    for (var s = 0; s < i.length; s++) {
                        var o = i[s], n = e.stateCenter.bigImCallbackMap[o];
                        n && (null != n.error && n.error(t, r), delete e.stateCenter.bigImCallbackMap[o])
                    }
                })), clearTimeout(this.stateCenter.bigImTimer), this.stateCenter.bigImTimer = null, this.stateCenter.bigImMessageList.length > 0 && this.setBigImTimer(this.stateCenter.serverTimeOffset, this.stateCenter.bigimTimeWindow)
            }, e.prototype.sendRelayMessage = function (e, t, r, i) {
                this.logger.debug("zb.mh.srm call");
                var s = this.stateCenter.datiTimeWindow, o = this.stateCenter.serverTimeOffset;
                s > 0 ? (this.stateCenter.realyMessageList.push({
                    type: e,
                    data: t,
                    success: r,
                    error: i
                }), 1 == this.stateCenter.realyMessageList.length && this.setRelayTimer(o, s)) : this.sendRelayMessageInternal(e, t, r, i)
            }, e.prototype.sendRelayMessageInternal = function (e, t, r, i) {
                this.logger.debug("zb.mh.srmi call");
                var s = {relay_type: e, relay_data: t};
                this.socketCenter.sendMessage("relay", s, r, i)
            }, e.prototype.setRelayTimer = function (e, t) {
                var r = this, i = 2 * t - ((new Date).getTime() + e) % t, o = s.ClientUtil.generateRandumNumber(i);
                this.logger.info("zb.mh.srt setTimer " + o), this.stateCenter.relayTimer = setTimeout((function () {
                    r.onRelayTimer()
                }), o)
            }, e.prototype.onRelayTimer = function () {
                if (0 != this.stateCenter.realyMessageList.length) {
                    var e = this.stateCenter.realyMessageList[0];
                    this.sendRelayMessageInternal(e.type, e.data, e.success, e.error), clearTimeout(this.stateCenter.relayTimer), this.stateCenter.relayTimer = null, this.stateCenter.realyMessageList.splice(0, 1), this.stateCenter.realyMessageList.length > 0 && this.setRelayTimer(this.stateCenter.serverTimeOffset, this.stateCenter.datiTimeWindow)
                } else this.logger.info("zb.mh.ort no relay data")
            }, e.prototype.handlePushTransMsg = function (e) {
                if (this.stateCenter.isLogin()) {
                    var t = e.body.trans_type, r = e.body.trans_seq;
                    this.stateCenter.transSeqMap[t] ? this.stateCenter.transSeqMap[t].seq = r : this.stateCenter.transSeqMap[t] = {seq: r}, e.body.trans_user_idname != this.stateCenter.idName ? this.onRecvReliableMessage(t, r, e.body.trans_data) : this.logger.debug("zb.mh.hptr receive self trans message"), this.logger.info("zb.mh.hptr trans " + t + " seq " + r)
                } else this.logger.error("zb.mh.hptr not login")
            }, e.prototype.onRecvReliableMessage = function (e, t, r) {
            }, e
        }();
        t.MessageHandler = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = function () {
            function e(e, t, r) {
                this.logger = e, this.socketCenter = r, this.stateCenter = t
            }

            return e.prototype.requestJoinLive = function (e, t, r, s) {
                this.logger.debug("zb.lh.rjl call");
                var o = this.stateCenter.getRequestId(), n = this.stateCenter.getSignalCmdContent(o, e);
                return null != s && (this.stateCenter.joinLiveCallbackMap[o] = s, this.sendSignalCmd(i.ENUM_SIGNAL_SUB_CMD.joinLiveRequest, n, e, t, r), !0)
            }, e.prototype.inviteJoinLive = function (e, t, r, s) {
                this.logger.debug("zb.lh.ijl call");
                var o = this.stateCenter.getRequestId(), n = this.stateCenter.getSignalCmdContent(o, e);
                return null != s && (this.stateCenter.joinLiveCallbackMap[o] = s, this.sendSignalCmd(i.ENUM_SIGNAL_SUB_CMD.joinLiveInvite, n, e, t, r), !0)
            }, e.prototype.endJoinLive = function (e, t, r) {
                this.logger.debug("zb.lh.ejl call");
                var s = this.stateCenter.getRequestId(), o = this.stateCenter.getSignalCmdContent(s, e);
                return this.sendSignalCmd(i.ENUM_SIGNAL_SUB_CMD.joinLiveStop, o, e, t, r), !0
            }, e.prototype.respondJoinLive = function (e, t, r, s) {
                this.logger.debug("zb.lh.rpjl call");
                var o = this.stateCenter.joinLiveRequestMap[e];
                if (!o) return this.logger.info("zb.lh.rpjl no dest id name"), !1;
                var n = 0;
                !0 === t && (n = 1);
                var a = this.stateCenter.getSignalCmdContent(e, o, n);
                return this.sendSignalCmd(i.ENUM_SIGNAL_SUB_CMD.joinLiveResult, a, o, r, s), delete this.stateCenter.joinLiveRequestMap[e], !0
            }, e.prototype.sendSignalCmd = function (e, t, r, i, s) {
                if (this.logger.debug("zb.lh.ssc call"), this.stateCenter.isLogin()) {
                    this.logger.debug("zb.lh.ssc send signal cmd " + e);
                    var o = {sub_cmd: e, signal_msg: t, dest_id_name: [r]};
                    this.socketCenter.sendMessage("signal", o, i, s), this.logger.info("zb.lh.ssc call success")
                } else this.logger.error("zb.lh.ssc state error")
            }, e.prototype.handlePushSignalMsg = function (e) {
                if (this.stateCenter.isLogin()) {
                    var t = JSON.parse(e.body.signal_msg);
                    switch (this.logger.debug("zb.lh.hpcm hpsm= ", t), e.body.sub_cmd) {
                        case i.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveRequest:
                            this.handlePushJoinLiveRequestMsg(t);
                            break;
                        case i.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveResult:
                            this.handlePushJoinLiveResultMsg(t);
                            break;
                        case i.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveInvite:
                            this.handlePushJoinLiveInviteMsg(t);
                            break;
                        case i.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveStop:
                            this.handlePushJoinLiveStopMsg(t)
                    }
                    this.logger.debug("zb.lh.hpsm call end")
                } else this.logger.warn("zb.lh.hpsm not login")
            }, e.prototype.handlePushJoinLiveRequestMsg = function (e) {
                var t = e.request_id;
                if ("string" == typeof t) {
                    var r = e.from_userid;
                    "string" == typeof r ? (this.stateCenter.joinLiveRequestMap[t] = r, this.logger.info("zb.lh.hpjlrm onRecvJoinLiveRequest " + r), this.onRecvJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error("zb.lh.hpjlrm no from user")
                } else this.logger.error("zb.lh.hpjlrm no requestId")
            }, e.prototype.onRecvJoinLiveRequest = function (e, t, r, i) {
            }, e.prototype.handlePushJoinLiveInviteMsg = function (e) {
                var t = e.request_id;
                if ("string" == typeof t) {
                    var r = e.from_userid;
                    "string" == typeof r ? (this.stateCenter.joinLiveRequestMap[t] = r, this.logger.info("zb.lh.hpjlim onRecvInviteJoinLiveRequest " + r), this.onRecvInviteJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error("zb.lh.hpjlim no from user")
                } else this.logger.error("zb.lh.hpjlim no requestId")
            }, e.prototype.onRecvInviteJoinLiveRequest = function (e, t, r, i) {
            }, e.prototype.handlePushJoinLiveResultMsg = function (e) {
                var t = e.request_id;
                if ("string" == typeof t) {
                    var r = e.result;
                    if (null != r) {
                        var i = 1 == r;
                        if (this.stateCenter.joinLiveCallbackMap[t]) {
                            var s = this.stateCenter.joinLiveCallbackMap[t];
                            if (!s) return void this.logger.info("hpjlrm.o no callback");
                            this.logger.info("zb.lh.hpjlrm joinLiveRequest/invite result " + i), delete this.stateCenter.joinLiveCallbackMap[t], s(i, e.from_userid, e.from_username)
                        }
                    } else this.logger.info("zb.lh.hpjlrm no result")
                } else this.logger.error("zb.lh.hpjlrm no requestId")
            }, e.prototype.handlePushJoinLiveStopMsg = function (e) {
                var t = e.request_id;
                "string" == typeof t ? (this.logger.info("zb.lh.hpjlsm onRecvEndJoinLiveCommand " + e.from_userid), this.onRecvEndJoinLiveCommand(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error("zb.lh.hpjlsm no requestId")
            }, e.prototype.onRecvEndJoinLiveCommand = function (e, t, r, i) {
            }, e
        }();
        t.LiveHandler = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(0), s = r(2), o = function () {
            function e() {
                this.debug = !1, this.debugCustom = !1, this.testEnvironment = !1, this.third_token = "", this.pullLimited = !0, this.configOK = !1, this.role = 2, this.maxMemberCount = 0, this.roomCreateFlag = 1, this.runState = i.ENUM_RUN_STATE.logout, this.lastRunState = i.ENUM_RUN_STATE.logout, this.callbackList = {}, this.streamQuerying = !1, this.streamSeq = 0, this.streamList = [], this.publishStreamList = {}, this.userQuerying = !1, this.userTempList = [], this.userList = [], this.userSeq = 0, this.userSeqMergeMap = null, this.userSeqMergeTimer = null, this.userQueryTimer = null, this.lastUserQueryTime = 0, this.userListInterval = 3e4, this.userListMergeInterval = 5e3, this.anchor_info = {
                    anchor_id: "",
                    anchor_id_name: "",
                    anchor_nick_name: ""
                }, this.sendCommandMap = {}, this.sendCommandList = new i.LinkedList, this.sendDataMap = {}, this.sendDataList = new i.LinkedList, this.joinLiveCallbackMap = {}, this.joinLiveRequestMap = {}, this.streamUrlMap = {}, this.cmdCallback = {}, this.customUrl = [], this.customPlayUrl = [], this.transSeqMap = {}, this.realyMessageList = [], this.relayTimer = null, this.bigImLastTimeIndex = 0, this.bigIMmessageList = [], this.bigImCallbackMap = {}, this.bigImTimer = null, this.msgCategory = 2, this.serverTimeOffset = 0, this.datiTimeWindow = 0, this.bigimTimeWindow = 0, this.bigImMessageList = [], this.tryLoginCount = 0, this.tryLoginTimer = null, this.heartbeatTimer = null, this.sendDataCheckTimer = null, this.sendDataCheckInterval = 2e3, this.sendDataTimeout = 5e3, this.sendDataDropTimeout = 1e4, this.sendDataCheckOnceCount = 100, this.sendRoomMsgTime = 0, this.SendRoomMsgInterval = 500, this.cmdSeq = 0, this.audioEffectBuffer = {}, this.audioBitRate = 48e3, this.cdnSeq = 0, this.listenerList = {
                    roomUserUpdate: [],
                    updateOnlineCount: [],
                    getAnchorInfo: [],
                    IMRecvCustomCommand: [],
                    IMRecvBroadcastMessage: [],
                    recvReliableMessage: [],
                    IMRecvBarrageMessage: [],
                    recvJoinLiveRequest: [],
                    recvInviteJoinLiveRequest: [],
                    recvEndJoinLiveCommand: [],
                    roomStreamUpdate: [],
                    streamExtraInfoUpdate: [],
                    playerStateUpdate: [],
                    publisherStateUpdate: [],
                    roomStateUpdate: [],
                    screenSharingEnded: [],
                    publishQualityUpdate: [],
                    playQualityUpdate: [],
                    remoteCameraStatusUpdate: [],
                    remoteMicStatusUpdate: []
                }, this.reportList = {}, this.reportSeqList = {
                    login: 0,
                    relogin: 0,
                    startPublish: {},
                    rePublish: {},
                    startPlay: {},
                    rePlay: {},
                    stopPublish: {},
                    stopPlay: {}
                }, this.streamTrigger = {}, this.mixStreamAdvance = {}, this.audioStreamList = {}
            }

            return e.prototype.isLogin = function () {
                return this.runState === i.ENUM_RUN_STATE.login
            }, e.prototype.getRequestId = function () {
                return this.idName + "-" + s.getSeq()
            }, e.prototype.getSignalCmdContent = function (e, t, r) {
                var i = {
                    request_id: e,
                    room_id: this.roomid,
                    from_userid: this.idName,
                    from_username: this.nickName,
                    to_userid: t
                };
                return null != r && (i.result = r), JSON.stringify(i)
            }, e.prototype.actionListener = function (e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.listenerList[e] && this.listenerList[e].forEach((function (e) {
                    e.apply(void 0, t)
                }))
            }, e
        }();
        t.StateCenter = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(3), s = function () {
            function e(e) {
                var t = this, r = e.type, i = e.channels, s = void 0 === i ? 1 : i, o = e.bufferSize,
                    n = void 0 === o ? 0 : o, a = e.sampleBit, c = void 0 === a ? 16 : a, d = e.sampleRate,
                    l = void 0 === d ? 44100 : d;
                this.instant = 0, this.slow = 0, this.clip = 0;
                var u = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext);
                this.context = u, this.type = r, this.channels = s, this.bufferSize = n, this.sampleBit = c, this.sampleRate = l, this.script = u.createScriptProcessor(n, s, s);
                (new Date).getTime();
                this.script.addEventListener("audioprocess", (function (e) {
                    var i, s = e.inputBuffer.getChannelData(0), o = 0, n = 0;
                    for (i = 0; i < s.length; ++i) o += s[i] * s[i], Math.abs(s[i]) > .99 && (n += 1);
                    if (t.instant = Math.sqrt(o / s.length), t.slow = .95 * t.slow + .05 * t.instant, t.clip = n / s.length, "pcm" === r || "wav" === r) {
                        for (var a = [], c = 0; c < t.channels; c++) a.push(e.inputBuffer.getChannelData(c));
                        t.recorderBuffer(a)
                    }
                })), "pcm" !== r && "wav" !== r || this.initRecorderBuffer(r)
            }

            return e.prototype.connectToSource = function (e, t) {
                console.log("SoundMeter connecting");
                try {
                    this.mic = this.context.createMediaStreamSource(e), this.mic.connect(this.script), this.script.connect(this.context.destination), void 0 !== t && t(null)
                } catch (e) {
                    console.error(e), void 0 !== t && t(e)
                }
                return this
            }, e.prototype.recorderBuffer = function (e) {
                this.worker.postMessage({command: "record", val: e})
            }, e.prototype.initRecorderBuffer = function (e) {
                var t = this, r = this;
                this.worker = i.ClientUtil.inlineWorker((function () {
                    var e, r, i, s, o, n, a = [], c = t;

                    function d(e, t, r) {
                        for (var i = 0; i < r.length; i++, t += 2) {
                            var s = Math.max(-1, Math.min(1, r[i]));
                            e.setInt16(t, s < 0 ? 32768 * s : 32767 * s, !0)
                        }
                    }

                    function l(e, t, r) {
                        for (var i = 0; i < r.length; i++, t++) {
                            var s = Math.max(-1, Math.min(1, r[i])), o = s < 0 ? 128 * s : 127 * s;
                            o += 128, e.setInt8(t, o)
                        }
                    }

                    function u(e, t, r) {
                        for (var i = 0; i < r.length; i++) e.setUint8(t + i, r.charCodeAt(i))
                    }

                    function h(e, t) {
                        for (var r = new Float32Array(t.length / e), i = 0, s = 0; i < r.length;) r[i] = t[s], s += e, i++;
                        return r
                    }

                    function p(e, t, r) {
                        for (var i = new Float32Array(t * e.length), s = 0, o = 0; o < r[0].length; o++) i.set(r[0][o], s), s += r[0][o].length;
                        return i
                    }

                    function g(e, t) {
                        for (var r = new Float32Array(e.length + t.length), i = 0; i < e.length + t.length; i += 2) r[i] = e[i / 2 >> 0], r[i + 1] = t[i / 2 >> 0];
                        return r
                    }

                    function m(t) {
                        var r, i;
                        if (1 == e) r = p(a[0], o, a), 1 != t && (i = h(t, r)); else if (2 == e) {
                            var s = p(a[0], o, a), n = p(a[1], o, a);
                            1 != t ? i = g(h(t, s), h(t, n)) : r = g(s, n)
                        }
                        return 1 != t ? i : r
                    }

                    function f(e) {
                        var t = function (e, t) {
                            var i;
                            8 == t ? i = e.length : 16 == t && (i = e.length, i *= 2);
                            var s = new ArrayBuffer(i), o = new DataView(s);
                            return 8 == t ? l(o, 0, e) : 16 == r && d(o, 0, e), o
                        }(m(e), r);
                        c.postMessage({command: "exportPcmLive", val: t})
                    }

                    function v(t) {
                        var s = function (t, s) {
                            var o;
                            8 == s ? o = t.length : 16 == r && (o = t.length, o *= 2);
                            var n = new ArrayBuffer(o + 44), a = new DataView(n), c = i, h = r, p = e;
                            return u(a, 0, "RIFF"), a.setUint32(4, 36 + o, !0), u(a, 8, "WAVE"), u(a, 12, "fmt "), a.setUint32(16, 16, !0), a.setUint16(20, 1, !0), a.setUint16(22, p, !0), a.setUint32(24, c, !0), a.setUint32(28, c * p * (h / 8), !0), a.setUint16(32, p * (h / 8), !0), a.setUint16(34, h, !0), u(a, 36, "data"), a.setUint32(40, o, !0), 8 == r ? l(a, 44, t) : 16 == r && d(a, 44, t), a
                        }(m(t), r);
                        c.postMessage({command: "exportWav", val: s})
                    }

                    t.onmessage = function (t) {
                        switch (t.data.command) {
                            case"init":
                                c = t.data.val, e = c.sampleChannel, r = c.sampleBit, i = c.sampleRate, s = c.oldSampleRate, o = c.bufferSize, n = c.type;
                                break;
                            case"record":
                                !function (t) {
                                    for (var r = 0; r < e; r++) a[r] || (a[r] = []), a[r].push(t[r]);
                                    var o = Math.round(s / i);
                                    "pcm" === n ? f(o) : "wav" === n && v(o), a = []
                                }(t.data.val)
                        }
                        var c
                    }
                })), this.worker.postMessage({
                    command: "init",
                    val: {
                        sampleChannel: this.channels,
                        sampleBit: this.sampleBit,
                        sampleRate: this.sampleRate,
                        oldSampleRate: this.context.sampleRate,
                        bufferSize: this.bufferSize,
                        type: e
                    }
                }), this.worker.onmessage = function (e) {
                    switch (e.data.command) {
                        case"exportPcmLive":
                            r.onReceiveBuffer(e.data.val);
                            break;
                        case"exportWav":
                            r.onReceiveWav(e.data.val)
                    }
                }
            }, e.prototype.onReceiveBuffer = function (e) {
            }, e.prototype.onReceiveWav = function (e) {
            }, e.prototype.writeString = function (e, t, r) {
                for (var i = 0; i < r.length; i++) e.setUint8(t + i, r.charCodeAt(i))
            }, e.prototype.writeBuffer = function (e, t, r) {
                for (var i = 0; i < r.byteLength; i++) e.setUint8(t + i, r[i])
            }, e.prototype.concatenation = function (e) {
                for (var t = 0, r = 0; r < e.length; ++r) t += e[r].buffer.byteLength;
                var i = new Uint8Array(t), s = 0;
                for (r = 0; r < e.length; ++r) i.set(new Uint8Array(e[r].buffer), s), s += e[r].buffer.byteLength;
                return i
            }, e.prototype.encodeWave = function (e) {
                var t = this.concatenation(e), r = t.byteLength, i = new ArrayBuffer(r + 44), s = new DataView(i),
                    o = this.sampleRate, n = this.sampleBit, a = this.channels;
                return this.writeString(s, 0, "RIFF"), s.setUint32(4, 36 + r, !0), this.writeString(s, 8, "WAVE"), this.writeString(s, 12, "fmt "), s.setUint32(16, 16, !0), s.setUint16(20, 1, !0), s.setUint16(22, a, !0), s.setUint32(24, o, !0), s.setUint32(28, o * a * (n / 8), !0), s.setUint16(32, a * (n / 8), !0), s.setUint16(34, n, !0), this.writeString(s, 36, "data"), s.setUint32(40, r, !0), this.writeBuffer(s, 44, t), s
            }, e.prototype.stop = function () {
                this.mic.disconnect(), this.script.disconnect()
            }, e
        }();
        t.MediaUtil = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0})
    }, function (e, t, r) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = function () {
            function e(e) {
                this.log = e, this.dataStatistics = {}, this.logger = e
            }

            return e.prototype.newReport = function (e, t) {
                this.dataStatistics[e] = {
                    event_time: Date.now(),
                    time_consumed: 0,
                    seq: e,
                    error: 0,
                    message: "success",
                    event: t,
                    events: []
                }
            }, e.prototype.addMsgExt = function (e, t) {
                this.dataStatistics[e] ? this.dataStatistics[e].msg_ext = t : console.warn(e + " not exist")
            }, e.prototype.addMsgInfo = function (e, t) {
                this.dataStatistics[e] ? Object.assign(this.dataStatistics[e], t) : console.warn(e + " not exist")
            }, e.prototype.eventStart = function (e, t) {
                this.dataStatistics[e] ? null != this.dataStatistics[e].events ? this.dataStatistics[e].events.push({
                    event: t,
                    event_time: Date.now(),
                    time_consumed: 0
                }) : this.logger.warn("zd.es.0 no events") : this.logger.warn("zd.es.0 no seq match")
            }, e.prototype.eventEnd = function (e, t, r) {
                if (this.dataStatistics[e]) {
                    var i = this.dataStatistics[e].events;
                    if (i && 0 !== i.length) {
                        for (var s = i.length - 1; s >= 0; s--) if (i[s].event == t && 0 == i[s].time_consumed) {
                            i[s].time_consumed = Date.now() - i[s].event_time;
                            break
                        }
                    } else this.logger.info("zd.ee.0 no events")
                } else this.logger.info("zd.ee.0 no seq match")
            }, e.prototype.eventEndWithMsg = function (e, t, r) {
                if (this.dataStatistics[e]) {
                    var s = this.dataStatistics[e].events;
                    if (s) {
                        for (var o = s.length - 1; o >= 0; o--) if (s[o].event == t && 0 == s[o].time_consumed) {
                            s[o].time_consumed = Date.now() - s[o].event_time, null == s[o].msg_ext && (s[o].msg_ext = {}), s[o].msg_ext = i({}, r);
                            break
                        }
                    } else this.logger.warn("zd.ee.0 no events")
                } else this.logger.warn("zd.ee.0 no seq match")
            }, e.prototype.eventEndWithMsgInfo = function (e, t, r) {
                if (this.dataStatistics[e]) {
                    var i = this.dataStatistics[e].events;
                    if (i) {
                        for (var s = i.length - 1; s >= 0; s--) if (i[s].event == t && 0 == i[s].time_consumed) {
                            i[s].time_consumed = Date.now() - i[s].event_time, Object.assign(i[s], r);
                            break
                        }
                    } else this.logger.warn("zd.ee.0 no events")
                } else this.logger.warn("zd.ee.0 no seq match")
            }, e.prototype.addEventInfo = function (e, t, r, i) {
                if (this.dataStatistics[e]) {
                    var s = this.dataStatistics[e].events;
                    if (null != s) {
                        for (var o = s.length - 1; o >= 0; o--) if (s[o].event == t && null != s[o].time_consumed) {
                            null == s[o].msg_ext ? s[o].msg_ext = {} : s[o].msg_ext && (s[o].msg_ext[r] = i);
                            break
                        }
                    } else this.logger.warn("zd.aei.0 no events")
                } else this.logger.warn("zd.aei.0 no seq match")
            }, e.prototype.addEventMsg = function (e, t, r, i) {
                if (this.dataStatistics[e]) {
                    var s = this.dataStatistics[e].events;
                    if (null != s) {
                        for (var o = s.length - 1; o >= 0; o--) if (s[o].event == t) {
                            s[o][r] = i;
                            break
                        }
                    } else this.logger.warn("zd.aem.0 no events")
                } else this.logger.warn("zd.aem.0 no seq match")
            }, e.prototype.addEvent = function (e, t, r) {
                this.dataStatistics[e] ? this.dataStatistics[e].events && (r ? this.dataStatistics[e].events.push({
                    event: t,
                    event_time: Date.now(),
                    msg_ext: r
                }) : this.dataStatistics[e].events.push({
                    event: t,
                    event_time: Date.now()
                })) : this.logger.warn("zd.ae.0 no seq match")
            }, e.prototype.uploadReport = function (e, t, r, i) {
                var s = this.dataStatistics[e];
                null != s && (t && (s.event = t), s.time_consumed = Date.now() - s.event_time, r && this.addMsgInfo(e, {
                    error: r.code,
                    message: r.message + " " + (i || "")
                }), this.logger.report(s), delete this.dataStatistics[e])
            }, e
        }();
        t.ZegoDataReport = s
    }])
}));