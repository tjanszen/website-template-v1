var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."

var ID1 = "Lorem1111 ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."
var ID2 = "Lorem2222 ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."
var ID3 = "Lorem3333 ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."
var ID4 = "Lorem4444 ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."
var ID5 = "Lorem5555 ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."

var array = [["ID1", ID1],
			 ["ID2", ID2],
			 ["ID3", ID3],
			  ["ID4", ID4],
			  ["ID5", ID5]
			   ];
window.onload = init;

function init(){
	var highlights = document.querySelectorAll(".highlight")
	for(var i = 0; i < highlights.length; i++){
		highlights[i].addEventListener("click", slideInfo, false);
	}

	var bookTitles = document.querySelectorAll(".ind-books");

	for(var i = 0; i < bookTitles.length; i++){
		bookTitles[i].addEventListener("click", expand, false);

	}
}

function slideInfo(e){
	var highlight = e.target;
	var aboutCenter = document.getElementById("about-center");
	var aboutRightText = document.getElementById("about-right-text")
	var aboutCenterClass = aboutCenter.getAttribute("class");
	var aboutSectionWrapper = document.getElementById("about-section-wrapper")

		aboutSectionWrapper.style.height="425px";
		aboutSectionWrapper.style.width="90%";
		aboutCenter.setAttribute("class", "half")

	for(var i = 0; i < array.length; i++){
		if(array[i][0] == highlight.id){
			aboutRightText.innerHTML = array[i][1];
		}
	};

}

function expand(e){
	var li = e.target;
	var liClass = li.getAttribute("class");
	if(liClass == "ind-books ind-books-closed"){
		li.setAttribute("class", "ind-books ind-books-open");
	}
	else if (liClass == "ind-books ind-books-open"){
		li.setAttribute("class", "ind-books ind-books-closed");
	}
}
