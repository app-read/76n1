$$(document).on('page:init', function(e, page){
    $$('ul.select-ul li').click(function(){
      $$(this).find('input[type="radio"]').prop('checked', 'checked');
    });

    $$('.options ul li').on('click', function(){
      $$(this).parent('ul').find('li').removeClass('active');
      $$(this).addClass('active');
    });

    $$('div.login-area div.save span.login-text').on('click',function(event){
      if($$(this).parent('span').find('input').is(':checked')){
        $$(this).parent('span').find('input').prop('checked',false);
      }else{
        $$(this).parent('span').find('input').prop('checked',true);
      }
    })

    $$('div.marketing > span').on('click',function(event){
      if($$(this).parent('div').find('input').is(':checked')){
        $$(this).parent('div').find('input').prop('checked',false);
      }else{
        $$(this).parent('div').find('input').prop('checked',true);
      }
    })


    $$('ul.agree-list li span').on('click', function(event){
      if($$(this).parent('li').find('input').is(':checked')){
        $$(this).parent('li').find('input').prop('checked', false);  
      }else{
        $$(this).parent('li').find('input').prop('checked', true);  
      }

      if($$(this).parent('li').index() == 0){
        
        if($$(this).parent('li').find('input').is(':checked')){
          $$(this).parent('li').parent('ul').find('input').prop('checked',true);
        }else{
          $$(this).parent('li').parent('ul').find('input').prop('checked',false);
        }
      }else{
        if(!$$(this).parent('li').find('input').is(':checked')){
          $$(this).parent('li').parent('ul').find('li').eq(0).find('input').prop('checked',false)
        }

        var checkedIndex = 0;
        for(var i=0; i < $$('ul.agree-list li').length ; i++){
          if(i != 0 && $$('ul.agree-list li').eq(i).find('input').is(':checked')){
            ++ checkedIndex;
          }
        }

        if(checkedIndex == ($$('ul.agree-list li').length-1)){
          $$('ul.agree-list li').eq(0).find('input').prop('checked',true);
        }else{
          $$('ul.agree-list li').eq(0).find('input').prop('checked',false);
        }
      }
    });
    

})

$$(document).on('page:init', '.page[data-name="label"]', function(e, page){
    $$('#label_name').on('input', function(e){
      var label = $$('#label_name').val();
      var index = label.length-1;
      
      if(e.inputType == 'deleteContentBackward'){
        ++index;
        $$('div.name-box input[type="text"]').eq(index).val('*');
      }else{
        $$('div.name-box input[type="text"]').eq(index).val(e.data);
      }
      $$('#label_name_number').text($$('#label_name').val().length);
    });

    for(var i=0; i<$$('#label_name').val().length; i++){
      var values = $$('#label_name').val()[i];
      $$('div.name-box input[type="text"]').eq(i).val(values);

    }
    $$('#label_name_number').text($$('#label_name').val().length);
})

$$(document).on('page:init', '.page[data-name="main"]', function(e, page){
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
       autoplay: {
           delay: 1000,
           disableOnInteraction: false
       },
        
    });


    $$('#btnAdd').click(function(){
      var html = '<li class="ellipsis">자주 묻는 질문입니다.</li>'
      $$('ul.question-list').append(html);
    })
})

$$(document).on('page:init', '.page[data-name="introduce"]', function(e, page){
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
       autoplay: {
           delay: 1000,
           disableOnInteraction: false
       },
        
    });
})


