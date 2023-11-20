// containers
const startContainer = document.querySelector('.start-container')
const authContainer = document.querySelector('.auth-container')
const firstStartContainer = document.querySelector('.start-container__first')
const secondStartContainer = document.querySelector('.start-container__second')
const thirdStartContainer = document.querySelector('.start-container__third')
const signRegisterContainer = document.querySelector('.auth-container__sign-register')
const signinContainer = document.querySelector('.auth-container__signin')
const registerContainer = document.querySelector('.auth-container__register')
const profileContainer = document.querySelector('.profile-container')
const categoryContainer = document.querySelector('.category-container')
const favoriteContainer = document.querySelector('.favorite-container')
const accountContainer = document.querySelector('.account-container')
const movieDetailContainer = document.querySelector('.movie-detail')

// Cards
const movieCard = document.querySelector('.movie-card')
const movieTrendingCards = document.querySelectorAll('.trending-card')
const categoryCard = document.querySelector('.category-card')

// buttons
const buttonFirstStartContainer = document.querySelector('.start-container__first--button')
const buttonSecondStartContainer = document.querySelector('.start-container__second--button')
const buttonThirdStartContainer = document.querySelector('.start-container__third--button')
const singinButton = document.querySelector('.signin')
const registerButton = document.querySelector('.register')
const chevronLeftSingin = document.querySelector('.chevron-left')
const signupButton = document.querySelector('.signup')
const chevronLeftSingup = document.querySelector('.chevron-left-r')
const singinButtonRC = document.querySelector('.signin-r')
const singinFormButton = document.querySelector('#signin-button')
// Footer buttons Profile Section
const homeProfileFooterButton = document.querySelector('.profile-home')
const favoriteProfileFooterButton = document.querySelector('.profile-favorite')
const searchProfileFooterButton = document.querySelector('.profile-search')
const profileProfileFooterButton = document.querySelector('.profile-profile')
// Footer buttons Category Section
const homeCategoryFooterButton = document.querySelector('.category-home')
const favoriteCategoryFooterButton = document.querySelector('.category-favorite')
const searchCategoryFooterButton = document.querySelector('.category-search')
const profileCategoryFooterButton = document.querySelector('.category-profile')
// Footer buttons Favorite Section
const backFavoriteHeaderButton = document.querySelector('.favorite-back')
const homeFavoriteFooterButton = document.querySelector('.favorite-home')
const favoriteFavoriteFooterButton = document.querySelector('.favorite-favorite')
const searchFavoriteFooterButton = document.querySelector('.favorite-search')
const profileFavoriteFooterButton = document.querySelector('.favorite-profile')
// Footer buttons Account Section
const homeAccountFooterButton = document.querySelector('.account-home')
const favoriteAccountFooterButton = document.querySelector('.account-favorite')
const searchAccountFooterButton = document.querySelector('.account-search')
const profileAccountFooterButton = document.querySelector('.account-profile')
// Genre buttons
const genreButtons = document.querySelectorAll('.genre-button')
const genreButtonLinks = document.querySelectorAll('.button-link')
// Movie detail buttons
const backMovieDetailButton = document.querySelector('.movie-detail-back')
const genreMovieDetailButtons = document.querySelectorAll('.genres__card--icon')
const likeMovieDetailButton = document.querySelector('.movie-detail-like')
/*----------------------------------------------------------------------*/ 

// Events
buttonFirstStartContainer.addEventListener('click', () => {
  firstStartContainer.style.display = 'none'
  secondStartContainer.style.display = 'block'
})

buttonSecondStartContainer.addEventListener('click', () => {
  secondStartContainer.style.display = 'none'
  thirdStartContainer.style.display = 'block'
})

buttonThirdStartContainer.addEventListener('click', () => {
  thirdStartContainer.style.display = 'none'
  signRegisterContainer.style.display = 'block'
  startContainer.style.zIndex = '0'
  authContainer.style.zIndex = '1'
})

singinButton.addEventListener('click', () => {
  signRegisterContainer.style.display = 'none'
  signinContainer.style.display = 'grid'
})

registerButton.addEventListener('click', () => {
  signRegisterContainer.style.display = 'none'
  registerContainer.style.display = 'grid'
})

chevronLeftSingin.addEventListener('click', () => {
  signRegisterContainer.style.display = 'block'
  signinContainer.style.display = 'none'
})

