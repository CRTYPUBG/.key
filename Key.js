<script src="Key.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const KeyAuthApp = new KeyAuth({
            name: "game-opti",
            ownerid: "eyiFqt1JTu",
            version: "1.0"
        });

        function login() {
            const key = document.getElementById("licenseKey").value.trim();
            const result = document.getElementById("result");
            if (!key) {
                result.style.color = "red";
                result.textContent = "Lütfen lisans anahtarınızı girin!";
                return;
            }
            result.style.color = "white";
            result.textContent = "Lisans doğrulanıyor...";

            KeyAuthApp.license(key, (response) => {
                if (response.success) {
                    result.style.color = "lightgreen";
                    result.textContent = `Hoşgeldiniz, ${response.info.username}!`;
                    setTimeout(() => {
                        window.location.href = "main_UI.html";
                    }, 1500);
                } else {
                    result.style.color = "red";
                    result.textContent = "Lisans doğrulama başarısız: " + response.message;
                }
            });
        }

        // login fonksiyonunu global yap
        window.login = login;
    });
</script>
