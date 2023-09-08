// Paselektinti HTML elementą
let contentWrapper = createContentWrapper()

let containerElement = document.querySelector('div')
containerElement.append(contentWrapper)

let shopsWrapper = createShopsWrapper()
let mapsWrapper = createMapsWrapper()

contentWrapper.append(shopsWrapper, mapsWrapper)

let pageTitle = createPageTitle('Find us')
let shopList = createShopList()
shopsWrapper.append(pageTitle, shopList)

let shopItem1 = createShopItem('Parduotuvė 1', ': +3706666666', 'plastake@gmail.com', 'Vingio 4', 'https://google.com')
let shopItem2 = createShopItem('Parduotuvė 2', ': +3706666667', 'plaste@gmail.com', 'Petro 1', 'https://google.com')
let shopItem3 = createShopItem('Parduotuvė 3', ': +3706666668', 'plastaassske@gmail.com', 'Namasiuniu 6', 'https://google.com')
let shopItem4 = createShopItem('Parduotuvė 4', ': +3706666669', 'plastasdaaaatake@gmail.com', 'Upes 91-2', 'https://google.com')
shopList.append(shopItem1, shopItem2, shopItem3, shopItem4)

let iframeElement = createIframeElement()
mapsWrapper.append(iframeElement)




function createShopItem (title, phone, email, adress, adresUrl){
  //Shop-item
  let shopItemElement = document.createElement('div')
  shopItemElement.className = 'shops-item'
    //Shop-title
    let shopTitleElement = document.createElement('h2')
    shopTitleElement.textContent = title
    shopTitleElement.className = 'shop-title'
    shopItemElement.append(shopTitleElement)
      //Shop-contacts-list
      let shopContactsListElement = document.createElement('ul')
      shopContactsListElement.className = 'shops-contact-list'
      shopItemElement.append(shopContactsListElement)
        //Shop-contacts-item
        let shopContactsItemElement = document.createElement('li')
        shopContactsItemElement.className = 'shops-contact-item'
        shopContactsListElement.append(shopContactsItemElement)
          //Shop-contats-title
          let shopContactsTitleElement = document.createElement('span')
          shopContactsTitleElement.className = 'shops-contact-title'
          shopContactsItemElement.append(shopContactsTitleElement)
          shopContactsTitleElement.textContent = `Phone`
          //A ref
          let link = document.createElement('a')
          link.textContent = phone
          link.setAttribute('href', `tel:${phone}`)
          shopContactsItemElement.append(link)


         //Shop-contacts-item
         let shopContactsItemElement1 = document.createElement('li')
         shopContactsItemElement1.className = 'shops-contact-item'
         shopContactsListElement.append(shopContactsItemElement1)
          //Shop-contats-title
          let shopContactsTitleElement1 = document.createElement('span')
          shopContactsTitleElement1.className = 'shops-contact-title'
          shopContactsItemElement1.append(shopContactsTitleElement1)
          shopContactsTitleElement1.textContent = `Email: `
          //A ref
          let link1 = document.createElement('a')
          link1.textContent = email
          link1.setAttribute('href', `mailto:${email}`)
          shopContactsItemElement1.append(link1)


          //Shop-contacts-item
        let shopContactsItemElement2 = document.createElement('li')
        shopContactsItemElement2.className = 'shops-contact-item'
        shopContactsListElement.append(shopContactsItemElement2)
            //Shop-contats-title
            let shopContactsTitleElement2 = document.createElement('span')
            shopContactsTitleElement2.className = 'shops-contact-title'
            shopContactsItemElement2.append(shopContactsTitleElement2)
            shopContactsTitleElement2.textContent = `Adress: `
            //A ref
            let link2 = document.createElement('a')
            link2.textContent = adress
            link2.setAttribute('href', adresUrl)
            shopContactsItemElement2.append(link2)
            link2.setAttribute('target', '_blank')
            return shopItemElement          
}
function createContentWrapper(){
  //Content Wrapper kontikas
  let contentWrapperElement = document.createElement('div')
  contentWrapperElement.className = 'content-wrapper' 
  return contentWrapperElement
}
function createShopsWrapper(){

let shopsWrapperElement = document.createElement('div')
shopsWrapperElement.className = 'shops-wrapper'
return shopsWrapperElement
}
function createPageTitle(name){

let pageTitleElement = document.createElement('h1')
pageTitleElement.textContent = name
pageTitleElement.className = 'page-title'
return pageTitleElement
}
function createShopList(){
let shopListElement = document.createElement('div')
shopListElement.className = 'shops-list'
return shopListElement
}
function createMapsWrapper(){
let mapWrapperElement = document.createElement('div')
mapWrapperElement.className = 'map-wrapper'
return mapWrapperElement
  }
function createIframeElement(){
let iframe = document.createElement('iframe')
iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4415.413961192272!2d23.887974!3d54.896914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e1!3m2!1sen!2slt!4v1692951629686!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
iframe.style = `width: 600px;
                height: 450px;
                border: 0;`
return iframe
}
function elementator(elementType, className, text){
  let element = document.querySelector(elementType)

  if (className){
    element.className = className
  }

  if(text){
    element.textContent = text
  }

  return element

  
} 