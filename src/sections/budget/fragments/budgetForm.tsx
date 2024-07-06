'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/primitive/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/primitive/ui/form'
import { Input } from '@/primitive/ui/input'
import { Textarea } from '@/primitive/ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome do usuário precisa ter pelo menos 2 caracteres.',
  }),
  message: z.string().min(10, {
    message: 'Descrição muito curta. O minimo é de 10 caracteres.',
  }),
})

type FormFieldSchema = z.infer<typeof formSchema>

const BudgetForm = () => {
  const form = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      message: '',
    },
  })
  const onSubmit: SubmitHandler<FormFieldSchema> = (formData) => {
    console.log(formData)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Digite seu nome"
                    className="border-none bg-white ring-1 ring-black/10 placeholder:text-black/40"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    maxLength={250}
                    placeholder="Digite sua mensagem e o tipo de serviço que precisa."
                    className="h-36 resize-none border-none bg-white ring-1 ring-black/10 placeholder:text-black/40"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          variant="success"
          className="mt-7 w-full text-base capitalize"
        >
          Solicitar Orçamento
        </Button>
      </form>
    </Form>
  )
}

export default BudgetForm