signupButton.addEventListener('click', () => {
  signinContainer.style.display = 'none'
  registerContainer.style.display = 'grid'
})

chevronLeftSingup.addEventListener('click', () => {
  signRegisterContainer.style.display = 'block'
  registerContainer.style.display = 'none'
})

singinButtonRC.addEventListener('click', () => {
  signinContainer.style.display = 'grid'
  registerContainer.style.display = 'none'
})

// singinFormButton.addEventListener('click', event => {
//   event.preventDefault()
//   signinContainer.style.display = 'none'
//   profileContainer.style.display = 'block'
// })

// Profile Section Events
homeProfileFooterButton.addEventListener('click', () => {
  profileContainer.style.display = 'block'
})

favoriteProfileFooterButton.addEventListener('click', () => {
  profileContainer.style.display = 'none'
  favoriteContainer.style.display = 'block'
})
searchProfileFooterButton.addEventListener('click', () => {
  profileContainer.style.display = 'none'
  categoryContainer.style.display = 'block'
})

profileProfileFooterButton.addEventListener('click', () => {
  profileContainer.style.display = 'none'
  accountContainer.style.display = 'block'
})

// Category Section Events

homeCategoryFooterButton.addEventListener('click', () => {
  categoryContainer.style.display = 'none'
  profileContainer.style.display = 'block'
})
favoriteCategoryFooterButton.addEventListener('click', () => {
  categoryContainer.style.display = 'none'
  favoriteContainer.style.display = 'block'
})
searchCategoryFooterButton.addEventListener('click', () => {
  categoryContainer.style.display = 'block'
})
profileCategoryFooterButton.addEventListener('click', () => {
  categoryContainer.style.display = 'none'
  accountContainer.style.display = 'block'
})

// Favorite Section Events

backFavoriteHeaderButton.addEventListener('click', () => {
  favoriteContainer.style.display = 'none'
  profileContainer.style.display = 'block'
})

homeFavoriteFooterButton.addEventListener('click', () => {
  favoriteContainer.style.display = 'none'
  profileContainer.style.display = 'block'
})

favoriteFavoriteFooterButton.addEventListener('click', () => {
  favoriteContainer.style.display = 'block'
})

searchFavoriteFooterButton.addEventListener('click', () => {
  favoriteContainer.style.display = 'none'
  categoryContainer.style.display = 'block'
})

profileFavoriteFooterButton.addEventListener('click', () => {
  favoriteContainer.style.display = 'none'
  accountContainer.style.display = 'block'
})

// Account Section Events

homeAccountFooterButton.addEventListener('click', () => {
  accountContainer.style.display = 'none'
  profileContainer.style.display = 'block'
})

favoriteAccountFooterButton.addEventListener('click', () => {
  accountContainer.style.display = 'none'
  favoriteContainer.style.display = 'block'
})

searchAccountFooterButton.addEventListener('click', () => {
  accountContainer.style.display = 'none'
  categoryContainer.style.display = 'block'
})

profileFavoriteFooterButton.addEventListener('click', () => {
  accountContainer.style.display = 'block'
})

genreButtons.forEach(genreButton => {
  genreButton.addEventListener('click', () => {
    categoryContainer.style.display = 'block'
  })
})

genreButtonLinks.forEach(genreButtonLink => {
  genreButtonLink.addEventListener('click', () => {
    categoryContainer.style.display = 'block'
  })
})

// Card redirect
movieCard.addEventListener('click', () => {
  profileContainer.style.display = 'none'
  movieDetailContainer.style.display = 'block'
})

movieTrendingCards.forEach(movieTrendingCard => {
  movieTrendingCard.addEventListener('click', () => {
    favoriteContainer.style.display = 'none'
    movieDetailContainer.style.display = 'block'
  })
})

categoryCard.addEventListener('click', () => {
  categoryContainer.style.display = 'none'
  movieDetailContainer.style.display = 'block'
})

// Movie Detail
backMovieDetailButton.addEventListener('click', () => {
  movieDetailContainer.style.display = 'none'
  profileContainer.style.display = 'block'
})

likeMovieDetailButton.addEventListener('click', () => {
  movieDetailContainer.style.display = 'none'
  favoriteContainer.style.display = 'block'
})

genreMovieDetailButtons.forEach(genreMovieDetailButton => {
  genreMovieDetailButton.addEventListener('click', () => {
    movieDetailContainer.style.display = 'none'
    categoryContainer.style.display = 'block'
  })
})