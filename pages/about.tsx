import Image from 'next/future/image'
import me from 'public/kolbaski.jpg'
import Head from 'next/head'
import { Themed } from 'theme-ui'
import { ThemedLink } from 'components/themed-link'

export default function About() {
  return (
    <>
      <Head>
        <title>Обо мне</title>
      </Head>
      <Themed.h1>Обо мне</Themed.h1>
      <Image
        src={me}
        alt="Photo of author"
        sx={{ mb: 4 }}
      />
      <p>Занимаюсь веб-разработкой с 2018 года, работал на фрилансе и в крупном продукте.</p>
      <Themed.h2>Меня можно нанять</Themed.h2>
      <p>Я фронтенд разработчик.</p>
      <p>Пишу понятный и тестируемый код без оверинжиниринга. Уважаю дедлайны, умею работать в команде.</p>
      <p>Remote: full-time, part-time, проектная работа. Отдаю предпочтения продуктовым компаниям.</p>
      <Themed.h3>Технические скиллы</Themed.h3>
      <p>Фокусируюсь на фронтенде с JS/TS</p>
      <p>Работал с React, Vue и экосистемными вещами для них.</p>
      <p>Пишу тесты.</p>
      <Themed.h4>Контакты</Themed.h4>
      <p>
        Адрес для ручного ввода,{' '}
        <ThemedLink
          target="_blank"
          href="https://lea.verou.me/2009/11/yet-another-email-hiding-technique/"
        >
          не copy/paste.
        </ThemedLink>
      </p>
      <p>f_khafizov＠protonmail․com</p>
    </>
  )
}
