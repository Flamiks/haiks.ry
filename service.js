
    {
      "apteka.ru" : {
        "url" : " https://api.apteka.ru/Auth/Auth_Code?cityUrl=moskva " ,
        "json" : " {'телефон': '*phone()*', 'u': 'U'} " ,
        "заголовки" : {
          «Принять» : « */* » ,
          "Accept-Encoding" : " gzip, deflate, br " ,
          "Accept-Language" : " ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7 " ,
          "Access-Control-Request-Headers" : " авторизация, тип контента " ,
          "Метод запроса-контроля-доступа" : " POST " ,
          «Соединение» : « поддержание активности » ,
          «Хост» : « api.apteka.ru » ,
          «Происхождение» : « https://apteka.ru » ,
          «Реферер» : « https://apteka.ru/ » ,
          "Sec-Fetch-Dest" : " пусто " ,
          "Sec-Fetch-Mode" : " cors " ,
          "Sec-Fetch-Site" : " тот же сайт " ,
          "Агент пользователя" : " "
        },
        "ответ" : 200 ,
        "тайм-аут" : 120
      },
      "магнит" : {
        "url" : " https://new.moy.magnit.ru/local/ajax/login/ " ,
        "данные" : " {'телефон': '*+телефон*', 'ksid': 'ee191257-a4fe-4e39-9f0f-079c7f721eee_0'} " ,
        «ответ» : « json » ,
        "тайм-аут" : 120
      },
      "телеграмма" : {
        "url" : " https://my.telegram.org/auth/send_password " ,
        "данные" : " {'телефон': '*+телефон*'} " ,
        "ответ" : 200 ,
        "тайм-аут" : 120
      },
      "Сити_ссылка" : {
        "url" : " https://www.citilink.ru/registration/confirm/phone/*phone*/ " ,
        "данные" : " {'телефон': '*телефон*', 'рет': '1', 'smsRepeatDelay': '60', 'smsRepeatsDelay': '60', 'smsRepeatsLimit': '5', 'smsRequestToken ': 't19d686d-6d80-4297-8909-b11c575627b8'} " ,
        "ответ" : 200 ,
        "тайм-аут" : 60
      },
      "акбарса" : {
        "url" : " https://www.akbars.ru/api/PhoneConfirm/ " ,
        "json" : " {'номер телефона': *телефон*} " ,
        "ответ" : 200 ,
        "тайм-аут" : 300
      },
      "йота" : {
        "url" : " https://bmp.tv.yota.ru/api/v10/auth/register/msisdn " ,
        "json" : " {'msisdn': '*телефон*', 'пароль': '123456'} " ,
        «куки» : « https://tv.yota.ru/ » ,
        "ответ" : 201 ,
        "тайм-аут" : 60
      },
      "б_аптека" : {
        "url" : " https://b-apteka.ru/lk/send_confirm_code " ,
        "json" : " {'телефон': '*телефон*'} " ,
        "заголовки" : {
          «X-Requested-With» : « XMLHttpRequest » ,
          «Соединение» : « поддержание активности » ,
          «Прагма» : « без кеша » ,
          «Кэш-Контроль» : « без кеша » ,
          "Accept-Encoding" : " gzip, deflate, br " ,
          "Агент пользователя" : " " ,
          "ДНТ" : " 1 "
        },
        "ответ" : 200 ,
        "тайм-аут" : 60
      },
      "почтабанк" : {
        "url" : " https://my.pochtabank.ru/dbo/registrationService/ib/номер телефона " ,
        "json" : " {'подтверждение': 'отправить', 'телефон': '*телефон()*'} " ,
        "ответ" : 200 ,
        "тайм-аут" : 120
      },
      "mt_free" : {
        "url" : " https://cabinet.wi-fi.ru/api/auth/by-sms " ,
        "данные" : " {'msisdn': '*mtfree*', 'g-recaptcha-response': ''} " ,
        "заголовки" : {
          «Принять» : « текст/html,приложение/xhtml+xml,приложение/xml;q=0.9,изображение/avif,изображение/webp,изображение/apng,*/*;q=0.8,приложение/signed-exchange;v =b3;q=0,9 " ,
          "Accept-Encoding" : " gzip, deflate, br " ,
          "Accept-Language" : " ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7 " ,
          «Идентификатор приложения» : « кабинет » ,
          «Кэш-Контроль» : « без кеша » ,
          «Соединение» : « поддержание активности » ,
          "Агент пользователя" : " "
        },
        «ответ» : « json » ,
        "тайм-аут" : 180
      },
      "мегафон.тв" : {
        "url" : " https://bmp.megafon.tv/api/v10/auth/register/msisdn " ,
        "json" : " {'msisdn':'*+телефон*', 'пароль':'123456'} " ,
        "ответ" : 201 ,
        "тайм-аут" : 600 ,
        "куки" : " https://megafon.tv/ "
      },
      "моздоровье" : {
        "url" : " https://moezdorovie.ru/rpc/?method=auth.GetCode " ,
        "json" : " {'jsonrpc':'2.0','id':40,'method':'auth.GetCode','params':{'phone':'*-phone*','mustExist': ложь, 'sendRealSms':true}} " ,
        "ответ" : 200 ,
        "тайм-аут" : 300
      },
      "тотопицца" : {
        "url" : " https://api.totopizza.ru/graphql " ,
        "json": "{\"operationName\":\"requestPhoneCodeAuth\",\"query\":\"\\n  mutation requestPhoneCodeAuth($telephone:String!) {\\n    requestPhoneCodeAuth(telephone:$telephone)\\n  }\\n\",\"variables\":{\"telephone\":\"*phone2*\"}}",
        "response": 200,
        "timeout": 60
      },
      "zdesapteka": {
        "url": "https://zdesapteka.ru/bitrix/services/main/ajax.php?action=zs:main.ajax.AuthActions.sendAuthCode",
        "data": "{'userPhone': '*phone()*', 'SITE_ID': 's1', 'sessid': ''}",
        "response": 200,
        "timeout": 60,
        "cookies": "https://zdesapteka.ru/"
      },
      "stockmann": {
        "url": "https://stockmann.ru/ajax/?controller=user&action=registerUser&surname=Popovich&name=Oleg&phone=*phone3*&email=rgeaefs@gmail.com&password=123456&password_confirm=123456",
        "response": 200,
        "timeout": 600
      },
      "SberUslugi": {
        "url": "https://sberuslugi.ru/api/v1/user/secret",
        "data": "{'phone': '*phone()*'}",
        "response": 200,
        "timeout": 180
      },
      "victoria": {
        "url": "https://new.victoria-group.ru/api/v2/manzana/Identity/RequestAdvancedPhoneEmailRegistration",
        "response": 200,
        "timeout": 60
      },
      "sunlight": {
        "url": "https://api.sunlight.net/v3/customers/authorization/",
        "json": "{'phone':'*phone*'}",
        "response": 200,
        "timeout": 30,
        "cookies": "https://sunlight.net/profile/login/?next_encoded=Lw=="
      },
      "ok.ru": {
        "url": "https://ok.ru/dk?cmd=AnonymRegistrationEnterPhone&st.cmd=anonymRegistrationEnterPhone&st.cmd=anonymRegistrationEnterPhone",
        "data": "{'st.r.phone': '*phone*'}",
        "response": 200,
        "timeout": 60,
        "cookies": "https://ok.ru/"
      },
      "citystar": {
        "url": "https://citystarwear.com/bitrix/templates/bspc/php/bs.auth.sms/templates/pc/handlers.php",
        "data": "{'hdlr': 'bsSendCodeAuth','bshsmsk': 'h5Plm22xoaFs9YTp', 'phone': '*-phone*', 'xemail': '', 'xphone': ''}",
        "response": 200,
        "timeout": 180
      },
      "beerlogapizza": {
        "url": "https://smsc.ru/sys/send.php",
        "data": "{'login': 'beerlogaa@gmail.com', 'psw': 'QWE780p', 'phones': '*+phone*', 'mes': 'code', 'call': '1', 'fmt': '3'}",
        "response": 201,
        "timeout": 60,
        "cookies": "https://beerlogapizza.ru/login/"
      },
      "pizzamia": {
        "url": "https://1603.smartomato.ru/account/session",
        "data": "{'g-recaptcha-response': 'null','phone': '*phone3*'}",
        "response": 200,
        "timeout": 60
      },
      "lentaru": {
        "url": "https://online.lenta.com/api.php",
        "data": "{'tel': '*phone()*', 'accept': 'on', 'urlParams': ''}",
        "response": 200,
        "headers": {
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "User-Agent": "",
          "X-Requested-With": "XMLHttpRequest"
        },
        "timeout": 60,
        "cookies": "https://online.lenta.com"
      },
      "wildberries": {
        "url": "https://authorization.wildberries.eu/api/v2/code/request",
        "json": "{\"contact\": \"*phone*\", \"auth_method\": \"sms\", \"lang\": \"ru\"}",
        "response": 200,
        "timeout": 60
      },
      "findclone": {
        "url": "https://findclone.ru/register",
        "data": "{'phone': '*phone*'}",
        "response": 200,
        "timeout": 60,
        "GET": ""
      },
      "tashirpizza": {
        "url": "https://tashirpizza.ru/ajax/mindbox_register",
        "data": "{'phone': '*phone()*', 'fio': 'Олег Олегов Олегович', 'bd': ''}",
        "response": 200,
        "timeout": 60
      },
      "my-shop": {
        "url": "https://my-shop.ru/cgi-bin/my_util2.pl?q=my_code_for_phone_confirmation&view_id=d51a4d42-c5e8-43ce-a24d-383a3b29f17ae821ed918",
        "json": "{'phone_code': '7', 'phone': '*-phone*'}",
        "response": 200,
        "timeout": 60
      },
      "bisonpizza": {
          "url": "https://bizonpizza.ru/api/auth/send-sms-verification-code",
          "json": "{'phoneNumber': '*+phone*'}",
          "response": 200,
          "timeout": 60
      },
      "magnitapteka": {
        "url": "https://apteka.magnit.ru/api/personal/auth/code/",
        "data": "{'phone': '*phone*'}",
        "response": 200,
        "timeout": 60
      },
      "eldorado": {
        "url": "https://www.eldorado.ru/_ajax/spa/auth/v2/auth_with_login.php",
        "json": "{'user_login': '*eldarado*'}",
        "response": 200,
        "timeout": 60
      },
      "kent": {
        "url": "https://kent.ru/api/send-confirm?qr=",
        "json": "{'type': 'sms', 'contact': '*phone*', 'case': 'register'}",
        "response": 200,
        "timeout": 60
      },
      "polyana1c": {
        "url": "https://polyana1c.ru:25101/CRM/hs/pd/auth/send-code",
        "json": "{'phoneNumber': '*+phone*'}",
        "response": 200,
        "timeout": 600
      },
      "citystarwear": {
        "url": "https://m.citystarwear.com/bitrix/templates/bs-base/php/includes/bs-handlers.php",
        "data": "{'hdlr': 'bsAuthSendCode', 'key': 'DOvBhIav34535434v212SEoVINS', 'phone': '*-phone*', 'pcode': '7', 'vphone': '*-phone*'}",
        "response": 200,
        "timeout": 180,
        "headers": {
          "cookie": "_ga=GA1.2.1427439092.1661873883; tmr_lvid=7f1742aab6354e49610b859181e4cd90; tmr_lvidTS=1661873883545; BX_USER_ID=5e66c0741eefeeba48abfe666e49687a; _ym_uid=1661873884168755235; _ym_d=1661873884; _tt_enable_cookie=1; _ttp=01839738-27cc-4c5b-ae4a-be99662bcaf5; I_BITRIX2_SM_bsAuthPhone=9502135308; PHPSESSID=NNGLA4WVIkGxrlj8zMwacQQ75E9g7b6R; I_BITRIX2_SM_bsSiteVersionRun=D; I_BITRIX2_SM_SALE_UID=66dde7a489d38a413233c60f5ea227bd; _gid=GA1.2.85927779.1667044483; _ym_isad=1; _ym_visorc=w; I_BITRIX2_SM_BSPopUpBnr=%7B%2296591%22%3A1667130902%7D; tmr_detect=1%7C1667044505998; cto_bundle=qQMtx19qZFFHeFglMkJRQlNMcTBIUGR4VG9Rc3pLJTJCb2FaaFFyR2hndVh1azY2elRHZ1Zrbk1wZGJFTiUyQjFWJTJCQjdWQnRRb25XTnpsaDk5RGFuYWRhN3ZVWkJ3MURwbWIzUjVGem0lMkJrQUFKd25VaTVGV3FOS0pCak5ET0hLMU0lMkJqanVTRk9uZVREeG14anF4NnMzRzk5JTJGJTJGVEI3c1dJJTJCQmNTUGp4aWJWbFFXTWozb1lzQnMlM0Q; tmr_reqNum=16"
        }
      },
      "vardex": {
        "url": "https://www.vardex.ru/bitrix/services/main/ajax.php?mode=class&c=vardex%3Amain.auth&action=sendConfirmCode",
        "json": "{'phone': '*vardex*', 'new': 'false'}",
        "response": 200,
        "timeout": 120,
        "headers": {"x-bitrix-csrf-token": "1023f1844f62f888d4b35f1e39e306fb", "x-bitrix-site-id": "s1", "cookie": "PHPSESSID=4npNhUXACzFbLeO0SZR1ZRfUu6rnJzzr; REFERER=https%3A%2F%2Fwww.google.com%2F; LANDING_PAGE=%2Findex.php; USER_CITY_ID=997; BITRIX_SM_SALE_UID=90053950; BITRIX_SM_PK=997; _ga=GA1.2.1040077275.1667045453; _gid=GA1.2.448176478.1667045453; rrpvid=492574795716432; rcuid=62f1473f2534d0f27d07c026; _gat=1; _userGUID=0:l9tvtkhg:axyo7jLYuXeLgyy0~bEB0Fh2vUfUndzQ; dSesn=42427647-2094-beb6-f85a-f4b090bb4a67; _dvs=0:l9tvtkhg:oQ517cjrDOXBxqpjE34iDqzPYNcspDq3; _ym_uid=1667045454951407587; _ym_d=1667045454; BX_USER_ID=5e66c0741eefeeba48abfe666e49687a; _ym_isad=1; _ym_visorc=b; rrwpswu=true; rrwpswu=true; BITRIX_SM_AGREE18PLUS=1"}
      },
      "tinkoff": {
        "url":  "https://www.tinkoff.ru/api/common/v1/sign_up?origin=web%2Cib5%2Cplatform&sessionid=uRdqKtttiyJYz6ShCqO076kNyTraz7pa.m1-prod-api56&wuid=8604f6d4327bf4ef2fc2b3efb36c8e35",
        "data": "{'phone': '*phone*'}",
        "response": 200,
        "timeout": 60
      },
      "sipnetru": {
        "url": "https://register2.sipnet.ru/cgi-bin/exchange.dll/RegisterHelper?oper=9&callmode=1&phone=*phone*",
        "response": 200,
        "timeout": 60
      }
