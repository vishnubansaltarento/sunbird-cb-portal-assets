CKEDITOR.plugins.add( 'simpleImageUpload', {
    init: function( editor ) {
        var fileDialog = $('<input type="file" name="image" id="image">');
        
        fileDialog.on('change', function (e) {
	
            var uploadUrl = editor.config.uploadUrl;
			var file = fileDialog[0].files[0];
			var fileToLoad = fileDialog[0].files[0];

			var imageData = new FormData();
			imageData.append('file', file);
			var fileReader = new FileReader();
			var srcData;
			fileReader.onload = function(fileLoadedEvent) {
				srcData = fileLoadedEvent.target.result; // <--- data: base64
				console.log('srcData', srcData);
				var newImage = editor.document.createElement('img');
				newImage.setAttribute('src', srcData);
				newImage.setAttribute('height','100')
				newImage.setAttribute('width','100')
				editor.insertElement(newImage);		
				console.log('newImage', newImage)	
			}
			fileReader.readAsDataURL(fileToLoad);

		

			$.ajax({
				url: uploadUrl,
				type: 'POST',
				contentType: false,
				processData: false,
				data: imageData
			}).done(function(done) {
				var ele = editor.document.createElement('img');
				ele.setAttribute('src', 'https://portal.karmayogi.nic.in/assets/instances/eagle/app_logos/default.png');
				ele.setAttribute('height','100')
				ele.setAttribute('width','100')
				editor.insertElement(ele);
			});

        })
        editor.ui.addButton( 'Image', {
            label: 'Insert Image',
            command: 'openDialog',
            toolbar: 'insert'
        });
        editor.addCommand('openDialog', {
            exec: function(editor) {
                fileDialog.click();
            }
        })
    }
});
