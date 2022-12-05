import Heading from "../../components/Heading";
import Head from 'next/head';
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { contactType } from "../../types";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  // you can check if will be error
  // const data = null;


  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
};

type contactsPropsType = {
  contacts: contactType[];
}

const Contacts: FC<contactsPropsType> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>

      <Heading text="Contacts List:" />

      <ul>
        {contacts && contacts.map(({ id, name, email }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Contacts;
