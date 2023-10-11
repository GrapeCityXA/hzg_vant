// JavaScript source code

var FgcVant = FgcVant || {};
FgcVant.SwipeFeature = FgcVant.SwipeFeature || {};
FgcVant.SwipeFeature.Item = FgcVant.SwipeFeature.Item || {};

var FgcVant = FgcVant || {};
FgcVant.SwipeFeature = FgcVant.SwipeFeature || {};
FgcVant.SwipeFeature.PreviewItem = FgcVant.SwipeFeature.PreviewItem || {};

function insertTemplate(el, id){
    Forguncy.getTableData("主角表", { "ID": id },(data) => {
        if (data["是否是视频封面图"] === 1) { // if it's video
            const icon = document.createElement("div");
            // draw icon
            Object.assign(icon.style, {
                width: "50px",
                height: "50px",
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: 1,
                transform: "translate(-18px, -50%)",
                background: "url(/Forguncy/GeneratedResources/Images/GenerateImages/ImageCellType/main-circles.png) 0 -55px no-repeat"
            })
            // add click listener
            const onClick = function(event) {
                window.open("https://videos.grapecity.com.cn/HuoZiGe/Tutorials/v6.0/新手入门视频/新手入门视频-产品介绍.mp4", "_self");
                event.stopPropagation();
            }
            icon.addEventListener("click", onClick);
            // when preview, the touchend event handler on 'el' will prevent triggering click event on 'icon', so it needs to be stopped when touchend ocurs on 'icon' to avoid triggering touchend handler of 'el'.
            const stop = function(event) {
                event.stopPropagation();
            }
            icon.addEventListener("touchstart", stop);
            icon.addEventListener("touchend", stop);
            // append 'icon' to dom
            el.appendChild(icon);
        }	
    })
}

FgcVant.SwipeFeature.Item["video-swipe"] = FgcVant.SwipeFeature.PreviewItem["video-swipe"] = insertTemplate;
