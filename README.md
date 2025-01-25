# **Mealy Makineleri**
[Mealy](https://dreaxs.github.io/Mealy/)

**Bu proje, bir Mealy makinesi simülatörünü oluşturmak amacıyla geliştirilmiş bir web uygulamasıdır. Mealy makineleri, girdiye göre hem durum değiştirir hem de her geçişte bir çıkış üretir. Bu simülatör, kullanıcıların kendi Mealy makinelerini tanımlamalarına ve girdilerle çalışarak çıktıları simüle etmelerine olanak sağlar.**

---

## Ana Özellikler:

-   **Durumlar ve Alfabe:** Kullanıcılar, Mealy makinesinin durumlarını ve alfabesini (semboller) tanımlar. Durumlar, makinenin farklı çalışma aşamalarını, alfabe ise girdileri ifade eder.

-   **Geçişler ve Çıkışlar:** Mealy makinelerinde her geçiş, hem yeni bir duruma geçişi hem de bir çıkış üretir. Kullanıcı, her bir durum ve sembol için hem bir sonraki durumu hem de çıkışı belirler. Geçişler, belirli bir formatta (örneğin: 'q0,a=q2,0') girilir.

-   **Başlangıç Durumu ve Girdi Dizisi:** Makineyi başlatmak için bir başlangıç durumu girilir. Ayrıca, simülasyona alınacak girdi dizisi de tanımlanır. Bu girdi dizisi, makinenin hangi sembollerle çalışacağını belirler.

-   **Simülasyon:** Kullanıcı simülasyonu başlattığında, girdi dizisi adım adım işlenir. Her adımda makine, geçerli durum ve sembole göre yeni bir duruma geçer ve çıkış üretir. Sonuçta, makinenin tüm çıkışları ekranda gösterilir.

-   **Tema Seçimi:** Uygulama, kullanıcıların tema (açık veya koyu) seçebilmesini sağlar. Bu özellik, kullanıcı deneyimini kişiselleştirmeye yönelik bir özelliktir.
