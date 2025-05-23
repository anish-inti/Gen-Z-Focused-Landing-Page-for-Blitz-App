import React from 'react';
import { Search, Users, MapPin, Calendar, Star, Zap, Share2 } from 'lucide-react';
export const SearchIcon = Search;
export const UsersIcon = Users;
export const MapPinIcon = MapPin;
export const CalendarIcon = Calendar;
export const StarIcon = Star;
export const ZapIcon = Zap;
export const ShareIcon = Share2;
export const SwipeIcon = (props: React.SVGProps<SVGSVGElement> & {
  size?: number;
}) => {
  const {
    size = 24,
    ...rest
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M14 8l-4 4 4 4" />
      <path d="M10 8l-4 4 4 4" />
      <path d="M18 8l-4 4 4 4" />
    </svg>;
};