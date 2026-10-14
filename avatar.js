// Bộ dựng nhân vật chibi SVG nhiều lớp
const Avatar = (() => {
  const skins = ['#FCE3CF', '#F2C9A5', '#D9A47C', '#A86F4C', '#7A4A2E'];
  const hairColors = ['#2B1D16', '#5A3825', '#B9823F', '#E7C46A', '#8E3B2E', '#4F6D8F', '#D07AA4', '#9AA0A6'];
  const outfitColors = ['#0E6B3B', '#F2EBDD', '#E85D4A', '#3D6FB6', '#F2B84B', '#8E6CC4', '#222222', '#F49AB8'];
  const bgs = ['#DDEFE3', '#F7E3C3', '#F9D5DC', '#D6E6F7', '#EDE3F7', '#FFF1B8', '#E6E6E6'];

  const hairs = [
    { name: 'Ngắn gọn',
      front: 'M54 88 Q50 38 100 38 Q150 38 146 88 Q138 64 112 60 Q100 70 84 62 Q64 66 54 88Z' },
    { name: 'Vuốt dựng',
      front: 'M56 82 Q50 44 76 34 L82 22 L92 34 L102 18 L110 34 L124 24 L124 38 Q152 46 144 82 Q134 58 100 60 Q70 58 56 82Z' },
    { name: 'Bob ngang vai',
      back: 'M48 128 Q42 40 100 40 Q158 40 152 128 Q142 134 130 126 L130 96 L70 96 L70 126 Q58 134 48 128Z',
      front: 'M54 92 Q54 42 100 42 Q146 42 146 92 Q128 70 100 66 Q76 66 54 92Z' },
    { name: 'Xoăn bồng',
      back: 'M44 110 Q36 60 60 44 Q70 26 100 28 Q130 26 140 44 Q164 60 156 110 Q150 120 140 112 L60 112 Q50 120 44 110Z',
      front: 'M54 84 Q52 64 64 56 Q68 44 82 48 Q90 38 100 46 Q110 38 118 48 Q132 44 136 56 Q148 64 146 84 Q132 70 118 70 Q100 62 82 70 Q66 70 54 84Z' },
    { name: 'Dài thẳng',
      back: 'M48 176 Q36 40 100 40 Q164 40 152 176 Q138 182 132 170 L130 100 L70 100 L68 170 Q62 182 48 176Z',
      front: 'M54 94 Q52 42 104 42 Q148 44 146 94 Q140 70 122 60 Q96 74 70 70 Q60 78 54 94Z' },
    { name: 'Búi cao',
      extra: '<circle cx="100" cy="30" r="17"/>',
      front: 'M54 88 Q52 42 100 42 Q148 42 146 88 Q136 66 100 62 Q66 64 54 88Z' },
    { name: 'Hai bím',
      back: '<ellipse cx="46" cy="120" rx="12" ry="22"/><ellipse cx="154" cy="120" rx="12" ry="22"/><circle cx="46" cy="146" r="7"/><circle cx="154" cy="146" r="7"/>',
      front: 'M54 92 Q52 42 100 42 Q148 42 146 92 Q140 72 128 66 Q120 74 100 72 Q80 74 72 66 Q60 72 54 92Z' },
    { name: 'Mái ngố',
      back: 'M50 120 Q44 40 100 40 Q156 40 150 120 L130 120 L130 96 L70 96 L70 120Z',
      front: 'M54 92 Q50 40 100 40 Q150 40 146 92 L146 78 L54 78Z' },
    { name: 'Đầu đinh',
      front: 'M58 76 Q60 46 100 46 Q140 46 142 76 Q130 62 100 60 Q70 62 58 76Z' },
  ];

  const eyes = [
    { name: 'Tròn xoe', svg: '<circle cx="82" cy="94" r="5"/><circle cx="118" cy="94" r="5"/><circle cx="84" cy="92" r="1.6" fill="#fff"/><circle cx="120" cy="92" r="1.6" fill="#fff"/>', mouth: 'M92 112 Q100 118 108 112' },
    { name: 'Cười híp', svg: '<path d="M75 95 Q82 87 89 95" fill="none" stroke-width="3.5" stroke-linecap="round"/><path d="M111 95 Q118 87 125 95" fill="none" stroke-width="3.5" stroke-linecap="round"/>', mouth: 'M90 110 Q100 122 110 110 Z', fillMouth: true },
    { name: 'Long lanh', svg: '<ellipse cx="82" cy="94" rx="7" ry="8"/><ellipse cx="118" cy="94" rx="7" ry="8"/><circle cx="85" cy="91" r="2.6" fill="#fff"/><circle cx="121" cy="91" r="2.6" fill="#fff"/><circle cx="80" cy="97" r="1.2" fill="#fff"/><circle cx="116" cy="97" r="1.2" fill="#fff"/>', mouth: 'M94 112 Q100 116 106 112' },
    { name: 'Buồn ngủ', svg: '<path d="M75 95 L89 95" stroke-width="3.5" stroke-linecap="round"/><path d="M111 95 L125 95" stroke-width="3.5" stroke-linecap="round"/>', mouth: 'M95 113 Q100 111 105 113' },
    { name: 'Nháy mắt', svg: '<circle cx="82" cy="94" r="5"/><circle cx="84" cy="92" r="1.6" fill="#fff"/><path d="M111 96 Q118 89 125 96" fill="none" stroke-width="3.5" stroke-linecap="round"/>', mouth: 'M90 111 Q102 120 110 108' },
    { name: 'Ngầu', svg: '<path d="M74 90 L90 93" stroke-width="3" stroke-linecap="round"/><path d="M126 90 L110 93" stroke-width="3" stroke-linecap="round"/><circle cx="83" cy="98" r="4"/><circle cx="117" cy="98" r="4"/>', mouth: 'M93 113 L107 112' },
  ];

  // Trang phục: lock = điều kiện mở khóa (gắn với Tea Passport & #TràĐộcBản)
  const outfits = [
    { name: 'Áo thun', tint: true },
    { name: 'Hoodie', tint: true },
    { name: 'Sơ mi đi học' },
    { name: 'Áo len cổ lọ', tint: true },
    { name: 'Áo dài', tint: true },
    { name: 'Áo khoác Đà Lạt', lock: 'stamp:dalat', lockText: 'Check-in Đà Lạt Hub' },
    { name: 'Tạp dề Barista Tea Lab', lock: 'order', lockText: 'Đặt 1 ly Custom Tea' },
    { name: 'Áo bà ba Hội An', lock: 'stamp:hoian', lockText: 'Check-in Hội An Hub' },
    { name: 'Sơ mi biển Đà Nẵng', lock: 'stamp:danang', lockText: 'Check-in Đà Nẵng Hub' },
    { name: 'Áo Độc Bản vàng', lock: 'contest', lockText: 'Gửi bài dự thi #TràĐộcBản' },
  ];

  const accs = [
    { name: 'Không' },
    { name: 'Kính tròn' },
    { name: 'Tai nghe' },
    { name: 'Ly trà trên tay' },
    { name: 'Mũ len' },
    { name: 'Kẹp hoa nhài' },
    { name: 'Nón lá', lock: 'passport', lockText: 'Đủ 3 dấu Tea Passport' },
  ];

  const BODY = 'M34 210 Q36 152 100 142 Q164 152 166 210Z';

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = v => Math.max(0, Math.min(255, v + amt));
    const r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  function outfitSvg(i, color) {
    const c = color, d = shade(color, -30);
    switch (i) {
      case 0: return `<path d="${BODY}" fill="${c}"/><path d="M86 144 Q100 158 114 144" fill="none" stroke="${d}" stroke-width="4"/>`;
      case 1: return `<path d="M62 150 Q100 128 138 150 L132 162 Q100 146 68 162Z" fill="${d}"/><path d="${BODY}" fill="${c}"/><path d="M84 146 Q100 166 116 146" fill="${d}"/><path d="M93 158 L91 182 M107 158 L109 182" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M72 196 Q100 186 128 196 L128 210 L72 210Z" fill="${d}"/>`;
      case 2: return `<path d="${BODY}" fill="#FAFAF7"/><path d="M84 142 L100 160 L116 142 L122 150 L100 166 L78 150Z" fill="#fff" stroke="#ddd" stroke-width="1.5"/><path d="M96 162 L104 162 L108 200 L100 208 L92 200Z" fill="#1F4E8C"/><path d="M100 170 L100 210" stroke="#e5e5e0" stroke-width="1.5"/>`;
      case 3: return `<path d="${BODY}" fill="${c}"/><rect x="82" y="130" width="36" height="22" rx="8" fill="${d}"/><path d="M60 170 L60 210 M80 160 L80 210 M120 160 L120 210 M140 170 L140 210" stroke="${d}" stroke-width="2" opacity=".5"/>`;
      case 4: return `<path d="${BODY}" fill="${c}"/><rect x="86" y="128" width="28" height="18" rx="4" fill="${c}" stroke="${d}" stroke-width="2"/><path d="M100 146 Q120 150 122 164 Q112 158 100 160" fill="${d}" opacity=".7"/><path d="M100 160 L100 210" stroke="#F2C14E" stroke-width="2"/><circle cx="110" cy="176" r="3" fill="#F2C14E"/><circle cx="114" cy="190" r="3" fill="#F2C14E"/>`;
      case 5: return `<path d="${BODY}" fill="#3F5E46"/><path d="M80 146 L100 196 L120 146 L112 144 L100 170 L88 144Z" fill="#2E4634"/><path d="M78 140 Q100 158 122 140 L124 152 Q100 168 76 152Z" fill="#C8463B"/><path d="M110 152 L118 182 L106 180Z" fill="#A9362D"/><circle cx="100" cy="186" r="2.5" fill="#E6D6A8"/><circle cx="100" cy="200" r="2.5" fill="#E6D6A8"/>`;
      case 6: return `<path d="${BODY}" fill="#FFFFFF"/><path d="M72 160 L128 160 L134 210 L66 210Z" fill="#0E6B3B"/><path d="M76 160 Q80 146 88 144 M124 160 Q120 146 112 144" stroke="#0E6B3B" stroke-width="4" fill="none"/><path d="M100 172 q-10 8 0 22 q10-14 0-22Z" fill="#9CD3A7"/><path d="M100 176 L100 194" stroke="#0E6B3B" stroke-width="1.5"/>`;
      case 7: return `<path d="${BODY}" fill="#F2C14E"/><path d="M86 142 Q100 154 114 142" fill="none" stroke="#C99A2E" stroke-width="3"/><path d="M100 152 L100 210" stroke="#C99A2E" stroke-width="2"/><circle cx="100" cy="166" r="2.5" fill="#fff"/><circle cx="100" cy="182" r="2.5" fill="#fff"/><circle cx="100" cy="198" r="2.5" fill="#fff"/><rect x="66" y="186" width="20" height="16" rx="3" fill="#E3A928"/>`;
      case 8: return `<path d="${BODY}" fill="#2A7FB8"/><path d="M84 142 L100 162 L116 142" fill="#fff"/>${[[66,170],[80,192],[124,174],[136,196],[108,200],[90,170]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#fff" opacity=".85"/><circle cx="${x}" cy="${y}" r="2" fill="#F2C14E"/>`).join('')}`;
      case 9: return `<path d="${BODY}" fill="#E9B530"/><path d="M84 144 Q100 158 116 144" fill="none" stroke="#B9851A" stroke-width="4"/><path d="M100 168 l5 10 11 1 -8 7 3 11 -11 -6 -11 6 3 -11 -8 -7 11 -1Z" fill="#fff"/>`;
    }
    return '';
  }

  function accSvg(i, skin) {
    switch (i) {
      case 1: return '<g fill="none" stroke="#2b2b2b" stroke-width="3"><circle cx="82" cy="95" r="12"/><circle cx="118" cy="95" r="12"/><path d="M94 95 Q100 90 106 95 M70 93 L58 88 M130 93 L142 88"/></g>';
      case 2: return '<path d="M52 92 Q50 30 100 30 Q150 30 148 92" fill="none" stroke="#333" stroke-width="7"/><rect x="40" y="82" width="18" height="28" rx="8" fill="#0E6B3B"/><rect x="142" y="82" width="18" height="28" rx="8" fill="#0E6B3B"/>';
      case 3: return `<g transform="translate(126 150)"><path d="M6 6 L34 6 L30 50 L10 50Z" fill="#fff" stroke="#0E6B3B" stroke-width="2.5"/><path d="M8 18 L32 18 L29 48 L11 48Z" fill="#C88A4E"/><circle cx="15" cy="44" r="2.4" fill="#2B1B12"/><circle cx="22" cy="45" r="2.4" fill="#2B1B12"/><circle cx="27" cy="43" r="2.4" fill="#2B1B12"/><rect x="4" y="2" width="32" height="6" rx="3" fill="#0E6B3B"/><path d="M24 2 L30 -14" stroke="#0E6B3B" stroke-width="3" stroke-linecap="round"/><ellipse cx="6" cy="30" rx="9" ry="8" fill="${skin}"/></g>`;
      case 4: return `<path d="M52 74 Q52 26 100 26 Q148 26 148 74Z" fill="#E85D4A"/><rect x="48" y="66" width="104" height="14" rx="7" fill="#C74635"/><circle cx="100" cy="22" r="9" fill="#F2EBDD"/>`;
      case 5: return '<g transform="translate(130 58)"><circle cx="0" cy="-7" r="6" fill="#fff"/><circle cx="7" cy="0" r="6" fill="#fff"/><circle cx="0" cy="7" r="6" fill="#fff"/><circle cx="-7" cy="0" r="6" fill="#fff"/><circle r="4" fill="#F2C14E"/></g>';
      case 6: return '<path d="M30 70 L100 14 L170 70 Q100 82 30 70Z" fill="#E8D39A" stroke="#B89A55" stroke-width="2"/><path d="M60 62 L100 22 M140 62 L100 22 M80 66 L100 22 M120 66 L100 22" stroke="#C9AE6A" stroke-width="1.5"/>';
    }
    return '';
  }

  let uid = 0;
  function render(cfg, size = 64) {
    const c = { skin: 0, hair: 0, hairColor: 0, eyes: 0, outfit: 0, outfitColor: 0, acc: 0, bg: 0, ...(cfg || {}) };
    const skin = skins[c.skin % skins.length];
    const hc = hairColors[c.hairColor % hairColors.length];
    const hair = hairs[c.hair % hairs.length];
    const eye = eyes[c.eyes % eyes.length];
    const id = 'av' + (++uid);
    const wrapHair = s => s && (s.trim().startsWith('<') ? s : `<path d="${s}"/>`);
    const hatHidesTop = c.acc === 4 || c.acc === 6;
    return `<svg class="avatar" width="${size}" height="${size}" viewBox="0 0 200 200" style="--skin:${skin}" role="img" aria-label="Nhân vật">
      <defs><clipPath id="${id}"><circle cx="100" cy="100" r="100"/></clipPath></defs>
      <g clip-path="url(#${id})">
        <rect width="200" height="200" fill="${bgs[c.bg % bgs.length]}"/>
        <g fill="${hc}">${wrapHair(hair.back) || ''}</g>
        <rect x="88" y="120" width="24" height="28" rx="8" fill="${shade(skin, -18)}"/>
        ${outfitSvg(c.outfit % outfits.length, outfitColors[c.outfitColor % outfitColors.length])}
        <circle cx="56" cy="96" r="9" fill="${skin}"/><circle cx="144" cy="96" r="9" fill="${skin}"/>
        <ellipse cx="100" cy="90" rx="46" ry="44" fill="${skin}"/>
        <ellipse cx="74" cy="108" rx="7" ry="4" fill="#F28B95" opacity=".45"/><ellipse cx="126" cy="108" rx="7" ry="4" fill="#F28B95" opacity=".45"/>
        <g fill="#2B1D16" stroke="#2B1D16">${eye.svg}</g>
        <path d="${eye.mouth}" fill="${eye.fillMouth ? '#B5403A' : 'none'}" stroke="#8A3A33" stroke-width="3" stroke-linecap="round"/>
        <g fill="${hc}">${hatHidesTop ? '' : (hair.extra || '')}${wrapHair(hair.front)}</g>
        ${accSvg(c.acc % accs.length, skin)}
      </g></svg>`;
  }

  function isUnlocked(lock) {
    if (!lock) return true;
    const stamps = State.stamps;
    if (lock.startsWith('stamp:')) return stamps.includes(lock.slice(6));
    if (lock === 'passport') return ['hoian', 'dalat', 'danang'].every(s => stamps.includes(s));
    if (lock === 'order') return State.orders.length > 0;
    if (lock === 'contest') return State.posts.some(p => p.mine && p.contest);
    return false;
  }

  function random() {
    const pick = (arr, filter) => {
      const idx = arr.map((x, i) => i).filter(i => !filter || isUnlocked(arr[i].lock));
      return idx[Math.floor(Math.random() * idx.length)];
    };
    const r = n => Math.floor(Math.random() * n);
    return { skin: r(skins.length), hair: r(hairs.length), hairColor: r(hairColors.length), eyes: r(eyes.length),
      outfit: pick(outfits, true), outfitColor: r(outfitColors.length), acc: pick(accs, true), bg: r(bgs.length) };
  }

  return { render, random, isUnlocked, skins, hairColors, outfitColors, bgs, hairs, eyes, outfits, accs };
})();
