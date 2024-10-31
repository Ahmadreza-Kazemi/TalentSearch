(function () {

    var scripts = document.getElementsByTagName('script');
    var script = scripts[scripts.length - 1];
    var scriptParent = script.parentNode;
    var formUrl = getAttribute('form-url');
    var serverUrl = getServerUrl(formUrl);
    var style = getAttribute('form-style');
    var theme = getAttribute('form-theme') || '';
    var RVC = new raveshFrameWork();
    var container = RVC.createElement('div', 'ravesh-formbuilder-container');

    var scriptSizer = document.createElement('script');
    scriptSizer.type = 'text/javascript';
    scriptSizer.src =serverUrl +'pages/formBuilder/scripts/iframeSizer.js';
    document.body.insertBefore(scriptSizer, document.body.firstChild);

    function createIframe(showLoading) {
        container.innerHTML = "";
        var loadingOverlay = RVC.createElement('div', 'ravesh-loading-overlay');
        var loadingSpinner = RVC.createElement('div', 'ravesh-spinner');
        var iframe = RVC.createElement('iframe');

        RVC.appendChilds(container, [iframe, loadingOverlay, loadingSpinner]);

        if (!showLoading) {
            RVC.hide(loadingOverlay);
            RVC.hide(loadingSpinner);
        }

        var iframeId = 'id_' + Math.random().toString(36).substr(2, 10);
        iframe.id = iframeId;
        iframe.src = getAttribute('formUrl');
        iframe.allow = 'camera *;microphone *;fullscreen;geolocation https://formafzar.com;';
        iframe.frameBorder = '0';
        iframe.scrolling = 'no';
        iframe.style.padding = '0';
        iframe.style.margin = '0';
        iframe.style.display = 'block';
        iframe.style.width = '100%';
        iframe.style.backgroundColor = 'transparent';
        iframe.allowtransparency = 'true';
        iframe.style.overflow = 'hidden';

        var url = new URL(formUrl);
        url.searchParams.set('style', style);
        url.searchParams.set('theme', theme);
        url.searchParams.set('urlReferrer', window.location.href);
        iframe.src = url.toString();

        var timerIFrameSizer = setInterval(function () {
            if (window.initIframeSizer) { initIframeSizer(iframe); clearInterval(timerIFrameSizer); }
        }, 100);

        iframe.onload = function () {
            setTimeout(function () {
                loadingOverlay.remove();
                loadingSpinner.remove();
            }, 1000);
        }

        return container;
    }


    if (style == 'inline') {
        if (scriptParent.nodeName != "HEAD") {
            scriptParent.insertBefore(createIframe(), script);
            scriptParent.removeChild(script);
        } else {
            document.body.appendChild(createIframe());
        }


    } else if (style == 'dialog') {
        var linkText = getAttribute('form-link-text') || 'View form';
        var link = document.createElement('a');

        link.href = '#';
        link.onclick = function (ev) {
            var dialog = new raveshDialog();
            dialog.setContent(createIframe(true));
            dialog.setTitle(linkText);
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
        link.appendChild(document.createTextNode(linkText));

        scriptParent.insertBefore(link, script);
        scriptParent.removeChild(script);


    } else if (style == 'fab') {
        var linkText = getAttribute('form-link-text') || 'View form';
        var buttonColor = getAttribute('form-button-color') || '#1e88e5';
        var buttonImages = getAttribute('form-button-icon');

        var fabImage = RVC.createElement('img');
        fabImage.setAttribute('src', buttonImages);

        var fab = RVC.createElement('div', 'ravesh-float-action-button');
        fab.appendChild(fabImage);
        fab.style.backgroundColor = buttonColor;
        fab.setAttribute('title', linkText);
        fab.onclick = function (ev) {
            var dialog = new raveshDialog();
            dialog.setContent(createIframe(true));
            dialog.setTitle(linkText);
            dialog.setOnClose(function () {
                RVC.show(fab);
                RVC.removeClass(fab, 'ravesh-zoomOut');
                RVC.addClass(fab, 'ravesh-bounceIn');
            });

            RVC.removeClass(fab, 'ravesh-bounceIn');
            RVC.addClass(fab, 'ravesh-zoomOut');
            setTimeout(function () { RVC.hide(fab) }, 900);

            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }

        var css = '.ravesh-float-action-button:hover {box-shadow: 0 0 8px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.28);}' +
                  '.ravesh-float-action-button {z-index:10000;line-height:0;box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);border-radius: 50%;color: #fff;padding: 16px;position: fixed;bottom: 30px;right: 30px;min-width: 25px;min-height: 25px;cursor: pointer;}' +
                  '.ravesh-float-action-button img {height: 25px;width: 25px;}' +
                  '@keyframes ravesh-bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.ravesh-bounceIn{animation:ravesh-bounceIn 1.5s}' +
                  '@keyframes ravesh-zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.ravesh-zoomOut{animation:ravesh-zoomOut 1s}';
        RVC.addCssStyleTag(css);

        scriptParent.insertBefore(fab, script);
        scriptParent.removeChild(script);

        RVC.hide(fab);
        setTimeout(function () {
            RVC.show(fab);
            RVC.addClass(fab, 'ravesh-bounceIn');
        }, 1000);

    } else if (style == 'drop') {
        var linkText = getAttribute('form-link-text') || 'View form';
        var formWidth = getAttribute('form-width') || '300px';
        var formHeight = getAttribute('form-height') || '400px';
        var formPosition = getAttribute('form-positiob') || 'right';

        var dropContainer = RVC.createElement('div', 'ravesh-drop-container');
        var dropButton = RVC.createElement('div', 'ravesh-drop-button');
        var dropContent = RVC.createElement('div', 'ravesh-drop-content');
        RVC.appendChilds(dropContainer, [dropButton, dropContent]);
        dropButton.innerHTML = '<div class="ravesh-drop-button-icon"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg></div>' +
                               '<div class="ravesh-drop-button-title">' + linkText.replace(/'/g, ' ') + '</div>';

        dropContainer.style.bottom = "-" + formHeight;
        dropContainer.style.width = formWidth;
        if (formPosition == 'right') {
            dropContainer.style.right = 0;
            dropContainer.style.direction = 'rtl';
        } else {
            dropContainer.style.left = 0;
            dropContainer.style.direction = 'ltr';
        }
        dropContent.style.height = formHeight;

        var css = '.ravesh-drop-container{position:fixed;margin:0 50px;z-index:1000;transition:all 0.5s ease-in;}' +
            '.ravesh-drop-button-title{font-family:iransans,tahoma;font-size:12px;float:right}' +
            '.ravesh-drop-button-icon{float:right;margin:8px -5px 8px 0;transition: all 0.3s;}' +
            '.ravesh-drop-button{overflow:hidden;padding:0 15px;box-shadow:0 0 10px 0 rgba(0,0,0,0.25);border-radius:10px 10px 0 0;line-height:40px;cursor:pointer;transition:all .3s;display:inline-block;background: #fff;}' +
            '.ravesh-drop-button:hover{background:#f7f7f7}' +
            '.ravesh-drop-content{width:100%;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,0.25);z-index:1;position:relative;overflow-y: auto;overflow-x: hidden;}' +
            '.ravesh-drop-container.ravesh-is-open .ravesh-drop-button-icon{transform: rotate(180deg);}';
        RVC.addCssStyleTag(css);

        dropButton.onclick = function () {
            if (dropContainer.classList.contains("ravesh-is-open")) {
                dropContainer.style.bottom = "-" + formHeight;
                dropContainer.classList.remove('ravesh-is-open');
            } else {
                dropContainer.style.bottom = 0;
                dropContainer.classList.add('ravesh-is-open');
                if (!dropContent.isInitForm) {
                    setTimeout(function () {//timeout for open drop
                        dropContent.appendChild(createIframe(true));
                    }, 500);
                    dropContent.isInitForm = true
                }
            }
        }

        scriptParent.insertBefore(dropContainer, script);
        scriptParent.removeChild(script);
    }


    var mainCss = '.ravesh-loading-overlay {position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: #fff;}' +
                 '.ravesh-spinner {display: inline-block;width: 30px;height: 30px;border: solid 2px;border-radius: 100%;animation: ravesh-spinner 1s infinite linear;border-color: rgba(0, 0, 0, .1);border-top-color: rgb(0, 0, 0);position: absolute;top: 50%;left: 50%;}' +
                 '@keyframes ravesh-spinner {0% {transform: rotate(0);}100% {transform: rotate(360deg);}}'
    RVC.addCssStyleTag(mainCss);


    function getQueryString(name) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(script.src);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function getAttribute(name) {
        return script.getAttribute(name);
    }

    function getServerUrl(src) {
        var a = document.createElement('a');
        a.href = src;
        return a.protocol + '//' + a.host + '/';
    }

    function raveshFrameWork() {
        var self = this;
        self.createElement = function (tagName, className) {
            var elem = document.createElement(tagName);
            if (className) elem.classList.add(className);
            return elem;
        }
        self.createTextElement = function (text) {
            return document.createTextNode(text)
        }
        self.appendChilds = function (parent, arrChilds) {
            for (var i = 0; i <= arrChilds.length - 1; i++) {
                parent.appendChild(arrChilds[i]);
            }
        }
        self.hide = function (elem) {
            elem.style.display = 'none';
        }
        self.show = function (elem) {
            elem.style.display = 'block';
        }
        self.addClass = function (elem, className) {
            elem.classList.add(className);
        }
        self.removeClass = function (elem, className) {
            elem.classList.remove(className);
        }
        self.addCssStyleTag = function (css) {
            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            document.body.appendChild(style);
        }
    }

    function raveshDialog() {
        var self = this;
        var onClose = function () { }

        //default methods
        self.close = close;
        self.showLoading = showLoading;
        self.hideLoading = hideLoading;
        self.setContent = setContent;
        self.setTitle = setTitle;
        self.resizeDialog = resizeDialog;
        self.setOnClose = function (callback) { onClose = callback };


        var btnClose = RVC.createElement('div', 'ravesh-close-btn');
        var title = RVC.createElement('div', 'ravesh-title');
        var header = RVC.createElement('div', 'ravesh-header');
        RVC.appendChilds(header, [btnClose, title]);

        var spinnerCover = RVC.createElement('div', 'spinner-cover');
        RVC.appendChilds(spinnerCover, [RVC.createElement('div', 'spinner2')]);
        RVC.hide(spinnerCover);

        var dialog = RVC.createElement('div', 'ravesh-mini-dialog');
        var content = RVC.createElement('div', 'ravesh-content');
        var contentScroll = RVC.createElement('div', 'ravesh-content-scroll');
        RVC.appendChilds(contentScroll, [content]);
        RVC.appendChilds(dialog, [spinnerCover, header, contentScroll]);

        var overlay = RVC.createElement('div', 'ravesh-mini-dialog-overlay');
        RVC.appendChilds(overlay, [dialog]);

        RVC.appendChilds(document.body, [overlay]);

        overlay.onclick = function (ev) {
            if (ev.target.className == 'ravesh-mini-dialog-overlay') close();
        }

        btnClose.onclick = function (ev) {
            close();
            ev.preventDefault();
        }


        setTimeout(function () {
            overlay.style.opacity = 1;
            dialog.style.transform = 'scale(1)';
        }, 100);


        window.addEventListener('resize', function (e) {
            resizeDialog();
        });
        setInterval(resizeDialog, 1000);

        function resizeDialog() {
            if (content.clientHeight + 100 >= window.innerHeight) {
                contentScroll.style.height = (window.innerHeight - 100) + 'px';
            } else {
                contentScroll.style.height = (content.clientHeight) + 'px';
            }
        }
        function close() {
            overlay.style.opacity = 0;
            setTimeout(function () {
                overlay.remove();
            }, 500);
            onClose();
        }
        function setContent(elem) {
            content.appendChild(elem);
            resizeDialog();
        }
        function setTitle(str) {
            title.appendChild(document.createTextNode(str));
        }
        function showLoading() {
            RVC.show(spinnerCover);
        }
        function hideLoading() {
            RVC.hide(spinnerCover);
        }

        if (!window.raveshDialogAddedCss) {
            window.raveshDialogAddedCss = true;
            //@media all and (min-width: 450px) and (max-width:649px) {
            var css = '.ravesh-mini-dialog-overlay {opacity:0;transition:opacity 0.5s;z-index: 10000000;background: rgba(0, 0, 0, 0.4);position: fixed;top: 0;right: 0;bottom: 0;left: 0;display: flex;cursor: pointer;}' +
                      '.ravesh-mini-dialog {transform: translate(500px,500px) scale(0.6);transition:transform 0.5s;position: relative;background: #fff;box-shadow: 0 0 4px;cursor: default;min-height: 30%;max-height: 100%;width: 75%;overflow: hidden;margin: auto;padding-top: 60px;font-family: \'IRANSansWeb\',Tahoma;}' +
                      '.ravesh-mini-dialog .ravesh-header {height: 60px;margin-top: -60px;line-height: 60px;padding: 0 20px;font-size: 16px;text-align: right;}' +
                      '.ravesh-mini-dialog .ravesh-close-btn {background: url(' + serverUrl + 'pages/formbuilder/images/icon-close.png) no-repeat;background-size: 16px 16px;width: 16px;height: 16px;float: left;margin: 20px 0;opacity: 0.4;cursor: pointer;}' +
                      '.ravesh-mini-dialog .ravesh-close-btn:hover {opacity: 1;}' +
                      '.ravesh-mini-dialog .ravesh-content-scroll {overflow-y:auto;transition:height 0.5s;}';
            RVC.addCssStyleTag(css);
        }
    }
})();
