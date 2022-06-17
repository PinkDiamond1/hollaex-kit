	
	{
		"en": {
			"DOC_REJECTED": {
				"html": "<div><p>Sayın ${email} </p><p>Maalesef, yüklediğiniz KYC dökümanları reddedildi.<br>Belgelerinizin reddedilme sebepleri aşağıda listelenmiştir.<br></p><div><ul>${doc_information}</ul></div><p>Eğer, belgelerinizin reddedilme sebeplerinde bir hata olduğunu düşünüyorsanız, lütfen bu e-posta adresine yanıt veriniz.<br>Eğer bir hata yoksa, tüm geçerli dökümanlarınızı tekrar yüklemeniz gerekmektedir.</p><p> Regards<br> ${api_name} takımı </p</div>",
				"title": "KYC Belgeleri Reddedildi"
			},
			"DOC_VERIFIED": {
				"html": "<div><p>Sayın ${email} </p><p>Yüklediğiniz KYC belgeleriniz onaylandı.<br>Artık, kimlik onayı isteyen tüm borsa seçeneklerine erişiminiz açılmıştır.</p><ul>${doc_information}</ul><p>Onaylanan dökümanlarınızı görüntülemek için, lütfen <a href=\"${link}\" target='_blank'> onay sayfanızı ziyaret ediniz.</a></p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "KYC Belgeleri Onaylandı"
			},
			"CONFIRM_EMAIL": {
				"html": "<div><p><p>Sayın ${name} </p></p><p>Hesap güvenliğinizin kontrolünü gerektiren bir istekte bulundunuz. Bu işlemi gerçekleştirmek için, aşağıdaki kodla, bu işlemi onaylamanız gerekmektedir.<br /><p style=\"font-size: 1.2rem; text-align: center;\">${code}</p>Eğer bu isteği siz yapmadıysanız, acilen destek birimine raporlayınız ve şifrelerinizi değiştiriniz.</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Güvenlik Onayı"
			},
			"LOGIN": {
				"html": "<div> <p> Sayın ${name} </p> <p> Hesabınıza aşağıdaki detaylarla bir giriş tesbit ettik </p> <div> <div>Saat: ${time}</div> <div>Ülke: ${country}</div> <div>IP Adresi: ${ip}</div> </div> <p> Eğer bu siz değilseniz, lütfen; şifrenizi değiştirin, 2 kademeli onay kurun (2FA), ve acilen bizimle kontak kurun. </p> <p> İyi dileklerimizle<br> ${api_name} takımı </p> </div>",
				"title": "Giriş"
			},
			"SIGNUP": {
				"html": "<div> <p> Sayın ${name} </p> <p> E-Posta adresinizi onaylamak için aşağıdaki butona tıklamanız gerekmektedir.<br> Eğer herhangi bir sorunuz varsa, bu e-posta'ya yanıt vererek bize ulaşmaktan çekinmeyiniz.</p><p>Lütfen kaydınızı onaylamak için, aşağıdaki butona tıklayınız..</p><div style=\"padding-top: 10px; margin-bottom: 10px;\"><a href=\"${link}\" target='_blank'><Button style=\"cursor: pointer; background-color: #333333; color: white; border: none; padding: 1rem; text-transform: uppercase; cursor: pointer !important; font-size: 14px; min-width: 11rem;\">Confirm</Button></a></div><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Kayıt"
			},
			"WELCOME": {
				"html": "<div><p> Sayın ${name} </p><p> ${api_name} borsasına kayıt olduğunuz için teşekkür ederiz.</p><p>İşlem yapmaya başlamak için, öncelikle hesabınıza kripto para ya da banknot yatırmanız gerekmektedir. Lütfen <a href=\"${link_account}\" target='_blank'> hesabınıza gidin</a> ve <a href=\"${link_deposit}\" target='_blank'> yatırım sayfanızı ziyaret edin.</a>,</p><p>Eğer herhangi bir sorunuz olursa, lütfen bu e-posta'ya yanıt vererek bizimle kontak kurunuz.</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>", //Virex Notu: Burada bazı yapıları değiştirmek zorunda kaldık. Lütfen test ediniz.
				"title": "Hoşgeldiniz"
			},
			"RESET_PASSWORD": {
				"html": "<div><p> Sayın ${name} </p><p>Hesap şifrenizi sıfırlamak için bir istekte bulundunuz.<br />Şifrenizi güncellemek için, lütfen aşağıdaki linke tıklayınız.<br /></p><div style=\"padding-top: 10px; margin-bottom: 10px;\"><a href=\"${link}\" target='_blank'><Button style=\"cursor: pointer; background-color: #333333; color: white; border: none; padding: 1rem; text-transform: uppercase; cursor: pointer !important; font-size: 14px; min-width: 11rem;\">Şifremi Yenile</Button></a></div><p>Eğer bu isteği yanlışlıkla yaptıysanız, bir şey yapmanıza gerek yok; hesabınızda herhangi bir değişiklik olmayacaktır.</p><p>İsteğin geldiği adres: ${ip}</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Şifre Sıfırlama İsteği"
			},
			"ACCOUNT_VERIFY": {
				"html": "<div><p> Sayın ${name} </p><p>Tebrikler. Hesabınız başarıyla onaylandı.</p><div style=\"padding-top: 10px; margin-bottom: 10px;\"><a href=\"${link}\" target='_blank'><Button style=\"cursor: pointer; background-color: #333333; color: white; border: none; padding: 1rem; text-transform: uppercase; cursor: pointer !important; font-size: 14px; min-width: 11rem;\">Trade Now</Button></a></div><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Hesap Onaylandı"
			},
			"ACCOUNT_UPGRADE": {
				"html": "<div><p> Sayın ${name} </p><p>Tebrikler. Hesap erişiminiz ${tier} seviyesine yükseltildi. Artık daha düşük komisyon ödeyecek, daha yüksek çekim yapabilecek ve diğer bazı premium özelliklere erişeceksiniz.</p><div style=\"padding-top: 10px; margin-bottom: 10px;\"><a href=\"${link}\" target='_blank'><Button style=\"cursor: pointer; background-color: #333333; color: white; border: none; padding: 1rem; text-transform: uppercase; cursor: pointer !important; font-size: 14px; min-width: 11rem;\">Şimdi İşlem Yap</Button></a></div><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Hesap Yükseltildi"
			},
			"DEPOSIT_CANCEL": {
				"html": "<div><p> Sayın ${name} </p><p> ${date} tarihinde yapılan, ${amount} miktarındaki, ${currency} yatırımınızı bulamadık ya da işleyemedik. Dolayısıyla, işlem sistem tarafından reddedildi.</p><p>Eğer merak ettiğiniz bir şey varsa, bu e-posta'ya yanıt verebilirsiniz</p><p>İşlem ID: ${txid}<br />Miktar: ${amount}<br />Durum: Reddedildi</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Yatırımı Reddedildi"
			},
			"WITHDRAWAL_CANCEL": {
				"html": "<div><p> Sayın ${name} </p><p> ${date} tarihinde yapılan, ${amount} miktarındaki, ${currency} çekiminizi bulamadık ya da işleyemedik. Dolayısıyla, işlem reddedildi ve transfer bekleyen bakiyeniz ${api_name} cüzdanınıza geri yatırıldı.</p><p>Eğer merak ettiğiniz bir şey varsa, bu e-posta'ya yanıt verebilirsiniz</p><p>İşlem ID: ${txid}<br />Miktar: ${amount}<br />Durum: Reddedildi</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Çekimi Reddedildi"
			},
			"WITHDRAWAL_REQUEST": {
				"html": "<div><p> Sayın ${name} </p><p> ${address} adresine, ${amount} miktarında, ${currency} çekim isteğinde bulundunuz. <br /><br />Miktar: ${amount}<br />Ücret: ${fee} ${currency}<br />Adres: ${address}<br /><span id='network'>Ağ: ${network}</span><br /><br />Çekimi onaylamak için, lütfen aşağıdaki butona tıklayınız.<br /></p><div style=\"padding-top: 10px; margin-bottom: 10px;\"><a href=\"${link}\" target='_blank'><Button style=\"cursor: pointer; background-color: #333333; color: white; border: none; padding: 1rem; text-transform: uppercase; cursor: pointer !important; font-size: 14px; min-width: 11rem;\">Onay</Button></a></div><p>Eğer bu isteği yanlışlıkla yaptıysanız, hiç bir şey yapmanıza gerek yoktur, hesabınızda bir değişiklik olmayacaktır.</p><p>İsteğin geldiği kaynak: ${ip}</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Çekim İsteği"
			},
			"USER_VERIFICATION": {
				"html": "<div><h3>Kullanıcı Onayı Gerekmektedir</h3><div> '${email}' kullanıcısı, onay için belgelerini yüklemiştir. Lütfen dökümanlarını inceleyiniz.</div></div>",
				"title": "Kullanıcı Onayı"
			},
			"SUSPICIOUS_DEPOSIT": {
				"html": "<div><h3>Şüpheli Yatırım</h3><div> ${email} adresine sahip kullanıcı, hesabına ${currency} cinsinden şüpheli bir yatırım almıştır..<br />İşlem ID: ${txid}<h4>İşlem datası:</h4><div>${data}</div></div></div>",
				"title": "Şüpheli Yatırım"
			},
			"INVALID_ADDRESS": {
				"html": "<div><p> Sayın ${name} </p><p> ${amount} miktarındaki,  ${currency} çekiminiz hatalı adrese gönderilmiş ve iptal edilmiştir .</p><p>Adres: ${address}</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Hatalı Çekim Adresi"
			},
			"USER_DEACTIVATED": {
				"html": "<div><p> ${email} hesabınız kilitlenmiştir. Borsa yöneticisi tekrar aktifleyene kadar, hesabınızı kullanamayacaksınız.</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Hesap ${type}"
			},
			"USER_ACTIVATED": {
				"html": "<div><p> ${email} hesabınız aktiflenmiştir. Hesabınızı kullanabilirsiniz.</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Hesap ${type}"
			},
			"DISCOUNT_UPDATE": {
				"html": "<div><p> Sayın ${name} </p><p>İndirim oranınız % ${rate} olarak değiştirilmiştir. Bu oran, işlem komisyonlarınıza indirim olarak uygulanacaktır.</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "İndirim Oran Değişimi"
			},
			"BANK_VERIFIED": {
				"html": "<div><p> Sayın ${name} </p><p>İnceleme sürecindeki banka hesabınız onaylanmıştır. Geçerli hesabınız, banka hesabı gerektiren borsa işlemlerinde kullanılabilecektir.</p><div><strong>Onaylı Banka Hesapları:</strong>${list_detail_bank_account}</div><p><a href=\"${link_verification}\">Mevcut banka hesaplarınızı görüntülemek için, lütfen borsanın onay bölümüne bakınız.</a></p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Banka Onayı"
			},
			"USER_ID_VERIFICATION_REJECT": {
				"html": "<div><p> Sayın ${name} </p><p>Kimlik onayı başvurunuz incelendi ve ne yazık ki reddedildi. Yapmanız gerekenler için, lütfen aşağıdaki yetkili mesajını okuyunuz:</p><p>Mesaj: ${message}</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Kimlik Onayı Reddedildi"
			},
			"USER_BANK_VERIFICATION_REJECT": {
				"html": "<div><p> Sayın ${name} </p><p>Yeni banka kaydınız incelendi ve ne yazık ki reddedildi. Yapmanız gerekenler için, lütfen aşağıdaki yetkili mesajını okuyunuz:</p><p>Mesaj: ${message}</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Yeni Banka Başvurusu Reddedildi"
			},
			"PASSWORD_CHANGED": {
				"html": "<div><p> Sayın ${name} </p><p>Bu e-posta, şifrenizin değiştiğini onaylamaktadır. Başka bir işlem yapmanıza gerek yoktur.<br />Eğer bu değişikliği onaylamıyorsanız, lütfen bizimle acilen irtibat kurunuz.<br /></p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Şifre Değişti"
			},
			"CHANGE_PASSWORD": {
				"html": "<div><p> Sayın ${name} </p><p>Şifrenizi değiştirmek için bir istekte bulundunuz.<br />Şifre değişiminizi onaylamak için, lütfen aşağıdaki linke tıklayınız.<br /></p><div style=\"padding-top: 10px; margin-bottom: 10px;\"><a href=\"${link}\" target='_blank'><Button style=\"cursor: pointer; background-color: #333333; color: white; border: none; padding: 1rem; text-transform: uppercase; cursor: pointer !important; font-size: 14px; min-width: 11rem;\">Şifre Değişimini Onayla</Button></a></div><p>Eğer bu isteği yanlışlıkla yapmışsanız, görmezden gelebilirsiniz; hesabınızda herhangi bir değişiklik olmayacaktır.</p><p>İsteğin geldiği kaynak: ${ip}</p><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "Şifre Değişim Onayı"
			},
			"DEPOSIT_PENDING": {
				"html": "<div><div><p> Sayın ${name} </p><p> ${api_name} cüzdanınızda bekleyen, ${amount} ${currency} yeni yatırımınız vardır. Lütfen işlem onaylanana kadar bekleyiniz. Onay sonrası, fonlarınız cüzdanınıza işlenecektir. Yatırımınızın blokzincirde ${confirmation} adet onaya ihtiyacı vardır.</p><p>Miktar: ${amount} ${currency}<br />Statü: ${status}<br />Adres: ${address}<br />İşlem ID: ${transaction_id}<br /><span id='network'>Ağ: ${network}</span><br />Ücret: ${fee} ${currency}<br /><ul>${explorers}</ul></div><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Yatırımı Bekliyor"
			},
			"DEPOSIT_COMPLETED": {
				"html": "<div><div><p> Sayın ${name} </p><p> ${currency} cinsinden, ${amount} ${currency} yatırımınız onaylanmış ve tamamlanmıştır. Bakiyenize, ${currency} cüzdanınızdan erişebilirsiniz.</p><p>Miktar: ${amount} ${currency}<br />Durum: ${status}<br />Adres: ${address}<br />İşlem ID: ${transaction_id}<br /><span id='network'>Ağ: ${network}</span><br />Ücret: ${fee} ${currency}<br /><ul>${explorers}</ul></div><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Yatırımı Tamamlandı"
			},
			"WITHDRAWAL_PENDING": {
				"html": "<div><p> Sayın ${name} </p><p> ${amount} ${currency} için çekim isteğinde bulundunuz. Çekim talebiniz işlemdedir ve kısa süre içerisinde onaylanacaktır.</p><p>Miktar: ${amount} ${currency}<br />Ücret: ${fee} ${currency}<br />Durum: ${status}<br />Adres: ${address}<br />İşlem ID: ${transaction_id}<br /><span id='network'>Ağ: ${network}</span><br /><ul>${explorers}</ul><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Çekimi Bekliyor"
			},
			"WITHDRAWAL_COMPLETED": {
				"html": "<div><p> Sayın ${name} </p><p> ${amount} ${currency} için çekiminiz tamamlanmıştır.</p><p>Miktar: ${amount} ${currency}<br />Ücret: ${fee} ${currency}<br />Durum: ${status}<br />Adres: ${address}<br />İşlem ID: ${transaction_id}<br /><span id='network'>Ağ: ${network}</span><br /><ul>${explorers}</ul><p> İyi dileklerimizle<br> ${api_name} takımı </p></div>",
				"title": "${currency} Çekimi Tamamlandı"
			}
		}
}
