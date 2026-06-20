
    
<script>
    var i=0;
    var path= new Array();
    PATH[0]="Merneith.jpg";
    path[1]="sobekneferu.jpeg";
    path[2]="Hatshepsut.jpg";
    path[3]="Nefertiti.jpeg";
    path[4]="Twosret.jpg";
    path[5]="Cleopatra.jpg";
    function swapImage()
    {
        document.slide.src= path[i];
        if(i<path.length-1)i++; else i=0;
        setTimeout("swapImage()",3000);
    }
    window.onload=swapImage;
</script>