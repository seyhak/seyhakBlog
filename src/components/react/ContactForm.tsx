import { useEffect, type FormEvent, useCallback } from "react"
import { Button } from "./Button"

export const ContactForm = () => {
  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    console.log({event})
  }, [])

  return (
    <form className="min-w-full" onSubmit={onSubmit} id="tgt">
      <div className="flex flex-col mb-1">
        <label htmlFor="name">Imię</label>
        <input
          className="px-1 text-black"
          type="text"
          id="name"
          name="name"
          placeholder="Rex"
          autoComplete="username"
          required
        />
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="email">Email</label>
        <input
          className="px-1 text-black"
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          autoComplete="email"
          required
        />
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="topic">Temat</label>
        <input
          className="px-1 text-black"
          type="text"
          id="topic"
          name="topic"
          placeholder="Współpraca"
          autoComplete="on"
          required
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="message">Wiadomość</label>
        <textarea
          className="px-1 text-black"
          id="message"
          name="message"
          rows={4}
          autoComplete="on"
          required
        ></textarea>
      </div>
      <Button type="submit">Wyślij</Button>
    </form>
  )
}
