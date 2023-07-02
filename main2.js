

let originalFile = "OG";

document.getElementById('inputfile')
        .addEventListener('change', function() {
        var fr=new FileReader();

        fr.onload=function(){
            //document.getElementById('output').textContent=fr.result;


			originalFile = fr.result;			
			let index = originalFile.search('<div id="SITE_CONTAINER">');
			let index2 = originalFile.search('<div id="site-root" class="site-root">');

			let firstHalf = originalFile.slice(0, index + 25);
			let secondHalf = originalFile.slice(index2 + 38);
			let newFile = firstHalf + secondHalf;
			//document.getElementById("box1").innerHTML = index; 
			//document.getElementById('box1').textContent = index.toString();

			//document.getElementById('box2').textContent = firstHalf;
			//document.getElementById('box2').textContent = secondHalf;
			document.getElementById('box2').textContent = newFile;




        }
        fr.readAsText(this.files[0]);

        })

//document.getElementById('box1').innerHTML = "hello";



/* 
fetch("styles.css")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"

	document.getElementById('box1').innerHTML = text;

   })
  .catch((e) => console.error(e)); */