$$(document).on('page:init', '.page[data-name="step1"]', function(e){
    var values1 = [];
    for(var i=2000; i>1960; i--){
      values1.push(i);
    }

    var pickerDevice = app.picker.create({
      inputEl: '#year-picker',
      cols: [
        {
          textAlign: 'center',
          values: values1
        }
      ]
    });
    var values2 = [];
    for(var i=1; i<13; i++){
      values2.push(i);
    }
    var pickerDevice2 = app.picker.create({
      inputEl: '#month-picker',
      cols: [
        {
          textAlign: 'center',
          values: values2
        }
      ]
    });

    var values3 = [];

    for(var i=1; i<32; i++){
      values3.push(i);
    }
    var pickerDevice3 = app.picker.create({
      inputEl: '#date-picker',
      cols: [
        {
          textAlign: 'center',
          values: values3
        }
      ]
    });

    //app.dialog.alert('Hello', '');
})
$$(document).on('page:init', '.page[data-name="step2"], .page[data-name="login-update"]', function(e){
    var values1 = [];
    for(var i=2000; i>1960; i--){
      values1.push(i);
    }

    var pickerDevice = app.picker.create({
      inputEl: '#year-picker',
      cols: [
        {
          textAlign: 'center',
          values: values1
        }
      ]
    });
    var values2 = [];
    for(var i=1; i<13; i++){
      values2.push(i);
    }
    var pickerDevice2 = app.picker.create({
      inputEl: '#month-picker',
      cols: [
        {
          textAlign: 'center',
          values: values2
        }
      ]
    });

    var values3 = [];

    for(var i=1; i<32; i++){
      values3.push(i);
    }
    var pickerDevice3 = app.picker.create({
      inputEl: '#date-picker',
      cols: [
        {
          textAlign: 'center',
          values: values3
        }
      ]
    });
})


$$(document).on('page:init', '.page[data-name="result"]', function(e){
  var options = {
    'legend':{
      names: [
        '민감',
        '피부톤',
        '색소침착',
        '모공',
        '건조함',
        '트러블',
        '피부결',
        '부종',
        '주름',
        '탄력',
      ],
      
    },
    'dataset': {
      title: 'Web accessibility status',
      values: [[34,53,67,23,78,45,69,98, 30, 10], [20, 30, 40, 50, 60, 80]],
      bgColor: '#ffffff',
      fgColor: [ '#eceded', '#f9dcd5'],
    },
    'chartDiv': 'Nwagon',
    'chartType': 'radar',
    'chartSize': { width: 300, height: 300 }
  };
  Nwagon.chart(options);
});

$$(document).on('page:init', '.page[data-name="step5"]', function(e){
  app.preloader.show('black');
  setTimeout(function () {
    app.preloader.hide();
  }, 2000);
})
$$(document).on('page:beforeout', '.page[data-name="step5"]', function(e){
  app.preloader.hide();
  // setTimeout(function () {
  //   app.dialog.close();
  // }, 3000);
})


// $$(document).on('page:init', '.page[data-name="popup1"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '<div class="c-popup none-50"></div>향 선택을 중지하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup1"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup2"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '<div class="c-popup none-45"></div>향 "<span class="c-popup b">중</span>" (으)로<br>선택하였습니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup2"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup3"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '선택된 "<span class="c-popup b">오일</span>" 제품에 대한 주문을<br>취소하시겠습니까?<br>원료추천정보는 삭제됩니다.',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup3"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup4"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '선택된 "<span class="c-popup b">세럼</span>" 제품을<br>장바구니로 이동하시겠습니까?<br>주문은 장바구니에서 가능합니다.',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup4"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup5"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '장바구니로 이동되었습니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
      
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup5"]', function(e){
//   app.dialog.close();
// })


$$(document).on('page:init', '.page[data-name="popup6"]', function(e){
  app.dialog.create({
    title: '사용용도를 선택해주세요.',
    text: '<span>최초 1회만 선택 가능합니다.</span>',
    buttons: [
      {
        text: '올데이',
        cssClass: 'active'
      },
      {
        text: '데이',
      },
      {
        text: '나이트',
      },
      
    ],
    verticalButtons: true,
  }).open();
})

// $$(document).on('page:beforeout', '.page[data-name="popup6"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup7"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '"<span class="c-popup b">올데이</span>"를 선택하셨습니다.<br>계속 진행하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
      
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup7"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup8"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '원료 선택을 중지하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
      
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup8"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="popup9"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '원료 "<span class="c-popup b">원료1, 원료2, </span><span class="c-popup b red">...</span>"(으)로<br>선택하셨습니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
      
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="popup9"]', function(e){
//   app.dialog.close();
// })


