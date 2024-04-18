<template>
  <div id="shopify-section-footer" class="shopify-section">
    <section class="footer">
      <div class="desktop-only">
        <div class="footer-left">
          <div class="f_block">
            <img src="@/assets/img/logo_yellow.png" alt="" class="f_logo">
            <img src="@/assets/img/footer/mark_1.png" alt="" class="f_mark">
            <img src="@/assets/img/footer/mark_2.png" alt="" class="f_mark2">
          </div>
        </div>
        <div class="footer-right">
            <div class="footer_item2">
                <div class="fi2_left">
                    <div class="fi2_item">
                        <div class="ft_title"><a href="/#/products">Product</a></div>
                        <div class="fi2_text">
                            <div><a href="/#/products?type=1">&gt; New Arrivais</a> <!-- <span>NEW</span> --></div>
                            <div><a href="/#/products?type=2">&gt; Disposable Series</a> </div>
                            <div><a href="/#/products?type=3">&gt; Pod Series</a></div>
                            <div><a href="/#/products?type=4">&gt; E-liquid</a></div>
                            <div><a href="/#/products?type=5">&gt; Other</a></div>
                        </div>
                    </div>
                    <div class="fi2_item">
                        <div class="ft_title"><a href="/#/wholesale">Wholesaler</a></div>
                    </div>
                    <div class="fi2_item">
                        <div class="ft_title"><a href="/#/about">About Us</a></div>
                        <div class="fi2_text">
                            <div><a href="/#/contact">&gt; Contact Us</a></div>
                            <div><a href="/#/about">&gt; Why Ehonos</a></div>
                        </div>
                    </div>
                </div>
                <div class="fi2_right">
                    <div class="ft_title">Follow Us</div>
                    <div class="fir2_text">
                      <div class="fir3_right">
                          <a class="icon_meida icon_face" target="_blank" href="https://www.facebook.com/">
                          </a>
                          <a class="icon_meida icon_ins" target="_blank" href="https://www.instagram.com/">
                          </a>
                          <a class="icon_meida icon_line" target="_blank" href="https://line.me/R/ti/p">
                          </a>
                          <a class="icon_meida icon_youtube" target="_blank" href="https://www.youtube.com">
                          </a>
                      </div>
                    </div>
                    <div class="footerFlag">COPYRIGHT © 2024 EHONOS ALL RIGHTS RESERVED.</div>
                </div>
            </div>
        </div>
      </div>
      <div class="mobile-only">
        <div class="footer-top">
          <div class="f_t_content">
            <div class="f_block">
              <div>
                  <img src="@/assets/img/logo_yellow.png" alt="" class="f_logo">
                  <img src="@/assets/img/footer/mark_1.png" alt="" class="f_mark">
              </div>
              <img src="@/assets/img/footer/mark_2.png" alt="" class="f_mark2">
            </div>
            <div>
              <div class="Fnav" style="border-top:none">
                  <div>Follow Us</div>
              </div>
              <div class="fir3_right">
                  <a class="icon_meida icon_face_y" target="_blank" href="https://www.facebook.com">
                  </a>
                  <a class="icon_meida icon_ins_y" target="_blank" href="https://www.instagram.com">
                  </a>
                  <a class="icon_meida icon_line_y" target="_blank" href="https://line.me/R/ti/p">
                  </a>
                  <a class="icon_meida icon_youtube_y" target="_blank" href="https://www.youtube.com">
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="Fnav">
            <a href="/#/products">PRODUCTS</a>
            <div class="Fnav_link">
              <a href="/#/products?type=1">New Arrivais</a>
              <a href="/#/products?type=2">Disposable Series</a>
              <a href="/#/products?type=3">Pod Series</a>
              <a href="/#/products?type=4">E-liquid</a>
              <a href="/#/products?type=5">Other</a>
            </div>
          </div>
          <div class="Fnav">
          <a href="/#/wholesale">WHOLESALE</a>
          </div>
          <div class="Fnav">
            <a href="/#/about">ABOUT US</a>
            <div class="Fnav_link">
              <a href="/#/contact">Contact Us</a>
              <a href="/#/about">Why Ehonos</a>
            </div>
          </div>
          <div class="footerFlag">COPYRIGHT © 2024 EHONOS ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "@/assets/style/footer.less"
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
