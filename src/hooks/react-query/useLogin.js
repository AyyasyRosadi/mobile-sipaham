import { useMutation } from '@tanstack/react-query'
import React from 'react'
import api from '../../api/http'

export default function useLogin() {
    
  const login = useMutation({
    mutationKey:['login'],
    mutationFn:(e)=>api.post(`/user/login`,e),
    onSuccess:(r)=>{
        return r
    },
    onError:(r)=>{
        return r
    }
  })
  return login
}
