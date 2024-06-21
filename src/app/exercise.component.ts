import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-exercise',
  template: `
    <h2>Цель</h2>
    <p>Разработать "Мессенджер" в соответствии с требованиями.</p>
    <h2>Задачи</h2>
    <ol>
      <li>Изучить требования к реализации мессенджера.</li>
      <li>Реализовать необходимые компоненты и репозитории.</li>
      <li>Готовый мессенджер представить в правой части экрана.</li>
    </ol>
    <h2>Требования</h2>
    <ol>
      <li>Мессенджер разделен на две части.</li>
      <li>
        В левой части расположен список комнат. По умолчанию выбрана первая в
        списке комната. Нажатие ЛКМ на элемент списка переключает комнату.
      </li>
      <li>
        В правой части расположен список сообщений. Отображаются только те
        сообщения, которые принадлежат текущей комнате.
      </li>
      <li>
        Внизу расположены Поле ввода сообщения и кнопка Отправить. Нажатие на
        кнопку Отправить создает новое сообщение в текущей комнате.
      </li>
    </ol>
    <h2>Пример интерфейса</h2>
    <p>На картинках ниже представлен пример интерфейса мессенджера.</p>
    <img src="example-1.svg" title="Пример 1" />
    <img src="example-2.svg" title="Пример 2" />
  `,
  styles: `
    ol > li {
      margin-bottom: 5px;
    }
    img {
      width: 100%;
    }
  `,
})
export class ExerciseComponent {}
