// Paselektinti HTML elementą

let containerElement = document.querySelector('div') //Pagrindinis kontikas container


let contentWrapperElement = document.createElement('div') //sukuriau div elementa su klase "content-wrapper"
contentWrapperElement.className = 'content-wrapper' //sukuriau divElement klase content-wrapper
containerElement.append(contentWrapperElement) //pridejau prie container>content-wrapper


//SHOPS WRAPPER KONTIKAS
let shopsWrapperElement = document.createElement('div')

shopsWrapperElement.className = 'shops-wrapper'

contentWrapperElement.append(shopsWrapperElement)

//SHOPS WRAPPER KONTIKO VIDUS
  //Page tittle
  let pageTitleElement = document.createElement('h1')
  pageTitleElement.textContent = 'Find us'


  pageTitleElement.className = 'page-title'

  shopsWrapperElement.append(pageTitleElement)

  //Shops-list
  let shopListElement = document.createElement('div')

  shopListElement.className = 'shops-list'

  shopsWrapperElement.append(shopListElement)

    //Shop-item
    let shopItemElement = document.createElement('div')

    shopItemElement.className = 'shops-item'

    shopListElement.append(shopItemElement)
      //Shop-title
      let shopTitleElement = document.createElement('h2')
      shopTitleElement.textContent = 'Parduotuvė 1'

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
            shopContactsTitleElement.textContent = 'Phone:'
            //A ref
            let link = document.createElement('a')
            link.textContent = 'tel:+3704564644'
            link.setAttribute('href', 'tel:+3704564644')
            shopContactsItemElement.append(link)


           //Shop-contacts-item
           let shopContactsItemElement1 = document.createElement('li')
           shopContactsItemElement1.className = 'shops-contact-item'
           shopContactsListElement.append(shopContactsItemElement1)
            //Shop-contats-title
            let shopContactsTitleElement1 = document.createElement('span')
            shopContactsTitleElement1.className = 'shops-contact-title'
            shopContactsItemElement1.append(shopContactsTitleElement1)
            shopContactsTitleElement1.textContent = 'Email:'
            //A ref
            let link1 = document.createElement('a')
            link1.textContent = 'shop1@parduotuve.lt'
            link1.setAttribute('href', 'mailto:shop1@parduotuve.lt')
            shopContactsItemElement1.append(link1)


            //Shop-contacts-item
          let shopContactsItemElement2 = document.createElement('li')
          shopContactsItemElement2.className = 'shops-contact-item'
          shopContactsListElement.append(shopContactsItemElement2)
              //Shop-contats-title
              let shopContactsTitleElement2 = document.createElement('span')
              shopContactsTitleElement2.className = 'shops-contact-title'
              shopContactsItemElement2.append(shopContactsTitleElement2)
              shopContactsTitleElement2.textContent = 'Address:'
              //A ref
              let link2 = document.createElement('a')
              link2.textContent = 'Rotušės aikštė 1, Kaunas'
              link2.setAttribute('href', 'https://goo.gl/maps/95468754')
              shopContactsItemElement2.append(link2)
              link2.setAttribute('target', '_blank')

     

      //Shop-item
let shopItemElement2 = document.createElement('div')

shopItemElement2.className = 'shops-item'

