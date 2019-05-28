$(function(){

	//datatable
	if($('.dt').length > 0){
		var e = $('.card-description');

    	var table = $('.dt').DataTable({
	    	dom: 'Bfrtip',
	    	buttons: [
	    		'copy',
	    		{
		            extend: 'excel',
		            text: 'Excel',
		            exportOptions: {
		                columns: ':visible',
		            }
		        },
	    		{
		            extend: 'pdf',
		            text: 'PDF',
		            exportOptions: {
		                columns: ':visible',
		            },
		            customize: function(doc) {
					  doc.content[1].margin = [ 100, 0, 100, 0 ] //left, top, right, bottom
					}
		        },
		        {
		            extend: 'print',
		            text: 'Print',
		            autoPrint: true,
		            exportOptions: {
		                columns: ':visible',
		            },
		            customize: function (win) {
		                $(win.document.body).find('table').addClass('display').css('font-size', '9px');
		                $(win.document.body).find('tr:nth-child(odd) td').each(function(index){
		                    $(this).css('background-color','#D0D0D0');
		                });
		                $(win.document.body).find('h1').css('text-align','center');
		            }
		        }
		    ]
	    });

    	//data table penduduk
	    if($('.dt-penduduk').length > 0){
	    	//hide bebarapa kolom
	    	index = [6,7,8,9,12];
		    for(i=0; i<index.length; i++){
		    	hiddenCol = index[i];

		    	col = table.columns(hiddenCol);
		    	table.columns(hiddenCol).visible(!col.visible());
		    }
	    }

	    //show hide column list
	    for(n=0; n<table.columns()[0].length; n++){
	    	thAll = $(table.column(n).header());
	    	btnType = (table.column(n).visible()) ? 'btn-primary':'btn-default';
	    	e.append('<button class="toggle-vis btn btn-sm '+btnType+'" data-column="'+n+'" style="margin-bottom:4px;">'+thAll.text()+'</button> ');
	    }

	    $('.toggle-vis').click(function(e){
	    	e.preventDefault();
	    	elm = $(this);
	    	colIndex = elm.data('column');

	    	if(table.column(colIndex).visible()){
	    		elm.toggleClass('btn-primary btn-default');
	    	}else{
	    		elm.toggleClass('btn-default btn-primary');
	    	}

	    	var col = table.column(colIndex);
	    	col.visible(!col.visible());

	    	/*
	    	if($('.btn-default').length != table.columns()[0].length){
	    		elm.toggleClass('btn-default btn-primary');
	    		col.visible(true);
	    	}
	    	*/

	    	//console.log($('.btn-default').length);
	    });
    }

    //select2
    $('select').select2({
	    theme: 'bootstrap4',
	});

	//verificator
	$('body').on('blur', '.verify', function(e){
		var element = $(this);
		action = element.data('verify');
		value = element.val();

		$.post(action, {no_ktp:value}, function(response){
			if(!response.status){
				element.val('');
				element.focus();

				alert('No KTP: '+response.data+' sudah terdaftar');
			}
		});
	});

	//delete btn rule
	$('body').on('click', '.btn-del', function(){
		delBtn = $(this);

		if(confirm('Data akan dihapus, proses ini tidak dapat dikembalikan. lanjutkan?')){
			return true;
		}else{
			return false;
		}
	});

	$('body').on('click','.btn-add-link', function(e){
		e.preventDefault();
		url = $(this).data('url');
		link = $('.link');

		$.ajax({
			url : url,
			method : 'GET'
		}).done(function(data){
			link.append(data);
		});

	});

	$('body').on('click','.btn-del-link', function(e){
		e.preventDefault();

		$(this).closest('.row').remove();
	});	

	//auto dismiss alert msg
	if($('.alert').length > 0){
		setTimeout(function() {
			$('.alert').alert('close');
		}, 5000);
	}

	jQuery('.datepicker').datetimepicker({
		datepicker: true,
		timepicker: false,
		startDate: '1960/01/01',
  		format: 'd/m/Y'
	});

});