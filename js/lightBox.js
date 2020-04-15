$(document).ready(function(){
	//サムネイルをクリックしてポップアップ  
	$('#thumb-list ul li').click(function(){
		//何番目の要素がクリックされたか
		var thumb_num = $('#thumb-list ul li').index(this);
		//0から始まるので1足しておく
		thumb_num = thumb_num+1;
		//大きい写真のIDを設定
		var p_box = '#pic0' + thumb_num;
		//ウィンドウ幅、高さを取得
		var w = $(window).width();
		var h = $(window).height();
		//大きい写真の幅、高さを取得
		var pw = $(p_box).outerWidth(true);
		var ph = $(p_box).outerHeight(true);
		//中央寄せの計算
		$(p_box).css({"left": ((w-pw)/2) + "px","top": ((h-ph)/2) + "px"})

		//オーバーレイを表示
		$('body').append('<div class="back-layer"></div>');
		$('.back-layer').fadeIn('slow');
		//写真を表示
		$(p_box).fadeIn("slow");

		//閉じるボタン処理
		//ボタンクリック、周りクリックで関数を削除
		$('.back-layer,.btn-close').unbind().click(function(){
			//写真をフェードアウト
			$(".pic").fadeOut("slow",function(){
				//フェードアウトしたらオーバーレイをフェードアウト
				$('.back-layer').fadeOut('slow',function() {
					//フェードアウトしたらオーバレイを消す
					$('.back-layer').remove();
				});
			});
		});
	});
})