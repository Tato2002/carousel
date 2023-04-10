



		let myImage = document.querySelector("#mainImage");
		let imageArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
		let imageIndex = 1;

		function changeImage(){
			myImage.setAttribute("src", imageArray[imageIndex]);
			imageIndex++;
			if (imageIndex > 3) {
				imageIndex = 0;
			}
		}

		function changeImageBack(){
			myImage.setAttribute("src", imageArray[imageIndex]);
			imageIndex--;
			if (imageIndex < 0) {
				imageIndex = 3;
			}
		}

		let indicatorsDiv = document.querySelector(".indicators")

		function displayIndicators(arrayName) {
			arrayName.forEach(function(value, index){
				//let spanHTML = `<span class="indicator"> </span>`
			let span = document.createElement("span")
			span.classList.add("indicator")
			span.setAttribute("id",index);

			span.addEventListener("click", function(){
				document.querySelector(".indicator.active").classList.remove("active")
				this.classList.add("active")
				imageIndex = this.getAttribute("id")
				myImage.setAttribute("src", imageArray[imageIndex])
			})
			if(index == 0){
				span.classList.add("active")
			}

			indicatorsDiv.appendChild(span)
			})

		}

		displayIndicators(imageArray)


		let pikachu = setInterval(function(){
			myImage.setAttribute("src", imageArray[imageIndex]);
			imageIndex++;
			if (imageIndex > 3) {
				imageIndex = 0;
			}
		},3000)

		 	//indicators(pikachu)
		

		