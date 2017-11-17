angular.module("myModule", [])
    .controller("myController", ["$sce", function ($sce) {
        var viewModel = {
            link: "http://localhost:6603/Portal/Partner/Login",
            onLinkEntered: function () {
                this.frameLink = $sce.trustAsResourceUrl(this.link);
            }
        };

        viewModel.onLinkEntered();

        return viewModel;
    }]);