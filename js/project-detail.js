(function () {
    "use strict";

    function getProjectIndex() {
        var params = new URLSearchParams(window.location.search);
        var rawIndex = params.get('project');
        var index = Number(rawIndex);
        return Number.isInteger(index) && index >= 0 ? index : 0;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var detailTarget = document.getElementById('project-detail');
        var projects = window.portfolioProjects || [];
        var renderDetail = window.renderPortfolioProjectDetail;
        var project = projects[getProjectIndex()];

        if (!detailTarget || !project || typeof renderDetail !== 'function') {
            if (detailTarget) {
                detailTarget.innerHTML = '<a class="detail-back" href="index.html#project"><i class="fa fa-arrow-left"></i> Back to Projects</a><div class="detail-panel"><h3>Project not found</h3><p>Please return to the projects page and choose a project again.</p></div>';
            }
            return;
        }

        renderDetail(project);
        detailTarget.hidden = false;
        document.title = project.title + ' | Portfolio';
    });
})();
