import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import './HomePage.css';

const Program = (props) => {

  const openPage = () => {
    console.log('test')
  }

  return (
    <div id={props.id} className="homepage">
      <h2>Programma</h2>
      <p className='shortProgram'>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet interdum odio, eu iaculis felis condimentum quis. Pellentesque at iaculis sem, ornare pharetra sem. Nullam consectetur risus et urna eleifend eleifend. Phasellus ornare velit non varius tempus. Praesent auctor dictum erat id ultrices. In hac habitasse platea dictumst. Nulla mattis luctus turpis laoreet auctor. Pellentesque auctor ante turpis. Suspendisse porta diam nec tristique convallis. Cras luctus ligula sit amet leo dictum rutrum. Etiam sem nisl, facilisis et felis sed, gravida molestie diam. Suspendisse potenti. Donec pellentesque nunc tincidunt eros porta, eu auctor orci vestibulum. Vestibulum cursus mi magna, id maximus dui gravida efficitur.

        Nunc fringilla diam justo, porttitor cursus ante dignissim id. Donec efficitur turpis eu luctus maximus. Aliquam vel ligula erat. Donec elit tellus, ornare faucibus tellus ornare, accumsan feugiat erat. Donec varius ligula non ex pharetra vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc molestie maximus sem non blandit. Sed sit amet risus turpis. Aliquam dignissim malesuada massa. Maecenas nibh ipsum, vestibulum id magna eget, suscipit pretium metus. Aliquam placerat ipsum consequat velit pharetra, ut pellentesque orci posuere. Suspendisse hendrerit quam eu erat rhoncus, vestibulum mollis purus sodales. Proin efficitur enim quis fermentum convallis. Quisque ut augue vel orci rhoncus porttitor.

        Etiam a tellus ante. Nam ultricies nunc non mollis rutrum. Sed sit amet massa pulvinar, aliquam nunc sed, malesuada ligula. Integer vulputate at odio a tincidunt. Aliquam eu feugiat nunc. Integer molestie, arcu et mollis congue, nibh orci pretium massa, vel efficitur nulla dolor et nisl. Proin tincidunt pretium mattis. Mauris ipsum nisl, elementum vitae ullamcorper nec, fringilla sit amet ex. Donec pretium pharetra libero, at imperdiet lorem condimentum accumsan. Nullam in bibendum diam. Sed quis suscipit dui. Nunc semper mattis pellentesque. Etiam leo augue, blandit et justo non, porttitor porttitor leo. Donec scelerisque orci quis purus aliquet condimentum.

        Nunc maximus bibendum ligula, a porta orci volutpat et. Pellentesque elementum ornare augue, ac facilisis nibh eleifend nec. Donec posuere mi ac tortor viverra finibus. Aenean aliquet nisi nibh, at vestibulum lorem hendrerit vitae. Morbi sit amet lectus tristique, aliquam elit a, bibendum est. Curabitur justo lectus, pretium tincidunt leo eget, pretium ullamcorper ante. Integer suscipit egestas sem id luctus. Maecenas malesuada vehicula ex, eget tincidunt mauris egestas vel. Maecenas urna purus, tincidunt vitae fringilla non, suscipit fermentum sem. Sed lacinia, arcu eu cursus efficitur, quam tellus malesuada diam, eu blandit mauris diam ac purus.

        Vestibulum accumsan augue eget neque fermentum, consectetur volutpat nisi sollicitudin. Integer pretium fermentum pellentesque. Cras nisl lacus, fermentum vitae mattis in, auctor vitae nunc. Curabitur non vulputate sem. Sed turpis sapien, sagittis sollicitudin hendrerit eu, auctor at justo. Fusce in aliquam neque. Aliquam sed viverra libero. Donec a pretium sem. Etiam dapibus condimentum nisl nec pellentesque. Sed suscipit neque vel sapien congue sagittis. </p>
      <Button type="primary" danger>
        <Link to="/program">Visualizza il programma completo</Link>
      </Button>
    </div>
  );
}

export default Program;