$$(document).on('page:init', '.page[data-name="tab"]', function(e){
  $$('.recommend-tab li').on('click', function () {
     $$('.recommend-tab li').removeClass('active');
     $$(this).addClass('active');


     var index = $$(this).index();
     var tab_detail = $$('.recommend-tab-detail li:nth-child('+(++index)+')');
     $$('.recommend-tab-detail li').removeClass('active');
     tab_detail.addClass('active');
  });
})
// $$(document).on('page:init', '.page[data-name="tab1"]', function(e){
//     app.dialog.create({
//     title: '',
//     text: '<div class="c-popup none-50"></div>향 선택을 중지하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })
// $$(document).on('page:beforeout', '.page[data-name="tab1"]', function(e){
//   app.dialog.close();
// })


// $$(document).on('page:init', '.page[data-name="tab2"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '향 "<span class="c-popup b">향이름</span>"(으)로<br>선택하셨습니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="tab1"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="password-popup"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '가입해주신 이메일로 비밀번호<br>변경 링크가 전송 되었습니다.<br>인터넷 환경에 따라 메일 도착<br>시간이 소요 될 수 있습니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="password-popup"]', function(e){
//   app.dialog.close();
// })


// $$(document).on('page:init', '.page[data-name="duplication"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '사용 가능한 아이디 입니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="duplication"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="duplication2"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '사용중인 아이디입니다.<br>다른 아이디를 입력하세요.',
//     buttons: [
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="duplication2"]', function(e){
//   app.dialog.close();
// })


// $$(document).on('page:init', '.page[data-name="customer"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '질문을 삭제하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="customer"]', function(e){
//   app.dialog.close();
// })


// $$(document).on('page:init', '.page[data-name="write"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '질문을 등록하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="write"]', function(e){
//   app.dialog.close();
// })



// $$(document).on('page:init', '.page[data-name="login-update-popup"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '회원 정보가 수정되었습니다.',
//     buttons: [
//       {
//         text: '내정보 이동',
//       },
//       {
//         text: '메인화면으로',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="login-update-popup"]', function(e){
//   app.dialog.close();
// })


// $$(document).on('page:init', '.page[data-name="logout-popup"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '로그아웃 하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="logout-popup"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="marketing"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '마케팅 수신설정에 동의<br>하시겠습니까?',
//     buttons: [
//       {
//         text: '취소',
//       },
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="marketing"]', function(e){
//   app.dialog.close();
// })

// $$(document).on('page:init', '.page[data-name="auto-login"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '자동로그인이 설정되었습니다.',
//     buttons: [
      
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="auto-login"]', function(e){
//   app.dialog.close();
// })
// $$(document).on('page:init', '.page[data-name="auto-login2"]', function(e){
//   app.dialog.create({
//     title: '',
//     text: '자동로그인이 해제되었습니다.',
//     buttons: [
//       {
//         text: '확인',
//       },
//     ],
//   }).open();
// })

// $$(document).on('page:beforeout', '.page[data-name="auto-login2"]', function(e){
//   app.dialog.close();
// })


