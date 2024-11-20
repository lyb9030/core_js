// 박스 흔들어주기 코드

export function shake(t) {
  const animation = gsap.fromTo(
    t,
    { x: -10 },
    {
      duration: 0.1,
      x: 0,
      repeat: 5,
      yoyo: true,
    }
  );

  return animation;
}