shopListElement.append(shopItemElement2)
  //Shop-title
  let shopTitleElement2 = document.createElement('h2')
  shopTitleElement2.textContent = 'Parduotuvė 2'

  shopTitleElement2.className = 'shop-title'

  shopItemElement2.append(shopTitleElement2)
    //Shop-contacts-list
    let shopContactsListElement2 = document.createElement('ul')
    shopContactsListElement2.className = 'shops-contact-list'
    shopItemElement2.append(shopContactsListElement2)

      //Shop-contacts-item
      let shopContactsItemElement3 = document.createElement('li')
      shopContactsItemElement3.className = 'shops-contact-item'
      shopContactsListElement2.append(shopContactsItemElement3)
        //Shop-contats-title
        let shopContactsTitleElement3 = document.createElement('span')
        shopContactsTitleElement3.className = 'shops-contact-title'
        shopContactsItemElement3.append(shopContactsTitleElement3)
        shopContactsTitleElement3.textContent = 'Phone:'
        //A ref
        let link3 = document.createElement('a')
        link3.textContent = 'tel:+3705678787'
        link3.setAttribute('href', 'tel:+3705678787')
        shopContactsItemElement3.append(link3)


       //Shop-contacts-item
       let shopContactsItemElement4 = document.createElement('li')
       shopContactsItemElement4.className = 'shops-contact-item'
       shopContactsListElement2.append(shopContactsItemElement4)
        //Shop-contats-title
        let shopContactsTitleElement4 = document.createElement('span')
        shopContactsTitleElement4.className = 'shops-contact-title'
        shopContactsItemElement4.append(shopContactsTitleElement4)
        shopContactsTitleElement4.textContent = 'Email:'
        //A ref
        let link4 = document.createElement('a')
        link4.textContent = 'shop2@parduotuve.lt'
        link4.setAttribute('href', 'mailto:shop2@parduotuve.lt')
        shopContactsItemElement4.append(link4)


        //Shop-contacts-item
      let shopContactsItemElement5 = document.createElement('li')
      shopContactsItemElement5.className = 'shops-contact-item'
      shopContactsListElement2.append(shopContactsItemElement5)
          //Shop-contats-title
          let shopContactsTitleElement5 = document.createElement('span')
          shopContactsTitleElement5.className = 'shops-contact-title'
          shopContactsItemElement5.append(shopContactsTitleElement5)
          shopContactsTitleElement5.textContent = 'Address:'
          //A ref
          let link5 = document.createElement('a')
          link5.textContent = 'Vilniaus g. 2, Vilnius'
          link5.setAttribute('href', 'https://goo.gl/maps/98765432')
          shopContactsItemElement5.append(link5)
          link5.setAttribute('target', '_blank')


  // Kitas shop-item
let shopItemElement3 = document.createElement('div')

shopItemElement3.className = 'shops-item'

shopListElement.append(shopItemElement3)
  // Shop-title
  let shopTitleElement3 = document.createElement('h2')
  shopTitleElement3.textContent = 'Parduotuvė 3'

  shopTitleElement3.className = 'shop-title'

  shopItemElement3.append(shopTitleElement3)
    // Shop-contacts-list
    let shopContactsListElement3 = document.createElement('ul')
    shopContactsListElement3.className = 'shops-contact-list'
    shopItemElement3.append(shopContactsListElement3)

      // Shop-contacts-item
      let shopContactsItemElement6 = document.createElement('li')
      shopContactsItemElement6.className = 'shops-contact-item'
      shopContactsListElement3.append(shopContactsItemElement6)
        // Shop-contacts-title
        let shopContactsTitleElement6 = document.createElement('span')
        shopContactsTitleElement6.className = 'shops-contact-title'
        shopContactsItemElement6.append(shopContactsTitleElement6)
        shopContactsTitleElement6.textContent = 'Phone:'
        // A ref
        let link6 = document.createElement('a')
        link6.textContent = 'tel:+3706789090'
        link6.setAttribute('href', 'tel:+3706789090')
        shopContactsItemElement6.append(link6)

       // Shop-contacts-item
       let shopContactsItemElement7 = document.createElement('li')
       shopContactsItemElement7.className = 'shops-contact-item'
       shopContactsListElement3.append(shopContactsItemElement7)
        // Shop-contacts-title
        let shopContactsTitleElement7 = document.createElement('span')
        shopContactsTitleElement7.className = 'shops-contact-title'
        shopContactsItemElement7.append(shopContactsTitleElement7)
        shopContactsTitleElement7.textContent = 'Email:'
        // A ref
        let link7 = document.createElement('a')
        link7.textContent = 'shop3@parduotuve.lt'
        link7.setAttribute('href', 'mailto:shop3@parduotuve.lt')
        shopContactsItemElement7.append(link7)

        // Shop-contacts-item
      let shopContactsItemElement8 = document.createElement('li')
      shopContactsItemElement8.className = 'shops-contact-item'
      shopContactsListElement3.append(shopContactsItemElement8)
          // Shop-contacts-title
          let shopContactsTitleElement8 = document.createElement('span')
          shopContactsTitleElement8.className = 'shops-contact-title'
          shopContactsItemElement8.append(shopContactsTitleElement8)
          shopContactsTitleElement8.textContent = 'Address:'
          // A ref
          let link8 = document.createElement('a')
          link8.textContent = 'Gedimino pr. 3, Klaipėda'
          link8.setAttribute('href', 'https://goo.gl/maps/76543210')
          shopContactsItemElement8.append(link8)
          link8.setAttribute('target', '_blank')


    // Kitas shop-item
