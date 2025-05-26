import { useColor } from '@/hooks/useColor'
import { Tabs }     from 'expo-router'
import React        from 'react'

import { Ionicons } from '@expo/vector-icons'

export default function TabLayout ()
{
  const { backgroundTab } = useColor()

  return (
    <Tabs
      screenOptions={ {
        tabBarActiveTintColor: '#7BAFFF',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: backgroundTab,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 6
        },
        headerShadowVisible: true
      } }
    >
      {/*Main screens*/ }
      <Tabs.Screen
        name="index"
        options={ {
          title: 'Home',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="home" size={ size } color={ color }/>
          )
        } }
      />
      <Tabs.Screen
        name="event/index"
        options={ {
          title: 'Event',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="calendar" size={ size } color={ color }/>
          )
        } }
      />
      <Tabs.Screen
        name="store/index"
        options={ {
          title: 'Store',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="storefront" size={ size } color={ color }/>
          )
        } }
      />
      <Tabs.Screen
        name="forum/index"
        options={ {
          title: 'Forum',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="chatbubbles" size={ size } color={ color }/>
          )
        } }
      />
      <Tabs.Screen
        name="profile/index"
        options={ {
          title: 'Profile',
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="person" size={ size } color={ color }/>
          )
        } }
      />

      {/*Heading*/ }
      <Tabs.Screen
        name="cart/index"
        options={ {
          href: null
        } }
      />
      <Tabs.Screen
        name="favorite/index"
        options={ {
          href: null
        } }
      />

      {/*Auth*/ }
      <Tabs.Screen
        name="auth/index"
        options={ {
          href: null
        } }
      />
      <Tabs.Screen
        name="auth/login-with-email/index"
        options={ {
          href: null
        } }
      />
      <Tabs.Screen
        name="auth/register-with-email/index"
        options={ {
          href: null
        } }
      />
      <Tabs.Screen
        name="auth/forgot-password/index"
        options={ {
          href: null
        } }
      />
      <Tabs.Screen
        name="auth/otp-request/index"
        options={ {
          href: null
        } }
      />
    </Tabs>
  )
}
