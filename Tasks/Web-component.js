//1.шинэ <hello-world> гэдэг HTML таг үүсгэ. Энэ таг нь дотроо "Сайн уу, Дэлхий!" гэсэн текстийг харуулдаг байх ёстой.

//2.<shadow-box> гэдэг компонент үүсгэ. Түүний доторх текстийг CSS ашиглан улаан өнгөтэй болгохдоо "Shadow DOM" ашиглаж тусгаарла.

//3.HTML дээр байгаа аюулгүйн санамжийн хайрцагны загварыг (#alert-template) хуулбарлан ажиллуулдаг <cool-alert> гэдэг компонент үүсгэ.
//  HTML тал 
// <template id="alert-template">
//     <div style="padding: 10px; background-color: #ffcccc; border: 1px solid red;">
//         <strong>Анхааруулга:</strong> Системд алдаа гарлаа!
//     </div>
// </template>

// <cool-alert></cool-alert>

//4.Гарчиг болон тайлбар хэсэгтэй <info-card> компонент үүсгэ. Гаднаас title болон description гэсэн нэртэй слотуудыг хүлээн авдаг байх ёстой.
// HTML тал 
// <info-card>
//     <span slot="title">Шинэ Мэдээ</span>
//     <p slot="description">Өнөөдөр Вэб Компонент сурч байна.</p>
// </info-card>

// 5. <hello-text> гэдэг элемент HTML хуудсанд нэмэгдэх үедээ өөрийн дотор "Компонент үүслээ!" гэсэн текстийг автоматаар оруулдаг болго.

//6. Дээрх элемент HTML хуудсаас гарахдаа "Компонент устлаа!" гэсэн текстийг консол дээр хэвлэдэг болго.
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// Хариултууд

// 1. <hello-world> компонент
class HelloWorld extends HTMLElement {
    connectedCallback() {
        this.textContent = "Сайн уу, Дэлхий!";
    }
}
customElements.define('hello-world', HelloWorld);


//2. <shadow-box> компонент

class ShadowBox extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = `
                <style> p { color: red; } </style>
                <p>Энэ бол улаан текст.</p>
            `;
        }
    }
customElements.define('shadow-box', ShadowBox);

//3.template ашиглан <cool-alert> компонент
class CoolAlert extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('alert-template');
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('cool-alert', CoolAlert);

//4. <info-card> компонент

class InfoCard extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = `
                <div style="border: 1px solid #ccc; padding: 15px;">
                    <h2><slot name="title"></slot></h2>
                    <hr>
                    <slot name="description"></slot>
                </div>
            `;
        }
    }
customElements.define('info-card', InfoCard);

//5,6.connectedCallback() & disconnectedCallback() ашиглан <hello-text> компонент

class HelloText extends HTMLElement {
    connectedCallback() {
        this.textContent = "Компонент үүслээ!";
    }

    disconnectedCallback() {
        console.log("Компонент устлаа!");
    }
}
customElements.define('hello-text', HelloText);