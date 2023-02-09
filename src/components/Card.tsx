import React from 'react'
import { Text, View } from 'react-native';

export default function Card() {
  return (
    <View>
        <View className="container px-6 mx-auto grid">
            <Text className="my-6 text-2xl font-semibold text-gray-700">
                Dashboard
            </Text>

            <View className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <View className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <View className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                        
                    </View>
                    <View>
                        <Text className="mb-2 text-sm font-medium text-gray-600">
                            Total Users
                        </Text>
                        <Text className="text-lg font-semibold text-gray-700">
                            19238
                        </Text>
                    </View>
                </View>
            
            </View>
        </View>
    </View>

  )
}
