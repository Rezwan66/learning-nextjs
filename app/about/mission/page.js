// 'use client';

import Button from '@/app/components/Button';
import Image from 'next/image';
import jinx from '@/public/images/jinx.jpg';

const Mission = () => {
  return (
    <main className="mt-10">
      <h2>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum
        molestias eveniet officiis quibusdam voluptatem laboriosam vel dolore
        quia consectetur placeat, ratione quos iste illum facere repudiandae,
        voluptas accusantium similique.{' '}
      </h2>
      <div className="w-[500px]">
        <Image placeholder="blur" src={jinx} alt="Jinx Wallpaper" />
      </div>
      <Button />
    </main>
  );
};
export default Mission;