$$(document).on('page:init', '.page[data-name="popup"]', function(e){


  $$('#popup1').click(function(){
    app.dialog.create({
      title: '',
      text: '<b>당신의 기본 상태를 확인합니다.</b><p>현재 상태에 가장 가까운 답변을<br>선택하세요</p>',
      cssClass: 'search',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup2').click(function(){
    app.dialog.create({
      title: '',
      text: '<b>피부 상태를 더 세밀하게 확인합니다.</b><p>현재 상태에 가장 맞는 답변을<br>선택하세요</p>',
      cssClass: 'search v2',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup3').click(function(){
    app.dialog.create({
      title: '사용용도를 선택해주세요.',
      text: '<span>최초 1회만 선택 가능합니다.</span>',
      cssClass: 'vertical',
      buttons: [
        {
          text: '올데이',
          cssClass: 'active'
        },
        {
          text: '데이',
        },
        {
          text: '나이트',
        },
        
      ],
      verticalButtons: true,
    }).open();
  });

  $$('#popup4').click(function(){
    app.dialog.create({
      title: '',
      text: '<b>" 올데이 "</b>를 선택하였습니다.<br>계속 진행하시겠습니까?',
      cssClass: 'line-2',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup5').click(function(){
    app.dialog.create({
      title: '',
      text: '원료 선택을 중지 하시겠습니까?',
      cssClass: 'line-1',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup6').click(function(){
    app.dialog.create({
      title: '',
      text: '원료 "<b>원료1, 원료2,</b> <b>...</b>"(으)로<br>선택 하였습니다.',
      cssClass: 'line-2',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup7').click(function(){
    app.dialog.create({
      title: '',
      text: '향 선택을 중지하시겠습니까?',
      cssClass: 'line-2',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup8').click(function(){
    app.dialog.create({
      title: '',
      text: '향 <b>" 향이름 "</b>(으)로<br>선택 하였습니다.',
      cssClass: 'line-2',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup9').click(function(){
    app.dialog.create({
      title: '',
      text: '향 <b>" 중 "</b>(으)로<br>선택 하였습니다.',
      cssClass: 'line-2',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup10').click(function(){
    app.dialog.create({
      title: '',
      text: '선택된 <b>"오일"</b> 제품에 대한 주문을<br>취소하시겠습니까?<br>원료추천정보는 삭제됩니다.',
      cssClass: 'line-3',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup11').click(function(){
    app.dialog.create({
      title: '',
      text: '선택된 <b>"세럼"</b> 제품을<br>장바구니로 이동하시겠습니까?<br>주문은 장바구니에서 가능합니다.',
      cssClass: 'line-3',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup12').click(function(){
    app.dialog.create({
      title: '',
      text: '장바구니로 이동되었습니다.',
      cssClass: 'line-1',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup13').click(function(){
    app.dialog.create({
      title: '',
      text: '가입해주신 이메일로 비밀번호<br>변경 링크가 전송 되었습니다.<br>인터넷 환경에 따라 메일 도착<br>시간이 소요 될 수 있습니다.',
      cssClass: 'line-4',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup14').click(function(){
    app.dialog.create({
      title: '',
      text: '사용 가능한 아이디 입니다.',
      cssClass: 'line-1',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup15').click(function(){
    app.dialog.create({
      title: '',
      text: '사용중인 아이디입니다.<br>다른 아이디를 입력하세요.',
      cssClass: 'line-2',
      buttons: [
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup16').click(function(){
    app.dialog.create({
      title: '',
      text: '질문을 삭제하시겠습니까?',
      cssClass: 'line-1',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });

  $$('#popup17').click(function(){
    app.dialog.create({
      title: '',
      text: '질문을 등록하시겠습니까?',
      cssClass: 'line-1',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });
  $$('#popup18').click(function(){
    app.dialog.create({
      title: '',
      text: '회원 정보가 수정되었습니다.',
      cssClass: 'line-1',
      buttons: [
        {
          text: '내정보 이동',
        },
        {
          text: '메인화면으로',
        },
      ],
    }).open();
  });

  $$('#popup19').click(function(){
    app.dialog.create({
      title: '',
      text: '자동로그인이 해제되었습니다.',
      cssClass: 'line-1',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });
  $$('#popup20').click(function(){
    app.dialog.create({
      title: '',
      text: '자동로그인이 설정되었습니다.',
      cssClass: 'line-1',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });
  $$('#popup21').click(function(){
    app.dialog.create({
      title: '',
      text: '로그아웃 하시겠습니까?',
      cssClass: 'line-1',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });
  $$('#popup22').click(function(){
    app.dialog.create({
      title: '',
      text: '마케팅 수신설정에 동의<br>하시겠습니까?',
      cssClass: 'line-2',
      buttons: [
        {
          text: '취소',
        },
        {
          text: '확인',
        },
      ],
    }).open();
  });



  
})

$$(document).on('page:beforeout', '.page[data-name="popup"]', function(e){
  app.dialog.close();
})












