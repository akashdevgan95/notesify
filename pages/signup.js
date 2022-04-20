import React from 'react';
import Head from 'next/head';
import { Button, Form, Card } from 'semantic-ui-react';

const Signup = () => {
  return (
    <>
        <Head>
            <title>Notesify - Sign up</title>
            <meta name="description" content="Notesify - Take notes with ease." />
        </Head>
        <Card fluid className='mx-auto mt-40 md:w-1/3'>
            <Card.Content header='Sign up' />
            <Card.Content>
                <Form >
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' />
                    </Form.Field>
                    <Button type='submit' className='bg-green-400'>Sign up</Button>
                </Form>
            </Card.Content>
            
        </Card>
    </>
  )
}

export default Signup;