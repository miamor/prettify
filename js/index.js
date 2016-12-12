function selectCode(a) {
    var y = a.parentNode.getElementsByClassName('code_content')[0];
    if (window.getSelection) {
        var i = window.getSelection();
        if(i.setBaseAndExtent) {
            i.setBaseAndExtent(y, 0, y, y.innerText.length - 1)
        } else {
            if(window.opera && y.innerHTML.substring(y.innerHTML.length - 4) == '<BR>') {
                y.innerHTML = y.innerHTML + ' '
            }
            var r = document.createRange();
            r.selectNodeContents(e);
            i.removeAllRanges();
            i.addRange(r)
        }
    } else if(document.getSelection) {
        var i = document.getSelection();
        var r = document.createRange();
        r.selectNodeContents(e);
        i.removeAllRanges();
        i.addRange(r)
    } else if(document.selection) {
        var r = document.body.createTextRange();
        r.moveToElementText(y);
        r.select()
    }
}
if(text) {} else {
    var text = 'Selecionar todos'
}
$(function () {
	$("code").wrap('<dl class="code_content hidecode"></dl>').before('<dt onclick="selectCode(this)" title="Select all" style="cursor:pointer" style="border: none;">Select all</dt>').wrap('<dd class="code_content"></dd>');
   $("code").length && (
      $("code").addClass("prettyprint linenums").parent().prev().attr({
         onclick: "selectCode(this)",
         title: "Select all",
         style: "cursor:pointer"
      })
    );
	$('code').each(function () {
		$(this).wrap('<pre class="prettyprint' + ($(this).text().indexOf("<") == -1 && /[\s\S]+{[\s\S]+:[\s\S]+}/.test($(this).text()) ? " lang-css" : "") + ' linenums" />');
	});
	prettyPrint();
});