let shopItemElement4 = document.createElement('div')

shopItemElement4.className = 'shops-item'

shopListElement.append(shopItemElement4)
  // Shop-title
  let shopTitleElement4 = document.createElement('h2')
  shopTitleElement4.textContent = 'Parduotuvė 4'

  shopTitleElement4.className = 'shop-title'

  shopItemElement4.append(shopTitleElement4)
    // Shop-contacts-list
    let shopContactsListElement4 = document.createElement('ul')
    shopContactsListElement4.className = 'shops-contact-list'
    shopItemElement4.append(shopContactsListElement4)

      // Shop-contacts-item
      let shopContactsItemElement9 = document.createElement('li')
      shopContactsItemElement9.className = 'shops-contact-item'
      shopContactsListElement4.append(shopContactsItemElement9)
        // Shop-contacts-title
        let shopContactsTitleElement9 = document.createElement('span')
        shopContactsTitleElement9.className = 'shops-contact-title'
        shopContactsItemElement9.append(shopContactsTitleElement9)
        shopContactsTitleElement9.textContent = 'Phone:'
        // A ref
        let link9 = document.createElement('a')
        link9.textContent = 'tel:+3701234567'
        link9.setAttribute('href', 'tel:+3701234567')
        shopContactsItemElement9.append(link9)

       // Shop-contacts-item
       let shopContactsItemElement10 = document.createElement('li')
       shopContactsItemElement10.className = 'shops-contact-item'
       shopContactsListElement4.append(shopContactsItemElement10)
        // Shop-contacts-title
        let shopContactsTitleElement10 = document.createElement('span')
        shopContactsTitleElement10.className = 'shops-contact-title'
        shopContactsItemElement10.append(shopContactsTitleElement10)
        shopContactsTitleElement10.textContent = 'Email:'
        // A ref
        let link10 = document.createElement('a')
        link10.textContent = 'shop4@parduotuve.lt'
        link10.setAttribute('href', 'mailto:shop4@parduotuve.lt')
        shopContactsItemElement10.append(link10)

        // Shop-contacts-item
      let shopContactsItemElement11 = document.createElement('li')
      shopContactsItemElement11.className = 'shops-contact-item'
      shopContactsListElement4.append(shopContactsItemElement11)
          // Shop-contacts-title
          let shopContactsTitleElement11 = document.createElement('span')
          shopContactsTitleElement11.className = 'shops-contact-title'
          shopContactsItemElement11.append(shopContactsTitleElement11)
          shopContactsTitleElement11.textContent = 'Address:'
          // A ref
          let link11 = document.createElement('a')
          link11.textContent = 'Vokiečių g. 5, Vilnius'
          link11.setAttribute('href', 'https://goo.gl/maps/543210987')
          shopContactsItemElement11.append(link11)
          link11.setAttribute('target', '_blank')














//MAPS WRAPPER KONTIKAS
let mapWrapperElement = document.createElement('div')

mapWrapperElement.className = 'map-wrapper'

contentWrapperElement.append(mapWrapperElement)

  //iframe
  let iframe = document.createElement('iframe')

  mapWrapperElement.append(iframe)
  iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4415.413961192272!2d23.887974!3d54.896914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e1!3m2!1sen!2slt!4v1692951629686!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');


