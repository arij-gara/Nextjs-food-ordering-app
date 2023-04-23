import Head from 'next/head'
import axios from "axios"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar  from '../components/Navbar'
import Featured from "../components/Featured"
import PizzaList from '@/components/PizzaList'
const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
  return (
    <>
    
      <Head>
        <title>Pizza Restaurent</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
      
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
     
    },
  };
};