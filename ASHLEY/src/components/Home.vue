<template>
  <div class="homepage">
        <header class="navbar">
            <h1 class="logo">FILM</h1>
            <nav>
                <ul class="nav-links">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/...">Contact</router-link></li>
                </ul>
            </nav>
        </header>
    </div>

      <div id="carouselExampleIndicators" class="carousel-slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.leparisien.fr/resizer/6_SIdK8GtqFB32cJxiEGT7nN_kw=/622x414/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/QJ2GDGC4DZFIRLOR4XYNNVENQA.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://www.leparisien.fr/resizer/rDIgwEcfnOawDhKF9VHG8wYzLxE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/3R3OCPPNGRF2JH7BVHRO4T3GHU.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../../assets/image1.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
</template>

<script>


export default {
  name: 'HomePage',
};
</script>

<style scoped>

.homepage {
  font-family: Arial, sans-serif;
  color: white;
  background-color: #141414;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  padding: 20px 10px;
  margin: 10px;
}



.nav-links {
  display: flex;
  list-style: none;
  margin: 10px;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 16px;
}

.nav-links a:hover {
  color: #e50914;
}

</style>
