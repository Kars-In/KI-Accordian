
angular.module("kiAccordion", [])
    .directive("kiAccordion", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {},
            template:
                "<div class='KI-Accordion' ng-transclude></div>",
            
            controller: function () { }
        };
    })
    .directive('kiPane', function () {
        return {
            require: "^kiAccordion",
            restrict: "E",
            transclude: {
                "head": "kiPaneHead",
                "body": "kiPaneBody"
            },
            replace: true,
            scope: {},
            template:
                "<div class='KI-HoverWrap' >" +
                "  <div class='KI-HoverHead' ng-transclude='head'></div>" +
                "  <div class='KI-HoverBody' ng-transclude='body'></div>" +
                "</div>",            
        };
    })
    .directive("kiPaneHead", function () {
        return {
            require: "^kiPane",
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {},
            template:
                "<ng-transclude></ng-transclude>",
        }
    })
    .directive("kiPaneBody", function () {
        return {
            require: "^kiPane",
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {},
            template:
                 "<ng-transclude></ng-transclude>",
        }
    })
;
