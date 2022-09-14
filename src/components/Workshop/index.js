import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductsPara} from './workshopElements';

export default class Workshop extends Component {
render() {
  return (
    <ProductsContainer id='Workshop'>
        <ProductsHeading>Workshops</ProductsHeading>
        <ProductsPara>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg src={require("../../images/product3.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>Mech Event</ProductTitle>
                            <ProductPrice>Price: Rs.200/-</ProductPrice>
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
                        <ProductImg src={require("../../images/product3.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>Mech Event</ProductTitle>
                            <ProductPrice>Price: Rs.200/-</ProductPrice>
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
          
                
        </ProductWrapper>
    </ProductsContainer>
  )
}}
