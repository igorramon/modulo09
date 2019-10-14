import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { singnInRequest } from '~/store/modules/auth/actions';

import logocurso from '~/assets/logocurso.svg';

export default function Signin() {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira o e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  function handleSubmit({ email, password }) {
    dispatch(singnInRequest(email, password));
  }

  return (
    <>
      <img src={logocurso} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar Conta gratuita</Link>
      </Form>
    </>
  );
}
