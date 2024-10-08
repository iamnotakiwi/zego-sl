!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var r = t();
        for (var o in r) ("object" == typeof exports ? exports : e)[o] = r[o]
    }
}("undefined" != typeof self ? self : this, (function () {
    return function (e) {
        var t = {};

        function r(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {i: o, l: !1, exports: {}};
            return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }

        return r.m = e, r.c = t, r.d = function (e, t, o) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) r.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
            return o
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 10)
    }([function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getReportSeq = t.getSeq = t.REPORT_ACTION = t.ENUM_RETRY_STATE = t.ENUM_PLAY_STATE_UPDATE = t.ENUM_PUBLISH_STATE_UPDATE = t.LinkedList = t.ListNode = t.E_CLIENT_TYPE = t.ENUM_SOURCE_TYPE = t.ENUM_DISPATCH_TYPE = t.ENUM_BROADCASTER_STATUS = t.ENUM_PLAY_SOURCE_TYPE = t.ENUM_PUBLISH_STATE_NEGO = t.ENUM_PUSH_SIGNAL_SUB_CMD = t.ENUM_SIGNAL_SUB_CMD = t.QUALITYLEVEL = t.MIXSTREAM_ERROR_CODE = t.SERVER_ERROR_CODE = t.ENUM_STREAM_UPDATE_CMD = t.MINIUM_HEARTBEAT_INTERVAL = t.STREAM_DELETE_REASON = t.ENUM_NETWORK_STATE = t.ENUM_RUN_STATE = t.ENUM_STREAM_UPDATE_TYPE = t.ENUM_STREAM_SUB_CMD = t.ENUM_PUBLISH_STREAM_STATE = t.MAX_RETRY_CONNECT_INTERVAL = t.MAX_TRANS_DATA_LENGTH = t.MAX_TRANS_TYPE_LENGTH = t.MAX_MIX_TASK_ID_LENGTH = t.MAX_MESSAGE_LENGTH = t.MAX_ROOM_ID_LENGTH = t.MAX_USER_NAME_LENGTH = t.MAX_USER_ID_LENGTH = t.MAX_STREAM_ID_LENGTH = t.MAX_TRY_HEARTBEAT_COUNT = t.SEND_MSG_TIMEOUT = t.SEND_MSG_RESET = t.MAX_TRY_CONNECT_COUNT = t.ENUM_CONNECT_STATE = t.ENUM_PLAY_STATE_NEGO = t.ENUM_PLAY_STATE = t.ENUM_PUBLISH_STATE = t.ENUM_SCREEM_RESOLUTION_TYPE = t.ENUM_RESOLUTION_TYPE = t.ENUM_SIGNAL_STATE = t.ERROR_CODES = t.sdkErrorList = t.ENUM_REMOTE_TYPE = t.LOG_LEVEL = t.ENUM_LOG_LEVEL = t.ROOMVERSION = t.PROTO_VERSION = void 0, t.PROTO_VERSION = "2.1.0", t.ROOMVERSION = "V1", function (e) {
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
        }, t.ERROR_CODES = {
            ROOM_SESSION_ID_ERR: 1000000152,
            FETCH_TRANS_UNKNOWN_CHANNEL: 1000001108,
            FETCH_TRANS_UNKNOWN_TYPE: 1000001109,
            FETCH_TRANS_WRONG_SEQ: 1000001110
        }, function (e) {
            e[e.disconnected = 0] = "disconnected", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected"
        }(t.ENUM_SIGNAL_STATE || (t.ENUM_SIGNAL_STATE = {})), t.ENUM_RESOLUTION_TYPE = {
            LOW: {
                width: 320,
                height: 240,
                frameRate: 15,
                bitRate: 300
            },
            MEDIUM: {width: 640, height: 480, frameRate: 15, bitRate: 800},
            HIGH: {width: 1280, height: 720, frameRate: 20, bitRate: 1500}
        }, t.ENUM_SCREEM_RESOLUTION_TYPE = {
            LOW: {frameRate: 20, bitRate: 800},
            MEDIUM: {frameRate: 15, bitRate: 1200},
            HIGH: {frameRate: 5, bitRate: 2e3}
        }, t.ENUM_PUBLISH_STATE = {
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
            iceConnected: 5,
            iceDisconnected: 6
        }, t.ENUM_CONNECT_STATE = {
            disconnect: 0,
            connecting: 1,
            connected: 2
        }, t.MAX_TRY_CONNECT_COUNT = 1, t.SEND_MSG_RESET = 2, t.SEND_MSG_TIMEOUT = 1, t.MAX_TRY_HEARTBEAT_COUNT = 5, t.MAX_STREAM_ID_LENGTH = 256, t.MAX_USER_ID_LENGTH = 64, t.MAX_USER_NAME_LENGTH = 256, t.MAX_ROOM_ID_LENGTH = 128, t.MAX_MESSAGE_LENGTH = 1024, t.MAX_MIX_TASK_ID_LENGTH = 256, t.MAX_TRANS_TYPE_LENGTH = 128, t.MAX_TRANS_DATA_LENGTH = 4096, t.MAX_RETRY_CONNECT_INTERVAL = 12, t.ENUM_PUBLISH_STREAM_STATE = {
            waiting_url: 1,
            tryPublish: 2,
            update_info: 3,
            publishing: 4,
            stop: 5,
            retryPublish: 6
        }, t.ENUM_STREAM_SUB_CMD = {
            liveNone: 0,
            liveBegin: 2001,
            liveEnd: 2002,
            liveUpdate: 2003
        }, t.ENUM_STREAM_UPDATE_TYPE = {added: 1, deleted: 0}, function (e) {
            e[e.logout = 0] = "logout", e[e.trylogin = 1] = "trylogin", e[e.login = 2] = "login"
        }(t.ENUM_RUN_STATE || (t.ENUM_RUN_STATE = {})), function (e) {
            e[e.offline = 0] = "offline", e[e.online = 1] = "online"
        }(t.ENUM_NETWORK_STATE || (t.ENUM_NETWORK_STATE = {})), t.STREAM_DELETE_REASON = {
            0: {
                code: 1,
                description: "user_stop_publishing_stream_normal"
            },
            1: {code: 2, description: "user_heart_beat_timeout"},
            2: {code: 3, description: "user_repeat_login"},
            3: {code: 4, description: "user_kicked_out"},
            4: {code: 5, description: "user_offline"},
            100: {code: 6, description: "remove_by_server"}
        }, t.MINIUM_HEARTBEAT_INTERVAL = 3e3, t.ENUM_STREAM_UPDATE_CMD = {
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
            iceConnected: 5,
            iceDisconnected: 6
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
        var o = function () {
            function e(e, t) {
                void 0 === e && (e = null), void 0 === t && (t = null), this._id = null, this.next = null, this.prev = null, this._id = e, this._data = t
            }

            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._id ? this._id : null
                }, set: function (e) {
                    this._id = e
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this._data
                }, set: function (e) {
                    this._data = e
                }, enumerable: !1, configurable: !0
            }), e.prototype.hasNext = function () {
                return this.next && this.next.id
            }, e.prototype.hasPrev = function () {
                return this.prev && this.prev.id
            }, e
        }();
        t.ListNode = o;
        var i = function () {
            function e() {
                this.start = new o, this.end = new o, this._idCounter = 0, this._numNodes = 0, this.start.next = this.end, this.start.prev = null, this.end.prev = this.start, this.end.next = null
            }

            return e.prototype.insertBefore = function (e, t) {
                var r = new o(this._idCounter, t);
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
                for (var t = this.start, r = !1, o = null; t.hasNext() && !r;) e(t = t.next) && (o = t, r = !0);
                return o
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
        t.LinkedList = i, t.ENUM_PUBLISH_STATE_UPDATE = {
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
        };
        var s = r(6);
        Object.defineProperty(t, "getSeq", {
            enumerable: !0, get: function () {
                return s.getSeq
            }
        }), Object.defineProperty(t, "getReportSeq", {
            enumerable: !0, get: function () {
                return s.getReportSeq
            }
        })
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoRTCLogEvent = void 0;
        var o = r(4), i = function (e) {
            return e
        };
        t.ZegoRTCLogEvent = {
            kZegoTaskCreateStream: {
                event: "/sdk/create_stream",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kParamError: o.errorCodeList.PUBLISHER_PARAM,
                    kScreenCancelError: o.errorCodeList.PUBLISH_SCREEN_CANCELED,
                    kScreenFailedError: o.errorCodeList.PUBLISHER_SCREEN_FAILED,
                    kScreenNotSupportError: o.errorCodeList.PUBLISH_SCREEN_NOT_SUPPORT,
                    kHttpsRequiredError: o.errorCodeList.PUBLISHER_HTTPS_REQUIRED
                },
                stream_type: i,
                screen: i,
                camera: i,
                custom: i
            },
            kZegoTaskPublishStart: {
                event: "/sdk/api/publish_request",
                error: {
                    kPublishParamError: o.errorCodeList.PUBLISHER_PARAM,
                    kPublishNetworkTimeoutError: o.errorCodeList.TIMEOUT,
                    kPublishDispatchTimeoutError: o.errorCodeList.DISPATCH_TIMEOUT,
                    kPublishDispatchError: o.errorCodeList.DISPATCH_ERROR,
                    kPublishNetworkBrokenError: o.errorCodeList.NETWORK_BROKEN,
                    kPublishNoPreviewError: o.errorCodeList.PUBLISH_NO_PREVIEW,
                    kPublishNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPublishRetryTimeoutError: o.errorCodeList.PUBLISHER_RETRY_TIMEOUT,
                    kPublishSessionClosedError: o.errorCodeList.PUBLISHER_SESSION_CLOSED,
                    kPublishNegoTimeoutError: o.errorCodeList.PUBLISHER_SERVER_NEGO_TIMEOUT,
                    kCreateOfferError: o.errorCodeList.PUBLISHER_CREATE_OFFER_ERROR,
                    kSetLocalDescError: o.errorCodeList.PUBLISHER_SET_LOCAL_DESC_ERROR,
                    kSessionRequestError: o.errorCodeList.PUBLISHER_SESSION_REQUEST_FAIL,
                    kSetRemoteDescError: o.errorCodeList.PUBLISHER_SET_REMOTE_DESC_ERROR,
                    kMediaConnectionError: o.errorCodeList.PUBLISHER_MEDIA_CONNECTION_ERROR,
                    kWebsocketDisconnectedError: o.errorCodeList.PUBLISHER_WEBSOCKET_DISCONNECTED,
                    kMediaDescError: o.errorCodeList.PUBLISHER_MEDIA_DESC_ERROR,
                    kCandidateError: o.errorCodeList.PUBLISHER_CANDIDATE_ERROR,
                    kIsPublishing: o.errorCodeList.PUBLISHER_IS_PUBLISHING,
                    kClientIPChangedError: o.errorCodeList.PUBLISHER_CLIENT_IP_CHANGED,
                    kTTLOverTimeError: o.errorCodeList.PUBLISHER_TTL_OVERTIME
                },
                publishOption: i,
                message: i,
                session_id: i,
                stream: i,
                video_en_codec_id: i,
                cap_w: i,
                cap_h: i,
                w: i,
                h: i,
                video_en_fps: i,
                video_en_bps: i,
                audio_c_channel_count: i,
                audio_en_bps: i,
                aec_level: i,
                ans_level: i,
                agc: i,
                traffic_control_min_video_bitrate: i
            },
            kZegoTaskVideoCaptureSize: {event: "sdk/api/publish_video_c_size", session_id: i, w: i, h: i},
            kZegoTaskRePublish: {event: "/sdk/republish", stream: i},
            kZegoTaskPublishStop: {
                event: "/sdk/stop_publish",
                error: {kParamError: o.errorCodeList.PUBLISHER_PARAM},
                stream: i
            },
            kZegoTaskPlayStart: {
                event: "/sdk/api/play_request", error: {
                    kStreamIDNullError: o.errorCodeList.STREAM_ID_NULL,
                    kPlayParamError: o.errorCodeList.PLAYER_PARAM,
                    kPlayStreamIDToLongError: o.errorCodeList.STREAMID_TOO_LONG,
                    kPlayStreamIDInvalidCharacterError: o.errorCodeList.STREAM_ID_INVALID_CHARACTER,
                    kPlayNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPlayRepeatedPullError: o.errorCodeList.REPEATED_PULL,
                    kPlayNetworkTimeoutError: o.errorCodeList.TIMEOUT,
                    kPlayDispatchTimeoutError: o.errorCodeList.DISPATCH_TIMEOUT,
                    kPlayDispatchError: o.errorCodeList.DISPATCH_ERROR,
                    kPlayNetworkBrokenError: o.errorCodeList.NETWORK_BROKEN,
                    kPlayRetryTimeoutError: o.errorCodeList.PLAYER_RETRY_TIMEOUT,
                    kPlaySessionClosedError: o.errorCodeList.PLAYER_SESSION_CLOSED,
                    kPlaySessionResetError: o.errorCodeList.PLAYER_SESSION_RESET,
                    kPlayNegoTimeoutError: o.errorCodeList.PLAYER_SERVER_NEGO_TIMEOUT,
                    kCreateOfferError: o.errorCodeList.PLAYER_CREATE_OFFER_ERROR,
                    kSetLocalDescError: o.errorCodeList.PLAYER_SET_LOCAL_DESC_ERROR,
                    kSessionRequestError: o.errorCodeList.PLAYER_SESSION_REQUEST_FAIL,
                    kSetRemoteDescError: o.errorCodeList.PLAYER_SET_REMOTE_DESC_ERROR,
                    kMediaConnectionError: o.errorCodeList.PLAYER_MEDIA_CONNECTION_ERROR,
                    kWebsocketDisconnectedError: o.errorCodeList.PLAYER_WEBSOCKET_DISCONNECTED,
                    kCandidateError: o.errorCodeList.PLAYER_CANDIDATE_ERROR,
                    kMediaDescError: o.errorCodeList.PLAYER_MEDIA_DESC_ERROR,
                    kIsPlaying: o.errorCodeList.PLAYER_IS_PLAYING,
                    kClientIPChangedError: o.errorCodeList.PLAYER_CLIENT_IP_CHANGED,
                    kTTLOverTimeError: o.errorCodeList.PLAYER_TTL_OVERTIME
                }, playOption: i, message: i, session_id: i, stream: i, audio_activate: i, video_activate: i
            },
            kZegoTaskRePlay: {event: "/sdk/replay", stream: i},
            kZegoTaskPlayStop: {
                event: "/sdk/stop_play",
                error: {kParamError: o.errorCodeList.PUBLISHER_PARAM},
                stream: i
            },
            kZegoPlayContentChanged: {
                event: "/sdk/play_content_changed",
                session_id: i,
                video_activate: i,
                audio_activate: i
            },
            kZegoTaskMixStart: {
                event: "/mix/start_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kTaskIDNullError: o.errorCodeList.MIXER_TASK_ID_NULL,
                    kTaskIDToLongError: o.errorCodeList.MIXER_TASK_ID_TOO_LONG,
                    kTaskIDInvalidCharacterError: o.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER,
                    kInputListNullError: o.errorCodeList.MIXER_INPUTLIST_NULL,
                    kOutputListNullError: o.errorCodeList.MIXER_OUTPUTLIST_NULL,
                    kOutputTargetInvalidError: o.errorCodeList.MIXER_OUTPUT_TARGET_INVALID,
                    kOutputNoTargetError: o.errorCodeList.MIXER_NO_OUTPUT_TARGET,
                    kRequestError: o.errorCodeList.MIXER_START_REQUEST_ERROR,
                    kInternalError: o.errorCodeList.MIXER_INNER_ERROR
                },
                mix_stream_id: i,
                stream_cnt: i,
                input_stream_list: i,
                output_target_list: i
            },
            kZegoTaskMixStop: {
                event: "/mix/stop_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kTaskIDNullError: o.errorCodeList.MIXER_TASK_ID_NULL,
                    kRequestError: o.errorCodeList.MIXER_STOP_REQUEST_ERROR,
                    kInternalError: o.errorCodeList.MIXER_INNER_ERROR
                }
            },
            kZegoTaskMixConfig: {
                event: "/mix/config_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kVideoConfigInvalidError: o.errorCodeList.MIXER_VIDEO_CONFIG_INVALID,
                    kBackgroundImageUrlInvalidError: o.errorCodeList.MIXER_BACKGROUND_IMAGE_URL_INVALID
                },
                config: i
            },
            kZegoTaskEnumDevices: {
                event: "/device/list",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                dev_list: i
            },
            kZegoTaskAudioOutput: {
                event: "/device/audio_capture",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                session_id: i,
                device: i
            },
            kZegoTaskVideoCapture: {
                event: "/device/video_capture",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                session_id: i,
                device: i
            },
            kZegoTaskDeviceInterrupt: {
                event: "/device/interrupt",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                session_id: i,
                interrupt: i
            },
            kZegoTaskSetDebug: "/sdk/set_debug",
            kZegoTaskSetLog: "/sdk/set_log_config",
            kZegoTaskUseVideoDevice: {
                event: "/device/api/video_c",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kDevicesNoFoundError: o.errorCodeList.DEVICE_NOT_FOUND,
                    kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG
                },
                device: i
            },
            kZegoTaskUseAudioDevice: {
                event: "/device/api/audio_c",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kDevicesNoFoundError: o.errorCodeList.DEVICE_NOT_FOUND,
                    kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG
                },
                device: i
            },
            kZegoTaskCheckSystemRequirements: {event: "/sdk/check_system", capability: i},
            kZegoTaskMutePublishVideo: "/sdk/mute_publish_video",
            kZegoTaskMutePublishAudio: "/sdk/mute_publish_audio",
            kZegoTaskMutePlayVideo: "/sdk/mute_play_video",
            kZegoTaskMutePlayAudio: "/sdk/mute_play_audio",
            kZegoTaskRemoteCameraUpdate: {event: "/sdk/remote_camera_update", stream: i, status: i},
            kZegoTaskRemoteMicUpdate: {event: "/sdk/remote_mic_update", stream: i, status: i},
            kZegoTaskGetSoundLevel: {
                event: "/sdk/get_sound_level",
                error: {kGetSoundLevelError: o.errorCodeList.GET_SOUND_LEVEL_FAIL}
            },
            kZegoTaskStopSoundLevel: "/sdk/stop_sound_level",
            kZegoTaskAddPublishCdnUrl: {
                event: "/sdk/add_publish_cdn_url",
                error: {kParamError: o.errorCodeList.INPUT_PARAM}
            },
            kZegoTaskRemovePublishCdnUrl: {
                event: "/sdk/remove_publish_cdn_url",
                error: {kParamError: o.errorCodeList.INPUT_PARAM},
                stream: i,
                target_url: i
            },
            kZegoTaskClearPublishCdnUrl: {
                event: "/sdk/clear_publish_cdn_url",
                error: {kParamError: o.errorCodeList.INPUT_PARAM}
            },
            kZegoTaskPublishTarget: {
                event: "/sdk/publish_target",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kPublishStreamNoFoundError: o.errorCodeList.PUBLISHER_STREAM_NO_FOUND
                }
            },
            kZegoTaskDestroyStream: {
                event: "/sdk/destroy_stream",
                error: {kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG}
            },
            kZegoTaskScreenSharingEnded: "/sdk/screen_share_end",
            kZegoTaskAudioOutputChanged: {
                event: "/device/api/audio_output",
                session_id: i,
                stream: i,
                device: i,
                reason: i
            },
            kZegoEventPublishStat: "/sdk/publish_stat_report",
            kZegoEventPlayStat: "/sdk/play_stat_report",
            kZegoSetAudioConfig: {event: "/sdk/set_audio_config", error: {kParamError: o.errorCodeList.INPUT_PARAM}},
            kZegoSetVideoConfig: {
                event: "/sdk/set_video_config",
                error: {kParamError: o.errorCodeList.INPUT_PARAM, kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG}
            },
            kZegoReplaceTrack: {event: "/sdk/replace_track", error: {kParamError: o.errorCodeList.INPUT_PARAM}},
            kZegoTaskLiveRoomGetStreamUpdateInfo: {
                event: "/liveroom/get_stream_update_info",
                stream_update_type: i,
                update_stream: i
            },
            kZegoTaskLiveRoomGetStreamExtraInfo: {event: "/liveroom/get_stream_extra_info", update_stream: i},
            kZegoTaskLiveRoomSendStreamExtraInfo: {
                event: "/liveroom/send_stream_extra_info",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kExtraInfoNullError: o.errorCodeList.PUBLISHER_EXTRA_INFO_NULL,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPublishStreamNoFoundError: o.errorCodeList.PUBLISHER_STREAM_NO_FOUND
                },
                stream: i,
                stream_extra_info: i,
                room_sid: i
            },
            kZegoTaskPlayDecodeFirstVideoFrame: {
                event: "/sdk/play_decode_first_video_frame",
                session_id: i,
                fft_consumed: i
            },
            kZegoVisibilityChange: {event: "/app/background"}
        }
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__awaiter || function (e, t, r, o) {
            return new (r || (r = Promise))((function (i, s) {
                function n(e) {
                    try {
                        d(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function a(e) {
                    try {
                        d(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function d(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                        e(t)
                    }))).then(n, a)
                }

                d((o = o.apply(e, t || [])).next())
            }))
        }, i = this && this.__generator || function (e, t) {
            var r, o, i, s, n = {
                label: 0, sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                }, trys: [], ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                return this
            }), s;

            function a(s) {
                return function (a) {
                    return function (s) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; n;) try {
                            if (r = 1, o && (i = 2 & s[0] ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done) return i;
                            switch (o = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return n.label++, {value: s[1], done: !1};
                                case 5:
                                    n.label++, o = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = n.ops.pop(), n.trys.pop();
                                    continue;
                                default:
                                    if (!(i = n.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        n = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        n.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && n.label < i[1]) {
                                        n.label = i[1], i = s;
                                        break
                                    }
                                    if (i && n.label < i[2]) {
                                        n.label = i[2], n.ops.push(s);
                                        break
                                    }
                                    i[2] && n.ops.pop(), n.trys.pop();
                                    continue
                            }
                            s = t.call(e, n)
                        } catch (e) {
                            s = [6, e], o = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {value: s[0] ? s[1] : void 0, done: !0}
                    }([s, a])
                }
            }
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.ClientUtil = void 0;
        var s = r(1), n = function () {
            function e() {
            }

            return e.checkIllegalCharacters = function (e) {
                return /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/.test(e) && /^[^:/]*$/g.test(e)
            }, e.isUrl = function (e) {
                return !!(e.startsWith("rtmp://") || e.startsWith("https://") && e.endsWith(".flv") || e.startsWith("https://") && e.endsWith(".m3u8"))
            }, e.registerCallback = function (e, t, r) {
                var o, i;
                t.success && (o = t.success, r[e + "SuccessCallback"] = o), t.error && (i = t.error, r[e + "ErrorCallback"] = i)
            }, e.actionErrorCallback = function (e, t) {
                return t[e + "ErrorCallback"]
            }, e.actionSuccessCallback = function (e, t) {
                return t[e + "SuccessCallback"]
            }, e.logReportCallback = function (t, r, o, i) {
                e.registerCallback(t, {
                    success: function (t, i) {
                        for (var s = [], n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
                        e.dataReportEvent(r, o, t, i, s)
                    }
                }, i)
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
                    2002: "biz channel error",
                    1e9: "liveroom cmd error, code:"
                };
                if (0 === e) return {code: 0, message: ""};
                var r = {code: 0, message: "liveroom cmd error"};
                return r.code = e, r.message = e > 1e9 ? t[1e9] + e : t[e] ? t[e] + " code:" + e : "unknown error code:" + e, r
            }, e.unregisterCallback = function (e, t) {
                delete t[e + "SuccessCallback"], delete t[e + "ErrorCallback"]
            }, e.decodeServerError = function (e, t) {
                var r = {code: -1, message: "server error"};
                return e > 1e9 && (r.code = e - 1e9 + 52e6), t && (r.message = t), r
            }, e.getLiveRoomError = function (e) {
                return e > 1e9 ? {
                    1105: "ROOM_MAX_USER_COUNT",
                    1012: "PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM",
                    2002: "ROOM_ERROR_AUTHENTICATION_FAILED",
                    2003: "ROOM_ERROR_LOGIN_TIMEOUT"
                }[e - 1e9] || "" : {
                    1: "PARSE_JSON_ERROR",
                    1001: "LOGIN_PROCESSING",
                    1002: "LIVEROMM_REQUEST_ERROR",
                    1003: "ZPUSH_REQUEST_FAIL",
                    1004: "ZPUSH_REQUEST_FAIL",
                    1005: "ZPUSH_REQUEST_FAIL",
                    1006: "LOGIN_STATE_WRONG",
                    1007: "ZPUSH_REQUEST_FAIL",
                    1008: "TOKEN_ERROR",
                    1009: "DIAPATCH_ERROR",
                    1010: "TOKEN_EXPIRED",
                    1011: "TOKEN_ERROR",
                    1012: "SUBCMD_ERROR",
                    1101: "ZEGO_AUTH_ERROR",
                    2001: "BIZ_CHANNEL_ERROR",
                    2002: "BIZ_CHANNEL_ERROR"
                }[e] || "ROOM_INNER_ERROR"
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
                }, r = {
                    1: "MIXER_START_REQUEST_ERROR",
                    3: "MIXER_AUTHENTICATION_FAILED",
                    150: "MIXER_INPUT_STREAM_NOT_EXISTS",
                    151: "MIXER_START_REQUEST_ERROR",
                    152: "MIXER_STOP_REQUEST_ERROR",
                    153: "MIXER_INPUT_PARAMETERS_ERROR",
                    154: "MIXER_EXCEED_MAX_OUTPUT_COUNT",
                    155: "MIXER_INPUT_PARAMETERS_ERROR",
                    156: "MIXER_VIDEO_CONFIG_INVALID",
                    157: "MIXER_NO_SERVICES",
                    158: "MIXER_EXCEED_MAX_INPUT_COUNT",
                    159: "MIXER_START_REQUEST_ERROR",
                    160: "MIXER_NOT_OWNER_STOPMIXER",
                    170: "MIXER_WATERMARK_PARAMETERS_ERROR",
                    171: "MIXER_WATERMARK_NULL",
                    190: "MIXER_START_REQUEST_ERROR"
                }, o = [];
                if (e > 1e9) {
                    var i = e - 1e9 + 82e6;
                    o[0] = t[i] ? t[i] : "", o[1] = r[e - 1e9] ? r[e - 1e9] : ""
                }
                return o
            }, e.getKickoutError = function (e) {
                var t = {};
                switch (e) {
                    case 1:
                        t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                        break;
                    case 2:
                        t.code = 63000002, t.message = "zpush manual kickout", t.name = "MANUAL_KICKOUT";
                        break;
                    case 3:
                        t.code = 63000003, t.message = "kickout reason = " + e;
                        break;
                    case 4:
                        t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                        break;
                    default:
                        t.code = e, t.message = "kickout reason = " + e
                }
                return t
            }, e.dataReportEvent = function (e, t, r, o, i) {
                switch (r) {
                    case"eventStart":
                        e.eventStart(t, o);
                        break;
                    case"eventEndWithMsgInfo":
                        e.eventEndWithMsgInfo(t, o, i[0]);
                        break;
                    case"addEventMsg":
                        e.addEventMsg(t, o, i[0], i[1]);
                        break;
                    case"addEvent":
                        e.addEvent(t, o);
                        break;
                    case"eventEnd":
                        e.eventEnd(t, o);
                        break;
                    case"addMsgInfo":
                        e.addMsgInfo(t, i[0])
                }
            }, e.isKeepTryLogin = function (e) {
                switch (e) {
                    case 1002:
                    case 1003:
                        return !0;
                    default:
                        return !1
                }
            }, e.mergeStreamList = function (e, t, r, o) {
                var i, s = [], n = [], a = [];
                r || (r = []);
                for (var d = 0; d < r.length; d++) if (r[d].anchor_id_name != e) {
                    i = !1;
                    for (var c = 0; c < t.length; c++) if (r[d].stream_id === t[c].stream_id) {
                        r[d].extra_info !== t[c].extra_info && a.push(r[d]), i = !0;
                        break
                    }
                    i || s.push(r[d])
                }
                for (var l = 0; l < t.length; l++) {
                    i = !1;
                    for (var u = 0; u < r.length; u++) if (t[l].stream_id === r[u].stream_id) {
                        i = !0;
                        break
                    }
                    i || n.push(t[l])
                }
                t.splice(0);
                for (d = 0; d < r.length; d++) t.push(r[d]);
                o(s, n, a)
            }, e.checkInteger = function (e, t) {
                return 0 == t ? "number" == typeof e && e % 1 == 0 && e >= 0 : "number" == typeof e && e % 1 == 0 && e > 0
            }, e.checkValidNumber = function (e, t, r) {
                return t = t || 1, r = r || 1e4, "number" == typeof e && e % 1 == 0 && e >= t && e <= r
            }, e.uuid = function (e, t) {
                var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [];
                if (t = t || o.length, e) for (r = 0; r < e; r++) i[r] = o[0 | Math.random() * t]; else {
                    var s = void 0;
                    for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", r = 0; r < 36; r++) i[r] || (s = 0 | 16 * Math.random(), i[r] = o[19 == r ? 3 & s | 8 : s])
                }
                return i.join("")
            }, e.supportDetection = function (e, t) {
                return o(this, void 0, void 0, (function () {
                    var r, o, s, n, a, d;
                    return i(this, (function (i) {
                        switch (i.label) {
                            case 0:
                                return r = {
                                    webRTC: !1,
                                    customCapture: !1,
                                    camera: !1,
                                    microphone: !1,
                                    videoCodec: {H264: !1, H265: !1, VP8: !1, VP9: !1},
                                    screenSharing: e,
                                    errInfo: {}
                                }, ((o = document.createElement("video")).captureStream || o.mozCaptureStream) && (r.customCapture = !0), navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? "https:" === window.location.protocol || "file:" === window.location.protocol || -1 != window.location.hostname.indexOf("127.0.0.1") || -1 != window.location.hostname.indexOf("localhost") ? [3, 1] : (r.camera = !1, console.error("webrtc requires https or localhost"), [3, 7]) : [3, 7];
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, navigator.mediaDevices.getUserMedia({video: !0})];
                            case 2:
                                return (s = i.sent()) && (r.camera = !0) && s.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), [3, 4];
                            case 3:
                                return n = i.sent(), r.errInfo.camera = {
                                    name: n.name,
                                    message: n.message
                                }, console.error("camera devices detect error: ", n.name, n.message), [3, 4];
                            case 4:
                                return i.trys.push([4, 6, , 7]), [4, navigator.mediaDevices.getUserMedia({audio: !0})];
                            case 5:
                                return (a = i.sent()) && (r.microphone = !0) && a.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), [3, 7];
                            case 6:
                                return d = i.sent(), r.errInfo.microphone = {
                                    name: d.name,
                                    message: d.message
                                }, console.error("microphone devices detect error: ", d.name, d.message), [3, 7];
                            case 7:
                                return this.supportVideoCodeType((function (e, o) {
                                    r.videoCodec.H264 = e.H264, r.videoCodec.H265 = e.H265, r.videoCodec.VP8 = e.VP8, r.videoCodec.VP9 = e.VP9, r.webRTC = e.webRTC, o && (r.errInfo.webRTC = {
                                        name: o.name,
                                        message: o.message
                                    }, console.error("videoCodec detect error: " + o)), t && t(r)
                                })), [2]
                        }
                    }))
                }))
            }, e.getNetQuality = function (e, t) {
                return e && e < 600 ? t > .4 ? 2 : t > .3 ? 4 : 5 : e < 900 ? t > .4 ? 2 : t > .2 ? 3 : 4 : t > .2 ? 2 : 3
            }, e.getDevices = function (e, t) {
                void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then((function (t) {
                    for (var r = [], o = [], i = [], s = 0; s < t.length; s++) {
                        var n = t[s];
                        "audioinput" === n.kind && r.push({
                            deviceName: n.label,
                            deviceID: n.deviceId
                        }), "audiooutput" === n.kind && o.push({
                            deviceName: n.label,
                            deviceID: n.deviceId
                        }), "videoinput" === n.kind && i.push({deviceName: n.label, deviceID: n.deviceId})
                    }
                    e && e({microphones: r, speakers: o, cameras: i})
                })).catch((function (e) {
                    console.error("enumerate devices wrong " + e), t && t(s.ZegoRTCLogEvent.kZegoTaskEnumDevices.error.kEnumDevicesError)
                })) : t && t(s.ZegoRTCLogEvent.kZegoTaskEnumDevices.error.kBrowserNotSupportError)
            }, e.compareVersion = function (e, t) {
                e = e.split("."), t = t.split(".");
                for (var r = Math.max(e.length, t.length); e.length < r;) e.push("0");
                for (; t.length < r;) t.push("0");
                for (var o = 0; o < r; o++) {
                    var i = parseInt(e[o]), s = parseInt(t[o]);
                    if (i > s) return 1;
                    if (i < s) return -1
                }
                return 0
            }, e.isSupportLive = function (e, t) {
                var r = "当前微信版本过低，无法使用相关组件", o = "需要摄像头和录音功能的授权", i = wx.getSystemInfoSync().SDKVersion,
                    s = {code: -1, msg: ""};
                this.compareVersion(i, "1.7.0") < 0 && (s = {
                    code: 10001,
                    msg: r
                }, e && e(s)), wx.getSetting({
                    success: function (t) {
                        var r = t.authSetting;
                        r["scope.camera"] && r["scope.record"] || (s = {code: 10002, msg: o}), e && e(s)
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
                            var o = r.sdp.split("\r\n");
                            t.H264 = o.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("H264/") > -1
                            })), t.VP8 = o.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("VP8/") > -1
                            })), t.VP9 = o.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("VP9/") > -1
                            })), t.H265 = o.some((function (e) {
                                return e.startsWith("a=rtpmap:") && e.indexOf("H265/") > -1
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
                    r = -1 != e.indexOf("Firefox"), o = null != window.opr, i = e.indexOf("Chrome") && window.chrome,
                    s = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version");
                return t ? "IE" : r ? "Firefox" : o ? "Opera" : i ? "Chrome" : s ? "Safari" : "Unkown"
            }, e.getPublisherStateType = function (e) {
                return 0 == e || 1 == e ? 0 == e ? "PUBLISHING" : "NO_PUBLISH" : "PUBLISH_REQUESTING"
            }, e.getPlayerStateType = function (e) {
                return 0 == e || 1 == e ? 0 == e ? "PLAYING" : "NO_PLAY" : "PLAY_REQUESTING"
            }, e.getSteamUpdateType = function (e) {
                return 0 == e ? "DELETE" : "ADD"
            }, e.checkScreenParams = function (t, r) {
                if ("object" == typeof t && void 0 !== t.videoQuality && !e.checkInteger(t.videoQuality)) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " videoQuality must be integer number"), !1;
                if ("object" == typeof t && 4 === t.videoQuality) {
                    if (void 0 === t.bitRate) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.bitRate)) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number"), !1;
                    if (t.bitRate > 10240) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate cannot greater than 10 Mbps"), !1;
                    if (void 0 === t.frameRate) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.frameRate)) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate must be integer number"), !1;
                    if (void 0 === t.width) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.width)) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width must be integer number"), !1;
                    if (void 0 === t.height) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.height)) return r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height must be integer number"), !1
                }
                return !0
            }, e.checkCameraParams = function (t, r) {
                return t.width && e.checkValidNumber(t.width) ? t.height && e.checkValidNumber(t.height) ? t.frameRate && e.checkValidNumber(t.frameRate) ? !(!t.bitRate || !e.checkValidNumber(t.bitRate)) || (r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number"), !1) : (r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate must be integer number"), !1) : (r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height must be integer number"), !1) : (r(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width must be integer number"), !1)
            }, e.isReDispatch = function (e) {
                return [s.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kTTLOverTimeError, s.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kClientIPChangedError, s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kTTLOverTimeError, s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kClientIPChangedError].includes(e)
            }, e.arrAvg = function (e, t, r) {
                return e.push(t), e.length > r && e.shift(), e.reduce((function (e, t) {
                    return e + t
                })) / e.length
            }, e
        }();
        t.ClientUtil = n
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZEGO_WEBRTC_ACTION = void 0, function (e) {
            e.CONSTRUCTOR = "zc.0", e.CREATE_STREAM = "zc.cs", e.DESTROY_STREAM = "zc.ds", e.START_PUBLISHING_STREAM = "zc.sps.0", e.START_PLAYING_STREAM = "zc.sps.1", e.STOP_PUBLISHING_STREAM = "zc.sps.0.0", e.STOP_PLAYING_STREAM = "zc.sps.1.0", e.BIND_WINDOW_LISTENER = "zc.wl", e.MUTE_PUBLISH_STREAM_VIDEO = "zc.mpsv.0", e.MUTE_PUBLISH_STREAM_AUDIO = "zc.mpsa.0", e.MUTE_PLAY_STREAM_VIDEO = "zc.mpsv.1", e.MUTE_PLAY_STREAM_AUDIO = "zc.mpsa.1", e.SET_AUDIO_OUTPUT = "zc.sao", e.SET_CUSTOM_SIGNAL_URL = "zc.scsu", e.SET_TURN_OVER_TCP_ONLY = "zc.stoto", e.SET_VIDEO_CONFIG = "zc.svc", e.SET_AUDIO_CONFIG = "zc.sac", e.REPLACE_TRACK = "zc.rp", e.PRELOAD_EFFECT = "zc.pe.0", e.PLAY_EFFECT = "zc.pe.1", e.PAUSE_EFFECT = "zc.pe.2", e.RESUME_EFFECT = "zc.re", e.STOP_EFFECT = "zc.se", e.UNLOAD_EFFECT = "zc.ue", e.START_MIXING_AUDIO = "zc.sma.0", e.STOP_MIXING_AUDIO = "zc.sma.1", e.MIXING_BUFFER = "zc.mb", e.STOP_MIXING_BUFFER = "zc.smb", e.SET_MIXING_AUDIO_VOLUME = "zc.smav", e.ENABLE_STREAM = "zc.es", e.RDH_ACTIVE = "zc.rdh.a", e.RDH_MAX_TIME = "zc.rdh.m", e.RDH_WEBRTC_URL_RSP = "zc.rdh.hfwur", e.PUBLISH_STATE_HANDLE = "zc.psh.0", e.PLAY_STATE_HANDLE = "zc.psh.1", e.STATECENTER_ACTION_LISTENER = "zc.sc.al", e.SIGNAL_SET_SESSION_INFO = "zc.s.ssi", e.SIGNAL_RESET_CONNECT_TIMER = "zc.s.rct", e.SIGNAL_BIND_WEBSOCKET_HANDLE = "zc.s.bwh", e.SIGNAL_RESET_CHECK_MESSAGE = "zc.s.rcm", e.SIGNAL_UPDATE_TOKEN = "zc.s.ut", e.SIGNAL_SEND_MESSAGE_WITH_CALLBACK = "zc.s.smwc", e.SIGNAL_CONNECT_SERVER = "zc.s.cs.0", e.SIGNAL_START_CONNECT_TIMER = "zc.s.sct", e.SIGNAL_DISCONNECT_SERVER = "zc.s.dc", e.SIGNAL_CREATE_SESSION = "zc.s.cs.1", e.SIGNAL_REMOVE_SESSION = "zc.s.rs", e.SIGNAL_SEND_REMOVE_SESSION = "zc.s.srs", e.SIGNAL_SEND_MESSAGE = "zc.s.sm", e.SIGNAL_HANDLE_RESPOND_DATA = "zc.s.hrd", e.SIGNAL_ADD_SESSION = "zc.s.as", e.SIGNAL_HANDLE_PUSH_DATA = "zc.s.hpd", e.SIGNAL_HANDLE_PUSH_RESET_SESSION_DATA = "zc.s.hprsd", e.SIGNAL_SEND_MEDIA_DESC = "zc.s.smd", e.SIGNAL_SEND_CANDIDATE_INFO = "zc.s.sci", e.SIGNAL_SEND_MEDIA_DESC_ACK = "zc.s.smda", e.SIGNAL_SEND_CANDIDATE_INFO_ACK = "zc.s.scia", e.SIGNAL_SEND_CLOSE_SESSION_ACK = "zc.s.scsa", e.SIGNAL_SEND_RESET_SESSION_ACK = "zc.s.srsa", e.SIGNAL_REGISTER_PUSH_CALLBACK = "zc.s.rpc", e.SIGNAL_CHECK_MESSAGE_TIMEOUT = "zc.s.cmt", e.SIGNAL_SEND_HEARTBEAT = "zc.s.sh", e.SIGNAL_QUALITY_REPORT = "zc.s.qr", e.SIGNAL_SEND_STREAM_STATUS = "zc.s.sss", e.SIGNAL_ACTIVE_PLAY_VIDEO_STREAM = "zc.s.apvs", e.SIGNAL_ACTIVE_PLAY_AUDIO_STREAM = "zc.s.apas", e.SIGNAL_SEND_BROADCAST_STATUS = "zc.s.sbs"
        }(t.ZEGO_WEBRTC_ACTION || (t.ZEGO_WEBRTC_ACTION = {}))
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.errorCodeList = t.innerErrList = void 0, t.innerErrList = {
            SUCCESS: {
                code: 0,
                message: ""
            }, SEND_MSG_TIMEOUT: {code: "Error.Timeout", message: "send customessage timeout."}
        }, t.errorCodeList = {
            NOT_LOGIN: {code: 1000002, message: "not login room"},
            STREAMID_TOO_LONG: {code: 1000014, message: "stream ID is too long"},
            STREAM_ID_NULL: {code: 1000015, message: "streamID is empty"},
            STREAM_ID_INVALID_CHARACTER: {code: 1000016, message: "stream ID contains illegal characters"},
            NETWORK_BROKEN: {code: 1000017, message: "network is broken"},
            LOCALSTREAM_WRONG: {code: 1000018, message: "local stream wrong"},
            GET_SOUND_LEVEL_FAIL: {code: 1000019, message: "get sound level error"},
            INPUT_PARAM: {code: 1100001, message: "input parm error."},
            TIMEOUT: {code: 1100002, message: "network timeout."},
            SOCKET_CLOSE: {code: 1100003, msg: "socket close"},
            UNKNOWN_SERVER_ERROR: {code: 1100999, message: "unknown server error"},
            INIT_SDK_WRONG: {code: 1101e3, message: "init sdk wrong"},
            USER_ID_NULL: {code: 1002005, message: "user ID is empty"},
            USER_ID_INVALID_CHARACTER: {code: 1002006, message: "user ID contains illegal characters"},
            USER_ID_TOO_LONG: {code: 1002007, message: "user ID is too long"},
            USER_NAME_NULL: {code: 1002008, message: "username is empty"},
            USER_NAME_TOO_LONG: {code: 1002010, message: "username is too long"},
            ROOM_ID_NULL: {code: 1002011, message: "room ID is empty"},
            ROOM_ID_INVALID_CHARACTER: {code: 1002012, message: "room ID contains illegal characters"},
            ROOM_ID_TOO_LONG: {code: 1002013, message: "room ID is too long"},
            LOGIN_TIMEOUT: {code: 1002031, message: "login timeout"},
            ROOM_MAX_USER_COUNT: {code: 1002034, message: "users logging into the room exceeds the maximum number"},
            MULTIPLE_LOGIN_KICKOUT: {code: 1002050, message: "kickout may be the same user ID login other"},
            ROOM_RETRY_TIMEOUT: {code: 1002053, message: "network is broken and login fail."},
            MANUAL_KICKOUT: {code: 1002055, message: "server has sent a signal to kick out"},
            ROOM_INNER_ERROR: {code: 1002099, message: "room inner error"},
            HEARTBEAT_TIMEOUT: {code: 1102001, message: "heartbeat timeout."},
            PARSE_JSON_ERROR: {code: 1102011, message: "parse json error."},
            LOGIN_PROCESSING: {code: 1102012, message: "login is processing."},
            LIVEROMM_REQUEST_ERROR: {code: 1102013, message: "liveroom request error."},
            ZPUSH_REQUEST_FAIL: {code: 1102014, message: "zpush request fail."},
            LOGIN_STATE_WRONG: {code: 1102015, message: "user login state is wrong."},
            TOKEN_ERROR: {code: 1102016, message: "token error"},
            DISPATCH_ERROR: {code: 1102017, message: "dispatch error"},
            TOKEN_EXPIRED: {code: 1102018, message: "token expired"},
            SUBCMD_ERROR: {code: 1102019, message: "subcmd error."},
            ZEGO_AUTH_ERROR: {code: 1102020, message: "zego auth error."},
            BIZ_CHANNEL_ERROR: {code: 1102021, message: "biz channel error."},
            DISPATCH_TIMEOUT: {code: 1102022, message: "dispatch request timeout"},
            CONNECT_FAILED: {code: 1102023, message: "connect signal fail"},
            PUBLISHER_EXTRA_INFO_NULL: {code: 1003050, message: "extra info of publshing stream is null"},
            PUBLISHER_EXTRA_INFO_TOO_LONG: {code: 1003051, message: "stream extra info is too long"},
            PUBLISHER_PARAM: {code: 1103001, message: "input parm error"},
            PUBLISHER_BROWSER_NOT_SUPPORT: {code: 1103002, message: "browser do not support"},
            PUBLISHER_DISPATCH_FAIL: {code: 1103003, message: "dispatch request error"},
            PUBLISHER_SCREEN_FAILED: {code: 1103010, message: "screen fail"},
            ENUMERATE_DEVICES_FAIL: {code: 1103011, message: "enumerate devices fail"},
            PUBLISHER_DISPATCH_REQUEST_FAIL: {code: 1103020, message: "dispatch request fail"},
            PUBLISHER_SESSION_REQUEST_FAIL: {code: 1103021, message: "session request fail"},
            PUBLISHER_CREATE_OFFER_ERROR: {code: 1103022, message: "create offer error"},
            PUBLISHER_SET_LOCAL_DESC_ERROR: {code: 1103023, message: "setLocalDescription error"},
            PUBLISHER_MEDIA_DESC_ERROR: {code: 1103024, message: "mediaDesc error"},
            PUBLISHER_SET_REMOTE_DESC_ERROR: {code: 1103025, message: "other side offer error"},
            PUBLISHER_CANDIDATE_ERROR: {code: 1103026, message: "candidate error"},
            PUBLISHER_SESSION_CLOSED: {code: 1103027, message: "server session closed"},
            PUBLISHER_MEDIA_CONNECTION_ERROR: {code: 1103028, message: "ice connection error"},
            PUBLISHER_CONSTRAINTS_ERROR: {code: 1103029, message: "constraint error"},
            PUBLISHER_SERVER_NEGO_TIMEOUT: {code: 1103030, message: "negotiation timeout"},
            PUBLISH_NOT_PUBLISH: {code: 1103040, message: "publisher not found"},
            PUBLISH_DEVICE_OUT_ERR: {code: 1103041, message: "device change "},
            PUBLISH_SCREEN_CANCELED: {code: 1103042, message: "screen canceled"},
            PUBLISH_SCREEN_NOT_SUPPORT: {code: 1103043, message: "screen not support"},
            PUBLISH_NO_PREVIEW: {code: 1103044, message: "stream is not from zego"},
            VIDEO_DEVICE_FALSE: {code: 1103045, message: "video is false"},
            AUDIO_DEVICE_FALSE: {code: 1103046, message: "audio is false"},
            TRACK_NOT_FOUND: {code: 1103047, message: "track is not found"},
            DEVICE_NOT_FOUND: {code: 1103048, message: "device is not found"},
            REPEATED_PULL: {code: 1103049, message: "repeated pull same stream"},
            PUBLISHER_WEBSOCKET_DISCONNECTED: {code: 1103050, message: "websocket disconnected"},
            PUBLISHER_RETRY_TIMEOUT: {code: 1103051, message: "publisher retry timeout"},
            PUBLISHER_CDN_PUSH_ERROR: {code: 1103052, message: "publisher cdn push error"},
            PUBLISHER_HTTPS_REQUIRED: {code: 1103053, message: "https is required"},
            PUBLISHER_NO_PREVIEW: {code: 1103054, message: "no preview"},
            PUBLISHER_STREAM_NO_FOUND: {code: 1103055, message: "publish stream no found"},
            PUBLISHER_IS_PUBLISHING: {code: 1103056, message: "publish is publishing"},
            PUBLISHER_DECODE_AUDIO_FAIL: {code: 1103057, message: "decode audio data fail"},
            PUBLISHER_CLIENT_IP_CHANGED: {code: 1103058, message: "client ip changed"},
            PUBLISHER_TTL_OVERTIME: {code: 1103059, message: "ttl over time"},
            PLAYER_PARAM: {code: 1104001, message: "input parm error"},
            PLAYER_DISPATCH_REQUEST_FAIL: {code: 1104020, message: "dispatch request fail"},
            PLAYER_SESSION_REQUEST_FAIL: {code: 1104021, message: "session request fail"},
            PLAYER_CREATE_OFFER_ERROR: {code: 1104022, message: "create offer error"},
            PLAYER_SET_LOCAL_DESC_ERROR: {code: 1104023, message: "setLocalDescription error"},
            PLAYER_MEDIA_DESC_ERROR: {code: 1104024, message: "mediaDesc error"},
            PLAYER_SET_REMOTE_DESC_ERROR: {code: 1104025, message: "other side offer error"},
            PLAYER_CANDIDATE_ERROR: {code: 1104026, message: "candidate error"},
            PLAYER_SESSION_CLOSED: {code: 1104027, message: "server session closed"},
            PLAYER_MEDIA_CONNECTION_ERROR: {code: 1104028, message: "ice connection error"},
            PLAYER_WEBSOCKET_DISCONNECTED: {code: 1104029, message: "websocket disconnected"},
            PLAYER_SERVER_NEGO_TIMEOUT: {code: 1104030, message: "negotiation timeout"},
            PLAYER_RETRY_TIMEOUT: {code: 1104031, message: "player retry timeout"},
            PLAYER_IS_PLAYING: {code: 1104032, message: "player is playing"},
            PLAYER_CLIENT_IP_CHANGED: {code: 1104033, message: "client ip changed"},
            PLAYER_TTL_OVERTIME: {code: 1104034, message: "ttl is over time"},
            PLAYER_SESSION_RESET: {code: 1104035, message: "reset session push"},
            MIXER_NO_SERVICES: {code: 1005e3, message: "no mix stream service"},
            MIXER_TASK_ID_NULL: {code: 1005001, message: "mixer task is null"},
            MIXER_TASK_ID_TOO_LONG: {code: 1005002, message: "task ID is too long"},
            MIXER_TASK_ID_INVALID_CHARACTER: {code: 1005003, message: "task ID contains illegal characters"},
            MIXER_NO_OUTPUT_TARGET: {code: 1005005, message: "task configuration does not specify output"},
            MIXER_OUTPUT_TARGET_INVALID: {code: 1005006, message: "stream output target is incorrect"},
            MIXER_START_REQUEST_ERROR: {
                code: 1005010,
                message: "start mixer task fail, possibly due to network reasons"
            },
            MIXER_STOP_REQUEST_ERROR: {code: 1005011, message: "stop mixer task fail, possibly due to network reasons"},
            MIXER_NOT_OWNER_STOPMIXER: {
                code: 1005012,
                message: " maxed task must be stopped by the start user of the task"
            },
            MIXER_INPUTLIST_NULL: {code: 1005020, message: "Mixed stream task input list is null"},
            MIXER_OUTPUTLIST_NULL: {code: 1005021, message: "Mixed stream task output list is null"},
            MIXER_VIDEO_CONFIG_INVALID: {code: 1005023, message: "invalid mixed stream task video configuration"},
            MIXER_EXCEED_MAX_INPUT_COUNT: {code: 1005025, message: "more than the maximum number of input streams"},
            MIXER_INPUT_STREAM_NOT_EXISTS: {code: 1005026, message: "Input stream does not exist"},
            MIXER_INPUT_PARAMETERS_ERROR: {code: 1005027, message: "stream input parameters are wrong"},
            MIXER_EXCEED_MAX_OUTPUT_COUNT: {code: 1005030, message: "more than the maximum number of output streams"},
            MIXER_AUTHENTICATION_FAILED: {code: 1005050, message: "mixed stream authentication failed"},
            MIXER_WATERMARK_NULL: {code: 1005061, mag: "input watermark is null"},
            MIXER_WATERMARK_PARAMETERS_ERROR: {code: 1005062, message: "input watermark parameter is wrong"},
            MIXER_WATERMARK_URL_INVALID: {code: 1005063, message: "illegal input watermark URL"},
            MIXER_BACKGROUND_IMAGE_URL_INVALID: {code: 1005067, message: "illegal input background image URL"},
            MIXER_INNER_ERROR: {code: 1005099, message: "mixed stream internal error"},
            DEVICE_ERROR_TYPE_UNPLUGGED: {code: 1006006, message: "the device is unplugged"},
            IM_CONTENT_NULL: {code: 1009001, message: "message content is empty"},
            IM_CONTENT_TOO_LONG: {code: 1009002, message: "message content is too long"},
            IM_SEND_FAILED: {code: 1009010, message: "failed to send message"},
            FREQ_LIMITED: {code: 1109001, message: "frequency limited."}
        }
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, r = 1, o = arguments.length; r < o; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoWebRTC = void 0;
        var i = r(0), s = r(2), n = r(11), a = r(12), d = r(3), c = r(1), l = r(13), u = function () {
            function e(e, t, r) {
                this.mediaEleSources = [], this.logger = e, this.dataReport = t, this.ac = new ("undefined" != typeof webkitAudioContext ? webkitAudioContext : AudioContext), this.stateCenter = new n.StateCenter(this.logger), this.RTM = r, this.rtcModules = new l.RTCModules(this.logger, this.dataReport, this.stateCenter, this.RTM, this.ac), this.stateCenter.networkState = navigator ? navigator.onLine ? i.ENUM_NETWORK_STATE.online : i.ENUM_NETWORK_STATE.offline : i.ENUM_NETWORK_STATE.online
            }

            return e.prototype.mutePublishStreamVideo = function (e, t) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PUBLISH_STREAM_VIDEO + " call");
                var r = i.getReportSeq();
                this.dataReport.newReport(r, c.ZegoRTCLogEvent.kZegoTaskMutePublishVideo);
                var o = this.rtcModules.advancedModule.enableStream(e, {video: !t});
                return this.dataReport.uploadReport(r), this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PUBLISH_STREAM_VIDEO + " end"), o
            }, e.prototype.mutePublishStreamAudio = function (e, t) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PUBLISH_STREAM_AUDIO + " call");
                var r = i.getReportSeq();
                this.dataReport.newReport(r, c.ZegoRTCLogEvent.kZegoTaskMutePublishAudio);
                var o = this.rtcModules.advancedModule.enableStream(e, {audio: !t});
                return this.dataReport.uploadReport(r), this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PUBLISH_STREAM_AUDIO + " end"), o
            }, e.prototype.mutePlayStreamVideo = function (e, t) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PLAY_STREAM_VIDEO + " call " + e + " " + t);
                var r = i.getReportSeq();
                this.dataReport.newReport(r, c.ZegoRTCLogEvent.kZegoTaskMutePlayVideo);
                var o = this.rtcModules.playModule.mutePlayStream(e, "video", t);
                return this.dataReport.uploadReport(r), this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PLAY_STREAM_VIDEO + " end"), o
            }, e.prototype.mutePlayStreamAudio = function (e, t) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PLAY_STREAM_AUDIO + " call " + e + " " + t);
                var r = i.getReportSeq();
                this.dataReport.newReport(r, c.ZegoRTCLogEvent.kZegoTaskMutePlayAudio);
                var o = this.rtcModules.playModule.mutePlayStream(e, "audio", t);
                return this.dataReport.uploadReport(r), this.logger.info(d.ZEGO_WEBRTC_ACTION.MUTE_PLAY_STREAM_AUDIO + "end"), o
            }, e.prototype.setAudioOutput = function (e, t) {
                return this.logger.info(d.ZEGO_WEBRTC_ACTION.SET_AUDIO_OUTPUT + " call"), "string" != typeof t ? (this.logger.error("audiooutput is not string"), !1) : this.rtcModules.playModule.setStreamAudioOutput(e, t)
            }, e.prototype.setCustomSignalUrl = function (e) {
                if (this.logger.info(d.ZEGO_WEBRTC_ACTION.SET_CUSTOM_SIGNAL_URL + " call: " + e), e && 0 != e.length) {
                    var t = !0;
                    e.forEach((function (e) {
                        return 0 != e.indexOf("wss://") && (t = !1)
                    })), t ? this.stateCenter.customUrl = e : this.logger.error(d.ZEGO_WEBRTC_ACTION.SET_CUSTOM_SIGNAL_URL + " url is not correct")
                } else this.logger.error(d.ZEGO_WEBRTC_ACTION.SET_CUSTOM_SIGNAL_URL + " param error")
            }, e.prototype.setQualityMonitorCycle = function (e) {
                return "number" == typeof e && e >= 1e3 ? (this.rtcModules.streamCenter.setQualityMonitorCycle(e), !0) : (this.logger.error("zc.sqmc.0 time must be number and bigger than 1000"), !1)
            }, e.prototype.startPlayingStream = function (e, t) {
                return this.logger.info(d.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + "call by user"), this.rtcModules.playModule.startPlayingStream(e, t)
            }, e.prototype.stopPlayingStream = function (e) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.STOP_PLAYING_STREAM + "call by user"), this.rtcModules.playModule.stopPlayingStream(e)
            }, e.prototype.setTurnOverTcpOnly = function (e) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.SET_TURN_OVER_TCP_ONLY + " call " + e), "boolean" == typeof e ? this.stateCenter.turnOverTcpOnly = e : this.logger.error("zc.p.stoto.0 param must be param")
            }, e.prototype.createStream = function (e) {
                return this.rtcModules.publishModule.createStream(e)
            }, e.prototype.destroyStream = function (e) {
                this.rtcModules.publishModule.destroyStream(e)
            }, e.prototype.startPublishingStream = function (e, t, r) {
                return this.logger.info(d.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + "call by user"), this.rtcModules.publishModule.startPublishingStream(e, t, r)
            }, e.prototype.stopPublishingStream = function (e) {
                return this.logger.info(d.ZEGO_WEBRTC_ACTION.STOP_PUBLISHING_STREAM + "call by user"), this.rtcModules.publishModule.stopPublishingStream(e)
            }, e.prototype.setVideoConfig = function (e, t) {
                return this.rtcModules.advancedModule.setVideoConfig(e, t)
            }, e.prototype.setAudioConfig = function (e, t) {
                return this.rtcModules.advancedModule.setAudioConfig(e, t)
            }, e.prototype.replaceTrack = function (e, t) {
                return this.rtcModules.advancedModule.replaceTrack(e, t)
            }, e.prototype.preloadEffect = function (e, t, r) {
                this.rtcModules.audioMixModule.preloadEffect(e, t, r)
            }, e.prototype.playEffect = function (e, t, r) {
                this.rtcModules.audioMixModule.playEffect(e, t, r)
            }, e.prototype.pauseEffect = function (e, t) {
                return this.rtcModules.audioMixModule.pauseEffect(e, t)
            }, e.prototype.resumeEffect = function (e, t) {
                return this.rtcModules.audioMixModule.resumeEffect(e, t)
            }, e.prototype.stopEffect = function (e, t) {
                return this.rtcModules.audioMixModule.stopEffect(e, t)
            }, e.prototype.unloadEffect = function (e) {
                return this.rtcModules.audioMixModule.unloadEffect(e)
            }, e.prototype.startMixingAudio = function (e, t) {
                return this.rtcModules.audioMixModule.startMixingAudio(e, t)
            }, e.prototype.stopMixingAudio = function (e, t) {
                return this.rtcModules.audioMixModule.stopMixingAudio(e, t)
            }, e.prototype.mixingBuffer = function (e, t, r, o) {
                this.rtcModules.audioMixModule.mixingBuffer(e, t, r, o)
            }, e.prototype.stopMixingBuffer = function (e, t) {
                return this.rtcModules.audioMixModule.stopMixingBuffer(e, t)
            }, e.prototype.setMixingAudioVolume = function (e, t, r) {
                return this.rtcModules.audioMixModule.setMixingAudioVolume(e, t, r)
            }, e.prototype.checkSystemRequirements = function () {
                var t = this,
                    r = navigator && navigator.mediaDevices && (e.screenShotReady || "getDisplayMedia" in navigator.mediaDevices);
                return new Promise((function (e) {
                    var o = i.getReportSeq();
                    t.dataReport.newReport(o, c.ZegoRTCLogEvent.kZegoTaskCheckSystemRequirements.event);
                    s.ClientUtil.supportDetection(r, (function (r) {
                        t.dataReport.addMsgInfo(o, {capability: c.ZegoRTCLogEvent.kZegoTaskCheckSystemRequirements.capability(r)}), t.dataReport.uploadReport(o), e(r)
                    }))
                }))
            }, e.prototype.enumDevices = function () {
                var e = this;
                return this.logger.info("zc.ed.0 call"), new Promise((function (t, r) {
                    var o = i.getReportSeq();
                    e.dataReport.newReport(o, c.ZegoRTCLogEvent.kZegoTaskEnumDevices.event);
                    s.ClientUtil.getDevices((function (r) {
                        var i = [];
                        r.cameras.forEach((function (e) {
                            return i.push({device: e.deviceName, type: 0})
                        })), r.microphones.forEach((function (e) {
                            return i.push({device: e.deviceName, type: 1})
                        })), r.speakers.forEach((function (e) {
                            return i.push({device: e.deviceName, type: 2})
                        })), e.dataReport.addMsgInfo(o, {dev_list: c.ZegoRTCLogEvent.kZegoTaskEnumDevices.dev_list(i)}), e.dataReport.uploadReport(o), t(r)
                    }), (function (t) {
                        e.dataReport.addMsgInfo(o, t), e.dataReport.uploadReport(o), r(t)
                    }))
                }))
            }, e.prototype.getAudioInfo = function (e, t, r) {
                if (!e) return this.logger.error("loclStream is empty!"), !1;
                var i = o({}, r);
                return new a.MediaUtil(this.ac, i).connectToSource(e, (function (e) {
                    t(e)
                }))
            }, e.prototype.getSoundLevel = function (e, t, r) {
                this.rtcModules.audioMixModule.getSoundLevel(e, t, r)
            }, e.prototype.stopSoundLevel = function (e) {
                this.logger.info("zc.ssl call");
                var t = i.getReportSeq();
                this.dataReport.newReport(t, c.ZegoRTCLogEvent.kZegoTaskStopSoundLevel);
                var r = this.stateCenter.audioStreamList[e.id];
                r.mic.disconnect(), r.script.disconnect(), delete this.stateCenter.audioStreamList[e.id], this.dataReport.uploadReport(t)
            }, e.handleDataAvailable = function (t) {
                t.data && t.data.size > 0 && e.recordedBlobs.push(t.data)
            }, e.prototype.startRecord = function (t) {
                var r = this, o = t.captureStream();
                e.recordedBlobs = [];
                var s = {mimeType: "video/webm;codecs=vp9"};
                i.MediaRecorder.isTypeSupported(s.mimeType) || (s = {mimeType: "video/webm;codecs=vp8"}, i.MediaRecorder.isTypeSupported(s.mimeType) || (s = {mimeType: "video/webm"}, i.MediaRecorder.isTypeSupported(s.mimeType) || (s = {mimeType: ""})));
                try {
                    e.mediaRecorder = new i.MediaRecorder(o, s)
                } catch (e) {
                    return void this.logger.error("Exception while creating ZegoMediaRecorder:", e)
                }
                e.mediaRecorder.onstop = function (e) {
                    r.logger.warn("Recorder stopped: " + e)
                }, e.mediaRecorder.ondataavailable = e.handleDataAvailable, e.mediaRecorder.start(10)
            }, e.prototype.stopRecord = function () {
                e.mediaRecorder ? e.mediaRecorder.stop() : this.logger.warn("please invoke startRecord first")
            }, e.prototype.resumeRecord = function () {
                e.mediaRecorder ? e.mediaRecorder.resume() : this.logger.warn("please invoke startRecord first")
            }, e.prototype.pauseRecord = function () {
                e.mediaRecorder ? e.mediaRecorder.pause() : this.logger.warn("please invoke startRecord first")
            }, e.prototype.saveRecord = function (t) {
                if (e.mediaRecorder && e.recordedBlobs) {
                    var r = new Blob(e.recordedBlobs, {type: "video/webm"}), o = window.URL.createObjectURL(r),
                        i = document.createElement("a");
                    i.style.display = "none", i.href = o, i.download = t + ".webm", document.body.appendChild(i), i.click(), setTimeout((function () {
                        document.body.removeChild(i), window.URL.revokeObjectURL(o)
                    }), 100)
                } else this.logger.warn("please invoke startRecord first")
            }, e.prototype.takeSnapShot = function (e, t) {
                if (e && 0 !== e.videoHeight) {
                    var r = document.createElement("canvas");
                    r.width = e.videoWidth, r.height = e.videoHeight;
                    var o = r.getContext("2d");
                    o && o.drawImage(e, 0, 0, r.width, r.height), t.src = r.toDataURL("image/jpeg")
                } else this.logger.error("video can not empty")
            }, e.prototype.saveSnapShot = function (e, t) {
                if (e && 0 !== e.videoHeight) {
                    var r = document.createElement("canvas");
                    r.width = e.videoWidth, r.height = e.videoHeight;
                    var o = r.getContext("2d");
                    o && o.drawImage(e, 0, 0, r.width, r.height), r.toBlob((function (e) {
                        var r = window.URL.createObjectURL(e), o = document.createElement("a");
                        o.style.display = "none", o.href = r, o.download = t + ".jpeg", document.body.appendChild(o), o.click(), setTimeout((function () {
                            document.body.removeChild(o), window.URL.revokeObjectURL(r)
                        }), 100)
                    }))
                } else this.logger.error("video can not empty")
            }, e.prototype.useVideoDevice = function (e, t) {
                return this.rtcModules.advancedModule.useVideoDevice(e, t)
            }, e.prototype.useAudioDevice = function (e, t) {
                return this.rtcModules.advancedModule.useAudioDevice(e, t)
            }, e.prototype.setSoundLevelDelegate = function (e, t) {
                this.logger.info("zc.ssd.0 call"), "boolean" == typeof e ? t && (!s.ClientUtil.checkInteger(t) || t < 100 || t > 3e3) ? this.logger.error("zc.ssd.0 soundLevel interval must be integer number which is between 100 and 3000") : this.rtcModules.streamCenter.setSoundLevelDelegate(e, t) : this.logger.error("zc.ssd.0 param 1 must be boolean")
            }, e.prototype.on = function (e, t) {
                return this.rtcModules.bindListener(e, t)
            }, e.prototype.off = function (e, t) {
                return this.rtcModules.deleteListener(e, t)
            }, e.prototype.getVersion = function () {
                return i.PROTO_VERSION
            }, e.prototype.setStreamExtraInfo = function (e, t) {
                return this.rtcModules.streamHandler.setStreamExtraInfo(e, t)
            }, e.prototype.addPublishCdnUrl = function (e, t) {
                return this.logger.info("zg.cm.apu call ", e, t), this.rtcModules.streamHandler.publishTarget({
                    type: "addpush",
                    streamID: e,
                    pushUrl: t
                })
            }, e.prototype.removePublishCdnUrl = function (e, t) {
                return this.logger.info("zg.cm.apu call ", e, t), this.rtcModules.streamHandler.publishTarget({
                    type: "delpush",
                    streamID: e,
                    pushUrl: t
                })
            }, e.prototype.startMixerTask = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    e.outputConfig && e.outputConfig.outputFps && (e.outputConfig.outputFPS = e.outputConfig.outputFps);
                    var n = i.getReportSeq();
                    t.dataReport.newReport(n, c.ZegoRTCLogEvent.kZegoTaskMixStart.event), s.ClientUtil.logReportCallback("kZegoTaskMixStart" + e.taskID, t.dataReport, n, t.stateCenter.reportList);
                    t.rtcModules.streamHandler.updateMixStream(e, (function (o) {
                        t.dataReport.uploadReport(n), s.ClientUtil.unregisterCallback("kZegoTaskMixStart" + e.taskID, t.stateCenter.reportList), r(o)
                    }), (function (r) {
                        var i, a, d;
                        r.errorCode < 2e9 && r.errorCode > 1e9 ? (i = s.ClientUtil.mixServerError(r.errorCode)[0], d = errorList[i], a = s.ClientUtil.mixServerError(r.errorCode)[1]) : r.errorCode < 1e6 && (d = s.ClientUtil.decodeServerError(r.errorCode, r.extendedData), a = s.ClientUtil.getLiveRoomError(r.errorCode)), d ? t.dataReport.addMsgInfo(n, d) : t.dataReport.addMsgInfo(n, r), t.dataReport.uploadReport(n), s.ClientUtil.unregisterCallback("kZegoTaskMixStart" + e.taskID, t.stateCenter.reportList), a && (r.errorCode = errorCodeList[a].code), o(r)
                    }))
                }))
            }, e.prototype.setMixerTaskConfig = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    var n = i.getReportSeq();
                    t.dataReport.newReport(n, c.ZegoRTCLogEvent.kZegoTaskMixConfig.event), s.ClientUtil.logReportCallback("kZegoTaskMixConfig", t.dataReport, n, t.stateCenter.reportList), t.rtcModules.streamHandler.setMixerTaskConfig(e).then((function (e) {
                        t.dataReport.uploadReport(n), s.ClientUtil.unregisterCallback("kZegoTaskMixConfig", t.stateCenter.reportList), r(e)
                    })).catch((function (e) {
                        t.dataReport.addMsgInfo(n, e), t.dataReport.uploadReport(n), s.ClientUtil.unregisterCallback("kZegoTaskMixConfig", t.stateCenter.reportList), o(e)
                    }))
                }))
            }, e.prototype.stopMixerTask = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    var n = i.getReportSeq();
                    if (t.dataReport.newReport(n, c.ZegoRTCLogEvent.kZegoTaskMixStop.event), !e || "string" != typeof e || e.length > i.MAX_MIX_TASK_ID_LENGTH || !s.ClientUtil.checkIllegalCharacters(e)) return t.logger.error("zb.rh.lg taskID must be string less 256"), t.dataReport.addMsgInfo(n, {
                        error: c.ZegoRTCLogEvent.kZegoTaskMixStop.error.kParamError.code,
                        message: c.ZegoRTCLogEvent.kZegoTaskMixStop.error.kParamError.message + " param taskID error"
                    }), t.dataReport.uploadReport(n), void o({
                        errorCode: c.ZegoRTCLogEvent.kZegoTaskMixStop.error.kParamError.code,
                        extendedData: c.ZegoRTCLogEvent.kZegoTaskMixStop.error.kParamError.message + " param taskID error"
                    });
                    t.rtcModules.streamHandler.stopMixStream(e, (function (e) {
                        t.dataReport.uploadReport(n), r(e)
                    }), (function (e) {
                        var r, a, d;
                        e.errorCode < 2e9 && e.errorCode > 1e9 ? (r = s.ClientUtil.mixServerError(e.errorCode - i.MIXSTREAM_ERROR_CODE)[0], a = errorList[r], d = s.ClientUtil.mixServerError(e.errorCode - i.MIXSTREAM_ERROR_CODE)[1]) : e.errorCode < 1e6 && (a = s.ClientUtil.decodeServerError(e.errorCode, e.extendedData), d = s.ClientUtil.getLiveRoomError(e.errorCode)), a ? t.dataReport.addMsgInfo(n, a) : t.dataReport.addMsgInfo(n, e), t.dataReport.uploadReport(n), d && (e.errorCode = errorCodeList[d].code), o(e)
                    }))
                }))
            }, e.screenShotReady = !1, e
        }();
        t.ZegoWebRTC = u, window.addEventListener("message", (function (e) {
            var t = e.data.type, r = e.origin;
            r !== window.location.origin && console.warn("ScreenStream: you should discard foreign event from origin:", r), "SS_PING" === t && (u.screenShotReady = !0)
        }))
    }, function (e, t, r) {
        "undefined" != typeof self && self, e.exports = function (e) {
            var t = {};

            function r(o) {
                if (t[o]) return t[o].exports;
                var i = t[o] = {i: o, l: !1, exports: {}};
                return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports
            }

            return r.m = e, r.c = t, r.d = function (e, t, o) {
                r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
            }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (r.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var i in e) r.d(o, i, function (t) {
                    return e[t]
                }.bind(null, i));
                return o
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 6)
        }([function (e, t, r) {
            "use strict";
            var o;
            Object.defineProperty(t, "__esModule", {value: !0}), t.LinkedList = t.ListNode = t.getReportSeq = t.getSeq = t.REPORT_ACTION = t.E_CLIENT_TYPE = t.ENUM_PUBLISH_STATE_NEGO = t.ENUM_PUSH_SIGNAL_SUB_CMD = t.ENUM_SIGNAL_SUB_CMD = t.SERVER_ERROR_CODE = t.ENUM_STREAM_UPDATE_CMD = t.MINIUM_HEARTBEAT_INTERVAL = t.ENUM_NETWORK_STATE = t.ENUM_RUN_STATE = t.MAX_TRANS_DATA_LENGTH = t.MAX_TRANS_TYPE_LENGTH = t.MAX_MIX_TASK_ID_LENGTH = t.MAX_MESSAGE_LENGTH = t.MAX_ROOM_ID_LENGTH = t.MAX_USER_NAME_LENGTH = t.MAX_USER_ID_LENGTH = t.MAX_STREAM_ID_LENGTH = t.MAX_TRY_HEARTBEAT_COUNT = t.SEND_MSG_TIMEOUT = t.SEND_MSG_RESET = t.MAX_TRY_CONNECT_COUNT = t.ENUM_CONNECT_STATE = t.ENUM_SCREEM_RESOLUTION_TYPE = t.ENUM_RESOLUTION_TYPE = t.ENUM_SIGNAL_STATE = t.ERROR_CODES = t.sdkErrorList = t.ENUM_REMOTE_TYPE = t.LOG_LEVEL = t.ENUM_LOG_LEVEL = t.ROOMVERSION = t.PROTO_VERSION = t.ENV = void 0, t.ENV = 0, t.PROTO_VERSION = "1.0.1", t.ROOMVERSION = "V1", function (e) {
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
            }, t.ERROR_CODES = {
                ROOM_SESSION_ID_ERR: 1000000152,
                FETCH_TRANS_UNKNOWN_CHANNEL: 1000001108,
                FETCH_TRANS_UNKNOWN_TYPE: 1000001109,
                FETCH_TRANS_WRONG_SEQ: 1000001110
            }, function (e) {
                e[e.disconnected = 0] = "disconnected", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected"
            }(t.ENUM_SIGNAL_STATE || (t.ENUM_SIGNAL_STATE = {})), t.ENUM_RESOLUTION_TYPE = {
                LOW: {
                    width: 320,
                    height: 240,
                    frameRate: 15,
                    bitRate: 300
                },
                MEDIUM: {width: 640, height: 480, frameRate: 15, bitRate: 800},
                HIGH: {width: 1280, height: 720, frameRate: 20, bitRate: 1500}
            }, t.ENUM_SCREEM_RESOLUTION_TYPE = {
                LOW: {frameRate: 20, bitRate: 800},
                MEDIUM: {frameRate: 15, bitRate: 1200},
                HIGH: {frameRate: 5, bitRate: 2e3}
            }, t.ENUM_CONNECT_STATE = {
                disconnect: 0,
                connecting: 1,
                connected: 2
            }, t.MAX_TRY_CONNECT_COUNT = 1, t.SEND_MSG_RESET = 2, t.SEND_MSG_TIMEOUT = 1, t.MAX_TRY_HEARTBEAT_COUNT = 5, t.MAX_STREAM_ID_LENGTH = 256, t.MAX_USER_ID_LENGTH = 64, t.MAX_USER_NAME_LENGTH = 256, t.MAX_ROOM_ID_LENGTH = 128, t.MAX_MESSAGE_LENGTH = 1024, t.MAX_MIX_TASK_ID_LENGTH = 256, t.MAX_TRANS_TYPE_LENGTH = 128, t.MAX_TRANS_DATA_LENGTH = 4096, function (e) {
                e[e.logout = 0] = "logout", e[e.trylogin = 1] = "trylogin", e[e.login = 2] = "login"
            }(t.ENUM_RUN_STATE || (t.ENUM_RUN_STATE = {})), function (e) {
                e[e.offline = 0] = "offline", e[e.online = 1] = "online"
            }(t.ENUM_NETWORK_STATE || (t.ENUM_NETWORK_STATE = {})), t.MINIUM_HEARTBEAT_INTERVAL = 3e3, t.ENUM_STREAM_UPDATE_CMD = {
                added: 12001,
                deleted: 12002,
                updated: 12003
            }, t.SERVER_ERROR_CODE = 1e4, t.ENUM_SIGNAL_SUB_CMD = {
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
                iceConnected: 5,
                iceDisconnected: 6
            }, function (e) {
                e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallPragram = 2] = "ClientType_SmallPragram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
            }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {})), t.REPORT_ACTION = {
                eventStart: "eventStart",
                eventEndWithMsgInfo: "eventEndWithMsgInfo",
                addEventMsg: "addEventMsg",
                addEvent: "addEvent",
                eventEnd: "eventEnd",
                addMsgInfo: "addMsgInfo"
            }, t.getSeq = (o = 1, function () {
                return o++
            }), t.getReportSeq = function () {
                var e = 1;
                return function () {
                    return e++
                }
            }();
            var i = function () {
                function e(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.next = null, this.prev = null, this._id = e, this._data = t
                }

                return Object.defineProperty(e.prototype, "id", {
                    get: function () {
                        return this._id ? this._id : null
                    }, set: function (e) {
                        this._id = e
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "data", {
                    get: function () {
                        return this._data
                    }, set: function (e) {
                        this._data = e
                    }, enumerable: !1, configurable: !0
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
                    for (var t = this.start, r = !1, o = null; t.hasNext() && !r;) e(t = t.next) && (o = t, r = !0);
                    return o
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
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZEGO_RTM_ACTION = void 0, function (e) {
                e.ZEGOEXPRESSWEBRTM_CONSTRUCTOR = "zm.0", e.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER = "zm.wl", e.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG = "zm.slf", e.ZEGOEXPRESSWEBRTM_SET_DEBUG_VERBOSE = "zm.sdv", e.ZEGOEXPRESSWEBRTM_LOGIN_ROOM = "zm.lg", e.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM = "zm.lo", e.ZEGOEXPRESSWEBRTM_SEND_CUSTOM = "zm.scc", e.ZEGOEXPRESSWEBRTM_SEND_BCM = "zm.sbcm", e.ZEGOEXPRESSWEBRTM_SEND_RLM = "zm.srlm", e.ZEGOEXPRESSWEBRTM_SEND_BRM = "zm.sbrm", e.ZEGOEXPRESSWEBRTM_SEND_RAM = "zm.sram", e.ZEGOEXPRESSWEBRTM_ON = "zm.on", e.ZEGOEXPRESSWEBRTM_OFF = "zm.off", e.ROOM_LOGIN_ROOM = "zm.rm.lg", e.ROOM_TRY_LOGIN = "zm.rm.tl", e.ROOM_OPEN_HANDLER = "zm.rm.op", e.ROOM_HANDLE_LOGINRSP = "zm.rm.lgr", e.ROOM_CLOSEHANDLER = "zm.rm.clh", e.ROOM_LOGOUT = "zm.rm.lo", e.ROOM_RESET_ROOM = "zm.rm.rr", e.ROOM_DISCONNECT = "zm.rm.dcn", e.ROOM_KICK_OUT = "zm.rm.kco", e.ROOM_STATUS_CALLBACK = "zm.rm.scb", e.HEARTBEAT_START = "zm.hb.st", e.HEARTBEAT_HEARTBEAT_RSP = "zm.hb.rsp", e.HEARTBEAT_RESET = "zm.hb.rst", e.SERVICE_PUSH = "zm.sv.ps", e.SERVICE_SEND = "zm.sv.sd", e.USER_LOGIN_RSP = "zm.us.lgr", e.USER_FETCH_USER = "zm.us.ftu", e.USER_FETCH_USER_RSP = "zm.us.urp", e.USER_USER_PUSH = "zm.us.uph", e.USER_MERGE_SEQ = "zm.us.mg", e.USER_MERGE = "zm.us.mg", e.USER_HB_PATCH = "zm.us.pt", e.MESSAGE_SEND_RELIABLE = "zm.msg.sdr", e.MESSAGE_FETCH_RELIABLE = "zm.msg.frm", e.MESSAGE_RELIABLE_RSP = "zm.msg.rlr", e.MESSAGE_RELIABLE_PUSH = "zm.msg.rps", e.MESSAGE_SEND_ROOM_MSG = "zm.msg.srm", e.MESSAGE_SEND_CUSTOM_MSG = "zm.msg.scm", e.MESSAGE_SEND_BIG_MSG = "zm.msg.sbm", e.MESSAGE_BIG_MSG_PUSH = "zm.msg.bps", e.MESSAGE_SEND_RELAY_MSG = "zm.msg.slm", e.LIVE_SEND_SIGNAL = "zm.lv.ssg", e.LIVE_RESPOND_JOIN_LIVE = "zm.lv.rjl", e.LIVE_PUSH_SIGNAL = "zm.lv.pss", e.STATE_ACTION = "zm.st.at"
            }(t.ZEGO_RTM_ACTION || (t.ZEGO_RTM_ACTION = {}))
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.errorCodeList = void 0, t.errorCodeList = {
                SERVER: {code: 0, msg: "liverooom cmd error"},
                SUCCESS: {code: 0, msg: "success."},
                INIT: {code: 2000000001, msg: "init sdk wrong"},
                NOT_LOGIN: {code: 1000002, msg: "not login room"},
                STREAMID_TOO_LONG: {code: 1000014, msg: "stream ID is too long"},
                STREAM_ID_NULL: {code: 1000015, msg: "streamID is empty"},
                STREAM_ID_INVALID_CHARACTER: {code: 1000016, msg: "stream ID contains illegal characters"},
                NETWORK_BROKEN: {code: 1000017, msg: "network is broken"},
                INPUT_PARAM: {code: 1100001, msg: "input parm error."},
                TIMEOUT: {code: 1100002, msg: "network timeout."},
                SOCKET_CLOSE: {code: 1100003, msg: "socket close"},
                INIT_SDK_WRONG: {code: 1101e3, msg: "init sdk wrong"},
                USER_ID_NULL: {code: 1002005, msg: "user ID is empty"},
                USER_ID_INVALID_CHARACTER: {code: 1002006, msg: "user ID contains illegal characters"},
                USER_ID_TOO_LONG: {code: 1002007, msg: "user ID is too long"},
                USER_NAME_NULL: {code: 1002008, msg: "username is empty"},
                USER_NAME_TOO_LONG: {code: 1002010, msg: "username is too long"},
                ROOM_ID_NULL: {code: 1002011, msg: "room ID is empty"},
                ROOM_ID_INVALID_CHARACTER: {code: 1002012, msg: "room ID contains illegal characters"},
                ROOM_ID_TOO_LONG: {code: 1002013, msg: "room ID is too long"},
                LOGIN_TIMEOUT: {code: 1002031, msg: "login timeout"},
                ROOM_MAX_USER_COUNT: {code: 1002034, msg: "users logging into the room exceeds the maximum number"},
                MULTIPLE_LOGIN_KICKOUT: {code: 1002050, msg: "kickout may be the same user ID login other"},
                ROOM_RETRY_TIMEOUT: {code: 1002053, msg: "network is broken and login fail."},
                MANUAL_KICKOUT: {code: 1002055, msg: "server has sent a signal to kick out"},
                ROOM_INNER_ERROR: {code: 1002099, msg: "room inner error"},
                HEARTBEAT_TIMEOUT: {code: 1102001, msg: "heartbeat timeout."},
                PARSE_JSON_ERROR: {code: 1102011, msg: "parse json error."},
                LOGIN_PROCESSING: {code: 1102012, msg: "login is processing."},
                LIVEROMM_REQUEST_ERROR: {code: 1102013, msg: "liveroom request error."},
                ZPUSH_REQUEST_FAIL: {code: 1102014, msg: "zpush request fail."},
                LOGIN_STATE_WRONG: {code: 1102015, msg: "user login state is wrong."},
                TOKEN_ERROR: {code: 1102016, msg: "token error"},
                DIAPATCH_ERROR: {code: 1102017, msg: "dispatch error"},
                TOKEN_EXPIRED: {code: 1102018, msg: "token expired"},
                SUBCMD_ERROR: {code: 1102019, msg: "subcmd error."},
                ZEGO_AUTH_ERROR: {code: 1102020, msg: "zego auth error."},
                BIZ_CHANNEL_ERROR: {code: 1102021, msg: "biz channel error."},
                PUBLISHER_EXTRA_INFO_NULL: {code: 1003050, msg: "extra info of publshing stream is null"},
                PUBLISHER_EXTRA_INFO_TOO_LONG: {code: 1003051, msg: "stream extra info is too long"},
                PUBLISHER_PARAM: {code: 1103001, msg: "input parm error"},
                PUBLISHER_BROWSER_NOT_SUPPORT: {code: 1103002, msg: "browser do not support"},
                PUBLISHER_DISPATCH_FAIL: {code: 1103003, msg: "dispatch request error"},
                PUBLISHER_SCREEN_FAILED: {code: 1103010, msg: "screen fail"},
                ENUMERATE_DEVICES_FAIL: {code: 1103011, msg: "enumerate devices fail"},
                PUBLISHER_DISPATCH_REQUEST_FAIL: {code: 1103020, msg: "dispatch request fail"},
                PUBLISHER_SESSION_REQUEST_FAIL: {code: 1103021, msg: "session request fail"},
                PUBLISHER_CREATE_OFFER_ERROR: {code: 1103022, msg: "create offer error"},
                PUBLISHER_SET_LOCAL_DESC_ERROR: {code: 1103023, msg: "setLocalDescription error"},
                PUBLISHER_MEDIA_DESC_ERROR: {code: 1103024, msg: "mediaDesc error"},
                PUBLISHER_SET_REMOTE_DESC_ERROR: {code: 1103025, msg: "other side offer error"},
                PUBLISHER_CANDIDATE_ERROR: {code: 1103026, msg: "candidate error"},
                PUBLISHER_SESSION_CLOSED: {code: 1103027, msg: "server session closed"},
                PUBLISHER_MEDIA_CONNECTION_ERROR: {code: 1103028, msg: "ice connection error"},
                PUBLISHER_CONSTRAINTS_ERROR: {code: 1103029, msg: "constraint error"},
                PUBLISHER_SERVER_NEGO_TIMEOUT: {code: 1103030, msg: "negotiation timeout"},
                PUBLISH_NOT_PUBLISH: {code: 1103040, msg: "publisher not found"},
                PUBLISH_DEVICE_OUT_ERR: {code: 1103041, msg: "device change "},
                PUBLISH_SCREEN_CANCELED: {code: 1103042, msg: "screen canceled"},
                PUBLISH_SCREEN_NOT_SUPPORT: {code: 1103043, msg: "screen not support"},
                PUBLISH_NO_PREVIEW: {code: 1103044, msg: "stream is not from zego"},
                VIDEO_DEVICE_FALSE: {code: 1103045, msg: "video is false"},
                AUDIO_DEVICE_FALSE: {code: 1103046, msg: "audio is false"},
                TRACK_NOT_FOUND: {code: 1103047, msg: "track is not found"},
                DEVICE_NOT_FOUND: {code: 1103048, msg: "device is not found"},
                PLAYER_PARAM: {code: 1104001, msg: "input parm error"},
                PLAYER_DISPATCH_REQUEST_FAIL: {code: 1104020, msg: "dispatch request fail"},
                PLAYER_SESSION_REQUEST_FAIL: {code: 1104021, msg: "session request fail"},
                PLAYER_CREATE_OFFER_ERROR: {code: 1104022, msg: "create offer error"},
                PLAYER_SET_LOCAL_DESC_ERROR: {code: 1104023, msg: "setLocalDescription error"},
                PLAYER_MEDIA_DESC_ERROR: {code: 1104024, msg: "mediaDesc error"},
                PLAYER_SET_REMOTE_DESC_ERROR: {code: 1104025, msg: "other side offer error"},
                PLAYER_CANDIDATE_ERROR: {code: 1104026, msg: "candidate error"},
                PLAYER_SESSION_CLOSED: {code: 1104027, msg: "server session closed"},
                PLAYER_MEDIA_CONNECTION_ERROR: {code: 1104028, msg: "ice connection error"},
                PLAYER_SERVER_NEGO_TIMEOUT: {code: 1104030, msg: "negotiation timeout"},
                MIXER_NO_SERVICES: {code: 1005e3, msg: "no mix stream service"},
                MIXER_TASK_ID_NULL: {code: 1005001, msg: "mixer task is null"},
                MIXER_TASK_ID_TOO_LONG: {code: 1005002, msg: "task ID is too long"},
                MIXER_TASK_ID_INVALID_CHARACTER: {code: 1005003, msg: "task ID contains illegal characters"},
                MIXER_NO_OUTPUT_TARGET: {code: 1005005, msg: "task configuration does not specify output"},
                MIXER_OUTPUT_TARGET_INVALID: {code: 1005006, msg: "stream output target is incorrect"},
                MIXER_START_REQUEST_ERROR: {
                    code: 1005010,
                    msg: "start mixer task fail, possibly due to network reasons"
                },
                MIXER_STOP_REQUEST_ERROR: {code: 1005011, msg: "stop mixer task fail, possibly due to network reasons"},
                MIXER_NOT_OWNER_STOPMIXER: {
                    code: 1005012,
                    msg: " maxed task must be stopped by the start user of the task"
                },
                MIXER_INPUTLIST_NULL: {code: 1005020, msg: "Mixed stream task input list is null"},
                MIXER_OUTPUTLIST_NULL: {code: 1005021, msg: "Mixed stream task output list is null"},
                MIXER_VIDEO_CONFIG_INVALID: {code: 1005023, msg: "invalid mixed stream task video configuration"},
                MIXER_EXCEED_MAX_INPUT_COUNT: {code: 1005025, msg: "more than the maximum number of input streams"},
                MIXER_INPUT_STREAM_NOT_EXISTS: {code: 1005026, msg: "Input stream does not exist"},
                MIXER_INPUT_PARAMETERS_ERROR: {code: 1005027, msg: "stream input parameters are wrong"},
                MIXER_EXCEED_MAX_OUTPUT_COUNT: {code: 1005030, msg: "more than the maximum number of output streams"},
                MIXER_AUTHENTICATION_FAILED: {code: 1005050, msg: "mixed stream authentication failed"},
                MIXER_WATERMARK_NULL: {code: 1005061, mag: "input watermark is null"},
                MIXER_WATERMARK_PARAMETERS_ERROR: {code: 1005062, msg: "input watermark parameter is wrong"},
                MIXER_WATERMARK_URL_INVALID: {code: 1005063, msg: "illegal input watermark URL"},
                MIXER_BACKGROUND_IMAGE_URL_INVALID: {code: 1005067, msg: "illegal input background image URL"},
                MIXER_INNER_ERROR: {code: 1005099, msg: "mixed stream internal error"},
                DEVICE_ERROR_TYPE_UNPLUGGED: {code: 1006006, msg: "the device is unplugged"},
                IM_CONTENT_NULL: {code: 1009001, msg: "message content is empty"},
                IM_CONTENT_TOO_LONG: {code: 1009002, msg: "message content is too long"},
                IM_SEND_FAILED: {code: 1009010, msg: "failed to send message"},
                FREQ_LIMITED: {code: 1109001, msg: "frequency limited."}
            }
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ClientUtil = void 0;
            var o = r(0), i = r(2), s = function () {
                function e() {
                }

                return e.checkConfigParam = function (e, t, r) {
                    return e && "number" == typeof e && this.checkInteger(e) ? !(!t || "string" != typeof t && !Array.isArray(t) || "" == t) || (r.error("ccp.0 server must be string or string array and not empty"), !1) : (r.error("ccp.0 appid must be positive integer number and not empty"), !1)
                }, e.checkIllegalCharacters = function (e) {
                    return /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/.test(e) && /^[^:/]*$/g.test(e)
                }, e.isUrl = function (e) {
                    return !!(e.startsWith("rtmp://") || e.startsWith("https://") && e.endsWith(".flv") || e.startsWith("https://") && e.endsWith(".m3u8"))
                }, e.registerCallback = function (e, t, r) {
                    var o, i;
                    t.success && (o = t.success, r[e + "SuccessCallback"] = o), t.error && (i = t.error, r[e + "ErrorCallback"] = i)
                }, e.actionErrorCallback = function (e, t) {
                    return t[e + "ErrorCallback"]
                }, e.actionSuccessCallback = function (e, t) {
                    return t[e + "SuccessCallback"]
                }, e.logReportCallback = function (t, r, o, i) {
                    e.registerCallback(t, {
                        success: function (t, i) {
                            for (var s = [], n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
                            e.dataReportEvent(r, o, t, i, s)
                        }
                    }, i)
                }, e.proxyRes = function (t, r, o, i) {
                    return {
                        interResolve: function (e) {
                            t.uploadReport(r), o(e)
                        }, interReject: function (o, s) {
                            var n;
                            void 0 === s && (s = ""), (n = o.code < 2e9 && o.code > 1e9 ? e.decodeServerError(o.code, o.msg) : {
                                code: o.code,
                                message: o.msg
                            }) && t.addMsgInfo(r, {error: n.code, message: n.message + s}), t.uploadReport(r), i(o)
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
                        2002: "biz channel error",
                        1e9: "liveroom cmd error, code:"
                    };
                    if (0 === e) return i.errorCodeList.SUCCESS;
                    var r = i.errorCodeList.SERVER;
                    return r.code = e, r.msg = e > 1e9 ? t[1e9] + e : t[e] ? t[e] + " code:" + e : "unknown error code:" + e, r
                }, e.unregisterCallback = function (e, t) {
                    delete t[e + "SuccessCallback"], delete t[e + "ErrorCallback"]
                }, e.decodeServerError = function (e, t) {
                    var r = {code: -1, message: "server error"};
                    return r.code = e > 1e9 ? e - 1e9 + 52e6 : e + 2002e6, t && (r.message = t), r
                }, e.getLiveRoomError = function (e) {
                    return e > 1e9 ? {
                        1105: "ROOM_MAX_USER_COUNT",
                        1012: "PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM",
                        2002: "ROOM_ERROR_AUTHENTICATION_FAILED",
                        2003: "ROOM_ERROR_LOGIN_TIMEOUT"
                    }[e - 1e9] || "" : {
                        1: "PARSE_JSON_ERROR",
                        1001: "LOGIN_PROCESSING",
                        1002: "LIVEROMM_REQUEST_ERROR",
                        1003: "ZPUSH_REQUEST_FAIL",
                        1004: "ZPUSH_REQUEST_FAIL",
                        1005: "ZPUSH_REQUEST_FAIL",
                        1006: "LOGIN_STATE_WRONG",
                        1007: "ZPUSH_REQUEST_FAIL",
                        1008: "TOKEN_ERROR",
                        1009: "DIAPATCH_ERROR",
                        1010: "TOKEN_EXPIRED",
                        1011: "TOKEN_ERROR",
                        1012: "SUBCMD_ERROR",
                        1101: "ZEGO_AUTH_ERROR",
                        2001: "BIZ_CHANNEL_ERROR",
                        2002: "BIZ_CHANNEL_ERROR"
                    }[e] || "ROOM_INNER_ERROR"
                }, e.getKickoutError = function (e) {
                    var t = {code: e, message: "kickout reason = " + e};
                    switch (e) {
                        case 1:
                            t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                            break;
                        case 2:
                            t.code = 63000002, t.message = "zpush manual kickout", t.name = "MANUAL_KICKOUT";
                            break;
                        case 3:
                            t.code = 63000003, t.message = "kickout reason = " + e;
                            break;
                        case 4:
                            t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                            break;
                        default:
                            t.code = e, t.message = "kickout reason = " + e
                    }
                    return t
                }, e.dataReportEvent = function (e, t, r, o, i) {
                    switch (r) {
                        case"eventStart":
                            e.eventStart(t, o);
                            break;
                        case"eventEndWithMsgInfo":
                            e.eventEndWithMsgInfo(t, o, i[0]);
                            break;
                        case"addEventMsg":
                            e.addEventMsg(t, o, i[0], i[1]);
                            break;
                        case"addEvent":
                            e.addEvent(t, o);
                            break;
                        case"eventEnd":
                            e.eventEnd(t, o);
                            break;
                        case"addMsgInfo":
                            e.addMsgInfo(t, i[0])
                    }
                }, e.isKeepTryLogin = function (e) {
                    switch (e) {
                        case 1002:
                        case 1003:
                            return !0;
                        default:
                            return !1
                    }
                }, e.mergeUserList = function (e, t, r, o) {
                    e.debug("msl.0 call");
                    var i, s = [], n = [];
                    r || (r = []);
                    for (var a = 0; a < r.length; a++) {
                        i = !1;
                        for (var d = 0; d < t.length; d++) if (r[a].userID === t[d].userID) {
                            i = !0;
                            break
                        }
                        i || s.push(r[a])
                    }
                    for (var c = 0; c < t.length; c++) {
                        i = !1;
                        for (var l = 0; l < r.length; l++) if (t[c].userID === r[l].userID) {
                            i = !0;
                            break
                        }
                        i || n.push(t[c])
                    }
                    for (t.splice(0), a = 0; a < r.length; a++) t.push(t[a]);
                    o(s, n), e.debug("msl.0 call success")
                }, e.checkInteger = function (e, t) {
                    return 0 == t ? "number" == typeof e && e % 1 == 0 && e >= 0 : "number" == typeof e && e % 1 == 0 && e > 0
                }, e.checkValidNumber = function (e, t, r) {
                    return t = t || 1, r = r || 1e4, "number" == typeof e && e % 1 == 0 && e >= t && e <= r
                }, e.generateRandumNumber = function (e) {
                    return parseInt(Math.random() * (e + 1) + "", 10)
                }, e.uuid = function (e, t) {
                    var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [];
                    if (t = t || o.length, e) for (r = 0; r < e; r++) i[r] = o[0 | Math.random() * t]; else {
                        var s = void 0;
                        for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", r = 0; r < 36; r++) i[r] || (s = 0 | 16 * Math.random(), i[r] = o[19 == r ? 3 & s | 8 : s])
                    }
                    return i.join("")
                }, e.compareVersion = function (e, t) {
                    e = e.split("."), t = t.split(".");
                    for (var r = Math.max(e.length, t.length); e.length < r;) e.push("0");
                    for (; t.length < r;) t.push("0");
                    for (var o = 0; o < r; o++) {
                        var i = parseInt(e[o]), s = parseInt(t[o]);
                        if (i > s) return 1;
                        if (i < s) return -1
                    }
                    return 0
                }, e.getBrowser = function () {
                    var e = window.navigator.userAgent, t = null != window.ActiveXObject && -1 != e.indexOf("MSIE"),
                        r = -1 != e.indexOf("Firefox"), o = null != window.opr,
                        i = e.indexOf("Chrome") && window.chrome,
                        s = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version");
                    return t ? "IE" : r ? "Firefox" : o ? "Opera" : i ? "Chrome" : s ? "Safari" : "Unkown"
                }, e.isTestEnv = function (e) {
                    return -1 != e.indexOf("wss://wssliveroom-test.zego.im/ws") || -1 != e.indexOf("wss://test2-wsliveroom-api.zego.im/ws") || -1 != e.indexOf("wss://wsliveroom-test.zegocloud.com/ws") || -1 != e.indexOf("wss://wsliveroom-test.zego.im/ws") || -1 != e.indexOf("wss://webliveroom-test.zego.im/ws") || -1 != e.indexOf("wss://webliveroom-test-bak.zego.im/ws") || -1 != e.indexOf("wss://webliveroom-hk-test.zegocloud.com/ws") || -1 != e.indexOf("wss://webliveroom-hk-test-bak.zegocloud.com/ws")
                }, e.getLogLevel = function (e) {
                    return o.LOG_LEVEL[e]
                }, e
            }();
            t.ClientUtil = s
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoRTMLogEvent = void 0;
            var o = r(2), i = function (e) {
                return e
            };
            t.ZegoRTMLogEvent = {
                kZegoTaskInitSetting: {
                    event: "/sdk/init",
                    error: {kInvalidParamError: o.errorCodeList.INPUT_PARAM},
                    system_info: navigator.appVersion
                },
                kZegoTaskSetDebug: {event: "/sdk/set_debug", debug: i},
                kZegoTaskSetLog: {
                    event: "/sdk/set_log_config",
                    error: {kInvalidParamError: o.errorCodeList.INPUT_PARAM},
                    log_level: function (e) {
                        return e
                    },
                    remote_log_level: i,
                    log_url: i
                },
                kZegoTaskLoginRoom: {
                    event: "/sdk/login",
                    user_update: i,
                    max_member_count: i,
                    message: i,
                    token: i,
                    error: {
                        ROOM_ID_NULL: o.errorCodeList.ROOM_ID_NULL,
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        ROOM_ID_TOO_LONG: o.errorCodeList.ROOM_ID_TOO_LONG,
                        ROOM_ID_INVALID_CHARACTER: o.errorCodeList.ROOM_ID_INVALID_CHARACTER,
                        USER_ID_NULL: o.errorCodeList.USER_ID_NULL,
                        USER_ID_TOO_LONG: o.errorCodeList.USER_ID_TOO_LONG,
                        USER_ID_INVALID_CHARACTER: o.errorCodeList.USER_ID_INVALID_CHARACTER,
                        USER_NAME_NULL: o.errorCodeList.USER_NAME_NULL,
                        USER_NAME_TOO_LONG: o.errorCodeList.USER_NAME_TOO_LONG
                    },
                    subEvent: {
                        create_socket: {event: "create_socket", server: i, try_cnt: i},
                        liveroom_login: {event: "liveroom_login", server: i, respond_info: i}
                    }
                },
                kZegoTaskLogoutRoom: {event: "/sdk/logout", error: {INPUT_PARAM: o.errorCodeList.INPUT_PARAM}},
                kZegoTaskReLoginRoom: {
                    event: "/sdk/relogin",
                    error: {
                        ROOM_ID_NULL: o.errorCodeList.ROOM_ID_NULL,
                        ROOM_DISCONNECT: o.errorCodeList.NETWORK_BROKEN
                    },
                    subEvent: {
                        create_socket: {event: "create_socket", server: i, try_cnt: i},
                        liveroom_login: {event: "liveroom_login", server: i, respond_info: i}
                    }
                },
                kZegoTaskKickout: {event: "/sdk/kickout", user_id: i},
                kZegoTaskLiveRoomhHB: {
                    event: "/liveroom/hb",
                    room_sid: i,
                    error: {NOT_LOGIN: o.errorCodeList.NOT_LOGIN, HB_TIMEOUT: o.errorCodeList.TIMEOUT}
                },
                kZegoTaskLiveSendRoomBigIM: {
                    event: "/liveroom/send_big_room_message",
                    room_sid: i,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        IM_CONTENT_NULL: o.errorCodeList.IM_CONTENT_NULL,
                        IM_CONTENT_TOO_LONG: o.errorCodeList.IM_CONTENT_TOO_LONG
                    }
                },
                kZegoTaskLiveRoomSendCustomCommand: {
                    event: "/liveroom/send_custom_command",
                    room_sid: i,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        IM_CONTENT_NULL: o.errorCodeList.IM_CONTENT_NULL,
                        IM_CONTENT_TOO_LONG: o.errorCodeList.IM_CONTENT_TOO_LONG
                    }
                },
                kZegoTaskLiveRoomSendRoomMessage: {
                    event: "/liveroom/send_room_message",
                    room_sid: i,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        IM_CONTENT_NULL: o.errorCodeList.IM_CONTENT_NULL,
                        IM_CONTENT_TOO_LONG: o.errorCodeList.IM_CONTENT_TOO_LONG
                    }
                },
                kZegoTaskLiveRoomSendReliableMessage: {
                    event: "/liveroom/send_reliable_message",
                    room_sid: i,
                    error: {INPUT_PARAM: o.errorCodeList.INPUT_PARAM}
                },
                kZegoTaskLiveGetRoomBigIM: {event: "/liveroom/get_big_room_message"},
                kZegoTaskLiveRoomGetRoomMessage: {event: "/liveroom/get_room_message", room_sid: i},
                kZegoTaskLiveRoomGetCustomCommand: {event: "/liveroom/get_custom_command"},
                kZegoTaskLiveRoomGetUserUpdateInfo: {event: "/liveroom/get_user_update_info", user_update_type: i}
            }
        }, function (e, t, r) {
            var o;
            "undefined" != typeof self && self, o = function () {
                return function (e) {
                    var t = {};

                    function r(o) {
                        if (t[o]) return t[o].exports;
                        var i = t[o] = {i: o, l: !1, exports: {}};
                        return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                    }

                    return r.m = e, r.c = t, r.d = function (e, t, o) {
                        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
                    }, r.r = function (e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
                    }, r.t = function (e, t) {
                        if (1 & t && (e = r(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var o = Object.create(null);
                        if (r.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var i in e) r.d(o, i, function (t) {
                            return e[t]
                        }.bind(null, i));
                        return o
                    }, r.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default
                        } : function () {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = "./sdk/src/index.ts")
                }({
                    "./sdk/src/index.ts":
                    /*!**************************!*\
  !*** ./sdk/src/index.ts ***!
  \**************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.LoggerStateCenter = t.createZegoWebSocket = t.ZegoDataReport = t.ZegoLogger = void 0;
                        var o = r(/*! ../util/zego.stateCenter */"./sdk/util/zego.stateCenter.ts");
                        Object.defineProperty(t, "LoggerStateCenter", {
                            enumerable: !0, get: function () {
                                return o.LoggerStateCenter
                            }
                        });
                        var i = r(/*! ../util/zego.webSocket */"./sdk/util/zego.webSocket.ts");
                        Object.defineProperty(t, "createZegoWebSocket", {
                            enumerable: !0, get: function () {
                                return i.createZegoWebSocket
                            }
                        });
                        var s = r(/*! ./zego.datareport */"./sdk/src/zego.datareport.ts");
                        Object.defineProperty(t, "ZegoDataReport", {
                            enumerable: !0, get: function () {
                                return s.ZegoDataReport
                            }
                        });
                        var n = r(/*! ./zego.logger */"./sdk/src/zego.logger.ts");
                        Object.defineProperty(t, "ZegoLogger", {
                            enumerable: !0, get: function () {
                                return n.ZegoLogger
                            }
                        })
                    }, "./sdk/src/zego.datareport.ts":
                    /*!************************************!*\
  !*** ./sdk/src/zego.datareport.ts ***!
  \************************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        var o = this && this.__assign || function () {
                            return (o = Object.assign || function (e) {
                                for (var t, r = 1, o = arguments.length; r < o; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        };
                        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoDataReport = void 0;
                        var i = function () {
                            function e(e) {
                                this.dataStatistics = {}, this.logger = e
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
                                    var o = this.dataStatistics[e].events;
                                    if (o && 0 !== o.length) {
                                        for (var i = o.length - 1; i >= 0; i--) if (o[i].event == t && 0 == o[i].time_consumed) {
                                            o[i].time_consumed = Date.now() - o[i].event_time;
                                            break
                                        }
                                    } else this.logger.info("zd.ee.0 no events")
                                } else this.logger.info("zd.ee.0 no seq match")
                            }, e.prototype.eventEndWithMsg = function (e, t, r) {
                                if (this.dataStatistics[e]) {
                                    var i = this.dataStatistics[e].events;
                                    if (i) {
                                        for (var s = i.length - 1; s >= 0; s--) if (i[s].event == t && 0 == i[s].time_consumed) {
                                            i[s].time_consumed = Date.now() - i[s].event_time, null == i[s].msg_ext && (i[s].msg_ext = {}), i[s].msg_ext = o({}, r);
                                            break
                                        }
                                    } else this.logger.warn("zd.ee.0 no events")
                                } else this.logger.warn("zd.ee.0 no seq match")
                            }, e.prototype.eventEndWithMsgInfo = function (e, t, r) {
                                if (this.dataStatistics[e]) {
                                    var o = this.dataStatistics[e].events;
                                    if (o) {
                                        for (var i = o.length - 1; i >= 0; i--) if (o[i].event == t && 0 == o[i].time_consumed) {
                                            o[i].time_consumed = Date.now() - o[i].event_time, Object.assign(o[i], r);
                                            break
                                        }
                                    } else this.logger.warn("zd.ee.0 no events")
                                } else this.logger.warn("zd.ee.0 no seq match")
                            }, e.prototype.addEventInfo = function (e, t, r, o) {
                                if (this.dataStatistics[e]) {
                                    var i = this.dataStatistics[e].events;
                                    if (null != i) {
                                        for (var s = i.length - 1; s >= 0; s--) if (i[s].event == t && null != i[s].time_consumed) {
                                            null == i[s].msg_ext ? i[s].msg_ext = {} : i[s].msg_ext && (i[s].msg_ext[r] = o);
                                            break
                                        }
                                    } else this.logger.warn("zd.aei.0 no events")
                                } else this.logger.warn("zd.aei.0 no seq match")
                            }, e.prototype.addEventMsg = function (e, t, r, o) {
                                if (this.dataStatistics[e]) {
                                    var i = this.dataStatistics[e].events;
                                    if (null != i) {
                                        for (var s = i.length - 1; s >= 0; s--) if (i[s].event == t) {
                                            i[s][r] = o;
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
                            }, e.prototype.uploadReport = function (e, t, r, o) {
                                var i = this.dataStatistics[e];
                                null != i && (t && (i.event = t), i.time_consumed = Date.now() - i.event_time, r && this.addMsgInfo(e, {
                                    error: r.code,
                                    message: r.message || r.msg + " " + (o || "")
                                }), this.logger.report(i), delete this.dataStatistics[e])
                            }, e
                        }();
                        t.ZegoDataReport = i
                    }, "./sdk/src/zego.entity.ts":
                    /*!********************************!*\
  !*** ./sdk/src/zego.entity.ts ***!
  \********************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.E_CLIENT_TYPE = t.ENUM_LOG_LEVEL = t.ENUM_REMOTE_TYPE = t.ZEGO_ENV = t.ZEGO_BROWSER_TYPE = void 0, function (e) {
                            e[e.IE = 0] = "IE", e[e.FIREFOX = 1] = "FIREFOX", e[e.CHROME = 2] = "CHROME", e[e.SAFARI = 3] = "SAFARI", e[e.OPERA = 4] = "OPERA", e[e.WEIXIN = 5] = "WEIXIN", e[e.WEIXINMINI = 6] = "WEIXINMINI", e[e.UNKOWN = 7] = "UNKOWN"
                        }(t.ZEGO_BROWSER_TYPE || (t.ZEGO_BROWSER_TYPE = {})), function (e) {
                            e[e.BROWSER = 0] = "BROWSER", e[e.WEIXINMINI = 1] = "WEIXINMINI"
                        }(t.ZEGO_ENV || (t.ZEGO_ENV = {})), function (e) {
                            e[e.DISABLE = 0] = "DISABLE", e[e.WEBSOCKET = 1] = "WEBSOCKET", e[e.HTTPS = 2] = "HTTPS"
                        }(t.ENUM_REMOTE_TYPE || (t.ENUM_REMOTE_TYPE = {})), t.ENUM_LOG_LEVEL = {
                            DEBUG: 0,
                            INFO: 1,
                            WARN: 2,
                            ERROR: 3,
                            REPORT: 99,
                            DISABLE: 100,
                            debug: 0,
                            info: 1,
                            warn: 2,
                            error: 3,
                            report: 99,
                            disable: 100
                        }, function (e) {
                            e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallPragram = 2] = "ClientType_SmallPragram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
                        }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {}))
                    }, "./sdk/src/zego.logger.ts":
                    /*!********************************!*\
  !*** ./sdk/src/zego.logger.ts ***!
  \********************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        var o = this && this.__assign || function () {
                            return (o = Object.assign || function (e) {
                                for (var t, r = 1, o = arguments.length; r < o; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        };
                        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoLogger = void 0;
                        var i = r(/*! ./zego.entity */"./sdk/src/zego.entity.ts"),
                            s = r(/*! ../util/zego.webSocket */"./sdk/util/zego.webSocket.ts"),
                            n = r(/*! ../util/zego.stateCenter */"./sdk/util/zego.stateCenter.ts"),
                            a = r(/*! ../util/zego.env.tool */"./sdk/util/zego.env.tool.ts"), d = function () {
                                function e(e) {
                                    this.logLevel = i.ENUM_LOG_LEVEL.INFO, this.logRemoteLevel = 0, this.websocket = null, this.logUploadTimer = null, this.logUploadInterval = 1e4, this.logCache = [], this.logCacheSend = [], this.logCacheMax = 100, this.existUserID = !1, this.stateCenter = n.LoggerStateCenter.getInstance(), this.env = e
                                }

                                return e.prototype.setLogLevel = function (e) {
                                    var t = i.ENUM_LOG_LEVEL[e];
                                    return void 0 !== t && (this.logLevel = t, !0)
                                }, e.prototype.setRemoteLogLevel = function (e) {
                                    var t = i.ENUM_LOG_LEVEL[e];
                                    return void 0 !== t && (this.logRemoteLevel = t, !0)
                                }, e.prototype.setSessionInfo = function (e, t, r, o, i, s) {
                                    this.appid = e, this.roomid = t, this.sessionid = r, this.userid = o, this.userName = i, this.version = s
                                }, e.prototype.report = function (e) {
                                    var t = this.logReportParamList(i.ENUM_LOG_LEVEL.REPORT, e);
                                    this.logLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= i.ENUM_LOG_LEVEL.REPORT && console.debug(t), this.RemoteLog(i.ENUM_LOG_LEVEL.REPORT, t, !0)
                                }, e.prototype.debug = function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = this.logParamList(i.ENUM_LOG_LEVEL.DEBUG, e.join(""));
                                    this.logLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= i.ENUM_LOG_LEVEL.DEBUG && console.debug(r), this.log(i.ENUM_LOG_LEVEL.DEBUG, r)
                                }, e.prototype.info = function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = this.logParamList(i.ENUM_LOG_LEVEL.INFO, e.join(""));
                                    this.logLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= i.ENUM_LOG_LEVEL.INFO && console.info(r), this.log(i.ENUM_LOG_LEVEL.INFO, r)
                                }, e.prototype.warn = function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = this.logParamList(i.ENUM_LOG_LEVEL.WARN, e.join(""));
                                    this.logLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= i.ENUM_LOG_LEVEL.WARN && console.warn(r), this.log(i.ENUM_LOG_LEVEL.WARN, r)
                                }, e.prototype.error = function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = this.logParamList(i.ENUM_LOG_LEVEL.ERROR, e.join(""));
                                    this.logLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= i.ENUM_LOG_LEVEL.ERROR && (console.error(r), window ? this.stateCenter.debug && window.alert(e.join("").substr(e.join("").indexOf(" ") + 1, 4500)) : wx && this.stateCenter.debug && wx.showModal({
                                        title: "",
                                        content: e.join("").substr(e.join("").indexOf(" ") + 1, 4500)
                                    })), this.log(i.ENUM_LOG_LEVEL.ERROR, r)
                                }, e.prototype.log = function (e, t) {
                                    this.logRemoteLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logRemoteLevel <= e && this.RemoteLog(e, t)
                                }, e.prototype.setLogServer = function (e) {
                                    try {
                                        return e.startsWith("wss:") ? (this.logType = i.ENUM_REMOTE_TYPE.WEBSOCKET, this.openWebSocketLogServer(e)) : e.startsWith("https:") ? (this.logType = i.ENUM_REMOTE_TYPE.HTTPS, this.openHttpsLogServer(e)) : this.logType = i.ENUM_REMOTE_TYPE.DISABLE, !0
                                    } catch (e) {
                                        return this.error(JSON.stringify(e)), !1
                                    }
                                }, e.prototype.stopLogServer = function () {
                                    this.logType == i.ENUM_REMOTE_TYPE.WEBSOCKET ? this.stopWebSocketServer() : this.logType == i.ENUM_REMOTE_TYPE.HTTPS && (this.SendHttpsLog(), this.stopHttpsServer()), this.logType = i.ENUM_REMOTE_TYPE.DISABLE
                                }, e.prototype.stopWebSocketServer = function () {
                                    this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null)
                                }, e.prototype.openHttpsLogServer = function (e) {
                                    var t = this;
                                    this.url = e, e && (this.stopHttpsServer(), this.logUploadTimer || (this.logUploadTimer = setInterval((function () {
                                        t.SendHttpsLog()
                                    }), this.logUploadInterval)))
                                }, e.prototype.stopHttpsServer = function () {
                                    this.logUploadTimer && (clearInterval(this.logUploadTimer), this.logUploadTimer = null)
                                }, e.prototype.RemoteLog = function (e, t, r) {
                                    if (void 0 === r && (r = !1), "" != this.url) if (this.logType == i.ENUM_REMOTE_TYPE.WEBSOCKET) this.RemoteWebSocketLog(e, t); else if (this.logType == i.ENUM_REMOTE_TYPE.HTTPS) this.RemoteHttpsLog(e, t, r); else if (this.logLevel !== i.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= e) for (this.logCacheSend.push(t); this.logCacheSend.length > this.logCacheMax;) this.logCacheSend.shift()
                                }, e.prototype.RemoteWebSocketLog = function (e, t) {
                                    if ("string" == typeof t && t.length > 4e3) console.info("log over maximum, ignore"); else if (null == this.websocket || 2 == this.websocket.readyState || 3 == this.websocket.readyState) {
                                        var r = this.url;
                                        this.url = "", this.setLogServer(r), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
                                    } else if (0 == this.websocket.readyState) this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t); else if (1 == this.websocket.readyState) if (this.logCacheSend.length > 0) {
                                        for (var o = "", i = 0; i < this.logCacheSend.length; i++) (o + this.logCacheSend[i]).length > 4e3 && (this.websocket.send(o), o = ""), o = o + this.logCacheSend[i] + "\n";
                                        t = o + t, this.logCacheSend = [], this.websocket.send(t)
                                    } else this.websocket.send(t); else console.warn("wrong socket state:" + this.websocket.readyState), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
                                }, e.prototype.RemoteHttpsLog = function (e, t, r) {
                                    this.logCacheSend.push(t), (this.logCacheSend.length >= this.logCacheMax || !0 === r) && this.SendHttpsLog()
                                }, e.prototype.logParamList = function (e, t) {
                                    var r = a.getCurrentTime(),
                                        o = [t.substr(0, t.indexOf(" ")) || t, t.substr(t.indexOf(" ") + 1, 4500) || t],
                                        i = {
                                            time: r,
                                            level: e,
                                            action: o[0],
                                            content: o[1],
                                            appid: this.appid,
                                            roomid: this.roomid,
                                            userid: this.userid,
                                            userName: this.userName,
                                            sessionid: this.sessionid
                                        };
                                    return JSON.stringify(i)
                                }, e.prototype.logReportParamList = function (e, t) {
                                    var r = a.getCurrentTime();
                                    return t = o(o({}, t), {
                                        time: r,
                                        level: e,
                                        console: this.env === i.ZEGO_ENV.BROWSER ? "rtc" : "xcx",
                                        appid: this.appid,
                                        room_id: this.roomid,
                                        roomid: this.roomid,
                                        userid: this.userid,
                                        id_name: this.userid,
                                        userName: this.userName,
                                        sessionid: this.sessionid,
                                        sdk_version: this.version,
                                        test_environment: this.stateCenter.testEnvironment,
                                        version: this.version,
                                        event_id: this.appid + "_" + this.userid + "_" + t.event_time + "_" + t.seq
                                    }), JSON.stringify(t)
                                }, e.prototype.openWebSocketLogServer = function (e) {
                                    if (this.url != e) {
                                        if (this.url = e, !e) return;
                                        this.stopWebSocketServer(), this.websocket = s.createZegoWebSocket(e, this.env), this.websocket.onopen = function () {
                                        }, this.websocket.onclose = function () {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            console.warn("onclose   websocket error:", e)
                                        }, this.websocket.onmessage = function () {
                                        }, this.websocket.onerror = function () {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            console.warn("open log websocket error:", e)
                                        }
                                    }
                                }, e.prototype.SendHttpsLog = function () {
                                    0 != this.logCacheSend.length && (this.env === i.ZEGO_ENV.BROWSER ? this.SendHttpsLogWeb() : this.SendHttpsLogWeChatMini())
                                }, e.prototype.SendHttpsLogWeb = function () {
                                    var e = this, t = this.logCacheSend.join("\n"), r = new XMLHttpRequest;
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
                                }, e.prototype.SendHttpsLogWeChatMini = function () {
                                    var e = this;
                                    !this.existUserID && this.userid && this.logCacheSend.forEach((function (t) {
                                        Array.isArray(t) && t.forEach((function (r, o) {
                                            var i = JSON.parse(r);
                                            i && "" == JSON.parse(r).userid ? (i.userid = e.userid, i.id_name = e.userid, t[o] = JSON.stringify(i)) : e.existUserID = !0
                                        }))
                                    }));
                                    var t = this.logCacheSend.join("\n");
                                    wx.request({
                                        url: this.url, data: t, method: "POST", success: function (t) {
                                            if (0 != t.data.length) {
                                                var r = t && t.data && t.data.interval;
                                                "number" == typeof r && e.logUploadInterval !== r && (e.timeInterval = r, e.openHttpsLogServer(e.url))
                                            }
                                        }, fail: function (e) {
                                            console.log("send failed " + e.statusCode)
                                        }
                                    }), this.logCacheSend = []
                                }, e
                            }();
                        t.ZegoLogger = d
                    }, "./sdk/util/zego.env.tool.ts":
                    /*!***********************************!*\
  !*** ./sdk/util/zego.env.tool.ts ***!
  \***********************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.getCurrentTime = t.getCurrentEnv = t.getBrowser = void 0;
                        var o = r(/*! ../src/zego.entity */"./sdk/src/zego.entity.ts");
                        t.getBrowser = function () {
                            var e = window.navigator.userAgent,
                                t = null != window.ActiveXObject && -1 != e.indexOf("MSIE"),
                                r = -1 != e.indexOf("Firefox"), i = null != window.opr,
                                s = e.indexOf("Chrome") && window.chrome,
                                n = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version"),
                                a = e.toLowerCase().match(/MicroMessenger/i) && "micromessenger" === e.toLowerCase().match(/MicroMessenger/i)[0];
                            return t ? o.ZEGO_BROWSER_TYPE.IE : r ? o.ZEGO_BROWSER_TYPE.FIREFOX : i ? o.ZEGO_BROWSER_TYPE.OPERA : s ? o.ZEGO_BROWSER_TYPE.CHROME : n ? o.ZEGO_BROWSER_TYPE.SAFARI : a ? o.ZEGO_BROWSER_TYPE.WEIXIN : o.ZEGO_BROWSER_TYPE.UNKOWN
                        }, t.getCurrentEnv = function () {
                            var e = window.navigator.userAgent;
                            return new Promise((function (t) {
                                -1 == e.indexOf("MicroMessage") ? t(o.ZEGO_ENV.BROWSER) : wx.miniProgram.getEnv((function (e) {
                                    e.miniprogram
                                }))
                            }))
                        };
                        var i = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
                        t.getCurrentTime = function () {
                            var e = new Date;
                            return [e.getFullYear() + "/", (i[e.getMonth() + 1] || e.getMonth() + 1) + "/", (i[e.getDate()] || e.getDate()) + " ", (i[e.getHours()] || e.getHours()) + ":", (i[e.getMinutes()] || e.getMinutes()) + ":", i[e.getSeconds()] || e.getSeconds(), "." + e.getTime() % 1e3].join("")
                        }
                    }, "./sdk/util/zego.stateCenter.ts":
                    /*!**************************************!*\
  !*** ./sdk/util/zego.stateCenter.ts ***!
  \**************************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.LoggerStateCenter = void 0;
                        var o = function () {
                            function e() {
                                this._testEnvironment = !0, this._debug = !0
                            }

                            return e.getInstance = function () {
                                return e.instance || (e.instance = new e, e.instance.init()), e.instance
                            }, e.prototype.init = function () {
                            }, Object.defineProperty(e.prototype, "testEnvironment", {
                                get: function () {
                                    return this._testEnvironment
                                }, set: function (e) {
                                    this._testEnvironment = e
                                }, enumerable: !1, configurable: !0
                            }), Object.defineProperty(e.prototype, "debug", {
                                get: function () {
                                    return this._debug
                                }, set: function (e) {
                                    this._debug = e
                                }, enumerable: !1, configurable: !0
                            }), e.instance = new e, e
                        }();
                        t.LoggerStateCenter = o
                    }, "./sdk/util/zego.webSocket.ts":
                    /*!************************************!*\
  !*** ./sdk/util/zego.webSocket.ts ***!
  \************************************/
                    /*! no static exports found */function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {value: !0}), t.createZegoWebSocket = t.ZegoWeiXinMiniWebSocket = void 0;
                        var o = r(/*! ../src/zego.entity */"./sdk/src/zego.entity.ts"), i = function () {
                            function e(e, t) {
                                this.url = e, this.readyState = 3, this._websocket = wx.connectSocket({url: e}), this.init()
                            }

                            return e.prototype.init = function () {
                                var e = this;
                                this._websocket && (this.readyState = 0, this._websocket.onOpen((function (t) {
                                    e.readyState = e._websocket.readyState, "function" == typeof e.onopen && (e.onopen(t), e._websocket.onClose((function (t) {
                                        e.readyState = e._websocket.readyState, "function" == typeof e.onclose && e.onclose(t)
                                    })), e._websocket.onMessage((function (t) {
                                        "function" == typeof e.onmessage && e.onmessage(t)
                                    })))
                                })), this._websocket.onError((function (t) {
                                    e.readyState = e._websocket.readyState, "function" == typeof e.onerror && e.onerror(t)
                                })))
                            }, e.prototype.onopen = function (e) {
                            }, e.prototype.onerror = function (e) {
                            }, e.prototype.onclose = function (e) {
                            }, e.prototype.onmessage = function (e) {
                            }, e.prototype.send = function (e) {
                                this._websocket && this._websocket.send({data: e})
                            }, e.prototype.close = function () {
                                this._websocket && this._websocket.close()
                            }, e
                        }();
                        t.ZegoWeiXinMiniWebSocket = i, t.createZegoWebSocket = function (e, t) {
                            return t === o.ZEGO_ENV.BROWSER ? new WebSocket(e) : new i(e)
                        }
                    }
                })
            }, e.exports = o()
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getSeq = t.getReportSeq = t.ZegoExpressWebRTMEngine = void 0;
            var o = r(7), i = r(5), s = r(0), n = function () {
                function e(t, r) {
                    this.logger = new i.ZegoLogger(s.ENV), this.dataReport = new i.ZegoDataReport(this.logger), this.zegoWebRTM = new o.ZegoExpressWebRTM(t, r, this.logger, this.dataReport, e.version)
                }

                return e.prototype.getVersion = function () {
                    return this.zegoWebRTM.getVersion()
                }, e.prototype.loginRoom = function (e, t, r, o) {
                    return this.zegoWebRTM.loginRoom(e, t, r, o)
                }, e.prototype.logoutRoom = function (e) {
                    return this.zegoWebRTM.logoutRoom(e)
                }, e.prototype.off = function (e) {
                    return this.zegoWebRTM.off(e)
                }, e.prototype.on = function (e, t) {
                    return this.zegoWebRTM.on(e, t)
                }, e.prototype.setDebugVerbose = function (e) {
                    return this.zegoWebRTM.setDebugVerbose(e)
                }, e.prototype.setLogConfig = function (e) {
                    return this.zegoWebRTM.setLogConfig(e)
                }, e.prototype.sendBarrageMessage = function (e, t) {
                    return this.zegoWebRTM.sendBarrageMessage(e, t)
                }, e.prototype.sendBroadcastMessage = function (e, t) {
                    return this.zegoWebRTM.sendBroadcastMessage(e, t)
                }, e.prototype.sendCustomCommand = function (e, t, r) {
                    return this.zegoWebRTM.sendCustomCommand(e, t, r)
                }, e.prototype.setRoomExtraInfo = function (e, t, r) {
                    return this.zegoWebRTM.setRoomExtraInfo(e, t, r)
                }, e.version = s.PROTO_VERSION, e
            }();
            t.ZegoExpressWebRTMEngine = n;
            var a = r(0);
            Object.defineProperty(t, "getReportSeq", {
                enumerable: !0, get: function () {
                    return a.getReportSeq
                }
            }), Object.defineProperty(t, "getSeq", {
                enumerable: !0, get: function () {
                    return a.getSeq
                }
            })
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressWebRTM = void 0;
            var o = r(0), i = r(2), s = r(3), n = r(0), a = r(8), d = r(10), c = r(11), l = r(12), u = r(1), g = r(4),
                p = function () {
                    function e(e, t, r, i, a) {
                        this.logger = r, this.dataReport = i, this.version = a, this.stateCenter = new c.StateCenter(this.logger);
                        var d = n.getReportSeq();
                        this.dataReport.newReport(d), this.setDebug(t), s.ClientUtil.checkConfigParam(e, t, this.logger) ? (this.stateCenter.appid = e, "string" == typeof t ? (this.stateCenter.server = t, this.stateCenter.serverBak = t) : Array.isArray(t) && t.length > 0 && (this.stateCenter.server = t[0], this.stateCenter.serverBak = t[1] || t[0]), this.stateCenter.configOK = !0, this.stateCenter.sdKVersion = this.version, this.dataReport.addMsgInfo(d, {system_info: g.ZegoRTMLogEvent.kZegoTaskInitSetting.system_info}), this.modules = new l.LiveRoomModules(this.stateCenter, this.logger, this.dataReport), this.bindWindowListener(), this.logger.setSessionInfo(this.stateCenter.appid, "", "", "", "", this.version), this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + "  " + navigator.appVersion)) : (this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + " init sdk error"), this.dataReport.addMsgInfo(d, g.ZegoRTMLogEvent.kZegoTaskInitSetting.error.kInvalidParamError)), this.stateCenter.networkState = navigator ? navigator.onLine ? o.ENUM_NETWORK_STATE.online : o.ENUM_NETWORK_STATE.offline : o.ENUM_NETWORK_STATE.online, this.dataReport.uploadReport(d, g.ZegoRTMLogEvent.kZegoTaskInitSetting.event)
                    }

                    return e.prototype.bindWindowListener = function () {
                        var e = this,
                            t = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ? "pagehide" : "unload";
                        window.addEventListener(t, (function () {
                            e.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER + " " + t), e.logoutRoom(e.stateCenter.roomid)
                        })), window.addEventListener("offline", (function () {
                            e.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER + " network is broken"), e.stateCenter.networkState = o.ENUM_NETWORK_STATE.offline, e.stateCenter.roomTryHandler && (e.stateCenter.roomTryHandler.invalid(), e.stateCenter.roomTryHandler.onactive = function (t, r) {
                                e.modules.roomHandler.disconnectedHandle(r)
                            }, e.stateCenter.roomTryHandler.startMaxTime(), e.modules.roomHandler.roomStateHandle("CONNECTING", i.errorCodeList.NETWORK_BROKEN))
                        })), window.addEventListener("online", (function () {
                            e.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER + " network is online"), e.stateCenter.networkState = o.ENUM_NETWORK_STATE.online, e.stateCenter.roomTryHandler && e.modules.service.isDisConnect() ? e.stateCenter.roomTryHandler.active() : e.stateCenter.roomTryHandler && (e.stateCenter.roomTryHandler.stopMaxTime(), e.modules.roomHandler.roomStateHandle("CONNECTED", {
                                code: 0,
                                msg: ""
                            }))
                        }))
                    }, e.prototype.setLogConfig = function (e) {
                        this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG + " call");
                        var t = n.getReportSeq();
                        if (this.dataReport.newReport(t), e.logLevel && ["debug", "info", "warn", "error", "report", "disable"].includes(e.logLevel) && (this.logger.setLogLevel(e.logLevel), this.dataReport.addMsgInfo(t, {log_level: g.ZegoRTMLogEvent.kZegoTaskSetLog.log_level(e.logLevel)})), e.remoteLogLevel && ["debug", "info", "warn", "error", "report", "disable"].includes(e.remoteLogLevel) && (this.logger.setRemoteLogLevel(e.remoteLogLevel), this.dataReport.addMsgInfo(t, {remote_log_level: g.ZegoRTMLogEvent.kZegoTaskSetLog.remote_log_level(e.remoteLogLevel)})), "string" == typeof e.logURL && (e.logURL.startsWith("wss://") || e.logURL.startsWith("https://"))) this.logger.setLogServer(e.logURL), this.dataReport.addMsgInfo(t, {log_url: g.ZegoRTMLogEvent.kZegoTaskSetLog.log_url(e.logURL)}), this.dataReport.uploadReport(t, g.ZegoRTMLogEvent.kZegoTaskSetLog.event); else if (e.logURL) return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG + "log url must be a wss or https url"), this.dataReport.addMsgInfo(t, g.ZegoRTMLogEvent.kZegoTaskSetLog.error.kInvalidParamError), this.dataReport.uploadReport(t, g.ZegoRTMLogEvent.kZegoTaskSetLog.event), !1;
                        return this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG + " call success"), !0
                    }, e.prototype.setDebugVerbose = function (e) {
                        var t = n.getReportSeq();
                        this.dataReport.newReport(t), "boolean" == typeof e && (this.stateCenter.debug = e, this.stateCenter.debugCustom = !0, this.dataReport.addMsgInfo(t, {debug: g.ZegoRTMLogEvent.kZegoTaskSetDebug.debug(e ? "true" : "false")})), this.dataReport.uploadReport(t, g.ZegoRTMLogEvent.kZegoTaskSetDebug.event), this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_DEBUG_VERBOSE + " call success")
                    }, e.prototype.setDebug = function (e) {
                        "string" == typeof e && e.indexOf("wss") > -1 ? this.stateCenter.debug = s.ClientUtil.isTestEnv(e) : Array.isArray(e) && e.length > 0 && e.every((function (e) {
                            return "string" == typeof e && e.indexOf("wss") > -1
                        })) ? this.stateCenter.debug = s.ClientUtil.isTestEnv(e[0]) || s.ClientUtil.isTestEnv(e[1]) : this.logger.info(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + " server wrong"), this.stateCenter.testEnvironment = this.stateCenter.debug
                    }, e.prototype.loginRoom = function (e, t, r, i) {
                        var s = this;
                        return new Promise((function (n, c) {
                            var l = s.loginReport(n, c, t, i), p = l.interResolve, h = l.interReject;
                            !(i = i || {}).maxMemberCount && (i.maxMemberCount = 0);
                            var m = d.checkParams({
                                roomID: {
                                    order: 0,
                                    value: e,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_NULL
                                    }, {
                                        name: d.RULE_PARAM_NAME.TYPE_STRING,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: "roomID must be string"
                                    }, {
                                        name: d.RULE_PARAM_NAME.MAX_LENGTH_128,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_TOO_LONG
                                    }, {
                                        name: d.RULE_PARAM_NAME.ILLEGAL_CHARACTERS,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_INVALID_CHARACTER
                                    }]
                                },
                                token: {
                                    order: 1,
                                    value: t,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM
                                    }, {
                                        name: d.RULE_PARAM_NAME.TYPE_STRING,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM
                                    }]
                                },
                                user: {
                                    order: 2,
                                    value: r,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: " param user error."
                                    }, {
                                        name: d.RULE_PARAM_NAME.TYPE_OBJECT,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: " param user error."
                                    }]
                                },
                                "user.userID": {
                                    order: 3,
                                    value: r.userID,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_NULL,
                                        extMsg: " param user error."
                                    }, {
                                        name: d.RULE_PARAM_NAME.TYPE_STRING,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: " param userID error."
                                    }, {
                                        name: d.RULE_PARAM_NAME.MAX_LENGTH_100,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_TOO_LONG
                                    }, {
                                        name: d.RULE_PARAM_NAME.ILLEGAL_CHARACTERS,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_INVALID_CHARACTER
                                    }]
                                },
                                "user.userName": {
                                    order: 4,
                                    value: r.userName,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_NAME_NULL
                                    }, {
                                        name: d.RULE_PARAM_NAME.TYPE_STRING,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: " userName must be string."
                                    }, {
                                        name: d.RULE_PARAM_NAME.MAX_LENGTH_256,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_NAME_TOO_LONG
                                    }]
                                },
                                config: {
                                    order: 5,
                                    value: i,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM
                                    }]
                                },
                                "config.maxMemberCount": {
                                    order: 4,
                                    value: null == i ? void 0 : i.maxMemberCount,
                                    rules: [{
                                        name: d.RULE_PARAM_NAME.NOT_EMPTY,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: " maxMemberCount must be integer number."
                                    }, {
                                        name: d.RULE_PARAM_NAME.TYPE_INTEGER,
                                        error: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                        extMsg: " maxMemberCount must be integer number."
                                    }]
                                }
                            }, {action: u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_ROOM, logger: s.logger});
                            m === d.RULE_SUCCESS ? (s.stateCenter.runState !== o.ENUM_RUN_STATE.logout && s.modules.roomHandler.resetRoom(), s.stateCenter.roomTryHandler || (s.stateCenter.roomTryHandler = new a.RetryRoomHandler(s.logger, s.stateCenter)), s.stateCenter.roomTryHandler.init(s.stateCenter.roomRetryTime), s.stateCenter.roomTryHandler.initRoom(s.modules.roomHandler, e, t, r, s.stateCenter.server, s.stateCenter.serverBak, i), s.stateCenter.roomTryHandler.onactive = function (e, t) {
                                e ? p(e) : h(t)
                            }, s.stateCenter.roomTryHandler.active(!0)) : h(m.error, m.extMsg)
                        }))
                    }, e.prototype.loginReport = function (e, t, r, o) {
                        var a = this;
                        0 !== this.stateCenter.reportSeqList.login && (this.dataReport.uploadReport(this.stateCenter.reportSeqList.login), this.stateCenter.reportSeqList.login = 0, s.ClientUtil.unregisterCallback(g.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, this.stateCenter.reportList));
                        var d = n.getReportSeq();
                        return this.stateCenter.reportSeqList.login = d, this.dataReport.newReport(d, g.ZegoRTMLogEvent.kZegoTaskLoginRoom.event), "string" == typeof r && this.dataReport.addMsgInfo(d, {token: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.token(r)}), o && (o.userUpdate && "boolean" == typeof o.userUpdate && this.dataReport.addMsgInfo(d, {user_update: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.user_update(o.userUpdate + "")}), o.maxMemberCount && "number" == typeof o.maxMemberCount && this.dataReport.addMsgInfo(d, {max_member_count: g.ZegoRTMLogEvent.kZegoTaskLoginRoom.max_member_count(o.maxMemberCount + "")})), s.ClientUtil.logReportCallback(g.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, this.dataReport, d, this.stateCenter.reportList), {
                            interResolve: function (t) {
                                a.dataReport.uploadReport(d), a.stateCenter.reportSeqList.login = 0, s.ClientUtil.unregisterCallback(g.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, a.stateCenter.reportList), e(t)
                            }, interReject: function (e, r) {
                                var o, n;
                                void 0 === r && (r = ""), e.code < 2e9 && e.code > 1e9 || e.code < 1e6 ? (o = s.ClientUtil.decodeServerError(e.code, e.msg), n = s.ClientUtil.getLiveRoomError(e.code)) : o = {
                                    code: e.code,
                                    message: e.msg
                                }, o && a.dataReport.addMsgInfo(d, {
                                    error: o.code,
                                    message: o.message + r
                                }), a.dataReport.uploadReport(d), a.stateCenter.reportSeqList.login = 0, s.ClientUtil.unregisterCallback(g.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, a.stateCenter.reportList), n && i.errorCodeList[n] && (e.code = i.errorCodeList[n].code), e.code && e.msg && "" !== r ? t({
                                    code: e.code,
                                    msg: e.msg + r
                                }) : t(e)
                            }
                        }
                    }, e.prototype.logoutRoom = function (e) {
                        var t = n.getReportSeq();
                        if (this.dataReport.newReport(t), this.dataReport.addMsgInfo(t, {roomid: e}), void 0 === e) e = this.stateCenter.roomid; else {
                            if ("string" != typeof e || "" == e) return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM + " roomID must be string and not empty"), this.dataReport.addMsgInfo(t, {
                                error: g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.code,
                                message: g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.msg + " param roomID error"
                            }), void this.dataReport.uploadReport(t, g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event);
                            if (e !== this.stateCenter.roomid) return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM + " roomID is error"), this.dataReport.addMsgInfo(t, {
                                error: g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.code,
                                message: g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.msg + " param roomID error"
                            }), void this.dataReport.uploadReport(t, g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event)
                        }
                        this.modules.roomHandler.logout(), this.dataReport.uploadReport(t, g.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event)
                    }, e.prototype.sendCustomCommand = function (e, t, r) {
                        var a = this;
                        return new Promise((function (d, c) {
                            var l = n.getReportSeq();
                            a.dataReport.newReport(l, g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.event), a.dataReport.addMsgInfo(l, {room_sid: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.room_sid(a.stateCenter.sessionid)});
                            var p = s.ClientUtil.proxyRes(a.dataReport, l, d, c), h = p.interResolve, m = p.interReject;
                            return "string" != typeof e || "" == e ? (a.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " roomid must be string and not empty"), void m(i.errorCodeList.INPUT_PARAM, " param roomID error")) : r instanceof Array && !r.find((function (e) {
                                return "string" != typeof e
                            })) ? "string" != typeof t && "object" != typeof t ? (a.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " custom content must be a non empty string or object"), void m(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM, " param command error")) : "string" == typeof t && t.length > o.MAX_MESSAGE_LENGTH ? (a.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " command too long"), void m(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.IM_CONTENT_TOO_LONG)) : void a.modules.messageHandler.sendCustomCommand(r, t, h, m) : (a.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " dstMembers must be string array"), void m(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM, " param toUserList error"))
                        }))
                    }, e.prototype.sendBroadcastMessage = function (e, t, r) {
                        var i = this;
                        return void 0 === r && (r = 1), new Promise((function (a, d) {
                            var c = n.getReportSeq();
                            i.dataReport.newReport(c, g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.event), i.dataReport.addMsgInfo(c, {room_sid: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.room_sid(i.stateCenter.sessionid)});
                            var l = s.ClientUtil.proxyRes(i.dataReport, c, a, d), p = l.interResolve, h = l.interReject;
                            return "string" != typeof e || "" == e ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " roomid must be string and not empty"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM, " param roomID error")) : void 0 === t || "" == t ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " message is empty"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.IM_CONTENT_NULL)) : "string" != typeof t ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " message must be string"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM, " param message error")) : t.length > o.MAX_MESSAGE_LENGTH ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " message too long"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.IM_CONTENT_TOO_LONG)) : void i.modules.messageHandler.sendRoomMsg(r, e, t, p, h)
                        }))
                    }, e.prototype.setRoomExtraInfo = function (e, t, r) {
                        var i = this;
                        return new Promise((function (a, d) {
                            var c = n.getReportSeq();
                            i.dataReport.newReport(c, g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.event), i.dataReport.addMsgInfo(c, {room_sid: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.room_sid(i.stateCenter.sessionid)});
                            var l = s.ClientUtil.proxyRes(i.dataReport, c, a, d), p = l.interResolve, h = l.interReject;
                            return "string" != typeof e || "" == e ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " roomid must be string and not empty"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM, " param roomID error")) : t && "string" == typeof t ? t.length > o.MAX_TRANS_TYPE_LENGTH ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " type is too long"), void h({errorCode: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code})) : r && "string" == typeof r ? r.length > o.MAX_TRANS_DATA_LENGTH ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " type is too long"), void h({errorCode: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code})) : void i.modules.messageHandler.sendReliableMessage(t, r, p, h) : (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " data must be string"), void h({errorCode: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code})) : (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " type must be string"), void h({errorCode: g.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code}))
                        }))
                    }, e.prototype.sendBarrageMessage = function (e, t, r) {
                        var i = this;
                        return void 0 === r && (r = 1), new Promise((function (a, d) {
                            var c = n.getReportSeq();
                            i.dataReport.newReport(c, g.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.event), i.dataReport.addMsgInfo(c, {room_sid: g.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.room_sid(i.stateCenter.sessionid)});
                            var l = s.ClientUtil.proxyRes(i.dataReport, c, a, d), p = l.interResolve, h = l.interReject;
                            return "string" != typeof e || "" == e ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + "roomid must be string and not empty"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.INPUT_PARAM, " param roomID error")) : void 0 === t || "" == t ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + " message is empty"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.IM_CONTENT_NULL)) : "string" != typeof t ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + " message must be string"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.INPUT_PARAM, " param message error")) : t.length > o.MAX_MESSAGE_LENGTH ? (i.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + " message too long"), void h(g.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.IM_CONTENT_TOO_LONG)) : void i.modules.messageHandler.sendBigRoomMessage(r, e, t, p, h)
                        }))
                    }, e.prototype.sendRelayMessage = function (e, t, r, o) {
                        this.modules.messageHandler.sendRelayMessage(e, t, r, o)
                    }, e.prototype.requestJoinLive = function (e, t, r, o) {
                        return this.modules.liveHandler.requestJoinLive(e, t, r, o)
                    }, e.prototype.inviteJoinLive = function (e, t, r, o) {
                        return this.modules.liveHandler.inviteJoinLive(e, t, r, o)
                    }, e.prototype.endJoinLive = function (e, t, r) {
                        return this.modules.liveHandler.endJoinLive(e, t, r)
                    }, e.prototype.respondJoinLive = function (e, t, r, o) {
                        return this.modules.liveHandler.respondJoinLive(e, t, r, o)
                    }, e.prototype.getVersion = function () {
                        return this.version
                    }, e.prototype.setSdkBizVersion = function (e) {
                        "string" == typeof e && "" !== e && (this.stateCenter.bizVersion = e)
                    }, e.prototype.setSdkLoginRelateService = function (e) {
                        Array.isArray(e) && e.every((function (e) {
                            return "string" == typeof e
                        })) && (this.stateCenter.relateService = e)
                    }, e.prototype.on = function (e, t) {
                        return this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " listener callBack must be funciton"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " event " + e + " no found"), !1)
                    }, e.prototype.off = function (e, t) {
                        if (!this.stateCenter.listenerList[e]) return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_OFF + " listener no found"), !1;
                        var r = this.stateCenter.listenerList[e];
                        return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                    }, e.prototype._on = function (e, t) {
                        return this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " listener callBack must be funciton"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " event " + e + " no found"), !1)
                    }, e.prototype._off = function (e, t) {
                        if (!this.stateCenter.listenerList[e]) return this.logger.error(u.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_OFF + " listener no found"), !1;
                        var r = this.stateCenter.listenerList[e];
                        return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                    }, e.prototype.isTestEnvironment = function () {
                        return this.stateCenter.testEnvironment
                    }, e.prototype.isLogin = function () {
                        return this.stateCenter.isLogin()
                    }, e.prototype.getAppID = function () {
                        return this.stateCenter.appid
                    }, e.prototype.getUserID = function () {
                        return this.stateCenter.idName
                    }, e.prototype.getToken = function () {
                        return this.stateCenter.token
                    }, e
                }();
            t.ZegoExpressWebRTM = p
        }, function (e, t, r) {
            "use strict";
            var o, i = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.RetryRoomHandler = void 0;
            var s = r(9), n = r(0), a = r(1), d = function (e) {
                function t(t, r) {
                    var o = e.call(this, t, r) || this;
                    return o.logger = t, o.stateCenter = r, o
                }

                return i(t, e), t.prototype.initRoom = function (e, t, r, o, i, s, n) {
                    this.roomHandler = e, this.roomID = t, this.token = r, this.user = o, this.server = i, this.serverBak = s || i, this.config = n
                }, t.prototype.active = function (e) {
                    var t = this;
                    if (this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " retry call"), this.stateCenter.networkState != n.ENUM_NETWORK_STATE.offline) if (this.retryTimer) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " has actived, ignore"); else if (this.isOverTime) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " retry over time, stop retry"); else {
                        if (1 == this.retryActiveCount) this.retryActiveInterval = Math.floor(Math.random() * (1 - this.RETRY_START_TIME_INTERVAL) + this.RETRY_START_TIME_INTERVAL); else {
                            var r = Math.pow(2, Math.round(this.retryActiveCount / this.RETRY_CONTINUE_COUNT + 1));
                            this.retryActiveInterval = r > this.RETRY_MAX_TIME_INTERVAL ? this.RETRY_MAX_TIME_INTERVAL : r
                        }
                        this.retryTimer = setTimeout((function () {
                            t.roomHandler.login(t.retryActiveCount % 2 == 1 ? t.server : t.serverBak, t.roomID, t.token, t.user, t.config, (function (e) {
                                t.handleLoginFinish(e)
                            }), (function (e, r) {
                                t.handleLoginFinish(!1, e, r)
                            })), t.retryTimer && clearTimeout(t.retryTimer), t.retryTimer = null, t.retryActiveCount++
                        }), e ? 0 : 1e3 * this.retryActiveInterval)
                    } else this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " network is broken, stop retry")
                }, t.prototype.startMaxTime = function () {
                    var e = this;
                    this.maxTimer || (this.maxTimer = setTimeout((function () {
                        e.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " over max time " + e.RETRY_MAX_TIME + "s, stop retry"), e.isOverTime = !0, e.roomHandler.resetRoom(), e.stopMaxTime(), e.invalid(), e.onactive(!1, n.sdkErrorList.LOGIN_TIMEOUT)
                    }), 1e3 * this.RETRY_MAX_TIME))
                }, t.prototype.stopMaxTime = function () {
                    this.maxTimer && clearTimeout(this.maxTimer), this.maxTimer = null
                }, t.prototype.onactive = function (e, t) {
                }, t.prototype.handleError = function (e, t) {
                    if (this.RETRY_MAX_TIME < 3) return !1;
                    if (t) {
                        var r = e.code + "";
                        return !["1000002002", "1000005030", "1000005035", "1010", "1011", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1023"].includes(r) && (!!["1100040001", "1100040100"].includes(r) || this.stateCenter.lastRunState == n.ENUM_RUN_STATE.login && (this.stateCenter.sessionid = "", this.invalid(), !0))
                    }
                    return !0
                }, t.prototype.handleLoginFinish = function (e, t, r) {
                    t ? this.handleError(t, r) ? (!this.maxTimer && this.startMaxTime(), this.active()) : (this.roomHandler.resetRoom(), this.stopMaxTime(), this.invalid(), this.onactive(e, t)) : (this.stopMaxTime(), this.invalid(), this.onactive(e, {
                        code: 0,
                        msg: ""
                    }))
                }, t
            }(s.TryHandler);
            t.RetryRoomHandler = d
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.TryHandler = void 0;
            var o = function () {
                function e(e, t) {
                    this.logger = e, this.stateCenter = t, this.RETRY_MAX_TIME = 300, this.RETRY_START_TIME_INTERVAL = 4, this.RETRY_CONTINUE_COUNT = 2, this.RETRY_MAX_TIME_INTERVAL = 32, this.retryTimer = null, this.maxTimer = null, this.retryStartTime = 0, this.retryActiveCount = 1, this.isOverTime = !1
                }

                return e.prototype.init = function (e, t, r, o) {
                    this.invalid(), this.stopMaxTime(), this.isOverTime = !1, "number" == typeof e && e < 3600 && (this.RETRY_MAX_TIME = e), "number" == typeof t && (this.RETRY_START_TIME_INTERVAL = t), "number" == typeof r && (this.RETRY_CONTINUE_COUNT = r), "number" == typeof o && (this.RETRY_MAX_TIME_INTERVAL = o)
                }, e.prototype.invalid = function () {
                    this.retryTimer && clearTimeout(this.retryTimer), this.retryTimer = null, this.retryStartTime = 0, this.retryActiveCount = 1
                }, e
            }();
            t.TryHandler = o
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.checkParams = t.RULE_SUCCESS = t.RULE_PARAM_NAME = void 0;
            var o = r(3);
            !function (e) {
                e.NOT_EMPTY = "NOT_EMPTY", e.ILLEGAL_CHARACTERS = "ILLEGAL_CHARACTERS", e.TYPE_STRING = "TYPE_STRING", e.TYPE_INTEGER = "TYPE_INTEGER", e.TYPE_OBJECT = "TYPE_OBJECT", e.MAX_LENGTH_10 = "MAX_LENGTH_10", e.MAX_LENGTH_64 = "MAX_LENGTH_64", e.MAX_LENGTH_100 = "MAX_LENGTH_100", e.MAX_LENGTH_128 = "MAX_LENGTH_128", e.MAX_LENGTH_256 = "MAX_LENGTH_256", e.MAX_LENGTH_1024 = "MAX_LENGTH_1024"
            }(t.RULE_PARAM_NAME || (t.RULE_PARAM_NAME = {})), t.RULE_SUCCESS = {error: {code: 0, msg: "suc"}};
            var i = {
                NOT_EMPTY: function (e, r, o, i, s) {
                    return void 0 === r || "" === r || null === r ? (i.error(o + " " + e + " is empty"), s) : t.RULE_SUCCESS
                }, ILLEGAL_CHARACTERS: function (e, r, i, s, n) {
                    return o.ClientUtil.checkIllegalCharacters(r) ? t.RULE_SUCCESS : (s.error(i + " " + e + " contains illegal characters"), n)
                }, TYPE_STRING: function (e, r, o, i, s) {
                    return "string" != typeof r ? (i.error(o + " " + e + " must be string"), s) : t.RULE_SUCCESS
                }, TYPE_INTEGER: function (e, r, i, s, n) {
                    return o.ClientUtil.checkInteger(r, !1) ? t.RULE_SUCCESS : (s.error(i + " " + e + "  must be integer number"), n)
                }, TYPE_OBJECT: function (e, r, o, i, s) {
                    return r && "object" == typeof r ? t.RULE_SUCCESS : (i.error(o + " " + e + "  must be object"), s)
                }, MAX_LENGTH_10: function (e, r, o, i, s) {
                    return r.length > 10 ? (i.error(o + " " + e + " is too long"), s) : t.RULE_SUCCESS
                }, MAX_LENGTH_64: function (e, r, o, i, s) {
                    return r.length > 64 ? (i.error(o + " " + e + " is too long"), s) : t.RULE_SUCCESS
                }, MAX_LENGTH_100: function (e, r, o, i, s) {
                    return r.length > 100 ? (i.error(o + " " + e + " is too long"), s) : t.RULE_SUCCESS
                }, MAX_LENGTH_128: function (e, r, o, i, s) {
                    return r.length > 128 ? (i.error(o + " " + e + " is too long"), s) : t.RULE_SUCCESS
                }, MAX_LENGTH_256: function (e, r, o, i, s) {
                    return r.length > 256 ? (i.error(o + " " + e + " is too long"), s) : t.RULE_SUCCESS
                }, MAX_LENGTH_1024: function (e, r, o, i, s) {
                    return r.length > 1024 ? (i.error(o + " " + e + " is too long"), s) : t.RULE_SUCCESS
                }
            };
            t.checkParams = function (e, r) {
                var o = [], s = {};
                for (var n in e) s[e[n].order] = e[n], e[n].key = n;
                for (var a in s) o.push(s[a]);
                for (var d = 0; d < o.length; d++) for (var c = o[d].rules, l = 0; l < c.length; l++) {
                    var u = {key: o[d].key, value: o[d].value, action: r.action, logger: r.logger}, g = u.key,
                        p = u.value, h = u.action, m = u.logger;
                    if (c[l].name && i[c[l].name + ""]) {
                        var f = i[c[l].name + ""](g, p, h, m, c[l]);
                        if (f != t.RULE_SUCCESS) return f
                    }
                }
                return t.RULE_SUCCESS
            }
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.StateCenter = void 0;
            var o = r(0), i = r(5), s = r(0), n = r(1), a = function () {
                function e(e) {
                    this._debug = !1, this._testEnvironment = !1, this.debugCustom = !1, this.third_token = "", this.configOK = !1, this.relateService = [], this.role = 2, this.maxMemberCount = 0, this.roomCreateFlag = 1, this.runState = o.ENUM_RUN_STATE.logout, this.lastRunState = o.ENUM_RUN_STATE.logout, this.lastRoomState = "DISCONNECTED", this.roomState = "DISCONNECTED", this.callbackList = {}, this.listenerList = {
                        roomUserUpdate: [],
                        roomOnlineUserCountUpdate: [],
                        getAnchorInfo: [],
                        _getAnchorInfo: [],
                        IMRecvCustomCommand: [],
                        IMRecvBroadcastMessage: [],
                        recvReliableMessage: [],
                        roomExtraInfoUpdate: [],
                        IMRecvBarrageMessage: [],
                        recvJoinLiveRequest: [],
                        recvInviteJoinLiveRequest: [],
                        recvEndJoinLiveCommand: [],
                        roomLoginResponse: [],
                        HBResponse: [],
                        roomStateUpdate: [],
                        _roomStateUpdate: []
                    }, this.reportList = {}, this.reportSeqList = {
                        login: 0,
                        relogin: 0
                    }, this.networkState = o.ENUM_NETWORK_STATE.offline, this.roomRetryTime = 300, this._sdkVersion = "unknown", this.logger = e
                }

                return Object.defineProperty(e.prototype, "debug", {
                    get: function () {
                        return this._debug
                    }, set: function (e) {
                        this._debug = e, i.LoggerStateCenter.getInstance().debug = e
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "testEnvironment", {
                    get: function () {
                        return this._testEnvironment
                    }, set: function (e) {
                        this._testEnvironment = e, i.LoggerStateCenter.getInstance().testEnvironment = e
                    }, enumerable: !1, configurable: !0
                }), e.prototype.isLogin = function () {
                    return this.runState === o.ENUM_RUN_STATE.login
                }, e.prototype.getRequestId = function () {
                    return this.idName + "-" + s.getSeq()
                }, e.prototype.actionListener = function (e) {
                    for (var t = this, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                    this.listenerList[e] && this.listenerList[e].forEach((function (o) {
                        try {
                            setTimeout((function () {
                                o.apply(void 0, r)
                            }), 0)
                        } catch (r) {
                            t.logger.error(n.ZEGO_RTM_ACTION.STATE_ACTION + " ", e, " ", JSON.stringify(r))
                        }
                    }))
                }, Object.defineProperty(e.prototype, "sdKVersion", {
                    get: function () {
                        return this._sdkVersion
                    }, set: function (e) {
                        this._sdkVersion = e
                    }, enumerable: !1, configurable: !0
                }), e
            }();
            t.StateCenter = a
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveRoomModules = void 0;
            var o = r(13), i = r(15), s = r(16), n = r(17), a = r(18), d = r(19), c = function () {
                function e(e, t, r) {
                    this.stateCenter = e, this.logger = t, this.dataReport = r, this.service = new o.LiveRoomService(this.stateCenter, this.logger), this.roomHandler = new a.RoomHandler(this.logger, this.stateCenter, this.dataReport, this.service), this.heartBeatHandler = new i.HeartBeatHandler(this.logger, this.stateCenter, this.dataReport, this.service), this.userHandler = new d.UserHandler(this.logger, this.stateCenter, this.dataReport, this.service), this.messageHandler = new n.MessageHandler(this.logger, this.stateCenter, this.dataReport, this.service), this.liveHandler = new s.LiveHandler(this.logger, this.stateCenter, this.service), this.init()
                }

                return e.prototype.init = function () {
                    this.bindSocketHandler(), this.bindHeatBeatHandler(), this.bindRoomHandler(), this.bindMessageHandler(), this.bindLiveHandler()
                }, e.prototype.bindSocketHandler = function () {
                    var e = this;
                    this.service.handlePushKickout = function (t) {
                        e.roomHandler.handlePushKickout(t)
                    }, this.service.handlePushUserStateUpdateMsg = function (t) {
                        e.userHandler.handlePushUserStateUpdateMsg(t)
                    }, this.service.handlePushTransMsg = function (t) {
                        e.messageHandler.handlePushTransMsg(t)
                    }, this.service.handlePushRoomMsg = function (t) {
                        e.messageHandler.handlePushRoomMsg(t)
                    }, this.service.handlePushCustomMsg = function (t) {
                        e.messageHandler.handlePushCustomMsg(t)
                    }, this.service.handlePushMergeMsg = function (t) {
                        e.messageHandler.handlePushMergeMsg(t)
                    }, this.service.handlePushSignalMsg = function (t) {
                        e.liveHandler.handlePushSignalMsg(t)
                    }
                }, e.prototype.bindHeatBeatHandler = function () {
                    var e = this;
                    this.heartBeatHandler.hbLogout = function (t) {
                        e.roomHandler.handleHbLogout(t)
                    }, this.heartBeatHandler.heartbeatRspNotiFy = function (t) {
                        e.messageHandler.loginRsp(t), e.userHandler.patchUserList(t), e.HBResponse(t)
                    }
                }, e.prototype.bindRoomHandler = function () {
                    var e = this;
                    this.roomHandler.loginSuccessCallBack = function (t, r) {
                        e.heartBeatHandler.init(r), e.service.startCheck(), e.userHandler.loginRsp(r, t), e.messageHandler.loginRsp(r), e.roomLoginResponse(r)
                    }, this.roomHandler.resetRoomCallBack = function () {
                        e.heartBeatHandler.resetHeartbeat(), e.liveHandler.resetLiveHandler(), e.messageHandler.resetMessageInfo(), e.userHandler.resetUserHandler(), e.stateCenter.roomTryHandler && (e.stateCenter.roomTryHandler.invalid(), e.stateCenter.roomTryHandler.stopMaxTime(), e.stateCenter.roomTryHandler = void 0)
                    }
                }, e.prototype.bindUserHandler = function () {
                }, e.prototype.bindMessageHandler = function () {
                }, e.prototype.bindLiveHandler = function () {
                }, e.prototype.HBResponse = function (e) {
                    this.stateCenter.actionListener("HBResponse", e)
                }, e.prototype.roomLoginResponse = function (e) {
                    this.stateCenter.actionListener("roomLoginResponse", e)
                }, e
            }();
            t.LiveRoomModules = c
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveRoomService = void 0;
            var o = r(0), i = r(14), s = r(0), n = r(1), a = r(2), d = function () {
                function e(e, t) {
                    this.stateCenter = e, this.logger = t, this.service = new i.ZegoSocketService, this.cmdSeq = 0, this.responseRouters = {}
                }

                return e.prototype.checkResponse = function (e) {
                    return e.header.appid !== this.stateCenter.appid || e.header.session_id !== this.stateCenter.sessionid || e.header.user_id !== this.stateCenter.userid || e.header.room_id !== this.stateCenter.roomid || this.stateCenter.runState !== s.ENUM_RUN_STATE.login
                }, e.prototype.handleSendCommandMsgRsp = function (e) {
                    var t = this, r = this.service.sendCommandMap[e.header.seq];
                    if (null != r) {
                        var o = r._data;
                        delete this.service.sendCommandMap[e.header.seq], this.service.sendCommandList.remove(r), 0 === e.body.err_code ? setTimeout((function () {
                            o && null != o.success && o.success(e, t.cmdSeq)
                        }), 0) : setTimeout((function () {
                            o && null != o.error && o.error(e, t.cmdSeq)
                        }), 0)
                    }
                }, e.prototype.onPush = function () {
                    var e = this;
                    this.service.onMessage = function (t) {
                        0 !== t.body.err_code && t.body.err_message && e.logger.error(n.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ", err_code=" + t.body.err_code + ", err_message=" + t.body.err_message + " "), ["login", "logout"].indexOf(t.header.cmd) > -1 ? e.handleSendCommandMsgRsp(t) : e.stateCenter.isLogin() ? e.checkResponse(t) ? e.logger.error(n.ZEGO_RTM_ACTION.SERVICE_PUSH + "  check session fail.") : (e.logger.info(n.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ",function=" + !!e.responseRouters[t.header.cmd]), e.handleSendCommandMsgRsp(t), e.responseRouters[t.header.cmd] && e.responseRouters[t.header.cmd](t, e.cmdSeq)) : e.logger.warn(n.ZEGO_RTM_ACTION.SERVICE_PUSH + "  already logout")
                    }
                }, e.prototype.handlePushKickout = function (e) {
                }, e.prototype.handlePushCustomMsg = function (e) {
                }, e.prototype.handlePushRoomMsg = function (e) {
                }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
                }, e.prototype.handlePushMergeMsg = function (e) {
                }, e.prototype.handlePushTransMsg = function (e) {
                }, e.prototype.handleBigImMsgRsp = function (e) {
                }, e.prototype.handlePushSignalMsg = function (e) {
                }, e.prototype.closeHandler = function (e) {
                    this.service.closeHandler(e)
                }, e.prototype.openHandler = function (e) {
                    this.service.openHandler(e)
                }, e.prototype.errorHandler = function (e) {
                    this.service.errorHandler(e)
                }, e.prototype.getHeader = function (e) {
                    return {
                        Protocol: "V1" === s.ROOMVERSION ? "req" : "req_v2",
                        cmd: e,
                        appid: this.stateCenter.appid,
                        seq: ++this.cmdSeq,
                        user_id: this.stateCenter.userid,
                        session_id: this.stateCenter.sessionid || "",
                        room_id: this.stateCenter.roomid || "",
                        room_session_id: this.stateCenter.roomSessionId || "",
                        biz_version: this.stateCenter.bizVersion || ""
                    }
                }, e.prototype.startCheck = function () {
                    this.service.startCheck()
                }, e.prototype.stopCheck = function () {
                    this.service.stopCheck()
                }, e.prototype.isDisConnect = function () {
                    return !this.service || this.service.isDisConnect()
                }, e.prototype.createSocket = function (e) {
                    var t = this;
                    this.service.createSocket(e), this.responseRouters = this.responseRouters = {
                        push_kickout: function (e) {
                            t.handlePushKickout(e)
                        }, push_custommsg: function (e) {
                            t.handlePushCustomMsg(e)
                        }, push_im_chat: function (e) {
                            t.handlePushRoomMsg(e)
                        }, push_userlist_update: function (e) {
                            t.handlePushUserStateUpdateMsg(e)
                        }, push_merge_message: function (e) {
                            t.handlePushMergeMsg(e)
                        }, push_trans: function (e) {
                            t.handlePushTransMsg(e)
                        }, push_signal: function (e) {
                            t.handlePushSignalMsg(e)
                        }
                    }
                }, e.prototype.closeSocket = function () {
                    this.service.closeSocket()
                }, e.prototype.sendMessage = function (e, t, r, o, i, s) {
                    if (this.service.isDisConnect()) return this.logger.error(n.ZEGO_RTM_ACTION.SERVICE_SEND + " socket is disconnect"), "webrtc_url" == e && o(a.errorCodeList.SOCKET_CLOSE), 0;
                    var d = i || this.getHeader(e);
                    return this.logger.info(n.ZEGO_RTM_ACTION.SERVICE_SEND + " sendMsg:" + JSON.stringify({
                        header: d,
                        body: t
                    })), this.service.sendMessage(d, t, r, o)
                }, e.prototype.on = function (e, t) {
                    this.responseRouters[e] = t
                }, e.prototype.login = function (e, t) {
                    var r = this.getHeader("login"), i = {
                        id_name: this.stateCenter.idName,
                        nick_name: this.stateCenter.nickName,
                        role: this.stateCenter.role,
                        token: this.stateCenter.token,
                        version: this.stateCenter.sdKVersion,
                        room_name: this.stateCenter.roomid,
                        user_state_flag: this.stateCenter.userStateUpdate ? 1 : 0,
                        room_create_flag: this.stateCenter.roomCreateFlag,
                        client_type: 0 === s.ENV ? o.E_CLIENT_TYPE.ClientType_Webrtc : o.E_CLIENT_TYPE.ClientType_SmallPragram,
                        third_token: this.stateCenter.third_token,
                        user_count_limit: this.stateCenter.maxMemberCount,
                        relate_service: this.stateCenter.relateService.join() || ""
                    };
                    return this.sendMessage("", i, e, t, r)
                }, e.prototype.logout = function (e, t) {
                    return this.sendMessage("logout", {reserve: 0}, e, t)
                }, e.prototype.heartBeat = function (e, t) {
                    return this.sendMessage("hb", {reserve: 0}, e, t)
                }, e.prototype.fetchUserList = function (e, t, r) {
                    return this.sendMessage("user_list", e, t, r)
                }, e.prototype.fetchUserListV2 = function (e, t, r) {
                    return this.sendMessage("user_list_v2", e, t, r)
                }, e.prototype.fetchReliableMessage = function (e, t, r) {
                    return this.sendMessage("trans_fetch", e, t, r)
                }, e.prototype.sendReliableMessage = function (e, t, r) {
                    return this.sendMessage("trans", e, t, r)
                }, e.prototype.sendRoomMsg = function (e, t, r) {
                    return this.sendMessage("im_chat", e, t, r)
                }, e.prototype.sendCustomCommand = function (e, t, r) {
                    return this.sendMessage("custommsg", e, t, r)
                }, e.prototype.sendBigRoomMessage = function (e, t, r) {
                    return this.sendMessage("bigim_chat", e, t, r)
                }, e.prototype.sendRelayMessage = function (e, t, r) {
                    return this.sendMessage("relay", e, t, r)
                }, e.prototype.sendSignalCmd = function (e, t, r) {
                    return this.sendMessage("signal", e, t, r)
                }, e
            }();
            t.LiveRoomService = d
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoSocketService = void 0;
            var o = r(5), i = r(0), s = r(2), n = function () {
                function e() {
                    this.socket = null, this.sendCommandList = new i.LinkedList, this.sendCommandMap = {}, this.sendDataCheckOnceCount = 100, this.sendDataDropTimeout = 1e4, this.sendDataCheckInterval = 2e3
                }

                return e.prototype.createSocket = function (e) {
                    this.socket = o.createZegoWebSocket(e, i.ENV)
                }, e.prototype.closeSocket = function () {
                    this.socket && (this.socket.onclose = null, this.socket.onerror = null, this.socket.close(), this.socket = null)
                }, e.prototype.isDisConnect = function () {
                    return !this.socket || 1 !== this.socket.readyState
                }, e.prototype.sendMessage = function (e, t, r, o, i) {
                    void 0 === r && (r = null), void 0 === o && (o = null), void 0 === i && (i = {timeOut: 6e3});
                    var s = {header: e, body: t}, n = {
                        data: s,
                        seq: e.seq,
                        deleted: !1,
                        sendTime: Date.parse(new Date + ""),
                        timeOut: i.timeOut,
                        success: r,
                        error: o
                    }, a = this.sendCommandList.push(n);
                    return this.sendCommandMap[n.seq] = a, this.socket && this.socket.send(JSON.stringify(s)), e.seq
                }, e.prototype.checkSendMessageList = function (e) {
                    for (var t = e.getFirst(); null != t;) e.remove(t), t._data && t._data.error && setTimeout((function () {
                        t && t._data && t._data.error && t._data.error(s.errorCodeList.TIMEOUT, t._data.data.header.seq, t._data.data.body.custom_msg)
                    }), 0), t = e.getFirst()
                }, e.prototype.checkMessageListTimeout = function (e, t) {
                    for (var r = e.getFirst(), o = Date.parse(new Date + ""), i = 0; !(null == r || r._data && r._data.sendTime + r._data.timeOut > o || (r._data && delete t[r._data.data.header.seq], e.remove(r), r._data && null == r._data.error || r._data && r._data.sendTime + this.sendDataDropTimeout < o || setTimeout((function () {
                        r && r._data && r._data.error && r._data.error(s.errorCodeList.TIMEOUT, r._data.data.header.seq, r._data.data.body.custom_msg)
                    }), 0), ++i >= this.sendDataCheckOnceCount));) r = e.getFirst()
                }, e.prototype.startCheck = function () {
                    var e = this;
                    this.checkMessageListTimeout(this.sendCommandList, this.sendCommandMap), this.sendDataCheckTimer = setTimeout((function () {
                        e.startCheck()
                    }), this.sendDataCheckInterval)
                }, e.prototype.stopCheck = function () {
                    this.checkSendMessageList(this.sendCommandList), clearTimeout(this.sendDataCheckTimer)
                }, e.prototype.openHandler = function (e) {
                    var t = this;
                    this.socket && (this.socket.onopen = function (r) {
                        t.responseHandler(), e(r)
                    })
                }, e.prototype.responseHandler = function () {
                    var e = this;
                    this.socket && (this.socket.onmessage = function (t) {
                        var r = "string" == typeof t.data ? JSON.parse(t.data) : JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t.data)));
                        e.onMessage(r)
                    })
                }, e.prototype.closeHandler = function (e) {
                    this.socket && (this.socket.onclose = function (t) {
                        e(t)
                    })
                }, e.prototype.errorHandler = function (e) {
                    this.socket && (this.socket.onerror = e)
                }, e.prototype.onMessage = function (e) {
                }, e
            }();
            t.ZegoSocketService = n
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.HeartBeatHandler = void 0;
            var o = r(0), i = r(3), s = r(0), n = r(2), a = r(1), d = r(4), c = function () {
                function e(e, t, r, o) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.tryHeartbeatCount = 0, this.heartbeatTimer = null, this.loginHeartbeatTimer = null
                }

                return e.prototype.init = function (e) {
                    var t = this,
                        r = e.body.hearbeat_interval < o.MINIUM_HEARTBEAT_INTERVAL ? o.MINIUM_HEARTBEAT_INTERVAL : e.body.hearbeat_interval;
                    this.tryHeartbeatCount = 0, this.heartbeatTimer && clearTimeout(this.heartbeatTimer), this.loginHeartbeatTimer = setTimeout((function () {
                        t.start(r)
                    }), r)
                }, e.prototype.start = function (e) {
                    var t = this;
                    this.logger.info(a.ZEGO_RTM_ACTION.HEARTBEAT_START + " call");
                    var r = s.getReportSeq();
                    if (this.dataReport.newReport(r, d.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.event), this.dataReport.addMsgInfo(r, {room_sid: d.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.room_sid(this.stateCenter.sessionid)}), !this.stateCenter.isLogin()) return this.logger.error(a.ZEGO_RTM_ACTION.HEARTBEAT_START + " state error"), this.dataReport.addMsgInfo(r, {
                        error: d.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.NOT_LOGIN.code,
                        message: d.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.NOT_LOGIN.msg
                    }), void this.dataReport.uploadReport(r);
                    if (++this.tryHeartbeatCount > 3) return this.logger.error(a.ZEGO_RTM_ACTION.HEARTBEAT_START + " come to try limit"), this.dataReport.addMsgInfo(r, {
                        error: d.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.HB_TIMEOUT.code,
                        message: d.ZegoRTMLogEvent.kZegoTaskLiveRoomhHB.error.HB_TIMEOUT.msg
                    }), this.dataReport.uploadReport(r), void this.hbLogout(n.errorCodeList.HEARTBEAT_TIMEOUT);
                    var o = function (e) {
                        if (e.body && e.body.err_code && 0 !== e.body.err_code) {
                            var o = i.ClientUtil.decodeServerError(e.body.err_code, e.body.err_message);
                            t.dataReport.addMsgInfo(r, {error: o.code, message: o.message + e.body.err_code})
                        }
                        t.dataReport.uploadReport(r), t.handleHeartbeatRsp(e)
                    };
                    this.service.heartBeat(o, o), this.heartbeatInterval = e, this.heartbeatTimer = setTimeout((function () {
                        t.start(t.heartbeatInterval)
                    }), this.heartbeatInterval), this.logger.info(a.ZEGO_RTM_ACTION.HEARTBEAT_START + " call success")
                }, e.prototype.handleHeartbeatRsp = function (e) {
                    if (e.body && e.body.err_code && 0 !== e.body.err_code) return this.logger.error(a.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " disconnect, server error=", e.body.err_code), e.body.err_code == o.ERROR_CODES.ROOM_SESSION_ID_ERR ? void this.hbLogout(n.errorCodeList.HEARTBEAT_TIMEOUT) : void this.hbLogout(i.ClientUtil.getServerError(e.body.err_code));
                    this.tryHeartbeatCount = 0, this.heartbeatInterval = e.body.hearbeat_interval, this.heartbeatInterval < o.MINIUM_HEARTBEAT_INTERVAL && (this.heartbeatInterval = o.MINIUM_HEARTBEAT_INTERVAL), this.heartbeatRspNotiFy(e), this.logger.info(a.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " call success")
                }, e.prototype.heartbeatRspNotiFy = function (e) {
                }, e.prototype.hbLogout = function (e) {
                }, e.prototype.resetHeartbeat = function () {
                    clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null, clearTimeout(this.loginHeartbeatTimer), this.loginHeartbeatTimer = null, this.tryHeartbeatCount = 0, this.logger.info(a.ZEGO_RTM_ACTION.HEARTBEAT_RESET + " call success")
                }, e
            }();
            t.HeartBeatHandler = c
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveHandler = void 0;
            var o = r(0), i = r(1), s = function () {
                function e(e, t, r) {
                    this.logger = e, this.stateCenter = t, this.service = r, this.joinLiveCallbackMap = {}, this.joinLiveRequestMap = {}
                }

                return e.prototype.resetLiveHandler = function () {
                    this.joinLiveCallbackMap = {}, this.joinLiveRequestMap = {}
                }, e.prototype.getSignalCmdContent = function (e, t, r) {
                    var o = {
                        request_id: e,
                        room_id: this.stateCenter.roomid,
                        from_userid: this.stateCenter.idName,
                        from_username: this.stateCenter.nickName,
                        to_userid: t
                    };
                    return null != r && (o.result = r), JSON.stringify(o)
                }, e.prototype.requestJoinLive = function (e, t, r, i) {
                    var s = this.stateCenter.getRequestId(), n = this.getSignalCmdContent(s, e);
                    return null != i && (this.joinLiveCallbackMap[s] = i, this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveRequest, n, e, t, r), !0)
                }, e.prototype.sendSignalCmd = function (e, t, r, o, s) {
                    if (this.stateCenter.isLogin()) {
                        var n = {sub_cmd: e, signal_msg: t, dest_id_name: [r]};
                        this.service.sendSignalCmd(n, (function (e) {
                            o && o(e)
                        }), (function (e) {
                            s && s(e)
                        })), this.logger.info(i.ZEGO_RTM_ACTION.LIVE_SEND_SIGNAL + " call success" + e)
                    } else this.logger.error(i.ZEGO_RTM_ACTION.LIVE_SEND_SIGNAL + " state error")
                }, e.prototype.inviteJoinLive = function (e, t, r, i) {
                    var s = this.stateCenter.getRequestId(), n = this.getSignalCmdContent(s, e);
                    return null != i && (this.joinLiveCallbackMap[s] = i, this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveInvite, n, e, t, r), !0)
                }, e.prototype.endJoinLive = function (e, t, r) {
                    var i = this.stateCenter.getRequestId(), s = this.getSignalCmdContent(i, e);
                    return this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveStop, s, e, t, r), !0
                }, e.prototype.respondJoinLive = function (e, t, r, s) {
                    var n = this.joinLiveRequestMap[e];
                    if (!n) return this.logger.info(i.ZEGO_RTM_ACTION.LIVE_RESPOND_JOIN_LIVE + " no dest id name"), !1;
                    var a = 0;
                    !0 === t && (a = 1);
                    var d = this.getSignalCmdContent(e, n, a);
                    return this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveResult, d, n, r, s), delete this.joinLiveRequestMap[e], !0
                }, e.prototype.handlePushSignalMsg = function (e) {
                    var t = JSON.parse(e.body.signal_msg);
                    switch (this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " hpsm= ", t), e.body.sub_cmd) {
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveRequest:
                            this.handlePushJoinLiveRequestMsg(t);
                            break;
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveResult:
                            this.handlePushJoinLiveResultMsg(t);
                            break;
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveInvite:
                            this.handlePushJoinLiveInviteMsg(t);
                            break;
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveStop:
                            this.handlePushJoinLiveStopMsg(t)
                    }
                }, e.prototype.handlePushJoinLiveRequestMsg = function (e) {
                    var t = e.request_id;
                    if ("string" == typeof t) {
                        var r = e.from_userid;
                        "string" == typeof r ? (this.joinLiveRequestMap[t] = r, this.onRecvJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id), this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " onRecvJoinLiveRequest " + r)) : this.logger.error(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no from user")
                    } else this.logger.error(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no requestId")
                }, e.prototype.onRecvJoinLiveRequest = function (e, t, r, o) {
                    this.stateCenter.actionListener("recvJoinLiveRequest", e, t, r, o)
                }, e.prototype.handlePushJoinLiveInviteMsg = function (e) {
                    var t = e.request_id;
                    if ("string" == typeof t) {
                        var r = e.from_userid;
                        "string" == typeof r ? (this.joinLiveRequestMap[t] = r, this.onRecvInviteJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id), this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " onRecvInviteJoinLiveRequest " + r)) : this.logger.error(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no from user")
                    } else this.logger.error(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + "no requestId")
                }, e.prototype.onRecvInviteJoinLiveRequest = function (e, t, r, o) {
                    this.stateCenter.actionListener("recvInviteJoinLiveRequest", e, t, r, o)
                }, e.prototype.handlePushJoinLiveResultMsg = function (e) {
                    var t = e.request_id;
                    if ("string" == typeof t) {
                        var r = e.result;
                        if (null != r) {
                            var o = 1 == r;
                            if (this.joinLiveCallbackMap[t]) {
                                var s = this.joinLiveCallbackMap[t];
                                if (!s) return void this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no callback");
                                this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " joinLiveRequest/invite result " + o), delete this.joinLiveCallbackMap[t], s(o, e.from_userid, e.from_username)
                            }
                        } else this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no result")
                    } else this.logger.error(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no requestId")
                }, e.prototype.handlePushJoinLiveStopMsg = function (e) {
                    var t = e.request_id;
                    "string" == typeof t ? (this.logger.info(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " onRecvEndJoinLiveCommand " + e.from_userid), this.onRecvEndJoinLiveCommand(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error(i.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no requestId")
                }, e.prototype.onRecvEndJoinLiveCommand = function (e, t, r, o) {
                    this.stateCenter.actionListener("recvEndJoinLiveCommand", e, t, r, o)
                }, e
            }();
            t.LiveHandler = s
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.MessageHandler = void 0;
            var o = r(0), i = r(3), s = r(2), n = r(0), a = r(1), d = r(4), c = function () {
                function e(e, t, r, o) {
                    var i = this;
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.sendRoomMsgTime = 0, this.sendRoomMsgInterval = 500, this.bigImCallbackMap = {}, this.bigIMmessageList = [], this.bigImTimer = null, this.relayTimer = null, this.serverTimeOffset = 0, this.datiTimeWindow = 0, this.bigimTimeWindow = 0, this.transSeqMap = {}, this.onRecvReliableMessage = function (e) {
                        var t = e.map((function (e) {
                            return {
                                key: e.trans_type,
                                value: e.trans_data,
                                updateUser: {userID: e.trans_idname, userName: e.trans_nickname},
                                updateTime: e.trans_send_time
                            }
                        }));
                        i.stateCenter.actionListener("roomExtraInfoUpdate", i.stateCenter.roomid, t), e.forEach((function (e) {
                            i.stateCenter.actionListener("recvReliableMessage", e.trans_type, e.trans_seq, e.trans_data)
                        }))
                    }, this.realyMessageList = []
                }

                return e.prototype.loginRsp = function (e) {
                    var t = this;
                    if (null != e.body.ret_timestamp && "string" == typeof e.body.ret_timestamp) {
                        var r = parseFloat(e.body.ret_timestamp);
                        this.serverTimeOffset = 0 == r ? 0 : e.body.ret_timestamp - (new Date).getTime()
                    }
                    if (e.body.bigim_time_window && "number" == typeof e.body.bigim_time_window && (this.bigimTimeWindow = e.body.bigim_time_window), e.body.dati_time_window && "number" == typeof e.body.dati_time_window && (this.datiTimeWindow = e.body.dati_time_window), e.body.trans_seqs) for (var o = 0; o < e.body.trans_seqs.length; o++) {
                        var i = e.body.trans_seqs[o].trans_channel, s = e.body.trans_seqs[o].trans_seq_array;
                        (s = s.filter((function (e) {
                            var r = e.trans_type, o = e.trans_seq;
                            return !t.transSeqMap[r] || t.transSeqMap[r].seq < o
                        }))).length > 0 && this.fetchReliableMessage(i, s)
                    }
                }, e.prototype.sendReliableMessage = function (e, t, r, o) {
                    var n = this;
                    this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE + " call"), this.transSeqMap[e] || (this.transSeqMap[e] = {seq: 0});
                    var d = {
                        trans_type: e,
                        trans_data: t,
                        trans_local_seq: this.transSeqMap[e].seq,
                        trans_channel: "clt"
                    };
                    this.service.sendReliableMessage(d, (function (t) {
                        n.transSeqMap[e].seq = t.body.trans_seq, n.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE + " trans " + e + " seq " + t.body.trans_seq), r({errorCode: 0})
                    }), (function (e) {
                        var t, r = [i.ClientUtil.getServerError(e.body.err_code), e.body.msg_id], d = r[0], c = r[1];
                        n.logger.error(a.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  " + d.msg), t = d == s.errorCodeList.TIMEOUT ? s.errorCodeList.IM_SEND_FAILED : d, o({
                            code: t.code,
                            msg: c
                        })
                    }))
                }, e.prototype.fetchReliableMessage = function (e, t) {
                    var r = this, o = {trans_channel: e, fetch_array: t}, i = function (e) {
                        r.handleFetchTransRsp(e)
                    };
                    this.service.fetchReliableMessage(o, i, i), this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_FETCH_RELIABLE + " call success")
                }, e.prototype.handleFetchTransRsp = function (e) {
                    if (0 == e.body.err_code) {
                        var t = e.body.trans_fetch_results, r = [];
                        if (Array.isArray(t) && t.length > 0) for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            if (s.err_code !== o.ERROR_CODES.FETCH_TRANS_UNKNOWN_TYPE) {
                                var n = s.trans_type, d = s.trans_seq;
                                s.err_code !== o.ERROR_CODES.FETCH_TRANS_WRONG_SEQ ? (!this.transSeqMap[n] || this.transSeqMap[n].seq < d ? (this.transSeqMap[n] = {seq: d}, r.push(s)) : this.logger.warn(a.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " fetch trans seq wrong"), r.length > 0 && this.onRecvReliableMessage(r)) : (this.logger.warn(a.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " fetch trans seq is wrong " + s.err_code), this.transSeqMap[n] = {seq: d})
                            } else this.logger.warn(a.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " fetch trans unknown type " + s.err_code)
                        }
                    } else this.logger.error(a.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " trans send error " + e.body.err_code)
                }, e.prototype.handlePushTransMsg = function (e) {
                    var t = e.body.trans_type, r = e.body.trans_seq;
                    !this.transSeqMap[t] || this.transSeqMap[t].seq < r ? (this.transSeqMap[t] = {seq: r}, this.onRecvReliableMessage([e.body])) : this.logger.warn(a.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_PUSH + " trans seq wrong"), this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_PUSH + " trans " + t + " seq " + r)
                }, e.prototype.sendRoomMsg = function (e, t, r, o, n) {
                    var d = this;
                    if (!this.stateCenter.isLogin()) return this.logger.error(a.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + " state error"), !1;
                    var c = Date.parse(new Date + "");
                    if (this.sendRoomMsgTime > 0 && this.sendRoomMsgTime + this.sendRoomMsgInterval > c) return this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + " freq error"), n && n(s.errorCodeList.FREQ_LIMITED, 0, e, r), !1;
                    this.sendRoomMsgTime = c;
                    var l = {msg_category: e, msg_type: 1, msg_content: r};
                    return this.service.sendRoomMsg(l, (function (e) {
                        o({errorCode: 0, messageID: e.body.msg_id})
                    }), (function (e) {
                        var t, r = [i.ClientUtil.getServerError(e.body.err_code), e.body.msg_id], o = r[0], c = r[1];
                        d.logger.error(a.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  " + o.msg), t = o == s.errorCodeList.TIMEOUT ? s.errorCodeList.IM_SEND_FAILED : o, n({
                            errorCode: t.code,
                            messageID: c
                        })
                    })), this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  call success"), !0
                }, e.prototype.handlePushRoomMsg = function (e) {
                    var t = this, r = n.getReportSeq();
                    this.dataReport.newReport(r), this.dataReport.addMsgInfo(r, {room_sid: d.ZegoRTMLogEvent.kZegoTaskLiveRoomGetRoomMessage.room_sid(e.header.session_id)});
                    var o = [];
                    e.body.chat_data.forEach((function (e) {
                        var i = {
                            fromUser: {userID: e.id_name, userName: e.nick_name},
                            message: e.msg_content,
                            sendTime: e.send_time,
                            messageID: e.msg_id
                        };
                        o.push(i), t.dataReport.addMsgInfo(r, {from_msg_id: e.id_name})
                    })), this.dataReport.uploadReport(r, d.ZegoRTMLogEvent.kZegoTaskLiveRoomGetRoomMessage.event), this.stateCenter.actionListener("IMRecvBroadcastMessage", this.stateCenter.roomid, o)
                }, e.prototype.sendCustomCommand = function (e, t, r, o) {
                    var n = this;
                    if (!this.stateCenter.isLogin()) return this.logger.error(a.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG + " state error"), !1;
                    var d = {
                        from_userid: this.stateCenter.idName,
                        from_username: this.stateCenter.nickName,
                        request_id: this.stateCenter.getRequestId(),
                        custom_content: t || "",
                        room_id: this.stateCenter.roomid
                    }, c = {dest_id_name: e, custom_msg: JSON.stringify(d)};
                    return this.service.sendCustomCommand(c, (function () {
                        r({errorCode: 0})
                    }), (function (e) {
                        var t, r = i.ClientUtil.getServerError(e.body.err_code);
                        n.logger.error(a.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG + " " + r.msg), t = r == s.errorCodeList.TIMEOUT ? s.errorCodeList.IM_SEND_FAILED : r, o({errorCode: t.code})
                    })), this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG + " call success"), !0
                }, e.prototype.handlePushCustomMsg = function (e) {
                    var t = JSON.parse(e.body.custommsg),
                        r = [t.from_userid, t.from_username, t.room_id, t.custom_content], o = r[0], i = r[1], s = r[2],
                        a = r[3], c = n.getReportSeq();
                    this.dataReport.newReport(c), this.dataReport.uploadReport(c, d.ZegoRTMLogEvent.kZegoTaskLiveRoomGetCustomCommand.event), this.stateCenter.actionListener("IMRecvCustomCommand", s, {
                        userID: o,
                        userName: i
                    }, a)
                }, e.prototype.sendBigRoomMessage = function (e, t, r, o, i) {
                    var s = this, a = this.bigimTimeWindow, d = this.serverTimeOffset, c = (new Date).getTime() + d,
                        l = n.getSeq().toString();
                    if (this.bigImCallbackMap[l] = {success: o, error: i}, 0 == a) {
                        var u = {msg_category: e, msg_type: 1, msg_content: r, bigmsg_client_id: l};
                        this.sendBigRoomMessageInternal([u], (function (e) {
                            s.handleBigImMsgRsp(e)
                        }), (function (e) {
                            i && i(e)
                        }))
                    } else {
                        var g = Math.floor(c / a);
                        if (this.bigImLastTimeIndex < g && 0 == this.bigIMmessageList.length) {
                            this.bigImLastTimeIndex = g;
                            var p = {msg_category: e, msg_type: 1, msg_content: r, bigmsg_client_id: l};
                            this.sendBigRoomMessageInternal([p], (function (e) {
                                s.handleBigImMsgRsp(e)
                            }), (function (e) {
                                i && i(e)
                            }))
                        } else this.bigIMmessageList.push({
                            msg_category: e,
                            msg_type: 1,
                            msg_content: r,
                            bigmsg_client_id: l
                        }), 1 == this.bigIMmessageList.length && this.setBigImTimer(d, a)
                    }
                }, e.prototype.sendBigRoomMessageInternal = function (e, t, r) {
                    var o = {msgs: e};
                    this.service.sendBigRoomMessage(o, (function (e) {
                        t(e)
                    }), (function (e) {
                        r({errorCode: i.ClientUtil.getServerError(e.body.err_code).code, messageID: void 0})
                    })), this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_BIG_MSG + " sendBigRoomMessage called")
                }, e.prototype.handleBigImMsgRsp = function (e) {
                    this.bigimTimeWindow = e.body.bigim_time_window;
                    for (var t = 0; t < e.body.msgs.length; t++) {
                        var r = e.body.msgs[t].bigmsg_client_id, o = e.body.msgs[t].bigmsg_id;
                        if (this.bigImCallbackMap[r]) {
                            var i = this.bigImCallbackMap[r].success;
                            null != i && i({errorCode: 0, messageID: o}), delete this.bigImCallbackMap[r]
                        }
                    }
                }, e.prototype.setBigImTimer = function (e, t) {
                    var r = this, o = t - ((new Date).getTime() + e) % t, s = i.ClientUtil.generateRandumNumber(t) + o;
                    this.bigImTimer = setTimeout((function () {
                        r.onBigImTimer()
                    }), s)
                }, e.prototype.onBigImTimer = function () {
                    var e = this, t = (new Date).getTime() + this.serverTimeOffset;
                    this.bigImLastTimeIndex = Math.floor(t / this.bigimTimeWindow);
                    for (var r = [], o = [], i = 0; i < this.bigIMmessageList.length && !(i >= 20); i++) {
                        var s = this.bigIMmessageList[i];
                        r.push({
                            msg_category: s.msg_category,
                            msg_type: s.msg_type,
                            msg_content: s.msg_content,
                            bigmsg_client_id: s.bigmsg_client_id
                        }), o.push(s.bigmsg_client_id)
                    }
                    this.bigIMmessageList.length > 20 ? this.bigIMmessageList.splice(0, 20) : this.bigIMmessageList = [], this.sendBigRoomMessageInternal(r, (function (t) {
                        e.handleBigImMsgRsp(t)
                    }), (function (t, r) {
                        for (var i = 0; i < o.length; i++) {
                            var s = o[i], n = e.bigImCallbackMap[s];
                            n && (null != n.error && n.error(t, r), delete e.bigImCallbackMap[s])
                        }
                    })), this.bigImTimer && clearTimeout(this.bigImTimer), this.bigImTimer = null, this.bigIMmessageList.length > 0 && this.setBigImTimer(this.serverTimeOffset, this.bigimTimeWindow)
                }, e.prototype.handlePushMergeMsg = function (e) {
                    for (var t = 0; t < e.body.messages.length; t++) 14001 === e.body.messages[t].sub_cmd && this.handlePushBigRooMsg(e.body.messages[t].msg_body)
                }, e.prototype.handlePushBigRooMsg = function (e) {
                    var t;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return void this.logger.warn(a.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + "parse json error")
                    }
                    if (t) {
                        for (var r = t.room_id, o = [], i = 0; i < t.msg_data.length; i++) {
                            var s = t.msg_data[i];
                            s.id_name != this.stateCenter.idName ? o.push({
                                idName: s.id_name,
                                nickName: s.nick_name,
                                messageId: s.bigmsg_id,
                                category: s.msg_category,
                                type: s.msg_type,
                                content: s.msg_content,
                                time: s.send_time
                            }) : this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + " self message")
                        }
                        0 == o.length ? this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + " no other pushData except self") : this.onRecvBigRoomMessage(o, r), this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + "call success")
                    } else this.logger.warn(a.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + " cann't find message body")
                }, e.prototype.onRecvBigRoomMessage = function (e, t) {
                    var r = n.getReportSeq();
                    this.dataReport.newReport(r);
                    var o = [];
                    e.forEach((function (e) {
                        var t = {
                            fromUser: {userID: e.idName, userName: e.nickName},
                            message: e.content,
                            sendTime: e.time,
                            messageID: e.messageId
                        };
                        o.push(t)
                    })), this.dataReport.uploadReport(r, d.ZegoRTMLogEvent.kZegoTaskLiveGetRoomBigIM.event), this.stateCenter.actionListener("IMRecvBarrageMessage", t, o)
                }, e.prototype.resetMessageInfo = function () {
                    this.transSeqMap = {}, this.realyMessageList = [], this.relayTimer && (clearTimeout(this.relayTimer), this.relayTimer = null), this.bigImLastTimeIndex = 0, this.bigIMmessageList = [], this.bigImCallbackMap = {}, this.bigImTimer && (clearTimeout(this.bigImTimer), this.bigImTimer = null), this.serverTimeOffset = 0, this.datiTimeWindow = 0, this.bigimTimeWindow = 0
                }, e.prototype.sendRelayMessage = function (e, t, r, o) {
                    var i = this.datiTimeWindow, s = this.serverTimeOffset;
                    i > 0 ? (this.realyMessageList.push({
                        type: e,
                        data: t,
                        success: r,
                        error: o
                    }), 1 == this.realyMessageList.length && this.setRelayTimer(s, i)) : this.sendRelayMessageInternal(e, t, r, o)
                }, e.prototype.sendRelayMessageInternal = function (e, t, r, o) {
                    this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG + " call");
                    var i = {relay_type: e, relay_data: t};
                    this.service.sendRelayMessage(i, (function (e) {
                        r && r(e)
                    }), (function (e) {
                        o && o(e)
                    }))
                }, e.prototype.setRelayTimer = function (e, t) {
                    var r = this, o = 2 * t - ((new Date).getTime() + e) % t, s = i.ClientUtil.generateRandumNumber(o);
                    this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG + " setTimer " + s), this.relayTimer = setTimeout((function () {
                        r.onRelayTimer()
                    }), s)
                }, e.prototype.onRelayTimer = function () {
                    if (0 != this.realyMessageList.length) {
                        var e = this.realyMessageList[0];
                        this.sendRelayMessageInternal(e.type, e.data, e.success, e.error), this.relayTimer && clearTimeout(this.relayTimer), this.relayTimer = null, this.realyMessageList.splice(0, 1), this.realyMessageList.length > 0 && this.setRelayTimer(this.serverTimeOffset, this.datiTimeWindow)
                    } else this.logger.info(a.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG + "  no relay data")
                }, e
            }();
            t.MessageHandler = c
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.RoomHandler = void 0;
            var o = r(0), i = r(3), s = r(0), n = r(1), a = r(2), d = r(4), c = function () {
                function e(e, t, r, o) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.tryLoginTimer = null, this.tryLoginCount = 0, this.tryLoginInterval = 1e4
                }

                return e.prototype.setRunState = function (e) {
                    this.stateCenter.lastRunState = this.stateCenter.runState, this.stateCenter.runState = e
                }, e.prototype.resetTryLogin = function () {
                    this.tryLoginTimer && clearTimeout(this.tryLoginTimer), this.tryLoginTimer = null
                }, e.prototype.resetRoom = function () {
                    var e = this;
                    if (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call"), this.resetTryLogin(), "0" !== this.stateCenter.sessionid && this.stateCenter.runState !== o.ENUM_RUN_STATE.logout) {
                        var t = function (t) {
                            e.handleLogoutRsp(t)
                        };
                        this.service.logout(t, t)
                    }
                    this.setRunState(o.ENUM_RUN_STATE.logout), this.stateCenter.userid = "", this.stateCenter.sessionid = "", this.stateCenter.roomSessionId = "", this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.sessionid, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), this.service.closeSocket(), this.resetRoomCallBack(), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call success")
                }, e.prototype.resetRoomCallBack = function () {
                }, e.prototype.loginSuccessCallBack = function (e, t) {
                }, e.prototype.handlePushKickout = function (e) {
                    var t = this;
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_KICK_OUT + "  call " + e);
                    var r = s.getReportSeq();
                    this.dataReport.newReport(r, d.ZegoRTMLogEvent.kZegoTaskKickout.event), this.dataReport.addMsgInfo(r, {user_id: d.ZegoRTMLogEvent.kZegoTaskKickout.user_id(this.stateCenter.idName)});
                    var o = i.ClientUtil.getKickoutError(e.body.reason);
                    this.dataReport.addMsgInfo(r, {error: o.code, message: o.message}), this.dataReport.uploadReport(r);
                    var c = this.stateCenter.roomTryHandler;
                    c ? (c.onactive = function (e, r) {
                        t.disconnectedHandle(r)
                    }, e.body.need_relogin && 1 == e.body.need_relogin ? (this.stateCenter.sessionid = "", c.startMaxTime(), c.active()) : (this.resetRoom(), o.name && a.errorCodeList[o.name] ? this.disconnectedHandle({
                        code: a.errorCodeList[o.name].code,
                        msg: a.errorCodeList[o.name].msg + " kickout，reason " + e.body.reason
                    }) : this.disconnectedHandle({
                        code: a.errorCodeList.ROOM_INNER_ERROR.code,
                        msg: o.message
                    }))) : this.logger.info(n.ZEGO_RTM_ACTION.ROOM_KICK_OUT + " try handler no found")
                }, e.prototype.handleHbLogout = function (e) {
                    var t = this, r = this.stateCenter.roomTryHandler;
                    r && (r.onactive = function (e, r) {
                        t.disconnectedHandle(r)
                    }, e == a.errorCodeList.HEARTBEAT_TIMEOUT || e.msg.endsWith("1000002001") || e.msg.endsWith("1000000152") ? (r.startMaxTime(), r.active()) : (r.stopMaxTime(), r.invalid(), this.resetRoom(), this.disconnectedHandle(e)))
                }, e.prototype.onDisconnect = function (e) {
                    var t = this;
                    if (this.logger.error(n.ZEGO_RTM_ACTION.ROOM_DISCONNECT + " " + e.msg), "string" == typeof e.code && "Error.Network" === e.code) this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin, {
                        error: d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.error.ROOM_DISCONNECT.code,
                        message: d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.error.ROOM_DISCONNECT.msg
                    }); else if ("number" == typeof e.code) {
                        var r;
                        (r = e.code < 2e9 && e.code > 1e9 || e.code < 1e6 ? i.ClientUtil.decodeServerError(e.code, e.msg) : {
                            code: e.code,
                            message: e.msg
                        }) && this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin, {
                            error: r.code,
                            message: r.message
                        })
                    }
                    this.dataReport.uploadReport(this.stateCenter.reportSeqList.relogin), this.stateCenter.reportSeqList.relogin = 0, i.ClientUtil.unregisterCallback(d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event, this.stateCenter.reportList);
                    var o = this.stateCenter.roomTryHandler;
                    o ? (o.onactive = function (e, r) {
                        r && 0 !== r.code ? t.roomStateHandle("DISCONNECTED", r) : t.roomStateHandle("CONNECTED", r)
                    }, o.startMaxTime(), o.active()) : this.logger.error(n.ZEGO_RTM_ACTION.ROOM_DISCONNECT + " try handler no found")
                }, e.prototype.onConnecting = function (e) {
                    this.roomStateHandle("CONNECTING", e)
                }, e.prototype.disconnectedHandle = function (e) {
                    e && 0 !== e.code ? this.roomStateHandle("DISCONNECTED", e) : this.roomStateHandle("CONNECTED", e)
                }, e.prototype.roomStateHandle = function (e, t) {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_STATUS_CALLBACK + " " + e + " " + JSON.stringify(t)), this.stateCenter.lastRoomState = this.stateCenter.roomState, this.stateCenter.roomState = e, this.stateCenter.roomState !== this.stateCenter.lastRoomState && (this.stateCenter.actionListener("roomStateUpdate", this.stateCenter.roomid, e, t.code, t.msg || ""), this.stateCenter.actionListener("_roomStateUpdate", this.stateCenter.roomid, e, t.code, t.msg || ""))
                }, e.prototype.login = function (e, t, r, c, l, u, g) {
                    if (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " call:", t, r), this.logger.setSessionInfo(this.stateCenter.appid, t, "", c.userID, "", this.stateCenter.sdKVersion), l && (l.userUpdate && "boolean" == typeof l.userUpdate && (this.stateCenter.userStateUpdate = l.userUpdate), l.maxMemberCount && "number" == typeof l.maxMemberCount && (this.stateCenter.maxMemberCount = l.maxMemberCount)), !this.stateCenter.configOK) return this.logger.error(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " init sdk wrong"), void g(a.errorCodeList.INIT);
                    if (this.stateCenter.runState !== o.ENUM_RUN_STATE.trylogin && this.setRunState(o.ENUM_RUN_STATE.trylogin), this.stateCenter.roomid = t, this.stateCenter.token = r, this.stateCenter.third_token = r, this.stateCenter.idName = c.userID, this.stateCenter.nickName = c.userName || c.userID, i.ClientUtil.registerCallback("login", {
                        success: u,
                        error: g
                    }, this.stateCenter.callbackList), 0 === this.stateCenter.reportSeqList.login) {
                        var p = s.getReportSeq();
                        this.stateCenter.reportSeqList.relogin = p, this.dataReport.newReport(p, d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event), i.ClientUtil.logReportCallback(d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event, this.dataReport, p, this.stateCenter.reportList)
                    }
                    this.resetTryLogin(), this.onConnecting({
                        code: 0,
                        msg: ""
                    }), this.tryLogin(e), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " call success")
                }, e.prototype.tryLogin = function (e) {
                    var t = this;
                    if (this.stateCenter.runState === o.ENUM_RUN_STATE.trylogin) {
                        var r = 0 !== this.stateCenter.reportSeqList.login ? d.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                        if (this.service.isDisConnect()) try {
                            this.service.closeSocket(), this.logger.debug(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " new websocket"), i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && (this.tryLoginCount > 1 && i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(s.REPORT_ACTION.eventEnd, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event), i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(s.REPORT_ACTION.eventStart, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event), i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(s.REPORT_ACTION.addEventMsg, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.server("server"), e)), this.service.createSocket(e), this.service.openHandler((function () {
                                t.openHandler()
                            })), this.service.closeHandler((function (e) {
                                t.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " close " + JSON.stringify(e.code ? e.code : e)), t.service.closeSocket(), t.closeHandler(e)
                            })), this.service.errorHandler((function (e) {
                                t.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " error " + JSON.stringify(e.code ? e.code : e)), t.service.closeSocket(), t.closeHandler(e)
                            }))
                        } catch (e) {
                            this.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + "  websocket err:" + JSON.stringify(e))
                        } else {
                            this.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " use current websocket and sent login"), i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(s.REPORT_ACTION.eventStart, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event);
                            var a = function (e, r) {
                                t.handleLoginRsp(e, r)
                            };
                            this.service.login(a, a)
                        }
                        this.tryLoginTimer = setTimeout((function () {
                            t.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " over time no response, login timeout"), i.ClientUtil.actionErrorCallback("login", t.stateCenter.callbackList)(o.sdkErrorList.LOGIN_TIMEOUT)
                        }), this.tryLoginInterval), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " call success")
                    } else this.logger.error("zb.rh.tl state error")
                }, e.prototype.openHandler = function () {
                    var e = this;
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_OPEN_HANDLER + " websocket.onpen call");
                    var t = 0 !== this.stateCenter.reportSeqList.login ? d.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                    i.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList)(s.REPORT_ACTION.eventEndWithMsgInfo, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event, {try_cnt: this.tryLoginCount}), this.service.onPush(), i.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList)(s.REPORT_ACTION.eventStart, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event);
                    var r = function (t, r) {
                        e.handleLoginRsp(t, r)
                    };
                    this.service.login(r, r)
                }, e.prototype.handleLoginRsp = function (e, t) {
                    var r = 0 !== this.stateCenter.reportSeqList.login ? d.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                    if (i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(s.REPORT_ACTION.eventEndWithMsgInfo, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event), this.stateCenter.runState === o.ENUM_RUN_STATE.trylogin) {
                        if (e.header.seq === t) return 0 !== e.body.err_code ? (this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " server error=", e.body.err_code), void this.handleLoginFail(e)) : (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " call success."), void this.handleLoginSuccess(e));
                        this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " in wrong seq, local=", t + "", ",recv=", e.header.seq)
                    } else this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " state error")
                }, e.prototype.handleLoginFail = function (e) {
                    this.resetTryLogin();
                    var t = i.ClientUtil.getServerError(e.body.err_code);
                    i.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(t, !0)
                }, e.prototype.handleLoginSuccess = function (e) {
                    var t = {}, r = this.stateCenter.lastRunState;
                    this.setRunState(o.ENUM_RUN_STATE.login), this.stateCenter.userid = e.body.user_id, this.stateCenter.sessionid = e.body.session_id, this.stateCenter.roomSessionId = e.body.room_session_id, this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.sessionid, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), e.body.config_info && (this.logger.setRemoteLogLevel(e.body.config_info.log_level), t.log_level = e.body.config_info.log_level, "" != e.body.config_info.log_url && (this.logger.setLogServer(e.body.config_info.log_url), t.log_url = e.body.config_info.log_url)), e.body.cluster_env && 1 === e.body.cluster_env && (this.stateCenter.testEnvironment = !0, t.test_environment = "true", !this.stateCenter.debugCustom && (this.stateCenter.debug = !0));
                    var n = 0 !== this.stateCenter.reportSeqList.login ? d.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : d.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                    i.ClientUtil.actionSuccessCallback(n, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback(n, this.stateCenter.reportList)(s.REPORT_ACTION.addEventMsg, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event, d.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.respond_info("respond_info"), t), this.resetTryLogin(), this.loginSuccessCallBack(r, e), i.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList) && i.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList)(!0), this.roomStateHandle("CONNECTED", {
                        code: 0,
                        msg: ""
                    })
                }, e.prototype.closeHandler = function (e) {
                    this.logger.error(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " room websocket close " + JSON.stringify(e.code ? e.code : e)), this.stateCenter.runState !== o.ENUM_RUN_STATE.logout ? this.stateCenter.runState === o.ENUM_RUN_STATE.trylogin ? (this.resetTryLogin(), i.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(1006 == e.code ? o.sdkErrorList.LOGIN_TIMEOUT : e)) : this.stateCenter.runState === o.ENUM_RUN_STATE.login && (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " is called because of network broken"), this.resetTryLogin(), this.onDisconnect(o.sdkErrorList.LOGIN_DISCONNECT)) : this.logger.info(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " onclose logout flow call websocket.close")
                }, e.prototype.logout = function () {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT + " call"), this.stateCenter.runState !== o.ENUM_RUN_STATE.logout ? (this.resetRoom(), this.roomStateHandle("DISCONNECTED", {
                        code: 0,
                        msg: ""
                    }), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT + " call success")) : this.logger.warn("zb.rh.lo at logout")
                }, e.prototype.handleLogoutRsp = function (e) {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT + "result=", e.body && e.body.err_code ? e.body.err_code : "")
                }, e
            }();
            t.RoomHandler = c
        }, function (e, t, r) {
            "use strict";
            var o = this && this.__spreadArrays || function () {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var o = Array(e), i = 0;
                for (t = 0; t < r; t++) for (var s = arguments[t], n = 0, a = s.length; n < a; n++, i++) o[i] = s[n];
                return o
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.UserHandler = void 0;
            var i = r(0), s = r(3), n = r(0), a = r(1), d = r(4), c = function () {
                function e(e, t, r, o) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.userQuerying = !1, this.userTempList = [], this.userSeq = 0, this.userList = [], this.userSeqMergeMap = {}, this.userListInterval = 3e4, this.userListMergeInterval = 5e3, this.anchor_info = {
                        anchor_id: "",
                        anchor_id_name: "",
                        anchor_nick_name: ""
                    }
                }

                return e.prototype.loginRsp = function (e, t) {
                    this.anchor_info = e.body.anchor_info || this.anchor_info, this.userListInterval = e.body.userlist_interval || this.userListInterval, this.userListMergeInterval = e.body.userlist_merge_timeout || this.userListMergeInterval, e.body.anchor_info && (this.stateCenter.actionListener("getAnchorInfo", e.body.anchor_info.anchor_id_name, e.body.anchor_info.anchor_nick_name), this.stateCenter.actionListener("_getAnchorInfo", e.body.anchor_info.anchor_id_name, e.body.anchor_info.anchor_nick_name)), e.body.online_count && this.stateCenter.actionListener("roomOnlineUserCountUpdate", this.stateCenter.roomid, e.body.online_count), this.logger.info(a.ZEGO_RTM_ACTION.USER_LOGIN_RSP + "  userStateUpdate " + this.stateCenter.userStateUpdate), this.stateCenter.userStateUpdate && this.fetchUserList(t)
                }, e.prototype.patchUserList = function (e) {
                    var t = this;
                    if (e.body.server_user_seq !== this.userSeq && this.stateCenter.userStateUpdate && !this.userSeqMergeMap) {
                        var r = this.lastUserQueryTime - Date.now();
                        this.logger.info(a.ZEGO_RTM_ACTION.USER_HB_PATCH + " call update user " + this.userSeq + " server " + e.body.server_user_seq + " wait " + r), r > 0 ? (this.userQueryTimer && clearTimeout(this.userQueryTimer), this.userQueryTimer = setTimeout((function () {
                            t.fetchUserList()
                        }), r)) : this.fetchUserList()
                    }
                    null != e.body.online_count && 0 != e.body.online_count && this.stateCenter.actionListener("roomOnlineUserCountUpdate", this.stateCenter.roomid, e.body.online_count)
                }, e.prototype.resetUserHandler = function () {
                    this.userQuerying = !1, this.lastUserQueryTime = 0, this.userTempList = [], this.userSeq = 0, this.userList = void 0, this.userSeqMergeMap = {}, this.userSeqMergeTimer = void 0, this.userQueryTimer = void 0, this.userListInterval = 3e4, this.userListMergeInterval = 5e3, this.anchor_info = {
                        anchor_id: "",
                        anchor_id_name: "",
                        anchor_nick_name: ""
                    }
                }, e.prototype.fetchUserList = function (e) {
                    this.userQuerying ? this.logger.warn(a.ZEGO_RTM_ACTION.USER_FETCH_USER + " is already querying") : (this.userQuerying = !0, this.userTempList = [], this.fetchUserListWithPage(0, e || 0), this.logger.info(a.ZEGO_RTM_ACTION.USER_FETCH_USER + " the first time call"))
                }, e.prototype.fetchUserListWithPage = function (e, t) {
                    var r = this, o = function (e) {
                        r.handleFetchUserListRsp(e, t)
                    };
                    "V1" === i.ROOMVERSION ? this.service.fetchUserList({
                        user_index: e,
                        sort_type: 0
                    }, o, o) : this.service.fetchUserListV2({marker: 0 === e ? "" : e + "", mode: 0, limit: 100}, o, o)
                }, e.prototype.handleFetchUserListRsp = function (e, t) {
                    var r = this;
                    if (0 != e.body.err_code) return this.userQuerying = !1, this.lastUserQueryTime = Date.now() + this.userListInterval, void this.logger.info(a.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " fetch error " + e.body.err_code);
                    if (this.stateCenter.userStateUpdate) {
                        this.userTempList = o(this.userTempList, e.body.user_baseinfos);
                        var n = e.body.ret_user_index;
                        if (n != e.body.server_user_index) return this.logger.info(a.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " fetch another page"), void this.fetchUserListWithPage(n + 1, t);
                        this.userSeq = e.body.server_user_seq;
                        for (var d = [], c = 0; c < this.userTempList.length; c++) {
                            var l = {userID: this.userTempList[c].id_name, userName: this.userTempList[c].nick_name};
                            d.push(l)
                        }
                        t == i.ENUM_RUN_STATE.login ? (this.userList && s.ClientUtil.mergeUserList(this.logger, this.userList, d, (function (e, t) {
                            0 !== e.length && r.onUserStateUpdate(r.stateCenter.roomid, "ADD", e), 0 !== t.length && r.onUserStateUpdate(r.stateCenter.roomid, "DELETE", t)
                        })), this.userList = d) : (this.userList = d, 0 !== d.length && this.onUserStateUpdate(this.stateCenter.roomid, "ADD", d)), this.userQuerying = !1, this.lastUserQueryTime = Date.now() + this.userListInterval, this.userTempList = [], this.logger.info(a.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " call success user_list " + d + " count " + d.length)
                    }
                }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
                    if (this.logger.info(a.ZEGO_RTM_ACTION.USER_USER_PUSH + " call"), this.stateCenter.userStateUpdate) if (this.userSeq !== e.body.user_list_seq) if (this.userSeq + e.body.user_actions.length === e.body.user_list_seq) {
                        this.userSeq = e.body.user_list_seq;
                        for (var t = [], r = 0; r < e.body.user_actions.length; r++) {
                            var o = {
                                action: e.body.user_actions[r].Action,
                                idName: e.body.user_actions[r].IdName,
                                nickName: e.body.user_actions[r].NickName,
                                loginTime: e.body.user_actions[r].LoginTime
                            };
                            t.push(o)
                        }
                        var i = [], s = [];
                        t.forEach((function (e) {
                            1 == e.action ? i.push({
                                userID: e.idName,
                                userName: e.nickName
                            }) : 2 == e.action && s.push({userID: e.idName, userName: e.nickName})
                        })), this.userList && (this.userList = this.userList.concat(i).filter((function (e) {
                            return !s.some((function (t) {
                                return t.userID == e.userID
                            }))
                        }))), 0 !== i.length && this.onUserStateUpdate(e.body.room_id, "ADD", i), 0 !== s.length && this.onUserStateUpdate(e.body.room_id, "DELETE", s), this.logger.info(a.ZEGO_RTM_ACTION.USER_USER_PUSH + " call success")
                    } else this.mergeUserByUserSeq(e.body.user_list_seq, e.body.user_actions); else this.logger.warn(a.ZEGO_RTM_ACTION.USER_USER_PUSH + " user_list_seq is the same with local seq"); else this.logger.info(a.ZEGO_RTM_ACTION.USER_USER_PUSH + " userStateUpdate is false")
                }, e.prototype.onUserStateUpdate = function (e, t, r) {
                    var o = this, i = n.getReportSeq();
                    this.dataReport.newReport(i, d.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.event);
                    var s = r.filter((function (e) {
                        return e.userID !== o.stateCenter.idName
                    }));
                    0 !== s.length && this.stateCenter.actionListener("roomUserUpdate", e, t, s), this.dataReport.addMsgInfo(i, {user_update_type: "ADD" == t ? d.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.user_update_type("added") : d.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.user_update_type("deleted")}), this.dataReport.uploadReport(i)
                }, e.prototype.mergeUserByUserSeq = function (e, t) {
                    var r = this;
                    this.userSeqMergeMap || (this.logger.warn(a.ZEGO_RTM_ACTION.USER_MERGE_SEQ + " new merge userlist " + this.userSeq + " server " + e), this.userSeqMergeMap = {}, this.userSeqMergeTimer && clearTimeout(this.userSeqMergeTimer), this.userSeqMergeTimer = setTimeout((function () {
                        var e = Object.keys(r.userSeqMergeMap).map((function (e) {
                            return +e
                        })).sort((function (e, t) {
                            return e - t
                        }));
                        if (e[e.length - 1] - e[0] + 1 === e.length) r.mergeUser(e); else {
                            r.userSeqMergeMap = null;
                            var t = r.lastUserQueryTime - Date.now();
                            r.logger.info(a.ZEGO_RTM_ACTION.USER_MERGE_SEQ + "  fetch merge userlist " + r.userSeq + " userSeqList " + e.join(",") + " wait " + t), t > 0 ? (r.userQueryTimer && clearTimeout(r.userQueryTimer), r.userQueryTimer = setTimeout((function () {
                                r.fetchUserList()
                            }), t)) : r.fetchUserList()
                        }
                    }), this.userListMergeInterval)), this.userSeqMergeMap[e] = t, this.logger.warn(a.ZEGO_RTM_ACTION.USER_MERGE_SEQ + "  merge userlist " + this.userSeq + " server " + e + " userlist " + t.length)
                }, e.prototype.mergeUser = function (e) {
                    var t = this;
                    this.logger.info(a.ZEGO_RTM_ACTION.USER_MERGE + " merge userlist " + this.userSeq + " userSeqList " + e.join(",")), this.userSeq = e[e.length - 1];
                    var r = {};
                    e.forEach((function (e) {
                        t.userSeqMergeMap && t.userSeqMergeMap[e].forEach((function (e) {
                            r[e.IdName] = e
                        }))
                    })), this.userSeqMergeMap = null;
                    var o = Object.values(r).map((function (e) {
                        return {
                            action: e.Action,
                            idName: e.IdName,
                            nickName: e.NickName,
                            role: e.Role,
                            loginTime: e.LoginTime ? String(e.LoginTime) : ""
                        }
                    }));
                    o.sort((function (e, t) {
                        return e.loginTime.localeCompare(t.loginTime)
                    }));
                    var i = [], s = [];
                    o.forEach((function (e) {
                        1 == e.action ? i.push({
                            userID: e.idName,
                            userName: e.nickName
                        }) : 2 == e.action && s.push({userID: e.idName, userName: e.nickName})
                    })), this.userList = this.userList && this.userList.concat(i).filter((function (e) {
                        return !s.some((function (t) {
                            return t.userID == e.userID
                        }))
                    })), 0 !== i.length && this.onUserStateUpdate(this.stateCenter.roomid, "ADD", i), 0 !== s.length && this.onUserStateUpdate(this.stateCenter.roomid, "DELETE", s)
                }, e
            }();
            t.UserHandler = c
        }])
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoPreview = void 0;
        var o = r(0), i = r(1), s = function () {
            function e(e) {
                var t = this;
                this.localStream = null, this.videoInfo = {}, this.previewSuc = !1, this.micTrack = null, this.enableMicrophone = function (e, r) {
                    if (!t.localStream) return t.logger.error("zp.em.2 no localStream"), !1;
                    for (var i in t.localStream.getAudioTracks().forEach((function (t) {
                        t.enabled = e
                    })), t.micTrack && (t.micTrack.enabled = e), r.publisherList) {
                        var s = r.publisherList[i].publisher;
                        s.localStream == t.localStream && s.signal.sendStreamStatus(o.getSeq(), s.sessionId, t.localStream.getVideoTracks()[0] && !0 === t.localStream.getVideoTracks()[0].enabled ? 0 : 2, e ? 0 : 2, s.streamId)
                    }
                    return t.logger.debug("zp.em.2 call success"), !0
                }, this.enableCamera = function (e, r) {
                    if (!t.localStream) return t.logger.error("zp.ec.2 no localStream"), !1;
                    for (var i in t.localStream.getVideoTracks().forEach((function (t) {
                        t.enabled = e
                    })), r.publisherList) {
                        var s = r.publisherList[i].publisher;
                        s.localStream == t.localStream && s.signal.sendStreamStatus(o.getSeq(), s.sessionId, e ? 0 : 2, t.localStream.getAudioTracks()[0] && 1 == t.localStream.getAudioTracks()[0].enabled ? 0 : 2, s.streamId)
                    }
                    return t.logger.debug("zp.ec.2 call success"), !0
                }, this.logger = e
            }

            return e.prototype.getMediaStreamConstraints = function (e, t) {
                var r = {audio: null, video: null};
                if (r.audio = !0, r.video = {
                    width: 640,
                    height: 480,
                    frameRate: 15,
                    bitRate: 800
                }, e.audio ? void 0 === e.audioInput && void 0 === e.ANS && void 0 === e.AGC && void 0 === e.AEC && void 0 === e.channelCount ? (r.audio = {}, r.audio.noiseSuppression = !0, r.audio.autoGainControl = !0, r.audio.echoCancellation = !0, r.audio.channelCount = 1) : (r.audio = {}, void 0 !== e.audioInput && null !== e.audioInput && (r.audio.deviceId = e.audioInput), void 0 !== e.ANS && (r.audio.noiseSuppression = e.ANS), void 0 !== e.AGC && (r.audio.autoGainControl = e.AGC), void 0 !== e.AEC && (r.audio.echoCancellation = e.AEC), void 0 !== e.channelCount && (r.audio.channelCount = e.channelCount)) : !1 === e.audio && (r.audio = !1), e.video) {
                    var i = 640, s = 480, n = 15, a = 800;
                    if (1 === e.videoQuality ? (i = o.ENUM_RESOLUTION_TYPE.LOW.width, s = o.ENUM_RESOLUTION_TYPE.LOW.height, n = o.ENUM_RESOLUTION_TYPE.LOW.frameRate, a = o.ENUM_RESOLUTION_TYPE.LOW.bitRate) : 2 === e.videoQuality ? (i = o.ENUM_RESOLUTION_TYPE.MEDIUM.width, s = o.ENUM_RESOLUTION_TYPE.MEDIUM.height, n = o.ENUM_RESOLUTION_TYPE.MEDIUM.frameRate, a = o.ENUM_RESOLUTION_TYPE.MEDIUM.bitRate) : 3 === e.videoQuality ? (i = o.ENUM_RESOLUTION_TYPE.HIGH.width, s = o.ENUM_RESOLUTION_TYPE.HIGH.height, n = o.ENUM_RESOLUTION_TYPE.HIGH.frameRate, a = o.ENUM_RESOLUTION_TYPE.HIGH.bitRate) : 4 === e.videoQuality ? (i = e.width, s = e.height, n = e.frameRate, a = e.bitRate || 800) : this.logger.info("zp.gmsc.2 use default"), t && (e.width && (i = e.width), e.height && (s = e.height), e.frameRate && (n = e.frameRate), e.bitRate && (a = e.bitRate)), !1 === e.horizontal) {
                        var d = s;
                        s = i, i = d
                    }
                    r.video = {
                        width: i,
                        height: s,
                        frameRate: n,
                        bitRate: a
                    }, null != e.facingMode ? r.video.facingMode = e.facingMode : null != e.videoInput && null != e.videoInput && (r.video.deviceId = {exact: e.videoInput}), this.logger.info("zp.gmsc.2 width: " + i + " height: " + s + " rate: " + n)
                } else !1 === e.video && (r.video = !1);
                return r
            }, e.prototype.startPreview = function (e, t, r) {
                var o = this;
                if (this.logger.debug("zp.sv.2 called"), this.mediaStreamConfig = e, void 0 !== navigator.mediaDevices && null != navigator.mediaDevices.getUserMedia) {
                    if (e.source instanceof MediaStream) {
                        var s = e.source.getVideoTracks(),
                            n = s.length > 0 ? s[0].getSettings() : {width: 0, height: 0, frameRate: 0};
                        return this.logger.debug("zp.sv.2 use external media stream"), this.previewSuc = !0, this.localStream = e.source, e.source.getAudioTracks().length > 0 && (this.micTrack = e.source.getAudioTracks()[0]), this.videoInfo = {
                            width: n.width,
                            height: n.height,
                            frameRate: n.frameRate,
                            bitRate: e.bitRate || 0,
                            channelCount: e.channelCount || (this.micTrack && this.micTrack.getSettings ? this.micTrack.getSettings().channelCount : 1),
                            audioBitrate: 1e3 * e.audioBitrate || 48e3
                        }, void (t && t(this.localStream))
                    }
                    if (e.source instanceof HTMLMediaElement) {
                        var a = this.captureStream(e.source, e);
                        a ? (this.videoInfo.bitRate = e.bitRate || 0, this.previewSuc = !0, a.getAudioTracks().length > 0 && (this.micTrack = a.getAudioTracks()[0]), t && t(a)) : r && r(i.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kBrowserNotSupportError)
                    } else {
                        var d = this.getMediaStreamConstraints(e);
                        this.videoInfo = d.video, this.videoInfo && (this.videoInfo.audioBitrate = 1e3 * e.audioBitrate || 48e3), this.mediaStreamConfig.video = !!d.video, this.mediaStreamConfig.audio = !!d.audio, this.logger.info("zp.sv.2 ", JSON.stringify(d)), navigator.mediaDevices.getUserMedia(d).then((function (r) {
                            o.logger.info("zp.sv.2 success"), o.localStream = r, o.previewSuc = !0, r.getAudioTracks().length > 0 && (o.micTrack = r.getAudioTracks()[0]), o.videoInfo && (o.videoInfo.channelCount = e.channelCount || (o.micTrack && o.micTrack.getSettings ? o.micTrack.getSettings().channelCount : 1)), t && t(r)
                        }), (function (e) {
                            o.logger.info("zp.sv.2 failed ", e.name, " ", e.message), r && r(e)
                        }))
                    }
                } else r && r(i.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kBrowserNotSupportError)
            }, e.prototype.captureStream = function (e, t) {
                if (!e) return this.logger.info("zp.cs.2 no local video"), null;
                var r;
                if (e.captureStream) r = e.captureStream(), this.logger.debug("zp.cs.2 captureStream"); else {
                    if (!e.mozCaptureStream) return this.logger.info("zp.cs.2 don't support"), null;
                    r = e.mozCaptureStream(), this.logger.debug("zp.cs.2 mozCaptureStream")
                }
                return 0 == r.getTracks().length ? (this.logger.error("zp.cs.2 external capture tracks no found"), null) : (this.localStream = r, this.videoInfo = {
                    width: e.videoWidth,
                    height: e.videoHeight,
                    frameRate: 0,
                    bitRate: 0,
                    channelCount: t.channelCount || (this.micTrack && this.micTrack.getSettings ? this.micTrack.getSettings().channelCount : 1),
                    audioBitrate: 1e3 * t.audioBitrate || 48e3
                }, this.logger.debug("zp.cs.2 called success"), this.localStream)
            }, e.prototype.stopPreview = function () {
                if (this.logger.info("zp.sv.2.1 called"), this.localStream) {
                    var e = this.localStream.getTracks();
                    e.reverse(), e.forEach((function (e) {
                        e.stop()
                    })), this.micTrack && this.micTrack.stop(), this.localStream = null, this.videoInfo = {}
                }
            }, e
        }();
        t.ZegoPreview = s
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var o = Array(e), i = 0;
            for (t = 0; t < r; t++) for (var s = arguments[t], n = 0, a = s.length; n < a; n++, i++) o[i] = s[n];
            return o
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.SdpUtil = void 0;
        var i = function () {
            function e() {
            }

            return e.zegoSdp = function (e) {
                var t = e.split("\r\n"), r = [], i = [];
                t.forEach((function (e) {
                    var t = e.match(/a=rtpmap:(\d+)\s+((H264\/90000)|(opus\/48000\/2))/);
                    t && t[1] && t[2] && ("H264/90000" === t[2] && r.push(t[1]), "opus/48000/2" === t[2] && i.push(t[1]))
                }));
                var s = [];
                return t.map((function (e) {
                    var t = !0, n = e.match(/((a=rtcp-fb:)|(a=rtpmap:)|(a=fmtp:))(\d+)/);
                    if (n && n[5] && (o(r, i).some((function (e) {
                        return e == n[5]
                    })) || (t = !1)), e.indexOf("m=video") > -1) {
                        var a = e.split(" ");
                        e = o([a[0], a[1], a[2]], r).join(" ")
                    } else if (e.indexOf("m=audio") > -1) {
                        a = e.split(" ");
                        e = o([a[0], a[1], a[2]], i).join(" ")
                    }
                    t && s.push(e)
                })), s.join("\r\n")
            }, e.getSDPByVideDecodeType = function (e, t) {
                var r = {str: "", arr: [], obj: {H264: [], H265: [], VP8: [], VP9: [], OHTER: []}};
                if (!e.includes("m=video")) return e;
                var i = /m=video.+/.exec(e)[0];
                i = i.match(/[\s|\d]+/g)[1].replace(" ", ""), r.str = i, r.arr = r.str.split(" "), r.arr.forEach((function (t) {
                    var o = new RegExp("a=rtpmap:" + t + ".+").exec(e)[0];
                    o.includes("H264") ? r.obj.H264.push(t) : o.includes("H265") ? r.obj.H265.push(t) : o.includes("VP8") ? r.obj.VP8.push(t) : o.includes("VP9") ? r.obj.VP9.push(t) : r.obj.OHTER.push(t)
                })), r.obj.OHTER.forEach((function (t) {
                    var o = new RegExp("a=fmtp:" + t + ".+apt=(\\d+)").exec(e), i = o && o[1];
                    i && (r.obj.H264.includes(i) ? r.obj.H264.push(t) : r.obj.H265.includes(i) ? r.obj.H265.push(t) : r.obj.VP8.includes(i) ? r.obj.VP8.push(t) : r.obj.VP9.includes(i) && r.obj.VP9.push(t))
                }));
                var s = [];
                return "VP9" === t ? s = o(r.obj.H265, r.obj.H264, r.obj.VP8) : "VP8" === t ? s = o(r.obj.H265, r.obj.H264, r.obj.VP9) : "H264" === t ? s = o(r.obj.H265, r.obj.VP8, r.obj.VP9) : "H265" === t && (s = o(r.obj.VP8, r.obj.H264, r.obj.VP9)), s.forEach((function (t) {
                    var o = r.arr.indexOf(t);
                    r.arr.splice(o, 1);
                    var i = new RegExp("a=rtpmap:" + t + ".+\\s\\n", "g"),
                        s = new RegExp("a=rtcp-fb:" + t + ".+\\s\\n", "g"),
                        n = new RegExp("a=fmtp:" + t + ".+\\s\\n", "g");
                    e = (e = (e = e.replace(i, "")).replace(s, "")).replace(n, "")
                })), e = e.replace(i, r.arr.join(" "))
            }, e
        }();
        t.SdpUtil = i
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.RetryHandler = void 0;
        var o = function () {
            function e() {
                this.RETRY_MAX_TIME = 300, this.RETRY_START_TIME_INTERVAL = 4, this.RETRY_CONTINUE_COUNT = 2, this.RETRY_MAX_TIME_INTERVAL = 32, this.retryStartTime = 0, this.retryActiveCount = 1, this.isOverTime = !1
            }

            return e.prototype.init = function (e, t, r, o) {
                this.invalid(), this.stopMaxTime(), this.isOverTime = !1, "number" == typeof e && e < 3600 && (this.RETRY_MAX_TIME = e), "number" == typeof t && (this.RETRY_START_TIME_INTERVAL = t), "number" == typeof r && (this.RETRY_CONTINUE_COUNT = r), "number" == typeof o && (this.RETRY_MAX_TIME_INTERVAL = o)
            }, e.prototype.invalid = function () {
                this.retryTimer && clearTimeout(this.retryTimer), this.retryTimer = null, this.retryStartTime = 0, this.retryActiveCount = 1
            }, e
        }();
        t.RetryHandler = o
    }, function (e, t, r) {
        "use strict";
        var o, i = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressEngine = void 0;
        var s = r(5), n = r(6), a = function (e) {
            function t(t, r) {
                var o = this;
                return n.ZegoExpressWebRTMEngine.version = "2.1.0", (o = e.call(this, t, r) || this).zegoWebRTC = new s.ZegoWebRTC(o.logger, o.dataReport, o.zegoWebRTM), o
            }

            return i(t, e), t.prototype.addPublishCdnUrl = function (e, t) {
                return 3 === arguments.length ? this.zegoWebRTC.addPublishCdnUrl(arguments[0], arguments[2]) : this.zegoWebRTC.addPublishCdnUrl(e, t)
            }, t.prototype.checkSystemRequirements = function () {
                return this.zegoWebRTC.checkSystemRequirements()
            }, t.prototype.createStream = function (e) {
                return this.zegoWebRTC.createStream(e)
            }, t.prototype.destroyStream = function (e) {
                return this.zegoWebRTC.destroyStream(e)
            }, t.prototype.enumDevices = function () {
                return this.zegoWebRTC.enumDevices()
            }, t.prototype.getVersion = function () {
                return this.zegoWebRTC.getVersion()
            }, t.prototype.mutePlayStreamAudio = function (e, t) {
                return this.zegoWebRTC.mutePlayStreamAudio(e, t)
            }, t.prototype.mutePlayStreamVideo = function (e, t) {
                return this.zegoWebRTC.mutePlayStreamVideo(e, t)
            }, t.prototype.mutePublishStreamAudio = function (e, t) {
                return this.zegoWebRTC.mutePublishStreamAudio(e, t)
            }, t.prototype.mutePublishStreamVideo = function (e, t) {
                return this.zegoWebRTC.mutePublishStreamVideo(e, t)
            }, t.prototype.off = function (e, t) {
                return this.zegoWebRTM.stateCenter.listenerList[e] ? this.zegoWebRTM.off(e, t) : !!this.zegoWebRTC.stateCenter.listenerList[e] && this.zegoWebRTC.off(e, t)
            }, t.prototype.on = function (e, t) {
                return this.zegoWebRTM.stateCenter.listenerList[e] ? this.zegoWebRTM.on(e, t) : !!this.zegoWebRTC.stateCenter.listenerList[e] && this.zegoWebRTC.on(e, t)
            }, t.prototype.removePublishCdnUrl = function (e, t) {
                return 3 === arguments.length ? this.zegoWebRTC.removePublishCdnUrl(arguments[0], arguments[2]) : this.zegoWebRTC.removePublishCdnUrl(e, t)
            }, t.prototype.replaceTrack = function (e, t) {
                return this.zegoWebRTC.replaceTrack(e, t)
            }, t.prototype.setAudioConfig = function (e, t) {
                return this.zegoWebRTC.setAudioConfig(e, t)
            }, t.prototype.setMixerTaskConfig = function (e) {
                return this.zegoWebRTC.setMixerTaskConfig(e)
            }, t.prototype.setMixingAudioVolume = function (e, t, r) {
                return this.zegoWebRTC.setMixingAudioVolume(e, t, r)
            }, t.prototype.setSoundLevelDelegate = function (e, t) {
                return this.zegoWebRTC.setSoundLevelDelegate(e, t)
            }, t.prototype.setStreamExtraInfo = function (e, t) {
                return this.zegoWebRTC.setStreamExtraInfo(e, t)
            }, t.prototype.setVideoConfig = function (e, t) {
                return this.zegoWebRTC.setVideoConfig(e, t)
            }, t.prototype.startMixerTask = function (e) {
                return this.zegoWebRTC.startMixerTask(e)
            }, t.prototype.startMixingAudio = function (e, t) {
                return this.zegoWebRTC.startMixingAudio(e, t)
            }, t.prototype.startPlayingStream = function (e, t) {
                return this.zegoWebRTC.startPlayingStream(e, t)
            }, t.prototype.startPublishingStream = function (e, t, r) {
                return this.zegoWebRTC.startPublishingStream(e, t, r)
            }, t.prototype.stopMixerTask = function (e) {
                return this.zegoWebRTC.stopMixerTask(e)
            }, t.prototype.stopMixingAudio = function (e, t) {
                return this.zegoWebRTC.stopMixingAudio(e, t)
            }, t.prototype.stopPlayingStream = function (e) {
                return this.zegoWebRTC.stopPlayingStream(e)
            }, t.prototype.stopPublishingStream = function (e) {
                return this.zegoWebRTC.stopPublishingStream(e)
            }, t.prototype.useAudioDevice = function (e, t) {
                return this.zegoWebRTC.useAudioDevice(e, t)
            }, t.prototype.useVideoDevice = function (e, t) {
                return this.zegoWebRTC.useVideoDevice(e, t)
            }, t
        }(n.ZegoExpressWebRTMEngine);
        t.ZegoExpressEngine = a
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.StateCenter = void 0;
        var o = r(3), i = r(0), s = function () {
            function e(e) {
                this.debug = !1, this.testEnvironment = !1, this.pullLimited = !0, this.configOK = !1, this.relateService = [], this.role = 2, this.maxMemberCount = 0, this.roomCreateFlag = 1, this.callbackList = {}, this.streamQuerying = !1, this.streamSeq = 0, this.streamList = [], this.publishStreamList = {}, this.isResetRoom = !1, this.streamUrlMap = {}, this.cmdCallback = {}, this.customUrl = [], this.customPlayUrl = [], this.turnOverTcpOnly = !1, this.customSetTcpOrUdp = !1, this.supportUdp = !1, this.audioEffectBuffer = {}, this.audioBitRate = 48e3, this.cdnSeq = 0, this.listenerList = {
                    roomStreamUpdate: [],
                    streamExtraInfoUpdate: [],
                    playerStateUpdate: [],
                    publisherStateUpdate: [],
                    screenSharingEnded: [],
                    publishQualityUpdate: [],
                    playQualityUpdate: [],
                    remoteCameraStatusUpdate: [],
                    remoteMicStatusUpdate: [],
                    soundLevelUpdate: [],
                    videoDeviceStateChanged: [],
                    audioDeviceStateChanged: [],
                    deviceError: []
                }, this.reportList = {}, this.reportSeqList = {
                    startPublish: {},
                    rePublish: {},
                    startPlay: {},
                    rePlay: {},
                    stopPublish: {},
                    stopPlay: {}
                }, this.streamTrigger = {}, this.mixStreamAdvance = {}, this.audioStreamList = {}, this.deviceInfos = null, this.deviceChangeTimer = null, this.deviceStateOut = !1, this.networkState = i.ENUM_NETWORK_STATE.offline, this.streamRetryTime = 300, this.anchor_info = {
                    anchor_id: "",
                    anchor_id_name: "",
                    anchor_nick_name: ""
                }, this.streamInfoList = {}, this.clientIP = "", this.logger = e
            }

            return e.prototype.getRequestId = function () {
                return this.idName + "-" + i.getSeq()
            }, e.prototype.getSignalCmdContent = function (e, t, r) {
                var o = {
                    request_id: e,
                    room_id: this.roomid,
                    from_userid: this.idName,
                    from_username: this.nickName,
                    to_userid: t
                };
                return null != r && (o.result = r), JSON.stringify(o)
            }, e.prototype.actionListener = function (e) {
                for (var t = this, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                this.listenerList[e] && this.listenerList[e].forEach((function (i) {
                    try {
                        setTimeout((function () {
                            i.apply(void 0, r)
                        }), 0)
                    } catch (r) {
                        t.logger.error(o.ZEGO_WEBRTC_ACTION.STATECENTER_ACTION_LISTENER + " " + e + " " + r)
                    }
                }))
            }, e
        }();
        t.StateCenter = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.MediaUtil = void 0;
        var o = r(2), i = function () {
            function e(e, t) {
                var r = this, o = t.type, i = t.channels, s = void 0 === i ? 1 : i, n = t.bufferSize,
                    a = void 0 === n ? 0 : n, d = t.sampleBit, c = void 0 === d ? 16 : d, l = t.sampleRate,
                    u = void 0 === l ? 44100 : l;
                this.instant = 0, this.slow = 0, this.clip = 0, this.context = e, this.type = o, this.channels = s, this.bufferSize = a, this.sampleBit = c, this.sampleRate = u, this.script = e.createScriptProcessor(a, s, s);
                (new Date).getTime();
                this.script.addEventListener("audioprocess", (function (e) {
                    var t, i = e.inputBuffer.getChannelData(0), s = 0, n = 0;
                    for (t = 0; t < i.length; ++t) s += i[t] * i[t], Math.abs(i[t]) > .99 && (n += 1);
                    if (r.instant = Math.sqrt(s / i.length), r.slow = .95 * r.slow + .05 * r.instant, r.clip = n / i.length, "pcm" === o || "wav" === o) {
                        for (var a = [], d = 0; d < r.channels; d++) a.push(e.inputBuffer.getChannelData(d));
                        r.recorderBuffer(a)
                    }
                })), "pcm" !== o && "wav" !== o || this.initRecorderBuffer(o)
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
                this.worker = o.ClientUtil.inlineWorker((function () {
                    var e, r, o, i, s, n, a = [], d = t;

                    function c(e, t, r) {
                        for (var o = 0; o < r.length; o++, t += 2) {
                            var i = Math.max(-1, Math.min(1, r[o]));
                            e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, !0)
                        }
                    }

                    function l(e, t, r) {
                        for (var o = 0; o < r.length; o++, t++) {
                            var i = Math.max(-1, Math.min(1, r[o])), s = i < 0 ? 128 * i : 127 * i;
                            s += 128, e.setInt8(t, s)
                        }
                    }

                    function u(e, t, r) {
                        for (var o = 0; o < r.length; o++) e.setUint8(t + o, r.charCodeAt(o))
                    }

                    function g(e, t) {
                        for (var r = new Float32Array(t.length / e), o = 0, i = 0; o < r.length;) r[o] = t[i], i += e, o++;
                        return r
                    }

                    function p(e, t, r) {
                        for (var o = new Float32Array(t * e.length), i = 0, s = 0; s < r[0].length; s++) o.set(r[0][s], i), i += r[0][s].length;
                        return o
                    }

                    function h(e, t) {
                        for (var r = new Float32Array(e.length + t.length), o = 0; o < e.length + t.length; o += 2) r[o] = e[o / 2 >> 0], r[o + 1] = t[o / 2 >> 0];
                        return r
                    }

                    function m(t) {
                        var r, o;
                        if (1 == e) r = p(a[0], s, a), 1 != t && (o = g(t, r)); else if (2 == e) {
                            var i = p(a[0], s, a), n = p(a[1], s, a);
                            1 != t ? o = h(g(t, i), g(t, n)) : r = h(i, n)
                        }
                        return 1 != t ? o : r
                    }

                    function f(e) {
                        var t = function (e, t) {
                            var o;
                            8 == t ? o = e.length : 16 == t && (o = e.length, o *= 2);
                            var i = new ArrayBuffer(o), s = new DataView(i);
                            return 8 == t ? l(s, 0, e) : 16 == r && c(s, 0, e), s
                        }(m(e), r);
                        d.postMessage({command: "exportPcmLive", val: t})
                    }

                    function E(t) {
                        var i = function (t, i) {
                            var s;
                            8 == i ? s = t.length : 16 == r && (s = t.length, s *= 2);
                            var n = new ArrayBuffer(s + 44), a = new DataView(n), d = o, g = r, p = e;
                            return u(a, 0, "RIFF"), a.setUint32(4, 36 + s, !0), u(a, 8, "WAVE"), u(a, 12, "fmt "), a.setUint32(16, 16, !0), a.setUint16(20, 1, !0), a.setUint16(22, p, !0), a.setUint32(24, d, !0), a.setUint32(28, d * p * (g / 8), !0), a.setUint16(32, p * (g / 8), !0), a.setUint16(34, g, !0), u(a, 36, "data"), a.setUint32(40, s, !0), 8 == r ? l(a, 44, t) : 16 == r && c(a, 44, t), a
                        }(m(t), r);
                        d.postMessage({command: "exportWav", val: i})
                    }

                    t.onmessage = function (t) {
                        switch (t.data.command) {
                            case"init":
                                d = t.data.val, e = d.sampleChannel, r = d.sampleBit, o = d.sampleRate, i = d.oldSampleRate, s = d.bufferSize, n = d.type;
                                break;
                            case"record":
                                !function (t) {
                                    for (var r = 0; r < e; r++) a[r] || (a[r] = []), a[r].push(t[r]);
                                    var s = Math.round(i / o);
                                    "pcm" === n ? f(s) : "wav" === n && E(s), a = []
                                }(t.data.val)
                        }
                        var d
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
                for (var o = 0; o < r.length; o++) e.setUint8(t + o, r.charCodeAt(o))
            }, e.prototype.writeBuffer = function (e, t, r) {
                for (var o = 0; o < r.byteLength; o++) e.setUint8(t + o, r[o])
            }, e.prototype.concatenation = function (e) {
                for (var t = 0, r = 0; r < e.length; ++r) t += e[r].buffer.byteLength;
                var o = new Uint8Array(t), i = 0;
                for (r = 0; r < e.length; ++r) o.set(new Uint8Array(e[r].buffer), i), i += e[r].buffer.byteLength;
                return o
            }, e.prototype.encodeWave = function (e) {
                var t = this.concatenation(e), r = t.byteLength, o = new ArrayBuffer(r + 44), i = new DataView(o),
                    s = this.sampleRate, n = this.sampleBit, a = this.channels;
                return this.writeString(i, 0, "RIFF"), i.setUint32(4, 36 + r, !0), this.writeString(i, 8, "WAVE"), this.writeString(i, 12, "fmt "), i.setUint32(16, 16, !0), i.setUint16(20, 1, !0), i.setUint16(22, a, !0), i.setUint32(24, s, !0), i.setUint32(28, s * a * (n / 8), !0), i.setUint16(32, a * (n / 8), !0), i.setUint16(34, n, !0), this.writeString(i, 36, "data"), i.setUint32(40, r, !0), this.writeBuffer(i, 44, t), i
            }, e.prototype.stop = function () {
                this.mic.disconnect(), this.script.disconnect()
            }, e
        }();
        t.MediaUtil = i
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.RTCModules = void 0;
        var o = r(0), i = r(1), s = r(2), n = r(14), a = r(15), d = r(23), c = r(24), l = r(25), u = r(26),
            g = function () {
                function e(e, t, r, o, i) {
                    this.logger = e, this.dataReport = t, this.stateCenter = r, this.rtm = o, this.ac = i, this.mediaEleSources = [], this.streamCenter = new a.ZegoStreamCenterWeb(this.logger, this.stateCenter, this.dataReport, this.rtm, this.ac, this.mediaEleSources), this.streamHandler = new n.StreamHandler(this.logger, this.stateCenter, this.rtm, this.dataReport, this.streamCenter), this.publishModule = new d.PublishModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.streamHandler, this.rtm), this.playModule = new c.PlayModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.rtm), this.advancedModule = new u.AdvancedModule(this.logger, this.dataReport, this.streamCenter), this.audioMixModule = new l.AudioMixModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.ac), this.init()
                }

                return e.prototype.init = function () {
                    this.bindWindowListener(), this.bindRTMListener(), this.bindStreamHandler(), this.bindStreamCenterHandler()
                }, e.prototype.bindWindowListener = function () {
                    var e = this,
                        t = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ? "pagehide" : "unload";
                    window.addEventListener(t, (function () {
                        for (var t in window.event && (window.event.cancelBubble = !0), e.streamCenter.publisherList) e.publishModule.stopPublishingStream(t);
                        for (var t in e.streamCenter.playerList) e.playModule.stopPlayingStream(t)
                    })), window.addEventListener("message", (function (t) {
                        var r = t.data, o = r.type, i = r.streamId, n = r.canRequestAudioTrack;
                        "SS_DIALOG_SUCCESS" === o && e.screenStreamFrom(i, n, s.ClientUtil.actionSuccessCallback("screenShare", e.stateCenter.callbackList)), "SS_DIALOG_CANCEL" === o && s.ClientUtil.actionSuccessCallback("screenShare", e.stateCenter.callbackList)(!1, null, o)
                    })), window.addEventListener("offline", (function (t) {
                        for (var r in e.logger.info("zc.off.0 newtwork is broken"), e.stateCenter.networkState = o.ENUM_NETWORK_STATE.offline, e.streamCenter.publisherList) {
                            (i = e.streamCenter.publisherList[r].retryStreamHandler).startMaxTime(), i.invalid()
                        }
                        for (var r in e.streamCenter.playerList) {
                            var i;
                            (i = e.streamCenter.playerList[r].retryStreamHandler).startMaxTime(), i.invalid()
                        }
                    })), window.addEventListener("online", (function (t) {
                        for (var r in e.logger.info("zc.on.0 network is online"), e.stateCenter.networkState = o.ENUM_NETWORK_STATE.online, e.streamCenter.publisherList) {
                            var s = e.streamCenter.publisherList[r].publisher,
                                n = e.streamCenter.publisherList[r].retryStreamHandler;
                            s.state == o.ENUM_PUBLISH_STATE.stop || s.stateNego !== o.ENUM_PUBLISH_STATE_NEGO.iceConnected ? !n.isOverTime && n.publishStateHandle(o.ENUM_PUBLISH_STATE_UPDATE.error, r, i.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishNetworkBrokenError) : s.state == o.ENUM_PUBLISH_STATE.publishing && n.stopMaxTime()
                        }
                        for (var r in e.streamCenter.playerList) {
                            var a = e.streamCenter.playerList[r].player;
                            n = e.streamCenter.playerList[r].retryStreamHandler;
                            a.state == o.ENUM_PLAY_STATE.stop || a.stateNego !== o.ENUM_PLAY_STATE_NEGO.iceConnected ? !n.isOverTime && n.playStateHandle(o.ENUM_PLAY_STATE_UPDATE.error, r, i.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayNetworkBrokenError) : a.state == o.ENUM_PLAY_STATE.playing && n.stopMaxTime()
                        }
                    })), window.addEventListener("visibilitychange", (function (t) {
                        if (Object.keys(e.streamCenter.publisherList).length > 0 || Object.keys(e.streamCenter.playerList).length > 0) {
                            var r = o.getReportSeq();
                            e.dataReport.newReport(r, i.ZegoRTCLogEvent.kZegoVisibilityChange.event), e.dataReport.uploadReport(r)
                        }
                    }))
                }, e.prototype.bindRTMListener = function () {
                    var e = this;
                    this.rtm._on("roomLoginResponse", (function (t) {
                        e.logger.info("zc.rlr call"), e.stateCenter.appid = e.rtm.getAppID(), e.stateCenter.idName = e.rtm.getUserID(), e.stateCenter.token = e.rtm.getToken(), e.stateCenter.testEnvironment = e.rtm.isTestEnvironment(), e.streamCenter.setSessionInfo(e.stateCenter.appid, e.stateCenter.idName, e.stateCenter.token, e.stateCenter.testEnvironment), e.streamHandler.handleStreamStart(t), e.logger.info("zc.rlr end")
                    })), this.rtm._on("HBResponse", (function (t) {
                        e.streamHandler.fetchStreamList(t)
                    })), this.rtm._on("_roomStateUpdate", (function (t, r, o, i) {
                        "DISCONNECTED" == r ? (e.logger.info(o + " "), e.stateCenter.isResetRoom = !0, e.stateCenter.streamList = [], e.streamCenter.reset()) : e.logger.info("zc.rsu " + t + " state")
                    }))
                }, e.prototype.bindStreamCenterHandler = function () {
                    var e = this;
                    this.streamCenter.onPlayStateUpdate = function (t, r, i) {
                        var n = e.stateCenter.reportSeqList.startPlay[r], a = e.streamCenter.playerList[r];
                        if (1 == t && a && s.ClientUtil.isReDispatch(i)) {
                            var d = a.player, c = a.retryDispatchHandler, l = a.playOption;
                            return d.resetPlay(), 0 != d.sessionId && d.signal && d.shouldSendCloseSession() && (d.signal.sendCloseSession(o.getSeq(), d.sessionId, 1), d.signal.removeSession(d.sessionId), d.closeSessionSignal = !0), c.stopMaxTime(), c.invalid(), c.initStream(r, l, !1), void (e.rtm.isLogin() ? (c.startMaxTime(), c.active(0)) : e.streamCenter.playerList[r].isReDispatch = !0)
                        }
                        a && a.player && (0 == t || 1 == t) && n && (e.dataReport.eventEndWithMsgInfo(n, "PlayState", {type: t}), 1 == t && i && e.dataReport.addMsgInfo(n, i), e.dataReport.uploadReport(n), delete e.stateCenter.reportSeqList.startPlay[r]), 1 === t && e.streamCenter.playErrorCallBackList[r] && (e.streamCenter.playErrorCallBackList[r]({
                            errorCode: i && i.code,
                            extendedData: i && i.message
                        }), delete e.streamCenter.playErrorCallBackList[r], e.logger.info("zc.opsu.1 stop play called by sdk"), e.playModule.stopPlayingStream(r)), e.stateCenter.actionListener("playerStateUpdate", {
                            state: s.ClientUtil.getPlayerStateType(t),
                            streamID: r,
                            errorCode: i && i.code,
                            extendedData: i && i.message
                        })
                    }, this.streamCenter.onPublishStateUpdate = function (t, r, o) {
                        e.onPublishStateUpdateHandle(t, r, o)
                    }, this.streamCenter.onPublishQualityUpdate = function (t, r) {
                        e.stateCenter.actionListener("publishQualityUpdate", t, r)
                    }, this.streamCenter.onPlayQualityUpdate = function (t, r) {
                        e.stateCenter.actionListener("playQualityUpdate", t, r)
                    }, this.streamCenter.onRemoteCameraStatusUpdate = function (t, r) {
                        var s = o.getReportSeq();
                        e.dataReport.newReport(s, i.ZegoRTCLogEvent.kZegoTaskRemoteCameraUpdate.event), e.dataReport.addMsgInfo(s, {
                            stream: i.ZegoRTCLogEvent.kZegoTaskRemoteCameraUpdate.stream(t),
                            status: i.ZegoRTCLogEvent.kZegoTaskRemoteCameraUpdate.status(r)
                        }), e.dataReport.uploadReport(s), e.stateCenter.actionListener("remoteCameraStatusUpdate", t, r)
                    }, this.streamCenter.onRemoteMicStatusUpdate = function (t, r) {
                        var s = o.getReportSeq();
                        e.dataReport.newReport(s, i.ZegoRTCLogEvent.kZegoTaskRemoteMicUpdate.event), e.dataReport.addMsgInfo(s, {
                            stream: i.ZegoRTCLogEvent.kZegoTaskRemoteMicUpdate.stream(t),
                            status: i.ZegoRTCLogEvent.kZegoTaskRemoteMicUpdate.status(r)
                        }), e.dataReport.uploadReport(s), e.stateCenter.actionListener("remoteMicStatusUpdate", t, r)
                    }, this.streamCenter.onSoundLevelUpdate = function (t) {
                        e.stateCenter.actionListener("soundLevelUpdate", t)
                    }
                }, e.prototype.bindStreamHandler = function () {
                    var e = this;
                    this.streamHandler.onStreamUpdated = function (t, r, n) {
                        var a = n.map((function (e) {
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
                        })), d = {};
                        if (0 === r) {
                            var c = n.map((function (e) {
                                return {
                                    stream_id: e.streamID,
                                    code: o.STREAM_DELETE_REASON[e.closeType] && o.STREAM_DELETE_REASON[e.closeType].code || 0,
                                    description: o.STREAM_DELETE_REASON[e.closeType] && o.STREAM_DELETE_REASON[e.closeType].description || "unknown"
                                }
                            }));
                            d.stream_delete_reason = c
                        }
                        var l = o.getReportSeq();
                        if (e.dataReport.newReport(l, i.ZegoRTCLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.event), e.dataReport.addMsgInfo(l, {
                            stream_update_type: i.ZegoRTCLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.stream_update_type(1 === r ? "added" : "deleted"),
                            update_stream: i.ZegoRTCLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.update_stream(a)
                        }), e.dataReport.uploadReport(l), e.stateCenter.actionListener("roomStreamUpdate", t, s.ClientUtil.getSteamUpdateType(r), a, Object.keys(d).length > 0 ? JSON.stringify(d) : ""), 1 === r) {
                            var u = [];
                            a.forEach((function (e) {
                                e.extraInfo && u.push({streamID: e.streamID, user: e.user, extraInfo: e.extraInfo})
                            })), u.length > 0 && e.stateCenter.actionListener("streamExtraInfoUpdate", t, u)
                        }
                    }, this.streamHandler.onPublishStateUpdate = function (t, r, o) {
                        e.logger.info("zb.opsu ", r);
                        var i = e.stateCenter.reportSeqList.startPublish[r], n = e.streamCenter.publisherList[r];
                        n && n.publisher && (0 == t || 1 == t) && i && (e.dataReport.eventEndWithMsgInfo(i, "PublishState", {type: t}), 1 == t && e.dataReport.addMsgInfo(i, o), e.dataReport.uploadReport(i), delete e.stateCenter.reportSeqList.startPublish[r]), e.stateCenter.actionListener("publisherStateUpdate", {
                            state: s.ClientUtil.getPublisherStateType(t),
                            streamID: r,
                            errorCode: o.code,
                            extendedData: o.message
                        })
                    }, this.streamHandler.onStreamExtraInfoUpdated = function (t, r) {
                        var s = r.map((function (e) {
                            return {streamID: e.streamID, user: e.user, extraInfo: e.extraInfo}
                        })), n = o.getReportSeq();
                        e.dataReport.newReport(n, i.ZegoRTCLogEvent.kZegoTaskLiveRoomGetStreamExtraInfo.event), e.dataReport.addMsgInfo(n, {update_stream: i.ZegoRTCLogEvent.kZegoTaskLiveRoomGetStreamExtraInfo.update_stream(s)}), e.dataReport.uploadReport(n), e.stateCenter.actionListener("streamExtraInfoUpdate", t, s)
                    }
                }, e.prototype.screenStreamFrom = function (e, t, r) {
                    var o = {};
                    o.audio = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e
                        }
                    }, o.video = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e,
                            maxWidth: window.screen.width,
                            maxHeight: window.screen.height
                        }
                    }, !t && (o.audio = !1), navigator.mediaDevices.getUserMedia(o).then((function (e) {
                        r(!0, e)
                    })).catch((function (e) {
                        r(!1, null, e)
                    }))
                }, e.prototype.onPublishStateUpdateHandle = function (e, t, r) {
                    if (this.logger.info("zc.opsuh.0 call"), 0 == e) this.stateCenter.publishStreamList[t] && ([o.ENUM_PUBLISH_STREAM_STATE.tryPublish, o.ENUM_PUBLISH_STREAM_STATE.retryPublish].includes(this.stateCenter.publishStreamList[t].state) && !this.stateCenter.streamList.find((function (e) {
                        return e.stream_id == t
                    })) ? (this.stateCenter.publishStreamList[t].state = o.ENUM_PUBLISH_STREAM_STATE.update_info, this.streamHandler.updateStreamInfo(t, o.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[t].extra_info)) : (this.stateCenter.publishStreamList[t].state = o.ENUM_PUBLISH_STREAM_STATE.publishing, this.WebrtcOnPublishStateUpdateHandle(e, t, r))); else {
                        var i = this.streamCenter.publisherList[t];
                        if (1 == e && i && s.ClientUtil.isReDispatch(r)) {
                            var n = i.publisher, a = i.retryDispatchHandler, d = i.publishOption;
                            return n.resetPublish(), 0 != n.sessionId && n.signal && n.shouldSendCloseSession() && (n.signal.sendCloseSession(o.getSeq(), n.sessionId, 1), n.signal.removeSession(n.sessionId), n.closeSessionSignal = !0), a.stopMaxTime(), a.invalid(), a.initStream(t, d, !0), void (this.rtm.isLogin() ? (a.startMaxTime(), a.active(0)) : this.streamCenter.publisherList[t].isReDispatch = !0)
                        }
                        this.streamHandler.onPublishStateUpdate(e, t, r), 1 == e && (this.logger.info("zc.opsuh.0 stop publish called by sdk"), this.publishModule.stopPublishingStream(t))
                    }
                }, e.prototype.WebrtcOnPublishStateUpdateHandle = function (e, t, r) {
                    this.stateCenter.publishStreamList[t].state == o.ENUM_PUBLISH_STREAM_STATE.publishing && this.streamHandler.onPublishStateUpdate(e, t, r)
                }, e.prototype.bindListener = function (e, t) {
                    return this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error("zc.o.0 listener callBack must be funciton"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error("zc.o.0 event " + e + " no found"), !1)
                }, e.prototype.deleteListener = function (e, t) {
                    if (!this.stateCenter.listenerList[e]) return this.logger.error("zc.o.1 listener no found"), !1;
                    var r = this.stateCenter.listenerList[e];
                    return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                }, e
            }();
        t.RTCModules = g
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.StreamHandler = void 0;
        var o = r(0), i = r(2), s = r(0), n = r(1), a = r(4), d = function () {
            function e(e, t, r, o, i) {
                this.logger = e, this.rtm = r, this.stateCenter = t, this.dataReport = o, this.streamCenter = i
            }

            return e.prototype.setCDNInfo = function (e, t) {
                e.urlFlv = t.urls_flv instanceof Array ? t.urls_flv[0] : "string" == typeof t.urls_flv ? t.urls_flv : "", e.urlHls = t.urls_m3u8 instanceof Array ? t.urls_m3u8[0] : "string" == typeof t.urls_m3u8 ? t.urls_m3u8 : "", e.urlHttpsFlv = t.urls_https_flv instanceof Array ? t.urls_https_flv[0] : "string" == typeof t.urls_https_flv ? t.urls_https_flv : "", e.urlHttpsHls = t.urls_https_m3u8 instanceof Array ? t.urls_https_m3u8[0] : "string" == typeof t.urls_https_m3u8 ? t.urls_https_m3u8 : "", e.urlRtmp = t.urls_rtmp instanceof Array ? t.urls_rtmp[0] : "string" == typeof t.urls_rtmp ? t.urls_rtmp : ""
            }, e.prototype.onStreamUpdated = function (e, t, r) {
            }, e.prototype.onStreamExtraInfoUpdated = function (e, t) {
            }, e.prototype.handleStreamStart = function (e) {
                var t = this;
                this.logger.info("zb.sh.hss call stream update"), this.stateCenter.streamQuerying = !1, this.rtm.modules.service.on("stream", (function (e) {
                    t.handleStreamUpdateRsp(e)
                })), this.rtm.modules.service.on("push_stream_update", (function (e) {
                    t.handlePushStreamUpdateMsg(e)
                })), this.handleFullUpdateStream(e.body.stream_seq, e.body.stream_info || []), this.handleReconnectStream(e.body.stream_info), this.logger.info("zb.sh.hss call end")
            }, e.prototype.onPublishStateUpdate = function (e, t, r) {
            }, e.prototype.updateStreamInfo = function (e, t, r, s) {
                var n = this;
                void 0 === r && (r = ""), this.logger.debug("zb.sh.usi call");
                var d = {stream_id: e, extra_info: r}, c = JSON.stringify(d), l = {sub_cmd: t, stream_msg: c};
                this.stateCenter.streamInfoList[e] = {}, this.stateCenter.streamInfoList[e].seq = this.rtm.modules.service.sendMessage("stream", l, (function (e, t) {
                    n.handleStreamUpdateRsp(e)
                }), (function (d, c) {
                    if (n.stateCenter.isResetRoom || n.rtm.modules.service.isDisConnect() || !d.code || d.code != a.errorCodeList.TIMEOUT.code || n.stateCenter.streamInfoList[e].seq != c) {
                        if (d.body && d.body.err_code) {
                            var l = i.ClientUtil.getServerError(d.body.err_code);
                            s && s(l, c)
                        }
                    } else 2001 == t && n.stateCenter.publishStreamList[e] && n.stateCenter.publishStreamList[e].state == o.ENUM_PUBLISH_STREAM_STATE.update_info || 2002 == t ? setTimeout((function () {
                        n.updateStreamInfo(e, t, r, s)
                    }), 0) : s && s(a.errorCodeList.TIMEOUT)
                })), this.logger.info("zb.sh.usi call success cmd " + t)
            }, e.prototype.handleStreamUpdateRsp = function (e) {
                if (this.rtm.modules.service.isDisConnect()) this.logger.error("zb.sh.hsur not login"); else if (0 == e.body.err_code) {
                    this.logger.info("zb.sh.hsur stream seq " + this.stateCenter.streamSeq + " server seq " + e.body.stream_seq), this.stateCenter.streamSeq = e.body.stream_seq;
                    for (var t = function (t) {
                        var i = e.body.stream_info[t].stream_id;
                        if (!r.stateCenter.publishStreamList[i]) return r.logger.info("hsur.0 stream is not exist"), {value: void 0};
                        r.stateCenter.publishStreamList[i].state == o.ENUM_PUBLISH_STREAM_STATE.update_info && (r.stateCenter.publishStreamList[i].state = o.ENUM_PUBLISH_STREAM_STATE.publishing, r.stateCenter.streamList.find((function (e) {
                            return e.stream_id == i
                        })) || r.stateCenter.streamList.push(e.body.stream_info[t]), r.onPublishStateUpdate(0, i, {
                            code: 0,
                            message: ""
                        })), delete r.stateCenter.streamInfoList[i]
                    }, r = this, i = 0; i < e.body.stream_info.length; i++) {
                        var s = t(i);
                        if ("object" == typeof s) return s.value
                    }
                } else this.logger.error("zb.sh.hsur stream update error " + e.body.err_code)
            }, e.prototype.handleFetchStreamListRsp = function (e) {
                this.logger.info("zb.sh.hfslr call"), this.stateCenter.streamQuerying = !1, 0 === e.body.err_code ? this.stateCenter.streamSeq !== e.body.stream_seq ? (this.handleFullUpdateStream(e.body.stream_seq, e.body.stream_info), this.logger.info("zb.sh.hfslr call success")) : this.logger.info("zb.sh.hfslr same seq") : this.logger.info("zb.sh.hfslr server error=", e.body.err_code)
            }, e.prototype.handleFullUpdateStream = function (e, t) {
                var r = this;
                this.logger.info("zb.sh.hfus call"), this.stateCenter.streamSeq = e, this.logger.debug("zb.sh.hfus server seq " + this.stateCenter.streamSeq), i.ClientUtil.mergeStreamList(this.stateCenter.idName, this.stateCenter.streamList, t, (function (e, t, i) {
                    0 !== e.length && (r.logger.debug("zb.sh.hfus callback addstream"), r.onStreamUpdated(r.stateCenter.roomid, o.ENUM_STREAM_UPDATE_TYPE.added, r.makeCallbackStreamList(e))), 0 !== t.length && (r.logger.debug("zb.sh.hfus callback delstream"), r.onStreamUpdated(r.stateCenter.roomid, o.ENUM_STREAM_UPDATE_TYPE.deleted, r.makeCallbackStreamList(t))), 0 !== i.length && (r.logger.debug("zb.sh.hfus callback updatestream"), r.onStreamExtraInfoUpdated(r.stateCenter.roomid, r.makeCallbackStreamList(i)))
                })), this.logger.info("zb.sh.hfus call success")
            }, e.prototype.handlePushStreamUpdateMsg = function (e) {
                if (this.logger.info("zb.sh.hpsum call"), e.body.stream_info && 0 !== e.body.stream_info.length) {
                    if (e.body.stream_info.length + this.stateCenter.streamSeq !== e.body.stream_seq) return this.logger.info("zb.sh.hpsum call updatestream"), void this.fetchStreamList(e);
                    switch (this.stateCenter.streamSeq = e.body.stream_seq, e.body.stream_cmd) {
                        case o.ENUM_STREAM_UPDATE_CMD.added:
                            this.handleAddedStreamList(e.body.stream_info);
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD.deleted:
                            this.handleDeletedStreamList(e.body.stream_info);
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD.updated:
                            this.handleUpdatedStreamList(e.body.stream_info)
                    }
                    this.logger.info("zb.sh.hpsum call success")
                } else this.logger.info("zb.sh.hpsum, emtpy list")
            }, e.prototype.handleAddedStreamList = function (e) {
                this.logger.debug("zb.sh.hasl call");
                for (var t, r = [], i = 0; i < e.length; i++) if (e[i].anchor_id_name != this.stateCenter.idName) {
                    t = !1;
                    for (var s = 0; s < this.stateCenter.streamList.length; s++) if (e[i].stream_id === this.stateCenter.streamList[s].stream_id) {
                        t = !0;
                        break
                    }
                    t || r.push(e[i])
                } else this.logger.debug("hdsl.0 have self stream added");
                if (0 !== r.length) {
                    this.logger.debug("zb.sh.hasl callback addstream");
                    for (var n = 0; n < r.length; n++) this.stateCenter.streamList.push(r[n]);
                    this.onStreamUpdated(this.stateCenter.roomid, o.ENUM_STREAM_UPDATE_TYPE.added, this.makeCallbackStreamList(r))
                }
                this.logger.info("zb.sh.hasl call success")
            }, e.prototype.handleDeletedStreamList = function (e) {
                this.logger.debug("zb.sh.hdsl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName) {
                    for (var i = this.stateCenter.streamList.length - 1; i >= 0; i--) if (e[r].stream_id === this.stateCenter.streamList[i].stream_id) {
                        this.stateCenter.streamList.splice(i--, 1), t.push(e[r]);
                        break
                    }
                } else this.logger.debug("zb.sh.hdsl have self stream deleted");
                0 !== t.length && (this.logger.debug("zb.sh.hdsl callback delstream"), this.onStreamUpdated(this.stateCenter.roomid, o.ENUM_STREAM_UPDATE_TYPE.deleted, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.hdsl call")
            }, e.prototype.handleUpdatedStreamList = function (e) {
                this.logger.debug("zb.sh.husl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName) {
                    for (var o = 0; o < this.stateCenter.streamList.length; o++) if (e[r].stream_id === this.stateCenter.streamList[o].stream_id) {
                        e[r].extra_info !== this.stateCenter.streamList[o].extra_info && (this.stateCenter.streamList[o] = e[r], t.push(e[r]));
                        break
                    }
                } else this.logger.debug("hsul.0 have self stream updated");
                0 !== t.length && (this.logger.debug("zb.sh.husl callback updatestream"), this.onStreamExtraInfoUpdated(this.stateCenter.roomid, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.husl call success")
            }, e.prototype.fetchStreamList = function (e) {
                if (this.logger.info("zb.sh.fsl call"), e.body.stream_seq !== this.stateCenter.streamSeq) if (this.rtm.modules.service.isDisConnect()) this.logger.info("zb.sh.fsl state error"); else if (this.stateCenter.streamQuerying) this.logger.info("zb.sh.fsl already doing"); else {
                    this.stateCenter.streamQuerying = !0, this.logger.debug("zb.sh.fsl send fetch request");
                    this.rtm.modules.service.sendMessage("stream_info", {reserve: 0}, this.handleFetchStreamListRsp.bind(this), (function (e, t) {
                    })), this.logger.info("zb.sh.fsl call success")
                }
            }, e.prototype.handleReconnectStream = function (e) {
                this.logger.info("zb.sh.hrs call");
                var t = this.streamCenter.publisherList, r = this.streamCenter.playerList, i = function (r) {
                    if (t[r].publisher.state != o.ENUM_PUBLISH_STATE.publishing || e.find((function (e) {
                        return e.stream_id == r
                    }))) {
                        if (t[r].publisher.state == o.ENUM_PUBLISH_STATE.stop && e.find((function (e) {
                            return e.stream_id == r
                        }))) {
                            s.updateStreamInfo(r, o.ENUM_STREAM_SUB_CMD.liveEnd);
                            for (var i = 0; i < s.stateCenter.streamList.length; i++) if (s.stateCenter.streamList[i].stream_id == r) {
                                s.stateCenter.streamList.splice(i--, 1);
                                break
                            }
                        }
                    } else s.updateStreamInfo(r, o.ENUM_STREAM_SUB_CMD.liveBegin, s.stateCenter.publishStreamList[r].extra_info)
                }, s = this;
                for (var n in t) i(n);
                for (var n in t) {
                    if (t[n].isReDispatch) this.logger.info("zb.sh.hrs " + n + "retry dispatch"), (a = t[n].retryDispatchHandler).stopMaxTime(), a.invalid(), a.initStream(n, t[n].publishOption, !0), a.active(0), t[n].isReDispatch = !1
                }
                for (var n in r) {
                    var a;
                    if (r[n].isReDispatch) this.logger.info("zb.sh.hrs " + n + "retry dispatch"), (a = r[n].retryDispatchHandler).stopMaxTime(), a.invalid(), a.initStream(n, r[n].playOption, !1), a.active(0), r[n].isReDispatch = !1
                }
                this.logger.info("zb.sh.hrs end")
            }, e.prototype.makeCallbackStreamList = function (e) {
                var t = [];
                if (e && e.length > 0) for (var r = 0; r < e.length; r++) {
                    var o = {
                        user: {userID: e[r].anchor_id_name, userName: e[r].anchor_nick_name},
                        extraInfo: e[r].extra_info,
                        streamID: e[r].stream_id,
                        roomID: "",
                        urlFlv: "",
                        urlRtmp: "",
                        urlHls: "",
                        urlHttpsFlv: "",
                        urlHttpsHls: "",
                        closeType: e[r].close_type
                    };
                    this.setCDNInfo(o, e[r]), t.push(o)
                }
                return t
            }, e.prototype.updateMixStream = function (e, t, r) {
                var d, c = this;
                if (this.logger.info("zb.sh.ums call"), !e.taskID) return this.logger.error("zb.sh.ums no taskId found"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDNullError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDNullError.message
                }), !1;
                if ("string" != typeof e.taskID) return this.logger.error("zb.rh.lg taskId must be string"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (e.taskID.length > o.MAX_MIX_TASK_ID_LENGTH) return this.logger.error("zb.sh.ums taskId is too long"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDToLongError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDToLongError.message
                }), !1;
                if (!i.ClientUtil.checkIllegalCharacters(e.taskID)) return this.logger.error("zb.sh.ums task ID contains illegal characters"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDInvalidCharacterError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDInvalidCharacterError.message
                }), !1;
                if (!e.inputList || 0 == e.inputList.length) return this.logger.error("zb.sh.ums input list wrong"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInputListNullError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInputListNullError.message
                }), !1;
                e.inputList.forEach((function (e) {
                    "AUDIO" === e.contentType && (!e.layout && (e.layout = {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }), e.layout.top = 0, e.layout.left = 0, e.layout.bottom = 1, e.layout.right = 1)
                }));
                for (var l = e.inputList.every((function (e) {
                    return "AUDIO" === e.contentType
                })), u = 0; u < e.inputList.length; u++) {
                    var g = e.inputList[u];
                    if ("object" != typeof g.layout) return this.logger.error("zb.sh.ums input layout must be object"), r({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                    }), !1;
                    if (!(i.ClientUtil.checkInteger(g.layout.top, !1) && i.ClientUtil.checkInteger(g.layout.bottom, !1) && i.ClientUtil.checkInteger(g.layout.left, !1) && i.ClientUtil.checkInteger(g.layout.right, !1))) return this.logger.error("zb.sh.ums top、left、bottom、right must be integer number"), r({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                    }), !1
                }
                if (!e.outputList || 0 == e.outputList.length) return this.logger.error("zb.sh.ums no output list found"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputListNullError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputListNullError.message
                }), !1;
                if (e.outputList.some((function (e) {
                    return "string" == typeof e && !i.ClientUtil.isUrl(e) && !i.ClientUtil.checkIllegalCharacters(e) || "object" == typeof e && e.target && !i.ClientUtil.isUrl(e.target) && !i.ClientUtil.checkIllegalCharacters(e.target)
                }))) return this.logger.error("zb.sh.ums stream output target is incorrect"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.message
                }), !1;
                if (!(l || e.outputConfig && "object" == typeof e.outputConfig)) return this.logger.error("zb.sh.ums no output config found"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputNoTargetError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputNoTargetError.message
                }), !1;
                if (l && (void 0 === e.outputConfig && (e.outputConfig = {
                    outputBitrate: 0,
                    outputFPS: 0,
                    outputWidth: 0,
                    outputHeight: 0
                }), e.outputConfig.outputBitrate = .001, e.outputConfig.outputFPS = 1, e.outputConfig.outputWidth = 1, e.outputConfig.outputHeight = 1), !(l || e.outputConfig.outputBitrate && i.ClientUtil.checkInteger(e.outputConfig.outputBitrate))) return this.logger.error("zb.sh.ums bitrate param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.outputConfig.outputFPS || !i.ClientUtil.checkInteger(e.outputConfig.outputFPS)) return this.logger.error("zb.sh.ums fps param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.outputConfig.outputWidth || !i.ClientUtil.checkInteger(e.outputConfig.outputWidth)) return this.logger.error("zb.sh.ums width param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.outputConfig.outputHeight || !i.ClientUtil.checkInteger(e.outputConfig.outputHeight)) return this.logger.error("zb.sh.ums height param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (void 0 !== e.outputConfig.outputAudioCodecID && !i.ClientUtil.checkInteger(e.outputConfig.outputAudioCodecID, !1)) return this.logger.error("zb.sh.ums AudioCodecID param must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (void 0 !== e.outputConfig.outputAudioBitrate && !i.ClientUtil.checkInteger(e.outputConfig.outputAudioBitrate)) return this.logger.error("zb.sh.ums AudioBitrate param must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (void 0 !== e.outputConfig.outputAudioChannels && !i.ClientUtil.checkInteger(e.outputConfig.outputAudioChannels, !1)) return this.logger.error("zb.sh.ums AudioChannels param must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                var p = 0;
                e.outputConfig.singleStreamPassThrough && "boolean" == typeof e.outputConfig.singleStreamPassThrough && (p = e.outputConfig.singleStreamPassThrough ? 1 : 0);
                var h = {
                    task_id: e.taskID,
                    id_name: this.stateCenter.idName,
                    live_channel: this.stateCenter.roomid,
                    appid: this.stateCenter.appid,
                    version: o.PROTO_VERSION,
                    bypass: p
                }, m = this.stateCenter.mixStreamAdvance;
                m && (m.videoCodec && (h.extra_params = [{
                    key: "video_encode",
                    value: m.videoCodec
                }]), m.backgroundColor && (h.output_bg_color = m.backgroundColor), m.backgroundImage && (h.output_bg_image = m.backgroundImage), m.waterMark && (h.watermark = m.waterMark), m.extraParams && (!h.extra_params && (h.extra_params = []), (d = h.extra_params).push.apply(d, m.extraParams)));
                var f = [];
                for (u = 0; u < e.inputList.length; u++) {
                    var E = e.inputList[u], _ = E.streamID;
                    this.stateCenter.testEnvironment && (_ = "zegotest-" + this.stateCenter.appid + "-" + E.streamID), f.push({
                        stream_id: _,
                        content_control: "AUDIO" === E.contentType ? 1 : 0,
                        rect: {
                            layer: u,
                            top: E.layout.top,
                            left: E.layout.left,
                            bottom: E.layout.bottom,
                            right: E.layout.right
                        }
                    })
                }
                h.MixInput = f, i.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList)(s.REPORT_ACTION.addMsgInfo, void 0, {
                    mix_stream_id: n.ZegoRTCLogEvent.kZegoTaskMixStart.mix_stream_id(e.taskID),
                    stream_cnt: n.ZegoRTCLogEvent.kZegoTaskMixStart.stream_cnt(f.length),
                    input_stream_list: n.ZegoRTCLogEvent.kZegoTaskMixStart.input_stream_list(f)
                });
                var T = [];
                e.outputList.forEach((function (t) {
                    var o = {}, i = "";
                    if ("string" == typeof t) i = t; else {
                        if ("object" != typeof t || !t.target) return c.logger.error("zb.sh.ums output target required"), r({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.message
                        }), !1;
                        i = t.target
                    }
                    i.startsWith("rtmp://") || i.startsWith("https://") && i.endsWith(".flv") || i.startsWith("https://") && i.endsWith(".m3u8") ? o.mixurl = i : c.stateCenter.testEnvironment ? o.stream_id = "zegotest-" + c.stateCenter.appid + "-" + i : o.stream_id = i, o.bitrate = 1e3 * e.outputConfig.outputBitrate, o.fps = e.outputConfig.outputFPS, o.width = e.outputConfig.outputWidth, o.height = e.outputConfig.outputHeight, e.outputConfig.outputAudioCodecID && (o.audio_enc_id = e.outputConfig.outputAudioCodecID), "vp8" === m.videoCodec ? o.audio_enc_id = 3 : "h264" === m.videoCodec && (o.audio_enc_id = 0), e.outputConfig.outputAudioBitrate && (o.audio_bitrate = 1e3 * e.outputConfig.outputAudioBitrate), e.outputConfig.outputAudioChannels && (o.audio_channel_cnt = e.outputConfig.outputAudioChannels), c.stateCenter.testEnvironment ? o.testenv = 1 : o.testenv = 0, T.push(o)
                })), h.MixOutput = T, i.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList)(s.REPORT_ACTION.addMsgInfo, void 0, {output_target_list: n.ZegoRTCLogEvent.kZegoTaskMixStart.output_target_list(T)});
                var v = {channel: "zeus", cmd: "start_mix", req_body: JSON.stringify(h)};
                return this.logger.debug("zb.sh.ums send command"), this.sendBizChannelRequest(v, (function (e, s, n) {
                    c.logger.debug("zb.sh.ums receive message");
                    var a = "zegotest-" + c.stateCenter.appid + "-";
                    if (0 != n.length) {
                        for (var d = JSON.parse(n), l = [], u = 0; u < d.play.length; u++) {
                            var g = {rtmpURL: "", hlsURL: "", flvURL: ""}, p = d.play[u].stream_alias || "";
                            c.stateCenter.testEnvironment && p && p.startsWith(a) && (p = p.slice(a.length)), g.streamID = p, d.play[u].rtmp_url && d.play[u].rtmp_url.length > 0 && (g.rtmpURL = d.play[u].rtmp_url), d.play[u].hls_url && d.play[u].hls_url.length > 0 && (g.hlsURL = d.play[u].hls_url), d.play[u].hdl_url && d.play[u].hdl_url.length > 0 && (g.flvURL = d.play[u].hdl_url), l.push(g)
                        }
                        if (t) {
                            var h = {mixerOutputList: l};
                            t({errorCode: 0, extendedData: JSON.stringify(h)})
                        }
                    } else r && r({
                        errorCode: i.ClientUtil.getServerError(o.MIXSTREAM_ERROR_CODE + 1).code,
                        extendedData: ""
                    })
                }), (function (e, t, o) {
                    if ("number" == typeof e) {
                        c.logger.debug("zb.sh.ums error: " + e);
                        var s = [];
                        if (1000000150 == e && 0 != o.length) for (var d = JSON.parse(o), l = "zegotest-" + c.stateCenter.appid + "-", u = 0; u < d.non_exist_streams.length; u++) {
                            var g = d.non_exist_streams[u];
                            c.stateCenter.testEnvironment && g.startsWith(l) ? s.push(g.slice(l.length)) : s.push(g)
                        }
                        r && r({errorCode: i.ClientUtil.getServerError(e).code, extendedData: ""})
                    } else {
                        c.logger.debug("zb.sh.ums error code " + e.code);
                        var p = void 0;
                        p = e == a.errorCodeList.TIMEOUT ? n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kRequestError : n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInternalError, r && r({
                            errorCode: p.code,
                            extendedData: ""
                        })
                    }
                })), !0
            }, e.prototype.sendBizChannelRequest = function (e, t, r, o) {
                var i = this;
                void 0 === o && (o = !1), e = Object.assign(e, {is_retry_req: o ? 1 : 0}), this.rtm.modules.service.sendMessage("biz_channel", e, (function (e, r) {
                    t(e.header.seq, e.body.cmd, e.body.rsp_body)
                }), (function (o, s) {
                    var n = o.body.err_code, a = o.message.body.rsp_body;
                    "number" != typeof n || 2002 !== n ? r(n, s, a) : i.sendBizChannelRequest(e, t, r, !0)
                }))
            }, e.prototype.setMixerTaskConfig = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    var a = {}, d = {};
                    if (e && e.videoCodec) {
                        var c = e.videoCodec.toLowerCase();
                        if (-1 == ["vp8", "h264"].indexOf(c)) return t.logger.error("zb.sh.ums param videoCode error"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kVideoConfigInvalidError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kVideoConfigInvalidError.message
                        }), !1;
                        a.videoCodec = c, d.video_codec = c
                    }
                    if (e.backgroundColor) {
                        if (!i.ClientUtil.checkInteger(e.backgroundColor)) return t.logger.error("zb.sh.ums param backgroundColor must be integer number"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.message
                        }), !1;
                        a.backgroundColor = e.backgroundColor, d.background_color = e.backgroundColor
                    }
                    if (e.backgroundImage) {
                        if ("string" != typeof e.backgroundImage) return t.logger.error("zb.sh.ums param outputBgImage error"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.message
                        }), !1;
                        if (!e.backgroundImage.startsWith("preset-id://") || !e.backgroundImage.endsWith(".jpg") && !e.backgroundImage.endsWith(".png")) return t.logger.error("zb.sh.ums illegal input background image URL"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kBackgroundImageUrlInvalidError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kBackgroundImageUrlInvalidError.message
                        }), !1;
                        a.backgroundImage = e.backgroundImage, d.background_image = e.backgroundImage
                    }
                    e.waterMark && (a.waterMark = e.waterMark, d.water_mark = e.waterMark), t.stateCenter.mixStreamAdvance = a, i.ClientUtil.actionSuccessCallback("kZegoTaskMixConfig", t.stateCenter.reportList) && i.ClientUtil.actionSuccessCallback("kZegoTaskMixConfig", t.stateCenter.reportList)(s.REPORT_ACTION.addMsgInfo, void 0, {config: n.ZegoRTCLogEvent.kZegoTaskMixConfig.config(d)}), r({
                        errorCode: 0,
                        extendedData: ""
                    })
                }))
            }, e.prototype.stopMixStream = function (e, t, r) {
                var s = this;
                this.logger.info("zb.sh.sms call");
                var d = {
                    id_name: this.stateCenter.idName,
                    live_channel: this.stateCenter.roomid,
                    appid: this.stateCenter.appid,
                    version: o.PROTO_VERSION,
                    task_id: e
                }, c = {channel: "zeus", cmd: "stop_mix", req_body: JSON.stringify(d)};
                return this.sendBizChannelRequest(c, (function () {
                    t && t({errorCode: 0})
                }), (function (e) {
                    if ("number" == typeof e) r && r({
                        errorCode: i.ClientUtil.getServerError(o.MIXSTREAM_ERROR_CODE + e).code,
                        extendedData: ""
                    }); else {
                        s.logger.error("zb.sh.sms stop mix fail " + JSON.stringify(e));
                        var t = void 0;
                        t = e == a.errorCodeList.TIMEOUT ? n.ZegoRTCLogEvent.kZegoTaskMixStop.error.kRequestError : n.ZegoRTCLogEvent.kZegoTaskMixStop.error.kInternalError, r && r({
                            errorCode: t.code,
                            extendedData: ""
                        })
                    }
                })), !0
            }, e.prototype.updateStreamExtraInfo = function (e, t) {
                return this.logger.info("zb.sh.usei call"), this.stateCenter.publishStreamList[e] && (this.stateCenter.publishStreamList[e].extra_info = t, this.stateCenter.publishStreamList[e].state >= o.ENUM_PUBLISH_STREAM_STATE.update_info && this.updateStreamInfo(e, o.ENUM_STREAM_SUB_CMD.liveUpdate, t)), !0
            }, e.prototype.setStreamExtraInfo = function (e, t) {
                var r = this;
                return new Promise((function (i, s) {
                    var a = o.getReportSeq();
                    if (r.dataReport.newReport(a, n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.event), r.dataReport.addMsgInfo(a, {
                        stream: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.stream(e),
                        stream_extra_info: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.stream_extra_info(t),
                        room_sid: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.room_sid(r.stateCenter.sessionid)
                    }), "string" != typeof e || "" == e) return r.logger.error("zb.ssei streamID must be string and not empty"), r.dataReport.addMsgInfo(a, {
                        error: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.code,
                        message: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.message + " streamID must be string and not empty"
                    }), r.dataReport.uploadReport(a), s({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.message
                    }), !1;
                    if (void 0 === t || "" === t) return r.logger.error("zb.ssei extraInfo is empty"), r.dataReport.addMsgInfo(a, {
                        error: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.code,
                        message: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.message + " extraInfo is empty"
                    }), r.dataReport.uploadReport(a), s({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kExtraInfoNullError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kExtraInfoNullError.message
                    }), !1;
                    if ("string" != typeof t || "" == t) return r.logger.error("zb.ssei extraInfo must be string"), r.dataReport.addMsgInfo(a, {
                        error: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.code,
                        message: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.message + " extraInfo must be string"
                    }), r.dataReport.uploadReport(a), s({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError.message
                    }), !1;
                    if (r.rtm.modules.service.isDisConnect()) return r.logger.error("zb.ssei not login"), r.dataReport.uploadReport(a, void 0, n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kNoLoginError), s({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kNoLoginError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kNoLoginError.message
                    }), !1;
                    if (!r.stateCenter.publishStreamList[e]) return r.logger.error("zb.ssei publish stream no found"), r.dataReport.addMsgInfo(a, n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kPublishStreamNoFoundError), r.dataReport.uploadReport(a), void s({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kPublishStreamNoFoundError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kPublishStreamNoFoundError.message
                    });
                    r.updateStreamExtraInfo(e, t);
                    r.dataReport.uploadReport(a), i({errorCode: 0, extendedData: ""})
                }))
            }, e.prototype.publishTarget = function (e) {
                var t = this, r = o.getReportSeq();
                switch (e.type) {
                    case"addpush":
                        this.dataReport.newReport(r, n.ZegoRTCLogEvent.kZegoTaskAddPublishCdnUrl.event);
                        break;
                    case"delpush":
                    case"clearpush":
                        this.dataReport.newReport(r, n.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.event)
                }
                return this.dataReport.addMsgInfo(r, {
                    stream: n.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.stream(e.streamID),
                    target_url: n.ZegoRTCLogEvent.kZegoTaskRemovePublishCdnUrl.target_url(e.pushUrl)
                }), new Promise((function (o, s) {
                    var a = function (e, o) {
                        t.logger.error("zb.pt" + (o || e.message)), t.dataReport.addMsgInfo(r, {
                            error: e.code,
                            message: e.message + (o || "")
                        }), t.dataReport.uploadReport(r), s({
                            errorCode: e.code,
                            extendedData: e.message + (o ? " " + o : "")
                        })
                    };
                    e.streamID && "string" == typeof e.streamID || a(n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kParamError, "stream id type error"), e.pushUrl && "string" == typeof e.pushUrl || a(n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kParamError, "push url error"), t.stateCenter.publishStreamList[e.streamID] || a(n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kPublishStreamNoFoundError);
                    t._publishTarget(e, (function (e) {
                        t.dataReport.uploadReport(r), o(e)
                    }), (function (e) {
                        var o = i.ClientUtil.getServerError(e.errorCode),
                            n = i.ClientUtil.decodeServerError(o.code, o.message);
                        t.dataReport.addMsgInfo(r, n), t.dataReport.uploadReport(r), s(e)
                    }))
                }))
            }, e.prototype._publishTarget = function (e, t, r) {
                var s = this;
                if (-1 == ["addpush", "delpush", "clearpush"].indexOf(e.type)) return this.logger.error("zb.sh.pt cdn push type error"), void (r && r({
                    errorCode: a.errorCodeList.PUBLISHER_CDN_PUSH_ERROR.code,
                    extendedData: a.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.message + " type error"
                }));
                this.logger.info("zb.sh.ptcall");
                var n = Math.ceil((new Date).getTime() / 1e3), d = e.streamID;
                this.stateCenter.testEnvironment && (d = "zegotest-" + this.stateCenter.appid + "-" + e.streamID);
                var c = {
                    appid: this.stateCenter.appid,
                    biz_type: 0,
                    timestamp: n,
                    seq: this.stateCenter.cdnSeq++,
                    version: 1 * o.PROTO_VERSION,
                    stream_id: d,
                    pushurl: e.pushUrl
                }, l = {channel: "media", cmd: e.type, req_body: JSON.stringify(c)};
                this.logger.debug("zb.sh.pt send command"), this.sendBizChannelRequest(l, (function (n, d, c) {
                    if (s.logger.info("zb.sh.pt receive message"), 0 != c.length) {
                        var l = JSON.parse(c), u = l.code, g = l.message;
                        u && 0 != u ? (s.logger.error("zb.sh.pt " + e.type + " error code: " + u + " " + g), r && r({
                            errorCode: a.errorCodeList.UNKNOWN_SERVER_ERROR.code,
                            extendedData: a.errorCodeList.UNKNOWN_SERVER_ERROR.message + " cmd: " + e.type + " " + u + " " + g + "  "
                        })) : (s.logger.info("zb.sh.pt " + e.type + " success"), t && t({
                            errorCode: 0,
                            extendedData: ""
                        }))
                    } else r && r({
                        errorCode: i.ClientUtil.getServerError(o.MIXSTREAM_ERROR_CODE + 1).code,
                        extendedData: i.ClientUtil.getServerError(o.MIXSTREAM_ERROR_CODE + 1).message
                    })
                }), (function (t, o, i) {
                    s.logger.info("zb.sh.pt error: " + t);
                    var n = "";
                    2001 == t ? n = "invalid channel" : 2002 == t && (n = "bizchannel error"), s.logger.error("zb.sh.pt " + n), r && r({
                        errorCode: a.errorCodeList.UNKNOWN_SERVER_ERROR.code,
                        extendedData: a.errorCodeList.UNKNOWN_SERVER_ERROR.message + " cmd: " + e.type + " " + t + " " + n + "  "
                    })
                }))
            }, e
        }();
        t.StreamHandler = d
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoStreamCenterWeb = void 0;
        var o = r(7), i = r(16), s = r(0), n = r(19), a = r(20), d = r(21), c = r(22), l = r(4), u = r(1),
            g = function () {
                function e(e, t, r, o, i, s) {
                    var n = this;
                    this.testEnvironment = !1, this.heartbeatTimer = null, this.heartbeatInterval = 1e4, this.qualityTimerInterval = 3e3, this.previewStreamList = [], this.signalList = {}, this.chargeInfos = {
                        itemtype: "ChargeInfos",
                        timestamp_begin: 0,
                        timestamp_end: 0,
                        timestamp_diff_flag: 0,
                        timestamp_diff: 0,
                        infos: []
                    }, this.chargeInfosTimer = null, this.chargeInfosInterval = 6e4, this.chargeInfoSeq = 0, this.soundLevelDelegate = !1, this.soundLevelInterval = 1e3, this.playerList = {}, this.publisherList = {}, this.playSuccessCallBackList = {}, this.playErrorCallBackList = {}, this.tryCountConnectInterval = 3e3, this.checkMessageTimeout = function () {
                        for (var e in n.signalList) n.signalList[e].signal && n.signalList[e].signal.checkMessageTimeout()
                    }, this.getAllInUseUrl = function () {
                        var e = [];
                        for (var t in n.signalList) e.push(t);
                        return e
                    }, this.onDisconnectHandle = function (e) {
                        if (n.logger.info("zsc.od.0 call"), n.signalList[e]) {
                            for (var t = n.signalList[e], r = 0; r < t.publishConnectedList.length; r++) {
                                var o = n.publisherList[t.publishConnectedList[r]];
                                o && o.publisher && o.publisher.onDisconnect()
                            }
                            for (r = 0; r < t.playConnectedList.length; r++) {
                                var i = n.playerList[t.playConnectedList[r]];
                                i && i.player && i.player.onDisconnect()
                            }
                            delete n.signalList[e], n.stopSignalHeartbeat(), n.stopChargeInfosUpload(), n.stopSoundLevel()
                        }
                    }, this.logger = e, this.stateCenter = t, this.dataReport = r, this.rtm = o, this.ac = i, this.mediaEleSources = s
                }

                return e.prototype.onSignalDisconnected = function (e) {
                }, e.prototype.setQualityMonitorCycle = function (e) {
                    var t = this;
                    return this.logger.debug("zsc.qmc.0 timeInterval " + e), 0 == Object.keys(this.publisherList).length ? this.qualityTimerInterval = e : Object.keys(this.publisherList).forEach((function (r) {
                        t.publisherList[r].publisher.qualityTimeInterval = e, t.publisherList[r].publisher.setPublishQualityTimer()
                    })), !0
                }, e.prototype.setSessionInfo = function (e, t, r, o) {
                    this.logger.debug("zsc.ssi.0 called"), this.appid = e, this.userid = t, this.token = r, this.testEnvironment = o
                }, e.prototype.onPlayStateUpdate = function (e, t, r) {
                }, e.prototype.onPlayQualityUpdate = function (e, t) {
                }, e.prototype.onPublishStateUpdate = function (e, t, r) {
                }, e.prototype.onPublishQualityUpdate = function (e, t) {
                }, e.prototype.onUpdateHeartBeatIntervalHandle = function (e) {
                    e != this.heartbeatInterval && (this.logger.debug("zsc.uhb.0 update " + e), this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null), this.heartbeatInterval = e, this.startSignalHeartbeat())
                }, e.prototype.setPublishStateStart = function (e, t, r) {
                    var o = this;
                    this.logger.info("zsc.pss.0 call " + e);
                    var n = this.publisherList[e], a = this.stateCenter.reportSeqList.startPublish[e];
                    if (this.dataReport.eventStart(a, "setPublishState"), n) return this.logger.error("zsc.pss.0 publisher already exist"), this.dataReport.eventEndWithMsgInfo(a, "setPublishState", {message: "publisher already exist"}), this.dataReport.uploadReport(a, void 0, u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kIsPublishing), delete this.stateCenter.reportSeqList.startPublish[e], !1;
                    var l = new i.ZegoPublish(this.logger, this.dataReport, this.qualityTimerInterval, this, this.ac, this.mediaEleSources, this.stateCenter);
                    l.state = s.ENUM_PUBLISH_STATE.start, l.reportSeq = this.stateCenter.reportSeqList.startPublish[e];
                    var g = t.getVideoTracks()[0] && t.getVideoTracks()[0].label,
                        p = t.getAudioTracks()[0] && t.getAudioTracks()[0].label,
                        h = t.getVideoTracks()[0] && t.getVideoTracks()[0].getSettings().deviceId,
                        m = t.getAudioTracks()[0] && t.getAudioTracks()[0].getSettings().deviceId,
                        f = new d.RetryStreamHandler(this.logger, this.stateCenter, this);
                    return this.publisherList[e] = {
                        seq: 0,
                        localStream: t,
                        publisher: l,
                        serverUrls: [],
                        ttl: 0,
                        isCenterNode: !1,
                        streamID: e,
                        publishOption: r,
                        cameraLabel: g || "",
                        microLabel: p || "",
                        cameraDeviceId: h || "",
                        microDeviceId: m || "",
                        deviceStateCount: 0,
                        retryStreamHandler: f,
                        retryDispatchHandler: new c.RetryDispatchHandler(this.logger, this.stateCenter, this.rtm, this)
                    }, l.onPublishStateUpdate = function (t, r, i, s) {
                        var n = o.publisherList[r];
                        n ? f.publishStateHandle(t, n.streamID, i, s) : o.logger.error("zsc.psuh.0 cannot find publish " + e)
                    }, l.onPublishQualityUpdate = function (t, r) {
                        var i = o.publisherList[t];
                        i ? (o.stateCenter.deviceStateOut && 0 === r.audio.audioBitrate ? (i.deviceStateCount++, i.deviceStateCount >= 2 && (i.deviceStateCount = 0, o.stateCenter.deviceStateOut = !1, o.logger.warn("zsc.pss.0 publish audio error by device"))) : i.deviceStateCount = 0, o.onPublishQualityUpdate(i.streamID, r)) : o.logger.error("zsc.psuh.0 cannot find publish " + e)
                    }, this.dataReport.eventStart(l.reportSeq, "GetSignalUrl"), this.dataReport.eventStart(l.streamReportSeq, "GetSignalUrl"), !0
                }, e.prototype.startPublishingStream = function (e) {
                    this.logger.info("zsc.sps.0 call");
                    var t = this.publisherList[e];
                    if (!t) return this.logger.error("zsc.sps.0 publisher don't exist"), !1;
                    var r = t.publisher;
                    if (this.dataReport.eventEndWithMsg(r.reportSeq, "GetSignalUrl", {urls: t.serverUrls}), this.dataReport.eventEndWithMsg(r.streamReportSeq, "GetSignalUrl", {urls: t.serverUrls}), !t.serverUrls || 0 === t.serverUrls.length) return t.retryStreamHandler.publishStateHandle(s.ENUM_PUBLISH_STATE_UPDATE.error, e, l.errorCodeList.DISPATCH_ERROR), this.logger.info("zsc.sps.0 server don't have signal url"), !1;
                    var o = t.serverUrls.indexOf(this.server);
                    -1 !== o && (t.serverUrls.splice(o, 1), t.serverUrls.unshift(this.server));
                    var i = t.retryStreamHandler;
                    return i.invalid(), i.init(this.stateCenter.streamRetryTime), i.initStream(!0, e, t.serverUrls), i.activePublish(0)
                }, e.prototype.updateWaitingList = function (e, t, r, o, i) {
                    t ? e.publishWaitingList.push({
                        streamID: r,
                        success: o,
                        error: i
                    }) : e.playWaitingList.push({streamID: r, success: o, error: i})
                }, e.prototype.publishStream = function (e) {
                    var t = this.publisherList[e].publisher;
                    if (t) {
                        var r = null, o = null, i = this.publisherList[e].publishOption,
                            s = this.checkPreview(this.publisherList[e].localStream);
                        if (s) {
                            r = s.localStream, o = s.videoInfo;
                            var n = this.stateCenter.reportSeqList.startPublish[e];
                            this.dataReport.addMsgInfo(n, {
                                cap_w: u.ZegoRTCLogEvent.kZegoTaskPublishStart.cap_w(s.videoInfo.width),
                                cap_h: u.ZegoRTCLogEvent.kZegoTaskPublishStart.cap_h(s.videoInfo.height),
                                w: u.ZegoRTCLogEvent.kZegoTaskPublishStart.w(s.videoInfo.width),
                                h: u.ZegoRTCLogEvent.kZegoTaskPublishStart.h(s.videoInfo.height),
                                video_en_fps: u.ZegoRTCLogEvent.kZegoTaskPublishStart.video_en_fps(s.videoInfo.frameRate),
                                video_en_bps: u.ZegoRTCLogEvent.kZegoTaskPublishStart.video_en_bps(s.videoInfo.bitRate)
                            }), r ? (this.logger.info("zsc.ps.0 call success"), t.gwNodeTTL < (new Date).getTime() && (t.gwNode = "", t.gwNodeList = [], t.gwNodeTTL = 0, t.gwNodeTryCount = 1), t.startPublish(e, r, o, s.mediaStreamConfig, i)) : this.logger.error("zsc.ps.0 no localStream found")
                        } else this.logger.error("zsc.ps.0 no preview found")
                    } else this.logger.info("zsc.ps.0 publisher don't exist")
                }, e.prototype.connectPublishServer = function (e, t) {
                    var r = this, o = this.publisherList[e];
                    return o ? (this.dataReport.eventStart(o.publisher.reportSeq, "ConnectServer"), this.dataReport.eventStart(o.publisher.streamReportSeq, "ConnectServer"), this.connectWithReuseSignalServer(e, !0, t, (function (e, t, o) {
                        var i = r.publisherList[e];
                        if (i) {
                            var s = i.publisher;
                            if (s) {
                                r.dataReport.eventEndWithMsg(s.reportSeq, "ConnectServer", {
                                    result: 0,
                                    server: o
                                }), r.dataReport.eventEndWithMsg(s.streamReportSeq, "ConnectServer", {
                                    result: 0,
                                    server: o
                                });
                                var n = t.tokenInfo;
                                r.logger.info("zsc.cps.0 update token success"), n && n.report && (s.qualityUpload = n.report, s.qualityUploadInterval = n.report_interval), s.signal = t.signal, r.server = o, r.publishStream(e), r.getTokenSuccess()
                            } else r.logger.info("zsc.cps.1 check publisher don't exist")
                        } else r.logger.info("zsc.cps.0 after connect publisher don't exist")
                    }), (function (e, t) {
                        r.logger.error("zsc.cps.0 " + e + " connect fail " + t);
                        var o = r.publisherList[e];
                        if (o) {
                            var i = o.publisher;
                            i ? (r.dataReport.eventEndWithMsg(i.reportSeq, "ConnectServer", {result: t}), r.dataReport.uploadReport(i.reportSeq), delete r.stateCenter.reportSeqList.startPublish[e], o.retryStreamHandler.publishStateHandle(s.ENUM_PUBLISH_STATE_UPDATE.error, e, l.errorCodeList.CONNECT_FAILED)) : r.logger.info("zsc.cps.1 check publisher don't exist")
                        } else r.logger.info("zsc.cps.0 after connect publisher don't exist")
                    })), !0) : (this.logger.error("zsc.cps.0 publisher don't exist"), !1)
                }, e.prototype.getTokenSuccess = function () {
                    this.logger.debug("zsc.gts.0 call")
                }, e.prototype.stopPublishingStream = function (e) {
                    var t = this.publisherList[e];
                    if (t) {
                        var r = t.retryStreamHandler;
                        for (var o in r && (r.stopMaxTime(), r.invalid()), this.signalList) this.signalList[o].publishWaitingList = this.signalList[o].publishWaitingList.filter((function (t) {
                            return t.streamID !== e
                        }));
                        delete this.publisherList[e], t.publisher && (t.publisher.stopPublish(), delete t.publisher), this.removeStreamFromSignal(!0, e), this.stopSignalHeartbeat(), this.stopChargeInfosUpload(), this.stopSoundLevel(), this.logger.debug("zsc.sps.0.1 call success")
                    } else this.logger.warn("zsc.sps.0.1 publisher don't exist")
                }, e.prototype.connectWithReuseSignalServer = function (e, t, r, o, i) {
                    var a = this;
                    this.logger.info("zsc.crss.0 begin " + r);
                    var d = null;
                    if (this.signalList[r]) (d = this.signalList[r]).state == s.ENUM_SIGNAL_STATE.connected ? (this.logger.info("zsc.crss.0 already connected " + r + " streamId: " + e), t ? d.publishConnectedList.push(e) : d.playConnectedList.push(e), o(e, d, r)) : d.state == s.ENUM_SIGNAL_STATE.connecting && (this.logger.info("zsc.crss.0 signal is connecting " + r + " streamId: " + e), this.updateWaitingList(d, t, e, o, i)); else {
                        this.logger.info("zsc.crss.0 new signal " + r + " streamId: " + e);
                        var c = new n.ZegoSignal(this.logger, this.stateCenter);
                        c.setSessionInfo(this.appid, this.userid), c.onUpdateHeartBeatInterval = this.onUpdateHeartBeatIntervalHandle.bind(this), c.onDisconnect = this.onDisconnectHandle;
                        var l = this.publisherList[e] ? this.publisherList[e].retryStreamHandler : this.playerList[e] ? this.playerList[e].retryStreamHandler : null;
                        if (l && l.retryActiveCount) {
                            var u = l.retryActiveCount * (l.retryActiveCount - 1) / 2 + 2;
                            u = u > s.MAX_RETRY_CONNECT_INTERVAL ? s.MAX_RETRY_CONNECT_INTERVAL : u, c.tryConnectInterval = 1e3 * u
                        }
                        this.signalList[r] = {
                            signal: c,
                            state: s.ENUM_SIGNAL_STATE.connecting,
                            publishWaitingList: [],
                            playWaitingList: [],
                            publishConnectedList: [],
                            playConnectedList: [],
                            tokenInfo: null
                        }, this.updateWaitingList(this.signalList[r], t, e, o, i), c.connectServer(this.token, r, (function (e, t, o) {
                            d = a.signalList[r];
                            var i, n, c = 0;
                            if (0 != e) {
                                for (a.logger.info("zsc.crss.0 connect failed " + t), c = 0; c < d.publishWaitingList.length; c++) (i = d.publishWaitingList[c]).error && i.error(i.streamID, e);
                                for (c = 0; c < d.playWaitingList.length; c++) (n = d.playWaitingList[c]).error && n.error(n.streamID, e);
                                delete a.signalList[r]
                            } else {
                                for (a.logger.debug("zsc.crss.0 connected success " + t), d.state = s.ENUM_SIGNAL_STATE.connected, d.tokenInfo = o, c = 0; c < d.publishWaitingList.length; c++) (i = d.publishWaitingList[c]).success && i.success(i.streamID, d, t), d.publishConnectedList.push(i.streamID);
                                for (c = 0; c < d.playWaitingList.length; c++) (n = d.playWaitingList[c]).success && n.success(n.streamID, d, t), d.playConnectedList.push(n.streamID);
                                d.publishWaitingList = [], d.playWaitingList = [], null == a.heartbeatTimer && a.startSignalHeartbeat(), null == a.chargeInfosTimer && a.startChargeInfosUpload(), null == a.soundLevelTimer && a.soundLevelDelegate && a.startSoundLevel()
                            }
                        }))
                    }
                }, e.prototype.setPlayStateStart = function (e, t) {
                    var r = this, o = this.playerList[e], i = this.stateCenter.reportSeqList.startPlay[e];
                    if (this.dataReport.eventStart(i, "setPlayState"), o) return this.logger.error("zsc.pss.1 player already exist"), this.dataReport.eventEndWithMsgInfo(i, "setPlayState", {message: "player already exist"}), this.dataReport.uploadReport(i, void 0, u.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kIsPlaying), delete this.stateCenter.reportSeqList.startPlay[e], !1;
                    var n = new a.ZegoPlayWeb(this.logger, null, this.dataReport, this.qualityTimerInterval, this, this.ac, this.stateCenter);
                    t && [0, 2, 3].includes(t.resourceMode) && (n.resourceMode = t.resourceMode), n.state = s.ENUM_PLAY_STATE.start, n.reportSeq = this.stateCenter.reportSeqList.startPlay[e], n.beginTime = (new Date).getTime();
                    var l = new d.RetryStreamHandler(this.logger, this.stateCenter, this);
                    return this.playerList[e] = {
                        seq: 0,
                        player: n,
                        signal: null,
                        serverUrls: [],
                        ttl: 0,
                        isCenterNode: !1,
                        streamID: e,
                        playOption: t,
                        retryStreamHandler: l,
                        retryDispatchHandler: new c.RetryDispatchHandler(this.logger, this.stateCenter, this.rtm, this)
                    }, n.onPlayStateUpdate = function (e, t, o, i) {
                        var s = r.playerList[t];
                        s ? l.playStateHandle(e, s.streamID, o, i) : r.logger.error("zsc.pss.1 cannot find play " + t)
                    }, n.onPlayQualityUpdate = function (e, t) {
                        var o = r.playerList[e];
                        o ? r.onPlayQualityUpdate(o.streamID, t) : r.logger.error("zsc.pss.1 cannot find play " + e)
                    }, n.onRemoteCameraStatusUpdate = function (e, t) {
                        var o = r.playerList[e];
                        o ? r.onRemoteCameraStatusUpdate(o.streamID, t) : r.logger.error("zsc.pss.1 cannot find play " + e)
                    }, n.onRemoteMicStatusUpdate = function (e, t) {
                        var o = r.playerList[e];
                        o ? r.onRemoteMicStatusUpdate(o.streamID, t) : r.logger.error("zsc.pss.1 cannot find play " + e)
                    }, this.dataReport.eventStart(n.reportSeq, "GetSignalUrl"), this.dataReport.eventStart(n.streamReportSeq, "GetSignalUrl"), !0
                }, e.prototype.onRemoteMicStatusUpdate = function (e, t) {
                }, e.prototype.onRemoteCameraStatusUpdate = function (e, t) {
                }, e.prototype.startPlayingStream = function (e, t) {
                    this.logger.info("zsc.sps.1 start play called");
                    var r = this.playerList[e];
                    if (!r) return this.logger.error("zsc.sps.1 player don't exist"), !1;
                    var o = r.player;
                    if (this.dataReport.eventEndWithMsg(o.reportSeq, "GetSignalUrl", {urls: r.serverUrls}), this.dataReport.eventEndWithMsg(o.streamReportSeq, "GetSignalUrl", {urls: r.serverUrls}), 0 == r.serverUrls.length) return r.retryStreamHandler.playStateHandle(s.ENUM_PLAY_STATE_UPDATE.error, e, l.errorCodeList.DISPATCH_ERROR), this.logger.info("zsc.sps.1 server don't have signal url"), !1;
                    var i = r.serverUrls.indexOf(this.server);
                    -1 !== i && (r.serverUrls.splice(i, 1), r.serverUrls.unshift(this.server));
                    var n = r.retryStreamHandler;
                    return n.invalid(), n.init(this.stateCenter.streamRetryTime), n.initStream(!1, e, r.serverUrls), n.activePull(0, t)
                }, e.prototype.connectPlayServer = function (e, t, r) {
                    var o = this, i = this.playerList[e];
                    return i ? (this.dataReport.eventStart(i.player.reportSeq, "ConnectServer"), this.dataReport.eventStart(i.player.streamReportSeq, "ConnectServer"), this.connectWithReuseSignalServer(e, !1, r, (function (e, r, i) {
                        var s = o.playerList[e];
                        if (s) {
                            var n = s.player;
                            if (n) {
                                o.dataReport.eventEndWithMsg(n.reportSeq, "ConnectServer", {
                                    result: 0,
                                    server: i
                                }), o.dataReport.eventEndWithMsg(n.streamReportSeq, "ConnectServer", {
                                    result: 0,
                                    server: i
                                });
                                var a = r.tokenInfo;
                                o.logger.info("zsc.cps.1 update token success"), a && a.report && (n.qualityUpload = a.report, n.qualityUploadInterval = a.report_interval), n.signal = r.signal, o.server = i, o.playStream(e, t), o.getTokenSuccess()
                            } else o.logger.error("zsc.cps.1 checkplayer don't exist")
                        } else o.logger.error("zsc.cps.1 after connect player don't exist")
                    }), (function (t, r) {
                        var i = o.playerList[t];
                        i ? (o.dataReport.eventEndWithMsg(i.player.reportSeq, "ConnectServer", {result: r}), o.dataReport.uploadReport(i.player.reportSeq), delete o.stateCenter.reportSeqList.startPlay[e], i.retryStreamHandler.playStateHandle(s.ENUM_PLAY_STATE_UPDATE.error, t, l.errorCodeList.CONNECT_FAILED)) : o.logger.error("zsc.cps.1 after connect player don't exist")
                    })), !0) : (this.logger.error("zsc.cps.1 player don't exist"), !1)
                }, e.prototype.playStream = function (e, t) {
                    var r = this.playerList[e].player;
                    r ? (this.logger.info("zsc.ps.1 call success"), r.gwNodeTTL < (new Date).getTime() && (r.gwNode = "", r.gwNodeList = [], r.gwNodeTTL = 0, r.gwNodeTryCount = 1), r.startPlay(e, t, this.playerList[e].playOption)) : this.logger.warn("zsc.ps.1 player don't exist")
                }, e.prototype.stopSignalHeartbeat = function () {
                    this.logger.debug("zsc.ssh.1 call");
                    var e = 0;
                    for (var t in this.signalList) e += 1;
                    this.heartbeatTimer && 0 == e && (this.logger.info("zsc.ssh.1 stop"), clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
                }, e.prototype.removeStreamFromSignal = function (e, t) {
                    var r = [];
                    for (var o in this.signalList) {
                        var i = this.signalList[o];
                        if (e) {
                            for (var s = 0; s < i.publishConnectedList.length; s++) if (i.publishConnectedList[s] === t) {
                                this.logger.debug("zsc.rsfs.0 found from publish"), i.publishConnectedList.splice(s, 1);
                                break
                            }
                            for (s = 0; s < i.publishWaitingList.length; s++) if (i.publishWaitingList[s].streamID === t) {
                                this.logger.debug("zsc.rsfs.0 found from publish"), i.publishWaitingList.splice(s, 1);
                                break
                            }
                        } else {
                            for (var n = 0; n < i.playConnectedList.length; n++) if (i.playConnectedList[n] === t) {
                                this.logger.debug("zsc.rsfs.0 found from play"), i.playConnectedList.splice(n, 1);
                                break
                            }
                            for (n = 0; n < i.playWaitingList.length; n++) if (i.playWaitingList[n].streamID === t) {
                                this.logger.debug("zsc.rsfs.0 found from play"), i.playWaitingList.splice(n, 1);
                                break
                            }
                        }
                        0 == i.publishConnectedList.length && 0 == i.playConnectedList.length && 0 == i.publishWaitingList.length && 0 == i.playWaitingList.length && (i.signal.disconnectServer(), r.push(o))
                    }
                    for (var a = 0; a < r.length; a++) delete this.signalList[r[a]]
                }, e.prototype.stopPlayingStream = function (e) {
                    var t = this.playerList[e];
                    if (t) {
                        var r = t.retryStreamHandler;
                        for (var o in r && (r.stopMaxTime(), r.invalid()), this.signalList) this.signalList[o].playWaitingList = this.signalList[o].playWaitingList.filter((function (t) {
                            return t.streamID !== e
                        }));
                        delete this.playerList[e], t.player && (t.player.stopPlay(), delete t.player), this.removeStreamFromSignal(!1, e), this.stopSignalHeartbeat(), this.stopChargeInfosUpload(), this.stopSoundLevel(), delete this.playSuccessCallBackList[e], delete this.playErrorCallBackList[e], this.logger.debug("zsc.sps.1.1 call success")
                    } else this.logger.info("zsc.sps.1.1 player don't exist")
                }, e.prototype.reset = function () {
                    for (var e in this.publisherList) {
                        (r = this.publisherList[e].retryStreamHandler) && (r.stopMaxTime(), r.invalid()), this.publisherList[e].publisher && this.publisherList[e].publisher.stopPublish()
                    }
                    for (var t in this.playerList) {
                        var r;
                        (r = this.playerList[t].retryStreamHandler) && (r.stopMaxTime(), r.invalid()), this.playerList[t].player && this.playerList[t].player.stopPlay()
                    }
                    for (var o in this.signalList) this.signalList[o].signal && this.signalList[o].signal.disconnectServer();
                    this.playerList = {}, this.publisherList = {}, this.signalList = {}, this.server = "", this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
                }, e.prototype.startSignalHeartbeat = function () {
                    var e = this;
                    this.logger.debug("zsc.ssh.0 call"), this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null), this.heartbeatTimer = setTimeout((function () {
                        e.checkSignalHeartbeat()
                    }), this.heartbeatInterval)
                }, e.prototype.startChargeInfosUpload = function () {
                    var e = this;
                    this.logger.debug("zsc.sciu.0 call"), this.chargeInfosTimer && (clearTimeout(this.chargeInfosTimer), this.chargeInfosTimer = null), this.chargeInfosTimer = setTimeout((function () {
                        e.checkChargeInfos()
                    }), this.chargeInfosInterval)
                }, e.prototype.checkChargeInfos = function () {
                    this.logger.debug("zsc.cci.0 call");
                    var e = {is_publishing: 0, play_max_audio_bitrate: 0, play_stream_resolution_infos: []};
                    for (var t in this.chargeInfos.timestamp_begin = (new Date).getTime(), this.publisherList) {
                        this.publisherList[t].publisher.state === s.ENUM_PUBLISH_STATE.publishing && (e.is_publishing = 1);
                        break
                    }
                    e.play_max_audio_bitrate = 0;
                    var r = function (t) {
                        var r = o.playerList[t].player.playStream,
                            i = r && 0 !== r.getVideoTracks().length ? r.getVideoTracks()[0].getSettings() : void 0,
                            s = {
                                video_width: i && i.width ? i.width : 0,
                                video_height: i && i.height ? i.height : 0,
                                count: 1
                            };
                        if (!e.play_stream_resolution_infos.find((function (e) {
                            return e.video_width == s.video_width && e.video_height == s.video_height && (e.count++, !0)
                        })) && e.play_stream_resolution_infos.push(s), 0 == s.video_width && 0 == s.video_height) {
                            var n = 1e3 * o.playerList[t].player.lastPlayStats.audioBitrate;
                            n > e.play_max_audio_bitrate && (e.play_max_audio_bitrate = n)
                        }
                    }, o = this;
                    for (var i in this.playerList) r(i);
                    0 !== this.chargeInfos.timestamp_end ? (this.chargeInfos.timestamp_diff = this.chargeInfos.timestamp_begin - this.chargeInfos.timestamp_end, this.chargeInfos.timestamp_diff_flag = 1) : (this.chargeInfos.timestamp_diff = 0, this.chargeInfos.timestamp_diff_flag = 0), this.chargeInfos.timestamp_end = (new Date).getTime(), this.chargeInfos.infos = [e], 0 !== e.play_stream_resolution_infos.length && this.logger.report(this.chargeInfos), this.chargeInfosTimer && this.startChargeInfosUpload()
                }, e.prototype.checkSignalHeartbeat = function () {
                    for (var e in this.logger.debug("zsc.csh.0 call"), this.signalList) this.signalList[e].signal && this.signalList[e].signal.sendHeartbeat();
                    this.heartbeatTimer && this.startSignalHeartbeat()
                }, e.prototype.stopChargeInfosUpload = function () {
                    this.logger.debug("zsc.sciu.0 call");
                    var e = 0;
                    for (var t in this.signalList) e += 1;
                    this.chargeInfosTimer && 0 == e && (this.logger.info("zsc.sciu.0 stop"), clearTimeout(this.chargeInfosTimer), this.chargeInfosTimer = null)
                }, e.prototype.getPublisher = function (e) {
                    var t = null;
                    return this.publisherList[e] && this.publisherList[e].publisher && (t = this.publisherList[e].publisher), t
                }, e.prototype.checkPreview = function (e) {
                    for (var t = 0; t < this.previewStreamList.length; t++) if (this.previewStreamList[t].localStream === e) return this.previewStreamList[t];
                    return null
                }, e.prototype.checkPublish = function (e) {
                    for (var t in this.publisherList) if (this.publisherList[t].localStream == e) return this.publisherList[t];
                    return null
                }, e.prototype.removePreview = function (e) {
                    for (var t = 0; t < this.previewStreamList.length; t++) if (this.previewStreamList[t] === e) {
                        this.previewStreamList.splice(t, 1);
                        break
                    }
                }, e.prototype.onPlayerStreamUrlUpdate = function (e, t, r) {
                }, e.prototype.getScreenConstrains = function (e) {
                    var t = {};
                    if ("boolean" == typeof e && e) t = {
                        audio: !1,
                        frameRate: 15,
                        bitRate: 1500
                    }; else if ("object" == typeof e) {
                        switch (e.videoQuality) {
                            case 1:
                                t = {
                                    frameRate: s.ENUM_SCREEM_RESOLUTION_TYPE.LOW.frameRate,
                                    bitRate: s.ENUM_SCREEM_RESOLUTION_TYPE.LOW.bitRate
                                };
                                break;
                            case 2:
                                t = {
                                    frameRate: s.ENUM_SCREEM_RESOLUTION_TYPE.MEDIUM.frameRate,
                                    bitRate: s.ENUM_SCREEM_RESOLUTION_TYPE.MEDIUM.bitRate
                                };
                                break;
                            case 3:
                                t = {
                                    frameRate: s.ENUM_SCREEM_RESOLUTION_TYPE.HIGH.frameRate,
                                    bitRate: s.ENUM_SCREEM_RESOLUTION_TYPE.HIGH.bitRate
                                };
                                break;
                            case 4:
                                t = {frameRate: e.frameRate, bitRate: e.bitRate, width: e.width, height: e.height}
                        }
                        t.audio = "boolean" == typeof e.audio && e.audio
                    }
                    return t
                }, e.prototype.createScreenPreviewer = function (e, t) {
                    var r = new o.ZegoPreview(this.logger), i = e.getVideoTracks()[0].getSettings();
                    return this.previewStreamList.push(r), r.mediaStreamConfig = t, e.getAudioTracks().length > 0 && (r.micTrack = e.getAudioTracks()[0]), r.localStream = e, r.videoInfo = {
                        width: i.width,
                        height: i.height,
                        frameRate: i.frameRate || 0,
                        bitRate: t.bitRate || 0
                    }, r.previewSuc = !0, r
                }, e.prototype.setSoundLevelDelegate = function (e, t) {
                    for (var r in this.logger.info("zsc.ssd.0 call"), t && (this.soundLevelInterval = t), this.soundLevelDelegate = e, this.publisherList) {
                        var o = this.publisherList[r].publisher;
                        e ? o.startSoundLevel() : o.stopSoundLevel()
                    }
                    for (var r in this.playerList) {
                        var i = this.playerList[r].player;
                        e ? i.startSoundLevel() : i.stopSoundLevel()
                    }
                    if (e) {
                        this.logger.info("zsc.ssd.0 start getting sound");
                        var s = 0;
                        for (var n in this.signalList) s += 1;
                        null == this.soundLevelTimer && s > 0 && this.startSoundLevel()
                    } else this.logger.info("zsc.ssd.0 stop getting sound"), this.soundLevelTimer && clearTimeout(this.soundLevelTimer), this.soundLevelTimer = null, this.soundLevelInterval = 1e3
                }, e.prototype.startSoundLevel = function () {
                    var e = this;
                    this.logger.debug("zsc.ssl.0 call"), this.soundLevelTimer && (clearTimeout(this.soundLevelTimer), this.soundLevelTimer = null), this.soundLevelTimer = setTimeout((function () {
                        e.checkSoundLevel()
                    }), this.soundLevelInterval)
                }, e.prototype.checkSoundLevel = function () {
                    this.logger.debug("zsc.csl.0 call");
                    var e = [];
                    for (var t in this.publisherList) {
                        var r = this.publisherList[t].publisher;
                        e.push({streamID: this.getBackStreamId(r.streamId), soundLevel: r.soundLevel, type: "push"})
                    }
                    for (var t in this.playerList) {
                        var o = this.playerList[t].player;
                        e.push({streamID: this.getBackStreamId(o.streamId), soundLevel: o.soundLevel, type: "pull"})
                    }
                    this.soundLevelDelegate && e.length > 0 && this.onSoundLevelUpdate(e), this.soundLevelDelegate && this.startSoundLevel()
                }, e.prototype.getBackStreamId = function (e) {
                    return this.testEnvironment && e ? e.replace("zegotest-" + this.appid + "-", "") : e
                }, e.prototype.onSoundLevelUpdate = function (e) {
                }, e.prototype.stopSoundLevel = function () {
                    var e = 0;
                    for (var t in this.signalList) e += 1;
                    this.soundLevelTimer && 0 == e && (this.logger.info("zsc.ssl.0 stop"), clearTimeout(this.soundLevelTimer), this.soundLevelTimer = null, this.soundLevelInterval = 1e3)
                }, e
            }();
        t.ZegoStreamCenterWeb = g
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function (e, t, r, o) {
            void 0 === o && (o = r), Object.defineProperty(e, o, {
                enumerable: !0, get: function () {
                    return t[r]
                }
            })
        } : function (e, t, r, o) {
            void 0 === o && (o = r), e[o] = t[r]
        }), i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {enumerable: !0, value: t})
        } : function (e, t) {
            e.default = t
        }), s = this && this.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return i(t, e), t
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoPublish = void 0;
        var n = r(0), a = s(r(17)), d = r(18), c = r(8), l = r(2), u = r(1), g = function () {
            function e(e, t, r, o, i, s, a) {
                this.state = n.ENUM_PUBLISH_STATE.stop, this.sessionId = 0, this.sessionToken = "", this.waitingICETimeInterval = 5e3, this.waitingAnswerTimeInterval = 5e3, this.candidateInfo = [], this.waitingICETimer = null, this.waitingAnswerTimer = null, this.qualityTimer = null, this.publishQualityList = [], this.maxQualityListCount = 10, this.lastPublishStats = {}, this.reportSeq = NaN, this.streamReportSeq = n.getSeq(), this.qualityUpload = !1, this.qualityUploadInterval = 3e4, this.qualityUploadLastTime = 0, this.qualitySeq = 0, this.maxRetryCount = 3, this.waitingServerTimerInterval = 3e3, this.waitingServerTimer = null, this.videoInfo = {
                    width: 0,
                    height: 0,
                    frameRate: 0,
                    bitRate: 0,
                    channelCount: 1,
                    audioBitrate: 48e3
                }, this.mediaStreamConfig = null, this.offerSeq = 0, this.audioMixList = [], this.arrayBufferMap = {}, this.effectList = [], this.qualityCount = 0, this.closeSessionSignal = !1, this.channelCount = 1, this.localSdpRevert = !1, this.remoteSdpRevert = !1, this.videoCodec = "H264", this.stateNego = n.ENUM_PUBLISH_STATE_NEGO.stop, this.negoInterval = 25e3, this.publishEvent = !1, this.soundLevel = 0, this.script = null, this.mic = null, this.cameraState = "on", this.microState = "on", this.gwNode = "", this.gwNodeList = [], this.gwNodeTTL = 0, this.gwNodeTryCount = 1, this.needIncMax = !1, this.probeCount = 0, this.gotMax = !1, this.initFitCnt = 0, this.targetRate = 0, this.totalBitrateArray = [], this.totalTargetRateArray = [], this.totalRetransRateArray = [], this.logger = e, this.dataReport = t, this.qualityTimeInterval = r, this.ac = i, this.mediaEleSources = s, this.streamCenter = o, this.stateCenter = a, this.dataReport.newReport(this.streamReportSeq)
            }

            return e.prototype.publishStateUpdateError = function (e, t) {
                this.logger.error("zp.psue.0 call ", this.streamId, JSON.stringify(e)), this.streamId && this.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.error, this.streamId, e, t), this.logger.info("zp.psue.0 ended")
            }, e.prototype.resetPublish = function () {
                this.logger.info("zp.rp.0 " + this.streamId + " call"), this.state = n.ENUM_PUBLISH_STATE.stop, this.publishEvent = !1, null == this.peerConnection && null == this.peerConnection || (this.peerConnection.close(), this.peerConnection = null), null != this.waitingAnswerTimer && (clearTimeout(this.waitingAnswerTimer), this.waitingAnswerTimer = null), null != this.waitingICETimer && (clearTimeout(this.waitingICETimer), this.waitingICETimer = null), null != this.negoTimer && (clearTimeout(this.negoTimer), this.negoTimer = null), this.clearPublishQualityTimer(), this.signal && (this.signal.unregisterPushCallback("CandidateInfoPush", this.sessionId), this.signal.unregisterPushCallback("MediaDescPush", this.sessionId), this.signal.unregisterPushCallback("CloseSessionPush", this.sessionId), this.signal.unregisterPushCallback("SessionResetPush", this.sessionId), this.signal.unregisterPushCallback("PublishEventPush", this.sessionId), this.signal.unregisterPushCallback("ClientInfoPush", this.sessionId)), this.sessionSeq = 0, this.offerSeq = 0, this.candidateInfo = [], this.publishQualityList = [], this.qualityUploadLastTime = 0, this.stopSoundLevel(), this.resetEncBitrate()
            }, e.prototype.clearPublishQualityTimer = function () {
                null != this.qualityTimer && (clearInterval(this.qualityTimer), this.qualityTimer = null), this.lastPublishStats = {}, this.qualityCount = 0
            }, e.prototype.shouldSendCloseSession = function () {
                return this.state != n.ENUM_PUBLISH_STATE.stop && this.state != n.ENUM_PUBLISH_STATE.waitingSessionRsp
            }, e.prototype.startPublish = function (e, t, r, o, i) {
                var s = this;
                if (this.logger.info("zp.sp.0 " + e + " called"), this.signal && this.signal.negoInterval && (this.negoInterval = this.signal.negoInterval), e) {
                    if (this.peerConnection && this.stateNego == n.ENUM_PUBLISH_STATE_NEGO.iceConnected) return this.logger.info("zp.sp.0 ice connected"), this.signal.addSession(this.sessionId, this.sessionToken), void this.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.start, this.streamId, {
                        code: 0,
                        message: ""
                    }, !0);
                    this.streamId = e, this.localStream = t, this.mediaStreamConfig = o, this.channelCount = o.channelCount, this.publishOption = i || {}, navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && o && (o.externalCapture || o.externalMediaStream) && (this.localStream.onaddtrack = function () {
                        s.logger.info("zp.sp.0 " + s.streamId + " Track added");
                        var e = s.localStream.getVideoTracks(), t = s.localStream.getAudioTracks();
                        if (e.length > 1) s.peerConnection.getSenders().find((function (t) {
                            return t.track.kind === e[1].kind
                        })).replaceTrack(e[1]), s.localStream.removeTrack(e[0]); else if (t.length > 1) {
                            s.peerConnection.getSenders().find((function (e) {
                                return e.track.kind === t[1].kind
                            })).replaceTrack(t[1]), s.localStream.removeTrack(t[0])
                        }
                    }), r && (this.videoInfo = r), i && i.videoCodec && (this.videoCodec = i.videoCodec), this.dataReport.addMsgInfo(this.reportSeq, {
                        video_en_codec_id: u.ZegoRTCLogEvent.kZegoTaskPublishStart.video_en_codec_id("VP8" == this.videoCodec ? 2 : 0),
                        audio_c_channel_count: u.ZegoRTCLogEvent.kZegoTaskPublishStart.audio_c_channel_count(2 == this.channelCount ? 2 : 1),
                        audio_en_bps: u.ZegoRTCLogEvent.kZegoTaskPublishStart.audio_en_bps(this.videoInfo.audioBitrate),
                        aec_level: u.ZegoRTCLogEvent.kZegoTaskPublishStart.aec_level(1 == o.AEC ? 2 : 0 == o.AEC ? 0 : 2),
                        ans_level: u.ZegoRTCLogEvent.kZegoTaskPublishStart.ans_level(1 == o.ANS ? 2 : 0 == o.ANS ? 0 : 2),
                        agc: u.ZegoRTCLogEvent.kZegoTaskPublishStart.agc(1 == o.AGC ? 2 : 0 == o.AGC ? 0 : 2),
                        traffic_control_min_video_bitrate: u.ZegoRTCLogEvent.kZegoTaskPublishStart.traffic_control_min_video_bitrate(this.videoInfo.bitRate)
                    }), this.sessionSeq = n.getSeq(), this.dataReport.eventStart(this.reportSeq, "CreateSession"), this.dataReport.eventStart(this.streamReportSeq, "CreateSession");
                    var a = e;
                    1 == this.streamCenter.testEnvironment && (a = "zegotest-" + this.streamCenter.appid + "-" + e), this.signal.createSession(this.sessionSeq, 0, 0, a, i && i.streamParams, this.gwNode, (function (e, t, r) {
                        var o = r.turn_server, i = o.split("?")[0] && o.split("?")[0].slice(5),
                            n = s.streamCenter.server.split("?"), a = n[1] && n[1].slice(2);
                        s.dataReport.eventEndWithMsg(s.streamReportSeq, "CreateSession", {
                            sessionId: r.session_id,
                            url: "webrtc://" + i + "/" + a + "/" + s.streamId
                        }), s.dataReport.eventEndWithMsg(s.reportSeq, "CreateSession", {
                            sessionId: r.session_id,
                            url: "webrtc://" + i + "/" + a + "/" + s.streamId
                        }), s.logger.info("zp.sp.0 " + s.streamId + " sessionId:" + r.session_id), s.sessionSeq == e ? 0 !== r.result ? (s.logger.error("zp.sp.0 " + s.streamId + " create session failed " + r.result), s.gwNodeList = r.gw_nodes && r.gw_nodes.length > 0 ? r.gw_nodes : s.gwNodeList, s.gwNode = r.gw_nodes && r.gw_nodes.length > 0 ? s.gwNodeList[0] : s.gwNode, s.gwNodeTTL = r.gw_nodes_ttl ? (new Date).getTime() + 1e3 * r.gw_nodes_ttl : s.gwNodeTTL, s.stateCenter.clientIP = r.clientip ? r.clientip : s.stateCenter.clientIP, s.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kSessionRequestError)) : (s.sessionId = r.session_id, s.sessionToken = r.session_token, s.gwNodeList = r.gw_nodes && r.gw_nodes.length > 0 ? r.gw_nodes : s.gwNodeList, s.gwNode = r.gw_nodes && r.gw_nodes.length > 0 ? s.gwNodeList[0] : s.gwNode, s.gwNodeTTL = r.gw_nodes_ttl ? (new Date).getTime() + 1e3 * r.gw_nodes_ttl : s.gwNodeTTL, s.stateCenter.clientIP = r.clientip ? r.clientip : s.stateCenter.clientIP, s.logger.info("zp.sp.0 " + s.streamId + " create session success " + s.sessionId), s.dataReport.addMsgInfo(s.reportSeq, {session_id: u.ZegoRTCLogEvent.kZegoTaskPublishStart.session_id(s.sessionId)}), s.onCreatePublishSessionSuccess(r)) : s.logger.error("zp.sp.0 " + s.streamId + " seq is not match.")
                    }), (function (e, t) {
                        s.reportSeq, s.dataReport.eventEndWithMsg(s.reportSeq, "CreateSession", {error: e}), s.dataReport.eventEndWithMsg(s.streamReportSeq, "CreateSession", {error: e}), s.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kSessionRequestError)
                    })), this.state = n.ENUM_PUBLISH_STATE.waitingSessionRsp, this.logger.info("zp.sp.0 " + this.streamId + " called success"), this.stateNego = n.ENUM_PUBLISH_STATE_NEGO.start, this.negoTimer = setTimeout((function () {
                        s.logger.error("zp.sp.0 waiting timeout"), s.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishNegoTimeoutError)
                    }), this.negoInterval)
                } else this.logger.error("zp.sp.0 " + e + " streamId is null")
            }, e.prototype.onCreatePublishSessionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.ops.0 " + this.streamId + " called");
                var r = [];
                if (e.turn_server) {
                    var o = e.turn_server;
                    this.stateCenter.turnOverTcpOnly && (o = o.replace("udp", "tcp")), this.logger.info("zp.ops.0 over tcp " + o), r.push(o)
                }
                e.stun_server && r.push(e.stun_server);
                var i = {
                    iceTransportPolicy: "relay",
                    iceServers: [{urls: r, username: e.turn_username, credential: e.turn_auth_key}]
                };
                this.logger.info("zp.ops.0 " + this.streamId + " username: " + e.turn_username), this.logger.info("zp.ops.0 " + this.streamId + " credential: " + e.turn_auth_key), this.peerConnection = new RTCPeerConnection(i), this.peerConnection.onicecandidate = function (e) {
                    t.onIceCandidate(e)
                }, this.peerConnection.onsignalingstatechange = function (e) {
                    t.onConnectionStateChange(e)
                }, this.peerConnection.oniceconnectionstatechange = function (e) {
                    t.onIceConnectionStateChange(e)
                };
                var s = [], n = [];
                this.localStream && (this.localStream.getTracks().forEach((function (e) {
                    t.peerConnection.addTrack(e, t.localStream)
                })), s = this.localStream.getVideoTracks(), n = this.localStream.getAudioTracks(), s.length > 0 && this.logger.info("zp.ops.0 " + this.streamId + " video device: " + s[0].label), n.length > 0 && this.logger.info("zp.ops.0 " + this.streamId + " audio device: " + n[0].label));
                var a = {offerToReceiveAudio: n.length > 0 ? 1 : 0, offerToReceiveVideo: s.length > 0 ? 1 : 0};
                this.logger.info("zp.ops.0 " + this.streamId + " createOffer: " + JSON.stringify(a)), this.dataReport.eventStart(this.reportSeq, "CreateOffer"), this.dataReport.eventStart(this.streamReportSeq, "CreateOffer"), this.peerConnection.createOffer(a).then((function (e) {
                    t.dataReport.eventEnd(t.reportSeq, "CreateOffer"), t.dataReport.eventEnd(t.streamReportSeq, "CreateOffer"), t.onCreateOfferSuccess(e)
                }), (function (e) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "CreateOffer", {error: e.toString()}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "CreateOffer", {error: e.toString()}), t.logger.error("zp.ops.0 " + t.streamId + " create offer error " + e.toString()), t.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kCreateOfferError, !0)
                })), this.signal.registerPushCallback("CandidateInfoPush", this.sessionId, (function (e, r, o) {
                    t.onRecvCandidateInfo(e, r, o)
                })), this.signal.registerPushCallback("CloseSessionPush", this.sessionId, (function (e, r, o) {
                    t.onRecvCloseSession(e, r, o)
                })), this.signal.registerPushCallback("MediaDescPush", this.sessionId, (function (e, r, o) {
                    t.onRecvMediaDescription(e, r, o)
                })), this.signal.registerPushCallback("SessionResetPush", this.sessionId, (function (e, r, o) {
                    t.onRecvResetSession(e, r, o)
                })), this.signal.registerPushCallback("PublishEventPush", this.sessionId, (function (e, r, o) {
                    t.onRecvPublishEvent(e, r, o)
                })), this.signal.registerPushCallback("ClientInfoPush", this.sessionId, (function (e, r, o) {
                    t.onRecvClientInfo(e, r, o)
                })), this.logger.info("zp.ops.0 " + this.streamId + " call success")
            }, e.prototype.onCreateOfferSuccess = function (e) {
                var t = this;
                0 != this.videoInfo.bitRate && (e.sdp = this.updateBandwidthRestriction(e.sdp, this.videoInfo.bitRate)), e.sdp = e.sdp.replace(/sendrecv/g, "sendonly"), e.sdp = e.sdp.replace(/useinbandfec=\d+/, "maxaveragebitrate=" + this.videoInfo.audioBitrate + (2 === this.videoInfo.channelCount ? ";stereo=1" : "")), this.logger.info("zp.oco.0 " + this.streamId + " local sdp revert " + this.localSdpRevert), /m=video[\s\S]*m=audio/.test(e.sdp) && (this.localSdpRevert = !0), e.sdp = c.SdpUtil.getSDPByVideDecodeType(e.sdp, this.videoCodec), this.logger.info("zp.oco.0 " + this.streamId + " localSdp1 " + e.sdp.substr(0, e.sdp.length / 2)), this.logger.info("zp.oco.0 " + this.streamId + " localSdp2 " + e.sdp.substr(e.sdp.length / 2)), this.dataReport.eventStart(this.reportSeq, "SetLocalDescription"), this.dataReport.eventStart(this.streamReportSeq, "SetLocalDescription"), this.peerConnection.setLocalDescription(e).then((function () {
                    t.dataReport.eventEnd(t.reportSeq, "SetLocalDescription"), t.dataReport.eventEnd(t.streamReportSeq, "SetLocalDescription"), t.onSetLocalDescriptionSuccess(e)
                }), (function (e) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "SetLocalDescription", {error: e.toString()}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "SetLocalDescription", {error: e.toString()}), t.logger.error("zp.oco.0 " + t.streamId + " error " + e.toString()), t.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kSetLocalDescError, !0)
                }))
            }, e.prototype.updateBandwidthRestriction = function (e, t) {
                var r = "AS";
                return "firefox" === a.browserDetails.browser && (t = 1e3 * (t >>> 0), r = "TIAS"), e = -1 === e.indexOf("b=" + r + ":") ? (e = e.replace(/c=IN (.*)\r\n/g, "c=IN $1\r\nb=" + r + ":" + t + "\r\n")).replace("b=" + r + ":" + t + "\r\n", "") : (e = e.replace(new RegExp("b=" + r + ":.*\r\n", "g"), "b=" + r + ":" + t + "\r\n")).replace("b=" + r + ":" + t + "\r\n", "")
            }, e.prototype.onSetLocalDescriptionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.osd.0 " + this.streamId + " success");
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
                this.offerSeq = n.getSeq(), this.dataReport.eventStart(this.reportSeq, "SendMediaDesc"), this.dataReport.eventStart(this.streamReportSeq, "SendMediaDesc"), this.signal.sendMediaDesc(this.offerSeq, this.sessionId, 0, r, (function (e, o, i) {
                    t.offerSeq == e && t.sessionId == o ? (t.logger.info("zp.osd.0 " + t.streamId + " send success"), t.dataReport.eventEndWithMsg(t.reportSeq, "SendMediaDesc", {
                        mediaDescription: {
                            width: r.width,
                            height: r.height,
                            frameRate: r.frameRate,
                            video_min_kpbs: r.video_min_kpbs,
                            video_max_kpbs: r.video_max_kpbs,
                            audio_kpbs: r.audio_kpbs,
                            keyframe_intv: r.keyframe_intv
                        }
                    }), t.dataReport.eventEndWithMsg(t.streamReportSeq, "SendMediaDesc", {
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
                        t.state == n.ENUM_PUBLISH_STATE.waitingServerAnswer && (t.logger.error("zp.osd.0 " + t.streamId + " waiting timeout"), t.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kMediaDescError))
                    }), t.waitingAnswerTimeInterval), t.logger.info("zp.osd.0 " + t.streamId + " send success stateNego:waiterAnswer"), t.stateNego = n.ENUM_PUBLISH_STATE_NEGO.waiterAnswer, t.state = n.ENUM_PUBLISH_STATE.waitingServerAnswer) : t.logger.error("zp.osd.0 " + t.streamId + " seq or sessionId is not equal")
                }), (function (e, r) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "SendMediaDesc", {error: e}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "SendMediaDesc", {error: e}), t.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kMediaDescError)
                })), this.state = n.ENUM_PUBLISH_STATE.waitingOffserRsp, this.logger.info("zp.osd.0 " + this.streamId + " call success")
            }, e.prototype.onRecvMediaDescription = function (e, t, r) {
                this.logger.info("zp.ormd.0 " + this.streamId + " received"), this.state == n.ENUM_PUBLISH_STATE.waitingServerAnswer ? (this.stateNego = n.ENUM_PUBLISH_STATE_NEGO.waitingCandidate, this.logger.info("zp.orm.0 " + this.streamId + " received stateNego:waitingCandidate"), null != this.waitingAnswerTimer && (clearTimeout(this.waitingAnswerTimer), this.waitingAnswerTimer = null), this.dataReport.addEvent(this.reportSeq, "RecvMediaDesc"), this.dataReport.addEvent(this.streamReportSeq, "RecvMediaDesc"), this.signal.sendMediaDescAck(e, this.sessionId, 0), 1 == r.type ? this.onGetRemoteOfferSuccess(r.sdp) : this.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kMediaDescError)) : this.logger.info("zp.ormd.0 " + this.streamId + " current state " + this.state + " not allowed")
            }, e.prototype.onGetRemoteOfferSuccess = function (e) {
                var t, r, o = this;
                if (48e3 !== this.videoInfo.audioBitrate && (e = e.replace(/maxaveragebitrate=(\d+)/, "maxaveragebitrate=" + this.videoInfo.audioBitrate)), this.logger.info("zp.oro.0 " + this.streamId + NaN + this.localSdpRevert), /m=video[\s\S]*m=audio/.test(e) && (this.remoteSdpRevert = !0), this.localSdpRevert !== this.remoteSdpRevert) {
                    var i = void 0, s = void 0, a = void 0;
                    if (this.remoteSdpRevert) {
                        s = (t = [/[\s\S]*m=audio/.exec(e)[0].replace("m=video", ""), /m=video[\s\S]*m=audio/.exec(e)[0].replace("m=video", ""), /m=audio[\s\S]*/.exec(e)[0]])[1], a = t[2];
                        var d = /a=group:BUNDLE\s+(\w+)\s+(\w+)/.exec(i = t[0]);
                        e = (i = i.replace(/a=group:BUNDLE\s+(\w+)\s+(\w+)/, "a=group:BUNDLE " + d[2] + " " + d[1])) + a + s
                    } else {
                        s = (r = [/[\s\S]*m=audio/.exec(e)[0].replace("m=audio", ""), /m=video[\s\S]*/.exec(e)[0], /m=audio[\s\S]*m=video/.exec(e)[0].replace("m=video", "")])[1], a = r[2];
                        d = /a=group:BUNDLE\s+(\w+)\s+(\w+)/.exec(i = r[0]);
                        e = (i = i.replace(/a=group:BUNDLE\s+(\w+)\s+(\w+)/, "a=group:BUNDLE " + d[2] + " " + d[1])) + s + a
                    }
                    this.localSdpRevert = !1, this.remoteSdpRevert = !1
                }
                if (this.videoInfo.bitRate > 0) {
                    e = e.replace(/AS:(\d+)/, "AS:" + 2 * this.videoInfo.bitRate);
                    var c = this.peerConnection.getSenders().find((function (e) {
                        return e.track && "video" === e.track.kind
                    })), l = c.getParameters();
                    l.encodings || (l.encodings = [{}]), l.encodings[0].maxBitrate = 1e3 * this.videoInfo.bitRate, c.setParameters(l)
                }
                this.logger.info("zp.oro.0 " + this.streamId + " remoteSdp:", e);
                var g = {
                    type: "answer", sdp: e, toJSON: function () {
                    }
                };
                this.dataReport.eventStart(this.reportSeq, "SetRemoteDescription"), this.dataReport.eventStart(this.streamReportSeq, "SetRemoteDescription"), this.peerConnection.setRemoteDescription(new RTCSessionDescription(g)).then((function () {
                    o.logger.info("zp.oro.0 " + o.streamId + " set success"), o.dataReport.eventEnd(o.reportSeq, "SetRemoteDescription"), o.dataReport.eventEnd(o.streamReportSeq, "SetRemoteDescription")
                }), (function (e) {
                    o.logger.error("zp.oro.0 " + o.streamId + " failed: " + e.toString()), o.dataReport.eventEndWithMsg(o.reportSeq, "SetRemoteDescription", {error: e.toString()}), o.dataReport.eventEndWithMsg(o.streamReportSeq, "SetRemoteDescription", {error: e.toString()}), o.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kSetRemoteDescError, !0)
                })), this.state = n.ENUM_PUBLISH_STATE.waitingServerICE, this.waitingICETimer = setTimeout((function () {
                    o.state == n.ENUM_PUBLISH_STATE.waitingServerICE && (o.logger.error("zp.orod.0 " + o.streamId + " waiting server timeout"), o.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kCandidateError))
                }), this.waitingICETimeInterval), this.logger.debug("zp.oro.0 " + this.streamId + " call success")
            }, e.prototype.onIceConnectionStateChange = function (e) {
                var t = this;
                this.state != n.ENUM_PUBLISH_STATE.stop && null != this.peerConnection && (this.logger.info("zp.oics.0 " + this.streamId + " stateChanged " + this.peerConnection.iceConnectionState), "connected" === this.peerConnection.iceConnectionState ? (this.logger.info("zp.oics.0 " + this.streamId + " connected state " + this.state), this.dataReport.eventEnd(this.reportSeq, "IceConnected"), this.dataReport.eventEnd(this.streamReportSeq, "IceConnected"), this.stateNego = n.ENUM_PUBLISH_STATE_NEGO.iceConnected, this.logger.info("zp.oisc.0 " + this.streamId + " stateNego:iceConnected"), this.negoTimer && (clearTimeout(this.negoTimer), this.negoTimer = null), this.publishEvent ? this.publishSuccess() : (this.firstGetStatsTimer && clearTimeout(this.firstGetStatsTimer), this.firstGetStatsTimer = null, this.firstGetStatsTimer = setTimeout((function () {
                    t.logger.info("zp.oisc.0 get first stats state " + t.state), t.state !== n.ENUM_PUBLISH_STATE.publishing && t.peerConnection.getStats().then((function (e) {
                        t.logger.info("zp.oisc.0 get first stats suc"), e.size > 0 && t.publishSuccess()
                    }))
                }), 1e3))) : "closed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceClosed"), this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)) : "failed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceFailed"), this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)) : "disconnected" === this.peerConnection.iceConnectionState && (this.dataReport.addEvent(this.reportSeq, "IceDisconnected"), this.stateNego = n.ENUM_PUBLISH_STATE_NEGO.iceDisconnected, this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState)))
            }, e.prototype.onIceCandidate = function (e) {
                if (this.logger.info("zp.oic.0 " + this.streamId + " candidate" + e.candidate), e.candidate) if (this.logger.info("zp.oic.0 " + this.streamId + " candidate" + e.candidate.candidate), this.state < n.ENUM_PUBLISH_STATE.connecting || this.state == n.ENUM_PUBLISH_STATE.stop) this.candidateInfo.push({
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
                this.logger.info("zp.sci.0 " + this.streamId + " called"), !(e = e.filter((function (e) {
                    return e.candidate.indexOf("relay") > 0
                }))) || e.length < 1 ? this.logger.info("zp.sci.0 " + this.streamId + " cancelled") : (this.dataReport.eventStart(this.reportSeq, "SendIceCandidate"), this.dataReport.eventStart(this.streamReportSeq, "SendIceCandidate"), this.stateNego !== n.ENUM_PUBLISH_STATE_NEGO.iceConnected && (this.stateNego = n.ENUM_PUBLISH_STATE_NEGO.sendCandidate), this.logger.info("zp.sci.0 " + this.streamId + " stateNego:sendCandidate"), this.signal.sendCandidateInfo(n.getSeq(), this.sessionId, e, (function (e, r, o) {
                    t.logger.info("zp.sci.0 " + t.streamId + " send success"), t.dataReport.eventEnd(t.reportSeq, "SendIceCandidate"), t.dataReport.eventEnd(t.streamReportSeq, "SendIceCandidate")
                }), (function (e, r) {
                    t.logger.error("zp.sci.0 " + t.streamId + " failed to send: " + e.toString()), t.dataReport.eventEndWithMsg(t.reportSeq, "SendIceCandidate", {error: e}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "SendIceCandidate", {error: e}), t.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kCandidateError)
                })))
            }, e.prototype.onConnectionStateChange = function (e) {
                this.logger.info("zp.ocs.0 " + this.streamId + " called " + e.target.signalingState)
            }, e.prototype.onRecvCandidateInfo = function (e, t, r) {
                var o = this;
                if (this.logger.info("zp.oci.0 " + this.streamId + " received " + JSON.stringify(r.infos)), this.state == n.ENUM_PUBLISH_STATE.waitingServerICE) {
                    null != this.waitingICETimer && (clearTimeout(this.waitingICETimer), this.waitingICETimer = null), this.dataReport.addEvent(this.reportSeq, "RecvIceCandidate"), this.dataReport.addEvent(this.streamReportSeq, "RecvIceCandidate"), this.signal.sendCandidateInfoAck(e, this.sessionId, 0), this.sendCandidateInfo(this.candidateInfo), this.candidateInfo = [];
                    for (var i = 0; i < r.infos.length; i++) {
                        var s = {
                            sdpMid: r.infos[i].sdpMid,
                            sdpMLineIndex: r.infos[i].sdpMLineIndex,
                            candidate: r.infos[i].candidate
                        };
                        this.logger.debug("zp.orci.0 " + this.streamId + " candidate " + s.candidate), this.peerConnection.addIceCandidate(new RTCIceCandidate(s)).then((function () {
                            o.logger.info("zp.oci.0 " + o.streamId + " add success")
                        }), (function (e) {
                            o.logger.error("zp.oci.0 " + o.streamId + " add error " + e.toString()), o.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kCandidateError, !0)
                        }))
                    }
                    this.state = n.ENUM_PUBLISH_STATE.connecting, this.dataReport.eventStart(this.reportSeq, "IceConnected"), this.dataReport.eventStart(this.streamReportSeq, "IceConnected")
                } else this.logger.info("zp.oci.0 " + this.streamId + " current state " + this.state + " not allowed")
            }, e.prototype.onRecvCloseSession = function (e, t, r) {
                this.logger.info("zp.orcs.0 " + this.streamId + " reason: " + r.reason), this.dataReport.addEvent(this.reportSeq, "RecvCloseSession"), this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                var o = JSON.parse(JSON.stringify(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishSessionClosedError));
                o.msg += " reason:" + r.reason + (r.err_info && JSON.parse(r.err_info).action ? "action:" + JSON.parse(r.err_info).action : ""), this.negoTimer && clearTimeout(this.negoTimer);
                var i = 1 * r.reason,
                    s = r.err_info && JSON.parse(r.err_info).action ? JSON.parse(r.err_info).action : null,
                    n = ![4, 8, 10, 11, 12, 14, 26, 27].includes(i) && 5 != s && 2 != s;
                this.publishStateUpdateError(o, n)
            }, e.prototype.onRecvResetSession = function (e, t, r) {
                if (this.logger.info("zp.orrs.0 " + this.streamId + " received "), t == this.sessionId) {
                    this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                    var o = u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishSessionClosedError;
                    this.negoTimer && clearTimeout(this.negoTimer), this.publishStateUpdateError(o)
                } else this.logger.error("zp.orrs.0 " + this.streamId + " cannot find session")
            }, e.prototype.onRecvPublishEvent = function (e, t, r) {
                this.logger.info("zp.orpe.0 " + this.streamId + " received"), this.publishEvent = !0, this.firstGetStatsTimer && (clearTimeout(this.firstGetStatsTimer), this.firstGetStatsTimer = null), this.stateNego === n.ENUM_PUBLISH_STATE_NEGO.iceConnected && 0 == r.event && this.publishSuccess()
            }, e.prototype.onRecvClientInfo = function (e, t, r) {
                this.stateCenter.clientIP !== r.clientip && this.logger.warn("zp.orci.0 client ip changed " + this.stateCenter.clientIP + " " + r.clientip), this.stateCenter.clientIP = r.clientip
            }, e.prototype.checkPublishConnectionFailedState = function (e) {
                this.logger.info("zp.oics.0 streamID " + this.streamId, " state " + this.state + " connectionState " + e), this.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kMediaConnectionError)
            }, e.prototype.setPublishQualityTimer = function () {
                var e = this;
                null == this.qualityTimer && (this.logger.info("zp.spq.0 " + this.streamId + " called"), this.clearPublishQualityTimer(), this.qualityTimer = setInterval((function () {
                    e.peerConnectionGetStats()
                }), this.qualityTimeInterval), this.lastPublishStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    videoPacketsSent: 0,
                    audioPacketsSent: 0,
                    audioRetransmittedPacketsSent: 0,
                    videoTime: (new Date).getTime(),
                    audioTime: (new Date).getTime(),
                    time: (new Date).getTime(),
                    audioBytesSent: 0,
                    videoBytesSent: 0,
                    framesEncoded: 0,
                    framesSent: 0
                }, this.qualitySeq = n.getSeq(), this.qualityCount = 0)
            }, e.prototype.peerConnectionGetStats = function (e) {
                var t = this;
                if (this.peerConnection) {
                    var r = [this.peerConnection.getStats(null)];
                    "Chrome" == l.ClientUtil.getBrowser() && r.push(new Promise((function (e, r) {
                        t.peerConnection.getStats((function (t) {
                            return e(t)
                        }), (function (e) {
                            return r(e)
                        }))
                    }))), Promise.all(r).then((function (r) {
                        var o = t.getPublishStats(r[0], r[1]);
                        e && e(o, r[0], r[1])
                    })).catch((function (e) {
                        t.logger.info("zp.spq.0 " + t.streamId + " getStats error " + e.toString())
                    }))
                }
            }, e.prototype.getPublishStats = function (e, t) {
                var r = this;
                if (e) {
                    for (var o, i = document.querySelectorAll("video, audio"), s = 0; s < i.length; s++) i[s].srcObject === this.localStream && (o = i[s]);
                    var n = {
                        audioCodec: "opus",
                        audioTargetBitrate: this.videoInfo.audioBitrate / 1e3 || 0,
                        audioBitrate: 0,
                        videoTargetBitrate: this.videoInfo.bitRate || 0,
                        videoTargetFPS: this.videoInfo.frameRate || 0,
                        videoBitrate: 0,
                        audioFPS: 0,
                        audioLevel: 0,
                        audioInputLevel: 0,
                        audioPacketsLost: 0,
                        audioPacketsLostRate: 0,
                        sendLevel: 0,
                        samplingRate: 0,
                        videoFPS: 0,
                        nackCount: 0,
                        pliCount: 0,
                        audioQuality: 0,
                        videoQuality: 0,
                        frameHeight: 0,
                        frameWidth: 0,
                        videoTransferFPS: 0,
                        videoPacketsLost: 0,
                        videoPacketsLostRate: 0,
                        totalRoundTripTime: 0,
                        currentRoundTripTime: 0,
                        googBandwidthLimitedResolution: void 0,
                        videoCodecName: "",
                        audioCodecName: "",
                        googCpuLimitedResolution: void 0,
                        googAvailableSendBandwidth: 0,
                        googActualEncBitrate: 0,
                        googTargetEncBitrate: 0,
                        googFrameWidthInput: 0,
                        googFrameHeightInput: 0,
                        googFrameRateInput: 0,
                        codecImplementationName: "",
                        videoMuteState: this.localStream.getVideoTracks().length > 0 && this.localStream.getVideoTracks()[0].enabled ? "0" : "1",
                        audioMuteState: this.localStream.getAudioTracks().length > 0 && this.localStream.getAudioTracks()[0].enabled ? "0" : "1",
                        muted: o ? o.muted : void 0,
                        paused: o ? o.paused : void 0,
                        volume: o ? o.volume : void 0,
                        sinkId: o ? o.sinkId : void 0
                    }, d = this.lastPublishStats.time, c = 0;
                    e.forEach((function (e) {
                        if (("outbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesSent) && "audio" == e.mediaType) 0 != d && (n.audioBitrate = 8 * (e.bytesSent - r.lastPublishStats.audioBytesSent) / (e.timestamp - d), n.audioFPS = (e.packetsSent - (e.retransmittedPacketsSent - r.lastPublishStats.audioRetransmittedPacketsSent) - r.lastPublishStats.audioPacketsSent) / (e.timestamp - d) * 1e3), n.audioBitrate < 0 && (n.audioBitrate = 0), r.lastPublishStats.audioBytesSent = e.bytesSent, r.lastPublishStats.time = e.timestamp, r.lastPublishStats.audioPacketsSentTimeStamp = e.packetsSent - r.lastPublishStats.audioPacketsSent, r.lastPublishStats.audioPacketsSent = e.packetsSent, r.lastPublishStats.audioRetransmittedPacketsSent = e.retransmittedPacketsSent; else if (("outbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesSent) && "video" == e.mediaType) 0 != d && (n.videoBitrate = 8 * (e.bytesSent - r.lastPublishStats.videoBytesSent) / (e.timestamp - d), n.videoFPS = 1e3 * (e.framesEncoded - r.lastPublishStats.framesEncoded) / (e.timestamp - d)), n.videoBitrate < 0 && (n.videoBitrate = 0), n.videoFPS < 0 && (n.videoFPS = 0), n.nackCount = e.nackCount, n.pliCount = e.pliCount, r.lastPublishStats.videoBytesSent = e.bytesSent, r.lastPublishStats.framesEncoded = e.framesEncoded, r.lastPublishStats.time = e.timestamp, r.lastPublishStats.videoPacketsSentTimeStamp = e.packetsSent - r.lastPublishStats.videoPacketsSent, r.lastPublishStats.videoPacketsSent = e.packetsSent; else if ("remote-inbound-rtp" == e.type && "video" == e.kind) {
                            e.packetsLost > 0 && (n.videoPacketsLost = e.packetsLost);
                            var t = e.packetsLost - r.lastPublishStats.videoPacketsLost;
                            n.videoPacketsLostRate = t > 0 ? t / r.lastPublishStats.videoPacketsSentTimeStamp : 0, e.packetsLost > 0 && (r.lastPublishStats.videoPacketsLost = e.packetsLost), r.lastPublishStats.videoTime = e.timestamp
                        } else if ("remote-inbound-rtp" == e.type && "audio" == e.kind) {
                            e.packetsLost > 0 && (n.audioPacketsLost = e.packetsLost);
                            var o = e.packetsLost - r.lastPublishStats.audioPacketsLost;
                            n.audioPacketsLostRate = o > 0 ? o / r.lastPublishStats.audioPacketsSentTimeStamp : 0, e.packetsLost > 0 && (r.lastPublishStats.audioPacketsLost = e.packetsLost), r.lastPublishStats.audioTime = e.timestamp
                        } else "media-source" == e.type && ("audio" == e.kind || e.id.toLowerCase().indexOf("audio") >= 0) ? (n.audioLevel = e.audioLevel, n.sendLevel = e.totalAudioEnergy, n.audioInputLevel = 32767 * e.totalAudioEnergy, n.samplingRate = e.totalSamplesDuration) : "track" == e.type && ("video" == e.kind || e.id.indexOf("video") >= 0 || e.frameWidth) ? (n.frameHeight = e.frameHeight, n.frameWidth = e.frameWidth, 0 != d && (n.videoTransferFPS = 1e3 * (e.framesSent - r.lastPublishStats.framesSent) / (e.timestamp - d)), n.videoTransferFPS < 0 && (n.videoTransferFPS = 0), r.lastPublishStats.framesSent = e.framesSent) : "candidate-pair" == e.type && (null != e.totalRoundTripTime && (n.totalRoundTripTime = e.totalRoundTripTime), null != e.currentRoundTripTime && (n.currentRoundTripTime = e.currentRoundTripTime, c = 1e3 * n.currentRoundTripTime))
                    })), t && t.result().forEach((function (e) {
                        "ssrc" == e.type && e.names().indexOf("googBandwidthLimitedResolution") >= 0 && (n.googBandwidthLimitedResolution = e.stat("googBandwidthLimitedResolution")), "ssrc" == e.type && "video" == e.stat("mediaType") && e.names().indexOf("googCodecName") >= 0 && (n.videoCodecName = e.stat("googCodecName")), "ssrc" == e.type && "audio" == e.stat("mediaType") && e.names().indexOf("googCodecName") >= 0 && (n.audioCodecName = e.stat("googCodecName")), "ssrc" == e.type && e.names().indexOf("googCpuLimitedResolution") >= 0 && (n.googCpuLimitedResolution = e.stat("googCpuLimitedResolution")), "ssrc" == e.type && e.names().indexOf("googFrameWidthInput") >= 0 && (n.googFrameWidthInput = e.stat("googFrameWidthInput")), "ssrc" == e.type && e.names().indexOf("googFrameHeightInput") >= 0 && (n.googFrameHeightInput = e.stat("googFrameHeightInput")), "ssrc" == e.type && e.names().indexOf("googFrameRateInput") >= 0 && (n.googFrameRateInput = e.stat("googFrameRateInput")), "ssrc" == e.type && e.names().indexOf("codecImplementationName") >= 0 && (n.codecImplementationName = e.stat("codecImplementationName")), "VideoBwe" == e.type && e.names().indexOf("googAvailableSendBandwidth") >= 0 && (n.googAvailableSendBandwidth = e.stat("googAvailableSendBandwidth")), "VideoBwe" == e.type && e.names().indexOf("googActualEncBitrate") >= 0 && (n.googActualEncBitrate = e.stat("googActualEncBitrate")), "VideoBwe" == e.type && e.names().indexOf("googTargetEncBitrate") >= 0 && (n.googTargetEncBitrate = e.stat("googTargetEncBitrate")), "VideoBwe" == e.type && e.names().indexOf("googRetransmitBitrate") >= 0 && (n.googRetransmitBitrate = e.stat("googRetransmitBitrate"))
                    })), "chrome" === a.browserDetails.browser && this.handleEncBitrate(Number.parseInt(n.googTargetEncBitrate), Number.parseInt(n.googActualEncBitrate), Number.parseInt(n.googRetransmitBitrate)), n.audioQuality = l.ClientUtil.getNetQuality(c, n.audioPacketsLostRate), n.videoQuality = l.ClientUtil.getNetQuality(c, n.videoPacketsLostRate), 0 !== d && this.uploadPublishQuality(n);
                    var u = {
                        video: {
                            videoBitrate: n.videoBitrate,
                            videoFPS: n.videoFPS,
                            videoTransferFPS: n.videoTransferFPS,
                            frameHeight: n.frameHeight,
                            frameWidth: n.frameWidth,
                            muteState: n.videoMuteState,
                            videoQuality: n.videoQuality,
                            videoPacketsLost: n.videoPacketsLost,
                            videoPacketsLostRate: n.videoPacketsLostRate
                        },
                        audio: {
                            audioBitrate: n.audioBitrate,
                            audioCodec: n.audioCodec,
                            muteState: n.audioMuteState,
                            audioQuality: n.audioQuality,
                            audioPacketsLost: n.audioPacketsLost,
                            audioPacketsLostRate: n.audioPacketsLostRate,
                            audioFPS: n.audioFPS
                        },
                        nackCount: n.nackCount,
                        pliCount: n.pliCount,
                        totalRoundTripTime: n.totalRoundTripTime,
                        currentRoundTripTime: n.currentRoundTripTime
                    };
                    return void 0 !== n.videoPacketsLost && (u.video.videoPacketsLost = n.videoPacketsLost, u.video.videoPacketsLostRate = n.videoPacketsLostRate, u.audio.audioPacketsLost = n.audioPacketsLost, u.audio.audioPacketsLostRate = n.audioPacketsLostRate), void 0 !== n.muted && (u.muted = n.muted, u.paused = n.paused, u.volume = n.volume, u.sinkId = n.sinkId), void 0 !== n.googBandwidthLimitedResolution && (u.googBandwidthLimitedResolution = n.googBandwidthLimitedResolution, u.video.googCodecName = n.videoCodecName, u.audio.googCodecName = n.audioCodecName, u.googCpuLimitedResolution = n.googCpuLimitedResolution, u.googFrameWidthInput = n.googFrameWidthInput, u.googFrameHeightInput = n.googFrameHeightInput, u.googFrameRateInput = n.googFrameRateInput, u.codecImplementationName = n.codecImplementationName, u.googAvailableSendBandwidth = n.googAvailableSendBandwidth, u.googActualEncBitrate = n.googActualEncBitrate, u.googTargetEncBitrate = n.googTargetEncBitrate), 0 !== d && this.onPublishQualityUpdate(this.streamId, u, e, t), u
                }
            }, e.prototype.uploadPublishQuality = function (e) {
                var t = this;
                if (this.qualityUpload) {
                    var r = Date.parse(new Date + "");
                    (0 == this.qualityUploadLastTime || r - this.qualityUploadLastTime >= this.qualityUploadInterval) && (e.stream_type = "publish", e.stream_id = this.streamId, e.timeStamp = r / 1e3, this.logger.info("zp.upq.0 " + this.streamId + " upload" + JSON.stringify(e)), this.signal.QualityReport(n.getSeq(), this.sessionId, e, (function (e, r, o) {
                        void 0 !== o.report && (t.qualityUpload = o.report, t.qualityUploadInterval = o.report_interval_ms)
                    }), (function (e, r) {
                        t.logger.info("zp.upq.0 " + t.streamId + " upload failed " + e)
                    })), this.qualityUploadLastTime = r)
                }
            }, e.prototype.stopPublish = function () {
                if (this.logger.info("zp.sp.0.1 " + this.streamId + " called"), Object.keys(this.streamCenter.publisherList).length = 1) for (var e in this.streamCenter.playerList) {
                    var t = this.streamCenter.playerList[e].player;
                    t.state == n.ENUM_PLAY_STATE.playing && t.broadcasterStatus == n.ENUM_BROADCASTER_STATUS.start && (this.signal && this.signal.sendBroadcasterStatus(n.getSeq(), t.sessionId, 0), t.broadcasterStatus = n.ENUM_BROADCASTER_STATUS.stop)
                }
                this.stopMixingAudio(), this.stopMixingBuffer(), this.stopEffect(), this.sessionId && !this.closeSessionSignal && this.signal.sendCloseSession(n.getSeq(), this.sessionId, 0), this.dataReport.eventEndWithMsg(this.streamReportSeq, "PublishState", {state: this.state + ""}), this.dataReport.addEvent(this.streamReportSeq, "StopPublish"), this.dataReport.addMsgExt(this.streamReportSeq, {
                    stream: this.streamId,
                    sessionId: this.sessionId
                }), this.dataReport.addMsgInfo(this.streamReportSeq, {itemtype: "RTCPublishStream"}), this.dataReport.uploadReport(this.streamReportSeq, "RTCPublishStream"), this.resetPublish()
            }, e.prototype.onPublishStateUpdate = function (e, t, r, o) {
            }, e.prototype.onPublishQualityUpdate = function (e, t, r, o) {
            }, e.prototype.onDisconnect = function () {
                this.logger.info("zp.od.0 " + this.streamId + " call"), this.logger.info("zp.od.0 " + this.streamId + " websocket disconnect"), this.dataReport.addEvent(this.reportSeq, "OnDisconnect"), this.publishStateUpdateError(u.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kWebsocketDisconnectedError)
            }, e.prototype.playEffect = function (e, t, r, o) {
                if (this.logger.info("zp.pe.0 " + this.streamId + " call"), this.effectList.find((function (r) {
                    return r.effectID == e.effectID && r.audioBuffer == t
                }))) this.logger.warn("zp.pe.0 " + this.streamId + " effect alreadly exist "); else {
                    this.streamCenter.soundLevelDelegate && this.stopSoundLevel();
                    var i = new d.AudioMix(this.logger, this.ac, this.mediaEleSources);
                    i.localStream = this.localStream, i.peerConnection = this.peerConnection, i.audioBuffer = t, this.effectList.push({
                        audioMix: i,
                        effectID: e.effectID,
                        audioBuffer: t
                    }), i.playEffect(e.playTime, e.loop, !1, r, o), this.streamCenter.soundLevelDelegate && this.startSoundLevel(), this.logger.info("zp.pe.0 " + this.streamId + " play effect " + e.effectID + " success")
                }
            }, e.prototype.pauseEffect = function (e) {
                var t = this.effectList.find((function (t) {
                    return t.effectID == e
                }));
                if (t) this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), t.audioMix.pauseEffect(), this.streamCenter.soundLevelDelegate && this.startSoundLevel(), this.logger.info("zp.pe.1 " + this.streamId + " pause " + e + " success"); else {
                    if (void 0 !== e) return this.logger.error("zp.pe.1 " + this.streamId + " no effect ID found"), !1;
                    this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), this.effectList.forEach((function (e) {
                        return e.audioMix.pauseEffect()
                    })), this.streamCenter.soundLevelDelegate && this.startSoundLevel()
                }
                return !0
            }, e.prototype.resumeEffect = function (e) {
                var t = this.effectList.find((function (t) {
                    return t.effectID == e
                }));
                if (t) this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), t.audioMix.resumeEffect(), this.streamCenter.soundLevelDelegate && this.startSoundLevel(), this.logger.info("zp.pe.1 " + this.streamId + " resume" + e + " success"); else {
                    if (void 0 !== e) return this.logger.error("zp.pe.1 " + this.streamId + " no effect ID found"), !1;
                    this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), this.effectList.forEach((function (e) {
                        return e.audioMix.resumeEffect()
                    })), this.streamCenter.soundLevelDelegate && this.startSoundLevel()
                }
                return !1
            }, e.prototype.stopEffect = function (e) {
                var t = this.effectList.find((function (t) {
                    return t.effectID == e
                }));
                if (t) this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), t.audioMix.stopMixingAudio(), this.effectList.splice(this.effectList.indexOf(t), 1), this.streamCenter.soundLevelDelegate && this.startSoundLevel(), this.logger.info("zp.pe.1 " + this.streamId + " pause " + e + " success"); else {
                    if (void 0 !== e) return this.logger.error("zp.pe.1 " + this.streamId + " no effect ID found"), !1;
                    this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), this.effectList.forEach((function (e) {
                        return e.audioMix.stopMixingAudio()
                    })), this.effectList = [], this.streamCenter.soundLevelDelegate && this.startSoundLevel()
                }
                return !0
            }, e.prototype.startMixingAudio = function (e) {
                var t = this;
                return this.logger.info("zp.sma.0 " + this.streamId + " call"), this.localStream ? (this.micTrack || (this.micTrack = this.localStream.getAudioTracks().length > 0 ? this.localStream.getAudioTracks()[0] : null), e.forEach((function (e) {
                    if (t.audioMixList.find((function (t) {
                        return t.media == e
                    }))) t.logger.info("zp.sma.0 " + t.streamId + " mix audio already exist"); else {
                        t.streamCenter.soundLevelDelegate && t.stopSoundLevel();
                        var r = new d.AudioMix(t.logger, t.ac, t.mediaEleSources);
                        r.localStream = t.localStream, r.peerConnection = t.peerConnection, t.audioMixList.push({
                            audioMix: r,
                            media: e
                        }), r.startMixingAudio(e), t.streamCenter.soundLevelDelegate && t.startSoundLevel()
                    }
                })), !0) : (this.logger.error("zp.sma.0 localStream not found"), !1)
            }, e.prototype.stopMixingAudio = function (e) {
                var t = this;
                return this.logger.info("zp.sma.0.0 " + this.streamId + " call"), e ? e.forEach((function (e) {
                    for (var r = 0; r < t.audioMixList.length; r++) if (t.audioMixList[r].media == e) {
                        t.audioMixList[r].audioMix.stopMixingAudio() && t.audioMixList.splice(r--, 1);
                        break
                    }
                })) : (this.audioMixList.forEach((function (e) {
                    return e.audioMix.stopMixingAudio()
                })), this.audioMixList = []), !0
            }, e.prototype.mixingBuffer = function (e, t, r) {
                var o = this;
                if (this.logger.info("zp.mb.0 " + this.streamId + " call"), this.micTrack || (this.micTrack = this.localStream.getAudioTracks().length > 0 ? this.localStream.getAudioTracks()[0] : null), this.arrayBufferMap[e]) this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), this.arrayBufferMap[e].mixingBuffer(t, (function () {
                    o.streamCenter.soundLevelDelegate && o.startSoundLevel(), r && r()
                })); else {
                    this.streamCenter.soundLevelDelegate && this.stopSoundLevel();
                    var i = new d.AudioMix(this.logger, this.ac, this.mediaEleSources);
                    i.localStream = this.localStream, i.peerConnection = this.peerConnection, this.arrayBufferMap[e] = i, i.mixingBuffer(t, (function () {
                        o.streamCenter.soundLevelDelegate && o.startSoundLevel(), r && r()
                    }))
                }
            }, e.prototype.stopMixingBuffer = function (e) {
                if (e && this.arrayBufferMap[e]) return this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), this.arrayBufferMap[e].stopMingBuffer(), delete this.arrayBufferMap[e], this.streamCenter.soundLevelDelegate && this.startSoundLevel(), !0;
                if (void 0 === e) {
                    for (var t in this.streamCenter.soundLevelDelegate && this.stopSoundLevel(), this.arrayBufferMap) this.arrayBufferMap[t].stopMingBuffer();
                    return this.streamCenter.soundLevelDelegate && this.startSoundLevel(), !0
                }
                return this.logger.warn("zp.smb.0 " + this.streamId + " arrayBuffer no found"), !1
            }, e.prototype.setMixingAudioVolume = function (e, t) {
                this.logger.info("zp.sma.0.1 " + this.streamId + " call");
                var r = this.audioMixList.find((function (e) {
                    return e.media === t
                }));
                return r ? (r.audioMix.setMixingAudioVolume(e), this.logger.info("zp.sma.0.1 " + this.streamId + " call success"), !0) : (this.logger.error("zp.sma.0.1 " + this.streamId + " audio is not mixing"), !1)
            }, e.prototype.publishSuccess = function () {
                for (var e in this.logger.info("zp.ps.0 call"), this.state != n.ENUM_PUBLISH_STATE.publishing && this.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.start, this.streamId, {
                    code: 0,
                    message: ""
                }, !0), this.state = n.ENUM_PUBLISH_STATE.publishing, this.dataReport.eventStart(this.reportSeq, "PublishState"), this.dataReport.eventStart(this.streamReportSeq, "PublishState"), this.streamCenter.playerList) {
                    var t = this.streamCenter.playerList[e].player;
                    t.state == n.ENUM_PLAY_STATE.playing && t.broadcasterStatus == n.ENUM_BROADCASTER_STATUS.stop && (this.signal && this.signal.sendBroadcasterStatus(n.getSeq(), t.sessionId, 1), t.broadcasterStatus = n.ENUM_BROADCASTER_STATUS.start)
                }
                this.setPublishQualityTimer();
                var r = 2, o = 2;
                0 !== this.localStream.getVideoTracks().length && 1 == this.localStream.getVideoTracks()[0].enabled && (r = 0), 0 !== this.localStream.getAudioTracks().length && 1 == this.localStream.getAudioTracks()[0].enabled && (o = 0), this.signal.sendStreamStatus(n.getSeq(), this.sessionId, r, o, this.streamId), this.streamCenter.soundLevelDelegate && this.startSoundLevel(), this.logger.info("zp.ps.0 call success")
            }, e.prototype.startSoundLevel = function () {
                var e = this;
                if (this.logger.info("zp.ssl.0 call streamID: " + this.streamId), this.localStream && 0 != this.localStream.getAudioTracks().length) {
                    this.script && this.script.disconnect() && (this.script = null), this.mic && this.mic.disconnect() && (this.mic = null);
                    try {
                        this.mic = this.ac.createMediaStreamSource(this.localStream), this.script = this.ac.createScriptProcessor(4096, 1, 1), this.mic.connect(this.script), this.script.connect(this.ac.destination), this.script.onaudioprocess = function (t) {
                            for (var r = t.inputBuffer.getChannelData(0), o = 0, i = 0; i < r.length; i++) o < r[i] && (o = r[i]);
                            e.soundLevel = 100 * o
                        }, this.ac.resume()
                    } catch (e) {
                        this.logger.error("zp.ssl.0 " + this.streamId + " get sound level failed " + e)
                    }
                } else this.logger.info("zp.ssl.0 " + this.streamId + " local stream no found")
            }, e.prototype.stopSoundLevel = function () {
                this.logger.info("zp.ssl.0.1 call streamID: " + this.streamId), this.script && this.script.disconnect(), this.mic && this.mic.disconnect(), this.script = null, this.mic = null
            }, e.prototype.rebackMic = function () {
                var e = this;
                this.peerConnection && this.micTrack instanceof MediaStreamTrack && 0 == this.audioMixList.length && 0 == Object.keys(this.arrayBufferMap).length && 0 == this.effectList.length && (this.peerConnection.getSenders().find((function (t) {
                    return t.track.kind === e.micTrack.kind
                })).replaceTrack(this.micTrack), this.localStream.removeTrack(this.localStream.getAudioTracks()[0]), this.localStream.addTrack(this.micTrack))
            }, e.prototype.handleEncBitrate = function (e, t, r) {
                var o = this, i = 1e3 * this.videoInfo.bitRate, s = 0;
                if (t > 0) {
                    this.needIncMax || this.gotMax || (this.probeCount++, t >= .75 * e ? (this.probeCount >= 10 && this.initFitCnt >= .6 * this.probeCount && (this.gotMax = !0, this.targetRate = i), this.initFitCnt++) : this.probeCount >= 10 && this.initFitCnt / this.probeCount < .3 && (this.needIncMax = !0));
                    var n = l.ClientUtil.arrAvg(this.totalBitrateArray, t, 10);
                    if (this.needIncMax) if (n >= 1.05 * i) {
                        if (this.targetRate > i) {
                            var a = void 0;
                            n > e ? (a = n - e, this.targetRate -= a) : (a = n - i, this.targetRate -= a), this.targetRate = Math.max(this.targetRate, i), this.targetRate = Math.min(this.targetRate, 2 * i), s = this.targetRate
                        }
                    } else n < .8 * i && (0 === this.targetRate && (this.targetRate = e), this.targetRate >= i ? this.targetRate = this.targetRate + .08 * i : this.targetRate = 1.05 * this.targetRate, this.targetRate = Math.min(this.targetRate, 2 * i), s = this.targetRate)
                }
                if (r > 0 && r < i) {
                    var d = l.ClientUtil.arrAvg(this.totalRetransRateArray, r, 5);
                    if (this.needIncMax) {
                        if (d + t > 1.05 * i) {
                            a = d + t - i;
                            this.targetRate -= a, this.targetRate = Math.max(this.targetRate, i - d), s = this.targetRate
                        }
                    } else s = this.targetRate - d
                } else this.targetRate < i && (this.targetRate = i, s = this.targetRate);
                if (s > 0) {
                    s = l.ClientUtil.arrAvg(this.totalTargetRateArray, s, 5);
                    var c = this.peerConnection.getSenders().find((function (e) {
                        return e.track && "video" === e.track.kind
                    }));
                    if (!c) return;
                    var u = c.getParameters();
                    u.encodings || (u.encodings = [{}]), u.encodings[0].maxBitrate = s, c.setParameters(u).catch((function (e) {
                        o.logger.error("zp.heb.0 " + e)
                    }))
                }
            }, e.prototype.resetEncBitrate = function () {
                this.needIncMax = !1, this.probeCount = 0, this.gotMax = !1, this.initFitCnt = 0, this.targetRate = 0, this.totalBitrateArray = [], this.totalTargetRateArray = [], this.totalRetransRateArray = []
            }, e
        }();
        t.ZegoPublish = g
    }, function (e, t, r) {
        e.exports = function e(t, r, o) {
            function i(n, a) {
                if (!r[n]) {
                    if (!t[n]) {
                        if (s) return s(n, !0);
                        var d = new Error("Cannot find module '" + n + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var c = r[n] = {exports: {}};
                    t[n][0].call(c.exports, (function (e) {
                        return i(t[n][1][e] || e)
                    }), c, c.exports, e, t, r, o)
                }
                return r[n].exports
            }

            for (var s = !1, n = 0; n < o.length; n++) i(o[n]);
            return i
        }({
            1: [function (e, t, r) {
                "use strict";
                var o = (0, e("./adapter_factory.js").adapterFactory)({window: window});
                t.exports = o
            }, {"./adapter_factory.js": 2}], 2: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.adapterFactory = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.window,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            shimChrome: !0,
                            shimFirefox: !0,
                            shimEdge: !0,
                            shimSafari: !0
                        }, c = o.log, l = o.detectBrowser(t), u = {
                            browserDetails: l,
                            commonShim: d,
                            extractVersion: o.extractVersion,
                            disableLog: o.disableLog,
                            disableWarnings: o.disableWarnings
                        };
                    switch (l.browser) {
                        case"chrome":
                            if (!i || !i.shimPeerConnection || !r.shimChrome) return c("Chrome shim is not included in this adapter release."), u;
                            c("adapter.js shimming chrome."), u.browserShim = i, i.shimGetUserMedia(t), i.shimMediaStream(t), i.shimPeerConnection(t), i.shimOnTrack(t), i.shimAddTrackRemoveTrack(t), i.shimGetSendersWithDtmf(t), i.shimGetStats(t), i.shimSenderReceiverGetStats(t), i.fixNegotiationNeeded(t), d.shimRTCIceCandidate(t), d.shimConnectionState(t), d.shimMaxMessageSize(t), d.shimSendThrowTypeError(t), d.removeAllowExtmapMixed(t);
                            break;
                        case"firefox":
                            if (!n || !n.shimPeerConnection || !r.shimFirefox) return c("Firefox shim is not included in this adapter release."), u;
                            c("adapter.js shimming firefox."), u.browserShim = n, n.shimGetUserMedia(t), n.shimPeerConnection(t), n.shimOnTrack(t), n.shimRemoveStream(t), n.shimSenderGetStats(t), n.shimReceiverGetStats(t), n.shimRTCDataChannel(t), d.shimRTCIceCandidate(t), d.shimConnectionState(t), d.shimMaxMessageSize(t), d.shimSendThrowTypeError(t);
                            break;
                        case"edge":
                            if (!s || !s.shimPeerConnection || !r.shimEdge) return c("MS edge shim is not included in this adapter release."), u;
                            c("adapter.js shimming edge."), u.browserShim = s, s.shimGetUserMedia(t), s.shimGetDisplayMedia(t), s.shimPeerConnection(t), s.shimReplaceTrack(t), d.shimMaxMessageSize(t), d.shimSendThrowTypeError(t);
                            break;
                        case"safari":
                            if (!a || !r.shimSafari) return c("Safari shim is not included in this adapter release."), u;
                            c("adapter.js shimming safari."), u.browserShim = a, a.shimRTCIceServerUrls(t), a.shimCreateOfferLegacy(t), a.shimCallbacksAPI(t), a.shimLocalStreamsAPI(t), a.shimRemoteStreamsAPI(t), a.shimTrackEventTransceiver(t), a.shimGetUserMedia(t), d.shimRTCIceCandidate(t), d.shimMaxMessageSize(t), d.shimSendThrowTypeError(t), d.removeAllowExtmapMixed(t);
                            break;
                        default:
                            c("Unsupported browser!")
                    }
                    return u
                };
                var o = c(e("./utils")), i = c(e("./chrome/chrome_shim")), s = c(e("./edge/edge_shim")),
                    n = c(e("./firefox/firefox_shim")), a = c(e("./safari/safari_shim")), d = c(e("./common_shim"));

                function c(e) {
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
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = e("./getusermedia");
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
                }), r.shimMediaStream = function (e) {
                    e.MediaStream = e.MediaStream || e.webkitMediaStream
                }, r.shimOnTrack = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
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
                                t.stream.addEventListener("addtrack", (function (o) {
                                    var i = void 0;
                                    i = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find((function (e) {
                                        return e.track && e.track.id === o.track.id
                                    })) : {track: o.track};
                                    var s = new Event("track");
                                    s.track = o.track, s.receiver = i, s.transceiver = {receiver: i}, s.streams = [t.stream], r.dispatchEvent(s)
                                })), t.stream.getTracks().forEach((function (o) {
                                    var i = void 0;
                                    i = e.RTCPeerConnection.prototype.getReceivers ? r.getReceivers().find((function (e) {
                                        return e.track && e.track.id === o.id
                                    })) : {track: o};
                                    var s = new Event("track");
                                    s.track = o, s.receiver = i, s.transceiver = {receiver: i}, s.streams = [t.stream], r.dispatchEvent(s)
                                }))
                            }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
                        }
                    } else n.wrapPeerConnectionEvent(e, "track", (function (e) {
                        return e.transceiver || Object.defineProperty(e, "transceiver", {value: {receiver: e.receiver}}), e
                    }))
                }, r.shimGetSendersWithDtmf = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
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
                            e.RTCPeerConnection.prototype.addTrack = function (e, o) {
                                var i = r.apply(this, arguments);
                                return i || (i = t(this, e), this._senders.push(i)), i
                            };
                            var i = e.RTCPeerConnection.prototype.removeTrack;
                            e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                i.apply(this, arguments);
                                var t = this._senders.indexOf(e);
                                -1 !== t && this._senders.splice(t, 1)
                            }
                        }
                        var s = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function (e) {
                            var r = this;
                            this._senders = this._senders || [], s.apply(this, [e]), e.getTracks().forEach((function (e) {
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
                    } else if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
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
                        e.RTCPeerConnection.prototype.getStats = function (e, r, o) {
                            var i = this, s = arguments;
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
                                var d = function (e) {
                                    s[1](a(n(e)))
                                };
                                return t.apply(this, [d, arguments[0]])
                            }
                            return new Promise((function (e, r) {
                                t.apply(i, [function (t) {
                                    e(a(n(t)))
                                }, r])
                            })).then(r, o)
                        }
                    }
                }, r.shimSenderReceiverGetStats = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver) {
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
                            var i = e.RTCPeerConnection.prototype.getReceivers;
                            i && (e.RTCPeerConnection.prototype.getReceivers = function () {
                                var e = this, t = i.apply(this, []);
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
                            var s = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function () {
                                if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                                    var t = arguments[0], r = void 0, o = void 0, i = void 0;
                                    return this.getSenders().forEach((function (e) {
                                        e.track === t && (r ? i = !0 : r = e)
                                    })), this.getReceivers().forEach((function (e) {
                                        return e.track === t && (o ? i = !0 : o = e), e.track === t
                                    })), i || r && o ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : o ? o.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                                }
                                return s.apply(this, arguments)
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
                        var o = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function (t) {
                            var r = this;
                            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach((function (e) {
                                if (r.getSenders().find((function (t) {
                                    return t.track === e
                                }))) throw new DOMException("Track already exists.", "InvalidAccessError")
                            })), !this._reverseStreams[t.id]) {
                                var i = new e.MediaStream(t.getTracks());
                                this._streams[t.id] = i, this._reverseStreams[i.id] = t, t = i
                            }
                            o.apply(this, [t])
                        };
                        var i = e.RTCPeerConnection.prototype.removeStream;
                        e.RTCPeerConnection.prototype.removeStream = function (e) {
                            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
                        }, e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                            var o = this;
                            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                            var i = [].slice.call(arguments, 1);
                            if (1 !== i.length || !i[0].getTracks().find((function (e) {
                                return e === t
                            }))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                            var s = this.getSenders().find((function (e) {
                                return e.track === t
                            }));
                            if (s) throw new DOMException("Track already exists.", "InvalidAccessError");
                            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
                            var n = this._streams[r.id];
                            if (n) n.addTrack(t), Promise.resolve().then((function () {
                                o.dispatchEvent(new Event("negotiationneeded"))
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
                                var e = this, t = arguments, o = arguments.length && "function" == typeof arguments[0];
                                return o ? r.apply(this, [function (r) {
                                    var o = c(e, r);
                                    t[0].apply(null, [o])
                                }, function (e) {
                                    t[1] && t[1].apply(null, e)
                                }, arguments[2]]) : r.apply(this, arguments).then((function (t) {
                                    return c(e, t)
                                }))
                            }
                        }));
                        var s = e.RTCPeerConnection.prototype.setLocalDescription;
                        e.RTCPeerConnection.prototype.setLocalDescription = function () {
                            return arguments.length && arguments[0].type ? (arguments[0] = l(this, arguments[0]), s.apply(this, arguments)) : s.apply(this, arguments)
                        };
                        var d = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                            get: function () {
                                var e = d.get.apply(this);
                                return "" === e.type ? e : c(this, e)
                            }
                        }), e.RTCPeerConnection.prototype.removeTrack = function (e) {
                            var t = this;
                            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                            if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                            if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                            this._streams = this._streams || {};
                            var r = void 0;
                            Object.keys(this._streams).forEach((function (o) {
                                t._streams[o].getTracks().find((function (t) {
                                    return e.track === t
                                })) && (r = t._streams[o])
                            })), r && (1 === r.getTracks().length ? this.removeStream(this._reverseStreams[r.id]) : r.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
                        }
                    }

                    function c(e, t) {
                        var r = t.sdp;
                        return Object.keys(e._reverseStreams || []).forEach((function (t) {
                            var o = e._reverseStreams[t], i = e._streams[o.id];
                            r = r.replace(new RegExp(i.id, "g"), o.id)
                        })), new RTCSessionDescription({type: t.type, sdp: r})
                    }

                    function l(e, t) {
                        var r = t.sdp;
                        return Object.keys(e._reverseStreams || []).forEach((function (t) {
                            var o = e._reverseStreams[t], i = e._streams[o.id];
                            r = r.replace(new RegExp(o.id, "g"), i.id)
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
                        var o = t.apply(this, arguments);
                        return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(o) && this._shimmedLocalStreams[r.id].push(o) : this._shimmedLocalStreams[r.id] = [r, o], o
                    };
                    var r = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function (e) {
                        var t = this;
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach((function (e) {
                            if (t.getSenders().find((function (t) {
                                return t.track === e
                            }))) throw new DOMException("Track already exists.", "InvalidAccessError")
                        }));
                        var o = this.getSenders();
                        r.apply(this, arguments);
                        var i = this.getSenders().filter((function (e) {
                            return -1 === o.indexOf(e)
                        }));
                        this._shimmedLocalStreams[e.id] = [e].concat(i)
                    };
                    var o = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function (e) {
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], o.apply(this, arguments)
                    };
                    var i = e.RTCPeerConnection.prototype.removeTrack;
                    e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        var t = this;
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach((function (r) {
                            var o = t._shimmedLocalStreams[r].indexOf(e);
                            -1 !== o && t._shimmedLocalStreams[r].splice(o, 1), 1 === t._shimmedLocalStreams[r].length && delete t._shimmedLocalStreams[r]
                        })), i.apply(this, arguments)
                    }
                }
            }, {"../utils.js": 15, "./getdisplaymedia": 4, "./getusermedia": 5}], 4: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = function (e, t) {
                    e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof t ? e.navigator.mediaDevices.getDisplayMedia = function (r) {
                        return t(r).then((function (t) {
                            var o = r.video && r.video.width, i = r.video && r.video.height,
                                s = r.video && r.video.frameRate;
                            return r.video = {
                                mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: t,
                                    maxFrameRate: s || 3
                                }
                            }, o && (r.video.mandatory.maxWidth = o), i && (r.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(r)
                        }))
                    } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
                }
            }, {}], 5: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimGetUserMedia = function (e) {
                    var t = e && e.navigator;
                    if (t.mediaDevices) {
                        var r = i.detectBrowser(e), n = function (e) {
                            if ("object" !== (void 0 === e ? "undefined" : o(e)) || e.mandatory || e.optional) return e;
                            var t = {};
                            return Object.keys(e).forEach((function (r) {
                                if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                                    var i = "object" === o(e[r]) ? e[r] : {ideal: e[r]};
                                    void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                                    var s = function (e, t) {
                                        return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                                    };
                                    if (void 0 !== i.ideal) {
                                        t.optional = t.optional || [];
                                        var n = {};
                                        "number" == typeof i.ideal ? (n[s("min", r)] = i.ideal, t.optional.push(n), (n = {})[s("max", r)] = i.ideal, t.optional.push(n)) : (n[s("", r)] = i.ideal, t.optional.push(n))
                                    }
                                    void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[s("", r)] = i.exact) : ["min", "max"].forEach((function (e) {
                                        void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[s(e, r)] = i[e])
                                    }))
                                }
                            })), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                        }, a = function (e, i) {
                            if (r.version >= 61) return i(e);
                            if ((e = JSON.parse(JSON.stringify(e))) && "object" === o(e.audio)) {
                                var a = function (e, t, r) {
                                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                                };
                                a((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), a(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = n(e.audio)
                            }
                            if (e && "object" === o(e.video)) {
                                var d = e.video.facingMode;
                                d = d && ("object" === (void 0 === d ? "undefined" : o(d)) ? d : {ideal: d});
                                var c = r.version < 66;
                                if (d && ("user" === d.exact || "environment" === d.exact || "user" === d.ideal || "environment" === d.ideal) && (!t.mediaDevices.getSupportedConstraints || !t.mediaDevices.getSupportedConstraints().facingMode || c)) {
                                    delete e.video.facingMode;
                                    var l = void 0;
                                    if ("environment" === d.exact || "environment" === d.ideal ? l = ["back", "rear"] : "user" !== d.exact && "user" !== d.ideal || (l = ["front"]), l) return t.mediaDevices.enumerateDevices().then((function (t) {
                                        var r = (t = t.filter((function (e) {
                                            return "videoinput" === e.kind
                                        }))).find((function (e) {
                                            return l.some((function (t) {
                                                return e.label.toLowerCase().includes(t)
                                            }))
                                        }));
                                        return !r && t.length && l.includes("back") && (r = t[t.length - 1]), r && (e.video.deviceId = d.exact ? {exact: r.deviceId} : {ideal: r.deviceId}), e.video = n(e.video), s("chrome: " + JSON.stringify(e)), i(e)
                                    }))
                                }
                                e.video = n(e.video)
                            }
                            return s("chrome: " + JSON.stringify(e)), i(e)
                        }, d = function (e) {
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
                        if (t.getUserMedia = function (e, r, o) {
                            a(e, (function (e) {
                                t.webkitGetUserMedia(e, r, (function (e) {
                                    o && o(d(e))
                                }))
                            }))
                        }.bind(t), t.mediaDevices.getUserMedia) {
                            var c = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                            t.mediaDevices.getUserMedia = function (e) {
                                return a(e, (function (e) {
                                    return c(e).then((function (t) {
                                        if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach((function (e) {
                                            e.stop()
                                        })), new DOMException("", "NotFoundError");
                                        return t
                                    }), (function (e) {
                                        return Promise.reject(d(e))
                                    }))
                                }))
                            }
                        }
                    }
                };
                var i = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils.js")), s = i.log
            }, {"../utils.js": 15}], 6: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimRTCIceCandidate = function (e) {
                    if (!(!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)) {
                        var t = e.RTCIceCandidate;
                        e.RTCIceCandidate = function (e) {
                            if ("object" === (void 0 === e ? "undefined" : o(e)) && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                                var r = new t(e), i = n.default.parseCandidate(e.candidate), s = Object.assign(r, i);
                                return s.toJSON = function () {
                                    return {
                                        candidate: s.candidate,
                                        sdpMid: s.sdpMid,
                                        sdpMLineIndex: s.sdpMLineIndex,
                                        usernameFragment: s.usernameFragment
                                    }
                                }, s
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
                        }, o = function (e) {
                            var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                            if (null === t || t.length < 2) return -1;
                            var r = parseInt(t[1], 10);
                            return r != r ? -1 : r
                        }, i = function (e) {
                            var r = 65536;
                            return "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r
                        }, s = function (e, r) {
                            var o = 65536;
                            "firefox" === t.browser && 57 === t.version && (o = 65535);
                            var i = n.default.matchPrefix(e.sdp, "a=max-message-size:");
                            return i.length > 0 ? o = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== r && (o = 2147483637), o
                        }, d = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                            if (this._sctp = null, r(arguments[0])) {
                                var e = o(arguments[0]), t = i(e), n = s(arguments[0], e), a = void 0;
                                a = 0 === t && 0 === n ? Number.POSITIVE_INFINITY : 0 === t || 0 === n ? Math.max(t, n) : Math.min(t, n);
                                var c = {};
                                Object.defineProperty(c, "maxMessageSize", {
                                    get: function () {
                                        return a
                                    }
                                }), this._sctp = c
                            }
                            return d.apply(this, arguments)
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
                            var o = arguments[0], i = o.length || o.size || o.byteLength;
                            if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
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
                var i, s = e("sdp"), n = (i = s) && i.__esModule ? i : {default: i}, a = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("./utils"))
            }, {"./utils": 15, sdp: 17}], 7: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0}), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var o = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0, get: function () {
                        return o.shimGetUserMedia
                    }
                });
                var i = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0, get: function () {
                        return i.shimGetDisplayMedia
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
                    e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype) && Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                        get: function () {
                            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
                        }
                    }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
                    var o = (0, c.default)(e, t.version);
                    e.RTCPeerConnection = function (e) {
                        return e && e.iceServers && (e.iceServers = (0, a.filterIceServers)(e.iceServers, t.version), n.log("ICE servers after filtering:", e.iceServers)), new o(e)
                    }, e.RTCPeerConnection.prototype = o.prototype
                }, r.shimReplaceTrack = function (e) {
                    e.RTCRtpSender && !("replaceTrack" in e.RTCRtpSender.prototype) && (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
                };
                var s, n = function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }(e("../utils")), a = e("./filtericeservers"), d = e("rtcpeerconnection-shim"),
                    c = (s = d) && s.__esModule ? s : {default: s}
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
                            e.url && !e.urls && o.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                            var i = "string" == typeof t;
                            return i && (t = [t]), t = t.filter((function (e) {
                                if (0 === e.indexOf("stun:")) return !1;
                                var t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                                return t && !r ? (r = !0, !0) : t && !r
                            })), delete e.url, e.urls = i ? t[0] : t, !!t.length
                        }
                    }))
                };
                var o = function (e) {
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
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = e("./getusermedia");
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
                }), r.shimOnTrack = function (e) {
                    "object" === (void 0 === e ? "undefined" : o(e)) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                        get: function () {
                            return {receiver: this.receiver}
                        }
                    })
                }, r.shimPeerConnection = function (e) {
                    var t = n.detectBrowser(e);
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
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
                        var i = {
                            inboundrtp: "inbound-rtp",
                            outboundrtp: "outbound-rtp",
                            candidatepair: "candidate-pair",
                            localcandidate: "local-candidate",
                            remotecandidate: "remote-candidate"
                        }, s = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function (e, r, o) {
                            return s.apply(this, [e || null]).then((function (e) {
                                if (t.version < 53 && !r) try {
                                    e.forEach((function (e) {
                                        e.type = i[e.type] || e.type
                                    }))
                                } catch (t) {
                                    if ("TypeError" !== t.name) throw t;
                                    e.forEach((function (t, r) {
                                        e.set(r, Object.assign({}, t, {type: i[t.type] || t.type}))
                                    }))
                                }
                                return e
                            })).then(r, o)
                        }
                    }
                }, r.shimSenderGetStats = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && e.RTCRtpSender && (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))) {
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
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && e.RTCRtpSender && (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))) {
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
                    e.RTCPeerConnection && !("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function (e) {
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
                            var o = new DOMException("getDisplayMedia without video constraints is undefined");
                            return o.name = "NotFoundError", o.code = 8, Promise.reject(o)
                        }
                        return !0 === r.video ? r.video = {mediaSource: t} : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r)
                    })
                }
            }, {}], 13: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimGetUserMedia = function (e) {
                    var t = i.detectBrowser(e), r = e && e.navigator, s = e && e.MediaStreamTrack;
                    if (r.getUserMedia = function (e, t, o) {
                        i.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, o)
                    }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
                        var n = function (e, t, r) {
                            t in e && !(r in e) && (e[r] = e[t], delete e[t])
                        }, a = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                        if (r.mediaDevices.getUserMedia = function (e) {
                            return "object" === (void 0 === e ? "undefined" : o(e)) && "object" === o(e.audio) && (e = JSON.parse(JSON.stringify(e)), n(e.audio, "autoGainControl", "mozAutoGainControl"), n(e.audio, "noiseSuppression", "mozNoiseSuppression")), a(e)
                        }, s && s.prototype.getSettings) {
                            var d = s.prototype.getSettings;
                            s.prototype.getSettings = function () {
                                var e = d.apply(this, arguments);
                                return n(e, "mozAutoGainControl", "autoGainControl"), n(e, "mozNoiseSuppression", "noiseSuppression"), e
                            }
                        }
                        if (s && s.prototype.applyConstraints) {
                            var c = s.prototype.applyConstraints;
                            s.prototype.applyConstraints = function (e) {
                                return "audio" === this.kind && "object" === (void 0 === e ? "undefined" : o(e)) && (e = JSON.parse(JSON.stringify(e)), n(e, "autoGainControl", "mozAutoGainControl"), n(e, "noiseSuppression", "mozNoiseSuppression")), c.apply(this, [e])
                            }
                        }
                    }
                };
                var i = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils"))
            }, {"../utils": 15}], 14: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.shimLocalStreamsAPI = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection) {
                        if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                            return this._localStreams || (this._localStreams = []), this._localStreams
                        }), !("addStream" in e.RTCPeerConnection.prototype)) {
                            var t = e.RTCPeerConnection.prototype.addTrack;
                            e.RTCPeerConnection.prototype.addStream = function (e) {
                                var r = this;
                                this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getTracks().forEach((function (o) {
                                    return t.call(r, o, e)
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
                                var o = e.getTracks();
                                this.getSenders().forEach((function (e) {
                                    o.includes(e.track) && t.removeTrack(e)
                                }))
                            }
                        })
                    }
                }, r.shimRemoteStreamsAPI = function (e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
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
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection) {
                        var t = e.RTCPeerConnection.prototype, r = t.createOffer, i = t.createAnswer,
                            s = t.setLocalDescription, n = t.setRemoteDescription, a = t.addIceCandidate;
                        t.createOffer = function (e, t) {
                            var o = arguments.length >= 2 ? arguments[2] : arguments[0], i = r.apply(this, [o]);
                            return t ? (i.then(e, t), Promise.resolve()) : i
                        }, t.createAnswer = function (e, t) {
                            var r = arguments.length >= 2 ? arguments[2] : arguments[0], o = i.apply(this, [r]);
                            return t ? (o.then(e, t), Promise.resolve()) : o
                        };
                        var d = function (e, t, r) {
                            var o = s.apply(this, [e]);
                            return r ? (o.then(t, r), Promise.resolve()) : o
                        };
                        t.setLocalDescription = d, d = function (e, t, r) {
                            var o = n.apply(this, [e]);
                            return r ? (o.then(t, r), Promise.resolve()) : o
                        }, t.setRemoteDescription = d, d = function (e, t, r) {
                            var o = a.apply(this, [e]);
                            return r ? (o.then(t, r), Promise.resolve()) : o
                        }, t.addIceCandidate = d
                    }
                }, r.shimGetUserMedia = function (e) {
                    var t = e && e.navigator;
                    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                        var r = t.mediaDevices, o = r.getUserMedia.bind(r);
                        t.mediaDevices.getUserMedia = function (e) {
                            return o(s(e))
                        }
                    }
                    !t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, r, o) {
                        t.mediaDevices.getUserMedia(e).then(r, o)
                    }.bind(t))
                }, r.shimConstraints = s, r.shimRTCIceServerUrls = function (e) {
                    var t = e.RTCPeerConnection;
                    e.RTCPeerConnection = function (e, r) {
                        if (e && e.iceServers) {
                            for (var o = [], s = 0; s < e.iceServers.length; s++) {
                                var n = e.iceServers[s];
                                !n.hasOwnProperty("urls") && n.hasOwnProperty("url") ? (i.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (n = JSON.parse(JSON.stringify(n))).urls = n.url, delete n.url, o.push(n)) : o.push(e.iceServers[s])
                            }
                            e.iceServers = o
                        }
                        return new t(e, r)
                    }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                        get: function () {
                            return t.generateCertificate
                        }
                    })
                }, r.shimTrackEventTransceiver = function (e) {
                    "object" === (void 0 === e ? "undefined" : o(e)) && e.RTCPeerConnection && "receiver" in e.RTCTrackEvent.prototype && !e.RTCTransceiver && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
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
                            var o = this.getTransceivers().find((function (e) {
                                return "video" === e.receiver.track.kind
                            }));
                            !1 === e.offerToReceiveVideo && o ? "sendrecv" === o.direction ? o.setDirection ? o.setDirection("sendonly") : o.direction = "sendonly" : "recvonly" === o.direction && (o.setDirection ? o.setDirection("inactive") : o.direction = "inactive") : !0 !== e.offerToReceiveVideo || o || this.addTransceiver("video")
                        }
                        return t.apply(this, arguments)
                    }
                };
                var i = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(e("../utils"));

                function s(e) {
                    return e && void 0 !== e.video ? Object.assign({}, e, {video: i.compactObject(e.video)}) : e
                }
            }, {"../utils": 15}], 15: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {value: !0});
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                r.extractVersion = n, r.wrapPeerConnectionEvent = function (e, t, r) {
                    if (e.RTCPeerConnection) {
                        var o = e.RTCPeerConnection.prototype, i = o.addEventListener;
                        o.addEventListener = function (e, o) {
                            if (e !== t) return i.apply(this, arguments);
                            var s = function (e) {
                                var t = r(e);
                                t && o(t)
                            };
                            return this._eventMap = this._eventMap || {}, this._eventMap[o] = s, i.apply(this, [e, s])
                        };
                        var s = o.removeEventListener;
                        o.removeEventListener = function (e, r) {
                            if (e !== t || !this._eventMap || !this._eventMap[r]) return s.apply(this, arguments);
                            var o = this._eventMap[r];
                            return delete this._eventMap[r], s.apply(this, [e, o])
                        }, Object.defineProperty(o, "on" + t, {
                            get: function () {
                                return this["_on" + t]
                            }, set: function (e) {
                                this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                            }, enumerable: !0, configurable: !0
                        })
                    }
                }, r.disableLog = function (e) {
                    return "boolean" != typeof e ? new Error("Argument type: " + (void 0 === e ? "undefined" : o(e)) + ". Please use a boolean.") : (i = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
                }, r.disableWarnings = function (e) {
                    return "boolean" != typeof e ? new Error("Argument type: " + (void 0 === e ? "undefined" : o(e)) + ". Please use a boolean.") : (s = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
                }, r.log = function () {
                    if ("object" === ("undefined" == typeof window ? "undefined" : o(window))) {
                        if (i) return;
                        "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
                    }
                }, r.deprecated = function (e, t) {
                    s && console.warn(e + " is deprecated, please use " + t + " instead.")
                }, r.detectBrowser = function (e) {
                    var t = e.navigator, r = {browser: null, version: null};
                    if (void 0 === e || !e.navigator) return r.browser = "Not a browser.", r;
                    if (t.mozGetUserMedia) r.browser = "firefox", r.version = n(t.userAgent, /Firefox\/(\d+)\./, 1); else if (t.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) r.browser = "chrome", r.version = n(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2); else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) r.browser = "edge", r.version = n(t.userAgent, /Edge\/(\d+).(\d+)$/, 2); else {
                        if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return r.browser = "Not a supported browser.", r;
                        r.browser = "safari", r.version = n(t.userAgent, /AppleWebKit\/(\d+)\./, 1)
                    }
                    return r
                }, r.compactObject = function e(t) {
                    return "object" !== (void 0 === t ? "undefined" : o(t)) ? t : Object.keys(t).reduce((function (r, i) {
                        var s = "object" === o(t[i]), n = s ? e(t[i]) : t[i], a = s && !Object.keys(n).length;
                        return void 0 === n || a ? r : Object.assign(r, function (e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }({}, i, n))
                    }), {})
                }, r.walkStats = a, r.filterStats = function (e, t, r) {
                    var o = r ? "outbound-rtp" : "inbound-rtp", i = new Map;
                    if (null === t) return i;
                    var s = [];
                    return e.forEach((function (e) {
                        "track" === e.type && e.trackIdentifier === t.id && s.push(e)
                    })), s.forEach((function (t) {
                        e.forEach((function (r) {
                            r.type === o && r.trackId === t.id && a(e, r, i)
                        }))
                    })), i
                };
                var i = !0, s = !0;

                function n(e, t, r) {
                    var o = e.match(t);
                    return o && o.length >= r && parseInt(o[r], 10)
                }

                function a(e, t, r) {
                    t && !r.has(t.id) && (r.set(t.id, t), Object.keys(t).forEach((function (o) {
                        o.endsWith("Id") ? a(e, e.get(t[o]), r) : o.endsWith("Ids") && t[o].forEach((function (t) {
                            a(e, e.get(t), r)
                        }))
                    })))
                }
            }, {}], 16: [function (e, t, r) {
                "use strict";
                var o = e("sdp");

                function i(e, t, r, i, s) {
                    var n = o.writeRtpDescription(e.kind, t);
                    if (n += o.writeIceParameters(e.iceGatherer.getLocalParameters()), n += o.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : s || "active"), n += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? n += "a=sendrecv\r\n" : e.rtpSender ? n += "a=sendonly\r\n" : e.rtpReceiver ? n += "a=recvonly\r\n" : n += "a=inactive\r\n", e.rtpSender) {
                        var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
                        e.rtpSender._initialTrackId = a;
                        var d = "msid:" + (i ? i.id : "-") + " " + a + "\r\n";
                        n += "a=" + d, n += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + d, e.sendEncodingParameters[0].rtx && (n += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + d, n += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                    }
                    return n += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + o.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (n += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + o.localCName + "\r\n"), n
                }

                function s(e, t) {
                    var r = {codecs: [], headerExtensions: [], fecMechanisms: []}, o = function (e, t) {
                        e = parseInt(e, 10);
                        for (var r = 0; r < t.length; r++) if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r]
                    }, i = function (e, t, r, i) {
                        var s = o(e.parameters.apt, r), n = o(t.parameters.apt, i);
                        return s && n && s.name.toLowerCase() === n.name.toLowerCase()
                    };
                    return e.codecs.forEach((function (o) {
                        for (var s = 0; s < t.codecs.length; s++) {
                            var n = t.codecs[s];
                            if (o.name.toLowerCase() === n.name.toLowerCase() && o.clockRate === n.clockRate) {
                                if ("rtx" === o.name.toLowerCase() && o.parameters && n.parameters.apt && !i(o, n, e.codecs, t.codecs)) continue;
                                (n = JSON.parse(JSON.stringify(n))).numChannels = Math.min(o.numChannels, n.numChannels), r.codecs.push(n), n.rtcpFeedback = n.rtcpFeedback.filter((function (e) {
                                    for (var t = 0; t < o.rtcpFeedback.length; t++) if (o.rtcpFeedback[t].type === e.type && o.rtcpFeedback[t].parameter === e.parameter) return !0;
                                    return !1
                                }));
                                break
                            }
                        }
                    })), e.headerExtensions.forEach((function (e) {
                        for (var o = 0; o < t.headerExtensions.length; o++) {
                            var i = t.headerExtensions[o];
                            if (e.uri === i.uri) {
                                r.headerExtensions.push(i);
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

                function d(e, t) {
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

                    function c(t, r, o, i) {
                        var s = new Event("track");
                        s.track = r, s.receiver = o, s.transceiver = {receiver: o}, s.streams = i, e.setTimeout((function () {
                            t._dispatchEvent("track", s)
                        }))
                    }

                    var l = function (r) {
                        var i = this, s = document.createDocumentFragment();
                        if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach((function (e) {
                            i[e] = s[e].bind(s)
                        })), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", r = JSON.parse(JSON.stringify(r || {})), this.usingBundle = "max-bundle" === r.bundlePolicy, "negotiate" === r.rtcpMuxPolicy) throw d("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
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
                                    var o = e.urls || e.url;
                                    e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                                    var i = "string" == typeof o;
                                    return i && (o = [o]), o = o.filter((function (e) {
                                        return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || r ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (r = !0, !0)
                                    })), delete e.url, e.urls = i ? o[0] : o, !!o.length
                                }
                            }))
                        }(r.iceServers || [], t), this._iceGatherers = [], r.iceCandidatePoolSize) for (var n = r.iceCandidatePoolSize; n > 0; n--) this._iceGatherers.push(new e.RTCIceGatherer({
                            iceServers: r.iceServers,
                            gatherPolicy: r.iceTransportPolicy
                        })); else r.iceCandidatePoolSize = 0;
                        this._config = r, this.transceivers = [], this._sdpSessionId = o.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
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
                        var r = this.transceivers.length > 0, o = {
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
                        if (this.usingBundle && r) o.iceTransport = this.transceivers[0].iceTransport, o.dtlsTransport = this.transceivers[0].dtlsTransport; else {
                            var i = this._createIceAndDtlsTransports();
                            o.iceTransport = i.iceTransport, o.dtlsTransport = i.dtlsTransport
                        }
                        return t || this.transceivers.push(o), o
                    }, l.prototype.addTrack = function (t, r) {
                        if (this._isClosed) throw d("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                        var o;
                        if (this.transceivers.find((function (e) {
                            return e.track === t
                        }))) throw d("InvalidAccessError", "Track already exists.");
                        for (var i = 0; i < this.transceivers.length; i++) this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (o = this.transceivers[i]);
                        return o || (o = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(r) && this.localStreams.push(r), o.track = t, o.stream = r, o.rtpSender = new e.RTCRtpSender(t, o.dtlsTransport), o.rtpSender
                    }, l.prototype.addStream = function (e) {
                        var r = this;
                        if (t >= 15025) e.getTracks().forEach((function (t) {
                            r.addTrack(t, e)
                        })); else {
                            var o = e.clone();
                            e.getTracks().forEach((function (e, t) {
                                var r = o.getTracks()[t];
                                e.addEventListener("enabled", (function (e) {
                                    r.enabled = e.enabled
                                }))
                            })), o.getTracks().forEach((function (e) {
                                r.addTrack(e, o)
                            }))
                        }
                    }, l.prototype.removeTrack = function (t) {
                        if (this._isClosed) throw d("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                        if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                        var r = this.transceivers.find((function (e) {
                            return e.rtpSender === t
                        }));
                        if (!r) throw d("InvalidAccessError", "Sender was not created by this connection.");
                        var o = r.stream;
                        r.rtpSender.stop(), r.rtpSender = null, r.track = null, r.stream = null, -1 === this.transceivers.map((function (e) {
                            return e.stream
                        })).indexOf(o) && this.localStreams.indexOf(o) > -1 && this.localStreams.splice(this.localStreams.indexOf(o), 1), this._maybeFireNegotiationNeeded()
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
                        var o = this;
                        if (r && t > 0) return this.transceivers[0].iceGatherer;
                        if (this._iceGatherers.length) return this._iceGatherers.shift();
                        var i = new e.RTCIceGatherer({
                            iceServers: this._config.iceServers,
                            gatherPolicy: this._config.iceTransportPolicy
                        });
                        return Object.defineProperty(i, "state", {
                            value: "new",
                            writable: !0
                        }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function (e) {
                            var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                            i.state = r ? "completed" : "gathering", null !== o.transceivers[t].bufferedCandidateEvents && o.transceivers[t].bufferedCandidateEvents.push(e)
                        }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i
                    }, l.prototype._gather = function (t, r) {
                        var i = this, s = this.transceivers[r].iceGatherer;
                        if (!s.onlocalcandidate) {
                            var n = this.transceivers[r].bufferedCandidateEvents;
                            this.transceivers[r].bufferedCandidateEvents = null, s.removeEventListener("localcandidate", this.transceivers[r].bufferCandidates), s.onlocalcandidate = function (e) {
                                if (!(i.usingBundle && r > 0)) {
                                    var n = new Event("icecandidate");
                                    n.candidate = {sdpMid: t, sdpMLineIndex: r};
                                    var a = e.candidate, d = !a || 0 === Object.keys(a).length;
                                    if (d) "new" !== s.state && "gathering" !== s.state || (s.state = "completed"); else {
                                        "new" === s.state && (s.state = "gathering"), a.component = 1, a.ufrag = s.getLocalParameters().usernameFragment;
                                        var c = o.writeCandidate(a);
                                        n.candidate = Object.assign(n.candidate, o.parseCandidate(c)), n.candidate.candidate = c, n.candidate.toJSON = function () {
                                            return {
                                                candidate: n.candidate.candidate,
                                                sdpMid: n.candidate.sdpMid,
                                                sdpMLineIndex: n.candidate.sdpMLineIndex,
                                                usernameFragment: n.candidate.usernameFragment
                                            }
                                        }
                                    }
                                    var l = o.getMediaSections(i._localDescription.sdp);
                                    l[n.candidate.sdpMLineIndex] += d ? "a=end-of-candidates\r\n" : "a=" + n.candidate.candidate + "\r\n", i._localDescription.sdp = o.getDescription(i._localDescription.sdp) + l.join("");
                                    var u = i.transceivers.every((function (e) {
                                        return e.iceGatherer && "completed" === e.iceGatherer.state
                                    }));
                                    "gathering" !== i.iceGatheringState && (i.iceGatheringState = "gathering", i._emitGatheringStateChange()), d || i._dispatchEvent("icecandidate", n), u && (i._dispatchEvent("icecandidate", new Event("icecandidate")), i.iceGatheringState = "complete", i._emitGatheringStateChange())
                                }
                            }, e.setTimeout((function () {
                                n.forEach((function (e) {
                                    s.onlocalcandidate(e)
                                }))
                            }), 0)
                        }
                    }, l.prototype._createIceAndDtlsTransports = function () {
                        var t = this, r = new e.RTCIceTransport(null);
                        r.onicestatechange = function () {
                            t._updateIceConnectionState(), t._updateConnectionState()
                        };
                        var o = new e.RTCDtlsTransport(r);
                        return o.ondtlsstatechange = function () {
                            t._updateConnectionState()
                        }, o.onerror = function () {
                            Object.defineProperty(o, "state", {
                                value: "failed",
                                writable: !0
                            }), t._updateConnectionState()
                        }, {iceTransport: r, dtlsTransport: o}
                    }, l.prototype._disposeIceAndDtlsTransports = function (e) {
                        var t = this.transceivers[e].iceGatherer;
                        t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                        var r = this.transceivers[e].iceTransport;
                        r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
                        var o = this.transceivers[e].dtlsTransport;
                        o && (delete o.ondtlsstatechange, delete o.onerror, delete this.transceivers[e].dtlsTransport)
                    }, l.prototype._transceive = function (e, r, i) {
                        var n = s(e.localCapabilities, e.remoteCapabilities);
                        r && e.rtpSender && (n.encodings = e.sendEncodingParameters, n.rtcp = {
                            cname: o.localCName,
                            compound: e.rtcpParameters.compound
                        }, e.recvEncodingParameters.length && (n.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(n)), i && e.rtpReceiver && n.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach((function (e) {
                            delete e.rtx
                        })), e.recvEncodingParameters.length ? n.encodings = e.recvEncodingParameters : n.encodings = [{}], n.rtcp = {compound: e.rtcpParameters.compound}, e.rtcpParameters.cname && (n.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (n.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(n))
                    }, l.prototype.setLocalDescription = function (e) {
                        var t, r, i = this;
                        if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(d("TypeError", 'Unsupported type "' + e.type + '"'));
                        if (!n("setLocalDescription", e.type, i.signalingState) || i._isClosed) return Promise.reject(d("InvalidStateError", "Can not set local " + e.type + " in state " + i.signalingState));
                        if ("offer" === e.type) t = o.splitSections(e.sdp), r = t.shift(), t.forEach((function (e, t) {
                            var r = o.parseRtpParameters(e);
                            i.transceivers[t].localCapabilities = r
                        })), i.transceivers.forEach((function (e, t) {
                            i._gather(e.mid, t)
                        })); else if ("answer" === e.type) {
                            t = o.splitSections(i._remoteDescription.sdp), r = t.shift();
                            var a = o.matchPrefix(r, "a=ice-lite").length > 0;
                            t.forEach((function (e, t) {
                                var n = i.transceivers[t], d = n.iceGatherer, c = n.iceTransport, l = n.dtlsTransport,
                                    u = n.localCapabilities, g = n.remoteCapabilities;
                                if (!(o.isRejected(e) && 0 === o.matchPrefix(e, "a=bundle-only").length || n.rejected)) {
                                    var p = o.getIceParameters(e, r), h = o.getDtlsParameters(e, r);
                                    a && (h.role = "server"), i.usingBundle && 0 !== t || (i._gather(n.mid, t), "new" === c.state && c.start(d, p, a ? "controlling" : "controlled"), "new" === l.state && l.start(h));
                                    var m = s(u, g);
                                    i._transceive(n, m.codecs.length > 0, !1)
                                }
                            }))
                        }
                        return i._localDescription = {
                            type: e.type,
                            sdp: e.sdp
                        }, "offer" === e.type ? i._updateSignalingState("have-local-offer") : i._updateSignalingState("stable"), Promise.resolve()
                    }, l.prototype.setRemoteDescription = function (i) {
                        var l = this;
                        if (-1 === ["offer", "answer"].indexOf(i.type)) return Promise.reject(d("TypeError", 'Unsupported type "' + i.type + '"'));
                        if (!n("setRemoteDescription", i.type, l.signalingState) || l._isClosed) return Promise.reject(d("InvalidStateError", "Can not set remote " + i.type + " in state " + l.signalingState));
                        var u = {};
                        l.remoteStreams.forEach((function (e) {
                            u[e.id] = e
                        }));
                        var g = [], p = o.splitSections(i.sdp), h = p.shift(),
                            m = o.matchPrefix(h, "a=ice-lite").length > 0,
                            f = o.matchPrefix(h, "a=group:BUNDLE ").length > 0;
                        l.usingBundle = f;
                        var E = o.matchPrefix(h, "a=ice-options:")[0];
                        return l.canTrickleIceCandidates = !!E && E.substr(14).split(" ").indexOf("trickle") >= 0, p.forEach((function (n, d) {
                            var c = o.splitLines(n), p = o.getKind(n),
                                E = o.isRejected(n) && 0 === o.matchPrefix(n, "a=bundle-only").length,
                                _ = c[0].substr(2).split(" ")[2], T = o.getDirection(n, h), v = o.parseMsid(n),
                                S = o.getMid(n) || o.generateIdentifier();
                            if (E || "application" === p && ("DTLS/SCTP" === _ || "UDP/DTLS/SCTP" === _)) l.transceivers[d] = {
                                mid: S,
                                kind: p,
                                protocol: _,
                                rejected: !0
                            }; else {
                                var R, C, L, I, y, M, k, b, O;
                                !E && l.transceivers[d] && l.transceivers[d].rejected && (l.transceivers[d] = l._createTransceiver(p, !0));
                                var N, A, P = o.parseRtpParameters(n);
                                E || (N = o.getIceParameters(n, h), (A = o.getDtlsParameters(n, h)).role = "client"), k = o.parseRtpEncodingParameters(n);
                                var U = o.parseRtcpParameters(n),
                                    D = o.matchPrefix(n, "a=end-of-candidates", h).length > 0,
                                    w = o.matchPrefix(n, "a=candidate:").map((function (e) {
                                        return o.parseCandidate(e)
                                    })).filter((function (e) {
                                        return 1 === e.component
                                    }));
                                if (("offer" === i.type || "answer" === i.type) && !E && f && d > 0 && l.transceivers[d] && (l._disposeIceAndDtlsTransports(d), l.transceivers[d].iceGatherer = l.transceivers[0].iceGatherer, l.transceivers[d].iceTransport = l.transceivers[0].iceTransport, l.transceivers[d].dtlsTransport = l.transceivers[0].dtlsTransport, l.transceivers[d].rtpSender && l.transceivers[d].rtpSender.setTransport(l.transceivers[0].dtlsTransport), l.transceivers[d].rtpReceiver && l.transceivers[d].rtpReceiver.setTransport(l.transceivers[0].dtlsTransport)), "offer" !== i.type || E) "answer" !== i.type || E || (C = (R = l.transceivers[d]).iceGatherer, L = R.iceTransport, I = R.dtlsTransport, y = R.rtpReceiver, M = R.sendEncodingParameters, b = R.localCapabilities, l.transceivers[d].recvEncodingParameters = k, l.transceivers[d].remoteCapabilities = P, l.transceivers[d].rtcpParameters = U, w.length && "new" === L.state && (!m && !D || f && 0 !== d ? w.forEach((function (e) {
                                    a(R.iceTransport, e)
                                })) : L.setRemoteCandidates(w)), f && 0 !== d || ("new" === L.state && L.start(C, N, "controlling"), "new" === I.state && I.start(A)), !s(R.localCapabilities, R.remoteCapabilities).codecs.filter((function (e) {
                                    return "rtx" === e.name.toLowerCase()
                                })).length && R.sendEncodingParameters[0].rtx && delete R.sendEncodingParameters[0].rtx, l._transceive(R, "sendrecv" === T || "recvonly" === T, "sendrecv" === T || "sendonly" === T), !y || "sendrecv" !== T && "sendonly" !== T ? delete R.rtpReceiver : (O = y.track, v ? (u[v.stream] || (u[v.stream] = new e.MediaStream), r(O, u[v.stream]), g.push([O, y, u[v.stream]])) : (u.default || (u.default = new e.MediaStream), r(O, u.default), g.push([O, y, u.default])))); else {
                                    (R = l.transceivers[d] || l._createTransceiver(p)).mid = S, R.iceGatherer || (R.iceGatherer = l._createIceGatherer(d, f)), w.length && "new" === R.iceTransport.state && (!D || f && 0 !== d ? w.forEach((function (e) {
                                        a(R.iceTransport, e)
                                    })) : R.iceTransport.setRemoteCandidates(w)), b = e.RTCRtpReceiver.getCapabilities(p), t < 15019 && (b.codecs = b.codecs.filter((function (e) {
                                        return "rtx" !== e.name
                                    }))), M = R.sendEncodingParameters || [{ssrc: 1001 * (2 * d + 2)}];
                                    var Z, G = !1;
                                    "sendrecv" === T || "sendonly" === T ? (G = !R.rtpReceiver, y = R.rtpReceiver || new e.RTCRtpReceiver(R.dtlsTransport, p), G && (O = y.track, v && "-" === v.stream || (v ? (u[v.stream] || (u[v.stream] = new e.MediaStream, Object.defineProperty(u[v.stream], "id", {
                                        get: function () {
                                            return v.stream
                                        }
                                    })), Object.defineProperty(O, "id", {
                                        get: function () {
                                            return v.track
                                        }
                                    }), Z = u[v.stream]) : (u.default || (u.default = new e.MediaStream), Z = u.default)), Z && (r(O, Z), R.associatedRemoteMediaStreams.push(Z)), g.push([O, y, Z]))) : R.rtpReceiver && R.rtpReceiver.track && (R.associatedRemoteMediaStreams.forEach((function (t) {
                                        var r = t.getTracks().find((function (e) {
                                            return e.id === R.rtpReceiver.track.id
                                        }));
                                        r && function (t, r) {
                                            r.removeTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {track: t}))
                                        }(r, t)
                                    })), R.associatedRemoteMediaStreams = []), R.localCapabilities = b, R.remoteCapabilities = P, R.rtpReceiver = y, R.rtcpParameters = U, R.sendEncodingParameters = M, R.recvEncodingParameters = k, l._transceive(l.transceivers[d], !1, G)
                                }
                            }
                        })), void 0 === l._dtlsRole && (l._dtlsRole = "offer" === i.type ? "active" : "passive"), l._remoteDescription = {
                            type: i.type,
                            sdp: i.sdp
                        }, "offer" === i.type ? l._updateSignalingState("have-remote-offer") : l._updateSignalingState("stable"), Object.keys(u).forEach((function (t) {
                            var r = u[t];
                            if (r.getTracks().length) {
                                if (-1 === l.remoteStreams.indexOf(r)) {
                                    l.remoteStreams.push(r);
                                    var o = new Event("addstream");
                                    o.stream = r, e.setTimeout((function () {
                                        l._dispatchEvent("addstream", o)
                                    }))
                                }
                                g.forEach((function (e) {
                                    var t = e[0], o = e[1];
                                    r.id === e[2].id && c(l, t, o, [r])
                                }))
                            }
                        })), g.forEach((function (e) {
                            e[2] || c(l, e[0], e[1], [])
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
                        if (r._isClosed) return Promise.reject(d("InvalidStateError", "Can not call createOffer after close"));
                        var s = r.transceivers.filter((function (e) {
                            return "audio" === e.kind
                        })).length, n = r.transceivers.filter((function (e) {
                            return "video" === e.kind
                        })).length, a = arguments[0];
                        if (a) {
                            if (a.mandatory || a.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                            void 0 !== a.offerToReceiveAudio && (s = !0 === a.offerToReceiveAudio ? 1 : !1 === a.offerToReceiveAudio ? 0 : a.offerToReceiveAudio), void 0 !== a.offerToReceiveVideo && (n = !0 === a.offerToReceiveVideo ? 1 : !1 === a.offerToReceiveVideo ? 0 : a.offerToReceiveVideo)
                        }
                        for (r.transceivers.forEach((function (e) {
                            "audio" === e.kind ? --s < 0 && (e.wantReceive = !1) : "video" === e.kind && --n < 0 && (e.wantReceive = !1)
                        })); s > 0 || n > 0;) s > 0 && (r._createTransceiver("audio"), s--), n > 0 && (r._createTransceiver("video"), n--);
                        var c = o.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                        r.transceivers.forEach((function (i, s) {
                            var n = i.track, a = i.kind, d = i.mid || o.generateIdentifier();
                            i.mid = d, i.iceGatherer || (i.iceGatherer = r._createIceGatherer(s, r.usingBundle));
                            var c = e.RTCRtpSender.getCapabilities(a);
                            t < 15019 && (c.codecs = c.codecs.filter((function (e) {
                                return "rtx" !== e.name
                            }))), c.codecs.forEach((function (e) {
                                "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), i.remoteCapabilities && i.remoteCapabilities.codecs && i.remoteCapabilities.codecs.forEach((function (t) {
                                    e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType)
                                }))
                            })), c.headerExtensions.forEach((function (e) {
                                (i.remoteCapabilities && i.remoteCapabilities.headerExtensions || []).forEach((function (t) {
                                    e.uri === t.uri && (e.id = t.id)
                                }))
                            }));
                            var l = i.sendEncodingParameters || [{ssrc: 1001 * (2 * s + 1)}];
                            n && t >= 15019 && "video" === a && !l[0].rtx && (l[0].rtx = {ssrc: l[0].ssrc + 1}), i.wantReceive && (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, a)), i.localCapabilities = c, i.sendEncodingParameters = l
                        })), "max-compat" !== r._config.bundlePolicy && (c += "a=group:BUNDLE " + r.transceivers.map((function (e) {
                            return e.mid
                        })).join(" ") + "\r\n"), c += "a=ice-options:trickle\r\n", r.transceivers.forEach((function (e, t) {
                            c += i(e, e.localCapabilities, "offer", e.stream, r._dtlsRole), c += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === r.iceGatheringState || 0 !== t && r.usingBundle || (e.iceGatherer.getLocalCandidates().forEach((function (e) {
                                e.component = 1, c += "a=" + o.writeCandidate(e) + "\r\n"
                            })), "completed" === e.iceGatherer.state && (c += "a=end-of-candidates\r\n"))
                        }));
                        var l = new e.RTCSessionDescription({type: "offer", sdp: c});
                        return Promise.resolve(l)
                    }, l.prototype.createAnswer = function () {
                        var r = this;
                        if (r._isClosed) return Promise.reject(d("InvalidStateError", "Can not call createAnswer after close"));
                        if ("have-remote-offer" !== r.signalingState && "have-local-pranswer" !== r.signalingState) return Promise.reject(d("InvalidStateError", "Can not call createAnswer in signalingState " + r.signalingState));
                        var n = o.writeSessionBoilerplate(r._sdpSessionId, r._sdpSessionVersion++);
                        r.usingBundle && (n += "a=group:BUNDLE " + r.transceivers.map((function (e) {
                            return e.mid
                        })).join(" ") + "\r\n"), n += "a=ice-options:trickle\r\n";
                        var a = o.getMediaSections(r._remoteDescription.sdp).length;
                        r.transceivers.forEach((function (e, o) {
                            if (!(o + 1 > a)) {
                                if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? n += "m=application 0 DTLS/SCTP 5000\r\n" : n += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? n += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (n += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (n += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                                var d;
                                e.stream && ("audio" === e.kind ? d = e.stream.getAudioTracks()[0] : "video" === e.kind && (d = e.stream.getVideoTracks()[0]), d && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {ssrc: e.sendEncodingParameters[0].ssrc + 1}));
                                var c = s(e.localCapabilities, e.remoteCapabilities);
                                !c.codecs.filter((function (e) {
                                    return "rtx" === e.name.toLowerCase()
                                })).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, n += i(e, c, "answer", e.stream, r._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (n += "a=rtcp-rsize\r\n")
                            }
                        }));
                        var c = new e.RTCSessionDescription({type: "answer", sdp: n});
                        return Promise.resolve(c)
                    }, l.prototype.addIceCandidate = function (e) {
                        var t, r = this;
                        return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise((function (i, s) {
                            if (!r._remoteDescription) return s(d("InvalidStateError", "Can not add ICE candidate without a remote description"));
                            if (e && "" !== e.candidate) {
                                var n = e.sdpMLineIndex;
                                if (e.sdpMid) for (var c = 0; c < r.transceivers.length; c++) if (r.transceivers[c].mid === e.sdpMid) {
                                    n = c;
                                    break
                                }
                                var l = r.transceivers[n];
                                if (!l) return s(d("OperationError", "Can not add ICE candidate"));
                                if (l.rejected) return i();
                                var u = Object.keys(e.candidate).length > 0 ? o.parseCandidate(e.candidate) : {};
                                if ("tcp" === u.protocol && (0 === u.port || 9 === u.port)) return i();
                                if (u.component && 1 !== u.component) return i();
                                if ((0 === n || n > 0 && l.iceTransport !== r.transceivers[0].iceTransport) && !a(l.iceTransport, u)) return s(d("OperationError", "Can not add ICE candidate"));
                                var g = e.candidate.trim();
                                0 === g.indexOf("a=") && (g = g.substr(2)), (t = o.getMediaSections(r._remoteDescription.sdp))[n] += "a=" + (u.type ? g : "end-of-candidates") + "\r\n", r._remoteDescription.sdp = o.getDescription(r._remoteDescription.sdp) + t.join("")
                            } else for (var p = 0; p < r.transceivers.length && (r.transceivers[p].rejected || (r.transceivers[p].iceTransport.addRemoteCandidate({}), (t = o.getMediaSections(r._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n", r._remoteDescription.sdp = o.getDescription(r._remoteDescription.sdp) + t.join(""), !r.usingBundle)); p++) ;
                            i()
                        }))
                    }, l.prototype.getStats = function (t) {
                        if (t && t instanceof e.MediaStreamTrack) {
                            var r = null;
                            if (this.transceivers.forEach((function (e) {
                                e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver)
                            })), !r) throw d("InvalidAccessError", "Invalid selector.");
                            return r.getStats()
                        }
                        var o = [];
                        return this.transceivers.forEach((function (e) {
                            ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach((function (t) {
                                e[t] && o.push(e[t].getStats())
                            }))
                        })), Promise.all(o).then((function (e) {
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
                            var o = r.prototype.getStats;
                            r.prototype.getStats = function () {
                                return o.apply(this).then((function (e) {
                                    var t = new Map;
                                    return Object.keys(e).forEach((function (r) {
                                        var o;
                                        e[r].type = {
                                            inboundrtp: "inbound-rtp",
                                            outboundrtp: "outbound-rtp",
                                            candidatepair: "candidate-pair",
                                            localcandidate: "local-candidate",
                                            remotecandidate: "remote-candidate"
                                        }[(o = e[r]).type] || o.type, t.set(r, e[r])
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
                var o = {
                    generateIdentifier: function () {
                        return Math.random().toString(36).substr(2, 10)
                    }
                };
                o.localCName = o.generateIdentifier(), o.splitLines = function (e) {
                    return e.trim().split("\n").map((function (e) {
                        return e.trim()
                    }))
                }, o.splitSections = function (e) {
                    return e.split("\nm=").map((function (e, t) {
                        return (t > 0 ? "m=" + e : e).trim() + "\r\n"
                    }))
                }, o.getDescription = function (e) {
                    var t = o.splitSections(e);
                    return t && t[0]
                }, o.getMediaSections = function (e) {
                    var t = o.splitSections(e);
                    return t.shift(), t
                }, o.matchPrefix = function (e, t) {
                    return o.splitLines(e).filter((function (e) {
                        return 0 === e.indexOf(t)
                    }))
                }, o.parseCandidate = function (e) {
                    for (var t, r = {
                        foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                        component: parseInt(t[1], 10),
                        protocol: t[2].toLowerCase(),
                        priority: parseInt(t[3], 10),
                        ip: t[4],
                        address: t[4],
                        port: parseInt(t[5], 10),
                        type: t[7]
                    }, o = 8; o < t.length; o += 2) switch (t[o]) {
                        case"raddr":
                            r.relatedAddress = t[o + 1];
                            break;
                        case"rport":
                            r.relatedPort = parseInt(t[o + 1], 10);
                            break;
                        case"tcptype":
                            r.tcpType = t[o + 1];
                            break;
                        case"ufrag":
                            r.ufrag = t[o + 1], r.usernameFragment = t[o + 1];
                            break;
                        default:
                            r[t[o]] = t[o + 1]
                    }
                    return r
                }, o.writeCandidate = function (e) {
                    var t = [];
                    t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
                    var r = e.type;
                    return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
                }, o.parseIceOptions = function (e) {
                    return e.substr(14).split(" ")
                }, o.parseRtpMap = function (e) {
                    var t = e.substr(9).split(" "), r = {payloadType: parseInt(t.shift(), 10)};
                    return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r
                }, o.writeRtpMap = function (e) {
                    var t = e.payloadType;
                    void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                    var r = e.channels || e.numChannels || 1;
                    return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n"
                }, o.parseExtmap = function (e) {
                    var t = e.substr(9).split(" ");
                    return {
                        id: parseInt(t[0], 10),
                        direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                        uri: t[1]
                    }
                }, o.writeExtmap = function (e) {
                    return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
                }, o.parseFmtp = function (e) {
                    for (var t, r = {}, o = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < o.length; i++) r[(t = o[i].trim().split("="))[0].trim()] = t[1];
                    return r
                }, o.writeFmtp = function (e) {
                    var t = "", r = e.payloadType;
                    if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                        var o = [];
                        Object.keys(e.parameters).forEach((function (t) {
                            e.parameters[t] ? o.push(t + "=" + e.parameters[t]) : o.push(t)
                        })), t += "a=fmtp:" + r + " " + o.join(";") + "\r\n"
                    }
                    return t
                }, o.parseRtcpFb = function (e) {
                    var t = e.substr(e.indexOf(" ") + 1).split(" ");
                    return {type: t.shift(), parameter: t.join(" ")}
                }, o.writeRtcpFb = function (e) {
                    var t = "", r = e.payloadType;
                    return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((function (e) {
                        t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
                    })), t
                }, o.parseSsrcMedia = function (e) {
                    var t = e.indexOf(" "), r = {ssrc: parseInt(e.substr(7, t - 7), 10)}, o = e.indexOf(":", t);
                    return o > -1 ? (r.attribute = e.substr(t + 1, o - t - 1), r.value = e.substr(o + 1)) : r.attribute = e.substr(t + 1), r
                }, o.parseSsrcGroup = function (e) {
                    var t = e.substr(13).split(" ");
                    return {
                        semantics: t.shift(), ssrcs: t.map((function (e) {
                            return parseInt(e, 10)
                        }))
                    }
                }, o.getMid = function (e) {
                    var t = o.matchPrefix(e, "a=mid:")[0];
                    if (t) return t.substr(6)
                }, o.parseFingerprint = function (e) {
                    var t = e.substr(14).split(" ");
                    return {algorithm: t[0].toLowerCase(), value: t[1]}
                }, o.getDtlsParameters = function (e, t) {
                    return {role: "auto", fingerprints: o.matchPrefix(e + t, "a=fingerprint:").map(o.parseFingerprint)}
                }, o.writeDtlsParameters = function (e, t) {
                    var r = "a=setup:" + t + "\r\n";
                    return e.fingerprints.forEach((function (e) {
                        r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
                    })), r
                }, o.getIceParameters = function (e, t) {
                    var r = o.splitLines(e);
                    return {
                        usernameFragment: (r = r.concat(o.splitLines(t))).filter((function (e) {
                            return 0 === e.indexOf("a=ice-ufrag:")
                        }))[0].substr(12), password: r.filter((function (e) {
                            return 0 === e.indexOf("a=ice-pwd:")
                        }))[0].substr(10)
                    }
                }, o.writeIceParameters = function (e) {
                    return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
                }, o.parseRtpParameters = function (e) {
                    for (var t = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: [],
                        rtcp: []
                    }, r = o.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
                        var s = r[i], n = o.matchPrefix(e, "a=rtpmap:" + s + " ")[0];
                        if (n) {
                            var a = o.parseRtpMap(n), d = o.matchPrefix(e, "a=fmtp:" + s + " ");
                            switch (a.parameters = d.length ? o.parseFmtp(d[0]) : {}, a.rtcpFeedback = o.matchPrefix(e, "a=rtcp-fb:" + s + " ").map(o.parseRtcpFb), t.codecs.push(a), a.name.toUpperCase()) {
                                case"RED":
                                case"ULPFEC":
                                    t.fecMechanisms.push(a.name.toUpperCase())
                            }
                        }
                    }
                    return o.matchPrefix(e, "a=extmap:").forEach((function (e) {
                        t.headerExtensions.push(o.parseExtmap(e))
                    })), t
                }, o.writeRtpDescription = function (e, t) {
                    var r = "";
                    r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map((function (e) {
                        return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
                    })).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach((function (e) {
                        r += o.writeRtpMap(e), r += o.writeFmtp(e), r += o.writeRtcpFb(e)
                    }));
                    var i = 0;
                    return t.codecs.forEach((function (e) {
                        e.maxptime > i && (i = e.maxptime)
                    })), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach((function (e) {
                        r += o.writeExtmap(e)
                    })), r
                }, o.parseRtpEncodingParameters = function (e) {
                    var t, r = [], i = o.parseRtpParameters(e), s = -1 !== i.fecMechanisms.indexOf("RED"),
                        n = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
                        a = o.matchPrefix(e, "a=ssrc:").map((function (e) {
                            return o.parseSsrcMedia(e)
                        })).filter((function (e) {
                            return "cname" === e.attribute
                        })), d = a.length > 0 && a[0].ssrc, c = o.matchPrefix(e, "a=ssrc-group:FID").map((function (e) {
                            return e.substr(17).split(" ").map((function (e) {
                                return parseInt(e, 10)
                            }))
                        }));
                    c.length > 0 && c[0].length > 1 && c[0][0] === d && (t = c[0][1]), i.codecs.forEach((function (e) {
                        if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                            var o = {ssrc: d, codecPayloadType: parseInt(e.parameters.apt, 10)};
                            d && t && (o.rtx = {ssrc: t}), r.push(o), s && ((o = JSON.parse(JSON.stringify(o))).fec = {
                                ssrc: d,
                                mechanism: n ? "red+ulpfec" : "red"
                            }, r.push(o))
                        }
                    })), 0 === r.length && d && r.push({ssrc: d});
                    var l = o.matchPrefix(e, "b=");
                    return l.length && (l = 0 === l[0].indexOf("b=TIAS:") ? parseInt(l[0].substr(7), 10) : 0 === l[0].indexOf("b=AS:") ? 1e3 * parseInt(l[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach((function (e) {
                        e.maxBitrate = l
                    }))), r
                }, o.parseRtcpParameters = function (e) {
                    var t = {}, r = o.matchPrefix(e, "a=ssrc:").map((function (e) {
                        return o.parseSsrcMedia(e)
                    })).filter((function (e) {
                        return "cname" === e.attribute
                    }))[0];
                    r && (t.cname = r.value, t.ssrc = r.ssrc);
                    var i = o.matchPrefix(e, "a=rtcp-rsize");
                    t.reducedSize = i.length > 0, t.compound = 0 === i.length;
                    var s = o.matchPrefix(e, "a=rtcp-mux");
                    return t.mux = s.length > 0, t
                }, o.parseMsid = function (e) {
                    var t, r = o.matchPrefix(e, "a=msid:");
                    if (1 === r.length) return {stream: (t = r[0].substr(7).split(" "))[0], track: t[1]};
                    var i = o.matchPrefix(e, "a=ssrc:").map((function (e) {
                        return o.parseSsrcMedia(e)
                    })).filter((function (e) {
                        return "msid" === e.attribute
                    }));
                    return i.length > 0 ? {stream: (t = i[0].value.split(" "))[0], track: t[1]} : void 0
                }, o.generateSessionId = function () {
                    return Math.random().toString().substr(2, 21)
                }, o.writeSessionBoilerplate = function (e, t, r) {
                    var i = void 0 !== t ? t : 2;
                    return "v=0\r\no=" + (r || "thisisadapterortc") + " " + (e || o.generateSessionId()) + " " + i + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                }, o.writeMediaSection = function (e, t, r, i) {
                    var s = o.writeRtpDescription(e.kind, t);
                    if (s += o.writeIceParameters(e.iceGatherer.getLocalParameters()), s += o.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), s += "a=mid:" + e.mid + "\r\n", e.direction ? s += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? s += "a=sendrecv\r\n" : e.rtpSender ? s += "a=sendonly\r\n" : e.rtpReceiver ? s += "a=recvonly\r\n" : s += "a=inactive\r\n", e.rtpSender) {
                        var n = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                        s += "a=" + n, s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + n, e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + n, s += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
                    }
                    return s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + o.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + o.localCName + "\r\n"), s
                }, o.getDirection = function (e, t) {
                    for (var r = o.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
                        case"a=sendrecv":
                        case"a=sendonly":
                        case"a=recvonly":
                        case"a=inactive":
                            return r[i].substr(2)
                    }
                    return t ? o.getDirection(t) : "sendrecv"
                }, o.getKind = function (e) {
                    return o.splitLines(e)[0].split(" ")[0].substr(2)
                }, o.isRejected = function (e) {
                    return "0" === e.split(" ", 2)[1]
                }, o.parseMLine = function (e) {
                    var t = o.splitLines(e)[0].substr(2).split(" ");
                    return {kind: t[0], port: parseInt(t[1], 10), protocol: t[2], fmt: t.slice(3).join(" ")}
                }, o.parseOLine = function (e) {
                    var t = o.matchPrefix(e, "o=")[0].substr(2).split(" ");
                    return {
                        username: t[0],
                        sessionId: t[1],
                        sessionVersion: parseInt(t[2], 10),
                        netType: t[3],
                        addressType: t[4],
                        address: t[5]
                    }
                }, o.isValidSDP = function (e) {
                    if ("string" != typeof e || 0 === e.length) return !1;
                    for (var t = o.splitLines(e), r = 0; r < t.length; r++) if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
                    return !0
                }, "object" == typeof t && (t.exports = o)
            }, {}]
        }, {}, [1])(1)
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.AudioMix = void 0;
        var o = r(2), i = r(4), s = function () {
            function e(e, t, r) {
                this.audioBufferList = [], this.loop = !1, this.replace = !1, this.effectEndedCallBack = null, this.effectEndedListener = null, this.startTimes = 0, this.startOffset = 0, this.pauseTimes = 0, this.resumeOffset = 0, this.paused = !1, this.isMixAudio = !1, this.isMixingBuffer = !1, this.audioCurrentTimer = null, this.logger = e, this.ac = t, this.mediaEleSources = r
            }

            return e.prototype.preloadEffect = function (e, t) {
                var r = this;
                this.logger.info("amu.pe.0 start preload effect");
                var o = new XMLHttpRequest;
                o.open("GET", e, !0), o.responseType = "arraybuffer", o.onload = function () {
                    if (200 == o.status || 304 == o.status) {
                        var e = o.response;
                        r.ac.resume(), r.ac.decodeAudioData(e, (function (e) {
                            r.logger.info("amu.pe.0 effect preload success"), t("", e)
                        }), (function (e) {
                            t(e)
                        }))
                    } else {
                        var i = o.statusText;
                        t(i)
                    }
                }, o.send()
            }, e.prototype.playEffect = function (e, t, r, o, i) {
                var s = this;
                !0 !== this.isMixAudio ? this.audioBuffer ? (this.startOffset = e || 0, this.loop = t || !1, this.replace = r || !1, this.effectEndedCallBack = i, this.mixEffect(this.audioBuffer, (function () {
                    s.buffSource.loop = !!t, e ? s.buffSource.start(0, e / 1e3) : s.buffSource.start(0), s.startTimes = Date.now(), s.effectEndedListener = s.effectEndedHandler.bind(s), s.buffSource.addEventListener("ended", s.effectEndedListener), o && o()
                }))) : this.logger.error("amu.pe.1 no audio buffer found") : this.logger.error("amu.pe.1 audio is mixing")
            }, e.prototype.mixingBuffer = function (e, t) {
                var r = this;
                !0 !== this.isMixAudio || 0 != this.audioBufferList.length || 0 != this.isMixingBuffer ? (this.ac.resume(), this.ac.decodeAudioData(e, (function (e) {
                    r.audioBufferList.push(e), 1 == r.audioBufferList.length && r.playRealTimeEffect(r.audioBufferList[0]), r.isMixingBuffer = !0, t && t()
                }), (function (e) {
                    r.logger.error("amu.mb.0 " + e), t && t({
                        code: i.errorCodeList.PUBLISHER_DECODE_AUDIO_FAIL.code,
                        message: i.errorCodeList.PUBLISHER_DECODE_AUDIO_FAIL.message + " " + e
                    })
                }))) : this.logger.error("amu.mb.0 audio is mixing")
            }, e.prototype.stopMingBuffer = function () {
                return this.isMixingBuffer = !1, this.stopMixingAudio()
            }, e.prototype.playRealTimeEffect = function (e) {
                var t = this;
                this.mixEffect(e, (function () {
                    t.buffSource && t.buffSource.start(0), t.buffSource && t.buffSource.addEventListener("ended", (function () {
                        t.audioBufferList.shift(), t.audioBufferList.length > 0 && t.isMixAudio && t.playRealTimeEffect(t.audioBufferList[0])
                    }))
                }))
            }, e.prototype.pauseEffect = function () {
                this.audioBufferList.length > 0 ? this.logger.error("amu.pe.0 real time buffer can not be paused") : (this.stopMixingAudio(), this.resumeOffset = (this.pauseTimes - this.startTimes + this.startOffset) % (1e3 * this.audioBuffer.duration), this.paused = !0)
            }, e.prototype.resumeEffect = function () {
                this.audioBufferList.length > 0 ? this.logger.error("amu.pe.0 real time buffer can not be resume") : (this.playEffect(this.resumeOffset, this.loop, this.replace, void 0, this.effectEndedCallBack), this.startOffset = this.resumeOffset, this.paused = !1)
            }, e.prototype.mixEffect = function (e, t) {
                this.localStream ? (this.ac.resume(), this.gainNode = this.ac.createGain(), this.buffSource = this.ac.createBufferSource(), this.buffSource.buffer = e, this.buffSource.connect(this.gainNode), this.gainNode.connect(this.ac.destination), this.replaceTrack() && t()) : this.logger.error("amu.me.0 localStream can not be found")
            }, e.prototype.startMixingAudio = function (e, t) {
                if (this.replace = t || !1, this.isMixAudio) return this.logger.error("amu.sma.0 audio is mixing"), !1;
                if (!this.localStream) return this.logger.error("amu.sma.0 localStream can not be found"), !1;
                if (e.captureStream = e.captureStream || e.mozCaptureStream || e.webkitCaptureStream, this.ac.resume(), this.gainNode = this.ac.createGain(), "Safari" === o.ClientUtil.getBrowser()) {
                    var r = this.mediaEleSources.find((function (t) {
                        return t.audio === e
                    }));
                    if (r) this.mixAudio = r.node; else {
                        var i = this.ac.createMediaElementSource(e);
                        this.mixAudio = i, this.mediaEleSources.push({audio: e, node: i})
                    }
                    e.currentTime = e.currentTime, this.audioCurrentTimer = setInterval((function () {
                        e.currentTime = e.currentTime + .45
                    }), 6e3)
                } else this.mixAudio = this.ac.createMediaStreamSource(e.captureStream());
                return this.mixAudio.connect(this.gainNode), this.replaceTrack()
            }, e.prototype.replaceTrack = function () {
                this.streamSource = this.ac.createMediaStreamSource(this.localStream), this.destination = this.ac.createMediaStreamDestination(), !this.replace && this.streamSource.connect(this.destination), this.gainNode.connect(this.destination);
                var e = this.destination.stream.getAudioTracks()[0],
                    t = this.peerConnection.getSenders().find((function (t) {
                        return t.track.kind === e.kind
                    }));
                return t ? (this.micTrack = this.localStream.getAudioTracks()[0], t.replaceTrack(e), this.localStream.removeTrack(this.micTrack), this.localStream.addTrack(e), this.isMixAudio = !0, !0) : (this.logger.error("amu.rt.0 no sender"), !1)
            }, e.prototype.stopMixingAudio = function () {
                var e = this;
                if (this.paused) return this.logger.info("amu.sma.1 audioEffect paused"), !0;
                if (!this.isMixAudio) return this.logger.warn("amu.sma.1 no mixing audio found"), !0;
                if (!this.localStream) return this.logger.error("amu.sma.1 localStream can not be found"), !1;
                this.peerConnection.getSenders().find((function (t) {
                    return t.track.kind === e.micTrack.kind
                }));
                return this.mixAudio ? (this.mixAudio.disconnect(this.gainNode), this.mixAudio = null, this.audioCurrentTimer && (clearInterval(this.audioCurrentTimer), this.audioCurrentTimer = null)) : this.buffSource && (this.buffSource.removeEventListener("ended", this.effectEndedListener), this.buffSource.stop(), this.pauseTimes = Date.now(), this.buffSource.disconnect(this.gainNode), this.buffSource = null), this.gainNode.disconnect(this.destination), this.isMixAudio = !1, this.audioBufferList = [], !0
            }, e.prototype.setMixingAudioVolume = function (e) {
                return this.gainNode ? (this.gainNode.gain.value = e, !0) : (this.logger.error("amu.sma.2 no mixing audio found"), !1)
            }, e.prototype.effectEndedHandler = function () {
                this.stopMixingAudio(), this.effectEndedCallBack && this.effectEndedCallBack()
            }, e
        }();
        t.AudioMix = s
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, r = 1, o = arguments.length; r < o; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoSignal = void 0;
        var i = r(0), s = r(3), n = function () {
            function e(e, t) {
                this.sendDataMap = {}, this.sendDataList = new i.LinkedList, this.sendDataCheckOnceCount = 100, this.signalSeq = 0, this.pushCallback = {}, this.sessionInfos = {}, this.tryHeartbeatCount = 0, this.heartbeatInterval = 1e4, this.sendDataTimeout = 5e3, this.sendDataDropTimeout = 1e4, this.sendDataCheckTimer = null, this.sendDataCheckInterval = 2e3, this.checkMessageList = ["ActivateVideoPlayStreamReq", "ActivateAudioPlayStreamReq", "CreateSessionReq"], this.tryConnectCount = 1, this.tryConnectTimer = null, this.tryConnectInterval = 3e3, this.state = i.ENUM_CONNECT_STATE.disconnect, this.tokenType = 0, this.browser = this.getBrowserAndVersion(), this.platform = navigator.platform, this.negoInterval = 25e3, this.negoTryCount = 1, this.negoTryMaxCount = 2, this.logger = e, this.stateCenter = t
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
                this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_SET_SESSION_INFO + " call"), this.appid = e + "", this.userid = t
            }, e.prototype.onDisconnect = function (e) {
            }, e.prototype.onUpdateHeartBeatInterval = function (e) {
            }, e.prototype.resetConnectTimer = function () {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_RESET_CONNECT_TIMER + " call"), clearTimeout(this.tryConnectTimer), this.tryConnectTimer = null, this.tryConnectCount = 0
            }, e.prototype.bindWebSocketHandle = function () {
                var e = this;
                this.tryHeartbeatCount = 0, this.tryConnectInterval = 3e3, this.websocket.onmessage = function (t) {
                    var r = JSON.parse(t.data);
                    e.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_BIND_WEBSOCKET_HANDLE + " signmsg= ", r.header.cmd), e.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_BIND_WEBSOCKET_HANDLE + " signmsg= " + JSON.stringify(r)), r.header.appid == e.appid && r.header.user_id === e.userid ? e.handleServerPush(r) : e.logger.warn(s.ZEGO_WEBRTC_ACTION.SIGNAL_BIND_WEBSOCKET_HANDLE + " check header failed")
                }, this.websocket.onclose = function (t) {
                    e.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_BIND_WEBSOCKET_HANDLE + " close msg = " + JSON.stringify(t.code ? t.code : t)), e.state != i.ENUM_CONNECT_STATE.disconnect && (e.resetConnectTimer(), e.startConnectTimer(), e.resetCheckMessage())
                }, this.websocket.onerror = function (t) {
                    e.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_BIND_WEBSOCKET_HANDLE + " msg = " + JSON.stringify(t))
                }
            }, e.prototype.resetCheckMessage = function () {
                this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_RESET_CHECK_MESSAGE + " call"), clearTimeout(this.sendDataCheckTimer), this.sendDataCheckTimer = null;
                for (var e = this.sendDataList.getFirst(); null != e;) this.sendDataList.remove(e), e._data.error && e._data.error(i.SEND_MSG_RESET, e._data.seq), e = this.sendDataList.getFirst();
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
                    case"ClientInfoPush":
                        this.handlePushData(e);
                        break;
                    case"ActivateVideoPlayStreamRsp":
                        this.handleRespondData("ActivateVideoPlayStreamReq", e);
                        break;
                    case"ActivateAudioPlayStreamRsp":
                        this.handleRespondData("ActivateAudioPlayStreamReq", e)
                }
            }, e.prototype.disconnectCallback = function () {
                this.connectCallback && (this.connectCallback(-1, this.server, void 0), this.connectCallback = null);
                var e = this.server;
                this.disconnectServer(), this.onDisconnect(e)
            }, e.prototype.updateToken = function () {
                var e = this;
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_UPDATE_TOKEN + " call");
                var t = {
                    token: this.token,
                    tokenType: this.tokenType,
                    roomid: this.stateCenter.roomid,
                    anchorname: this.stateCenter.anchor_info.anchor_id,
                    sdkversion: i.PROTO_VERSION,
                    osinfo: navigator.appVersion
                };
                if (0 != Object.keys(this.sessionInfos).length) {
                    var r = [];
                    for (var o in this.sessionInfos) {
                        var n = parseInt(o);
                        r.push({session_id: n, session_token: this.sessionInfos[n].token})
                    }
                    t.sessions = r
                }
                this.sendMessageWithCallback("LoginReq", i.getSeq(), 0, t, (function (t, r, o) {
                    if (0 == o.result) {
                        e.token = o.token, e.tokenType = o.tokenType;
                        var i = {report: o.report, report_interval: o.report_interval_ms};
                        o.negoInterval && (e.negoInterval = o.negoInterval), o.negoTryCount && (e.negoTryCount = o.negoTryCount), o.negoTryMaxCount && (e.negoTryMaxCount = o.negoTryMaxCount), null != e.connectCallback && (e.connectCallback(0, e.server, i), e.connectCallback = null), e.checkMessageTimeout()
                    } else {
                        var s = {error: o.strError};
                        null != e.connectCallback && (e.connectCallback(o.result, e.server, s), e.connectCallback = null)
                    }
                }), (function () {
                    null != e.connectCallback && (e.connectCallback(-1, e.server, void 0), e.connectCallback = null)
                }))
            }, e.prototype.sendMessageWithCallback = function (e, t, r, o, n, a) {
                if (this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE_WITH_CALLBACK + " call " + e), !this.websocket || 1 !== this.websocket.readyState) return this.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE_WITH_CALLBACK + " connect not establish"), void (a && a(i.SEND_MSG_TIMEOUT, t));
                var d = {header: this.getHeader(e, t, r), body: o};
                null == n && (n = null), null == a && (a = null);
                var c = {seq: t, deleted: !1, cmd: e, time: Date.parse(new Date + ""), success: n, error: a},
                    l = this.sendDataList.push(c);
                this.sendDataMap[c.seq] = l;
                var u = JSON.stringify(d);
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE_WITH_CALLBACK + " " + u), this.websocket.send(u), this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE_WITH_CALLBACK + " success")
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
                var o = this;
                if (this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " " + t), this.token = e, this.server = t, this.state = i.ENUM_CONNECT_STATE.connecting, this.connectCallback = r, this.websocket && 1 === this.websocket.readyState) this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " websocket is connected"), this.resetConnectTimer(), this.state = i.ENUM_CONNECT_STATE.connected; else {
                    this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " need new websocket");
                    try {
                        this.websocket && (this.logger.warn(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " close error websocket"), this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null), this.websocket = new WebSocket(this.server), this.websocket.onopen = function () {
                            o.resetConnectTimer(), o.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " websocket open call"), o.bindWebSocketHandle(), o.updateToken(), o.state = i.ENUM_CONNECT_STATE.connected
                        }, this.websocket.onclose = function (e) {
                            o.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " websocket close call  " + JSON.stringify(e))
                        }, this.websocket.onerror = function (e) {
                            o.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " websocket onerror call  " + JSON.stringify(e))
                        }
                    } catch (e) {
                        this.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " websocket error " + e)
                    }
                }
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CONNECT_SERVER + " " + this.tryConnectInterval), this.tryConnectTimer = setTimeout((function () {
                    o.startConnectTimer(r)
                }), this.tryConnectInterval)
            }, e.prototype.startConnectTimer = function (e) {
                if (this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_START_CONNECT_TIMER + " call"), this.tryConnectCount >= i.MAX_TRY_CONNECT_COUNT) return this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_START_CONNECT_TIMER + " beyond " + this.server + "max limit"), void this.disconnectCallback();
                this.websocket && 1 === this.websocket.readyState ? (this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_START_CONNECT_TIMER + " websocket is connected"), this.resetConnectTimer()) : (this.tryConnectCount += 1, this.connectServer(this.token, this.server, e))
            }, e.prototype.disconnectServer = function () {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_DISCONNECT_SERVER + " call"), this.connectCallback = null, this.resetCheckMessage(), this.resetConnectTimer(), this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null), this.token = "", this.sessionInfos = {}, this.tokenType = 0, this.tryHeartbeatCount = 0, this.tryConnectCount = 0, this.state = i.ENUM_CONNECT_STATE.disconnect
            }, e.prototype.isServerConnected = function () {
                return !(!this.websocket || 1 !== this.websocket.readyState)
            }, e.prototype.createSession = function (e, t, r, o, n, a, d, c) {
                void 0 === n && (n = ""), void 0 === a && (a = ""), this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CREATE_SESSION + " call: " + o);
                var l = "";
                i.PROTO_VERSION.split(".").forEach((function (e, t) {
                    return 1 == e.length && 1 == t ? l += "0" + e : l += e
                }));
                var u = {
                    type: t,
                    stream_id: o,
                    platform: this.platform,
                    browser: this.browser.name,
                    version: this.browser.version,
                    app_id: this.appid,
                    negotiate_mode: r,
                    strAuthParam: n,
                    sdk_version: 1 * l,
                    turn_server_host: "string" == typeof a ? a : ""
                };
                this.sendMessageWithCallback("CreateSessionReq", e, 0, u, d, c)
            }, e.prototype.createSessionWithSdp = function (e, t, r) {
                var o = e.seq, n = e.type, a = e.streamId, d = e.strAuthParam, c = e.sdp;
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CREATE_SESSION + " call: " + a);
                var l = "";
                i.PROTO_VERSION.split(".").forEach((function (e, t) {
                    return 1 == e.length && 1 == t ? l += "0" + e : l += e
                }));
                var u = {
                    type: n,
                    app_id: this.appid,
                    stream_id: a,
                    sdp: c,
                    user_id: this.userid,
                    platform: this.platform,
                    browser: this.browser.name,
                    sdk_vers: parseInt(l),
                    clientIp: "",
                    media_server_host: "",
                    strAuthParam: d
                };
                this.sendMessageWithCallback("CreateSessionWithSdpReq", o, 0, u, t, r)
            }, e.prototype.removeSession = function (e) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_REMOVE_SESSION + " call" + e), this.sessionInfos[e] && delete this.sessionInfos[e]
            }, e.prototype.sendCloseSession = function (e, t, r, o, i) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_REMOVE_SESSION + " call: " + t);
                var n = {reason: r};
                this.removeSession(t), this.sendMessageWithCallback("CloseSessionReq", e, t, n, o, i)
            }, e.prototype.sendMessage = function (e, t, r, o) {
                if (this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE + " call " + e), this.websocket && 1 === this.websocket.readyState) {
                    var i = {header: this.getHeader(e, t, r), body: o}, n = JSON.stringify(i);
                    this.websocket.send(n), this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE + " success")
                } else this.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MESSAGE + " connect not establish")
            }, e.prototype.handleRespondData = function (e, t) {
                this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_RESPOND_DATA + " call");
                var r = this.sendDataMap[t.header.seq];
                if (null != r) {
                    var o = r._data;
                    o.cmd !== e ? this.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_RESPOND_DATA + " command is not match") : o.success && o.success(t.header.seq, t.header.session_id, t.body), delete this.sendDataMap[t.header.seq], this.sendDataList.remove(r)
                } else {
                    if ("CloseSessionRsp" == t.header.cmd) return;
                    this.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_RESPOND_DATA + " cannot find data " + e)
                }
            }, e.prototype.addSession = function (e, t) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_ADD_SESSION + " call" + e), this.sessionInfos[e] = {token: t}
            }, e.prototype.handlePushData = function (e) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_PUSH_DATA + " call " + e.header.cmd + " session " + e.header.session_id);
                var t = this.pushCallback[e.header.cmd + e.header.session_id];
                t ? t.callback && t.callback(e.header.seq, e.header.session_id, e.body) : this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_PUSH_DATA + " no callbackData " + e.header.cmd + " session: " + e.header.session_id)
            }, e.prototype.handlePushResetSessionData = function (e) {
                this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_PUSH_RESET_SESSION_DATA + " call ");
                var t = [];
                if (0 == e.body.cResetType) t = Object.keys(this.sessionInfos); else if (1 == e.body.cResetType) for (var r = 0; r < e.body.session_ids.length; r++) t.push(e.body.session_ids[r]);
                if (this.sendResetSessionAck(e.header.seq, 0, 0), 0 != t.length) for (var o = 0; o < t.length; o++) {
                    var i = this.pushCallback[e.header.cmd + t[o]];
                    null == i ? this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_PUSH_RESET_SESSION_DATA + " no callbackData " + t[o]) : i.callback && i.callback(e.header.seq, t[o], e.body)
                } else this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_HANDLE_PUSH_RESET_SESSION_DATA + " no session to callback")
            }, e.prototype.sendMediaDesc = function (e, t, r, o, i, n) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MEDIA_DESC + " call: " + t);
                var a = {type: r, sdp: o.sdp};
                null != o.width && (a.width = o.width), null != o.height && (a.height = o.height), null != o.frameRate && (a.framerate = o.frameRate), null != o.video_min_kpbs && (a.video_min_kpbs = o.video_min_kpbs), null != o.video_max_kpbs && (a.video_max_kpbs = o.video_max_kpbs), null != o.audio_kpbs && (a.audio_kpbs = o.audio_kpbs), null != o.keyframe_intv && (a.keyframe_intv = o.keyframe_intv), null != o.min_play_buf_level_ms && (a.min_play_buf_level_ms = o.min_play_buf_level_ms), this.sendMessageWithCallback("MediaDescReq", e, t, a, i, n)
            }, e.prototype.sendCandidateInfo = function (e, t, r, o, i) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_CANDIDATE_INFO + " call: " + t);
                for (var n = [], a = 0; a < r.length; a++) {
                    var d = {candidate: r[a].candidate, sdpMid: r[a].sdpMid, sdpMLineIndex: r[a].sdpMLineIndex};
                    n.push(d)
                }
                var c = {infos: n};
                this.sendMessageWithCallback("CandidateInfoReq", e, t, c, o, i)
            }, e.prototype.sendMediaDescAck = function (e, t, r) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_MEDIA_DESC_ACK + " call: " + t);
                var o = {result: r};
                this.sendMessage("MediaDescAck", e, t, o)
            }, e.prototype.sendCandidateInfoAck = function (e, t, r) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_CANDIDATE_INFO_ACK + " call: " + t);
                var o = {result: r};
                this.sendMessage("CandidateInfoAck", e, t, o)
            }, e.prototype.sendCloseSessionAck = function (e, t, r) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_CLOSE_SESSION_ACK + " call: " + t);
                var o = {result: r};
                this.sendMessage("CloseSessionAck", e, t, o)
            }, e.prototype.sendResetSessionAck = function (e, t, r) {
                this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_RESET_SESSION_ACK + " call: " + t);
                var o = {result: r};
                this.sendMessage("SessionResetAck", e, t, o)
            }, e.prototype.registerPushCallback = function (e, t, r) {
                r && "function" == typeof r && (this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_REGISTER_PUSH_CALLBACK + " set callback " + t), this.pushCallback[e + t] = {callback: r})
            }, e.prototype.unregisterPushCallback = function (e, t) {
                delete this.pushCallback[e + t]
            }, e.prototype.checkMessageTimeout = function () {
                for (var e = this, t = this.sendDataList.getFirst(), r = Date.parse(new Date + ""), o = 0, n = 0, a = 0; null != t && !(t._data.time + this.sendDataTimeout > r);) if (delete this.sendDataMap[t._data.seq], this.sendDataList.remove(t), ++n, -1 != this.checkMessageList.indexOf(t._data.cmd)) {
                    if (null == t._data.error || this.sendDataDropTimeout > 0 && t._data.time + this.sendDataDropTimeout < r ? ++a : (this.logger.warn(s.ZEGO_WEBRTC_ACTION.SIGNAL_CHECK_MESSAGE_TIMEOUT + " error cmd = " + t._data.cmd), t._data.error && t._data.error(i.SEND_MSG_TIMEOUT, t._data.seq)), ++o >= this.sendDataCheckOnceCount) break;
                    t = this.sendDataList.getFirst()
                } else t = this.sendDataList.getFirst();
                this.sendDataCheckTimer = setTimeout((function () {
                    e.checkMessageTimeout()
                }), this.sendDataCheckInterval), 0 == n && 0 == a || this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_CHECK_MESSAGE_TIMEOUT + " call success, state: timeout=" + n + " drop=" + a)
            }, e.prototype.sendHeartbeat = function () {
                var e = this;
                if (this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_HEARTBEAT + "call tryHeartbeatCount:" + this.tryHeartbeatCount), 0 != Object.keys(this.sessionInfos).length) if (this.state === i.ENUM_CONNECT_STATE.connected) {
                    if (++this.tryHeartbeatCount > i.MAX_TRY_HEARTBEAT_COUNT) return this.logger.error(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_HEARTBEAT + " heartbeat try limit"), void this.disconnectCallback();
                    var t = [];
                    for (var r in this.sessionInfos) t.push(parseInt(r));
                    var o = {session_ids: t};
                    this.sendMessageWithCallback("ClientHBReq", i.getSeq(), 0, o, (function (t, r, o) {
                        e.heartbeatInterval != o.hb_interval && (e.heartbeatInterval = o.hb_interval, e.onUpdateHeartBeatInterval(o.hb_interval)), e.tryHeartbeatCount = 0
                    }), (function (e, t) {
                    }))
                } else this.logger.warn(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_HEARTBEAT + " state error"); else this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_HEARTBEAT + " no need to heartbeat")
            }, e.prototype.QualityReport = function (e, t, r, i, n) {
                this.logger.debug(s.ZEGO_WEBRTC_ACTION.SIGNAL_QUALITY_REPORT + " call");
                var a = {streams: [o(o({}, r), {aid: t})]};
                this.sendMessageWithCallback("QualityReportReq", e, t, a, i, n)
            }, e.prototype.sendStreamStatus = function (e, t, r, o, i) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_STREAM_STATUS + " call " + t);
                var n = {mic_status: o, camera_status: r};
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_STREAM_STATUS + " stream " + (i || "") + " status " + JSON.stringify(n)), this.sendMessage("StreamStatusNotify", e, t, n)
            }, e.prototype.ActivatePlayVideoStream = function (e, t, r, o, i) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_ACTIVE_PLAY_VIDEO_STREAM + " call");
                var n = {active: r ? 0 : 1, layer: 0};
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_ACTIVE_PLAY_VIDEO_STREAM + " activate video " + JSON.stringify(n)), this.sendMessageWithCallback("ActivateVideoPlayStreamReq", e, t, n, o, i)
            }, e.prototype.ActivatePlayAudioStream = function (e, t, r, o, i) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_ACTIVE_PLAY_AUDIO_STREAM + " call");
                var n = {active: r ? 0 : 1, layer: 0};
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_ACTIVE_PLAY_AUDIO_STREAM + " activate audio " + JSON.stringify(n)), this.sendMessageWithCallback("ActivateAudioPlayStreamReq", e, t, n, o, i)
            }, e.prototype.sendBroadcasterStatus = function (e, t, r) {
                this.logger.info(s.ZEGO_WEBRTC_ACTION.SIGNAL_SEND_BROADCAST_STATUS + " call " + t);
                var o = {status: r};
                this.sendMessage("BroadcasterStatusNotify", e, t, o)
            }, e
        }();
        t.ZegoSignal = n
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoPlayWeb = void 0;
        var o = r(0), i = r(8), s = r(2), n = r(1), a = function () {
            function e(e, t, r, i, s, n, a) {
                this.state = o.ENUM_PLAY_STATE.stop, this.candidateInfo = [], this.waitICETimer = null, this.waitingICETimeInterval = 5e3, this.waitingOfferTimer = null, this.waitingOfferTimeInterval = 5e3, this.waitingServerTimer = null, this.waitingServerTimerInterval = 3e3, this.qualityTimer = null, this.broadcasterStatus = o.ENUM_BROADCASTER_STATUS.stop, this.playQualityList = [], this.maxQualityListCount = 10, this.lastPlayStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    time: 0,
                    audioTime: 0,
                    videoTime: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    audioPacketsReceived: 0,
                    videoPacketsReceived: 0,
                    framesDecoded: 0,
                    framesReceived: 0,
                    framesDropped: 0,
                    audioBitrate: 0
                }, this.reportSeq = NaN, this.streamReportSeq = o.getSeq(), this.videoSizeCallback = !1, this.qualityUpload = !1, this.qualityUploadInterval = 3e4, this.qualityUploadLastTime = 0, this.remoteStream = null, this.playStream = null, this.playOption = {}, this.closeSessionSignal = !1, this.stateNego = o.ENUM_PLAY_STATE_NEGO.stop, this.negoTimer = null, this.negoInterval = 25e3, this.playEvent = !1, this.gotStreamStatus = !1, this.soundLevel = 0, this.mic = null, this.script = null, this.beginTime = 0, this.firstFrameTime = 0, this.resourceMode = 0, this.gwNode = "", this.gwNodeList = [], this.gwNodeTTL = 0, this.gwNodeTryCount = 1, this.logger = e, this.signal = t, this.dataReport = r, this.qualityTimeInterval = i, this.streamCenter = s, this.ac = n, this.stateCenter = a, this.dataReport.newReport(this.streamReportSeq), this.dataReport.addMsgInfo(this.streamReportSeq, {abs_time: Date.now()})
            }

            return e.prototype.startPlay = function (e, t, r) {
                var i = this;
                if (this.logger.info("zp.sp.1 called ", e), this.playEvent = !1, this.signal && this.signal.negoInterval && (this.negoInterval = this.signal.negoInterval), e) {
                    this.streamId = e, this.getRemoteStreamSuc = t, this.playOption = r || {}, r && r.videoCodec && (this.playOption.videoCodec = r.videoCodec), this.dataReport.addMsgInfo(this.reportSeq, {
                        audio_activate: n.ZegoRTCLogEvent.kZegoTaskPlayStart.audio_activate(1 == this.playOption.audio ? 1 : 0 == this.playOption.audio ? 0 : 1),
                        video_activate: n.ZegoRTCLogEvent.kZegoTaskPlayStart.video_activate(1 == this.playOption.video ? 1 : 0 == this.playOption.video ? 0 : 1)
                    }), this.sessionSeq = o.getSeq(), this.dataReport.eventStart(this.reportSeq, "CreateSession"), this.dataReport.eventStart(this.streamReportSeq, "CreateSession");
                    var s = e;
                    1 == this.streamCenter.testEnvironment && (s = "zegotest-" + this.streamCenter.appid + "-" + e), this.signal.createSession(this.sessionSeq, 1, 0, s, r && r.streamParams, this.gwNode, (function (e, t, r) {
                        var o = r.turn_server, s = o.split("?")[0] && o.split("?")[0].slice(5),
                            a = i.streamCenter.server.split("?"), d = a[1] && a[1].slice(2);
                        i.dataReport.eventEndWithMsg(i.streamReportSeq, "CreateSession", {
                            sessionId: r.session_id,
                            url: "webrtc://" + s + "/" + d + "/" + i.streamId
                        }), i.dataReport.eventEndWithMsg(i.reportSeq, "CreateSession", {
                            sessionId: r.session_id,
                            url: "webrtc://" + s + "/" + d + "/" + i.streamId
                        }), i.logger.info("zp.sp.1 " + i.streamId + " sessionId:" + r.session_id), i.sessionSeq == e ? 0 !== r.result ? (i.logger.error("zp.sp.1 " + i.streamId + " create error"), i.gwNodeList = r.gw_nodes && r.gw_nodes.length > 0 ? r.gw_nodes : i.gwNodeList, i.gwNode = r.gw_nodes && r.gw_nodes.length > 0 ? i.gwNodeList[0] : i.gwNode, i.gwNodeTTL = r.gw_nodes_ttl ? (new Date).getTime() + 1e3 * r.gw_nodes_ttl : i.gwNodeTTL, i.stateCenter.clientIP = r.clientip ? r.clientip : i.stateCenter.clientIP, i.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kSessionRequestError)) : (i.sessionId = r.session_id, i.sessionToken = r.session_token, i.gwNodeList = r.gw_nodes && r.gw_nodes.length > 0 ? r.gw_nodes : i.gwNodeList, i.gwNode = r.gw_nodes && r.gw_nodes.length > 0 ? i.gwNodeList[0] : i.gwNode, i.gwNodeTTL = r.gw_nodes_ttl ? (new Date).getTime() + 1e3 * r.gw_nodes_ttl : i.gwNodeTTL, i.stateCenter.clientIP = r.clientip ? r.clientip : i.stateCenter.clientIP, i.dataReport.addMsgInfo(i.reportSeq, {session_id: n.ZegoRTCLogEvent.kZegoTaskPlayStart.session_id(i.sessionId)}), i.onCreatePlaySessionSuccess(r)) : i.logger.error("zp.sp.1 seq is not match.")
                    }), (function (e, t) {
                        i.dataReport.eventEndWithMsg(i.reportSeq, "CreateSession", {error: e}), i.dataReport.eventEndWithMsg(i.streamReportSeq, "CreateSession", {error: e}), i.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kSessionRequestError)
                    })), this.state = o.ENUM_PLAY_STATE.waitingSessionRsp, this.logger.info("zp.sp.1 " + this.streamId + " called success"), this.stateNego = o.ENUM_PLAY_STATE_NEGO.start, this.negoTimer = setTimeout((function () {
                        i.logger.error("zp.sp.1 waiting timeout"), i.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayNegoTimeoutError)
                    }), this.negoInterval)
                } else this.logger.warn("zp.sp.1 streamId is null")
            }, e.prototype.onCreatePlaySessionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.ops.1 " + this.streamId + " success");
                var r = [];
                if (e.turn_server) {
                    var o = e.turn_server;
                    this.stateCenter.turnOverTcpOnly && (o = o.replace("udp", "tcp")), this.logger.info("zp ops.1 turn over tcp " + o), r.push(o)
                }
                e.stun_server && r.push(e.stun_server);
                var i = {
                    iceTransportPolicy: "relay",
                    iceServers: [{urls: r, username: e.turn_username, credential: e.turn_auth_key}]
                };
                this.logger.info("zp.ops.1 " + this.streamId + " username: " + e.turn_username), this.logger.info("zp.ops.1 " + this.streamId + " credential: " + e.turn_auth_key), this.peerConnection = new RTCPeerConnection(i), this.peerConnection.onicecandidate = function (e) {
                    t.onIceCandidate(e)
                }, this.peerConnection.onsignalingstatechange = function (e) {
                    t.onConnectionStateChange(e)
                }, this.peerConnection.oniceconnectionstatechange = function (e) {
                    t.onIceConnectionStateChange(e)
                }, this.peerConnection.ontrack = function (e) {
                    t.onGotRemoteStream(e.streams[0])
                };
                var s = {offerToReceiveAudio: 1, offerToReceiveVideo: 1};
                this.playOption && !1 === this.playOption.video && (s.offerToReceiveVideo = 0), this.playOption && !1 === this.playOption.audio && (s.offerToReceiveAudio = 0), this.logger.info("zp.ops.1 " + this.streamId + " createOffer: " + JSON.stringify(s)), this.dataReport.eventStart(this.reportSeq, "CreateOffer"), this.dataReport.eventStart(this.streamReportSeq, "CreateOffer"), this.peerConnection.createOffer(s).then((function (e) {
                    t.dataReport.eventEnd(t.reportSeq, "CreateOffer"), t.dataReport.eventEnd(t.streamReportSeq, "CreateOffer"), t.onCreateOfferSuccess(e)
                }), (function (e) {
                    t.dataReport.eventEndWithMsg(t.reportSeq, "CreateOffer", {error: e.toString()}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "CreateOffer", {error: e.toString()}), t.logger.error("zp.ops.0 " + t.streamId + " create offer error " + e.toString()), t.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kCreateOfferError, !0)
                })), this.signal.registerPushCallback("MediaDescPush", this.sessionId, (function (e, r, o) {
                    t.onRecvMediaDesc(e, r, o)
                })), this.signal.registerPushCallback("CandidateInfoPush", this.sessionId, (function (e, r, o) {
                    t.onRecvCandidateInfo(e, r, o)
                })), this.signal.registerPushCallback("CloseSessionPush", this.sessionId, (function (e, r, o) {
                    t.onRecvCloseSession(e, r, o)
                })), this.signal.registerPushCallback("SessionResetPush", this.sessionId, (function (e, r, o) {
                    t.onRecvResetSession(e, r, o)
                })), this.signal.registerPushCallback("StreamStatusNotifyPush", this.sessionId, (function (e, r, o) {
                    t.gotStreamStatus = !0, t.streamStatus = o, t.playStream && t.onRecvStreamStatus(o)
                })), this.signal.registerPushCallback("PlayEventPush", this.sessionId, (function (e, r, o) {
                    t.onRecvPlayEvent(e, r, o)
                })), this.signal.registerPushCallback("ClientInfoPush", this.sessionId, (function (e, r, o) {
                    t.onRecvClientInfo(e, r, o)
                })), this.logger.info("zp.ops.1 " + this.streamId + " call success")
            }, e.prototype.onCreateOfferSuccess = function (e) {
                var t = this;
                this.logger.info("zp.oco.1 " + this.streamId + " localSdp1 " + e.sdp.substr(0, e.sdp.length / 2)), this.logger.info("zp.oco.1 " + this.streamId + " localSdp2 " + e.sdp.substr(e.sdp.length / 2)), e.sdp = e.sdp.replace(/sendrecv/g, "recvonly"), e.sdp = e.sdp.replace(/useinbandfec=/, "stereo=1;useinbandfec="), this.playOption.videoCodec && (e.sdp = i.SdpUtil.getSDPByVideDecodeType(e.sdp, this.playOption.videoCodec)), this.dataReport.eventStart(this.reportSeq, "SetLocalDescription"), this.dataReport.eventStart(this.streamReportSeq, "SetLocalDescription"), this.peerConnection.setLocalDescription(e).then((function () {
                    t.dataReport.eventEnd(t.reportSeq, "SetLocalDescription"), t.dataReport.eventEnd(t.streamReportSeq, "SetLocalDescription"), t.onSetLocalDescriptionSuccess(e)
                }), (function (e) {
                    t.logger.error("zp.oca.1 " + t.streamId + " set error " + e.toString()), t.dataReport.eventEnd(t.reportSeq, "SetLocalDescription", {error: e.toString()}), t.dataReport.eventEnd(t.streamReportSeq, "SetLocalDescription", {error: e.toString()}), t.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kSetLocalDescError, !0)
                }))
            }, e.prototype.onSetLocalDescriptionSuccess = function (e) {
                var t = this;
                this.logger.info("zp.osd.1 " + this.streamId + " success");
                var r = {sdp: e.sdp};
                2 == this.resourceMode && (r.min_play_buf_level_ms = 500), this.answerSeq = o.getSeq(), this.dataReport.eventStart(this.reportSeq, "SendMediaDesc"), this.dataReport.eventStart(this.streamReportSeq, "SendMediaDesc"), this.signal.sendMediaDesc(this.answerSeq, this.sessionId, 0, r, (function (e, r, i) {
                    t.logger.info("zp.osd.1 " + t.streamId + " sendMediaDesc resp"), t.answerSeq == e && t.sessionId == r ? (t.logger.info("zp.osd.1 " + t.streamId + " send success stateNego:waiterAnswer"), t.stateNego = o.ENUM_PLAY_STATE_NEGO.waiterAnswer, t.dataReport.eventEnd(t.reportSeq, "SendMediaDesc"), t.dataReport.eventEnd(t.streamReportSeq, "SendMediaDesc"), t.waitingOfferTimer = setTimeout((function () {
                        t.state == o.ENUM_PLAY_STATE.waitingOffserRsp && (t.logger.error("zp.osd.1 " + t.streamId + " waiting timeout"), t.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kCandidateError))
                    }), t.waitingOfferTimeInterval), t.state = o.ENUM_PLAY_STATE.waitingServerAnswer) : t.logger.error("zp.osd.1 " + t.streamId + " seq or sessionId is not equal " + t.answerSeq + " " + e, 0 + t.sessionId + " " + r)
                }), (function (e, r) {
                    t.logger.error("zp.osd.1 " + t.streamId + " failed to send " + e), t.dataReport.eventEndWithMsg(t.reportSeq, "SendMediaDesc", {error: e}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "SendMediaDesc", {error: e}), t.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kMediaDescError)
                })), this.state = o.ENUM_PLAY_STATE.waitingOffserRsp
            }, e.prototype.onRecvMediaDesc = function (e, t, r) {
                var i = this;
                if (this.logger.info("zp.orm.1 " + this.streamId + " received ", r), this.stateNego = o.ENUM_PLAY_STATE_NEGO.waitingCandidate, this.logger.info("zp.orm.1 " + this.streamId + " received stateNego:waitingCandidate"), this.state === o.ENUM_PLAY_STATE.waitingServerAnswer) {
                    null != this.waitingOfferTimer && (clearTimeout(this.waitingOfferTimer), this.waitingOfferTimer = null), this.dataReport.addEvent(this.reportSeq, "RecvMediaDesc"), this.dataReport.addEvent(this.streamReportSeq, "RecvMediaDesc"), this.signal.sendMediaDescAck(e, this.sessionId, 0);
                    var s = {
                        type: "answer", sdp: r.sdp, toJSON: function () {
                        }
                    };
                    this.dataReport.eventStart(this.reportSeq, "SetRemoteDescription"), this.dataReport.eventStart(this.streamReportSeq, "SetRemoteDescription"), this.logger.info("zp.orm.1 " + this.streamId + " remoteSdp ", s.sdp), this.peerConnection.setRemoteDescription(new RTCSessionDescription(s)).then((function () {
                        i.dataReport.eventEnd(i.reportSeq, "SetRemoteDescription"), i.dataReport.eventEnd(i.streamReportSeq, "SetRemoteDescription"), i.logger.info("zp.orm.1 " + i.streamId + " set success")
                    }), (function (e) {
                        i.logger.error("zp.orm.1 " + i.streamId + " set remote error " + e.toString()), i.dataReport.eventEndWithMsg(i.reportSeq, "SetRemoteDescription", {error: e.toString()}), i.dataReport.eventEndWithMsg(i.streamReportSeq, "SetRemoteDescription", {error: e.toString()}), i.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kSetRemoteDescError, !0)
                    })), this.waitICETimer = setTimeout((function () {
                        i.state == o.ENUM_PLAY_STATE.waitingServerICE && (i.logger.error("zp.orm.1 " + i.streamId + " waiting server timeout"), i.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kCandidateError))
                    }), this.waitingICETimeInterval), this.state = o.ENUM_PLAY_STATE.waitingServerICE, this.logger.info("zp.orm.1 " + this.streamId + " call success")
                } else this.logger.error("zp.orm.1 " + this.streamId + " current state " + this.state + " not allowed")
            }, e.prototype.onRecvCandidateInfo = function (e, t, r) {
                var i = this;
                if (this.logger.info("zp.orci.1 " + this.streamId + " received "), this.state == o.ENUM_PLAY_STATE.waitingServerICE) {
                    null != this.waitICETimer && (clearTimeout(this.waitICETimer), this.waitICETimer = null), this.dataReport.addEvent(this.reportSeq, "RecvIceCandidate"), this.dataReport.addEvent(this.streamReportSeq, "RecvIceCandidate"), this.signal.sendCandidateInfoAck(e, this.sessionId, 0), this.sendCandidateInfo(this.candidateInfo), this.candidateInfo = [];
                    for (var s = 0; s < r.infos.length; s++) {
                        var a = {
                            sdpMid: r.infos[s].sdpMid,
                            sdpMLineIndex: r.infos[s].sdpMLineIndex,
                            candidate: r.infos[s].candidate
                        };
                        this.logger.info("zp.orci.1 " + this.streamId + " candidate " + a.candidate), this.peerConnection.addIceCandidate(new RTCIceCandidate(a)).then((function () {
                            i.logger.debug("zp.orci.1 " + i.streamId + " add success")
                        }), (function (e) {
                            i.logger.error("zp.orci.1 " + i.streamId + " add error " + e.toString()), i.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kCandidateError, !0)
                        }))
                    }
                    this.state = o.ENUM_PLAY_STATE.connecting, this.logger.info("zp.orci.1 " + this.streamId + " call success")
                } else this.logger.warn("zp.orci.1 " + this.streamId + " current state " + this.state + " not allowed")
            }, e.prototype.onRecvPlayEvent = function (e, t, r) {
                if (this.logger.info("zp.orpe.1 " + this.streamId + " received"), !0 === this.playEvent && 0 == r.event) {
                    this.logger.info("zp.orpe.1 " + this.streamId + " retry: " + this.streamId);
                    var i = this.streamId, s = this.playOption;
                    this.signal.sendCloseSession(o.getSeq(), this.sessionId, 1), this.resetPlay(), this.startPlay(i, this.getRemoteStreamSuc, s)
                } else this.playEvent = !0
            }, e.prototype.onRecvClientInfo = function (e, t, r) {
                this.stateCenter.clientIP !== r.clientip && this.logger.warn("zp.orci.1 client ip changed " + this.stateCenter.clientIP + " " + r.clientip), this.stateCenter.clientIP = r.clientip
            }, e.prototype.onIceCandidate = function (e) {
                if (this.logger.info("zp.oic.1 " + this.streamId + " called"), null != e.candidate) if (this.logger.debug("zp.oic.1 " + this.streamId + " candidate " + e.candidate.candidate), this.state < o.ENUM_PLAY_STATE.connecting || this.state == o.ENUM_PLAY_STATE.stop) this.logger.debug("zp.oic.1 " + this.streamId + " cached"), this.candidateInfo.push({
                    candidate: e.candidate.candidate,
                    sdpMid: e.candidate.sdpMid,
                    sdpMLineIndex: e.candidate.sdpMLineIndex
                }); else {
                    this.logger.debug("zp.oic.1 " + this.streamId + " send");
                    var t = {
                        candidate: e.candidate.candidate,
                        sdpMid: e.candidate.sdpMid,
                        sdpMLineIndex: e.candidate.sdpMLineIndex
                    };
                    this.sendCandidateInfo([t])
                }
            }, e.prototype.onConnectionStateChange = function (e) {
                this.logger.info("zp.oisc.1 " + this.streamId + " called " + e.target.signalingState)
            }, e.prototype.onIceConnectionStateChange = function (e) {
                if (this.state != o.ENUM_PLAY_STATE.stop && null != this.peerConnection) if (this.logger.info("zp.oisc.1 " + this.streamId + " stateChanged " + this.peerConnection.iceConnectionState), "connected" === this.peerConnection.iceConnectionState) {
                    for (var t in this.dataReport.addEvent(this.reportSeq, "IceConnected"), this.dataReport.addEvent(this.streamReportSeq, "IceConnected"), this.state != o.ENUM_PLAY_STATE.playing && this.onPlayStateUpdate(o.ENUM_PLAY_STATE_UPDATE.start, this.streamId, {
                        code: 0,
                        message: ""
                    }, !0), this.state = o.ENUM_PLAY_STATE.playing, this.dataReport.eventStart(this.reportSeq, "PlayState"), this.dataReport.eventStart(this.streamReportSeq, "PlayState"), this.streamCenter.publisherList) {
                        if (this.streamCenter.publisherList[t].publisher.state == o.ENUM_PUBLISH_STATE.publishing && this.broadcasterStatus == o.ENUM_BROADCASTER_STATUS.stop) {
                            this.signal && this.signal.sendBroadcasterStatus(o.getSeq(), this.sessionId, 1), this.broadcasterStatus = o.ENUM_BROADCASTER_STATUS.start;
                            break
                        }
                    }
                    if (this.setPlayQualityTimer(), this.stateNego = o.ENUM_PLAY_STATE_NEGO.iceConnected, this.logger.info("zp.oisc.1 " + this.streamId + " stateNego:iceConnected"), this.negoTimer && clearTimeout(this.negoTimer), 0 == this.firstFrameTime) {
                        this.firstFrameTime = (new Date).getTime() - this.beginTime;
                        var r = o.getReportSeq();
                        this.dataReport.newReport(r, n.ZegoRTCLogEvent.kZegoTaskPlayDecodeFirstVideoFrame.event), this.dataReport.addMsgInfo(r, {
                            session_id: n.ZegoRTCLogEvent.kZegoTaskPlayDecodeFirstVideoFrame.session_id(this.sessionId),
                            fft_consumed: n.ZegoRTCLogEvent.kZegoTaskPlayDecodeFirstVideoFrame.fft_consumed(this.firstFrameTime)
                        }), this.dataReport.uploadReport(r)
                    }
                } else "closed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceClosed"), this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState)) : "failed" === this.peerConnection.iceConnectionState ? (this.dataReport.addEvent(this.reportSeq, "IceFailed"), this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState)) : "disconnected" === this.peerConnection.iceConnectionState && (this.dataReport.addEvent(this.reportSeq, "IceDisconnected"), this.stateNego = o.ENUM_PLAY_STATE_NEGO.iceDisconnected, this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState))
            }, e.prototype.checkPlayConnectionFailedState = function (e) {
                this.logger.info("zp.oics.1  state " + this.state + " connectionState " + e), this.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kMediaConnectionError)
            }, e.prototype.clearPlayQualityTimer = function () {
                null != this.qualityTimer && (clearInterval(this.qualityTimer), this.qualityTimer = null), this.lastPlayStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    time: 0,
                    audioTime: 0,
                    videoTime: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    videoPacketsReceived: 0,
                    audioPacketsReceived: 0,
                    framesDecoded: 0,
                    framesDropped: 0,
                    framesReceived: 0,
                    audioBitrate: 0
                }
            }, e.prototype.resetPlay = function () {
                this.logger.info("zp.rp.1 " + this.streamId + " call"), this.state = o.ENUM_PLAY_STATE.stop, this.playEvent = !1, null != this.peerConnection && (this.peerConnection.close(), this.peerConnection = null), null != this.waitingOfferTimer && (clearTimeout(this.waitingOfferTimer), this.waitingOfferTimer = null), null != this.waitICETimer && (clearTimeout(this.waitICETimer), this.waitICETimer = null), null != this.negoTimer && (clearTimeout(this.negoTimer), this.negoTimer = null), this.clearPlayQualityTimer(), this.signal && (this.signal.unregisterPushCallback("MediaDescPush", this.sessionId), this.signal.unregisterPushCallback("CandidateInfoPush", this.sessionId), this.signal.unregisterPushCallback("CloseSessionPush", this.sessionId), this.signal.unregisterPushCallback("SessionResetPush", this.sessionId), this.signal.unregisterPushCallback("PublishEventPush", this.sessionId), this.signal.unregisterPushCallback("ClientInfoPush", this.sessionId)), this.sessionSeq = 0, this.answerSeq = 0, this.videoSizeCallback = !1, this.stopSoundLevel()
            }, e.prototype.setPlayQualityTimer = function () {
                var e = this;
                null == this.qualityTimer && (this.logger.info("zp.spq.1 " + this.streamId + " startTimer"), this.clearPlayQualityTimer(), this.qualityTimer = setInterval((function () {
                    if (e.peerConnection) {
                        var t = [e.peerConnection.getStats(null)];
                        "Chrome" == s.ClientUtil.getBrowser() && t.push(new Promise((function (t, r) {
                            e.peerConnection.getStats((function (e) {
                                return t(e)
                            }), (function (e) {
                                return r(e)
                            }))
                        }))), Promise.all(t).then((function (t) {
                            e.getPlayStats(t[0], t[1])
                        })).catch((function (t) {
                            e.logger.info("zp.spq.1 " + e.streamId + " getStats error " + t.toString())
                        }))
                    }
                }), this.qualityTimeInterval), this.lastPlayStats = {
                    audioPacketsLost: 0,
                    videoPacketsLost: 0,
                    time: (new Date).getTime(),
                    audioTime: 0,
                    videoTime: 0,
                    audioBytesReceived: 0,
                    videoBytesReceived: 0,
                    videoPacketsReceived: 0,
                    audioPacketsReceived: 0,
                    framesDecoded: 0,
                    framesReceived: 0,
                    framesDropped: 0,
                    audioBitrate: 0
                })
            }, e.prototype.getPlayStats = function (e, t) {
                var r = this;
                if (null != e) {
                    for (var o, i = document.querySelectorAll("video, audio"), n = 0; n < i.length; n++) i[n].srcObject === this.playStream && (o = i[n]);
                    var a = {
                        audioFractionLost: 0,
                        audioPacketsLost: 0,
                        audioPacketsLostRate: 0,
                        audioBitrate: 0,
                        audioLevel: 0,
                        audioSendLevel: 0,
                        audioSamplingRate: 0,
                        audioCodec: "opus",
                        audioQuality: 0,
                        audioFPS: 0,
                        videoQuality: 0,
                        videoPacketsLost: 0,
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
                        currentRoundTripTime: 0,
                        googBandwidthLimitedResolution: void 0,
                        videoCodecName: "",
                        audioCodecName: "",
                        googCpuLimitedResolution: void 0,
                        googAvailableSendBandwidth: 0,
                        audioMuteState: this.playStream && this.playStream.getAudioTracks().length > 0 && this.playStream.getAudioTracks()[0].enabled ? "0" : "1",
                        videoMuteState: this.playStream && this.playStream.getVideoTracks().length > 0 && this.playStream.getVideoTracks()[0].enabled ? "0" : "1",
                        muted: o ? o.muted : void 0,
                        paused: o ? o.paused : void 0,
                        volume: o ? o.volume : void 0,
                        sinkId: o ? o.sinkId : void 0
                    }, d = this.lastPlayStats.time, c = 0;
                    e.forEach((function (e) {
                        if (("inbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesReceived) && ("audio" == e.mediaType || e.id.indexOf("AudioStream") >= 0)) {
                            0 != d && (a.audioBitrate = 8 * (e.bytesReceived - r.lastPlayStats.audioBytesReceived) / (e.timestamp - d)), a.audioBitrate < 0 && (a.audioBitrate = 0), a.audioJitter = e.jitter, e.packetsLost > 0 && (a.audioPacketsLost = e.packetsLost), a.audioFractionLost = e.fractionLost;
                            var t = e.packetsLost - r.lastPlayStats.audioPacketsLost;
                            a.audioFPS = (e.packetsReceived - r.lastPlayStats.audioPacketsReceived) / (e.timestamp - d) * 1e3, a.audioPacketsLostRate = t > 0 ? t / (e.packetsReceived - r.lastPlayStats.audioPacketsReceived + t) : 0, r.lastPlayStats.audioBytesReceived = e.bytesReceived, e.packetsLost > 0 && (r.lastPlayStats.audioPacketsLost = e.packetsLost), r.lastPlayStats.audioPacketsReceived = e.packetsReceived, r.lastPlayStats.audioTime = e.timestamp, r.lastPlayStats.time = e.timestamp, r.lastPlayStats.audioBitrate = a.audioBitrate
                        } else if (("inbound-rtp" == e.type || "ssrc" == e.type && null != e.bytesReceived) && ("video" == e.mediaType || e.id.indexOf("VideoStream") >= 0)) {
                            0 != d && (a.videoBitrate = 8 * (e.bytesReceived - r.lastPlayStats.videoBytesReceived) / (e.timestamp - d), a.videoFPS = 1e3 * (e.framesDecoded - r.lastPlayStats.framesDecoded) / (e.timestamp - d)), a.videoBitrate < 0 && (a.videoBitrate = 0), a.videoFPS < 0 && (a.videoFPS = 0), a.nackCount = e.nackCount, a.pliCount = e.pliCount, a.videoFractionLost = e.fractionLost, a.videoFramesDecoded = e.framesDecoded, e.packetsLost > 0 && (a.videoPacketsLost = e.packetsLost);
                            t = e.packetsLost - r.lastPlayStats.videoPacketsLost;
                            a.videoPacketsLostRate = t > 0 ? t / (e.packetsReceived - r.lastPlayStats.videoPacketsReceived + t) : 0, r.lastPlayStats.videoBytesReceived = e.bytesReceived, r.lastPlayStats.framesDecoded = e.framesDecoded, e.packetsLost > 0 && (r.lastPlayStats.videoPacketsLost = e.packetsLost), r.lastPlayStats.videoPacketsReceived = e.packetsReceived, r.lastPlayStats.videoTime = e.timestamp, r.lastPlayStats.time = e.timestamp
                        } else "track" == e.type && ("video" == e.kind || e.id.indexOf("video") >= 0) || e.frameWidth ? (a.frameHeight = e.frameHeight, a.frameWidth = e.frameWidth, 0 != d && (a.videoTransferFPS = 1e3 * (e.framesReceived - r.lastPlayStats.framesReceived) / (e.timestamp - d), a.videoFramesDropped = e.framesDropped - r.lastPlayStats.framesDropped), a.videoTransferFPS < 0 && (a.videoTransferFPS = 0), a.videoFramesDropped < 0 && (a.videoFramesDropped = 0), r.lastPlayStats.framesReceived = e.framesReceived, r.lastPlayStats.framesDropped = e.framesDropped) : "track" == e.type && ("audio" == e.kind || e.id.indexOf("audio") >= 0) ? (a.audioLevel = e.audioLevel, a.audioSendLevel = e.totalAudioEnergy, a.audioSamplingRate = e.totalSamplesDuration) : "candidate-pair" == e.type && (null != e.totalRoundTripTime && (a.totalRoundTripTime = e.totalRoundTripTime), null != e.currentRoundTripTime && (a.currentRoundTripTime = e.currentRoundTripTime, c = 1e3 * a.currentRoundTripTime))
                    })), t && t.result().forEach((function (e) {
                        "ssrc" == e.type && e.names().indexOf("googBandwidthLimitedResolution") >= 0 && (a.googBandwidthLimitedResolution = e.stat("googBandwidthLimitedResolution")), "ssrc" == e.type && e.names().indexOf("codecImplementationName") >= 0 && (a.codecImplementationName = e.stat("codecImplementationName")), "ssrc" == e.type && "video" == e.stat("mediaType") && e.names().indexOf("googCodecName") >= 0 && (a.videoCodecName = e.stat("googCodecName")), "ssrc" == e.type && "audio" == e.stat("mediaType") && e.names().indexOf("googCodecName") >= 0 && (a.audioCodecName = e.stat("googCodecName")), "ssrc" == e.type && e.names().indexOf("googCpuLimitedResolution") >= 0 && (a.googCpuLimitedResolution = e.stat("googCpuLimitedResolution")), "VideoBwe" == e.type && e.names().indexOf("googAvailableSendBandwidth") >= 0 && (a.googAvailableSendBandwidth = e.stat("googAvailableSendBandwidth"))
                    })), a.audioQuality = s.ClientUtil.getNetQuality(c, a.audioPacketsLostRate), a.videoQuality = s.ClientUtil.getNetQuality(c, a.videoPacketsLostRate), this.uploadPlayQuality(a);
                    var l = {
                        video: {
                            videoBitrate: a.videoBitrate,
                            videoFPS: a.videoFPS,
                            videoTransferFPS: a.videoTransferFPS,
                            videoFramesDecoded: a.videoFramesDecoded,
                            videoFramesDropped: a.videoFramesDropped,
                            videoPacketsLost: a.videoPacketsLost,
                            videoPacketsLostRate: a.videoPacketsLostRate,
                            videoQuality: a.videoQuality,
                            frameHeight: a.frameHeight,
                            frameWidth: a.frameWidth,
                            muteState: a.videoMuteState
                        },
                        audio: {
                            audioBitrate: a.audioBitrate,
                            audioCodec: a.audioCodec,
                            audioJitter: a.audioJitter,
                            audioLevel: a.audioLevel,
                            audioPacketsLost: a.audioPacketsLost,
                            audioPacketsLostRate: a.audioPacketsLostRate,
                            audioQuality: a.audioQuality,
                            audioSamplingRate: a.audioSamplingRate,
                            audioSendLevel: a.audioSendLevel,
                            muteState: a.audioMuteState,
                            audioFPS: a.audioFPS
                        },
                        nackCount: a.nackCount,
                        pliCount: a.pliCount,
                        totalRoundTripTime: a.totalRoundTripTime,
                        playData: a.playData,
                        currentRoundTripTime: a.currentRoundTripTime
                    };
                    void 0 !== a.muted && (l.muted = a.muted, l.paused = a.paused, l.volume = a.volume, l.sinkId = a.sinkId), void 0 !== a.videoCodecName && (l.video.googCodecName = a.videoCodecName, l.audio.googCodecName = a.audioCodecName, l.codecImplementationName = a.codecImplementationName, l.googAvailableSendBandwidth = a.googAvailableSendBandwidth), 0 != d && this.onPlayQualityUpdate(this.streamId, l)
                }
            }, e.prototype.uploadPlayQuality = function (e) {
                var t = this;
                if (this.qualityUpload) {
                    var r = Date.parse(new Date + "");
                    (0 == this.qualityUploadLastTime || r - this.qualityUploadLastTime >= this.qualityUploadInterval) && (e.stream_type = "play", e.stream_id = this.streamId, e.timeStamp = r / 1e3, this.logger.info("zp.upq.1 " + this.streamId + " upload" + JSON.stringify(e)), this.signal.QualityReport(o.getSeq(), this.sessionId, e, (function (e, r, o) {
                        void 0 !== o.report && (t.qualityUpload = o.report, t.qualityUploadInterval = o.report_interval_ms)
                    }), (function (e, r) {
                        t.logger.info("zp.upq.1 " + t.streamId + " upload failed " + e)
                    })), this.qualityUploadLastTime = r)
                }
            }, e.prototype.onRecvResetSession = function (e, t, r) {
                if (this.logger.info("zp.orrs.1 " + this.streamId + " received "), t == this.sessionId) {
                    this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                    var o = JSON.parse(JSON.stringify(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlaySessionClosedError));
                    this.negoTimer && clearTimeout(this.negoTimer), this.playStateUpdateError(o)
                } else this.logger.info("zp.orrs.1 " + this.streamId + " cannot find session")
            }, e.prototype.onRecvCloseSession = function (e, t, r) {
                this.logger.info("zp.orcs.1 " + this.streamId + " reason: " + r.reason), this.signal.sendCloseSessionAck(e, this.sessionId, 0);
                var o = JSON.parse(JSON.stringify(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlaySessionClosedError));
                o.msg += " reason:" + r.reason + (r.err_info && JSON.parse(r.err_info).action ? "action:" + JSON.parse(r.err_info).action : ""), this.negoTimer && clearTimeout(this.negoTimer);
                var i = 1 * r.reason,
                    s = r.err_info && JSON.parse(r.err_info).action ? JSON.parse(r.err_info).action : null,
                    a = ![4, 8, 10, 11, 12, 14, 24, 26, 27, 28].includes(i) && 5 != s && 2 != s;
                this.playStateUpdateError(o, a)
            }, e.prototype.onRecvStreamStatus = function (e) {
                if (this.logger.info("zp.orss.0 " + this.streamId + " call"), this.logger.info("zp.orss.0 " + this.streamId + " status camera_status: " + e.camera_status + " mic_status: " + e.mic_status), this.cameraStatus !== e.camera_status && this.onRemoteCameraStatusUpdate(this.streamId, this.getCameraMicStatus(e.camera_status)), this.micStatus !== e.mic_status && this.onRemoteMicStatusUpdate(this.streamId, this.getCameraMicStatus(e.mic_status)), this.cameraStatus = e.camera_status, this.micStatus = e.mic_status, "boolean" != typeof this.playOption.video && "boolean" != typeof this.playOption.audio) {
                    var t = this.playStream;
                    if (0 !== e.camera_status && t.getVideoTracks().forEach((function (e) {
                        e.enabled = !1, e.stop(), t.removeTrack(e)
                    })), 0 == e.camera_status && 0 == t.getVideoTracks().length && t.addTrack(this.remoteStream.clone().getVideoTracks()[0]), "Safari" === s.ClientUtil.getBrowser()) for (var r = document.querySelectorAll("video, audio"), o = 0; o < r.length; o++) r[o].srcObject === this.playStream && (r[o].srcObject = this.playStream);
                    this.logger.info("zp.orss.0 " + this.streamId + " call success")
                } else this.logger.info("zp.orss.0 " + this.streamId + " has set playType, ignore stream status")
            }, e.prototype.onGotRemoteStream = function (e) {
                var t = this;
                this.logger.info("zp.ogrs.0 " + this.streamId + " called " + e), e ? (this.playStream ? (this.playStream.getTracks().forEach((function (e) {
                    return t.playStream.removeTrack(e)
                })), e.clone().getTracks().forEach((function (e) {
                    return t.playStream.addTrack(e)
                }))) : this.playStream = e.clone(), this.remoteStream = e, this.getRemoteStreamSuc(this.playStream), this.gotStreamStatus && this.onRecvStreamStatus(this.streamStatus), this.dataReport.addEvent(this.reportSeq, "GetRemoteStream"), this.streamCenter.soundLevelDelegate && this.startSoundLevel()) : this.logger.warn("zp.ogrs.0 " + this.streamId + " remote stream is empty")
            }, e.prototype.sendCandidateInfo = function (e) {
                var t = this;
                this.logger.info("zp.sci.1 " + this.streamId + " called"), !(e = e.filter((function (e) {
                    return !(e.candidate.indexOf("tcp") > 0) && (!!e.candidate || void 0)
                }))) || e.length < 1 ? this.logger.info("zp.sci.1 " + this.streamId + " cancelled") : (this.dataReport.eventStart(this.reportSeq, "SendIceCandidate"), this.dataReport.eventStart(this.streamReportSeq, "SendIceCandidate"), this.stateNego !== o.ENUM_PLAY_STATE_NEGO.iceConnected && (this.stateNego = o.ENUM_PLAY_STATE_NEGO.sendCandidate), this.logger.info("zp.sci.1 " + this.streamId + " stateNego:sendCandidate"), this.signal.sendCandidateInfo(o.getSeq(), this.sessionId, e, (function (e, r, o) {
                    t.logger.debug("zp.sci.1 " + t.streamId + " send success"), t.dataReport.eventEnd(t.reportSeq, "SendIceCandidate"), t.dataReport.eventEnd(t.streamReportSeq, "SendIceCandidate")
                }), (function (e, r) {
                    t.logger.error("zp.sci.1 " + t.streamId + " failed to send: " + e.toString()), t.dataReport.eventEndWithMsg(t.reportSeq, "SendIceCandidate", {error: e}), t.dataReport.eventEndWithMsg(t.streamReportSeq, "SendIceCandidate", {error: e}), t.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kCandidateError)
                })))
            }, e.prototype.shouldSendCloseSession = function () {
                return this.state != o.ENUM_PLAY_STATE_UPDATE.stop && this.state != o.ENUM_PLAY_STATE.waitingSessionRsp
            }, e.prototype.playStateUpdateError = function (e, t) {
                this.logger.error("zp.psue.1 call ", this.streamId, JSON.stringify(e)), this.streamId && this.onPlayStateUpdate(o.ENUM_PLAY_STATE_UPDATE.error, this.streamId, e, t), this.logger.info("zp.psue.1 " + this.streamId + " ended")
            }, e.prototype.getCameraMicStatus = function (e) {
                return 0 == e ? "OPEN" : "MUTE"
            }, e.prototype.onPlayStateUpdate = function (e, t, r, o) {
            }, e.prototype.onPlayQualityUpdate = function (e, t) {
            }, e.prototype.onRemoteCameraStatusUpdate = function (e, t) {
            }, e.prototype.onRemoteMicStatusUpdate = function (e, t) {
            }, e.prototype.stopPlay = function () {
                for (var e in this.logger.info("zp.sp.1.1 " + this.streamId + " called"), this.streamCenter.publisherList) {
                    if (this.streamCenter.publisherList[e].publisher.state == o.ENUM_PUBLISH_STATE.publishing && this.broadcasterStatus == o.ENUM_BROADCASTER_STATUS.start) {
                        this.signal && this.signal.sendBroadcasterStatus(o.getSeq(), this.sessionId, 0), this.broadcasterStatus = o.ENUM_BROADCASTER_STATUS.stop;
                        break
                    }
                }
                this.sessionId && !this.closeSessionSignal && this.signal.sendCloseSession(o.getSeq(), this.sessionId, 0), this.dataReport.eventEndWithMsg(this.streamReportSeq, "PlayState", {state: this.state + ""}), this.dataReport.addEvent(this.streamReportSeq, "StopPlay"), this.dataReport.addMsgExt(this.streamReportSeq, {
                    stream: this.streamId,
                    sessionId: this.sessionId
                }), this.dataReport.addMsgInfo(this.streamReportSeq, {itemtype: "RTCPlayStream"}), this.dataReport.uploadReport(this.streamReportSeq, "RTCPlayStream"), this.resetPlay()
            }, e.prototype.onDisconnect = function () {
                this.logger.info("zp.od.1 " + this.streamId + " call"), this.dataReport.addEvent(this.reportSeq, "OnDisconnect"), this.playStateUpdateError(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kWebsocketDisconnectedError)
            }, e.prototype.startSoundLevel = function () {
                var e = this;
                if (this.logger.info("zp.ssl.1 call streamID: " + this.streamId), this.remoteStream && 0 != this.remoteStream.getAudioTracks().length) {
                    this.script && this.script.disconnect() && (this.script = null), this.mic && this.mic.disconnect() && (this.mic = null);
                    try {
                        this.mic = this.ac.createMediaStreamSource(this.remoteStream), this.script = this.ac.createScriptProcessor(4096, 1, 1), this.mic.connect(this.script), this.script.connect(this.ac.destination), this.script.onaudioprocess = function (t) {
                            for (var r = t.inputBuffer.getChannelData(0), o = 0, i = 0; i < r.length; i++) o < r[i] && (o = r[i]);
                            e.soundLevel = 100 * o
                        }, this.ac.resume()
                    } catch (e) {
                        this.logger.error("zp.ssl.1 get sound level failed " + e)
                    }
                } else this.logger.info("zp.ssl.1 " + this.streamId + " remote stream no found")
            }, e.prototype.stopSoundLevel = function () {
                this.logger.info("zp.ssl.1.1 call streamID: " + this.streamId), this.script && this.script.disconnect(), this.mic && this.mic.disconnect(), this.script = null, this.mic = null
            }, e
        }();
        t.ZegoPlayWeb = a
    }, function (e, t, r) {
        "use strict";
        var o, i = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0}), t.RetryStreamHandler = void 0;
        var s = r(0), n = r(9), a = r(1), d = r(3), c = r(2), l = function (e) {
            function t(t, r, o) {
                var i = e.call(this) || this;
                return i.logger = t, i.stateCenter = r, i.streamCenter = o, i
            }

            return i(t, e), t.prototype.initStream = function (e, t, r) {
                this.isPublish = e, this.streamID = t, this.serverUrls = r
            }, t.prototype.activePublish = function (e) {
                var t = this;
                if (this.logger.info("zc.tsh.a retry call " + this.streamID), this.stateCenter.networkState == s.ENUM_NETWORK_STATE.offline) return this.logger.info("zc.tsh.a network is broken, stop retry"), !1;
                if (this.retryTimer) return this.logger.info("zc.tsh.a has active, ignore"), !1;
                if (this.isOverTime) return this.logger.warn("zc.tsh.a retry over time, stop retry"), !1;
                if (1 == this.retryActiveCount) this.retryActiveInterval = Math.floor(Math.random() * (1 - this.RETRY_START_TIME_INTERVAL) + this.RETRY_START_TIME_INTERVAL); else {
                    var r = Math.pow(2, Math.round(this.retryActiveCount / this.RETRY_CONTINUE_COUNT + 1));
                    this.retryActiveInterval = r > this.RETRY_MAX_TIME_INTERVAL ? this.RETRY_MAX_TIME_INTERVAL : r
                }
                var o = this.streamCenter.publisherList[this.streamID].publisher, i = this.serverUrls,
                    n = o.signal ? o.signal.server : "";
                i.forEach((function (e, r) {
                    return r <= i.indexOf(n) && t.serverUrls.push(e)
                })), i.splice(0, i.indexOf(n) + 1);
                var a = this.serverUrls[this.retryActiveCount % this.serverUrls.length == 0 ? this.serverUrls.length - 1 : this.retryActiveCount % this.serverUrls.length - 1];
                return this.retryTimer = setTimeout((function () {
                    t.logger.warn("zc.tsh.a stream " + t.streamID + " connect signal server " + a), t.retryTimer && clearTimeout(t.retryTimer), t.retryTimer = null, t.retryActiveCount++, t.streamCenter.connectPublishServer(t.streamID, a)
                }), "number" == typeof e ? e : 1e3 * this.retryActiveInterval), this.logger.info("zc.tsh.a call success"), !0
            }, t.prototype.activePull = function (e, t) {
                var r = this;
                if (this.logger.info("zc.tsh.a retry call " + this.streamID), t && (this.playStreamSuccess = t), this.stateCenter.networkState == s.ENUM_NETWORK_STATE.offline) return this.logger.info("zc.tsh.a network is broken, stop retry"), !1;
                if (this.retryTimer) return this.logger.info("zc.tsh.a has active, ignore"), !1;
                if (this.isOverTime) return this.logger.warn("zc.tsh.a retry over time, stop retry"), !1;
                if (1 == this.retryActiveCount) this.retryActiveInterval = Math.floor(Math.random() * (1 - this.RETRY_START_TIME_INTERVAL) + this.RETRY_START_TIME_INTERVAL); else {
                    var o = Math.pow(2, Math.round(this.retryActiveCount / this.RETRY_CONTINUE_COUNT + 1));
                    this.retryActiveInterval = o > this.RETRY_MAX_TIME_INTERVAL ? this.RETRY_MAX_TIME_INTERVAL : o
                }
                var i = this.streamCenter.playerList[this.streamID].player, n = this.serverUrls,
                    a = i.signal ? i.signal.server : "";
                n.forEach((function (e, t) {
                    return t <= n.indexOf(a) && r.serverUrls.push(e)
                })), n.splice(0, n.indexOf(a) + 1);
                var d = this.serverUrls[this.retryActiveCount % this.serverUrls.length == 0 ? this.serverUrls.length - 1 : this.retryActiveCount % this.serverUrls.length - 1];
                return this.retryTimer = setTimeout((function () {
                    r.logger.warn("zc.tsh.a stream " + r.streamID + " connect signal server " + d), r.retryTimer && clearTimeout(r.retryTimer), r.retryTimer = null, r.retryActiveCount++, r.streamCenter.connectPlayServer(r.streamID, r.playStreamSuccess, d)
                }), "number" == typeof e ? e : 1e3 * this.retryActiveInterval), this.logger.info("zc.tsh.a call success"), !0
            }, t.prototype.startMaxTime = function () {
                var e = this;
                this.maxTimer || (this.maxTimer = setTimeout((function () {
                    if (e.logger.warn(e.streamID + " over max time " + e.RETRY_MAX_TIME + "s, stop retry"), e.isOverTime = !0, e.invalid(), e.isPublish) {
                        if (!e.streamCenter.publisherList[e.streamID]) return void e.logger.info("zc.tsh.smt streamID " + e.streamID + " publish no found");
                        e.publishStateHandle(s.ENUM_PUBLISH_STATE_UPDATE.error, e.streamID, a.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishRetryTimeoutError, !0)
                    } else {
                        if (!e.streamCenter.playerList[e.streamID]) return void e.logger.info("zc.tsh.smt streamID " + e.streamID + " play no found");
                        e.playStateHandle(s.ENUM_PLAY_STATE_UPDATE.error, e.streamID, a.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayRetryTimeoutError, !0)
                    }
                }), 1e3 * this.RETRY_MAX_TIME))
            }, t.prototype.stopMaxTime = function () {
                this.maxTimer && clearTimeout(this.maxTimer), this.maxTimer = null
            }, t.prototype.onactive = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
            }, t.prototype.retryNextSignal = function (e) {
                if (this.stateCenter.networkState == s.ENUM_NETWORK_STATE.offline) return !0;
                if (this.isPublish) {
                    var t = this.streamCenter.publisherList[this.streamID];
                    if (t.publisher.state == s.ENUM_PUBLISH_STATE.stop && [a.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kSessionRequestError.code, a.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishNegoTimeoutError.code].includes(e.code)) return !0;
                    if (t.isCenterNode && t.publisher.signal.websocket && 1 == t.publisher.signal.websocket.readyState) return !1;
                    if (!t.isCenterNode && [a.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishSessionClosedError].includes(e)) {
                        var r = (i = e.message.match(/reason:(\d+)/)) ? i[1] : "";
                        return !["26"].includes(r)
                    }
                    return !0
                }
                var o = this.streamCenter.playerList[this.streamID];
                if (o.player.state == s.ENUM_PLAY_STATE.stop && [a.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kSessionRequestError.code, a.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayNegoTimeoutError.code].includes(e.code)) return !0;
                if (o.isCenterNode && o.player.signal.websocket && 1 == o.player.signal.websocket.readyState) return !1;
                if (!o.isCenterNode && [a.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlaySessionClosedError].includes(e)) {
                    var i;
                    r = (i = e.message.match(/reason:(\d+)/)) ? i[1] : "";
                    return !["24", "26", "28"].includes(r)
                }
                return !0
            }, t.prototype.publishStateHandle = function (e, t, r, o) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.PUBLISH_STATE_HANDLE + " call " + t + " " + (r ? r.code + "" : ""));
                var i = o || this.RETRY_MAX_TIME < 3;
                if (!i && r && c.ClientUtil.isReDispatch(r)) return this.stopMaxTime(), this.retryTimer && clearTimeout(this.retryTimer), this.retryTimer = null, void this.streamCenter.onPublishStateUpdate(e, t, r);
                if (!i && r && 0 !== r.code) {
                    !this.maxTimer && !i && this.startMaxTime(), this.stateCenter.publishStreamList[t].state = s.ENUM_PUBLISH_STREAM_STATE.retryPublish;
                    var n = this.streamCenter.publisherList[t], l = n.publisher, u = l.localStream, g = l.videoInfo,
                        p = l.mediaStreamConfig, h = l.publishOption;
                    if (0 != l.sessionId && l.signal && l.shouldSendCloseSession() && (l.signal.sendCloseSession(s.getSeq(), l.sessionId, 1), l.signal.removeSession(l.sessionId), l.closeSessionSignal = !0), l.resetPublish(), !i && !this.retryNextSignal(r)) return n.isCenterNode && l.gwNodeTTL < (new Date).getTime() && 0 !== l.gwNodeList.length ? (l.gwNode = "", l.gwNodeList = [], l.gwNodeTTL = 0, l.gwNodeTryCount = 1) : n.isCenterNode && (l.gwNode = l.gwNodeList[l.gwNodeTryCount % l.gwNodeList.length], l.gwNodeTryCount++), void l.startPublish(t, u, g, p, h);
                    this.streamCenter.removeStreamFromSignal(!0, t)
                }
                if (i) return this.stopMaxTime(), this.invalid(), void this.streamCenter.onPublishStateUpdate(e, t, r);
                if (r && 0 !== r.code && this.activePublish(void 0)) {
                    var m = s.getReportSeq();
                    this.streamCenter.dataReport.newReport(m), this.streamCenter.dataReport.addMsgInfo(m, {stream: a.ZegoRTCLogEvent.kZegoTaskRePublish.stream(this.streamID)}), this.streamCenter.dataReport.uploadReport(m, a.ZegoRTCLogEvent.kZegoTaskRePublish.event), this.streamCenter.onPublishStateUpdate(2, t, r)
                }
                this.logger.info(d.ZEGO_WEBRTC_ACTION.PUBLISH_STATE_HANDLE + " end " + t)
            }, t.prototype.playStateHandle = function (e, t, r, o) {
                this.logger.info(d.ZEGO_WEBRTC_ACTION.PLAY_STATE_HANDLE + " call " + t + " " + (r ? r.code + "" : ""));
                var i = o || this.RETRY_MAX_TIME < 3;
                if (!i && r && c.ClientUtil.isReDispatch(r)) return this.stopMaxTime(), this.retryTimer && clearTimeout(this.retryTimer), this.retryTimer = null, void this.streamCenter.onPlayStateUpdate(e, t, r);
                if (r && 0 !== r.code) {
                    !this.maxTimer && !i && this.startMaxTime();
                    var n = this.streamCenter.playerList[t], l = n.player, u = l.playOption;
                    if (0 != l.sessionId && l.signal && l.shouldSendCloseSession() && (l.signal.sendCloseSession(s.getSeq(), l.sessionId, 1), l.signal.removeSession(l.sessionId), l.closeSessionSignal = !0), l.resetPlay(), !i && !this.retryNextSignal(r)) return n.isCenterNode && l.gwNodeTTL < (new Date).getTime() && 0 !== l.gwNodeList.length ? (l.gwNode = "", l.gwNodeList = [], l.gwNodeTTL = 0, l.gwNodeTryCount = 1) : n.isCenterNode && (l.gwNode = l.gwNodeList[l.gwNodeTryCount % l.gwNodeList.length], l.gwNodeTryCount++), void l.startPlay(t, l.getRemoteStreamSuc, u);
                    this.streamCenter.removeStreamFromSignal(!1, t)
                }
                if (i) return this.stopMaxTime(), this.invalid(), void this.streamCenter.onPlayStateUpdate(e, t, r);
                if (r && 0 !== r.code && this.activePull(void 0)) {
                    var g = s.getReportSeq();
                    this.streamCenter.dataReport.newReport(g), this.streamCenter.dataReport.addMsgInfo(g, {stream: a.ZegoRTCLogEvent.kZegoTaskRePlay.stream(this.streamID)}), this.streamCenter.dataReport.uploadReport(g, a.ZegoRTCLogEvent.kZegoTaskRePlay.event), this.streamCenter.onPlayStateUpdate(2, t, r)
                }
                this.logger.info(d.ZEGO_WEBRTC_ACTION.PLAY_STATE_HANDLE + " end " + t)
            }, t
        }(n.RetryHandler);
        t.RetryStreamHandler = l
    }, function (e, t, r) {
        "use strict";
        var o, i = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0}), t.RetryDispatchHandler = void 0;
        var s = r(9), n = r(0), a = r(3), d = r(1), c = r(4), l = function (e) {
            function t(t, r, o, i) {
                var s = e.call(this) || this;
                return s.retryActiveCount = 1, s.RETRY_MAX_TIME = 90, s.logger = t, s.stateCenter = r, s.rtm = o, s.streamCenter = i, s
            }

            return i(t, e), t.prototype.initStream = function (e, t, r) {
                this.streamID = e, this.playOption = t, this.isPublish = r
            }, t.prototype.active = function (e) {
                var t = this;
                if (this.logger.info(a.ZEGO_WEBRTC_ACTION.RDH_ACTIVE + " retry call " + this.streamID), this.stateCenter.networkState == n.ENUM_NETWORK_STATE.offline) return this.logger.info(a.ZEGO_WEBRTC_ACTION.RDH_ACTIVE + " network is broken, stop retry"), !1;
                if (this.retryTimer) return this.logger.info(a.ZEGO_WEBRTC_ACTION.RDH_ACTIVE + " has active, ignore"), !1;
                if (this.isOverTime) return this.logger.warn(a.ZEGO_WEBRTC_ACTION.RDH_ACTIVE + " retry over time, stop retry"), !1;
                this.rtm.isLogin() || (this.stopMaxTime(), this.invalid(), this.isPublish ? this.streamCenter.publisherList[this.streamID].isReDispatch = !0 : this.streamCenter.playerList[this.streamID].isReDispatch = !0);
                var r = this.retryActiveCount - 1, o = this.playOption && 2 == this.playOption.resourceMode ? 1 : 0,
                    i = {
                        stream_id: this.streamID,
                        ptype: this.isPublish ? "push" : "pull",
                        signals: this.streamCenter.getAllInUseUrl(),
                        header_kvs: [{
                            key: "grpc-metadata-push",
                            value: this.playOption && this.playOption.cdnUrl || ""
                        }],
                        retry: r,
                        center_ability: !0,
                        dispatch_type: o
                    };
                return this.retryTimer = setTimeout((function () {
                    t.retryTimer && clearTimeout(t.retryTimer), t.retryTimer = null, t.retryActiveCount++;
                    var e = t.rtm.modules.service.sendMessage("webrtc_url", i, (function (e, r) {
                        t.handleFetchWebRtcUrlRsp(e)
                    }), (function (e, r) {
                        t.handleFetchWebRtcUrlRsp(e)
                    }));
                    t.isPublish && e ? t.streamCenter.publisherList[t.streamID] && (t.streamCenter.publisherList[t.streamID].seq = e) : e && t.streamCenter.playerList[t.streamID] && (t.streamCenter.playerList[t.streamID].seq = e)
                }), "number" == typeof e ? e : 1e3 * this.retryActiveInterval), this.logger.info(a.ZEGO_WEBRTC_ACTION.RDH_ACTIVE + " call success"), !0
            }, t.prototype.startMaxTime = function () {
                var e = this;
                this.maxTimer || (this.maxTimer = setTimeout((function () {
                    e.logger.warn(a.ZEGO_WEBRTC_ACTION.RDH_MAX_TIME + " " + e.streamID + " dispatch over max time " + e.RETRY_MAX_TIME + "s stop retry"), e.isOverTime = !0, e.invalid(), e.isPublish ? e.streamCenter.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.error, e.streamID, d.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError) : e.streamCenter.onPlayStateUpdate(n.ENUM_PLAY_STATE_UPDATE.error, e.streamID, d.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError)
                }), 1e3 * this.RETRY_MAX_TIME))
            }, t.prototype.stopMaxTime = function () {
                this.maxTimer && clearTimeout(this.maxTimer), this.maxTimer = null
            }, t.prototype.onactive = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
            }, t.prototype.handleFetchWebRtcUrlRsp = function (e) {
                if (e.code && [c.errorCodeList.TIMEOUT.code].includes(e.code)) this.active(); else {
                    if (e.code && [c.errorCodeList.SOCKET_CLOSE.code].includes(e.code)) return this.stopMaxTime(), this.invalid(), void (this.isPublish ? this.streamCenter.publisherList[this.streamID].isReDispatch = !0 : this.streamCenter.playerList[this.streamID].isReDispatch = !0);
                    var t = e, r = t.body.stream_id, o = !1;
                    if (this.isPublish && t.header.seq !== this.streamCenter.publisherList[this.streamID].seq) return this.logger.warn(a.ZEGO_WEBRTC_ACTION.RDH_WEBRTC_URL_RSP + " seq is not match, ignore " + this.streamID), this.stopMaxTime(), void this.invalid();
                    if (!this.isPublish && t.header.seq !== this.streamCenter.playerList[this.streamID].seq) return this.logger.warn(a.ZEGO_WEBRTC_ACTION.RDH_WEBRTC_URL_RSP + " seq is not match, ignore " + this.streamID), this.stopMaxTime(), void this.invalid();
                    if (this.stateCenter.clientIP = t.body.clientip || "", 0 !== t.body.err_code && 2 == t.body.need_action) return this.retryActiveInterval = t.body.action_delay / 1e3 || Math.floor(3 * Math.random()) + 3, void this.active();
                    if (0 !== t.body.err_code && 1 !== t.body.need_action) return this.retryActiveInterval = Math.floor(3 * Math.random()) + 3, void this.active();
                    if (this.stopMaxTime(), this.invalid(), t.body.urls && Array.isArray(t.body.urls) && t.body.urls.length > 0 ? o = !0 : this.logger.error(a.ZEGO_WEBRTC_ACTION.RDH_WEBRTC_URL_RSP + " signal url is empty"), "push" === t.body.ptype && this.streamCenter.publisherList[r]) {
                        if (!o) return void this.streamCenter.onPublishStateUpdate(n.ENUM_PUBLISH_STATE_UPDATE.error, r, d.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError);
                        var i = this.streamCenter.publisherList[r];
                        this.stateCenter.publishStreamList[r] ? (i.ttl = t.body.hosts_ttl ? (new Date).getTime() + 1e3 * t.body.hosts_ttl : 0, i.isCenterNode = "boolean" == typeof t.body.is_center_node && t.body.is_center_node, i.serverUrls = t.body.urls, this.streamCenter.startPublishingStream(r)) : this.logger.error(a.ZEGO_WEBRTC_ACTION.RDH_WEBRTC_URL_RSP + " no streamid to publish")
                    } else if ("pull" == t.body.ptype && this.streamCenter.playerList[r]) {
                        if (!o) return void this.streamCenter.onPlayStateUpdate(n.ENUM_PLAY_STATE_UPDATE.error, r, d.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError);
                        var s = this.streamCenter.playerList[r];
                        s.ttl = t.body.hosts_ttl ? (new Date).getTime() + 1e3 * t.body.hosts_ttl : 0, s.isCenterNode = "boolean" == typeof t.body.is_center_node && t.body.is_center_node, s.serverUrls = t.body.urls, this.streamCenter.startPlayingStream(r, this.streamCenter.playSuccessCallBackList[r])
                    }
                }
            }, t
        }(s.RetryHandler);
        t.RetryDispatchHandler = l
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.PublishModule = void 0;
        var o = r(3), i = r(0), s = r(1), n = r(2), a = r(4), d = r(7), c = r(5), l = function () {
            function e(e, t, r, o, i, s) {
                this.logger = e, this.dataReport = t, this.stateCenter = r, this.streamCenter = o, this.streamHandler = i, this.rtm = s
            }

            return e.prototype.createStream = function (e) {
                var t = this;
                return this.logger.info(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " call"), e && e.camera && e.camera.audioBitRate && (e.camera.audioBitrate = e.camera.audioBitRate), e && e.camera && e.camera.bitrate && (e.camera.bitRate = e.camera.bitrate), e && e.screen && "object" == typeof e.screen && e.screen.bitrate && (e.screen.bitRate = e.screen.bitrate), e && e.custom && e.custom.bitrate && (e.custom.bitRate = e.custom.bitrate), new Promise((function (r, a) {
                    var d = i.getReportSeq();
                    t.dataReport.newReport(d, s.ZegoRTCLogEvent.kZegoTaskCreateStream.event);
                    var l = function (e) {
                        t.dataReport.uploadReport(d), !t.stateCenter.deviceInfos && t.recordDevices(), r(e)
                    }, u = function (e, r) {
                        void 0 === r && (r = ""), t.dataReport.addMsgInfo(d, e), t.dataReport.uploadReport(d), e.code && e.message && r ? a({
                            code: e.code,
                            msg: e.message + r
                        }) : a(e)
                    };
                    if ("https:" !== window.location.protocol && "file:" !== window.location.protocol && -1 == window.location.hostname.indexOf("127.0.0.1") && -1 == window.location.hostname.indexOf("localhost")) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " https or localhost required "), void u({
                        code: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kBrowserNotSupportError.code,
                        message: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kBrowserNotSupportError.message + " https or localhost required"
                    });
                    if (e && e.screen) {
                        if (!n.ClientUtil.checkScreenParams(e.screen, u)) return;
                        var g = n.ClientUtil.getBrowser(), p = t.streamCenter.getScreenConstrains(e.screen);
                        t.dataReport.addMsgInfo(d, {
                            stream_type: s.ZegoRTCLogEvent.kZegoTaskCreateStream.stream_type("screen"),
                            screen: s.ZegoRTCLogEvent.kZegoTaskCreateStream.screen(p)
                        });
                        var h = function (e) {
                            t.streamCenter.createScreenPreviewer(e, p) && l(e), e.getVideoTracks()[0].onended = function () {
                                var r = i.getReportSeq();
                                t.dataReport.newReport(r), t.dataReport.uploadReport(r, s.ZegoRTCLogEvent.kZegoTaskScreenSharingEnded), e && t.stopPreview(e), t.stateCenter.actionListener("screenSharingEnded", e)
                            }
                        };
                        "Firefox" == g ? t.startScreenShotFirFox("screen", p, (function (e, t, r) {
                            e ? t && h(t) : r && u(r)
                        })) : "Chrome" == g && c.ZegoWebRTC.screenShotReady ? t.startScreenShotChrome((function (e, r, i) {
                            e ? (t.logger.info(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " using extension"), r && h(r)) : (i && t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " extension " + i), "SS_DIALOG_CANCEL" !== i ? t.startScreenSharing(p, (function (e, r, i) {
                                e ? r && h(r) : (t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " " + i), i && u(i))
                            })) : i && u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenCancelError))
                        })) : t.startScreenSharing(p, (function (e, t, r) {
                            e ? t && h(t) : r && u(r)
                        }))
                    } else {
                        if (e && "object" == typeof e.camera && void 0 !== e.camera.videoQuality && !n.ClientUtil.checkInteger(e.camera.videoQuality)) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " videoQuality must be integer number"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " videoQuality must be integer number");
                        if (e && e.camera && e.camera.audioBitrate) {
                            if (!n.ClientUtil.checkInteger(e.camera.audioBitrate)) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " audioBitrate must be integer number"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " audioBitrate must be integer number");
                            if (e.camera.audioBitrate < 6) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " audioBitrate cannot less 6 kbps"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " audioBitrate cannot less 6 kbps");
                            if (e.camera.audioBitrate > 510) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " audioBitrate cannot greater than 510 kbps"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " audioBitrate cannot greater than 510 kbps");
                            t.stateCenter.audioBitRate = 1e3 * e.camera.audioBitrate
                        }
                        if (e && e.camera && e.camera.bitRate) {
                            if ("number" != typeof e.camera.bitRate) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " bitrate must be integer number"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number");
                            if (e.camera.bitRate > 10240) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " bitrate cannot greater than 10 Mbps"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate cannot greater than 10 Mbps")
                        }
                        if (e && e.camera && void 0 !== e.camera.channelCount && !n.ClientUtil.checkInteger(e.camera.channelCount)) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " channelCount must be integer number"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " channelCount must be integer number");
                        if (e && e.camera && 4 === e.camera.videoQuality && !n.ClientUtil.checkCameraParams(e.camera, u)) return;
                        if (e && e.custom && e.custom.bitRate) {
                            if (!n.ClientUtil.checkInteger(e.custom.bitRate)) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " bitrate must be integer number"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number");
                            if (e.custom.bitRate > 10240) return t.logger.error(o.ZEGO_WEBRTC_ACTION.CREATE_STREAM + " bitrate cannot greater than 10 Mbps"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate cannot greater than 10 Mbps")
                        }
                        if (e && e.custom && e.custom.audioBitrate) {
                            if (!n.ClientUtil.checkInteger(e.custom.audioBitrate)) return t.logger.error("ze.cs.0 audioBitrate must be integer number"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " audioBitrate must be integer number");
                            if (e.custom.audioBitrate < 6) return t.logger.error("ze.cs.0 audioBitrate cannot less 6 kbps"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " audioBitrate cannot less 6 kbps");
                            if (e.custom.audioBitrate > 510) return t.logger.error("ze.cs.0 audioBitrate cannot greater than 510 kbps"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " audioBitrate cannot greater than 510 kbps")
                        }
                        if (e && e.custom && void 0 !== e.custom.channelCount && 1 !== e.custom.channelCount && 2 !== e.custom.channelCount) return t.logger.error("ze.cs.0 channelCount must number 1 or 2"), void u(s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " channelCount must number 1 or 2");
                        var m = {};
                        e && e.camera ? (m = e.camera, t.dataReport.addMsgInfo(d, {
                            stream_type: s.ZegoRTCLogEvent.kZegoTaskCreateStream.stream_type("camera"),
                            camera: s.ZegoRTCLogEvent.kZegoTaskCreateStream.camera(e.camera)
                        }), "boolean" != typeof m.video && (m.video = !0), "boolean" != typeof m.audio && (m.audio = !0)) : e && e.custom && (m = e.custom, t.dataReport.addMsgInfo(d, {
                            stream_type: s.ZegoRTCLogEvent.kZegoTaskCreateStream.stream_type("custom"),
                            custom: s.ZegoRTCLogEvent.kZegoTaskCreateStream.custom(e.custom)
                        })), t.startPreview(m, l, u)
                    }
                }))
            }, e.prototype.destroyStream = function (e) {
                this.logger.info(o.ZEGO_WEBRTC_ACTION.DESTROY_STREAM + " call");
                var t = i.getReportSeq();
                if (this.dataReport.newReport(t), !(e instanceof MediaStream)) return this.logger.error(o.ZEGO_WEBRTC_ACTION.DESTROY_STREAM + " localStream is not mediaStream or tracks is null"), this.dataReport.addMsgInfo(t, s.ZegoRTCLogEvent.kZegoTaskDestroyStream.error.kLocalStreamError), void this.dataReport.uploadReport(t, s.ZegoRTCLogEvent.kZegoTaskDestroyStream.event);
                e instanceof MediaStream && 0 == e.getTracks().length && this.logger.info(o.ZEGO_WEBRTC_ACTION.DESTROY_STREAM + " tracks is null"), this.stopPreview(e), this.dataReport.uploadReport(t, s.ZegoRTCLogEvent.kZegoTaskDestroyStream.event)
            }, e.prototype.startPublishingStream = function (e, t, r) {
                this.logger.info(o.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + " call ", e);
                var a, d = !0, c = "", l = i.getReportSeq();
                if (this.stateCenter.reportSeqList.startPublish[e] = l, this.dataReport.newReport(l, s.ZegoRTCLogEvent.kZegoTaskPublishStart.event), d && void 0 === e && (c = "stream id required", this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + c), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError), !d || e && "string" == typeof e || (c = "stream id type wrong", this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + " " + c), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError), d && e.length > i.MAX_STREAM_ID_LENGTH && (c = "stream id length limit", this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + " " + c), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError), d && !n.ClientUtil.checkIllegalCharacters(e) && (c = "stream ID contains illegal characters", this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + " " + c), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError), d && (!t || t instanceof MediaStream && 0 == t.getTracks().length) && (c = "localStream wrong", this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + " " + c), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError), d && !this.streamCenter.checkPreview(t) && (c = "stream is not from zego", this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PUBLISHING_STREAM + " " + c), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishNoPreviewError), d && void 0 !== r && "object" != typeof r && (d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError, c = "publishOption must be object"), d && void 0 !== r && void 0 !== r.streamParams && "string" != typeof r.streamParams && (this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + " publishOption streamParams must be string"), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError, c = " publishOption streamParams must be string"), d && void 0 !== r && void 0 !== r.extraInfo && "string" != typeof r.extraInfo && (this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + " publishOption extraInfo must be string"), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError, c = " publishOption extraInfo must be string"), d && void 0 !== r && void 0 !== r.videoCodec && "string" != typeof r.videoCodec && (this.logger.error(o.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + " publishOption videoCodec must be string"), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishParamError, c = " publishOption videoCodec must be string"), r && r.videoCodec && (r.videoCodec = r.videoCodec.toUpperCase()), d && this.rtm.modules.service.isDisConnect() && (this.logger.error("zc.p.sps.1 not login"), d = !1, a = s.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kPublishNoLoginError), !d) return this.dataReport.uploadReport(l, void 0, a, c), delete this.stateCenter.reportSeqList.startPublish[e], !1;
                if (r || (r = {}), this.dataReport.addMsgInfo(l, {
                    stream: s.ZegoRTCLogEvent.kZegoTaskPublishStart.stream(e),
                    publishOption: s.ZegoRTCLogEvent.kZegoTaskPublishStart.publishOption(r)
                }), r.audioBitRate = this.stateCenter.audioBitRate, this.stateCenter.customUrl && 0 != this.stateCenter.customUrl.length) return this.stateCenter.publishStreamList[e] = {
                    state: i.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                    extra_info: r.extraInfo ? r.extraInfo : null
                }, this.streamCenter.setPublishStateStart(e, t, r) ? (this.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.retry, e, {
                    code: 0,
                    message: ""
                }), this.streamCenter.publisherList[e].serverUrls = this.stateCenter.customUrl, this.streamCenter.startPublishingStream(e)) : (this.logger.info("zc.p.sps.1 cannot start publish"), !1);
                if (this.stateCenter.publishStreamList[e] = {
                    state: i.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                    extra_info: r.extraInfo ? r.extraInfo : null
                }, !this.streamCenter.setPublishStateStart(e, t, r)) return this.logger.error("zc.p.sps.1 cannot start publish"), !1;
                this.logger.info("zc.p.sps.1 start publish"), this.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.retry, e, {
                    code: 0,
                    message: ""
                });
                var u = this.streamCenter.publisherList[e].retryDispatchHandler;
                return u.stopMaxTime(), u.invalid(), u.initStream(e, r, !0), u.startMaxTime(), u.active(0)
            }, e.prototype.stopPublishingStream = function (e) {
                this.logger.info(o.ZEGO_WEBRTC_ACTION.STOP_PUBLISHING_STREAM + " call ", e);
                var t = i.getReportSeq();
                if (this.stateCenter.reportSeqList.stopPublish[e] = t, this.dataReport.newReport(t, s.ZegoRTCLogEvent.kZegoTaskPublishStop.event), this.dataReport.addMsgInfo(t, {streamID: s.ZegoRTCLogEvent.kZegoTaskPublishStop.stream(e)}), "string" != typeof e || "" == e) return this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_PUBLISHING_STREAM + " streamID must be string and not empty"), this.dataReport.uploadReport(t, void 0, s.ZegoRTCLogEvent.kZegoTaskPublishStop.error.kParamError, "stream id type error"), delete this.stateCenter.reportSeqList.stopPublish[e], !1;
                var r = this.streamCenter.publisherList[e],
                    n = r && r.publisher && r.publisher.state !== i.ENUM_PUBLISH_STATE.stop;
                if (this.streamCenter.stopPublishingStream(e), this.stateCenter.publishStreamList[e]) {
                    if (this.stateCenter.publishStreamList[e].state >= i.ENUM_PUBLISH_STREAM_STATE.update_info) {
                        this.streamHandler.updateStreamInfo(e, i.ENUM_STREAM_SUB_CMD.liveEnd);
                        for (var a = 0; a < this.stateCenter.streamList.length; a++) if (this.stateCenter.streamList[a].stream_id == e) {
                            this.stateCenter.streamList.splice(a--, 1);
                            break
                        }
                    }
                    delete this.stateCenter.publishStreamList[e]
                }
                return this.dataReport.uploadReport(t), n && this.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, e, {
                    code: 0,
                    message: ""
                }), !0
            }, e.prototype.startScreenShotChrome = function (e) {
                if (c.ZegoWebRTC.screenShotReady) window.postMessage({
                    type: "SS_UI_REQUEST",
                    text: "start"
                }, "*"), n.ClientUtil.registerCallback("screenShare", {success: e}, this.stateCenter.callbackList); else {
                    var t = 'zc.b.ss Please install the extension:1. Go to chrome://extensions  2. Check: "Enable Developer mode   3. Click: "Load the unpacked extension... 4. Choose "extension" folder from the repository 5. Reload this page';
                    this.logger.error(t), e(!1, null, {
                        code: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenFailedError.code,
                        message: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenFailedError.message + " " + t
                    })
                }
            }, e.prototype.startScreenSharing = function (e, t) {
                var r = this;
                "getDisplayMedia" in navigator.mediaDevices ? navigator.mediaDevices.getDisplayMedia({
                    audio: e.audio,
                    video: {frameRate: e.frameRate, width: e.width, height: e.height}
                }).then((function (e) {
                    t(!0, e)
                })).catch((function (e) {
                    r.logger.error("zc.b.sss " + e), e.message && "permission denied" == e.message.toLowerCase() ? t(!1, null, s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenCancelError) : t(!1, null, {
                        code: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenFailedError.code,
                        message: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenFailedError.message + " " + e
                    })
                })) : (this.logger.error("zc.b.sss brower does not support getDisplayMedia"), t(!1, null, s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kBrowserNotSupportError))
            }, e.prototype.startScreenShotFirFox = function (e, t, r) {
                var o = this, i = {
                    video: {frameRate: t.frameRate, bitRate: t.bitRate, width: t.width, height: t.height},
                    audio: t.audio
                };
                i.video.mediaSource = e, navigator.mediaDevices.getUserMedia(i).then((function (e) {
                    r(!0, e)
                })).catch((function (e) {
                    o.logger.error("ze.ssf.1 " + e), r(!1, null, {
                        code: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenFailedError.code,
                        message: s.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kScreenFailedError.message + " " + e
                    })
                }))
            }, e.prototype.startPreview = function (e, t, r) {
                var o = this, i = null;
                return i = new d.ZegoPreview(this.logger), this.streamCenter.previewStreamList.push(i), i.startPreview(e, (function (e) {
                    o.logger.debug("zsc.sp.0 call success"), !o.stateCenter.deviceInfos && o.recordDevices(), t && t(e)
                }), (function (e) {
                    o.streamCenter.previewStreamList = o.streamCenter.previewStreamList.filter((function (e) {
                        return e !== i
                    })), r && r(e)
                })), !0
            }, e.prototype.stopPreview = function (e) {
                if (!e) return this.logger.warn("zsc.sp.0 localStream null"), !1;
                for (var t in this.streamCenter.publisherList) this.streamCenter.publisherList[t].localStream === e && (this.streamCenter.publisherList[t].localStream = null);
                var r = this.streamCenter.checkPreview(e);
                return r ? (r.previewSuc && (r.stopPreview(), this.streamCenter.removePreview(r)), !0) : (this.logger.warn("zsc.sp.0 no preview"), !1)
            }, e.prototype.recordDevices = function () {
                var e = this;
                this.logger.info("zsc.rd.0 call"), n.ClientUtil.getDevices((function (t) {
                    e.stateCenter.deviceInfos = {microphones: t.microphones, speakers: t.speakers, cameras: t.cameras}
                }), (function (t) {
                    e.logger.warn("zsc.rd.0 getDevices err:", t)
                })), void 0 !== navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = null, navigator.mediaDevices.ondevicechange = function (t) {
                    e.logger.info("zsc.rd.0 devicechange"), e.stateCenter.deviceChangeTimer && (clearTimeout(e.stateCenter.deviceChangeTimer), e.stateCenter.deviceChangeTimer = null), e.stateCenter.deviceChangeTimer = setTimeout((function () {
                        n.ClientUtil.getDevices((function (t) {
                            for (var r = [], o = function (o) {
                                var i = e.stateCenter.deviceInfos.cameras[o];
                                t.cameras.find((function (e) {
                                    return e.deviceID === i.deviceID
                                })) || r.push(i)
                            }, n = 0; n < e.stateCenter.deviceInfos.cameras.length; n++) o(n);
                            e.stateCenter.deviceStateOut = !1;
                            var d = !1;
                            r.length > 0 && (d = !0), r.forEach((function (t) {
                                for (var r in e.streamCenter.publisherList) {
                                    var o = e.streamCenter.publisherList[r], n = o.publisher;
                                    o.localStream && o.cameraLabel === t.deviceName && (d = !1, n.signal.sendStreamStatus(i.getSeq(), n.sessionId, -6, o.localStream.getAudioTracks()[0] && 1 == o.localStream.getAudioTracks()[0].enabled ? 0 : 2, n.streamId), e.stateCenter.actionListener("deviceError", a.errorCodeList.DEVICE_ERROR_TYPE_UNPLUGGED.code, t.deviceName));
                                    var c = i.getReportSeq();
                                    e.dataReport.newReport(c, s.ZegoRTCLogEvent.kZegoTaskDeviceInterrupt.event), e.dataReport.addMsgInfo(c, {interrupt: 0}), e.dataReport.uploadReport(c), e.stateCenter.actionListener("videoDeviceStateChanged", "DELETE", t), o.localStream && 0 === o.localStream.getAudioTracks().length && (d = !1)
                                }
                            })), d && (e.stateCenter.deviceStateOut = !0);
                            var c = e.stateCenter.deviceInfos.microphones.filter((function (e) {
                                return !t.microphones.find((function (t) {
                                    return t.deviceID === e.deviceID
                                }))
                            }));
                            c.forEach((function (t) {
                                for (var r in e.streamCenter.publisherList) {
                                    var o = e.streamCenter.publisherList[r], n = o.publisher;
                                    o.localStream && (o.microLabel === t.deviceName || o.microLabel.includes(t.deviceName)) && (n.signal.sendStreamStatus(i.getSeq(), n.sessionId, o.localStream.getVideoTracks()[0] && 1 == o.localStream.getVideoTracks()[0].enabled ? 0 : 2, -6, n.streamId), e.stateCenter.actionListener("deviceError", a.errorCodeList.DEVICE_ERROR_TYPE_UNPLUGGED.code, e.streamCenter.publisherList[r].microLabel));
                                    var d = i.getReportSeq();
                                    e.dataReport.newReport(d, s.ZegoRTCLogEvent.kZegoTaskDeviceInterrupt.event), e.dataReport.addMsgInfo(d, {interrupt: 0}), e.dataReport.uploadReport(d), e.stateCenter.actionListener("audioDeviceStateChanged", "DELETE", "Input", c)
                                }
                            }));
                            var l = e.stateCenter.deviceInfos.speakers.filter((function (e) {
                                return !t.speakers.find((function (t) {
                                    return t.deviceID === e.deviceID
                                }))
                            })), u = t.cameras.filter((function (t) {
                                return !e.stateCenter.deviceInfos.cameras.find((function (e) {
                                    return e.deviceID === t.deviceID
                                }))
                            })), g = t.microphones.filter((function (t) {
                                return !e.stateCenter.deviceInfos.microphones.find((function (e) {
                                    return e.deviceID === t.deviceID
                                }))
                            })), p = t.speakers.filter((function (t) {
                                return !e.stateCenter.deviceInfos.speakers.find((function (e) {
                                    return e.deviceID === t.deviceID
                                }))
                            }));
                            l.forEach((function (t) {
                                var r = i.getReportSeq();
                                e.dataReport.newReport(r, s.ZegoRTCLogEvent.kZegoTaskAudioOutputChanged.event), e.dataReport.addMsgInfo(r, {
                                    reason: s.ZegoRTCLogEvent.kZegoTaskAudioOutputChanged.reason("delete"),
                                    device: s.ZegoRTCLogEvent.kZegoTaskAudioOutputChanged.device(t)
                                }), e.dataReport.uploadReport(r), e.stateCenter.actionListener("audioDeviceStateChanged", "DELETE", "Output", t)
                            })), u.forEach((function (t) {
                                var r = i.getReportSeq();
                                e.dataReport.newReport(r, s.ZegoRTCLogEvent.kZegoTaskDeviceInterrupt.event), e.dataReport.addMsgInfo(r, {interrupt: 1}), e.dataReport.uploadReport(r), e.stateCenter.actionListener("videoDeviceStateChanged", "ADD", t)
                            })), g.forEach((function (t) {
                                var r = i.getReportSeq();
                                e.dataReport.newReport(r, s.ZegoRTCLogEvent.kZegoTaskDeviceInterrupt.event), e.dataReport.addMsgInfo(r, {interrupt: 1}), e.dataReport.uploadReport(r), e.stateCenter.actionListener("audioDeviceStateChanged", "ADD", "Input", t)
                            })), p.forEach((function (t) {
                                var r = i.getReportSeq();
                                e.dataReport.newReport(r, s.ZegoRTCLogEvent.kZegoTaskAudioOutputChanged.event), e.dataReport.addMsgInfo(r, {
                                    reason: s.ZegoRTCLogEvent.kZegoTaskAudioOutputChanged.reason("add"),
                                    device: s.ZegoRTCLogEvent.kZegoTaskAudioOutputChanged.device(t)
                                }), e.dataReport.uploadReport(r), e.stateCenter.actionListener("audioDeviceStateChanged", "ADD", "Output", t)
                            })), e.stateCenter.deviceInfos = {
                                microphones: t.microphones,
                                speakers: t.speakers,
                                cameras: t.cameras
                            }
                        }), (function (t) {
                            e.logger.warn("zsc.rd.0 getDevices err:", t)
                        }))
                    }), 500)
                })
            }, e
        }();
        t.PublishModule = l
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, r = 1, o = arguments.length; r < o; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.PlayModule = void 0;
        var i = r(3), s = r(0), n = r(1), a = r(2), d = function () {
            function e(e, t, r, o, i) {
                this.logger = e, this.dataReport = t, this.stateCenter = r, this.streamCenter = o, this.rtm = i
            }

            return e.prototype.startPlayingStream = function (e, t) {
                var r = this;
                return this.logger.info(i.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + " call ", e), new Promise((function (d, c) {
                    var l = s.getReportSeq();
                    r.stateCenter.reportSeqList.startPlay[e] = l, r.dataReport.newReport(l, n.ZegoRTCLogEvent.kZegoTaskPlayStart.event);
                    var u = function (t, s) {
                        r.logger.error(i.ZEGO_WEBRTC_ACTION.START_PLAYING_STREAM + " " + (s || t.message)), r.dataReport.uploadReport(l, void 0, t, s), delete r.stateCenter.reportSeqList.startPlay[e], c(o(o({}, t), {
                            errorCode: t.code,
                            extendedData: t.message + (s ? " " + s : "")
                        }))
                    };
                    void 0 !== e && "string" == typeof e && "" !== e || u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayParamError, "stream id type error"), e.length > s.MAX_STREAM_ID_LENGTH && u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDToLongError, "stream id length limit " + s.MAX_STREAM_ID_LENGTH), a.ClientUtil.checkIllegalCharacters(e) || u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDInvalidCharacterError), void 0 !== t && "object" != typeof t && u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayParamError, "playOption must be object"), r.stateCenter.customUrl && r.stateCenter.customUrl.length > 0 && (r.streamCenter.setPlayStateStart(e, t) || u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayRepeatedPullError, "cannot start play"), r.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.retry, e, {
                        code: 0,
                        message: ""
                    }), r.streamCenter.playerList[e].serverUrls = r.stateCenter.customUrl, r.streamCenter.startPlayingStream(e, d)), r.dataReport.addMsgInfo(l, {
                        stream: n.ZegoRTCLogEvent.kZegoTaskPlayStart.stream(e),
                        playOption: n.ZegoRTCLogEvent.kZegoTaskPlayStart.playOption(t)
                    }), r.rtm.modules.service.isDisConnect() && u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayNoLoginError), r.stateCenter.pullLimited || (e = NaN + e), t && t.videoCodec && (t.videoCodec = t.videoCodec.toUpperCase()), r.streamCenter.setPlayStateStart(e, t) || u(n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kPlayRepeatedPullError, "cannot start play"), r.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.retry, e, {
                        code: 0,
                        message: ""
                    }), r.streamCenter.playSuccessCallBackList[e] = d, r.streamCenter.playErrorCallBackList[e] = c;
                    var g = r.streamCenter.playerList[e].retryDispatchHandler;
                    return g.stopMaxTime(), g.invalid(), g.initStream(e, t, !1), g.startMaxTime(), g.active(0)
                }))
            }, e.prototype.stopPlayingStream = function (e) {
                this.logger.info(i.ZEGO_WEBRTC_ACTION.STOP_PLAYING_STREAM + " call", e);
                var t = s.getReportSeq();
                if (this.stateCenter.reportSeqList.stopPlay[e] = t, this.dataReport.newReport(t, n.ZegoRTCLogEvent.kZegoTaskPlayStop.event), this.dataReport.addMsgInfo(t, {stream: n.ZegoRTCLogEvent.kZegoTaskPlayStop.stream(e)}), "string" != typeof e || "" === e) return this.logger.error(i.ZEGO_WEBRTC_ACTION.STOP_PLAYING_STREAM + " streamid must be string and not empty"), this.dataReport.uploadReport(t, void 0, n.ZegoRTCLogEvent.kZegoTaskPlayStop.error.kParamError, "stream id type error"), void delete this.stateCenter.reportSeqList.stopPlay[e];
                var r = this.streamCenter.playerList[e], o = r && r.player && r.player.state !== s.ENUM_PLAY_STATE.stop;
                for (var a in this.streamCenter.stopPlayingStream(e), this.stateCenter.streamUrlMap) if (this.stateCenter.streamUrlMap[a] === e) {
                    delete this.stateCenter.streamUrlMap[a];
                    break
                }
                this.dataReport.uploadReport(t), o && this.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.error, e, {
                    code: 0,
                    message: ""
                }), this.logger.debug(i.ZEGO_WEBRTC_ACTION.STOP_PLAYING_STREAM + " call success")
            }, e.prototype.mutePlayStream = function (e, t, r) {
                var o = this;
                return this.logger.info("zsc.mps.0 call " + t + " " + r), new Promise((function (i, a) {
                    if ("string" != typeof e || "" == e) return o.logger.error("zsc.mps.0 streamID must be string and not empty"), void a(!1);
                    if ("boolean" != typeof r) return o.logger.error("zsc.mps.0 mute must be boolean"), void a(!1);
                    var d = o.streamCenter.playerList[e];
                    if (!d) return o.logger.error("zsc.mps.0 player not found"), void a(!1);
                    if ("video" === t) {
                        if (d.playOption && !1 === d.playOption.video || d.player && 0 !== d.player.cameraStatus) return o.logger.error("zsc.mps.0 stream no contain video"), void a(!1);
                        d.player.signal.ActivatePlayVideoStream(s.getSeq(), d.player.sessionId, r, (function () {
                            o.logger.info("zsc.mps.0 suc");
                            var e = s.getReportSeq();
                            o.dataReport.newReport(e, n.ZegoRTCLogEvent.kZegoPlayContentChanged.event), o.dataReport.addMsgInfo(e, {
                                session_id: n.ZegoRTCLogEvent.kZegoPlayContentChanged.session_id(d.player.sessionId),
                                video_activate: n.ZegoRTCLogEvent.kZegoPlayContentChanged.video_activate(r ? 0 : 1),
                                audio_activate: n.ZegoRTCLogEvent.kZegoPlayContentChanged.audio_activate(1 == d.player.playOption.audio ? 1 : 0 == d.player.playOption.audio ? 0 : 1)
                            }), o.dataReport.uploadReport(e), i(!0)
                        }), (function () {
                            o.logger.error("zsc.mps.0 fail"), a(!1)
                        }))
                    } else {
                        if (d.playOption && !1 === d.playOption.audio || d.player && 0 !== d.player.micStatus) return o.logger.error("zsc.mps.0 stream no contain audio"), void a(!1);
                        d.player.signal.ActivatePlayAudioStream(s.getSeq(), d.player.sessionId, r, (function () {
                            o.logger.info("zsc.mps.0 suc");
                            var e = s.getReportSeq();
                            o.dataReport.newReport(e, n.ZegoRTCLogEvent.kZegoPlayContentChanged.event), o.dataReport.addMsgInfo(e, {
                                session_id: n.ZegoRTCLogEvent.kZegoPlayContentChanged.session_id(d.player.sessionId),
                                video_activate: n.ZegoRTCLogEvent.kZegoPlayContentChanged.video_activate(1 == d.player.playOption.video ? 1 : 0 == d.player.playOption.video ? 0 : 1),
                                audio_activate: n.ZegoRTCLogEvent.kZegoPlayContentChanged.audio_activate(r ? 0 : 1)
                            }), o.dataReport.uploadReport(e), i(!0)
                        }), (function () {
                            o.logger.error("zsc.mps.0 fail"), a(!1)
                        }))
                    }
                }))
            }, e.prototype.setStreamAudioOutput = function (e, t) {
                var r = this;
                return !(null == t || 0 == t.length || !e) && (this.logger.debug("zsc.ssao.0 device " + t), e ? "undefined" !== e.sinkId ? (e.setSinkId(t).then((function () {
                    r.logger.info("zsc.ssao.0 success device: " + t)
                })).catch((function (e) {
                    r.logger.info("zsc.ssao.0 " + e.name)
                })), !0) : (this.logger.error("zsc.ssao.0 browser does not suppport"), !1) : (this.logger.error("zsc.ssao.0 no localVideo"), !1))
            }, e
        }();
        t.PlayModule = d
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.AudioMixModule = void 0;
        var o = r(3), i = r(0), s = r(1), n = function () {
            function e(e, t, r, o, i) {
                this.logger = e, this.dataReport = t, this.stateCenter = r, this.streamCenter = o, this.ac = i
            }

            return e.prototype.preloadEffect = function (e, t, r) {
                e && "string" == typeof e && t && "string" == typeof t ? this.stateCenter.audioEffectBuffer[e] ? this.logger.error(o.ZEGO_WEBRTC_ACTION.PRELOAD_EFFECT + " audio buffer already exists") : (this.logger.info(o.ZEGO_WEBRTC_ACTION.PRELOAD_EFFECT + " start preload effect"), this._preloadEffect(this.ac, e, t, r)) : this.logger.error(o.ZEGO_WEBRTC_ACTION.PRELOAD_EFFECT + " params error")
            }, e.prototype.playEffect = function (e, t, r) {
                e.streamID && "string" == typeof e.streamID && e.effectID && "string" == typeof e.effectID ? this.stateCenter.audioEffectBuffer[e.effectID] ? this._playEffect(e, t, r) : this.logger.error(o.ZEGO_WEBRTC_ACTION.PLAY_EFFECT + " audio buffer doesn't exists") : this.logger.error(o.ZEGO_WEBRTC_ACTION.PLAY_EFFECT + " params error")
            }, e.prototype.pauseEffect = function (e, t) {
                return e && "string" == typeof e ? (t && "string" != typeof t && this.logger.error(o.ZEGO_WEBRTC_ACTION.PAUSE_EFFECT + " effect "), this._pauseEffect(e, t)) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.PAUSE_EFFECT + " streamID format error"), !1)
            }, e.prototype.resumeEffect = function (e, t) {
                return e && "string" == typeof e ? (t && "string" != typeof t && this.logger.error(o.ZEGO_WEBRTC_ACTION.RESUME_EFFECT + " effect "), this._resumeEffect(e, t)) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.RESUME_EFFECT + " streamID format error"), !1)
            }, e.prototype.stopEffect = function (e, t) {
                return e && "string" == typeof e ? (t && "string" != typeof t && this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_EFFECT + " effect "), this._stopEffect(e, t)) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_EFFECT + " streamID format error"), !1)
            }, e.prototype.unloadEffect = function (e) {
                return e && "string" == typeof e ? (delete this.stateCenter.audioEffectBuffer[e], !0) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.UNLOAD_EFFECT + " params error"), !1)
            }, e.prototype.startMixingAudio = function (e, t) {
                return this.logger.info(o.ZEGO_WEBRTC_ACTION.START_MIXING_AUDIO + " call " + e), e && "string" == typeof e ? t ? (this.logger.info(o.ZEGO_WEBRTC_ACTION.START_MIXING_AUDIO + " end " + e), Array.isArray(t) && 0 !== t.length ? this._startMixingAudio(e, t) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.START_MIXING_AUDIO + " audio param type error"), !1)) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.START_MIXING_AUDIO + " no audio"), !1) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.START_MIXING_AUDIO + " stream id type error"), !1)
            }, e.prototype.stopMixingAudio = function (e, t) {
                return e && "string" == typeof e ? Array.isArray(t) && 0 !== t.length || void 0 === t ? this._stopMixingAudio(e, t) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_MIXING_AUDIO + " audio param type error"), !1) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_MIXING_AUDIO + " param streamID format error"), !1)
            }, e.prototype.mixingBuffer = function (e, t, r, i) {
                this.logger.info(o.ZEGO_WEBRTC_ACTION.MIXING_BUFFER + " call streamID: " + e + " sourceID:" + t), e && "string" == typeof e ? t && "string" == typeof t ? (this._mixingBuffer(e, t, r, i), this.logger.info(o.ZEGO_WEBRTC_ACTION.MIXING_BUFFER + " end")) : this.logger.error(o.ZEGO_WEBRTC_ACTION.MIXING_BUFFER + " param source id format error") : this.logger.error(o.ZEGO_WEBRTC_ACTION.MIXING_BUFFER + " param streamid format error")
            }, e.prototype.stopMixingBuffer = function (e, t) {
                return this.logger.info(o.ZEGO_WEBRTC_ACTION.STOP_MIXING_BUFFER + " call streamID: " + e + " sourceID:" + t), e && "string" == typeof e ? t && "string" == typeof t ? this._stopMixingBuffer(e, t) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_MIXING_BUFFER + " param source id format error"), !1) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.STOP_MIXING_BUFFER + " param streamid format error"), !1)
            }, e.prototype.setMixingAudioVolume = function (e, t, r) {
                return this.logger.info(o.ZEGO_WEBRTC_ACTION.SET_MIXING_AUDIO_VOLUME + " call"), "string" != typeof e || "" == e ? (this.logger.error(o.ZEGO_WEBRTC_ACTION.SET_MIXING_AUDIO_VOLUME + " stream ID must be string and not empty"), !1) : "number" != typeof t || t < 0 || t > 100 ? (this.logger.error(o.ZEGO_WEBRTC_ACTION.SET_MIXING_AUDIO_VOLUME + " volume must be a number between 0 and 100"), !1) : r && r instanceof HTMLMediaElement ? this._setMixingAudioVolume(e, t, r) : (this.logger.error(o.ZEGO_WEBRTC_ACTION.SET_MIXING_AUDIO_VOLUME + " no audio"), !1)
            }, e.prototype.getSoundLevel = function (e, t, r) {
                this.logger.info("zc.gsl call");
                var o = i.getReportSeq();
                this.dataReport.newReport(o, s.ZegoRTCLogEvent.kZegoTaskGetSoundLevel.event);
                try {
                    this.ac.resume();
                    var n = this.ac.createMediaStreamSource(e), a = this.ac.createScriptProcessor(4096, 1, 1);
                    this.stateCenter.audioStreamList[e.id] = {
                        mic: n,
                        script: a
                    }, n.connect(a), a.connect(this.ac.destination), a.onaudioprocess = function (e) {
                        for (var r = e.inputBuffer.getChannelData(0), o = 0, i = 0; i < r.length; i++) o < r[i] && (o = r[i]);
                        t(o)
                    }, this.dataReport.uploadReport(o)
                } catch (e) {
                    r(e), this.dataReport.addMsgInfo(o, s.ZegoRTCLogEvent.kZegoTaskGetSoundLevel.error.kGetSoundLevelError), this.dataReport.uploadReport(o)
                }
                this.logger.info("zc.gsl call success")
            }, e.prototype._preloadEffect = function (e, t, r, o) {
                var i = this, s = new XMLHttpRequest;
                s.open("GET", r, !0), s.responseType = "arraybuffer", s.onload = function () {
                    if (200 == s.status || 304 == s.status) {
                        var r = s.response;
                        e.decodeAudioData(r, (function (e) {
                            i.logger.info("zc.pe.0 effect preload success"), i.stateCenter.audioEffectBuffer[t] = e, o && o()
                        }), (function (e) {
                            i.logger.error("zc.pe.0 effect preload fail " + e), o && o(e)
                        }))
                    } else {
                        var n = s.statusText;
                        i.logger.error("zc.pe.0 effect preload fail " + n), o && o(n)
                    }
                }, s.send()
            }, e.prototype._playEffect = function (e, t, r) {
                var o = this.stateCenter.audioEffectBuffer[e.effectID], i = this.streamCenter.getPublisher(e.streamID);
                i ? o ? i.playEffect(e, o, t, r) : this.logger.error("zc.pe.1 no audio buffer found") : this.logger.error("zc.pe.1 publisher doesn't exist")
            }, e.prototype._pauseEffect = function (e, t) {
                var r = this.streamCenter.getPublisher(e);
                return r ? r.pauseEffect(t) : (this.logger.error("zc.pe.2 publisher doesn't exist"), !1)
            }, e.prototype._resumeEffect = function (e, t) {
                var r = this.streamCenter.getPublisher(e);
                return r ? r.resumeEffect(t) : (this.logger.error("zc.re.0 publisher doesn't exist"), !1)
            }, e.prototype._stopEffect = function (e, t) {
                var r = this.streamCenter.getPublisher(e);
                return r ? r.stopEffect(t) : (this.logger.error("zc.re.0 publisher doesn't exist"), !1)
            }, e.prototype._setMixingAudioVolume = function (e, t, r) {
                var o = this.streamCenter.getPublisher(e);
                return o ? o.setMixingAudioVolume(t / 100, r) : (this.logger.error("zc.sma.2 publisher doesn't exist"), !1)
            }, e.prototype._startMixingAudio = function (e, t) {
                var r = this.streamCenter.getPublisher(e);
                return r ? r.startMixingAudio(t) : (this.logger.error("zc.sma.0 publisher doesn't exist"), !1)
            }, e.prototype._stopMixingAudio = function (e, t) {
                var r = this.streamCenter.getPublisher(e);
                return r ? r.stopMixingAudio(t) : (this.logger.error("zc.sma.1 publisher doesn't exist"), !1)
            }, e.prototype._mixingBuffer = function (e, t, r, o) {
                var i = this.streamCenter.getPublisher(e);
                i ? r instanceof ArrayBuffer ? i.mixingBuffer(t, r, o) : this.logger.error("zc.mb.0 array buffer not found") : this.logger.error("zc.mb.0 publisher doesn't exist")
            }, e.prototype._stopMixingBuffer = function (e, t) {
                var r = this.streamCenter.getPublisher(e);
                return r ? r.stopMixingBuffer(t) : (this.logger.error("zc.sma.1 publisher doesn't exist"), !1)
            }, e
        }();
        t.AudioMixModule = n
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.AdvancedModule = void 0;
        var o = r(3), i = r(0), s = r(1), n = r(2), a = r(4), d = function () {
            function e(e, t, r) {
                this.logger = e, this.dataReport = t, this.streamCenter = r, this.screenShotReady = !1
            }

            return e.prototype.setVideoConfig = function (e, t) {
                var r = this;
                return this.logger.info(o.ZEGO_WEBRTC_ACTION.SET_VIDEO_CONFIG + " call"), new Promise((function (a, d) {
                    var c = i.getReportSeq();
                    if (r.dataReport.newReport(c, s.ZegoRTCLogEvent.kZegoSetVideoConfig.event), !(e instanceof MediaStream)) return r.logger.error(o.ZEGO_WEBRTC_ACTION.SET_VIDEO_CONFIG + " localStream not found"), r.dataReport.addMsgInfo(c, s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kLocalStreamError), r.dataReport.uploadReport(c), void d({
                        errorCode: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.message + " localStream no found"
                    });
                    if (!t || "object" != typeof t || 0 == Object.keys(t).length) return r.logger.error(o.ZEGO_WEBRTC_ACTION.SET_VIDEO_CONFIG + " constraints wrong"), r.dataReport.addMsgInfo(c, s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError), r.dataReport.uploadReport(c), void d({
                        errorCode: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.message + " constraints wrong"
                    });
                    if (t.width && !n.ClientUtil.checkValidNumber(t.width)) return r.logger.error(o.ZEGO_WEBRTC_ACTION.SET_VIDEO_CONFIG + " constraints width integer number, range[1, 10000]"), r.dataReport.addMsgInfo(c, {
                        error: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.code,
                        message: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.message + " constraints width integer number, range[1, 10000]"
                    }), r.dataReport.uploadReport(c), void d({
                        errorCode: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.message + " constraints wrong"
                    });
                    if (t.height && !n.ClientUtil.checkValidNumber(t.height)) return r.logger.error(o.ZEGO_WEBRTC_ACTION.SET_VIDEO_CONFIG + " constraints height integer number, range[1, 10000]"), r.dataReport.addMsgInfo(c, {
                        error: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.code,
                        message: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.message + " constraints height integer number, range[1, 10000]"
                    }), r.dataReport.uploadReport(c), void d({
                        errorCode: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoSetVideoConfig.error.kParamError.message + " constraints wrong"
                    });
                    r.setPublishStreamConstraints(e, t, (function (e) {
                        r.dataReport.uploadReport(c), a(e)
                    }))
                }))
            }, e.prototype.setAudioConfig = function (e, t) {
                var r = this;
                return this.logger.info(o.ZEGO_WEBRTC_ACTION.SET_AUDIO_CONFIG + " call"), new Promise((function (n) {
                    var a = i.getReportSeq();
                    if (r.dataReport.newReport(a, s.ZegoRTCLogEvent.kZegoSetAudioConfig.event), !(e instanceof MediaStream)) return r.logger.error(o.ZEGO_WEBRTC_ACTION.SET_AUDIO_CONFIG + " localStream not found"), r.dataReport.addMsgInfo(a, s.ZegoRTCLogEvent.kZegoSetAudioConfig.error.kParamError), r.dataReport.uploadReport(a), void n({
                        errorCode: s.ZegoRTCLogEvent.kZegoSetAudioConfig.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoSetAudioConfig.error.kParamError.message + " localStream no found"
                    });
                    if (!t || "object" != typeof t || 0 == Object.keys(t).length || void 0 !== t.AEC && "boolean" != typeof t.AEC || void 0 !== t.AGC && "boolean" != typeof t.AGC || void 0 !== t.ANS && "boolean" != typeof t.ANS) return r.logger.error(o.ZEGO_WEBRTC_ACTION.SET_AUDIO_CONFIG + " constraints wrong"), r.dataReport.addMsgInfo(a, s.ZegoRTCLogEvent.kZegoSetAudioConfig.error.kParamError), r.dataReport.uploadReport(a), void n({
                        errorCode: s.ZegoRTCLogEvent.kZegoSetAudioConfig.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoSetAudioConfig.error.kParamError.message + " constraints wrong"
                    });
                    r.setPublishStreamConstraints(e, t, (function (e) {
                        r.dataReport.uploadReport(a), n(e)
                    }))
                }))
            }, e.prototype.enableStream = function (e, t) {
                if (this.logger.info(o.ZEGO_WEBRTC_ACTION.ENABLE_STREAM + " call"), "boolean" != typeof t.video && "boolean" != typeof t.audio) return this.logger.error(o.ZEGO_WEBRTC_ACTION.ENABLE_STREAM + " option error"), !1;
                var r = !0, i = !0;
                return "boolean" == typeof t.video && (r = this.enableCamera(e, t.video)), "boolean" == typeof t.audio && (i = this.enableMicrophone(e, t.audio)), r && i
            }, e.prototype.replaceTrack = function (e, t) {
                var r = this;
                return new Promise((function (n) {
                    var a = i.getReportSeq();
                    if (r.dataReport.newReport(a, s.ZegoRTCLogEvent.kZegoReplaceTrack.event), !(e instanceof MediaStream)) return r.logger.error(o.ZEGO_WEBRTC_ACTION.REPLACE_TRACK + " localStream not found"), r.dataReport.uploadReport(a, void 0, s.ZegoRTCLogEvent.kZegoReplaceTrack.error.kParamError), void n({
                        errorCode: s.ZegoRTCLogEvent.kZegoReplaceTrack.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoReplaceTrack.error.kParamError.message + " localStream no found"
                    });
                    if (!(t && t instanceof MediaStreamTrack)) return r.logger.error(o.ZEGO_WEBRTC_ACTION.REPLACE_TRACK + " mediastream track no found"), r.dataReport.uploadReport(a, void 0, s.ZegoRTCLogEvent.kZegoReplaceTrack.error.kParamError), void n({
                        errorCode: s.ZegoRTCLogEvent.kZegoReplaceTrack.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoReplaceTrack.error.kParamError.message + " mediastream track no found"
                    });
                    r._replaceTrack(e, t, (function (e) {
                        r.dataReport.uploadReport(a), n(e)
                    }))
                }))
            }, e.prototype.setPublishStreamConstraints = function (e, t, r) {
                var o = this, n = (/Safari/.test(navigator.userAgent) && /Chrome/.test(navigator.userAgent), null);
                for (var d in this.logger.info("zsc.spsc.0 constraints", JSON.stringify(t)), this.streamCenter.publisherList) this.streamCenter.publisherList[d].localStream == e && (n = this.streamCenter.publisherList[d]);
                if (!n) return this.logger.error("zsc.spsc.0 publisher not found"), void (r && r({
                    errorCode: a.errorCodeList.PUBLISH_NOT_PUBLISH.code,
                    extendedData: a.errorCodeList.PUBLISH_NOT_PUBLISH.message
                }));
                this.logger.info("zsc.spsc.0 streamId ", n.streamID);
                var c = this.streamCenter.checkPreview(e);
                if (!c) return this.logger.error("zsc.spsc.0 preview no found"), void (r && r({
                    errorCode: a.errorCodeList.PUBLISH_NO_PREVIEW.code,
                    extendedData: a.errorCodeList.PUBLISH_NO_PREVIEW.message
                }));
                var l = !1, u = !1;
                (t.width || t.height || t.frameRate) && (c.mediaStreamConfig.videoQuality = 4, l = !0), void 0 === t.ANS && void 0 === t.AGC && void 0 === t.AEC || (u = !0);
                var g = c.localStream, p = g.getVideoTracks()[0], h = g.getAudioTracks()[0];
                l && !p && (this.logger.error("zsc.spsc.0 video track not found"), r && r({
                    errorCode: a.errorCodeList.TRACK_NOT_FOUND.code,
                    extendedData: a.errorCodeList.TRACK_NOT_FOUND.message
                })), u && !h && (this.logger.error("zsc.spsc.0 audio track not found"), r && r({
                    errorCode: a.errorCodeList.TRACK_NOT_FOUND.code,
                    extendedData: a.errorCodeList.TRACK_NOT_FOUND.message
                }));
                var m = JSON.parse(JSON.stringify(c.mediaStreamConfig)), f = Object.assign(c.mediaStreamConfig, t),
                    E = c.getMediaStreamConstraints(f, !0);
                this.logger.info("zsc.spsc.0 applyConstraints ", JSON.stringify(E));
                var _ = [];
                if (l && _.push(p.applyConstraints(E.video)), u && (h.stop(), _.push(navigator.mediaDevices.getUserMedia({
                    video: !1,
                    audio: E.audio
                }))), t.maxBitrate) {
                    var T = n.publisher.peerConnection.getSenders().find((function (e) {
                        return e.track && "video" === e.track.kind
                    })), v = T.getParameters();
                    v.encodings || (v.encodings = [{}]), v.encodings[0].maxBitrate = 1e3 * t.maxBitrate, _.push(T.setParameters(v))
                }
                if (_.length > 0) Promise.all(_).then((function (e) {
                    if (o.logger.info("zsc.spsc.0 set constraints success", e[1]), u) {
                        var a = (l ? e[1] : e[0]).getAudioTracks()[0];
                        if (n.publisher.peerConnection.getSenders().find((function (e) {
                            return "audio" === e.track.kind
                        })).replaceTrack(a), g) {
                            var d = g.getAudioTracks()[0];
                            g.removeTrack(d), g.addTrack(a)
                        }
                    }
                    if (l && (t.width || t.height)) {
                        var c = i.getReportSeq();
                        o.dataReport.newReport(c, s.ZegoRTCLogEvent.kZegoTaskVideoCaptureSize.event), o.dataReport.addMsgInfo(c, {
                            session_id: s.ZegoRTCLogEvent.kZegoTaskVideoCaptureSize.session_id(n.publisher.sessionId),
                            w: s.ZegoRTCLogEvent.kZegoTaskVideoCaptureSize.w(p.getSettings().width),
                            h: s.ZegoRTCLogEvent.kZegoTaskVideoCaptureSize.h(p.getSettings().height)
                        }), o.dataReport.uploadReport(c)
                    }
                    t.maxBitrate && n.publisher && (n.publisher.videoInfo.bitRate = t.maxBitrate), r && r({
                        errorCode: 0,
                        extendedData: ""
                    })
                })).catch((function (e) {
                    o.logger.error("zsc.spsc.0 fail reason ", e.name, JSON.stringify(e)), r && r({
                        errorCode: a.errorCodeList.PUBLISHER_CONSTRAINTS_ERROR.code,
                        extendedData: e.name + " " + (e.constraint ? "constraint:" + e.constraint : "")
                    })
                })); else {
                    if (this.logger.warn("zsc.spsc.0 constaints is no changes"), u) {
                        var S = c.getMediaStreamConstraints(m);
                        this.logger.info("zsc.spsc.0 oldMediaStreamConstraints ", JSON.stringify(S)), navigator.mediaDevices.getUserMedia({
                            video: !1,
                            audio: S.audio
                        }).then((function (e) {
                            e.getTracks().forEach((function (e) {
                                var t = g.getTracks().find((function (t) {
                                    return t.kind === e.kind
                                }));
                                n.publisher.peerConnection.getSenders().find((function (t) {
                                    return null !== t.track && t.track.kind === e.kind
                                })).replaceTrack(e), t && g.removeTrack(t), g.addTrack(e)
                            })), o.logger.info("zsc.spsc.0.1 setbackup suc ")
                        })).catch((function (e) {
                            o.logger.error("zsc.spsc.0.1 setbackup fail " + e.name)
                        }))
                    }
                    r && r({
                        errorCode: a.errorCodeList.PUBLISHER_CONSTRAINTS_ERROR.code,
                        extendedData: "constraints is no changes"
                    })
                }
            }, e.prototype.useVideoDevice = function (e, t) {
                var r = this;
                return this.logger.info("zc.uvd.0 call"), new Promise((function (o) {
                    var a = i.getReportSeq();
                    if (r.dataReport.newReport(a, s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.event), r.dataReport.addMsgInfo(a, {device: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.device(t)}), !(e instanceof MediaStream)) return r.logger.error("zc.uvd.0 localStream not found"), r.dataReport.addMsgInfo(a, s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kLocalStreamError), r.dataReport.uploadReport(a), void o({
                        errorCode: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kParamError.message
                    });
                    if ("string" != typeof t) return r.logger.error("zc.uvd.0 deviceID must be string"), r.dataReport.addMsgInfo(a, {
                        error: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kParamError.code,
                        message: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kParamError.message + " deviceID must be string"
                    }), r.dataReport.uploadReport(a), void o({
                        errorCode: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kParamError.message
                    });
                    var d = function (e) {
                        r.dataReport.uploadReport(a), o(e)
                    };
                    n.ClientUtil.getDevices((function (i) {
                        if (!i.cameras.find((function (e) {
                            return e.deviceID == t
                        }))) return r.logger.error("zc.uvd.0 device is not found"), void o({
                            errorCode: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kDevicesNoFoundError.code,
                            extendedData: s.ZegoRTCLogEvent.kZegoTaskUseVideoDevice.error.kDevicesNoFoundError.message
                        });
                        r.switchDevice("video", e, t, d)
                    }), (function (o) {
                        r.logger.warn("zc.uvd.0 getDevices err:", o), r.switchDevice("video", e, t, d)
                    }))
                }))
            }, e.prototype.useAudioDevice = function (e, t) {
                var r = this;
                return this.logger.info("zc.uad.1 call"), new Promise((function (o) {
                    var a = i.getReportSeq();
                    if (r.dataReport.newReport(a, s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.event), r.dataReport.addMsgInfo(a, {device: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.device(t)}), !(e instanceof MediaStream)) return r.logger.error("zc.uad.1 localStream not found"), r.dataReport.addMsgInfo(a, s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kLocalStreamError), r.dataReport.uploadReport(a), void o({
                        errorCode: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kParamError.message
                    });
                    if ("string" != typeof t) return r.logger.error("zc.uad.1 deviceID must be string"), r.dataReport.addMsgInfo(a, {
                        error: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kParamError.code,
                        message: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kParamError.message + " deviceID must be string"
                    }), r.dataReport.uploadReport(a), void o({
                        errorCode: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kParamError.code,
                        extendedData: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kParamError.message
                    });
                    var d = function (e) {
                        r.dataReport.uploadReport(a), o(e)
                    };
                    n.ClientUtil.getDevices((function (i) {
                        if (!i.microphones.find((function (e) {
                            return e.deviceID == t
                        }))) return r.logger.error("zc.uad.1 device is not found"), void o({
                            errorCode: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kDevicesNoFoundError.code,
                            extendedData: s.ZegoRTCLogEvent.kZegoTaskUseAudioDevice.error.kDevicesNoFoundError.message
                        });
                        r.switchDevice("audio", e, t, d)
                    }), (function (o) {
                        r.logger.warn("zc.uad.1 getDevices err:", o), r.switchDevice("audio", e, t, d)
                    }))
                }))
            }, e.prototype.switchDevice = function (e, t, r, o) {
                var i = this, s = this.streamCenter.checkPreview(t);
                if (!s) return this.logger.error("zsc.sd.0 preview no found"), void (o && o({
                    errorCode: a.errorCodeList.PUBLISH_NO_PREVIEW.code,
                    extendedData: a.errorCodeList.PUBLISH_NO_PREVIEW.message
                }));
                var d = null;
                for (var c in this.streamCenter.publisherList) this.streamCenter.publisherList[c].localStream == t && (d = this.streamCenter.publisherList[c]);
                if ("video" === e && 0 == s.mediaStreamConfig.video) return this.logger.error("zsc.sd.0 camera can not be changed when video is false"), void (o && o({
                    errorCode: a.errorCodeList.VIDEO_DEVICE_FALSE.code,
                    extendedData: a.errorCodeList.VIDEO_DEVICE_FALSE.message
                }));
                if ("audio" === e && 0 == s.mediaStreamConfig.audio) return this.logger.error("zsc.sd.0 microphone can not be changed when audio is false"), void (o && o({
                    errorCode: a.errorCodeList.AUDIO_DEVICE_FALSE.code,
                    extendedData: a.errorCodeList.AUDIO_DEVICE_FALSE.message
                }));
                s.mediaStreamConfig.videoInput !== r && delete s.mediaStreamConfig.facingMode;
                var l, u = {};
                "video" === e ? (u.videoInput = r, l = t.getVideoTracks()[0]) : (u.audioInput = r, l = t.getAudioTracks()[0]);
                var g = n.ClientUtil.getBrowser();
                this.logger.info("zsc.sd.0 browser " + g), "Firefox" === g && l.stop();
                var p = Object.assign(s.mediaStreamConfig, u), h = s.getMediaStreamConstraints(p), m = t.clone();
                navigator.mediaDevices.getUserMedia(h).then((function (r) {
                    r.getTracks().forEach((function (e) {
                        var r = t.getTracks().find((function (t) {
                            return t.kind === e.kind
                        }));
                        if (e.enabled = r.enabled, d) {
                            var o = d.publisher.peerConnection.getSenders().find((function (t) {
                                return null !== t.track && t.track.kind === e.kind
                            }));
                            o ? o.replaceTrack(e) : i.logger.warn("zsc.sd.0 no sender found, only swithcing device on localMediaElement")
                        }
                        t.removeTrack(r), t.addTrack(e)
                    })), m.getTracks().forEach((function (e) {
                        return e.stop()
                    })), i.logger.info("zsc.sd.0 swtich " + e + " device success"), o && o({
                        errorCode: 0,
                        extendedData: ""
                    })
                }), (function (r) {
                    i.logger.error("zsc.sd.0 swtich " + e + "device fail ", r.name, JSON.stringify(r)), "Firefox" === g && m.getTracks().forEach((function (e) {
                        var r = t.getTracks().find((function (t) {
                            return t.kind === e.kind
                        }));
                        d.publisher.peerConnection.getSenders().find((function (t) {
                            return null !== t.track && t.track.kind === e.kind
                        })).replaceTrack(e), t.removeTrack(r), t.addTrack(e)
                    })), o && o({
                        errorCode: a.errorCodeList.AUDIO_DEVICE_FALSE.code,
                        extendedData: a.errorCodeList.AUDIO_DEVICE_FALSE.message + JSON.stringify(r)
                    })
                }))
            }, e.prototype._replaceTrack = function (e, t, r) {
                var o = this.streamCenter.checkPreview(e), s = this.streamCenter.checkPublish(e);
                /Safari/.test(navigator.userAgent) && /Chrome/.test(navigator.userAgent);
                if (s) {
                    var n = s.publisher.localStream;
                    if (!s.publisher.peerConnection.getSenders || !s.publisher.peerConnection.getSenders()[0].replaceTrack) return this.logger.error("zc.rt.0 replack track is not supported"), void (r && r({
                        errorCode: a.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.code,
                        extendedData: a.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.message + " replack track is not supported"
                    }));
                    g = n.getTracks().find((function (e) {
                        return e.kind === t.kind
                    }));
                    var d = s.publisher.peerConnection.getSenders().find((function (e) {
                        return e.track.kind === t.kind
                    }));
                    if (g && d) {
                        var c = 0, l = 0, u = t.enabled !== g.enabled;
                        "video" === t.kind ? (c = !0 === t.enabled ? 0 : 2, l = n.getAudioTracks()[0] && 1 == n.getAudioTracks()[0].enabled ? 0 : 2) : "audio" === t.kind && (l = !0 === t.enabled ? 0 : 2, c = n.getVideoTracks()[0] && 1 == n.getVideoTracks()[0].enabled ? 0 : 2), d.replaceTrack(t), n.removeTrack(g), n.addTrack(t), u && s.publisher.signal && s.publisher.signal.sendStreamStatus(i.getSeq(), s.publisher.sessionId, c, l, s.publisher.streamId), r && r({
                            errorCode: 0,
                            extendedData: ""
                        })
                    } else this.logger.error("zc.rt.0 publisher track no found"), r && r({
                        errorCode: a.errorCodeList.TRACK_NOT_FOUND.code,
                        extendedData: a.errorCodeList.TRACK_NOT_FOUND.message
                    })
                } else {
                    if (!o) return this.logger.error("zc.rt.0 preview no found"), void (r && r({
                        errorCode: a.errorCodeList.PUBLISH_NO_PREVIEW.code,
                        extendedData: a.errorCodeList.PUBLISH_NO_PREVIEW.message
                    }));
                    var g, p = o.localStream;
                    (g = p.getTracks().find((function (e) {
                        return e.kind === t.kind
                    }))) ? (p.removeTrack(g), p.addTrack(t), r && r({
                        errorCode: 0,
                        extendedData: ""
                    })) : (this.logger.error("zc.rt.0 track no found"), r && r({
                        errorCode: a.errorCodeList.TRACK_NOT_FOUND.code,
                        extendedData: a.errorCodeList.TRACK_NOT_FOUND.message
                    }))
                }
            }, e.prototype.enableMicrophone = function (e, t) {
                var r = this.streamCenter.checkPreview(e);
                return r ? r.enableMicrophone(t, this.streamCenter) : (this.logger.error("zsc.em.0 no preview"), !1)
            }, e.prototype.enableCamera = function (e, t) {
                var r = this.streamCenter.checkPreview(e);
                return r ? r.enableCamera(t, this.streamCenter) : (this.logger.error("zsc.ec.0 no preview"), !1)
            }, e
        }();
        t.AdvancedModule = d
    }])
}));