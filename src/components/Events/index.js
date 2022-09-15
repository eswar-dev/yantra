import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductsPara} from './ProductsElements';

export default class Events extends Component {
render() {
  return (
    <ProductsContainer id='Events'>
        <ProductsHeading>Technical Events</ProductsHeading>
        <ProductsPara>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg src={require("../../images/paper.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄ Paper Presentation </ProductTitle>
                            <ProductPrice>fee: Rs.100/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>but also the leap into electronic typesetting, remaining essentially </li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li> It was popularised in the 1960s with the release</li>
                                </ul>
                            </ProductDesc>
                            <ProductButton onClick={()=>{window.open('https://stackoverflow.com/', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/powerpoint.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>PowerPoint Presentation</ProductTitle>
                            <ProductPrice>fee: Rs.100/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>but also the leap into electronic typesetting, remaining essentially </li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li> It was popularised in the 1960s with the release</li>
                                </ul>
                            </ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/powerpoint.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄Poster Presentation</ProductTitle>
                            <ProductPrice>fee: Rs.100/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>but also the leap into electronic typesetting, remaining essentially </li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li> It was popularised in the 1960s with the release</li>
                                </ul>
                            </ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/cultural1.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>💫Cultural Night 💥</ProductTitle>
                            <ProductPrice>fee: Rs.100/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>but also the leap into electronic typesetting, remaining essentially </li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li> It was popularised in the 1960s with the release</li>
                                </ul>
                            </ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/quiz.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄ Quiz</ProductTitle>
                            <ProductPrice>Price: Rs.100/-</ProductPrice>
                            <ProductDesc><ul style={{textAlign: 'left',margin:'10px'}}>
                                    <li>but also the leap into electronic typesetting, remaining essentially </li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li> It was popularised in the 1960s with the release</li>
                                </ul></ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/project.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄ Project Exhibition</ProductTitle>
                            <ProductPrice>Price: Rs.100/-</ProductPrice>
                            <ProductDesc><ul style={{textAlign: 'left'}}>
                                    <li>but also the leap into electronic typesetting, remaining essentially </li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li> It was popularised in the 1960s with the release</li>
                                </ul></ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                
        </ProductWrapper>
    </ProductsContainer>
  )
}}
