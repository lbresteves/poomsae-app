import { useEffect, useState } from 'react';
import { PoomsaeName } from '../types/IPoomsaeCategory';
import { PoomsaeDrawer } from '../utils/PoomsaeDrawer';

export const usePoomsaeDraw = (category: string = 'Cadet') => {
  const [drawnPoomsaes, setDrawnPoomsaes] = useState<PoomsaeName[]>([]);

  const handleDraw = () => {
    const drawn = PoomsaeDrawer(category);
    setDrawnPoomsaes(drawn);
  };

  useEffect(() => {
    handleDraw();
  }, [category]);

  return {
    drawnPoomsaes,
    handleDraw,
  };
};
