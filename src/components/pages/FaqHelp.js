import React, { Component } from 'react'
import Faq from 'react-faq-component';
import Main from '../Main';
import Axios from 'axios';
import ApiProvider from '../common/ApiProvider';

// const data = {
//     title: "FAQ (How it works)",
//     rows: [
//         {
//             title: "Lorem ipsum dolor sit amet,",
//             content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
//         },
//         {
//             title: "Nunc maximus, magna at ultricies elementum",
//             content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
//         },
//         {
//             title: "Curabitur laoreet, mauris vel blandit fringilla",
//             content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
//         },
//         {
//             title: "What is the package version",
//             content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
//         }]
// }
export default class FaqHelp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            faqs: '',
            categoryName: '',
        }
    }

    componentDidMount = () => {
        document.title = 'Label Service Provider | Help and FAQs';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        Axios.get(ApiProvider.endpoint + "/faq_category", {
            headers: headers
        })
            .then(res => {
                // console.log(res.data.category[0])
                this.ShowFaqs(res.data.category[0].name)
                this.setState({
                    categories: res.data.category,                    
                })
            })
            .catch(error => {
                this.setState({ redirect: true })
            })
    }

    ShowFaqs = (catName) =>{
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        let postData = {
            "category":catName
        }
        Axios.post(ApiProvider.endpoint + "/faqs", postData, {
            headers: headers
        })
            .then(res => {                
                this.setState({
                    faqs: res.data.faqs[0],
                })
            })
            .catch(error => {
                this.setState({ redirect: true })
            })
    }


    render() {
        return (
            <div>
                <Main>
                    <section className="ftco-section ftco-services-2" id="faq-section">
                        <div className="container">
                            <div className="row justify-content-center pb-5">
                                <div className="col-md-12 heading-section text-center ftco-animate">
                                    <span className="subheading">Help / Faqs</span>
                                    <h2 className="mb-4">Help / Faqs</h2>
                                    <div className="row">
                                        <div className="col-md-4 faq">
                                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                {this.state.categories.map((cat, idx) => (
                                                    <a key={idx} className={(this.state.faqs.title === cat.name) ? 'nav-link active' : 'nav-link'} id="v-pills-booking-tab" onClick={(e) => this.ShowFaqs(cat.name)}>{cat.name}
                                                        <button className="btn btn-tab-custom btn-sm">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </button>
                                                    </a>
                                                ))}

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div id="section1">
                                                <Faq className="Faq-rows" data={this.state.faqs} styles={{ titleTextColor: "#ff7f27", rowContentColor: "grey" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Main>
            </div>
        )
    }
}
