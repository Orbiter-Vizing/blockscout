import $ from 'jquery'

export function getTextAdData () {
  $.get('https://request-global.czilladx.com/serve/native.php?z=19260bf627546ab7242', function (data) {
    if (data) {
      console.log(data)
      const { ad: { name, description_short: descriptionShort, thumbnail, url, cta_button: ctaButton } } = data
      $('.ad').removeClass('d-none')
      $('.ad-name').text(name)
      $('.ad-short-description').text(descriptionShort)
      $('.ad-cta-button').text(ctaButton)
      $('.ad-url').attr('href', url)
      $('.ad-img-url').attr('src', thumbnail)
    } else {
      $('.ad').addClass('d-none')
    }
  })
}

$(function () {
  getTextAdData()
})
